/* Produtos e imagens fictícios, criados para demonstração. Preços de armações não incluem lentes. */
(() => {
  const rows = [
    ['Aurora','Óculos de grau','Aro Studio',389,'Redondo','Acetato','Mel'],
    ['Urbano','Óculos de grau','Aro Studio',329,'Quadrado','Acetato','Preto'],
    ['Brisa','Óculos de grau','Linha Leve',349,'Gatinho','Acetato','Rosé'],
    ['Nilo','Óculos de grau','Linha Leve',459,'Redondo','Metal','Prata'],
    ['Terra','Óculos de grau','Aro Studio',399,'Retangular','Acetato','Tartaruga'],
    ['Horizonte','Óculos de grau','Prisma',369,'Geométrico','Acetato','Azul'],
    ['Eclipse','Óculos de sol','Maré Solar',299,'Retangular','Acetato','Preto'],
    ['Duna','Óculos de sol','Maré Solar',349,'Gatinho','Acetato','Mel'],
    ['Atlântico','Óculos de sol','Prisma',429,'Aviador','Metal','Dourado'],
    ['Solar','Óculos de sol','Maré Solar',319,'Oval','Acetato','Creme'],
    ['Oásis','Óculos de sol','Aro Studio',379,'Redondo','Acetato','Tartaruga'],
    ['Cais','Óculos de sol','Maré Solar',359,'Quadrado','Acetato','Verde'],
    ['Amora','Armações','Aro Studio',289,'Gatinho','Acetato','Vinho'],
    ['Traço','Armações','Forma',249,'Retangular','TR90','Azul'],
    ['Alva','Armações','Linha Leve',319,'Redondo','Acetato','Champanhe'],
    ['Órbita Hexa','Armações','Prisma',479,'Geométrico','Titânio','Dourado'],
    ['Essencial Visão Simples','Lentes para óculos','Íris Lab',null,'Visão simples','Resina','Incolor'],
    ['Progressiva Dia a Dia','Lentes para óculos','Íris Lab',null,'Progressiva','Resina','Incolor'],
    ['Fotossensível','Lentes para óculos','Íris Lab',null,'Fotossensível','Resina','Incolor'],
    ['Fina & Leve','Lentes para óculos','Prisma',null,'Visão simples','Alto índice','Incolor'],
    ['Contato Diário','Lentes de contato','Íris Lab',null,'Esférica','Hidrogel','Incolor'],
    ['Contato Mensal','Lentes de contato','Íris Lab',null,'Esférica','Silicone hidrogel','Incolor'],
    ['Estojo Essencial','Acessórios','Forma',59,'Estojo','Material sintético','Azul'],
    ['Kit Cuidado','Acessórios','Forma',39,'Limpeza','Microfibra','Verde']
  ];
  window.ORBITA_PRODUCTS = rows.map((r,i) => {
    const [name,category,brand,price,shape,material,color] = r;
    const frame = i < 16;
    return {id:`p${i+1}`,ref:`ORB-${String(i+1).padStart(3,'0')}`,name,category,brand,price,shape,material,
      description: frame ? `${name} combina desenho ${shape.toLowerCase()}, acabamento em ${material.toLowerCase()} e um visual cheio de personalidade. Uma escolha para acompanhar diferentes momentos do seu dia.` : i < 20 ? 'Lentes feitas conforme a receita e as necessidades informadas no atendimento. O orçamento depende dos parâmetros, tratamentos e armação escolhidos.' : i < 22 ? 'Consulte parâmetros, apresentação da caixa e disponibilidade com a equipe. A escolha e adaptação devem seguir orientação do profissional responsável; não indicamos grau pelo site.' : 'Um cuidado a mais para acompanhar seus óculos no dia a dia. Imagem e composição demonstrativas; confirme os detalhes com a equipe.',
      image:`assets/images/produto-${String(i+1).padStart(2,'0')}.webp`,
      images:[`assets/images/detalhe-${String(i+1).padStart(2,'0')}.webp`],active:true,featured:[0,2,6,8].includes(i),isNew:[2,5,11,15].includes(i),
      measurements:frame?'52 mm · ponte 18 mm · haste 140 mm':'Não se aplica',
      features:i>=6&&i<12?'Lentes solares ilustrativas; confirme especificações e proteção com a loja.':frame?'Armação com lentes de apresentação. Lentes com grau vendidas separadamente.':i<20?'Valor sob orçamento. Receita necessária para definição dos parâmetros.':i<22?'Não escolha grau sem orientação. Consulte curva-base, diâmetro e apresentação.':'Cuidados e uso conforme orientação da loja.',
      variants:frame?[{id:'v1',color,size:'M · 52',stock:i===4?0:6+i%4},{id:'v2',color:i%2?'Tartaruga':'Preto',size:'G · 54',stock:3}]:[{id:'v1',color,size:i<20?'Conforme receita':i<22?'Consultar parâmetros':'Único',stock: i===19?0:10}]
    };
  });
})();
