const areasAvaliacao = [
  {
    id: 'estetica',
    nome: 'Estética e Beleza',
    imagem: '/img/ods3.png',
    descricao: 'Salões, clínicas de estética, barbearias e afins.',
    perguntas: [
      {
        id: 'estetica-1',
        texto: 'Como sua clínica/salão descarta resíduos como agulhas, lâminas e algodões usados?',
        odsRelacionados: [3, 12],
        opcoes: [
          {
            texto: 'Separamos perfurocortantes e contratamos empresa especializada para descarte correto.',
            nivel: 'boa',
            feedback: 'Excelente prática. O descarte correto de resíduos contaminados protege a saúde da equipe e do público (ODS 3) e evita poluição, alinhado ao consumo e produção responsáveis (ODS 12).'
          },
          {
            texto: 'Separamos alguns resíduos, mas nem sempre com a destinação ideal.',
            nivel: 'parcial',
            feedback: 'Você já começou a separar, o que é positivo. O próximo passo é firmar uma rotina com uma empresa de coleta especializada para garantir o descarte 100% correto, fortalecendo o ODS 12.'
          },
          {
            texto: 'Todo o lixo é descartado junto, sem separação.',
            nivel: 'melhorar',
            feedback: 'Ponto de atenção: descartar perfurocortantes junto ao lixo comum é um risco de saúde pública (ODS 3) e de contaminação ambiental (ODS 12). Buscar um ponto de coleta especializado é o primeiro passo.'
          }
        ]
      },
      {
        id: 'estetica-2',
        texto: 'Como é o uso de água no dia a dia (lavatórios, toalhas, procedimentos)?',
        odsRelacionados: [6],
        opcoes: [
          {
            texto: 'Usamos torneiras com temporizador/arejador e reaproveitamos água sempre que possível.',
            nivel: 'boa',
            feedback: 'Ótimo! O uso consciente da água contribui diretamente com o ODS 6 (Água Potável e Saneamento), reduzindo o desperdício de um recurso essencial.'
          },
          {
            texto: 'Tentamos economizar, mas não temos uma rotina definida.',
            nivel: 'parcial',
            feedback: 'Boa intenção! Criar uma rotina simples (torneiras fechadas fora do uso, reparos rápidos de vazamento) fortalece ainda mais o compromisso com o ODS 6.'
          },
          {
            texto: 'Não há preocupação específica com o consumo de água.',
            nivel: 'melhorar',
            feedback: 'Vale rever esse ponto: pequenas mudanças de rotina (torneiras, vazamentos, reuso) fazem diferença real no ODS 6 e ainda reduzem custos do negócio.'
          }
        ]
      },
      {
        id: 'estetica-3',
        texto: 'Como é a ventilação e o manuseio de produtos químicos (tintas, removedores, esmaltes)?',
        odsRelacionados: [3, 8],
        opcoes: [
          {
            texto: 'Ambiente ventilado, produtos armazenados corretamente e equipe usa EPIs (luvas, máscaras).',
            nivel: 'boa',
            feedback: 'Muito bom! Isso protege a saúde de profissionais e clientes (ODS 3) e garante um ambiente de trabalho seguro e digno (ODS 8).'
          },
          {
            texto: 'Usamos EPIs às vezes, mas a ventilação não é ideal.',
            nivel: 'parcial',
            feedback: 'Reforce o uso constante de EPIs e avalie melhorias na ventilação do ambiente — pequenas mudanças já elevam a segurança do trabalho (ODS 8) e a saúde de todos (ODS 3).'
          },
          {
            texto: 'Não há cuidados específicos com ventilação ou proteção.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto importante: exposição constante a produtos químicos sem proteção afeta a saúde da equipe (ODS 3) e o direito a um trabalho seguro (ODS 8).'
          }
        ]
      },
      {
        id: 'estetica-4',
        texto: 'Sua equipe recebe treinamentos e atualizações técnicas periodicamente?',
        odsRelacionados: [4, 8],
        opcoes: [
          {
            texto: 'Sim, promovemos cursos e atualizações com frequência.',
            nivel: 'boa',
            feedback: 'Muito bom! Investir em capacitação contínua apoia o ODS 4 (Educação de Qualidade) e gera trabalho decente e mais qualificado (ODS 8).'
          },
          {
            texto: 'De vez em quando, sem uma frequência definida.',
            nivel: 'parcial',
            feedback: 'Considere criar um calendário simples de capacitações (mesmo que curtas) para fortalecer ainda mais o ODS 4 e a qualidade dos serviços.'
          },
          {
            texto: 'Não há treinamentos formais.',
            nivel: 'melhorar',
            feedback: 'A falta de capacitação contínua pode limitar o crescimento da equipe. Buscar cursos gratuitos ou parcerias locais já ajuda a caminhar rumo ao ODS 4.'
          }
        ]
      },
      {
        id: 'estetica-5',
        texto: 'Como é o atendimento a públicos diversos (idade, gênero, renda, etnia)?',
        odsRelacionados: [5, 10],
        opcoes: [
          {
            texto: 'Temos uma postura ativa de acolhimento e respeito à diversidade em todos os atendimentos.',
            nivel: 'boa',
            feedback: 'Excelente! Isso fortalece a igualdade de gênero (ODS 5) e a redução das desigualdades (ODS 10) no dia a dia do negócio.'
          },
          {
            texto: 'Tratamos bem todo mundo, mas nunca pensamos nisso como uma prática formal.',
            nivel: 'parcial',
            feedback: 'Boa base! Formalizar esse cuidado (por exemplo, em um combinado com a equipe) ajuda a manter a consistência e reforça o ODS 10.'
          },
          {
            texto: 'Nunca paramos para pensar nesse tema.',
            nivel: 'melhorar',
            feedback: 'Vale refletir sobre isso com a equipe: um atendimento consciente da diversidade aproxima o negócio do ODS 5 e do ODS 10.'
          }
        ]
      }
    ]
  },

  {
    id: 'farmacia',
    nome: 'Farmácia',
    imagem: '/img/ods3.png',
    descricao: 'Farmácias e drogarias.',
    perguntas: [
      {
        id: 'farmacia-1',
        texto: 'Como é feito o descarte de medicamentos vencidos ou impróprios para uso?',
        odsRelacionados: [3, 12],
        opcoes: [
          {
            texto: 'Temos um ponto de coleta próprio ou encaminhamos para descarte especializado.',
            nivel: 'boa',
            feedback: 'Ótima prática! Isso evita contaminação do solo e da água e reduz riscos à saúde pública, apoiando o ODS 3 e o ODS 12.'
          },
          {
            texto: 'Às vezes orientamos o cliente, mas não temos um processo estruturado.',
            nivel: 'parcial',
            feedback: 'Um bom começo. Criar um ponto de coleta fixo, mesmo pequeno, fortalece a prática e o compromisso com o ODS 12.'
          },
          {
            texto: 'Não temos nenhuma orientação ou processo sobre isso.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto crítico: medicamentos descartados incorretamente contaminam o meio ambiente e a água (ODS 3 e 12). Vale buscar parcerias com programas de logística reversa.'
          }
        ]
      },
      {
        id: 'farmacia-2',
        texto: 'Como acontece a orientação farmacêutica sobre uso correto dos medicamentos?',
        odsRelacionados: [3],
        opcoes: [
          {
            texto: 'Sempre orientamos sobre dosagem, interações e uso correto.',
            nivel: 'boa',
            feedback: 'Muito bom! A orientação correta previne o uso indevido de medicamentos, contribuindo diretamente com o ODS 3 (Saúde e Bem-Estar).'
          },
          {
            texto: 'Orientamos quando o cliente pergunta, mas nem sempre de forma ativa.',
            nivel: 'parcial',
            feedback: 'Adotar a orientação ativa (mesmo sem o cliente perguntar) amplia o cuidado com a saúde da população e fortalece o ODS 3.'
          },
          {
            texto: 'Praticamente não orientamos, o foco é a venda.',
            nivel: 'melhorar',
            feedback: 'Vale repensar esse ponto: a orientação farmacêutica é essencial para o uso seguro de medicamentos e está no centro do ODS 3.'
          }
        ]
      },
      {
        id: 'farmacia-3',
        texto: 'Sua farmácia facilita o acesso a medicamentos para pessoas de baixa renda (genéricos, parcerias, programas)?',
        odsRelacionados: [1, 10],
        opcoes: [
          {
            texto: 'Sim, oferecemos opções de genéricos e participamos de programas de acesso a medicamentos.',
            nivel: 'boa',
            feedback: 'Excelente! Isso amplia o acesso à saúde para quem mais precisa, apoiando o ODS 1 (Erradicação da Pobreza) e o ODS 10 (Redução das Desigualdades).'
          },
          {
            texto: 'Indicamos genéricos quando perguntam, mas não é uma prática ativa.',
            nivel: 'parcial',
            feedback: 'Oferecer ativamente a opção de genéricos, sem esperar o cliente perguntar, fortalece o acesso à saúde e o ODS 10.'
          },
          {
            texto: 'Não há nenhuma prática voltada a isso.',
            nivel: 'melhorar',
            feedback: 'Vale avaliar formas simples de ampliar o acesso, como indicar sempre a opção genérica — um passo direto rumo ao ODS 1 e ODS 10.'
          }
        ]
      },
      {
        id: 'farmacia-4',
        texto: 'Como é a gestão de energia (geladeiras de vacinas/refrigerados, iluminação)?',
        odsRelacionados: [7],
        opcoes: [
          {
            texto: 'Usamos equipamentos eficientes e monitoramos o consumo de energia.',
            nivel: 'boa',
            feedback: 'Muito bom! O uso eficiente de energia reduz custos e impacto ambiental, alinhado ao ODS 7 (Energia Acessível e Limpa).'
          },
          {
            texto: 'Não monitoramos, mas os equipamentos são relativamente novos.',
            nivel: 'parcial',
            feedback: 'Um acompanhamento simples do consumo de energia pode revelar oportunidades de economia e reforçar o ODS 7.'
          },
          {
            texto: 'Nunca avaliamos esse ponto.',
            nivel: 'melhorar',
            feedback: 'Vale um primeiro olhar sobre o consumo de energia dos equipamentos — pequenas trocas podem gerar economia e sustentabilidade (ODS 7).'
          }
        ]
      },
      {
        id: 'farmacia-5',
        texto: 'A equipe recebe capacitação contínua sobre novos medicamentos e boas práticas?',
        odsRelacionados: [4, 8],
        opcoes: [
          {
            texto: 'Sim, participamos de capacitações e atualizações regulares.',
            nivel: 'boa',
            feedback: 'Excelente! Isso mantém a equipe qualificada e segura, apoiando o ODS 4 (Educação) e o ODS 8 (Trabalho Decente).'
          },
          {
            texto: 'Ocasionalmente, sem uma frequência definida.',
            nivel: 'parcial',
            feedback: 'Formalizar um calendário de capacitações, mesmo simples, fortalece a qualificação da equipe (ODS 4).'
          },
          {
            texto: 'Não há capacitação formal.',
            nivel: 'melhorar',
            feedback: 'Buscar cursos gratuitos (inclusive de órgãos de classe) é um passo acessível para caminhar rumo ao ODS 4 e ODS 8.'
          }
        ]
      }
    ]
  },

  {
    id: 'escola',
    nome: 'Ambiente Escolar',
    imagem: '/img/ods4.png',
    descricao: 'Escolas, creches e espaços educativos.',
    perguntas: [
      {
        id: 'escola-1',
        texto: 'A escola trabalha temas de educação ambiental e sustentabilidade com os alunos?',
        odsRelacionados: [4, 13],
        opcoes: [
          {
            texto: 'Sim, temos projetos e atividades regulares sobre o tema.',
            nivel: 'boa',
            feedback: 'Muito bom! Ensinar sobre sustentabilidade forma cidadãos conscientes, apoiando o ODS 4 (Educação de Qualidade) e o ODS 13 (Ação Contra a Mudança do Clima).'
          },
          {
            texto: 'Abordamos o tema esporadicamente, em datas comemorativas.',
            nivel: 'parcial',
            feedback: 'Um bom início! Incluir o tema de forma mais contínua no currículo amplia o impacto educativo (ODS 4) e ambiental (ODS 13).'
          },
          {
            texto: 'Não trabalhamos esse tema.',
            nivel: 'melhorar',
            feedback: 'Vale incluir esse conteúdo mesmo que de forma simples — é uma forma poderosa de formar consciência ambiental desde cedo (ODS 4 e 13).'
          }
        ]
      },
      {
        id: 'escola-2',
        texto: 'Como a escola trata a inclusão de alunos com deficiência ou necessidades específicas?',
        odsRelacionados: [4, 10],
        opcoes: [
          {
            texto: 'Temos estrutura, profissionais de apoio e adaptações pedagógicas.',
            nivel: 'boa',
            feedback: 'Excelente! Isso garante educação inclusiva e de qualidade (ODS 4) e reduz desigualdades (ODS 10).'
          },
          {
            texto: 'Fazemos o possível, mas faltam estrutura e apoio especializado.',
            nivel: 'parcial',
            feedback: 'Reconhecer a limitação já é um passo importante. Buscar parcerias e capacitação da equipe fortalece o ODS 4 e o ODS 10.'
          },
          {
            texto: 'Não temos nenhuma estrutura voltada à inclusão.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto central da Agenda 2030: buscar orientação de órgãos de educação especial ajuda a caminhar rumo ao ODS 4 e ODS 10.'
          }
        ]
      },
      {
        id: 'escola-3',
        texto: 'Como é a alimentação oferecida na escola (merenda, cantina)?',
        odsRelacionados: [2, 3],
        opcoes: [
          {
            texto: 'Priorizamos alimentação balanceada, com frutas e refeições nutritivas.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso apoia diretamente o ODS 2 (Fome Zero) e o ODS 3 (Saúde e Bem-Estar) dos estudantes.'
          },
          {
            texto: 'Tentamos equilibrar, mas ainda há bastante ultraprocessado.',
            nivel: 'parcial',
            feedback: 'Reduzir gradualmente os ultraprocessados e aumentar opções naturais fortalece o ODS 2 e o ODS 3.'
          },
          {
            texto: 'Não há preocupação com a qualidade nutricional.',
            nivel: 'melhorar',
            feedback: 'Vale rever o cardápio com apoio de um nutricionista — pequenas mudanças já têm impacto real no ODS 2 e no ODS 3.'
          }
        ]
      },
      {
        id: 'escola-4',
        texto: 'A escola tem prática de reciclagem ou redução de resíduos (papel, plástico, orgânicos)?',
        odsRelacionados: [12],
        opcoes: [
          {
            texto: 'Sim, temos coleta seletiva e projetos de reaproveitamento.',
            nivel: 'boa',
            feedback: 'Excelente! Isso fortalece o consumo e produção responsáveis (ODS 12) e educa os alunos pelo exemplo.'
          },
          {
            texto: 'Temos lixeiras separadas, mas sem um processo consistente.',
            nivel: 'parcial',
            feedback: 'Um bom passo! Definir um destino certo para cada tipo de resíduo coletado fortalece ainda mais o ODS 12.'
          },
          {
            texto: 'Não há separação de resíduos.',
            nivel: 'melhorar',
            feedback: 'Implementar a coleta seletiva, mesmo que simples, já é um grande passo para o ODS 12 e para a educação ambiental dos alunos.'
          }
        ]
      },
      {
        id: 'escola-5',
        texto: 'Como a escola lida com bullying, discriminação e igualdade entre os alunos?',
        odsRelacionados: [5, 16],
        opcoes: [
          {
            texto: 'Temos ações preventivas, canais de escuta e acompanhamento pedagógico ativo.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso promove igualdade de gênero (ODS 5) e ambientes mais pacíficos e justos (ODS 16).'
          },
          {
            texto: 'Agimos quando o problema aparece, mas sem prevenção ativa.',
            nivel: 'parcial',
            feedback: 'Criar ações preventivas (rodas de conversa, campanhas) fortalece a cultura de respeito e o ODS 16.'
          },
          {
            texto: 'Não temos nenhuma ação estruturada sobre o tema.',
            nivel: 'melhorar',
            feedback: 'Esse é um tema sensível e importante: buscar formação para a equipe pedagógica ajuda a caminhar rumo ao ODS 5 e ODS 16.'
          }
        ]
      }
    ]
  },

  {
    id: 'medico',
    nome: 'Consultório Médico',
    imagem: '/img/ods3.png',
    descricao: 'Consultórios, clínicas médicas e de saúde.',
    perguntas: [
      {
        id: 'medico-1',
        texto: 'Como é feito o descarte de resíduos biológicos e perfurocortantes?',
        odsRelacionados: [3, 12],
        opcoes: [
          {
            texto: 'Seguimos protocolo com empresa especializada em resíduos de saúde.',
            nivel: 'boa',
            feedback: 'Excelente! O descarte correto é essencial para saúde pública (ODS 3) e para evitar contaminação ambiental (ODS 12).'
          },
          {
            texto: 'Temos separação básica, mas o processo poderia ser mais rigoroso.',
            nivel: 'parcial',
            feedback: 'Revisar o protocolo com uma empresa especializada em resíduos de saúde fortalece o cumprimento do ODS 3 e ODS 12.'
          },
          {
            texto: 'Não há um protocolo claro de descarte.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto crítico de saúde pública. Buscar orientação do conselho de classe ou vigilância sanitária é um passo urgente para o ODS 3.'
          }
        ]
      },
      {
        id: 'medico-2',
        texto: 'O consultório oferece algum tipo de acesso facilitado a pacientes de baixa renda (consultas sociais, parcerias, SUS)?',
        odsRelacionados: [1, 3, 10],
        opcoes: [
          {
            texto: 'Sim, oferecemos consultas sociais, parcerias ou atendimento via SUS.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso amplia o acesso à saúde para quem mais precisa, fortalecendo o ODS 1, o ODS 3 e o ODS 10.'
          },
          {
            texto: 'Avaliamos caso a caso, sem uma política formal.',
            nivel: 'parcial',
            feedback: 'Formalizar uma política simples de acesso ampliado fortalece ainda mais o compromisso com o ODS 10.'
          },
          {
            texto: 'Não oferecemos nenhuma facilidade nesse sentido.',
            nivel: 'melhorar',
            feedback: 'Vale avaliar parcerias com programas de saúde pública — um passo relevante para o ODS 1, ODS 3 e ODS 10.'
          }
        ]
      },
      {
        id: 'medico-3',
        texto: 'Como é a gestão de água e energia no consultório (esterilização, climatização, iluminação)?',
        odsRelacionados: [6, 7],
        opcoes: [
          {
            texto: 'Monitoramos o consumo e usamos equipamentos eficientes.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso reduz desperdícios e apoia o ODS 6 (Água) e o ODS 7 (Energia Limpa).'
          },
          {
            texto: 'Não monitoramos ativamente, mas evitamos desperdícios óbvios.',
            nivel: 'parcial',
            feedback: 'Um acompanhamento simples de consumo pode revelar oportunidades de economia e reforçar o ODS 6 e ODS 7.'
          },
          {
            texto: 'Não há nenhuma preocupação com esse tema.',
            nivel: 'melhorar',
            feedback: 'Vale um primeiro diagnóstico do consumo de água e energia — pequenas mudanças já geram impacto positivo (ODS 6 e 7).'
          }
        ]
      },
      {
        id: 'medico-4',
        texto: 'Você participa de atualizações médicas contínuas (congressos, cursos, artigos)?',
        odsRelacionados: [4, 8],
        opcoes: [
          {
            texto: 'Sim, participo regularmente de atualizações e formações.',
            nivel: 'boa',
            feedback: 'Excelente! A educação continuada eleva a qualidade do atendimento, apoiando o ODS 4 e o ODS 8.'
          },
          {
            texto: 'De vez em quando, sem uma rotina definida.',
            nivel: 'parcial',
            feedback: 'Criar uma meta simples de atualização (ex: X cursos por ano) fortalece ainda mais o ODS 4.'
          },
          {
            texto: 'Raramente busco atualização profissional.',
            nivel: 'melhorar',
            feedback: 'A atualização constante é essencial na área da saúde. Buscar conteúdos gratuitos de sociedades médicas é um bom começo (ODS 4).'
          }
        ]
      },
      {
        id: 'medico-5',
        texto: 'Como é garantido o sigilo e a humanização no atendimento aos pacientes?',
        odsRelacionados: [3, 16],
        opcoes: [
          {
            texto: 'Temos protocolos claros de sigilo e uma escuta humanizada e respeitosa.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso fortalece o cuidado com a saúde mental e física (ODS 3) e a confiança nas instituições (ODS 16).'
          },
          {
            texto: 'Nos preocupamos com isso, mas sem protocolos formais.',
            nivel: 'parcial',
            feedback: 'Formalizar boas práticas de sigilo e acolhimento reforça o cuidado com o paciente e o ODS 16.'
          },
          {
            texto: 'Não há um cuidado específico com esse tema.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto sensível da prática médica. Revisar rotinas de sigilo e humanização é essencial para o ODS 3 e ODS 16.'
          }
        ]
      }
    ]
  },

  {
    id: 'oficina',
    nome: 'Oficina Mecânica',
    imagem: '/img/ods12.png',
    descricao: 'Oficinas mecânicas, funilarias e autopeças.',
    perguntas: [
      {
        id: 'oficina-1',
        texto: 'Como é feito o descarte de óleo usado, pneus e peças?',
        odsRelacionados: [12, 14],
        opcoes: [
          {
            texto: 'Encaminhamos para pontos de coleta e reciclagem especializados.',
            nivel: 'boa',
            feedback: 'Excelente! Isso evita a contaminação do solo e de recursos hídricos, fortalecendo o ODS 12 e a proteção da vida na água (ODS 14).'
          },
          {
            texto: 'Separamos o óleo, mas outros resíduos não têm um destino certo.',
            nivel: 'parcial',
            feedback: 'Bom começo! Ampliar a coleta especializada para pneus e peças fortalece ainda mais o ODS 12.'
          },
          {
            texto: 'Não há separação nem destino especial para esses resíduos.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto crítico: óleo e peças descartados incorretamente contaminam o solo e a água. Buscar um posto de coleta é um passo simples e importante (ODS 12).'
          }
        ]
      },
      {
        id: 'oficina-2',
        texto: 'A equipe usa Equipamentos de Proteção Individual (EPIs) de forma constante?',
        odsRelacionados: [8],
        opcoes: [
          {
            texto: 'Sim, uso de EPI é obrigatório e monitorado.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso garante segurança no trabalho, alinhado ao ODS 8 (Trabalho Decente e Crescimento Econômico).'
          },
          {
            texto: 'Usamos em algumas atividades, mas não é uma regra fixa.',
            nivel: 'parcial',
            feedback: 'Reforçar o uso constante de EPIs em todas as atividades de risco fortalece a segurança da equipe (ODS 8).'
          },
          {
            texto: 'Praticamente não usamos EPIs.',
            nivel: 'melhorar',
            feedback: 'Esse é um ponto de atenção importante para a saúde e segurança da equipe. Implementar o uso de EPIs é essencial para o ODS 8.'
          }
        ]
      },
      {
        id: 'oficina-3',
        texto: 'A oficina reaproveita peças, materiais ou pratica eficiência energética?',
        odsRelacionados: [7, 12],
        opcoes: [
          {
            texto: 'Sim, reaproveitamos peças quando possível e cuidamos do consumo de energia.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso reduz desperdício e custos, apoiando o ODS 7 (Energia) e o ODS 12 (Consumo Responsável).'
          },
          {
            texto: 'Fazemos isso ocasionalmente, sem uma prática definida.',
            nivel: 'parcial',
            feedback: 'Criar uma rotina de reaproveitamento e verificação de consumo de energia fortalece ainda mais essas práticas.'
          },
          {
            texto: 'Não há preocupação com isso.',
            nivel: 'melhorar',
            feedback: 'Vale avaliar oportunidades simples de reaproveitamento e economia de energia — um passo relevante para o ODS 7 e ODS 12.'
          }
        ]
      },
      {
        id: 'oficina-4',
        texto: 'A equipe técnica passa por capacitações e atualizações sobre novos veículos/tecnologias?',
        odsRelacionados: [4, 8],
        opcoes: [
          {
            texto: 'Sim, buscamos cursos e atualizações técnicas com frequência.',
            nivel: 'boa',
            feedback: 'Excelente! Isso mantém a equipe qualificada e competitiva, apoiando o ODS 4 e o ODS 8.'
          },
          {
            texto: 'De vez em quando, sem uma frequência definida.',
            nivel: 'parcial',
            feedback: 'Definir um plano simples de capacitação anual fortalece a qualificação da equipe (ODS 4).'
          },
          {
            texto: 'Não há capacitação formal da equipe.',
            nivel: 'melhorar',
            feedback: 'Buscar cursos gratuitos de fabricantes ou sindicatos é um caminho acessível para avançar no ODS 4 e ODS 8.'
          }
        ]
      },
      {
        id: 'oficina-5',
        texto: 'Como é a transparência com o cliente sobre orçamentos e serviços realizados?',
        odsRelacionados: [16],
        opcoes: [
          {
            texto: 'Sempre apresentamos orçamento claro e detalhado antes de qualquer serviço.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso fortalece a confiança e relações justas com o cliente, alinhado ao ODS 16 (Paz, Justiça e Instituições Eficazes).'
          },
          {
            texto: 'Explicamos quando perguntam, mas nem sempre de forma detalhada.',
            nivel: 'parcial',
            feedback: 'Adotar a transparência como prática padrão (não só quando perguntado) fortalece a confiança e o ODS 16.'
          },
          {
            texto: 'Não costumamos detalhar orçamentos ou serviços.',
            nivel: 'melhorar',
            feedback: 'A transparência é essencial para relações de confiança. Criar um modelo simples de orçamento detalhado já ajuda bastante (ODS 16).'
          }
        ]
      }
    ]
  },

  {
    id: 'comercio',
    nome: 'Comércio / Escritório',
    imagem: '/img/ods8.png',
    descricao: 'Lojas, escritórios e negócios em geral.',
    perguntas: [
      {
        id: 'comercio-1',
        texto: 'Como sua empresa lida com resíduos (papel, plástico, eletrônicos)?',
        odsRelacionados: [12],
        opcoes: [
          {
            texto: 'Temos coleta seletiva e parcerias para reciclagem/reaproveitamento.',
            nivel: 'boa',
            feedback: 'Excelente! Isso fortalece diretamente o ODS 12 (Consumo e Produção Responsáveis).'
          },
          {
            texto: 'Separamos alguns materiais, mas sem uma rotina consistente.',
            nivel: 'parcial',
            feedback: 'Bom começo! Formalizar a coleta seletiva com pontos fixos de descarte fortalece ainda mais o ODS 12.'
          },
          {
            texto: 'Todo o lixo é descartado junto, sem separação.',
            nivel: 'melhorar',
            feedback: 'Implementar a separação básica de resíduos é um primeiro passo simples e acessível para o ODS 12.'
          }
        ]
      },
      {
        id: 'comercio-2',
        texto: 'Existe alguma prática de consumo consciente de energia (iluminação, equipamentos)?',
        odsRelacionados: [7],
        opcoes: [
          {
            texto: 'Sim, usamos equipamentos eficientes e monitoramos o consumo.',
            nivel: 'boa',
            feedback: 'Muito bom! O uso consciente de energia apoia o ODS 7 (Energia Acessível e Limpa) e reduz custos.'
          },
          {
            texto: 'Tentamos economizar no dia a dia, mas sem monitoramento.',
            nivel: 'parcial',
            feedback: 'Acompanhar a conta de energia mensalmente pode revelar oportunidades simples de economia (ODS 7).'
          },
          {
            texto: 'Não há nenhuma preocupação com esse tema.',
            nivel: 'melhorar',
            feedback: 'Vale um primeiro olhar sobre o consumo de energia — pequenas mudanças de hábito já geram impacto (ODS 7).'
          }
        ]
      },
      {
        id: 'comercio-3',
        texto: 'Como é a política de contratação da empresa em relação à diversidade e inclusão?',
        odsRelacionados: [5, 8, 10],
        opcoes: [
          {
            texto: 'Temos práticas ativas de contratação inclusiva e diversa.',
            nivel: 'boa',
            feedback: 'Excelente! Isso fortalece a igualdade de gênero (ODS 5), o trabalho decente (ODS 8) e a redução das desigualdades (ODS 10).'
          },
          {
            texto: 'Não discriminamos, mas também não temos uma política ativa.',
            nivel: 'parcial',
            feedback: 'Formalizar critérios de contratação inclusiva fortalece ainda mais o ODS 10 e o ODS 5.'
          },
          {
            texto: 'Nunca paramos para pensar sobre esse tema.',
            nivel: 'melhorar',
            feedback: 'Vale refletir sobre isso com a equipe de gestão — um passo relevante rumo ao ODS 5, ODS 8 e ODS 10.'
          }
        ]
      },
      {
        id: 'comercio-4',
        texto: 'A empresa mantém uma relação ética e transparente com fornecedores e clientes?',
        odsRelacionados: [16, 17],
        opcoes: [
          {
            texto: 'Sim, prezamos por contratos claros, prazos justos e parcerias de longo prazo.',
            nivel: 'boa',
            feedback: 'Muito bom! Isso fortalece relações justas (ODS 16) e parcerias sólidas para o desenvolvimento (ODS 17).'
          },
          {
            texto: 'Tentamos ser justos, mas sem processos formais.',
            nivel: 'parcial',
            feedback: 'Formalizar acordos e prazos com fornecedores fortalece a confiança e o ODS 16.'
          },
          {
            texto: 'Não há preocupação formal com isso.',
            nivel: 'melhorar',
            feedback: 'Vale estruturar relações mais claras com fornecedores e clientes — um passo simples para o ODS 16 e ODS 17.'
          }
        ]
      },
      {
        id: 'comercio-5',
        texto: 'A equipe recebe capacitações ou treinamentos com alguma frequência?',
        odsRelacionados: [4, 8],
        opcoes: [
          {
            texto: 'Sim, promovemos treinamentos e atualizações regularmente.',
            nivel: 'boa',
            feedback: 'Excelente! Isso fortalece o ODS 4 (Educação) e gera trabalho mais qualificado e decente (ODS 8).'
          },
          {
            texto: 'De vez em quando, sem uma frequência definida.',
            nivel: 'parcial',
            feedback: 'Criar um calendário simples de capacitações fortalece a qualificação da equipe (ODS 4).'
          },
          {
            texto: 'Não há treinamentos formais.',
            nivel: 'melhorar',
            feedback: 'Buscar cursos gratuitos ou parcerias locais é um caminho acessível para avançar no ODS 4 e ODS 8.'
          }
        ]
      }
    ]
  }
]

export default areasAvaliacao
