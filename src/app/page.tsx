'use client';

import { useState, useEffect } from 'react';
import { 
  Sparkles, BookOpen, Trophy, Flame, Target, Clock, 
  ChevronRight, Play, CheckCircle2, Lock, Star,
  Award, TrendingUp, Zap, Brain, Heart, GraduationCap
} from 'lucide-react';
import { CATEGORIES, LESSONS, APP_NAME, APP_TAGLINE } from '@/lib/constants';
import { Lesson, MicroTopic } from '@/lib/types';
import { useUserProgress } from '@/hooks/useUserProgress';
import Navbar from '@/components/custom/Navbar';
import ProfileView from '@/components/custom/ProfileView';
import SettingsView from '@/components/custom/SettingsView';
import AchievementsView from '@/components/custom/AchievementsView';

export default function PilulaApp() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'lesson' | 'profile' | 'achievements' | 'settings'>('home');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [onboardingStep, setOnboardingStep] = useState(0);
  
  const { progress, completeLesson, updatePreferences } = useUserProgress();

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('pilula-onboarding-seen');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  useEffect(() => {
    // Aplicar dark mode no carregamento
    if (progress.preferences.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [progress.preferences.darkMode]);

  const finishOnboarding = () => {
    localStorage.setItem('pilula-onboarding-seen', 'true');
    setShowOnboarding(false);
  };

  const startLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentTopicIndex(0);
    setShowQuiz(false);
    setQuizAnswers([]);
    setCurrentView('lesson');
  };

  const nextTopic = () => {
    if (selectedLesson && currentTopicIndex < selectedLesson.topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const answerQuiz = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const finishLesson = () => {
    if (selectedLesson) {
      completeLesson(selectedLesson.id, selectedLesson.xpReward, selectedLesson.coinsReward);
      setCurrentView('home');
      setSelectedLesson(null);
    }
  };

  // ONBOARDING
  if (showOnboarding) {
    const onboardingSteps = [
      {
        icon: <Sparkles className="w-16 h-16 text-yellow-500" />,
        title: 'Bem-vindo ao Pílula!',
        description: 'Aprenda algo novo em apenas 10 minutos por dia',
        gradient: 'from-yellow-400 to-orange-500'
      },
      {
        icon: <Brain className="w-16 h-16 text-purple-500" />,
        title: 'Microaprendizagem',
        description: 'Lições curtas e objetivas que cabem na sua rotina',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: <Trophy className="w-16 h-16 text-green-500" />,
        title: 'Gamificação',
        description: 'Ganhe XP, moedas e conquistas enquanto aprende',
        gradient: 'from-green-400 to-emerald-600'
      },
      {
        icon: <Flame className="w-16 h-16 text-orange-500" />,
        title: 'Mantenha a Sequência',
        description: 'Estude todos os dias e construa um hábito poderoso',
        gradient: 'from-orange-400 to-red-500'
      }
    ];

    const currentStep = onboardingSteps[onboardingStep];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-fade-in">
          <div className="flex justify-center mb-6 animate-bounce-slow">
            {currentStep.icon}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {currentStep.title}
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            {currentStep.description}
          </p>

          <div className="flex gap-2 justify-center mb-8">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === onboardingStep 
                    ? 'w-8 bg-gradient-to-r ' + currentStep.gradient
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {onboardingStep < onboardingSteps.length - 1 ? (
            <button
              onClick={() => setOnboardingStep(onboardingStep + 1)}
              className={`w-full bg-gradient-to-r ${currentStep.gradient} text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Continuar
            </button>
          ) : (
            <button
              onClick={finishOnboarding}
              className={`w-full bg-gradient-to-r ${currentStep.gradient} text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Começar a Aprender!
            </button>
          )}
        </div>
      </div>
    );
  }

  // PROFILE VIEW
  if (currentView === 'profile') {
    return (
      <>
        <Navbar currentView={currentView} onViewChange={setCurrentView} />
        <ProfileView progress={progress} />
      </>
    );
  }

  // ACHIEVEMENTS VIEW
  if (currentView === 'achievements') {
    return (
      <>
        <Navbar currentView={currentView} onViewChange={setCurrentView} />
        <AchievementsView progress={progress} />
      </>
    );
  }

  // SETTINGS VIEW
  if (currentView === 'settings') {
    return (
      <>
        <Navbar currentView={currentView} onViewChange={setCurrentView} />
        <SettingsView progress={progress} onUpdatePreferences={updatePreferences} />
      </>
    );
  }

  // LESSON VIEW
  if (currentView === 'lesson' && selectedLesson) {
    if (showQuiz) {
      const correctAnswers = quizAnswers.filter(
        (answer, index) => answer === selectedLesson.quiz[index].correctAnswer
      ).length;
      const allAnswered = quizAnswers.length === selectedLesson.quiz.length;

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 animate-slide-down">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quiz Final</h2>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">
                    {correctAnswers}/{selectedLesson.quiz.length}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(quizAnswers.length / selectedLesson.quiz.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {selectedLesson.quiz.map((question, qIndex) => {
                const answered = quizAnswers[qIndex] !== undefined;
                const isCorrect = answered && quizAnswers[qIndex] === question.correctAnswer;

                return (
                  <div key={question.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-slide-up">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {qIndex + 1}
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
                        {question.question}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {question.options.map((option, oIndex) => {
                        const isSelected = quizAnswers[qIndex] === oIndex;
                        const isCorrectOption = oIndex === question.correctAnswer;
                        
                        let bgColor = 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700';
                        if (answered) {
                          if (isCorrectOption) {
                            bgColor = 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500';
                          } else if (isSelected && !isCorrect) {
                            bgColor = 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500';
                          }
                        } else if (isSelected) {
                          bgColor = 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500';
                        }

                        return (
                          <button
                            key={oIndex}
                            onClick={() => !answered && answerQuiz(qIndex, oIndex)}
                            disabled={answered}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${bgColor} ${
                              !answered ? 'cursor-pointer hover:scale-102' : 'cursor-default'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white">{option}</span>
                              {answered && isCorrectOption && (
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {answered && (
                      <div className={`mt-4 p-4 rounded-xl animate-fade-in ${
                        isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
                      }`}>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <strong>Explicação:</strong> {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {allAnswered && (
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-scale-in">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-3 animate-bounce-slow">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Lição Concluída!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Você acertou {correctAnswers} de {selectedLesson.quiz.length} questões
                  </p>
                  <div className="flex gap-4 justify-center mb-4">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                      <Zap className="w-5 h-5" />
                      <span className="font-semibold">+{selectedLesson.xpReward} XP</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                      <Star className="w-5 h-5" />
                      <span className="font-semibold">+{selectedLesson.coinsReward} moedas</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={finishLesson}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Voltar para Home
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    const currentTopic = selectedLesson.topics[currentTopicIndex];
    const progressPercent = ((currentTopicIndex + 1) / selectedLesson.topics.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 animate-slide-down">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedLesson.title}</h2>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{selectedLesson.duration} min</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tópico {currentTopicIndex + 1} de {selectedLesson.topics.length}
            </p>
          </div>

          {/* Topic Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {currentTopic.title}
            </h3>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {currentTopic.content}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                setCurrentView('home');
                setSelectedLesson(null);
              }}
              className="px-6 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Sair
            </button>
            <button
              onClick={nextTopic}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {currentTopicIndex < selectedLesson.topics.length - 1 ? 'Próximo Tópico' : 'Ir para Quiz'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // HOME VIEW
  return (
    <>
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 sm:p-8 animate-slide-down">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{APP_NAME}</h1>
                <p className="text-purple-100">{APP_TAGLINE}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <Zap className="w-5 h-5" />
                  <span className="text-xl font-bold">{progress.totalXP} XP</span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <Star className="w-5 h-5" />
                  <span className="text-xl font-bold">{progress.totalCoins} moedas</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                <Flame className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progress.currentStreak}</div>
                <div className="text-sm text-purple-100">dias seguidos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                <Trophy className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">Nível {progress.level}</div>
                <div className="text-sm text-purple-100">experiência</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                <BookOpen className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progress.completedLessons.length}</div>
                <div className="text-sm text-purple-100">lições</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Explore por Tema
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {CATEGORIES.map((category) => {
              const categoryLessons = LESSONS.filter(l => l.category === category.id);
              const completedCount = categoryLessons.filter(l => 
                progress.completedLessons.includes(l.id)
              ).length;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    const firstLesson = categoryLessons[0];
                    if (firstLesson) {
                      startLesson(firstLesson);
                    }
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon === 'GraduationCap' ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : (
                      <div className="text-white text-2xl">
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
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{category.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{completedCount}/{categoryLessons.length} lições</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lessons */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Todas as Lições
          </h2>

          <div className="grid gap-4">
            {LESSONS.map((lesson) => {
              const isCompleted = progress.completedLessons.includes(lesson.id);
              const category = CATEGORIES.find(c => c.id === lesson.category);

              return (
                <div
                  key={lesson.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${category?.gradient} flex items-center justify-center`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                            {lesson.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${category?.gradient} text-white font-medium`}>
                          {category?.name}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          {lesson.duration} min
                        </span>
                        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <Target className="w-4 h-4" />
                          {lesson.difficulty}
                        </span>
                        <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                          <Zap className="w-4 h-4" />
                          +{lesson.xpReward} XP
                        </span>
                        <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                          <Star className="w-4 h-4" />
                          +{lesson.coinsReward} moedas
                        </span>
                      </div>

                      <button
                        onClick={() => startLesson(lesson)}
                        disabled={isCompleted}
                        className={`mt-4 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                          isCompleted
                            ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            Concluída
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5" />
                            Começar Lição
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
