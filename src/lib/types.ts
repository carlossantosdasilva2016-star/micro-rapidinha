// Types para o app Pílula - Microaprendizagem

export type ThemeCategory = 
  | 'enem'
  | 'arte'
  | 'matematica'
  | 'logica'
  | 'historia'
  | 'estatistica'
  | 'financas'
  | 'filosofia'
  | 'biologia'
  | 'literatura'
  | 'tecnologia'
  | 'softskills'
  | 'curiosidades';

export interface MicroTopic {
  id: string;
  title: string;
  content: string;
  duration: number; // em segundos
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: ThemeCategory;
  description: string;
  duration: number; // em minutos
  difficulty: 'iniciante' | 'intermediário' | 'avançado';
  topics: MicroTopic[];
  quiz: QuizQuestion[];
  xpReward: number;
  coinsReward: number;
}

export interface UserProgress {
  completedLessons: string[];
  currentStreak: number;
  totalXP: number;
  totalCoins: number;
  level: number;
  achievements: string[];
  lastAccessDate: string;
  preferences: {
    favoriteCategories: ThemeCategory[];
    dailyGoal: number; // minutos por dia
    notificationsEnabled: boolean;
    darkMode: boolean;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  unlocked: boolean;
}

export interface CategoryInfo {
  id: ThemeCategory;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
}
