 // menuData.js

export const restaurantInfo = {
  name: "Jardine Gourmard",
  slogan: "Du jardin à votre assiette",
  currency: "€"
};

export const menuCategories = [
  {
    id: "entrees",
    title: "Entrées Fraîcheur",
    items: [
      {
        id: "e1",
        name: "Salade du Jardin",
        description: "Mélange de jeunes pousses, tomates cerises, radis et vinaigrette maison.",
        price: 8.50,
        tags: ["Végétarien", "Sans Gluten"],
        image: "/images/salade-jardin.jpg"
      },
      {
        id: "e2",
        name: "Velouté de Potimarron",
        description: "Servi avec une crème fraîche et des éclats de châtaignes.",
        price: 9.00,
        tags: ["Végétarien"],
        image: "/images/soupe-potimarron.jpg"
      },
      {
        id: "e3",
        name: "Carpaccio de Betteraves",
        description: "Betteraves rouges et jaunes, chèvre frais et noix torréfiées.",
        price: 10.50,
        tags: ["Végétarien"],
        image: "/images/carpaccio-betterave.jpg"
      }
    ]
  },
  {
    id: "plats",
    title: "Plats Principaux",
    items: [
      {
        id: "p1",
        name: "Poulet Rôti aux Herbes",
        description: "Cuit lentement, servi avec gratin dauphinois et légumes de saison.",
        price: 18.00,
        tags: ["Sans Gluten"],
        image: "/images/poulet-roti.jpg"
      },
      {
        id: "p2",
        name: "Risotto aux Champignons Sauvages",
        description: "Riz Arborio, parmesan affiné 24 mois et huile de truffe.",
        price: 16.50,
        tags: ["Végétarien"],
        image: "/images/risotto.jpg"
      },
      {
        id: "p3",
        name: "Pavé de Saumon Grillé",
        description: "Accompagné d'une purée de patates douces et sauce citronnée.",
        price: 21.00,
        tags: ["Sans Gluten", "Poisson"],
        image: "/images/saumon.jpg"
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts Gourmands",
    items: [
      {
        id: "d1",
        name: "Tarte Citron Meringuée",
        description: "Pâte sablée maison, crème citron intense et meringue italienne.",
        price: 7.50,
        tags: ["Végétarien"],
        image: "/images/tarte-citron.jpg"
      },
      {
        id: "d2",
        name: "Moelleux au Chocolat",
        description: "Cœur coulant, servi avec une glace vanille de Madagascar.",
        price: 8.00,
        tags: ["Végétarien"],
        image: "/images/chocolat.jpg"
      },
      {
        id: "d3",
        name: "Salade de Fruits de Saison",
        description: "Fruits frais coupés minute, jus de menthe.",
        price: 6.50,
        tags: ["Végétarien", "Sans Gluten", "Végétalien"],
        image: "/images/salade-fruits.jpg"
      }
    ]
  },
  {
    id: "boissons",
    title: "Boissons",
    items: [
      {
        id: "b1",
        name: "Jus de Pomme Pressé",
        description: "100% pur jus, pommes locales.",
        price: 4.50,
        tags: ["Végétalien"],
        image: "/images/jus-pomme.jpg"
      },
      {
        id: "b2",
        name: "Vin Rouge (Verre)",
        description: "Sélection du sommelier, vallée du Rhône.",
        price: 6.00,
        tags: ["Alcool"],
        image: "/images/vin-rouge.jpg"
      }
    ]
  }
];
