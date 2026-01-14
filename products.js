const products = [
   {
    id: 1,
    name: "Café torréfié – 1 kg",
    description: "100% Arabica, Ethiopie ou Brésil",
    price: 3000,
    category: "coffee",
    available: true,
    image: "images/coffee.jpg"
  },
  {
    id: 2,
    name: "Café torréfié – 250 g",
    description: "100% Arabica, Ethiopie ou Brésil",
    price: 800,
    category: "coffee",
    available: true,
    image: "images/250g.jpg"
  },
 
  {
    id: 3,
    name: "Sampler - 3x250g",
    description: "100% Arabica, Ethiopie ou Brésil, light-medium-dark : trouver votre préférence",
    price: 2500,
    category: "coffee",
    available: true,
    image: "images/sampler.jpg"
  },
    {
    id: 4,
    name: "Cactus candy",
    description: "Cactus confit artisanal, issu de raquettes de figuier de Barbarie et de sucre, et c’est tout. Un peu de minéraux dans vos bonbons !",
    price: 1000,
    category: "farm",
    available: true,
    image: "images/candy.jpg"
  },
  
 {
    id: 5,
    name: "Levain naturel déshydraté",
    description: "Pour faire vos propres pains au levain",
    price: 300,
    category: "transform",
    available: true,
    image: "images/levain.jpg"
  },
  {
    id: 6,
    name: "Œufs fermiers",
    description: "",
    price: 0,
    category: "farm",
    available: false,
    image: "images/eggs.jpg"
  },
  {
    id: 7,
    name: "Orangettes chocolat noir",
    description: "Bouillies deux fois dans l'eau fraiche, puis dans un sirop de dattes, pour etre ensuite déshydratées et enrobées de chocolat 70%",
    price: 1000,
    category: "transform",
    available: true,
    image: "images/orange.jpg"
  },
  {
    id: 8,
    name: "Chocolate covered espresso beans",
    description: "Nos grains de cafés enrobés dans du chocolat 70%",
    price: 1000,
    category: "coffee",
    available: true,
    image: "images/chocbeans.jpg"
  },
  {
    id: 9,
    name: "Feuilles d'olivier broyés",
    description: "Tisane de feuille d'olivier, légèrement broyé pour maximiser les bienfaits de cette infusion",
    price: 800,
    category: "farm",
    available: true,
    image: "images/feuilles.jpg"
  },
  
   {
    id: 10,
    name: "Chocolate Chip Cookies",
    description: "A l'américaine !",
    price: 800,
    category: "trans",
    available: true,
    image: "images/cookie.jpg"
  },
  {
    id: 11,
    name: "Vinaigre de grenade",
    description: "Vivant, avec sa mère",
    price: 1000,
    category: "farm",
    available: true,
    image: "images/vinegar.jpg"
  },
  {
    id: 12,
    name: "Olives",
    description: "Olives fermentées selon la méthode traditionnelle de lactofermentation",
    price: 800,
    category: "farm",
    available: true,
    image: "images/olives.jpg"
  },
  {
    id: 13,
    name: "Confiture maison",
    description: "Cactus, figue, abricot, grenade, pomme, poire, figue de barbarie, raisin, murier ... selon disponibilités, merci de spécifier !",
    price: 800,
    category: "farm",
    available: true,
    image: "images/jelly.jpg"
  },
  {
    id: 14,
    name: "Tisanes d'herbes medicinales de la ferme",
    description: "Zaatar, romarin, artemisia, dguft, shih ... selon disponibilités ",
    price: 800,
    category: "farm",
    available: false,
    image: "images/feuilles.jpg"
  },
   {
    id: 15,
    name: "American Fudge",
    description: "Gourmandise américaine, riche, fondante et intensément chocolatée.",
    price: 1000,
    category: "trans",
    available: true,
    image: "images/fudge.jpg"
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
    image: "images/photo4.jpg"
  },
  {
    id: 20,
    name: "Fruits séchés",
    description: "Figues et/ou abricots déshydratés",
    price: 0,
    category: "farm",
    available: false,
    image: "images/seches.jpg"
  },
  {
    id: 21,
    name: "Sirop de Grenade",
    description: "Jus de grenade reduit avec du sucre, pour un sirop 100% naturel",
    price: 1000,
    category: "farm",
    available: true,
    image: "images/sirop.jpg"
  },
   
   {
    id: 22,
    name: "Mélange tahini - sirop de dattes",
    description: "Caramel, sans culpabilité ! ",
    price: 800,
    category: "transform",
    available: true,
    image: "images/caramel.jpg"
  },
    {
    id: 23,
    name: "Beurre de cacahuète maison",
    description: "Cacahuètes torréfiées, simplement salé, ou version chocolat - sirop de dattes",
    price: 800,
    category: "transform",
    available: true,
    image: "images/pb.jpg"
  },
   
    {
    id: 24,
    name: "Racquettes de cactus figue de barbarie",
    description: "A replanter chez vous. Sans épines (ou presque). Prix à l'unité",
    price: 200,
    category: "farm",
    available: true,
    image: "images/racquette.jpg"
  }
];

