import { Tratamento } from '@/types'

export const tratamentos: Tratamento[] = [
  {
    slug: 'harmonizacao-facial',
    nome: 'Harmonização Facial',
    categoria: 'rosto',
    categoriaLabel: 'Rosto',
    descricao: 'Conjunto de procedimentos minimamente invasivos para equilibrar as proporções do rosto e valorizar seus traços — sem descaracterizar o que é único em você.',
    descricaoLonga: 'A harmonização facial é uma abordagem estética que combina diferentes técnicas — como toxina botulínica, preenchimento dérmico e bioestimuladores — para equilibrar as proporções do rosto de forma planejada. Na Uniko Clinic, o ponto de partida é sempre a avaliação individual: entendemos o que incomoda, o que precisa ser respeitado e o que pode ser ajustado para que o resultado preserve sua identidade. A harmonização não muda quem você é — trabalha para que você se veja melhor ao se olhar no espelho.',
    imagem: '/images/tratamentos/harmonizacao-facial.jpg',
    indicacao: [
      'Assimetrias que incomodam nas proporções do rosto',
      'Perda de volume e definição facial com o envelhecimento',
      'Desproporção entre diferentes regiões do rosto (lábios, maçãs do rosto, queixo, mandíbula)',
      'Sinais de envelhecimento que afetam o equilíbrio visual do rosto',
      'Quem busca rejuvenescimento sem cirurgia, com resultado natural e planejado',
    ],
    beneficios: [
      'Planejamento que considera o rosto como um todo, não por procedimento isolado',
      'Resultado que preserva a identidade e os traços únicos de cada paciente',
      'Procedimentos minimamente invasivos com baixo tempo de recuperação',
      'Combinação de técnicas adaptada para cada caso e objetivo',
      'Melhora visual das proporções sem padronizar o rosto',
    ],
    comoFunciona: 'O ponto de partida é a avaliação detalhada dos traços, proporções e características do rosto. A partir dessa análise, Andréia Sarzi define quais técnicas fazem sentido — preenchimento, toxina botulínica, bioestimuladores ou a combinação delas — e em que quantidade e região cada uma deve ser aplicada. Não existe um protocolo padrão: cada plano é construído para um rosto específico.',
    duracaoECuidados: 'A duração varia conforme os procedimentos utilizados: toxina botulínica dura em média de 3 a 6 meses; preenchimento e bioestimuladores, de 6 meses a 2 anos — com variação individual. Nas primeiras 24 horas após os procedimentos: evitar sol intenso, exercícios físicos intensos e álcool.',
    quandoFazSentido: [
      'Sente que o rosto perdeu harmonia ou definição com o passar do tempo',
      'Percebe proporções que incomodam ao se olhar no espelho, mas não quer uma mudança radical',
      'Busca rejuvenescimento sem cirurgia e com resultado que preserve sua naturalidade',
      'Quer equilibrar regiões específicas do rosto com planejamento e segurança',
    ],
    oQueNaoFaz: [
      'Não altera sua identidade nem padroniza os traços do rosto — o objetivo é o equilíbrio, não a transformação',
      'Não oferece simetria perfeita em todos os casos — o rosto humano tem variações naturais que precisam ser respeitadas',
      'Não substitui procedimentos cirúrgicos quando há indicação médica para cirurgia',
      'Não é permanente — todos os materiais injetáveis têm duração e precisam de manutenção ao longo do tempo',
    ],
    faq: [
      {
        pergunta: 'Harmonização facial é para todas as idades?',
        resposta: 'Sim. O que muda é o objetivo e as técnicas utilizadas em cada faixa etária. Na avaliação gratuita, entendemos o que faz sentido para o seu caso específico.',
      },
      {
        pergunta: 'O resultado fica artificial?',
        resposta: 'Quando realizada com planejamento e técnica adequados, a harmonização preserva os traços únicos de cada paciente. O objetivo é que você pareça mais você — não que pareça outra pessoa.',
      },
      {
        pergunta: 'Preciso fazer avaliação antes?',
        resposta: 'Sim, e ela é gratuita. A avaliação é o passo mais importante: é nela que entendemos o que você sente, o que pode ser ajustado e quais técnicas fazem sentido para o seu rosto.',
      },
      {
        pergunta: 'Posso combinar procedimentos em uma mesma sessão?',
        resposta: 'Em muitos casos sim. A combinação de técnicas em uma mesma sessão depende do protocolo planejado na avaliação. O plano é definido individualmente.',
      },
      {
        pergunta: 'Quanto tempo dura o resultado?',
        resposta: 'Varia conforme as técnicas utilizadas. Toxina botulínica dura em média de 3 a 6 meses; preenchimento e bioestimuladores, de 6 meses a 2 anos — com variação individual.',
      },
      {
        pergunta: 'Quanto tempo leva o procedimento?',
        resposta: 'Depende do protocolo planejado, mas em geral entre 30 minutos e 1 hora e 30 minutos.',
      },
    ],
    destaque: true,
  },
  {
    slug: 'toxina-botulinica',
    nome: 'Toxina Botulínica',
    categoria: 'rosto',
    categoriaLabel: 'Rosto',
    descricao: 'Suaviza linhas de expressão na testa, entre as sobrancelhas e ao redor dos olhos com naturalidade — sem congelar o rosto ou apagar as expressões.',
    descricaoLonga: 'A toxina botulínica age na musculatura facial para reduzir as contrações responsáveis pelas marcas de expressão: linhas na testa, glabela (a chamada "cara de brava") e pés de galinha. Na Uniko Clinic, a aplicação é planejada para suavizar sem deixar o rosto estático — preservando a naturalidade das expressões e respeitando a anatomia de cada paciente. A dose e os pontos de aplicação variam de pessoa para pessoa: não existe uma fórmula única.',
    imagem: '/images/tratamentos/toxina-botulinica.jpg',
    indicacao: [
      'Linhas horizontais na testa',
      'Marca entre as sobrancelhas (glabela / cara de brava)',
      'Pés de galinha ao redor dos olhos',
      'Prevenção do aprofundamento de rugas de expressão',
      'Elevação leve do arco da sobrancelha',
      'Sorriso gengival',
      'Bruxismo e tensão mandibular',
    ],
    beneficios: [
      'Suaviza marcas sem apagar as expressões',
      'Procedimento rápido, com retorno às atividades no mesmo dia',
      'Pode atuar de forma preventiva no aprofundamento de rugas',
      'Resultado progressivo e natural ao longo de 7 a 14 dias',
      'Pode ser combinado com preenchimento ou bioestimuladores em um planejamento',
    ],
    comoFunciona: 'Microinjeções precisas na musculatura tratada bloqueiam temporariamente o sinal nervoso responsável pela contração, reduzindo o movimento que cria e aprofunda as marcas de expressão. A dose e os pontos de aplicação são definidos na avaliação para cada rosto.',
    duracaoECuidados: 'O efeito costuma durar entre 3 e 6 meses, com variação individual — metabolismo, hábitos e quantidade aplicada influenciam a durabilidade. Nas primeiras 24 horas: evitar atividade física intensa, calor, álcool e não massagear a região tratada.',
    quandoFazSentido: [
      'Linhas na testa ou entre as sobrancelhas incomodam, mesmo quando o rosto está em repouso',
      'Pés de galinha ao redor dos olhos aparecem ou se aprofundaram',
      'Quer agir de forma preventiva para retardar o surgimento de rugas mais marcadas',
      'A expressão de brava ou de cansaço não corresponde ao que sente',
      'Bruxismo ou tensão na mandíbula causam desconforto',
    ],
    oQueNaoFaz: [
      'Não preenche sulcos profundos nem trata flacidez — para esses objetivos, o preenchimento ou os bioestimuladores podem ser mais indicados',
      'Não elimina completamente marcas já muito aprofundadas — pode suavizá-las, mas alguns casos exigem abordagem combinada',
      'Não deixa o rosto congelado quando aplicado com técnica e dose adequadas — o objetivo é suavizar, não paralisar expressões',
      'A durabilidade não é igual para todas as pessoas — o organismo de cada uma metaboliza de forma diferente',
    ],
    faq: [
      {
        pergunta: 'A aplicação de toxina botulínica dói?',
        resposta: 'O desconforto é mínimo. Utilizamos agulhas ultrafinas e, quando necessário, anestesia tópica para maior conforto durante a sessão.',
      },
      {
        pergunta: 'Vou ficar com o rosto congelado?',
        resposta: 'Não. Quando aplicada com técnica e dose adequadas, a toxina suaviza as marcas preservando a naturalidade das expressões. O objetivo é que você pareça descansada, não diferente.',
      },
      {
        pergunta: 'Quando começo a ver o resultado?',
        resposta: 'Os primeiros efeitos aparecem entre 3 e 7 dias após a aplicação. O resultado costuma ser observado completamente por volta do 14º dia.',
      },
      {
        pergunta: 'Quanto tempo dura o efeito?',
        resposta: 'Em média entre 3 e 6 meses, com variação individual. Fatores como metabolismo, quantidade aplicada e hábitos do dia a dia influenciam a durabilidade.',
      },
      {
        pergunta: 'Posso fazer toxina durante a gravidez ou amamentação?',
        resposta: 'Não. A toxina botulínica é contraindicada durante a gestação e o período de amamentação.',
      },
      {
        pergunta: 'Preciso fazer avaliação antes?',
        resposta: 'Sim, e ela é gratuita. Na avaliação analisamos os músculos, a intensidade das marcas e o que faz sentido para o seu rosto — antes de qualquer procedimento.',
      },
    ],
    destaque: true,
  },
  {
    slug: 'preenchimento-facial-labial',
    nome: 'Preenchimento Facial e Labial',
    categoria: 'rosto',
    categoriaLabel: 'Rosto',
    descricao: 'Repõe volume, define contornos e harmoniza as proporções faciais com ácido hialurônico — de forma natural, reversível e planejada para cada rosto.',
    descricaoLonga: 'O preenchimento com ácido hialurônico permite repor volume perdido, corrigir sulcos, definir contornos e trabalhar os lábios com proporção e equilíbrio. Por ser um material biocompatível — presente naturalmente no organismo — oferece resultado natural e é reversível quando necessário. Na Uniko Clinic, cada aplicação é parte de um planejamento facial: não tratamos regiões isoladas sem considerar o rosto como um todo.',
    imagem: '/images/tratamentos/preenchimento.jpg',
    indicacao: [
      'Lábios com perda de volume ou definição do contorno',
      'Sulco nasogeniano (bigode chinês) aprofundado',
      'Maçãs do rosto com perda de projeção ou volume',
      'Olheiras com afundamento da região sob os olhos',
      'Definição do contorno da mandíbula e do queixo',
      'Reposição de volume em regiões que envelheceram com o tempo',
    ],
    beneficios: [
      'Melhora visual perceptível já na sessão',
      'Material biocompatível e reversível com hialuronidase se necessário',
      'Abordagem planejada para o rosto como um todo, não por região isolada',
      'Pode estimular a produção natural de colágeno ao longo do tempo',
      'Baixo tempo de recuperação',
    ],
    comoFunciona: 'O ácido hialurônico é aplicado em camadas e regiões específicas do rosto com cânulas ou agulhas finas, conforme a área tratada. A quantidade, a profundidade e os pontos de aplicação são definidos na avaliação para respeitar as proporções do rosto de cada paciente — o resultado deve parecer natural, não artificial.',
    duracaoECuidados: 'A duração varia entre 6 meses e 2 anos, dependendo da região tratada, do produto utilizado e do organismo de cada pessoa. Lábios tendem a durar menos que outras áreas. Nas primeiras 24 a 48 horas: evitar sol intenso, calor, exercícios e álcool. Inchaço leve e pequenas equimoses são possíveis e transitórios.',
    quandoFazSentido: [
      'O rosto perdeu volume com o tempo e parece mais cansado ou encovado',
      'Quer definir ou volumizar os lábios de forma equilibrada, sem exagero',
      'O sulco nasogeniano (bigode chinês) se aprofundou e chama atenção',
      'Quer suavizar assimetrias nas proporções faciais',
      'O contorno da mandíbula ou do queixo perdeu definição',
    ],
    oQueNaoFaz: [
      'Não trata rugas causadas por contração muscular — nesses casos, a toxina botulínica costuma ser mais indicada',
      'Não substitui procedimentos cirúrgicos quando há indicação clínica para cirurgia',
      'Não oferece simetria perfeita em todos os casos — o rosto humano tem variações naturais que precisam ser respeitadas',
      'Não é indicado sem avaliação prévia: quantidade e região são definidas individualmente para cada planejamento facial',
    ],
    faq: [
      {
        pergunta: 'A aplicação de preenchimento dói?',
        resposta: 'O desconforto costuma ser leve. Utilizamos anestesia tópica antes do procedimento e, em algumas áreas, cânulas que minimizam o desconforto durante a aplicação.',
      },
      {
        pergunta: 'O resultado fica artificial?',
        resposta: 'Um preenchimento bem planejado respeita as proporções do seu rosto e resulta em algo natural. Na Uniko Clinic, o objetivo é que você pareça mais você — não diferente.',
      },
      {
        pergunta: 'Posso desfazer o preenchimento se não gostar?',
        resposta: 'Sim. O ácido hialurônico pode ser dissolvido com a aplicação de hialuronidase, uma enzima que desfaz o produto de forma segura.',
      },
      {
        pergunta: 'Quanto tempo dura?',
        resposta: 'De 6 meses a 2 anos, dependendo da região, do produto e do organismo de cada pessoa. Lábios tendem a durar menos que outras áreas devido à maior movimentação.',
      },
      {
        pergunta: 'Posso me expor ao sol depois?',
        resposta: 'Nas primeiras 24 a 48 horas é recomendável evitar sol intenso, sauna e calor. Protetor solar diário é essencial na rotina.',
      },
      {
        pergunta: 'Preciso de avaliação antes do preenchimento?',
        resposta: 'Sim, e a avaliação é gratuita. É nela que definimos o planejamento facial: quais regiões trabalhar, qual quantidade faz sentido e como preservar a naturalidade do resultado.',
      },
    ],
    destaque: true,
  },
  {
    slug: 'bioestimuladores-colageno',
    nome: 'Bioestimuladores de Colágeno',
    categoria: 'rosto',
    categoriaLabel: 'Rosto',
    descricao: 'Estimula a produção natural de colágeno para recuperar a firmeza e a elasticidade da pele de forma progressiva — indicado para rosto, pescoço, colo e corpo.',
    descricaoLonga: 'Os bioestimuladores de colágeno são substâncias injetáveis que ativam os fibroblastos — células responsáveis pela produção de colágeno — estimulando a renovação da estrutura da própria pele. O resultado não é imediato, mas progressivo: a pele ganha mais firmeza, elasticidade e qualidade ao longo de semanas, de dentro para fora. Na Uniko Clinic, os bioestimuladores são indicados como parte de um planejamento individual, considerando a condição da pele, a região a ser tratada e o objetivo de cada paciente.',
    imagem: '/images/tratamentos/bioestimuladores.jpg',
    indicacao: [
      'Flacidez facial com perda de firmeza e contorno',
      'Pele do pescoço e colo com pouca elasticidade',
      'Flacidez corporal (abdômen, braços, coxas)',
      'Pele com sinais precoces de envelhecimento',
      'Quem busca melhora progressiva da qualidade da pele a longo prazo',
    ],
    beneficios: [
      'Estimula o colágeno da própria pele — sem adicionar volumes artificiais',
      'Resultado progressivo e de longa duração',
      'Pode ser aplicado no rosto, pescoço, colo e regiões corporais',
      'Combina bem com outros procedimentos dentro de um planejamento',
      'Resultado natural — melhora visível sem alterar as características do rosto',
    ],
    comoFunciona: 'O produto é injetado em pontos estratégicos da região tratada, estimulando os fibroblastos a produzirem mais colágeno e outros componentes da matriz da pele. A melhora acontece de forma gradual ao longo de 4 a 8 semanas, com resultado que se consolida nos meses seguintes. O número de sessões e o intervalo entre elas variam conforme a avaliação individual.',
    duracaoECuidados: 'Os resultados costumam se consolidar entre 4 e 8 semanas após cada sessão e podem durar de 18 meses a 2 anos, com variação individual. Em algumas regiões, pode ser orientado massagear o local nos dias seguintes à aplicação. Evitar sol sem proteção e manter rotina de skincare.',
    quandoFazSentido: [
      'Percebe que a pele ficou mais flácida e menos firme, especialmente no rosto, pescoço ou colo',
      'Quer uma melhora progressiva e de longa duração, sem resultado artificial',
      'Prefere estimular a própria pele a produzir colágeno em vez de apenas repor volumes',
      'Busca qualidade de pele mais global — firmeza, elasticidade e textura — não apenas correção pontual',
    ],
    oQueNaoFaz: [
      'Não oferece resultado imediato — a melhora é progressiva e se consolida ao longo de semanas',
      'Não substitui o preenchimento quando há perda importante de volume facial que precisa ser reposta',
      'Não trata rugas de expressão muscular — para isso, a toxina botulínica é o caminho mais indicado',
      'Não produz efeito "lifting cirúrgico" — melhora a qualidade e a firmeza da pele dentro do que o tratamento minimamente invasivo permite',
    ],
    faq: [
      {
        pergunta: 'O resultado é visível para os outros?',
        resposta: 'Sim, mas de forma gradual e natural — as pessoas ao redor costumam perceber que a pele está mais firme e descansada, sem necessariamente associar a um procedimento.',
      },
      {
        pergunta: 'Quando começo a ver o resultado?',
        resposta: 'As primeiras melhoras costumam aparecer entre 4 e 8 semanas após a sessão. O resultado mais completo se consolida ao longo dos meses seguintes.',
      },
      {
        pergunta: 'Quantas sessões são necessárias?',
        resposta: 'O protocolo varia conforme a condição da pele e o objetivo. Em geral são realizadas de 1 a 3 sessões, com intervalo definido na avaliação.',
      },
      {
        pergunta: 'Para quais regiões pode ser aplicado?',
        resposta: 'Rosto, pescoço, colo, abdômen, braços e coxas são exemplos de regiões tratadas. A indicação depende da avaliação individual.',
      },
      {
        pergunta: 'Posso combinar com outros procedimentos?',
        resposta: 'Sim. Os bioestimuladores combinam bem com toxina botulínica, preenchimento e outros protocolos. O planejamento é definido na avaliação gratuita.',
      },
    ],
    destaque: false,
  },
  {
    slug: 'laser-e-tecnologias',
    nome: 'Laser e Tecnologias',
    categoria: 'pele',
    categoriaLabel: 'Pele',
    descricao: 'Tratamentos precisos para manchas, textura irregular, poros dilatados, vermelhidão e rejuvenescimento — com tecnologia adequada para cada tipo de pele e condição.',
    descricaoLonga: 'Na Uniko Clinic, os tratamentos a laser e com tecnologias de luz são indicados para melhorar condições específicas da pele: manchas causadas pelo sol, melasma, vermelhidão, rosácea, poros dilatados, textura irregular e marcas do envelhecimento. A escolha do equipamento e do protocolo depende diretamente do fototipo, da condição a ser tratada e da profundidade da alteração — por isso, a avaliação prévia é indispensável antes de qualquer indicação.',
    imagem: '/images/tratamentos/laser.jpg',
    indicacao: [
      'Manchas solares e irregularidades na pigmentação da pele',
      'Melasma (avaliação obrigatória antes da indicação)',
      'Vermelhidão, rosácea e lesões vasculares superficiais',
      'Poros dilatados e textura irregular da pele',
      'Rugas finas e sinais precoces de envelhecimento',
      'Rejuvenescimento global da pele',
    ],
    beneficios: [
      'Tratamento preciso e direcionado para cada condição',
      'Pouca invasividade com recuperação mais rápida que procedimentos cirúrgicos',
      'Melhora progressiva da qualidade e uniformidade da pele',
      'Protocolo adaptado para diferentes fotótipos',
      'Pode ser combinado com peelings e outros tratamentos para pele',
    ],
    comoFunciona: 'O laser emite energia de comprimento de onda específico que age de forma seletiva em estruturas-alvo da pele — como a melanina nas manchas ou os vasos nos casos de vermelhidão. Essa energia estimula a renovação celular e a produção de colágeno, melhorando a condição tratada ao longo das sessões. O tipo de laser, a potência e o número de sessões são definidos individualmente na avaliação.',
    duracaoECuidados: 'O número de sessões varia conforme a condição e a profundidade da alteração — algumas situações podem exigir entre 3 e 8 sessões. O uso de protetor solar fator alto é obrigatório durante todo o tratamento e deve ser mantido na rotina diária. Evitar exposição solar direta nas semanas seguintes a cada sessão.',
    quandoFazSentido: [
      'Manchas solares ou irregularidades no tom da pele incomodam e não melhoram com skincare domiciliar',
      'Vermelhidão, rosácea ou lesões vasculares na pele afetam a aparência',
      'Poros dilatados e textura irregular persistem mesmo com cuidados em casa',
      'Busca rejuvenescimento da pele com poucos dias de recuperação',
    ],
    oQueNaoFaz: [
      'Não resolve manchas ou melasma em uma única sessão — resultados dependem do tipo de condição, da profundidade e do protocolo indicado',
      'Não clarea a pele de forma uniforme — o objetivo é tratar condições específicas, não alterar o fototipo',
      'Não é adequado sem avaliação do fototipo: o protocolo errado pode comprometer o resultado em peles mais escuras',
      'Não substitui acompanhamento dermatológico em casos de melasma severo ou condições mais complexas',
    ],
    faq: [
      {
        pergunta: 'O laser dói?',
        resposta: 'A sensação varia conforme o tipo de laser e a região tratada. Em geral há uma sensação de calor e leve formigamento durante a aplicação — bem tolerada pela maioria das pacientes. Anestesia tópica pode ser utilizada quando necessário.',
      },
      {
        pergunta: 'Quantas sessões são necessárias?',
        resposta: 'Depende da condição e da profundidade da alteração. Manchas superficiais podem responder em poucas sessões; condições como melasma exigem protocolo mais prolongado. O número exato é definido na avaliação.',
      },
      {
        pergunta: 'O laser funciona para melasma?',
        resposta: 'O melasma é uma condição complexa que exige avaliação cuidadosa antes de qualquer indicação de laser — não é todo protocolo que se aplica a esse caso. A avaliação gratuita é o primeiro passo para entender o que faz sentido para o seu caso específico.',
      },
      {
        pergunta: 'Posso me expor ao sol depois das sessões?',
        resposta: 'Não nas semanas seguintes a cada sessão. O protetor solar fator alto deve ser usado diariamente durante e após o tratamento — é parte essencial do resultado.',
      },
      {
        pergunta: 'Todos os fotótipos podem fazer laser?',
        resposta: 'Na maioria dos casos sim, mas o tipo de laser e o protocolo precisam ser adequados ao fototipo de cada paciente. Por isso a avaliação antes do tratamento é indispensável.',
      },
    ],
    destaque: true,
  },
  {
    slug: 'depilacao-a-laser',
    nome: 'Depilação a Laser',
    categoria: 'corpo',
    categoriaLabel: 'Corpo',
    descricao: 'Reduz progressivamente pelos indesejados em qualquer região do corpo — com tecnologia adaptada para diferentes fotótipos e atenção às particularidades de cada pele.',
    descricaoLonga: 'A depilação a laser é um dos métodos mais eficazes para reduzir pelos indesejados de forma duradoura. O laser age na melanina do pelo, atingindo o folículo piloso sem danificar a pele ao redor. Como os pelos passam por diferentes fases de crescimento, o tratamento requer várias sessões para alcançar todos os folículos em fase ativa. Na Uniko Clinic, utilizamos tecnologia adequada para diferentes fotótipos de pele e o protocolo — número de sessões, potência e intervalo — é definido individualmente na avaliação.',
    imagem: '/images/tratamentos/depilacao-laser.jpg',
    indicacao: [
      'Axilas, virilha e região do biquíni',
      'Pernas, braços e costas',
      'Rosto (buço, queixo, lateral)',
      'Qualquer região corporal com pelos indesejados',
      'Foliculite e pelos encravados recorrentes causados pela depilação convencional',
    ],
    beneficios: [
      'Redução significativa e duradoura dos pelos',
      'Pode contribuir para a melhora da foliculite e dos pelos encravados recorrentes',
      'Praticidade — menos tempo e preocupação com depilação no dia a dia',
      'Tecnologia adaptada para diferentes fotótipos de pele',
      'Procedimento rápido por região tratada',
    ],
    comoFunciona: 'O laser emite energia que é absorvida pela melanina do pelo, aquecendo e danificando o folículo piloso sem afetar a pele ao redor. Cada sessão atinge os pelos em fase de crescimento ativo — por isso são necessárias múltiplas sessões para tratar folículos em diferentes fases do ciclo. Com o avanço das sessões, a maioria dos pelos tratados apresenta redução progressiva.',
    duracaoECuidados: 'Em geral são necessárias entre 6 e 10 sessões, com intervalo de 4 a 8 semanas — o número varia conforme a região, o fototipo e as características do pelo. Não depilar com cera ou pinça entre as sessões (apenas barbeador). Usar protetor solar fator alto em áreas expostas durante todo o tratamento. Sessões de manutenção ocasionais podem ser necessárias em algumas regiões.',
    quandoFazSentido: [
      'Cansaço da rotina frequente de depilação com cera, lâmina ou depilatório',
      'Pelos encravados ou foliculite recorrente causados pela depilação convencional',
      'Pelos escuros em regiões como axilas, virilha ou pernas que incomodam',
      'Busca uma solução de longa duração sem precisar se preocupar constantemente com os pelos',
    ],
    oQueNaoFaz: [
      'Não age em pelos brancos, loiros muito claros ou ruivos sem pigmentação suficiente — a melanina do pelo é necessária para o laser funcionar',
      'Não elimina 100% dos pelos em todas as pessoas — o resultado é uma redução significativa e duradoura, que varia conforme fototipo, espessura e região',
      'Não dispensa o uso de protetor solar durante o tratamento — a pele precisa estar protegida entre as sessões',
      'Algumas regiões ou fotótipos podem exigir mais sessões ou manutenções ocasionais ao longo do tempo',
    ],
    faq: [
      {
        pergunta: 'A depilação a laser dói?',
        resposta: 'A sensação durante a sessão varia por pessoa e região, mas costuma ser tolerável — similar a um leve estalo. Utilizamos equipamentos com sistema de resfriamento para maior conforto.',
      },
      {
        pergunta: 'Quantas sessões são necessárias?',
        resposta: 'Em média entre 6 e 10 sessões, com intervalo de 4 a 8 semanas. O número exato depende da região, das características do pelo e do fototipo — o protocolo é definido na avaliação.',
      },
      {
        pergunta: 'A depilação a laser funciona em todos os tipos de pele?',
        resposta: 'Na maioria dos casos sim. Temos tecnologia específica para diferentes fotótipos, incluindo peles mais escuras. Porém, pelos brancos ou muito claros sem pigmentação suficiente não respondem ao laser.',
      },
      {
        pergunta: 'Preciso raspar antes da sessão?',
        resposta: 'Sim, a região deve estar barbeada (não depilada com cera ou pinça) no dia da sessão. O pelo precisa estar curto para o laser agir diretamente no folículo.',
      },
      {
        pergunta: 'Posso me expor ao sol durante o tratamento?',
        resposta: 'Evitar exposição solar direta nas áreas tratadas é essencial, especialmente nos 15 dias seguintes a cada sessão. O uso de protetor solar fator alto é obrigatório.',
      },
      {
        pergunta: 'Posso fazer durante a gravidez?',
        resposta: 'Não. A depilação a laser é contraindicada durante a gestação.',
      },
    ],
    destaque: true,
  },
  {
    slug: 'tratamentos-corporais',
    nome: 'Tratamentos Corporais',
    categoria: 'corpo',
    categoriaLabel: 'Corpo',
    descricao: 'Protocolos individualizados para modelagem do contorno corporal, redução de gordura localizada e tratamento da flacidez — com tecnologias não invasivas e planejamento personalizado.',
    descricaoLonga: 'Os tratamentos corporais da Uniko Clinic utilizam tecnologias como radiofrequência, ultrassom focado e outros recursos para atuar na gordura localizada, na flacidez e na celulite de forma não invasiva. O protocolo é sempre definido na avaliação individual — não existe plano genérico. Cada caso tem uma abordagem própria, com objetivo, número de sessões e tecnologias escolhidas para o que faz sentido para aquele corpo específico.',
    imagem: '/images/tratamentos/corporais.jpg',
    indicacao: [
      'Gordura localizada que não responde adequadamente à alimentação equilibrada e à atividade física',
      'Flacidez corporal (abdômen, braços, coxas, glúteos)',
      'Pós-parto com perda de firmeza e contorno corporal',
      'Celulite e fibrose que incomodam na pele',
      'Modelagem e melhora do contorno corporal sem procedimentos invasivos',
    ],
    beneficios: [
      'Tecnologias não invasivas adaptadas para cada objetivo corporal',
      'Protocolo individualizado — sem planos genéricos',
      'Pode complementar hábitos saudáveis e ampliar os resultados',
      'Aborda gordura localizada, flacidez e celulite de forma direcionada',
      'Acompanhamento individual ao longo do protocolo',
    ],
    comoFunciona: 'Na avaliação, identificamos quais regiões e objetivos fazem sentido trabalhar e quais tecnologias são mais adequadas para cada caso. O protocolo é então definido com número de sessões, intervalo e orientações específicas. Durante as sessões, as tecnologias agem nas estruturas-alvo — gordura, tecido conjuntivo ou fibras de colágeno — de forma progressiva e segura.',
    duracaoECuidados: 'O número de sessões e o intervalo variam conforme o objetivo e o protocolo definido na avaliação. Os resultados são progressivos e se consolidam ao longo do tratamento. Hidratação adequada, alimentação equilibrada e prática de atividade física contribuem para potencializar e manter os resultados.',
    quandoFazSentido: [
      'Gordura localizada que resiste à alimentação equilibrada e à atividade física',
      'Flacidez corporal após perda de peso ou pós-parto',
      'Celulite ou fibrose que incomoda no contorno corporal',
      'Quer modelar e melhorar o contorno sem procedimentos invasivos',
    ],
    oQueNaoFaz: [
      'Não substitui alimentação equilibrada e atividade física — esses hábitos são essenciais para potencializar e manter os resultados',
      'Não trata obesidade, excesso de peso ou condições metabólicas',
      'Não oferece resultado igual para todos — o protocolo e os resultados esperados são definidos na avaliação individual',
      'A manutenção dos resultados depende de hábitos saudáveis sustentados ao longo do tempo',
    ],
    faq: [
      {
        pergunta: 'Os tratamentos corporais doem?',
        resposta: 'A maioria dos protocolos é bem tolerada. Algumas tecnologias podem causar sensação de calor ou pressão durante a sessão, mas o desconforto costuma ser mínimo.',
      },
      {
        pergunta: 'Quantas sessões são necessárias?',
        resposta: 'Depende do objetivo e do protocolo indicado na avaliação. Em geral os tratamentos corporais exigem mais sessões do que os procedimentos faciais para resultados consistentes.',
      },
      {
        pergunta: 'Quando começo a ver resultado?',
        resposta: 'Os resultados são progressivos e costumam ser percebidos ao longo das sessões. A velocidade de resposta varia conforme o tipo de tratamento, a condição tratada e o organismo de cada pessoa.',
      },
      {
        pergunta: 'Posso combinar com outros procedimentos?',
        resposta: 'Sim, em muitos casos. A combinação de tecnologias — ou de tratamentos corporais com procedimentos faciais — pode ser planejada na avaliação conforme os objetivos de cada paciente.',
      },
      {
        pergunta: 'Preciso de avaliação antes?',
        resposta: 'Sim, e ela é gratuita. Na avaliação identificamos quais regiões e tecnologias fazem sentido para o seu caso — e o que não faz — antes de iniciar qualquer protocolo.',
      },
      {
        pergunta: 'Os resultados são permanentes?',
        resposta: 'Os resultados são duradouros quando associados a hábitos saudáveis. Sem manutenção desses hábitos, a tendência é que os efeitos diminuam ao longo do tempo.',
      },
    ],
    destaque: false,
  },
  {
    slug: 'tratamentos-para-pele',
    nome: 'Tratamentos para Pele',
    categoria: 'pele',
    categoriaLabel: 'Pele',
    descricao: 'Protocolos personalizados para acne, manchas, textura irregular, poros dilatados e revitalização — pensados para a condição e o tipo específico de cada pele.',
    descricaoLonga: 'Os tratamentos para pele da Uniko Clinic são protocolos individualizados para condições como acne, manchas, melasma, poros dilatados, textura irregular e desidratação. Cada protocolo é montado após avaliação detalhada do tipo de pele, da condição presente e dos objetivos da paciente — porque o que funciona para um tipo de pele pode não funcionar para outro. O skincare domiciliar e a fotoproteção são parte fundamental de qualquer tratamento: o que se faz em casa sustenta o que se trata em consultório.',
    imagem: '/images/tratamentos/pele.jpg',
    indicacao: [
      'Acne ativa ou cicatrizes de acne que afetam a aparência e a autoestima',
      'Melasma e manchas persistentes',
      'Pele opaca, sem viço ou com sinais de desidratação',
      'Ressecamento e desequilíbrio da barreira cutânea',
      'Poros dilatados e textura irregular da pele',
    ],
    beneficios: [
      'Protocolo individualizado conforme o tipo e a condição da pele',
      'Abordagem que considera a causa, não apenas os sintomas visíveis',
      'Pode incluir peelings, skinboosters, hidratação profunda e outros recursos',
      'Orientação sobre skincare domiciliar para manter e potencializar os resultados',
      'Melhora progressiva da saúde e da qualidade da pele',
    ],
    comoFunciona: 'Tudo começa com a avaliação da pele: tipo, condições presentes, histórico e objetivos da paciente. A partir dessa análise, montamos um protocolo que pode incluir peelings químicos, skinboosters, protocolos de hidratação profunda, microagulhamento e outros recursos — combinados conforme o que faz sentido para aquela pele específica. As sessões são acompanhadas de orientação sobre skincare domiciliar.',
    duracaoECuidados: 'O protocolo e o número de sessões variam conforme a condição tratada — algumas situações exigem manutenção regular ao longo do tempo. O uso diário de protetor solar fator alto e um skincare adequado ao tipo de pele são essenciais para potencializar e manter qualquer resultado obtido em consultório.',
    quandoFazSentido: [
      'Acne ativa ou cicatrizes de acne que não melhoram com cuidados em casa',
      'Manchas e melasma persistentes que resistem ao skincare domiciliar',
      'Pele opaca, sem viço ou com sinais visíveis de desidratação',
      'Poros dilatados e textura irregular que incomodam',
    ],
    oQueNaoFaz: [
      'Não substitui acompanhamento dermatológico em casos de acne inflamatória severa ou melasma de alta complexidade',
      'Não oferece resultado igual para todas as peles — o protocolo é individualizado conforme o tipo e a condição',
      'Não dispensa o uso de protetor solar diário — a fotoproteção é parte essencial de qualquer tratamento de pele',
      'Resultados obtidos em consultório precisam de manutenção domiciliar para se sustentar',
    ],
    faq: [
      {
        pergunta: 'Preciso de avaliação antes de começar?',
        resposta: 'Sim, e ela é gratuita. A avaliação do tipo de pele e das condições presentes é o passo mais importante para montar um protocolo que realmente faça sentido para o seu caso.',
      },
      {
        pergunta: 'Os tratamentos para pele doem?',
        resposta: 'A maioria dos protocolos é bem tolerada. Peelings mais intensos podem causar formigamento ou sensação de calor durante a aplicação. O desconforto é temporário e varia conforme o tipo de tratamento.',
      },
      {
        pergunta: 'Quantas sessões são necessárias?',
        resposta: 'Depende da condição e do protocolo. Algumas condições como acne ou melasma exigem tratamento continuado ao longo do tempo. O número de sessões é definido na avaliação.',
      },
      {
        pergunta: 'Quando começo a ver resultado?',
        resposta: 'Os resultados são progressivos. Algumas pacientes percebem melhora na textura e no viço da pele desde as primeiras sessões; condições como manchas e melasma tendem a responder de forma mais gradual.',
      },
      {
        pergunta: 'Posso usar maquiagem depois das sessões?',
        resposta: 'Depende do procedimento realizado. Após peelings mais intensos, pode ser orientado evitar maquiagem por alguns dias. A equipe orientará sobre os cuidados após cada sessão.',
      },
      {
        pergunta: 'Tenho acne ativa. Posso fazer tratamento?',
        resposta: 'Sim. Existem protocolos indicados para acne ativa. A avaliação é essencial para identificar o tipo e a intensidade da acne e indicar o tratamento mais adequado para o seu caso.',
      },
    ],
    destaque: false,
  },
]

export function getTratamentoBySlug(slug: string): Tratamento | undefined {
  return tratamentos.find(t => t.slug === slug)
}

export function getTratamentosDestaque(): Tratamento[] {
  return tratamentos.filter(t => t.destaque)
}

export function getTratamentosByCategoria(categoria: string): Tratamento[] {
  if (!categoria || categoria === 'todos') return tratamentos
  return tratamentos.filter(t => t.categoria === categoria)
}
