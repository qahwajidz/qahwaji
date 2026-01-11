const products = [
  {
    id: 1,
    name: "Café torréfié – 250 g",
    description: "100% Arabica, Ethiopie ou Brésil",
    price: 800,
    category: "coffee",
    available: true,
    image: "images/250g.jpg"
  },
  {
    id: 2,
    name: "Café torréfié – 1 kg",
    description: "100% Arabica, Ethiopie ou Brésil",
    price: 3000,
    category: "coffee",
    available: true,
    image: "images/coffee.jpg"
  },
  {
    id: 3,
    name: "Sampler - 3x250g",
    description: "100% Arabica, Ethiopie ou Brésil, ",
    price: 2500,
    category: "coffee",
    available: true,
    image: "images/sampler.jpg"
  },
  {
    id: 4,
    name: "Beurre de cacahuète maison",
    description: "Cacahuètes torréfiées (pas encore de notre production), simplement salé, ou version chocolat - sirop de dattes",
    price: 800,
    category: "transform",
    available: true,
    image: "images/pb.jpg"
  },
  {
    id: 5,
    name: "Cactus candy",
    description: "Cactus confit artisanal, issu de raquettes de figuier de Barbarie et de sucre, et c’est tout. Un peu de minéraux dans vos bonbons !",
    price: 3000,
    category: "transform",
    available: true,
    image: "images/candy.jpg"
  },
  {
    id: 6,
    name: "Œufs fermiers",
    description: "",
    price: 600,
    category: "farm",
    available: false,
    image: "images/eggs.jpg"
  },
  {
    id: 7,
    name: "Orangettes chocolat noir",
    description: "Bouillies deux fois dans l'eau fraiche, puis dans un sirop de dattes, pour etre ensuite déshydratées et enrobées de chocolat 70%",
    price: 800,
    category: "transform",
    available: true,
    image: "images/orange.jpg"
  },
  {
    id: 8,
    name: "Chocolate covered espresso beans",
    description: "Nos grains de cafés enrobés dans du chocolat 70%",
    price: 3000,
    category: "coffee",
    available: true,
    image: "images/chocbeans.jpg"
  },
  {
    id: 9,
    name: "Feuilles d'olivier broyés",
    description: "Tisane de feuille d'olivier, légèrement broyé pour maximiser les bienfaits de cette infusion",
    price: 600,
    category: "farm",
    available: true,
    image: "images/feuilles.jpg"
  },
  {
    id: 10,
    name: "Levain naturel déshydraté",
    description: "Pour faire vos propres pains au levain",
    price: 300,
    category: "transform",
    available: true,
    image: "images/levain.jpg"
  },
  {
    id: 11,
    name: "Vinaigre de grenade",
    description: "Vivant, avec sa mère",
    price: 3000,
    category: "farm",
    available: true,
    image: "images/vinegar.jpg"
  },
  {
    id: 12,
    name: "Olives",
    description: "Olives fermentées selon la méthode traditionnelle de lactofermentation",
    price: 600,
    category: "farm",
    available: true,
    image: "images/olives.jpg"
  },
  {
    id: 13,
    name: "Confiture maison",
    description: "Figue, cactus, grenade, pomme, poire, figue de barbarie ... selon disponibilités, merci de spécifier !",
    price: 800,
    category: "transform",
    available: true,
    image: "images/jelly.jpg"
  },
  {
    id: 14,
    name: "Tisanes d'herbes medicinales de la ferme",
    description: "Zaatar, romarin, artemisia, dguft, shih ... selon disponibilités ",
    price: 2500,
    category: "farm",
    available: false,
    image: "images/coffee.jpg"
  },
  {
    id: 15,
    name: "Mélange tahini - sirop de dattes",
    description: "Caramel, sans culpabilité ! ",
    price: 2500,
    category: "transform",
    available: true,
    image: "images/caramel.jpg"
  },
  {
    id: 16,
    name: "Trio de couscous",
    description: "Melande de couscous de semoule, gland (balout), orge",
    price: 800,
    category: "transform",
    available: true,
    image: "images/trio.jpg"
  },
   {
    id: 17,
    name: "Huile d'olive",
    description: "Recoltés à la main, tôt, préssés à froid",
    price: 0,
    category: "farm",
    available: false,
    image: "images/huile.jpg"
  },
   {
    id: 18,
    name: "Miel",
    description: "De nos abeilles, élévées naturellement, selon les méthodes de Michael Bush",
    price: 0,
    category: "farm",
    available: false,
    image: "images/miel.jpg"
  },
  {
    id: 19,
    name: "Moringa",
    description: "En feuilles ou en poudre",
    price: 0,
    category: "farm",
    available: false,
    image: "images/photo3.jpg"
  },
  {
    id: 20,
    name: "Fruits sechés",
    description: "Figues et/ou abricots déshydratés",
    price: 0,
    category: "farm",
    available: false,
    image: "images/seches.jpg"
  },
  {
    id: 21,
    name: "Sirop de Grenade",
    description: "Jus de grenade reduit avec sucre pour un sirop 100% naturel",
    price: 0,
    category: "farm",
    available: true,
    image: "images/sirop.jpg"
  }
];

