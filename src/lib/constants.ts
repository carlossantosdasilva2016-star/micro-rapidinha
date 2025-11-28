// Dados do app Pílula - Microaprendizagem

import { CategoryInfo, Lesson } from './types';

export const APP_NAME = 'Pílula';
export const APP_TAGLINE = 'Conhecimento em doses diárias';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'enem',
    name: 'ENEM',
    icon: 'GraduationCap',
    color: '#16A34A',
    gradient: 'from-green-600 to-emerald-700',
    description: 'Prepare-se para o ENEM com lições estratégicas'
  },
  {
    id: 'arte',
    name: 'Arte',
    icon: 'Palette',
    color: '#FF6B9D',
    gradient: 'from-pink-400 to-rose-600',
    description: 'Explore movimentos artísticos e obras icônicas'
  },
  {
    id: 'matematica',
    name: 'Matemática',
    icon: 'Calculator',
    color: '#4F46E5',
    gradient: 'from-indigo-500 to-purple-600',
    description: 'Domine conceitos matemáticos do dia a dia'
  },
  {
    id: 'logica',
    name: 'Lógica',
    icon: 'Brain',
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-purple-600',
    description: 'Desenvolva raciocínio lógico e resolução de problemas'
  },
  {
    id: 'historia',
    name: 'História',
    icon: 'Landmark',
    color: '#D97706',
    gradient: 'from-amber-500 to-orange-600',
    description: 'Viaje no tempo e entenda o passado'
  },
  {
    id: 'estatistica',
    name: 'Estatística',
    icon: 'BarChart3',
    color: '#0891B2',
    gradient: 'from-cyan-500 to-blue-600',
    description: 'Interprete dados e tome decisões informadas'
  },
  {
    id: 'financas',
    name: 'Finanças',
    icon: 'TrendingUp',
    color: '#10B981',
    gradient: 'from-emerald-500 to-green-600',
    description: 'Organize suas finanças e invista melhor'
  },
  {
    id: 'filosofia',
    name: 'Filosofia',
    icon: 'Lightbulb',
    color: '#7C3AED',
    gradient: 'from-purple-500 to-indigo-600',
    description: 'Questione e reflita sobre a existência'
  },
  {
    id: 'biologia',
    name: 'Biologia',
    icon: 'Leaf',
    color: '#059669',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Entenda a vida em todas as suas formas'
  },
  {
    id: 'literatura',
    name: 'Literatura',
    icon: 'BookOpen',
    color: '#DC2626',
    gradient: 'from-red-500 to-pink-600',
    description: 'Descubra obras e autores brasileiros'
  },
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    icon: 'Cpu',
    color: '#2563EB',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Entenda o mundo digital e inovações'
  },
  {
    id: 'softskills',
    name: 'Soft Skills',
    icon: 'Users',
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-600',
    description: 'Desenvolva habilidades interpessoais'
  },
  {
    id: 'curiosidades',
    name: 'Curiosidades',
    icon: 'Sparkles',
    color: '#F59E0B',
    gradient: 'from-yellow-500 to-orange-600',
    description: 'Fatos fascinantes sobre tudo'
  }
];

