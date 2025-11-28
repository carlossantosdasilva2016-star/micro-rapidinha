'use client';

import { UserProgress } from '@/lib/types';
import { CATEGORIES, LESSONS } from '@/lib/constants';
import { 
  User, Mail, Calendar, Flame, Trophy, Zap, Star, 
  TrendingUp, BookOpen, Target, Award, Clock
} from 'lucide-react';

interface ProfileViewProps {
  progress: UserProgress;
}

export default function ProfileView({ progress }: ProfileViewProps) {
  // Calcular estatísticas
  const totalMinutesLearned = progress.completedLessons.length * 9; // média de 9 min por lição
  const hoursLearned = Math.floor(totalMinutesLearned / 60);
  const minutesRemaining = totalMinutesLearned % 60;
  
  const categoriesCompleted = new Set(
    progress.completedLessons.map(id => {
      const lesson = LESSONS.find(l => l.id === id);
      return lesson?.category;
    })
  ).size;

  const nextLevelXP = (progress.level * 500);
  const currentLevelXP = ((progress.level - 1) * 500);
  const xpProgress = ((progress.totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  // Estatísticas por categoria
  const categoryStats = CATEGORIES.map(category => {
    const categoryLessons = LESSONS.filter(l => l.category === category.id);
    const completed = categoryLessons.filter(l => 
      progress.completedLessons.includes(l.id)
    ).length;
    const percentage = categoryLessons.length > 0 
      ? (completed / categoryLessons.length) * 100 
      : 0;

    return {
      ...category,
      completed,
      total: categoryLessons.length,
      percentage
    };
  }).sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pb-20 pt-20 md:pt-6">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Header do Perfil */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              <User className="w-12 h-12" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Estudante Pílula
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Membro desde {new Date(progress.lastAccessDate).toLocaleDateString('pt-BR')}
              </p>
              
              {/* Nível e XP */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Nível {progress.level}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {progress.totalXP} / {nextLevelXP} XP
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-4 text-center">
              <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {progress.currentStreak}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">dias seguidos</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-4 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {progress.completedLessons.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">lições completas</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-4 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {progress.totalCoins}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">moedas</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {hoursLearned}h {minutesRemaining}m
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">tempo estudado</div>
            </div>
          </div>
        </div>

        {/* Progresso por Categoria */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Progresso por Tema
          </h2>

          <div className="space-y-4">
            {categoryStats.map((category) => (
              <div key={category.id} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-lg`}>
                      {category.icon === 'Palette' && '🎨'}
                      {category.icon === 'Calculator' && '🔢'}
                      {category.icon === 'Brain' && '🧠'}
                      {category.icon === 'Landmark' && '🏛️'}
                      {category.icon === 'BarChart3' && '📊'}
                      {category.icon === 'TrendingUp' && '💰'}
                      {category.icon === 'Lightbulb' && '💡'}
                      {category.icon === 'Leaf' && '🌿'}
                      {category.icon === 'BookOpen' && '📚'}
                      {category.icon === 'Cpu' && '💻'}
                      {category.icon === 'Users' && '🤝'}
                      {category.icon === 'Sparkles' && '✨'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.completed} de {category.total} lições
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {Math.round(category.percentage)}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-500 group-hover:scale-105`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas Recentes */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-600" />
            Conquistas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {progress.completedLessons.length >= 1 && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-4 border-2 border-yellow-400 dark:border-yellow-600">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Primeira Pílula</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completou a primeira lição</p>
                  </div>
                </div>
              </div>
            )}

            {progress.currentStreak >= 7 && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-4 border-2 border-orange-400 dark:border-orange-600">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Semana Dedicada</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">7 dias de sequência</p>
                  </div>
                </div>
              </div>
            )}

            {categoriesCompleted >= 5 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 border-2 border-purple-400 dark:border-purple-600">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Polímata</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">5 categorias diferentes</p>
                  </div>
                </div>
              </div>
            )}

            {progress.completedLessons.length >= 10 && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border-2 border-blue-400 dark:border-blue-600">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Estudante Dedicado</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">10 lições completas</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
