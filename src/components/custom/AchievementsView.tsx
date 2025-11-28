'use client';

import { UserProgress } from '@/lib/types';
import { CATEGORIES, LESSONS } from '@/lib/constants';
import { Trophy, Star, Flame, Target, Award, Lock, CheckCircle2, Zap } from 'lucide-react';

interface AchievementsViewProps {
  progress: UserProgress;
}

export default function AchievementsView({ progress }: AchievementsViewProps) {
  const achievements = [
    {
      id: 'first-lesson',
      title: 'Primeira Pílula',
      description: 'Complete sua primeira lição',
      icon: Trophy,
      requirement: 1,
      current: progress.completedLessons.length,
      gradient: 'from-yellow-400 to-orange-500',
      unlocked: progress.completedLessons.length >= 1
    },
    {
      id: 'five-lessons',
      title: 'Aprendiz Dedicado',
      description: 'Complete 5 lições',
      icon: Star,
      requirement: 5,
      current: progress.completedLessons.length,
      gradient: 'from-blue-400 to-cyan-500',
      unlocked: progress.completedLessons.length >= 5
    },
    {
      id: 'ten-lessons',
      title: 'Estudante Comprometido',
      description: 'Complete 10 lições',
      icon: Award,
      requirement: 10,
      current: progress.completedLessons.length,
      gradient: 'from-purple-400 to-pink-500',
      unlocked: progress.completedLessons.length >= 10
    },
    {
      id: 'week-streak',
      title: 'Semana Dedicada',
      description: 'Mantenha 7 dias de sequência',
      icon: Flame,
      requirement: 7,
      current: progress.currentStreak,
      gradient: 'from-orange-400 to-red-500',
      unlocked: progress.currentStreak >= 7
    },
    {
      id: 'month-streak',
      title: 'Mestre da Consistência',
      description: 'Mantenha 30 dias de sequência',
      icon: Flame,
      requirement: 30,
      current: progress.currentStreak,
      gradient: 'from-red-500 to-pink-600',
      unlocked: progress.currentStreak >= 30
    },
    {
      id: 'polymath',
      title: 'Polímata',
      description: 'Complete lições em 5 categorias diferentes',
      icon: Target,
      requirement: 5,
      current: new Set(
        progress.completedLessons.map(id => {
          const lesson = LESSONS.find(l => l.id === id);
          return lesson?.category;
        })
      ).size,
      gradient: 'from-green-400 to-emerald-600',
      unlocked: new Set(
        progress.completedLessons.map(id => {
          const lesson = LESSONS.find(l => l.id === id);
          return lesson?.category;
        })
      ).size >= 5
    },
    {
      id: 'all-categories',
      title: 'Conhecimento Universal',
      description: 'Complete lições em todas as categorias',
      icon: Trophy,
      requirement: CATEGORIES.length,
      current: new Set(
        progress.completedLessons.map(id => {
          const lesson = LESSONS.find(l => l.id === id);
          return lesson?.category;
        })
      ).size,
      gradient: 'from-indigo-500 to-purple-600',
      unlocked: new Set(
        progress.completedLessons.map(id => {
          const lesson = LESSONS.find(l => l.id === id);
          return lesson?.category;
        })
      ).size >= CATEGORIES.length
    },
    {
      id: 'xp-master',
      title: 'Mestre do XP',
      description: 'Alcance 1000 XP',
      icon: Zap,
      requirement: 1000,
      current: progress.totalXP,
      gradient: 'from-yellow-500 to-orange-600',
      unlocked: progress.totalXP >= 1000
    },
    {
      id: 'coin-collector',
      title: 'Colecionador de Moedas',
      description: 'Acumule 500 moedas',
      icon: Star,
      requirement: 500,
      current: progress.totalCoins,
      gradient: 'from-amber-400 to-yellow-600',
      unlocked: progress.totalCoins >= 500
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = (unlockedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pb-20 pt-20 md:pt-6">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Conquistas
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {unlockedCount} de {totalCount} desbloqueadas
              </p>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
            {Math.round(completionPercentage)}% completo
          </p>
        </div>

        {/* Conquistas */}
        <div className="grid gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const progress = Math.min((achievement.current / achievement.requirement) * 100, 100);

            return (
              <div
                key={achievement.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 transition-all ${
                  achievement.unlocked 
                    ? 'border-2 border-yellow-400 dark:border-yellow-600' 
                    : 'opacity-75'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center relative`}>
                    {achievement.unlocked ? (
                      <>
                        <Icon className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      </>
                    ) : (
                      <Lock className="w-8 h-8 text-white opacity-50" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.unlocked && (
                        <div className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full">
                          Desbloqueada!
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          Progresso
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {achievement.current} / {achievement.requirement}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${achievement.gradient} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivação */}
        <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-xl p-8 text-center text-white">
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Continue Aprendendo!</h2>
          <p className="text-purple-100">
            Cada lição completa te aproxima de novas conquistas. 
            {unlockedCount < totalCount && ` Faltam ${totalCount - unlockedCount} para desbloquear todas!`}
          </p>
        </div>
      </div>
    </div>
  );
}