export const LESSONS: Lesson[] = [
  // ENEM - REDAÇÃO
  {
    id: 'enem-001',
    title: 'Redação ENEM: Estrutura Dissertativa',
    category: 'enem',
    description: 'Domine a estrutura perfeita para tirar 1000 na redação',
    duration: 10,
    difficulty: 'intermediário',
    xpReward: 80,
    coinsReward: 15,
    topics: [
      {
        id: 'enem-001-t1',
        title: 'As 5 Competências do ENEM',
        content: 'C1: Domínio da norma culta (200 pts) - gramática, ortografia, pontuação. C2: Compreender a proposta (200 pts) - não fugir do tema. C3: Argumentação (200 pts) - defender seu ponto com repertório sociocultural. C4: Coesão (200 pts) - conectivos e progressão textual. C5: Proposta de intervenção (200 pts) - solução detalhada com 5 elementos. Total: 1000 pontos.',
        duration: 200
      },
      {
        id: 'enem-001-t2',
        title: 'Estrutura Clássica',
        content: 'INTRODUÇÃO (7-8 linhas): Contextualize o tema + Tese (sua opinião). Use repertório logo aqui! DESENVOLVIMENTO 1 (7-8 linhas): Argumento 1 + Dados/exemplos + Análise crítica. DESENVOLVIMENTO 2 (7-8 linhas): Argumento 2 + Dados/exemplos + Análise crítica. CONCLUSÃO (7-8 linhas): Retome a tese + Proposta de intervenção completa (Agente + Ação + Meio + Finalidade + Detalhamento).',
        duration: 200
      },
      {
        id: 'enem-001-t3',
        title: 'Proposta de Intervenção Nota 1000',
        content: 'Precisa ter 5 elementos: 1) AGENTE: quem vai fazer? (Governo, escolas, ONGs, mídia). 2) AÇÃO: o que fazer? (Criar campanhas, implementar leis). 3) MEIO/MODO: como fazer? (Por meio de palestras, através de verbas). 4) FINALIDADE: para quê? (A fim de conscientizar, com o objetivo de reduzir). 5) DETALHAMENTO: detalhe um elemento. Exemplo: "O Ministério da Educação (agente) deve implementar aulas de educação financeira (ação) por meio da Base Nacional Comum Curricular (meio), a fim de formar cidadãos conscientes (finalidade), com carga horária de 2h semanais no ensino médio (detalhamento)."',
        duration: 200
      }
    ],
    quiz: [
      {
        id: 'enem-001-q1',
        question: 'Quantos pontos vale cada competência da redação do ENEM?',
        options: ['100 pontos', '150 pontos', '200 pontos', '250 pontos'],
        correctAnswer: 2,
        explanation: 'Cada uma das 5 competências vale 200 pontos, totalizando 1000 pontos.'
      },
      {
        id: 'enem-001-q2',
        question: 'Quantos elementos obrigatórios tem uma proposta de intervenção nota 1000?',
        options: ['3 elementos', '4 elementos', '5 elementos', '6 elementos'],
        correctAnswer: 2,
        explanation: 'São 5 elementos: Agente, Ação, Meio, Finalidade e Detalhamento.'
      },
      {
        id: 'enem-001-q3',
        question: 'Qual competência avalia a proposta de intervenção?',
        options: ['Competência 1', 'Competência 3', 'Competência 4', 'Competência 5'],
        correctAnswer: 3,
        explanation: 'A Competência 5 avalia a proposta de intervenção social respeitando os direitos humanos.'
      }
    ]
  },

  // ENEM - LINGUAGENS
  {
    id: 'enem-002',
    title: 'Funções da Linguagem no ENEM',
    category: 'enem',
    description: 'Identifique as 6 funções da linguagem em textos',
    duration: 9,
    difficulty: 'intermediário',
    xpReward: 70,
    coinsReward: 14,
    topics: [
      {
        id: 'enem-002-t1',
        title: 'As 6 Funções',
        content: 'REFERENCIAL (informativa): foco na mensagem, linguagem objetiva. Ex: notícias, textos científicos. EMOTIVA (expressiva): foco no emissor, expressa sentimentos. Ex: diário, poesia lírica. CONATIVA (apelativa): foco no receptor, persuade. Ex: propaganda, comandos. FÁTICA: foco no canal, testa comunicação. Ex: "Alô?", "Tá me ouvindo?". METALINGUÍSTICA: foco no código, explica a própria linguagem. Ex: dicionário, gramática. POÉTICA: foco na forma da mensagem, linguagem criativa. Ex: poesia, literatura.',
        duration: 180
      },
      {
        id: 'enem-002-t2',
        title: 'Identificando no ENEM',
        content: 'O ENEM adora misturar funções! Propaganda: CONATIVA (persuade) + POÉTICA (linguagem criativa). Poema sobre poesia: POÉTICA + METALINGUÍSTICA. Dica: identifique o FOCO principal. Pergunta-chave: qual elemento da comunicação está em destaque? Emissor = emotiva. Receptor = conativa. Mensagem = referencial ou poética. Canal = fática. Código = metalinguística.',
        duration: 180
      },
      {
        id: 'enem-002-t3',
        title: 'Exemplos Práticos',
        content: 'REFERENCIAL: "A taxa Selic está em 11,75% ao ano." (informação objetiva). EMOTIVA: "Ah, como eu amo essa cidade!" (sentimento do emissor). CONATIVA: "Compre já! Não perca essa oferta!" (persuade o receptor). FÁTICA: "Oi, tudo bem? Você está me ouvindo?" (testa o canal). METALINGUÍSTICA: "Verbo é a palavra que indica ação." (explica o código). POÉTICA: "No meio do caminho tinha uma pedra" (foco na forma artística).',
        duration: 180
      }
    ],
    quiz: [
      {
        id: 'enem-002-q1',
        question: 'Qual função predomina em: "Compre agora e ganhe 50% de desconto!"?',
        options: ['Referencial', 'Emotiva', 'Conativa', 'Fática'],
        correctAnswer: 2,
        explanation: 'Função conativa (apelativa) - foco no receptor, busca persuadir/convencer.'
      },
      {
        id: 'enem-002-q2',
        question: 'Qual função está em: "Alô? Você está me ouvindo?"?',
        options: ['Fática', 'Emotiva', 'Referencial', 'Metalinguística'],
        correctAnswer: 0,
        explanation: 'Função fática - testa o canal de comunicação, verifica se está funcionando.'
      },
      {
        id: 'enem-002-q3',
        question: 'Qual o foco da função metalinguística?',
        options: ['Emissor', 'Receptor', 'Código', 'Canal'],
        correctAnswer: 2,
        explanation: 'Função metalinguística tem foco no código - a linguagem explicando a própria linguagem.'
      }
    ]
  },

  // ENEM - MATEMÁTICA
  {
    id: 'enem-003',
    title: 'Regra de Três: Simples e Composta',
    category: 'enem',
    description: 'Resolva problemas de proporcionalidade no ENEM',
    duration: 10,
    difficulty: 'intermediário',
    xpReward: 70,
    coinsReward: 14,
    topics: [
      {
        id: 'enem-003-t1',
        title: 'Regra de Três Simples',
        content: 'Relaciona DUAS grandezas proporcionais. Exemplo: 5 pedreiros constroem um muro em 12 dias. Quantos dias levam 3 pedreiros? PASSO 1: Monte a proporção: 5 pedreiros --- 12 dias / 3 pedreiros --- X dias. PASSO 2: Verifique se é direta ou inversa. Menos pedreiros = mais dias (INVERSA). PASSO 3: Inverta uma coluna: 3 pedreiros --- 12 dias / 5 pedreiros --- X dias. PASSO 4: Multiplique cruzado: 3X = 5×12 → 3X = 60 → X = 20 dias.',
        duration: 200
      },
      {
        id: 'enem-003-t2',
        title: 'Direta ou Inversa?',
        content: 'DIRETA: aumenta um, aumenta outro. Ex: mais combustível = mais quilômetros. INVERSA: aumenta um, diminui outro. Ex: mais velocidade = menos tempo. DICA INFALÍVEL: Faça a pergunta: "Se eu DOBRAR a primeira grandeza, o que acontece com a segunda?" Dobra também = DIRETA. Cai pela metade = INVERSA. Exemplo: dobrar velocidade, tempo cai pela metade (INVERSA).',
        duration: 180
      },
      {
        id: 'enem-003-t3',
        title: 'Regra de Três Composta',
        content: 'Relaciona TRÊS ou mais grandezas. Exemplo: 4 máquinas produzem 100 peças em 5 horas. Quantas peças produzem 6 máquinas em 8 horas? PASSO 1: Isole a incógnita (peças = X). PASSO 2: Compare cada grandeza com X: Mais máquinas = mais peças (DIRETA). Mais horas = mais peças (DIRETA). PASSO 3: Monte: X/100 = (6/4) × (8/5). PASSO 4: X = 100 × 1,5 × 1,6 = 240 peças.',
        duration: 200
      }
    ],
    quiz: [
      {
        id: 'enem-003-q1',
        question: 'Se 3 torneiras enchem uma piscina em 6 horas, quantas horas levam 2 torneiras?',
        options: ['4 horas', '6 horas', '8 horas', '9 horas'],
        correctAnswer: 3,
        explanation: 'Menos torneiras = mais tempo (INVERSA). 2X = 3×6 → X = 9 horas.'
      },
      {
        id: 'enem-003-q2',
        question: 'Qual tipo de proporção: "Mais velocidade, menos tempo"?',
        options: ['Direta', 'Inversa', 'Composta', 'Nenhuma'],
        correctAnswer: 1,
        explanation: 'Inversamente proporcional - quando uma grandeza aumenta, a outra diminui.'
      },
      {
        id: 'enem-003-q3',
        question: 'Quando usar regra de três composta?',
        options: ['2 grandezas', '3 ou mais grandezas', 'Apenas porcentagem', 'Nunca'],
        correctAnswer: 1,
        explanation: 'Regra de três composta é usada quando há 3 ou mais grandezas relacionadas.'
      }
    ]
  },

  // ENEM - CIÊNCIAS HUMANAS
  {
    id: 'enem-004',
    title: 'Geopolítica: Conflitos Contemporâneos',
    category: 'enem',
    description: 'Entenda os principais conflitos mundiais para o ENEM',
    duration: 10,
    difficulty: 'avançado',
    xpReward: 80,
    coinsReward: 16,
    topics: [
      {
        id: 'enem-004-t1',
        title: 'Oriente Médio: Raízes dos Conflitos',
        content: 'Conflito Israel-Palestina: disputa territorial desde 1948 (criação de Israel). Palestinos reivindicam terra onde viviam há séculos. Israel alega direito histórico-religioso. Questões-chave: Jerusalém (sagrada para 3 religiões), refugiados palestinos, assentamentos israelenses, Faixa de Gaza. ENEM cobra: causas históricas, atores envolvidos (Hamas, OLP, ONU), impactos humanitários. Não cobra "quem está certo" - cobra compreensão do conflito.',
        duration: 200
      },
      {
        id: 'enem-004-t2',
        title: 'Guerra Fria e Legados',
        content: 'Guerra Fria (1947-1991): EUA (capitalismo) vs URSS (socialismo). Não houve guerra direta - disputas por influência global. Legados atuais: Coreia dividida (Norte socialista, Sul capitalista), Cuba socialista isolada, conflitos na África e Ásia. ENEM adora: corrida armamentista, corrida espacial, Muro de Berlim, Revolução Cubana, Guerra do Vietnã. Conceito-chave: bipolarização do mundo.',
        duration: 200
      },
      {
        id: 'enem-004-t3',
        title: 'Conflitos Étnicos e Religiosos',
        content: 'Ruanda (1994): genocídio entre hutus e tutsis - 800 mil mortos em 100 dias. Iugoslávia (anos 90): fragmentação em 7 países por conflitos étnicos/religiosos. Rohingyas em Mianmar: perseguição de minoria muçulmana. ENEM cobra: intolerância étnica/religiosa, papel da ONU, refugiados, crimes contra humanidade. Conecte com: xenofobia, direitos humanos, diversidade cultural.',
        duration: 200
      }
    ],
    quiz: [
      {
        id: 'enem-004-q1',
        question: 'Qual cidade é disputada por israelenses e palestinos por ser sagrada para 3 religiões?',
        options: ['Tel Aviv', 'Jerusalém', 'Gaza', 'Belém'],
        correctAnswer: 1,
        explanation: 'Jerusalém é sagrada para judaísmo, cristianismo e islamismo, sendo centro do conflito.'
      },
      {
        id: 'enem-004-q2',
        question: 'O que caracterizou a Guerra Fria?',
        options: ['Guerra nuclear', 'Disputa ideológica sem guerra direta', 'Paz mundial', 'Aliança EUA-URSS'],
        correctAnswer: 1,
        explanation: 'Guerra Fria foi marcada por disputa ideológica (capitalismo vs socialismo) sem confronto direto.'
      },
      {
        id: 'enem-004-q3',
        question: 'Qual genocídio matou 800 mil pessoas em 100 dias em 1994?',
        options: ['Holocausto', 'Ruanda', 'Camboja', 'Armênia'],
        correctAnswer: 1,
        explanation: 'O genocídio em Ruanda (1994) entre hutus e tutsis matou cerca de 800 mil pessoas.'
      }
    ]
  },

  // ENEM - CIÊNCIAS DA NATUREZA
  {
    id: 'enem-005',
    title: 'Ecologia: Cadeias e Teias Alimentares',
    category: 'enem',
    description: 'Domine relações ecológicas para o ENEM',
    duration: 9,
    difficulty: 'intermediário',
    xpReward: 70,
    coinsReward: 14,
    topics: [
      {
        id: 'enem-005-t1',
        title: 'Níveis Tróficos',
        content: 'PRODUTORES (1º nível): plantas e algas - fazem fotossíntese, produzem próprio alimento. CONSUMIDORES PRIMÁRIOS (2º nível): herbívoros - comem plantas. Ex: gafanhoto, boi, coelho. CONSUMIDORES SECUNDÁRIOS (3º nível): carnívoros - comem herbívoros. Ex: sapo come gafanhoto. CONSUMIDORES TERCIÁRIOS (4º nível): carnívoros de topo. Ex: cobra come sapo. DECOMPOSITORES: fungos e bactérias - reciclam matéria orgânica. Essenciais para o ciclo!',
        duration: 180
      },
      {
        id: 'enem-005-t2',
        title: 'Fluxo de Energia',
        content: 'Energia flui em SENTIDO ÚNICO: Sol → Produtores → Consumidores → Decompositores. A cada nível trófico, perde-se ~90% da energia (calor, movimento, metabolismo). Sobram apenas ~10% para o próximo nível. Por isso, pirâmides de energia são sempre menores no topo. Exemplo: 10.000 kcal de plantas → 1.000 kcal em herbívoros → 100 kcal em carnívoros. ENEM adora perguntar sobre eficiência energética!',
        duration: 180
      },
      {
        id: 'enem-005-t3',
        title: 'Teias Alimentares e Desequilíbrios',
        content: 'TEIA ALIMENTAR: múltiplas cadeias interligadas (mais realista que cadeia linear). Exemplo: gafanhoto come planta, é comido por sapo E por pássaro. Sapo é comido por cobra E por gavião. DESEQUILÍBRIO: remoção de um elo afeta toda a teia. Ex: extinguir cobras → aumento de sapos → diminuição de gafanhotos → aumento de plantas. ENEM cobra: impacto de pesticidas, desmatamento, introdução de espécies exóticas.',
        duration: 180
      }
    ],
    quiz: [
      {
        id: 'enem-005-q1',
        question: 'Quanto da energia é transferida entre níveis tróficos?',
        options: ['50%', '25%', '10%', '90%'],
        correctAnswer: 2,
        explanation: 'Apenas cerca de 10% da energia é transferida entre níveis tróficos, 90% é perdida.'
      },
      {
        id: 'enem-005-q2',
        question: 'Qual organismo é produtor em uma cadeia alimentar?',
        options: ['Gafanhoto', 'Planta', 'Sapo', 'Cobra'],
        correctAnswer: 1,
        explanation: 'Plantas são produtores - fazem fotossíntese e produzem próprio alimento.'
      },
      {
        id: 'enem-005-q3',
        question: 'O que acontece se extinguirmos um predador de topo?',
        options: ['Nada muda', 'Presas aumentam descontroladamente', 'Plantas diminuem', 'Decompositores somem'],
        correctAnswer: 1,
        explanation: 'Sem predadores, as presas aumentam descontroladamente, causando desequilíbrio ecológico.'
      }
    ]
  },

  // ARTE
  {
    id: 'arte-001',
    title: 'Modernismo Brasileiro: Semana de 22',
    category: 'arte',
    description: 'Entenda o movimento que revolucionou a arte brasileira',
    duration: 9,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'arte-001-t1',
        title: 'Contexto Histórico',
        content: 'Em 1922, o Brasil vivia um momento de transformação. A Semana de Arte Moderna aconteceu no Teatro Municipal de São Paulo entre 13 e 17 de fevereiro. Artistas como Tarsila do Amaral, Di Cavalcanti e Anita Malfatti buscavam romper com padrões europeus e criar uma identidade artística genuinamente brasileira.',
        duration: 180
      },
      {
        id: 'arte-001-t2',
        title: 'Principais Artistas',
        content: 'Tarsila do Amaral pintou "Abaporu" (1928), obra que inspirou o Movimento Antropofágico. Di Cavalcanti retratou o povo brasileiro com cores vibrantes. Anita Malfatti trouxe influências expressionistas. Na literatura, Mário de Andrade escreveu "Macunaíma", e Oswald de Andrade criou o "Manifesto Antropófago".',
        duration: 180
      },
      {
        id: 'arte-001-t3',
        title: 'Legado e Impacto',
        content: 'A Semana de 22 libertou a arte brasileira das amarras acadêmicas. Hoje, vemos seu impacto na música (Tropicália), no cinema (Cinema Novo) e na cultura pop. O movimento ensinou que valorizar nossas raízes é revolucionário.',
        duration: 120
      }
    ],
    quiz: [
      {
        id: 'arte-001-q1',
        question: 'Em que ano aconteceu a Semana de Arte Moderna?',
        options: ['1920', '1922', '1924', '1930'],
        correctAnswer: 1,
        explanation: 'A Semana de Arte Moderna aconteceu em 1922, no centenário da Independência do Brasil.'
      },
      {
        id: 'arte-001-q2',
        question: 'Qual obra de Tarsila do Amaral inspirou o Movimento Antropofágico?',
        options: ['A Negra', 'Abaporu', 'Operários', 'Urutu'],
        correctAnswer: 1,
        explanation: 'Abaporu (1928) foi presenteado a Oswald de Andrade e inspirou o Manifesto Antropófago.'
      },
      {
        id: 'arte-001-q3',
        question: 'Onde aconteceu a Semana de Arte Moderna?',
        options: ['Teatro Municipal do Rio', 'Teatro Municipal de SP', 'MASP', 'Pinacoteca'],
        correctAnswer: 1,
        explanation: 'O evento aconteceu no Teatro Municipal de São Paulo, entre 13 e 17 de fevereiro.'
      }
    ]
  },

  // MATEMÁTICA
  {
    id: 'mat-001',
    title: 'Porcentagem no Dia a Dia',
    category: 'matematica',
    description: 'Calcule descontos, juros e gorjetas rapidamente',
    duration: 8,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'mat-001-t1',
        title: 'O que é Porcentagem?',
        content: 'Porcentagem significa "por cem". Quando vemos 20%, estamos falando de 20 partes de 100. É uma forma de expressar proporções. Exemplo: se você acertou 8 de 10 questões, acertou 80% (8÷10 = 0,8 = 80%).',
        duration: 150
      },
      {
        id: 'mat-001-t2',
        title: 'Calculando Descontos',
        content: 'Produto de R$ 200 com 30% de desconto: Método 1: 200 × 0,30 = R$ 60 de desconto → Preço final: R$ 140. Método 2 (mais rápido): 200 × 0,70 = R$ 140 direto! Dica: para 30% off, multiplique por 0,70 (100% - 30% = 70%).',
        duration: 180
      },
      {
        id: 'mat-001-t3',
        title: 'Gorjeta e Aplicações',
        content: 'Conta de R$ 85 no restaurante. Gorjeta de 10%: 85 × 0,10 = R$ 8,50. Dica rápida: para 10%, basta "andar" a vírgula uma casa à esquerda! 85,00 → 8,50. Para 15%: calcule 10% e some metade (8,50 + 4,25 = R$ 12,75).',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'mat-001-q1',
        question: 'Um tênis de R$ 250 está com 40% de desconto. Qual o preço final?',
        options: ['R$ 100', 'R$ 150', 'R$ 180', 'R$ 210'],
        correctAnswer: 1,
        explanation: '250 × 0,60 = R$ 150 (ou 250 - 100 = 150). Lembre: 40% off = pagar 60%.'
      },
      {
        id: 'mat-001-q2',
        question: 'Você acertou 17 de 20 questões. Qual sua porcentagem de acerto?',
        options: ['80%', '85%', '90%', '95%'],
        correctAnswer: 1,
        explanation: '17 ÷ 20 = 0,85 = 85% de acerto.'
      },
      {
        id: 'mat-001-q3',
        question: 'Qual a gorjeta de 10% em uma conta de R$ 127?',
        options: ['R$ 10,70', 'R$ 12,70', 'R$ 13,70', 'R$ 14,70'],
        correctAnswer: 1,
        explanation: 'Para 10%, basta mover a vírgula: 127,00 → 12,70.'
      }
    ]
  },

  // HISTÓRIA
  {
    id: 'hist-001',
    title: 'Independência do Brasil: Além do Grito',
    category: 'historia',
    description: 'A verdadeira história por trás do 7 de setembro',
    duration: 10,
    difficulty: 'intermediário',
    xpReward: 60,
    coinsReward: 12,
    topics: [
      {
        id: 'hist-001-t1',
        title: 'Contexto: Portugal em Crise',
        content: 'Em 1808, a família real portuguesa fugiu de Napoleão e veio para o Brasil. Dom João VI transformou o Rio de Janeiro na capital do império. Quando voltou para Portugal em 1821, deixou seu filho Pedro como príncipe regente. Portugal queria recolonizar o Brasil, mas os brasileiros já tinham provado autonomia.',
        duration: 180
      },
      {
        id: 'hist-001-t2',
        title: 'O Dia do Grito',
        content: 'Em 7 de setembro de 1822, às margens do rio Ipiranga (SP), Dom Pedro recebeu cartas de Portugal exigindo seu retorno e do Brasil pedindo que ficasse. A decisão já estava tomada há dias. O "grito" foi mais simbólico que espontâneo. Curiosidade: Dom Pedro estava com problemas intestinais no momento histórico!',
        duration: 180
      },
      {
        id: 'hist-001-t3',
        title: 'Independência Negociada',
        content: 'Diferente de outros países latino-americanos, nossa independência foi quase sem guerra. Dom Pedro I pagou £2 milhões à Portugal em 1825 para reconhecerem nossa independência. A escravidão continuou (só acabou em 1888). A independência foi mais política que social - o povo continuou excluído.',
        duration: 180
      }
    ],
    quiz: [
      {
        id: 'hist-001-q1',
        question: 'Por que a família real portuguesa veio para o Brasil em 1808?',
        options: ['Fugindo de Napoleão', 'Férias', 'Explorar ouro', 'Visita diplomática'],
        correctAnswer: 0,
        explanation: 'Fugiram da invasão napoleônica a Portugal, escoltados pela marinha britânica.'
      },
      {
        id: 'hist-001-q2',
        question: 'Quanto o Brasil pagou a Portugal pelo reconhecimento da independência?',
        options: ['Nada', '£1 milhão', '£2 milhões', '£5 milhões'],
        correctAnswer: 2,
        explanation: 'Em 1825, o Brasil pagou £2 milhões de libras esterlinas a Portugal.'
      },
      {
        id: 'hist-001-q3',
        question: 'O que continuou existindo após a independência?',
        options: ['Monarquia e escravidão', 'República', 'Colônia', 'Democracia plena'],
        correctAnswer: 0,
        explanation: 'O Brasil continuou sendo uma monarquia e manteve a escravidão até 1888.'
      }
    ]
  },

  // FINANÇAS
  {
    id: 'fin-001',
    title: 'Juros Compostos: O Poder do Tempo',
    category: 'financas',
    description: 'Entenda como seu dinheiro pode crescer exponencialmente',
    duration: 9,
    difficulty: 'intermediário',
    xpReward: 60,
    coinsReward: 12,
    topics: [
      {
        id: 'fin-001-t1',
        title: 'Juros Simples vs Compostos',
        content: 'Juros simples: calculados sempre sobre o valor inicial. R$ 1.000 a 10% ao ano = R$ 100/ano sempre. Juros compostos: calculados sobre o total acumulado. Ano 1: R$ 1.100. Ano 2: R$ 1.210 (juros sobre R$ 1.100). É "juros sobre juros" - o segredo da riqueza!',
        duration: 180
      },
      {
        id: 'fin-001-t2',
        title: 'A Regra dos 72',
        content: 'Quer saber em quantos anos seu dinheiro dobra? Divida 72 pela taxa de juros anual. Exemplo: investimento a 8% ao ano → 72 ÷ 8 = 9 anos para dobrar. A 12% ao ano → 72 ÷ 12 = 6 anos. Funciona como mágica e é usado por investidores profissionais!',
        duration: 150
      },
      {
        id: 'fin-001-t3',
        title: 'Aplicação Prática no Brasil',
        content: 'Tesouro Selic rende ~13% ao ano (2024). Pela regra dos 72: 72 ÷ 13 ≈ 5,5 anos para dobrar. Se investir R$ 500/mês por 20 anos a 10% ao ano, terá ~R$ 380 mil! O segredo não é quanto você ganha, mas quanto investe e por quanto tempo. Comece cedo!',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'fin-001-q1',
        question: 'Qual a diferença principal entre juros simples e compostos?',
        options: [
          'Não há diferença',
          'Compostos rendem sobre o total acumulado',
          'Simples rendem mais',
          'Compostos são ilegais'
        ],
        correctAnswer: 1,
        explanation: 'Juros compostos são calculados sobre o montante acumulado (juros sobre juros).'
      },
      {
        id: 'fin-001-q2',
        question: 'Usando a Regra dos 72, em quantos anos R$ 10 mil dobram a 9% ao ano?',
        options: ['6 anos', '8 anos', '10 anos', '12 anos'],
        correctAnswer: 1,
        explanation: '72 ÷ 9 = 8 anos para dobrar o capital investido.'
      },
      {
        id: 'fin-001-q3',
        question: 'O que mais importa nos juros compostos?',
        options: ['Valor inicial alto', 'Tempo de investimento', 'Sorte', 'Timing perfeito'],
        correctAnswer: 1,
        explanation: 'O tempo é o fator mais poderoso nos juros compostos. Quanto mais cedo começar, melhor!'
      }
    ]
  },

  // FILOSOFIA
  {
    id: 'fil-001',
    title: 'Estoicismo: Filosofia para o Caos Moderno',
    category: 'filosofia',
    description: 'Aprenda a controlar o que está ao seu alcance',
    duration: 9,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'fil-001-t1',
        title: 'O que é Estoicismo?',
        content: 'Filosofia criada na Grécia Antiga (300 a.C.) e praticada por imperadores romanos como Marco Aurélio. Ensina que não controlamos eventos externos, mas controlamos nossas reações. Foco no que está ao seu alcance. Aceite o que não pode mudar, mude o que pode.',
        duration: 180
      },
      {
        id: 'fil-001-t2',
        title: 'Dicotomia do Controle',
        content: 'Divida tudo em duas categorias: 1) O que você controla: suas ações, pensamentos, esforço, caráter. 2) O que você NÃO controla: opinião alheia, trânsito, clima, passado. Exemplo prático: você controla estudar para a prova, não controla a nota. Foque no processo, não no resultado.',
        duration: 180
      },
      {
        id: 'fil-001-t3',
        title: 'Aplicando Hoje',
        content: 'Trânsito pesado? Não controla. Mas controla ouvir um podcast. Chefe injusto? Não controla. Mas controla seu profissionalismo. Crítica nas redes? Não controla. Mas controla se vai ler ou ignorar. Estoicismo não é ser frio, é ser resiliente. É paz interior em meio ao caos.',
        duration: 120
      }
    ],
    quiz: [
      {
        id: 'fil-001-q1',
        question: 'Qual imperador romano era praticante do estoicismo?',
        options: ['Júlio César', 'Nero', 'Marco Aurélio', 'Calígula'],
        correctAnswer: 2,
        explanation: 'Marco Aurélio escreveu "Meditações", um dos principais textos estoicos.'
      },
      {
        id: 'fil-001-q2',
        question: 'Segundo o estoicismo, o que você NÃO controla?',
        options: ['Suas ações', 'Opinião dos outros', 'Seu esforço', 'Seus pensamentos'],
        correctAnswer: 1,
        explanation: 'Você não controla o que os outros pensam ou dizem sobre você.'
      },
      {
        id: 'fil-001-q3',
        question: 'Qual o foco principal do estoicismo?',
        options: ['Riqueza material', 'Fama', 'Controlar o que está ao seu alcance', 'Evitar emoções'],
        correctAnswer: 2,
        explanation: 'O estoicismo ensina a focar no que você pode controlar e aceitar o resto.'
      }
    ]
  },

  // LITERATURA
  {
    id: 'lit-001',
    title: 'Machado de Assis: O Bruxo do Cosme Velho',
    category: 'literatura',
    description: 'Conheça o maior escritor brasileiro de todos os tempos',
    duration: 10,
    difficulty: 'intermediário',
    xpReward: 60,
    coinsReward: 12,
    topics: [
      {
        id: 'lit-001-t1',
        title: 'Quem foi Machado?',
        content: 'Joaquim Maria Machado de Assis (1839-1908) nasceu no Morro do Livramento, RJ. Neto de escravos, epilético, gago, pobre - superou tudo. Autodidata, aprendeu francês, inglês e latim sozinho. Fundou a Academia Brasileira de Letras. Trabalhou como tipógrafo, jornalista e funcionário público.',
        duration: 180
      },
      {
        id: 'lit-001-t2',
        title: 'Obras Revolucionárias',
        content: '"Memórias Póstumas de Brás Cubas" (1881): narrado por um defunto! Ironia, metalinguagem, crítica social. "Dom Casmurro" (1899): Capitu traiu ou não? Debate eterno. "Quincas Borba" (1891): filosofia do Humanitismo. Machado criou o realismo brasileiro, rompendo com o romantismo açucarado.',
        duration: 180
      },
      {
        id: 'lit-001-t3',
        title: 'Legado e Atualidade',
        content: 'Machado criticava a hipocrisia da elite brasileira com humor fino. Seus personagens são complexos e falhos - como pessoas reais. Temas universais: ciúme, ambição, vaidade, morte. Sua escrita é moderna mesmo 100+ anos depois. É considerado o maior escritor em língua portuguesa ao lado de Camões.',
        duration: 180
      }
    ],
    quiz: [
      {
        id: 'lit-001-q1',
        question: 'Qual obra de Machado é narrada por um defunto?',
        options: ['Dom Casmurro', 'Quincas Borba', 'Memórias Póstumas de Brás Cubas', 'Esaú e Jacó'],
        correctAnswer: 2,
        explanation: 'Memórias Póstumas de Brás Cubas é narrado por um morto, inovação revolucionária.'
      },
      {
        id: 'lit-001-q2',
        question: 'Qual o grande mistério de Dom Casmurro?',
        options: ['Quem matou?', 'Capitu traiu?', 'Quem roubou?', 'Quem mentiu?'],
        correctAnswer: 1,
        explanation: 'O livro deixa em aberto se Capitu traiu Bentinho - debate eterno na literatura.'
      },
      {
        id: 'lit-001-q3',
        question: 'Machado de Assis fundou qual instituição?',
        options: ['USP', 'Academia Brasileira de Letras', 'Biblioteca Nacional', 'UFRJ'],
        correctAnswer: 1,
        explanation: 'Machado foi o primeiro presidente da Academia Brasileira de Letras (1897).'
      }
    ]
  },

  // TECNOLOGIA
  {
    id: 'tec-001',
    title: 'Inteligência Artificial: Como Funciona?',
    category: 'tecnologia',
    description: 'Entenda a tecnologia que está mudando o mundo',
    duration: 9,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'tec-001-t1',
        title: 'O que é IA?',
        content: 'IA é quando máquinas aprendem padrões e tomam decisões. Não é mágica - é matemática avançada! Exemplo: você mostra 1000 fotos de gatos para uma IA. Ela aprende padrões (orelhas pontudas, bigodes, etc). Depois, reconhece gatos em fotos novas. É aprendizado por exemplos, como humanos!',
        duration: 180
      },
      {
        id: 'tec-001-t2',
        title: 'Machine Learning e Redes Neurais',
        content: 'Machine Learning: computador aprende sem ser explicitamente programado. Redes Neurais: inspiradas no cérebro humano, com "neurônios" artificiais conectados. ChatGPT usa redes neurais gigantes treinadas com textos da internet. Não "pensa" - prevê a próxima palavra mais provável baseado em padrões.',
        duration: 180
      },
      {
        id: 'tec-001-t3',
        title: 'IA no Brasil',
        content: 'Você já usa IA: Netflix recomenda filmes, Instagram ordena seu feed, Waze prevê trânsito, bancos detectam fraudes. No Brasil, startups usam IA para diagnóstico médico, agricultura (previsão de safra) e educação personalizada. O futuro não é IA substituindo humanos, mas humanos + IA trabalhando juntos.',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'tec-001-q1',
        question: 'Como a IA aprende a reconhecer gatos?',
        options: ['Programação manual', 'Aprendendo padrões de exemplos', 'Mágica', 'Não aprende'],
        correctAnswer: 1,
        explanation: 'IA aprende analisando milhares de exemplos e identificando padrões comuns.'
      },
      {
        id: 'tec-001-q2',
        question: 'O que são redes neurais?',
        options: ['Cabos de internet', 'Sistemas inspirados no cérebro', 'Redes sociais', 'Antenas'],
        correctAnswer: 1,
        explanation: 'Redes neurais artificiais são inspiradas na estrutura de neurônios do cérebro.'
      },
      {
        id: 'tec-001-q3',
        question: 'Onde você já usa IA no dia a dia?',
        options: ['Apenas em robôs', 'Netflix, Instagram, Waze', 'Não uso', 'Só em laboratórios'],
        correctAnswer: 1,
        explanation: 'IA está presente em apps que você usa diariamente, como recomendações e previsões.'
      }
    ]
  },

  // SOFT SKILLS
  {
    id: 'soft-001',
    title: 'Comunicação Não-Violenta',
    category: 'softskills',
    description: 'Aprenda a se expressar sem gerar conflitos',
    duration: 8,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'soft-001-t1',
        title: 'O que é CNV?',
        content: 'Criada por Marshall Rosenberg, a Comunicação Não-Violenta (CNV) ensina a expressar necessidades sem atacar. Violência não é só física - palavras machucam. "Você é irresponsável!" vs "Fiquei preocupado quando você não avisou". Mesma situação, impactos diferentes. CNV constrói pontes, não muros.',
        duration: 150
      },
      {
        id: 'soft-001-t2',
        title: 'Os 4 Passos da CNV',
        content: '1) Observação (fatos, sem julgamento): "Você chegou 30 min atrasado". 2) Sentimento: "Fiquei ansioso". 3) Necessidade: "Preciso de previsibilidade". 4) Pedido: "Pode me avisar quando se atrasar?". Evite: "Você SEMPRE atrasa!" (generalização) ou "Você não se importa!" (suposição).',
        duration: 180
      },
      {
        id: 'soft-001-t3',
        title: 'Aplicando no Trabalho',
        content: 'Feedback ao colega: ❌ "Seu relatório está horrível!" ✅ "Notei que faltam dados na seção 2. Preciso dessas informações para a reunião. Pode complementar até amanhã?" Com o chefe: ❌ "Você me sobrecarrega!" ✅ "Estou com 5 projetos simultâneos. Preciso priorizar. Podemos alinhar o que é mais urgente?"',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'soft-001-q1',
        question: 'Qual o primeiro passo da CNV?',
        options: ['Julgamento', 'Observação sem julgamento', 'Acusação', 'Sentimento'],
        correctAnswer: 1,
        explanation: 'Comece com observação objetiva dos fatos, sem julgamentos ou interpretações.'
      },
      {
        id: 'soft-001-q2',
        question: 'Qual frase usa CNV corretamente?',
        options: [
          'Você é irresponsável!',
          'Você SEMPRE atrasa!',
          'Fiquei preocupado quando você não avisou',
          'Você não se importa comigo!'
        ],
        correctAnswer: 2,
        explanation: 'Expressa sentimento pessoal sem atacar ou generalizar o comportamento do outro.'
      },
      {
        id: 'soft-001-q3',
        question: 'O que a CNV evita?',
        options: ['Expressar sentimentos', 'Fazer pedidos', 'Julgamentos e generalizações', 'Comunicação'],
        correctAnswer: 2,
        explanation: 'CNV evita julgamentos ("você é...") e generalizações ("você sempre...").'
      }
    ]
  },

  // CURIOSIDADES
  {
    id: 'cur-001',
    title: 'Por que o Céu é Azul?',
    category: 'curiosidades',
    description: 'A ciência por trás de fenômenos do cotidiano',
    duration: 7,
    difficulty: 'iniciante',
    xpReward: 40,
    coinsReward: 8,
    topics: [
      {
        id: 'cur-001-t1',
        title: 'A Luz do Sol',
        content: 'A luz do sol parece branca, mas é formada por todas as cores do arco-íris (vermelho, laranja, amarelo, verde, azul, anil, violeta). Quando essa luz atravessa a atmosfera, algo interessante acontece: ela interage com moléculas de ar. Esse fenômeno se chama "espalhamento de Rayleigh".',
        duration: 150
      },
      {
        id: 'cur-001-t2',
        title: 'Espalhamento de Rayleigh',
        content: 'Cores com ondas curtas (azul, violeta) espalham mais que cores com ondas longas (vermelho, laranja). O azul se espalha ~10x mais que o vermelho! Por isso, quando olhamos para o céu, vemos azul em todas as direções. O violeta espalha ainda mais, mas nossos olhos são menos sensíveis a ele.',
        duration: 180
      },
      {
        id: 'cur-001-t3',
        title: 'E o Pôr do Sol?',
        content: 'No pôr do sol, a luz percorre mais atmosfera. O azul se espalha tanto que "sai do caminho". Sobram vermelho e laranja, que chegam aos nossos olhos. Por isso o céu fica alaranjado/avermelhado. Curiosidade: na Lua não há atmosfera, então o "céu" é sempre preto, mesmo de dia!',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'cur-001-q1',
        question: 'Por que o céu é azul?',
        options: [
          'Reflexo do mar',
          'Espalhamento da luz azul na atmosfera',
          'Cor natural do ar',
          'Ilusão de ótica'
        ],
        correctAnswer: 1,
        explanation: 'A luz azul se espalha mais na atmosfera devido ao seu comprimento de onda curto.'
      },
      {
        id: 'cur-001-q2',
        question: 'Por que o pôr do sol é alaranjado?',
        options: [
          'O sol muda de cor',
          'Poluição',
          'Luz percorre mais atmosfera e azul se espalha',
          'Temperatura do sol'
        ],
        correctAnswer: 2,
        explanation: 'A luz percorre mais atmosfera, o azul se espalha completamente, sobrando vermelho/laranja.'
      },
      {
        id: 'cur-001-q3',
        question: 'Qual a cor do céu na Lua?',
        options: ['Azul', 'Preto', 'Cinza', 'Branco'],
        correctAnswer: 1,
        explanation: 'Sem atmosfera, não há espalhamento de luz. O céu lunar é sempre preto.'
      }
    ]
  },

  // BIOLOGIA
  {
    id: 'bio-001',
    title: 'Microbioma: O Universo Dentro de Você',
    category: 'biologia',
    description: 'Trilhões de bactérias que controlam sua saúde',
    duration: 9,
    difficulty: 'intermediário',
    xpReward: 60,
    coinsReward: 12,
    topics: [
      {
        id: 'bio-001-t1',
        title: 'O que é Microbioma?',
        content: 'Você tem ~37 trilhões de células humanas. Mas também tem ~39 trilhões de bactérias vivendo em você! Principalmente no intestino. Esse ecossistema de micro-organismos é o microbioma. Eles pesam ~2kg e têm mais genes que você (150x mais!). Não são invasores - são parceiros essenciais.',
        duration: 180
      },
      {
        id: 'bio-001-t2',
        title: 'Funções do Microbioma',
        content: 'Digestão: quebram fibras que você não consegue digerir. Imunidade: 70% do sistema imune está no intestino! Bactérias "boas" combatem as "ruins". Humor: produzem 90% da serotonina (hormônio da felicidade). Intestino e cérebro conversam - por isso ansiedade causa dor de barriga!',
        duration: 180
      },
      {
        id: 'bio-001-t3',
        title: 'Cuidando do Microbioma',
        content: 'Alimente suas bactérias: fibras (frutas, verduras, grãos integrais), probióticos (iogurte, kefir, kombucha). Evite: antibióticos desnecessários (matam bactérias boas também), excesso de açúcar, estresse crônico. Microbioma saudável = menos doenças, mais energia, melhor humor. Cuide dos seus inquilinos!',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'bio-001-q1',
        question: 'Quantas bactérias vivem no corpo humano?',
        options: ['Milhões', 'Bilhões', '~39 trilhões', 'Centenas'],
        correctAnswer: 2,
        explanation: 'Temos aproximadamente 39 trilhões de bactérias, mais que nossas próprias células!'
      },
      {
        id: 'bio-001-q2',
        question: 'Onde está a maior parte do sistema imunológico?',
        options: ['Cérebro', 'Coração', 'Intestino', 'Pulmões'],
        correctAnswer: 2,
        explanation: 'Cerca de 70% do sistema imunológico está localizado no intestino.'
      },
      {
        id: 'bio-001-q3',
        question: 'O que alimenta as bactérias boas?',
        options: ['Açúcar', 'Fibras', 'Gordura', 'Proteína'],
        correctAnswer: 1,
        explanation: 'Fibras de frutas, verduras e grãos integrais alimentam as bactérias benéficas.'
      }
    ]
  },

  // LÓGICA
  {
    id: 'log-001',
    title: 'Falácias Lógicas: Não Caia em Armadilhas',
    category: 'logica',
    description: 'Identifique argumentos falsos no dia a dia',
    duration: 9,
    difficulty: 'intermediário',
    xpReward: 60,
    coinsReward: 12,
    topics: [
      {
        id: 'log-001-t1',
        title: 'O que são Falácias?',
        content: 'Falácias são erros de raciocínio que parecem corretos, mas não são. Usadas (às vezes de propósito) em debates, propaganda, política e redes sociais. Saber identificá-las te torna imune a manipulação. Vamos ver as mais comuns no Brasil.',
        duration: 150
      },
      {
        id: 'log-001-t2',
        title: 'Falácias Comuns',
        content: 'Ad Hominem: atacar a pessoa, não o argumento. "Você é jovem, não entende nada". Apelo à Autoridade: "Médico X disse, então é verdade" (mas médico pode errar). Falsa Dicotomia: "Ou você é a favor, ou é contra" (ignora meio-termo). Bola de Neve: "Se liberarem X, logo vão liberar Y e Z!" (exagero).',
        duration: 180
      },
      {
        id: 'log-001-t3',
        title: 'Identificando no Dia a Dia',
        content: 'Redes sociais: "Todo mundo está fazendo" (apelo à maioria). Vendas: "Última unidade!" (escassez artificial). Política: "Sempre foi assim" (apelo à tradição). Debates: "E o PT?" (whataboutism - desviar o assunto). Pratique: quando alguém argumentar, pergunte "qual a evidência?" e "isso realmente prova o ponto?".',
        duration: 150
      }
    ],
    quiz: [
      {
        id: 'log-001-q1',
        question: 'Qual falácia ataca a pessoa em vez do argumento?',
        options: ['Apelo à autoridade', 'Ad Hominem', 'Falsa dicotomia', 'Bola de neve'],
        correctAnswer: 1,
        explanation: 'Ad Hominem ataca características pessoais em vez de refutar o argumento.'
      },
      {
        id: 'log-001-q2',
        question: '"Ou você está comigo ou contra mim" é exemplo de qual falácia?',
        options: ['Ad Hominem', 'Apelo à maioria', 'Falsa dicotomia', 'Whataboutism'],
        correctAnswer: 2,
        explanation: 'Falsa dicotomia apresenta apenas duas opções quando existem mais possibilidades.'
      },
      {
        id: 'log-001-q3',
        question: 'Como se proteger de falácias?',
        options: [
          'Acreditar em tudo',
          'Pedir evidências e questionar',
          'Ignorar argumentos',
          'Confiar na intuição'
        ],
        correctAnswer: 1,
        explanation: 'Sempre peça evidências e questione se o argumento realmente prova o ponto.'
      }
    ]
  },

  // ESTATÍSTICA
  {
    id: 'est-001',
    title: 'Média, Mediana e Moda: Entenda as Diferenças',
    category: 'estatistica',
    description: 'Interprete dados corretamente e não seja enganado',
    duration: 8,
    difficulty: 'iniciante',
    xpReward: 50,
    coinsReward: 10,
    topics: [
      {
        id: 'est-001-t1',
        title: 'Média Aritmética',
        content: 'Soma todos os valores e divide pela quantidade. Salários: R$ 2.000, R$ 2.500, R$ 3.000, R$ 50.000 (CEO). Média: R$ 14.375. Parece que todos ganham bem, mas 3 de 4 ganham menos de R$ 4.000! A média é sensível a valores extremos (outliers). Cuidado com "salário médio" em notícias.',
        duration: 180
      },
      {
        id: 'est-001-t2',
        title: 'Mediana: O Valor do Meio',
        content: 'Organize os valores em ordem e pegue o do meio. Mesmos salários: R$ 2.000, R$ 2.500, R$ 3.000, R$ 50.000. Mediana: entre R$ 2.500 e R$ 3.000 = R$ 2.750. Muito mais representativo! A mediana não é afetada por valores extremos. Por isso, renda mediana é mais honesta que renda média.',
        duration: 180
      },
      {
        id: 'est-001-t3',
        title: 'Moda: O Mais Frequente',
        content: 'O valor que mais aparece. Tamanhos de camiseta vendidos: P, M, M, M, G, G, GG. Moda: M (aparece 3x). Útil para entender preferências. Exemplo: "qual o problema mais comum no suporte?" - a moda te diz. Pode ter mais de uma moda (bimodal) ou nenhuma (todos diferentes).',
        duration: 120
      }
    ],
    quiz: [
      {
        id: 'est-001-q1',
        question: 'Qual medida é mais afetada por valores extremos?',
        options: ['Média', 'Mediana', 'Moda', 'Todas igualmente'],
        correctAnswer: 0,
        explanation: 'A média é muito sensível a outliers (valores extremos), diferente da mediana.'
      },
      {
        id: 'est-001-q2',
        question: 'Qual a mediana de: 10, 20, 30, 40, 1000?',
        options: ['220', '30', '40', '1000'],
        correctAnswer: 1,
        explanation: 'A mediana é o valor do meio quando ordenados: 30 (terceiro de cinco valores).'
      },
      {
        id: 'est-001-q3',
        question: 'O que a moda representa?',
        options: ['Valor médio', 'Valor do meio', 'Valor mais frequente', 'Valor máximo'],
        correctAnswer: 2,
        explanation: 'Moda é o valor que aparece com maior frequência no conjunto de dados.'
      }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: 'first-lesson',
    title: 'Primeira Pílula',
    description: 'Complete sua primeira lição',
    icon: 'Award',
    requirement: 1
  },
  {
    id: 'week-streak',
    title: 'Semana Dedicada',
    description: 'Mantenha 7 dias de sequência',
    icon: 'Flame',
    requirement: 7
  },
  {
    id: 'polymath',
    title: 'Polímata',
    description: 'Complete lições em 5 categorias diferentes',
    icon: 'Brain',
    requirement: 5
  },
  {
    id: 'night-owl',
    title: 'Coruja Noturna',
    description: 'Complete 10 lições no modo "Antes de Dormir"',
    icon: 'Moon',
    requirement: 10
  },
  {
    id: 'quiz-master',
    title: 'Mestre dos Quizzes',
    description: 'Acerte 50 quizzes consecutivos',
    icon: 'Target',
    requirement: 50
  },
  {
    id: 'enem-ready',
    title: 'Preparado para o ENEM',
    description: 'Complete todas as lições de ENEM',
    icon: 'GraduationCap',
    requirement: 5
  }
];
