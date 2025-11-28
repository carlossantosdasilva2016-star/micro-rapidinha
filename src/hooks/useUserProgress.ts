'use client';

import { useState, useEffect } from 'react';
import { UserProgress } from '@/lib/types';

const STORAGE_KEY = 'pilula-user-progress';

const initialProgress: UserProgress = {
  completedLessons: [],
  currentStreak: 0,
  totalXP: 0,
  totalCoins: 0,
  level: 1,
  achievements: [],
  lastAccessDate: new Date().toISOString().split('T')[0],
  preferences: {
    favoriteCategories: [],
    dailyGoal: 10,
    notificationsEnabled: true,
    darkMode: false
  }
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar progresso do localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProgress(parsed);
      
      // Atualizar streak
      const today = new Date().toISOString().split('T')[0];
      const lastAccess = new Date(parsed.lastAccessDate);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate.getTime() - lastAccess.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Continua streak
        parsed.currentStreak += 1;
      } else if (diffDays > 1) {
        // Perdeu streak
        parsed.currentStreak = 1;
      }
      
      parsed.lastAccessDate = today;
      setProgress(parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    setIsLoading(false);
  }, []);

  const completeLesson = (lessonId: string, xp: number, coins: number) => {
    const updated = {
      ...progress,
      completedLessons: [...progress.completedLessons, lessonId],
      totalXP: progress.totalXP + xp,
      totalCoins: progress.totalCoins + coins,
      level: Math.floor((progress.totalXP + xp) / 500) + 1
    };
    
    setProgress(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const updatePreferences = (prefs: Partial<UserProgress['preferences']>) => {
    const updated = {
      ...progress,
      preferences: { ...progress.preferences, ...prefs }
    };
    setProgress(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    progress,
    isLoading,
    completeLesson,
    updatePreferences
  };
}
