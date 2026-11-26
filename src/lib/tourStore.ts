'use client';

import { useEffect, useState } from 'react';
import { TOURS, Tour } from '@/data/tours';

const STORAGE_KEY = 'viehora_custom_tours_v3';
const UPDATE_EVENT = 'viehora-tours-updated';

export function loadToursFromStorage(): Tour[] {
  if (typeof window === 'undefined') return TOURS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return TOURS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : TOURS;
  } catch {
    return TOURS;
  }
}

export function saveToursToStorage(tours: Tour[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tours));
    window.dispatchEvent(new Event(UPDATE_EVENT));
  } catch (err) {
    console.error('Failed to save tours to localStorage:', err);
  }
}

export function addOrUpdateTour(tour: Tour): Tour[] {
  const current = loadToursFromStorage();
  const idx = current.findIndex((t) => t.id === tour.id || t.slug === tour.slug);
  let next: Tour[];
  if (idx >= 0) {
    next = [...current];
    next[idx] = tour;
  } else {
    next = [tour, ...current];
  }
  saveToursToStorage(next);
  return next;
}

export function deleteTourById(id: number): Tour[] {
  const current = loadToursFromStorage();
  const next = current.filter((t) => t.id !== id);
  saveToursToStorage(next);
  return next;
}

export function useTours() {
  const [tours, setTours] = useState<Tour[]>(TOURS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const sync = () => {
      setTours(loadToursFromStorage());
      setHydrated(true);
    };
    sync();
    window.addEventListener(UPDATE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(UPDATE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return { tours, hydrated };
}
