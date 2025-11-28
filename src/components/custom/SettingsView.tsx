'use client';

import { UserProgress } from '@/lib/types';
import { Moon, Sun, Bell, BellOff, Globe, Palette, Clock, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SettingsViewProps {
  progress: UserProgress;
  onUpdatePreferences: (prefs: Partial<UserProgress['preferences']>) => void;
}

export default function SettingsView({ progress, onUpdatePreferences }: SettingsViewProps) {
  const [darkMode, setDarkMode] = useState(progress.preferences.darkMode);
  const [notifications, setNotifications] = useState(progress.preferences.notificationsEnabled);
  const [dailyGoal, setDailyGoal] = useState(progress.preferences.dailyGoal);

  useEffect(() => {
    // Aplicar dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    onUpdatePreferences({ darkMode: newValue });
  };

  const handleNotificationsToggle = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    onUpdatePreferences({ notificationsEnabled: newValue });
    
    if (newValue && 'Notification' in window) {
      Notification.requestPermission();
    }
  };

  const handleDailyGoalChange = (minutes: number) => {
    setDailyGoal(minutes);
    onUpdatePreferences({ dailyGoal: minutes });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pb-20 pt-20 md:pt-6">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Configurações
        </h1>

        {/* Aparência */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6 text-purple-600" />
            Aparência
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="w-6 h-6 text-purple-600" />
                ) : (
                  <Sun className="w-6 h-6 text-yellow-500" />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Modo Escuro
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tema escuro para estudar à noite
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleDarkModeToggle}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  darkMode ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notificações */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6 text-purple-600" />
            Notificações
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="flex items-center gap-3">
                {notifications ? (
                  <Bell className="w-6 h-6 text-purple-600" />
                ) : (
                  <BellOff className="w-6 h-6 text-gray-400" />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Lembretes Diários
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receba lembretes para estudar
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleNotificationsToggle}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  notifications ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {notifications && (
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  💡 <strong>Dica:</strong> Escolha um horário fixo para estudar e transforme em hábito!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Meta Diária */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Meta Diária
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Tempo de Estudo
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {dailyGoal} minutos por dia
                    </p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-purple-600">
                  {dailyGoal}min
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={dailyGoal}
                onChange={(e) => handleDailyGoalChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />

              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                <span>5 min</span>
                <span>30 min</span>
                <span>60 min</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[10, 20, 30].map((minutes) => (
                <button
                  key={minutes}
                  onClick={() => handleDailyGoalChange(minutes)}
                  className={`py-3 rounded-xl font-semibold transition-all ${
                    dailyGoal === minutes
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {minutes} min
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sobre */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />
            Sobre o Pílula
          </h2>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Versão:</strong> 1.0.0
            </p>
            <p>
              <strong>Idioma:</strong> Português (Brasil)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pílula é um aplicativo de microaprendizagem que te ajuda a aprender algo novo 
              em apenas 10 minutos por dia. Transforme momentos ociosos em conhecimento!
            </p>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">
              💜 Feito com carinho para estudantes brasileiros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
