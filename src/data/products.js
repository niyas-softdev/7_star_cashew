export const categories = [
    "All",
    "Cashew & Nuts",
    "Dry Fruits",
    "Seeds",
    "Resin"
];

export const products = [
    // Cashew & Nuts
    {
        id: 101,
        name: "Cashew Nuts",
        category: "Cashew & Nuts",
        shortDesc: "Premium W180, W240, W320 grades. Crunchy & creamy.",
        description: "Our premium Cashew Nuts are sourced from the finest plantations, ensuring large size, creamy texture, and natural sweetness. Meticulously processed to retain freshness and nutritional value.",
        image: "/images/cashews-nuts1.jpg",
        tags: ["Best Seller", "Export Quality"],
        healthBenefits: ["Heart Healthy", "Protein Rich", "Energy Booster"],
        nutritionalInfo: {
            protein: "18g",
            fiber: "3.3g",
            fat: "44g",
            energy: "553 kcal"
        },
        specs: {
            packaging: "10kg / 25kg Vacuum Tin Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place (18-22°C)",
            grade: "W180, W240, W320",
            origin: "India / Vietnam"
        }
    },
    {
        id: 102,
        name: "Badam (Almonds)",
        category: "Cashew & Nuts",
        shortDesc: "California & Mamra almonds. Vitamin E rich.",
        description: "Superior quality almonds known for their distinct crunch and high nutritional profile. Perfect for direct consumption or confectionery use.",
        image: "/images/badam.jpg",
        tags: ["High Protein", "Brain Food"],
        healthBenefits: ["Brain Boost", "Rich in Antioxidants", "Vitamin E Rich"],
        nutritionalInfo: {
            protein: "21g",
            fiber: "12.5g",
            fat: "49g",
            energy: "579 kcal"
        },
        specs: {
            packaging: "10kg / 25kg Cartons",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Non-Pareil / Mamra",
            origin: "USA / Iran"
        }
    },
    {
        id: 103,
        name: "Walnut",
        category: "Cashew & Nuts",
        shortDesc: "Premium walnuts, high in Omega-3.",
        description: "Fresh, high-quality walnuts available with shell or as kernels. Packed with essential fatty acids for heart and brain health.",
        image: "/images/walnut.jpg",
        tags: ["Omega-3", "Heart Healthy"],
        healthBenefits: ["Supports Heart Health", "Brain Boost", "Healthy Fats"],
        nutritionalInfo: {
            protein: "15g",
            fiber: "7g",
            fat: "65g",
            energy: "654 kcal"
        },
        specs: {
            packaging: "10kg Vacuum Bags",
            shelfLife: "6-9 Months",
            storage: "Refrigerated / Cool Place",
            grade: "Light Halves",
            origin: "Chile / USA"
        }
    },
    {
        id: 104,
        name: "Pista",
        category: "Cashew & Nuts",
        shortDesc: "Premium roasted & salted pistachios.",
        description: "Naturally opened, large-sized pistachios roasted to perfection. A delightful balance of taste and health.",
        image: "/images/pista1.jpg",
        tags: ["Roasted", "Low Calorie"],
        healthBenefits: ["Protein Rich", "High Fiber", "Eye Health"],
        nutritionalInfo: {
            protein: "20g",
            fiber: "10g",
            fat: "45g",
            energy: "560 kcal"
        },
        specs: {
            packaging: "10kg / 25kg Sacks",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Akbari / Jumbo",
            origin: "Iran / USA"
        }
    },
    {
        id: 105,
        name: "Pista Salted",
        category: "Cashew & Nuts",
        shortDesc: "Perfectly salted pistachios for snacking.",
        description: "Lightly salted premium pistachios, offering a savory crunch that makes for an irresistible healthy snack.",
        image: "/images/pista.webp",
        tags: ["Salted", "Snack"],
        healthBenefits: ["Protein Rich", "High Fiber"],
        nutritionalInfo: {
            protein: "20g",
            fiber: "10g",
            fat: "45g",
            energy: "562 kcal"
        },
        specs: {
            packaging: "10kg / 25kg Cartons",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Roasted Salted",
            origin: "Iran / USA"
        }
    },

    // Dry Fruits
    {
        id: 201,
        name: "Dates (Black)",
        category: "Dry Fruits",
        shortDesc: "Sweet, soft, and iron-rich premium dates.",
        description: "Succulent, naturally sweet black dates packed with energy and essential minerals. Sourced from the best desert farms.",
        image: "/images/dates.jpg",
        tags: ["Natural Sweetener", "Iron Rich"],
        healthBenefits: ["Energy Booster", "Mineral Rich", "Digestive"],
        nutritionalInfo: {
            protein: "2.5g",
            fiber: "8g",
            fat: "0.4g",
            energy: "282 kcal"
        },
        specs: {
            packaging: "5kg / 10kg Boxes",
            shelfLife: "18 Months",
            storage: "Cool Place",
            grade: "Premium Black",
            origin: "Middle East"
        }
    },
    {
        id: 202,
        name: "Fig (Anjeer)",
        category: "Dry Fruits",
        shortDesc: "Dried figs rich in fiber and minerals.",
        description: "Large, golden dried figs with a chewy texture and sweet seeds. Excellent for digestion and quick energy.",
        image: "/images/fig2.webp",
        tags: ["Fiber Rich", "Digestive"],
        healthBenefits: ["High Fiber", "Bone Health", "Mineral Rich"],
        nutritionalInfo: {
            protein: "3.3g",
            fiber: "9.8g",
            fat: "0.9g",
            energy: "249 kcal"
        },
        specs: {
            packaging: "10kg Bulk Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Jumbo",
            origin: "Afghanistan / Turkey"
        }
    },
    {
        id: 203,
        name: "Dried Mango",
        category: "Dry Fruits",
        shortDesc: "Tropical sweet and tangy mango slices.",
        description: "Made from ripe, juicy mangoes, these dried slices offer a burst of tropical flavor in every bite.",
        image: "/images/dried-mango.webp",
        tags: ["Tropical", "Vitamin C"],
        healthBenefits: ["Rich in Antioxidants", "Vitamin Boost"],
        nutritionalInfo: {
            protein: "1g",
            fiber: "2g",
            fat: "0g",
            energy: "319 kcal"
        },
        specs: {
            packaging: "1kg / 5kg Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Standard Slices",
            origin: "Thailand / India"
        }
    },

    // Seeds
    {
        id: 301,
        name: "Chia Seed",
        category: "Seeds",
        shortDesc: "Superfood seeds high in Omega-3.",
        description: "Raw, organic chia seeds. A powerhouse of nutrients perfect for puddings, smoothies, and healthy toppings.",
        image: "/images/chia-seeds.jpg",
        tags: ["Superfood", "Omega-3"],
        healthBenefits: ["High Fiber", "Heart Healthy", "Protein Rich"],
        nutritionalInfo: {
            protein: "17g",
            fiber: "34g",
            fat: "31g",
            energy: "486 kcal"
        },
        specs: {
            packaging: "25kg Bags",
            shelfLife: "24 Months",
            storage: "Cool & Dry Place",
            grade: "Organic Black",
            origin: "South America"
        }
    },
    {
        id: 302,
        name: "Pumpkin Seeds",
        category: "Seeds",
        shortDesc: "Crunchy, roasted, zinc-rich seeds.",
        description: "Premium quality pumpkin seeds, carefully roasted to enhance their nutty flavor. Great for heart and immune health.",
        image: "/images/pumpkin-seeds.webp",
        tags: ["Zinc Rich", "Roasted"],
        healthBenefits: ["Mineral Rich", "Antioxidants", "Heart Health"],
        nutritionalInfo: {
            protein: "30g",
            fiber: "6g",
            fat: "49g",
            energy: "559 kcal"
        },
        specs: {
            packaging: "10kg / 25kg Bags",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "AA Grade",
            origin: "China / India"
        }
    },
    {
        id: 303,
        name: "Cucumber Seeds",
        category: "Seeds",
        shortDesc: "Cooling and hydrating premium seeds.",
        description: "Naturally cooling cucumber seeds, widely used in traditional summer drinks and sweets.",
        image: "/images/cucumber-seeds.jpg",
        tags: ["Cooling", "Hydrating"],
        healthBenefits: ["Mineral Rich", "Cooling Effect"],
        nutritionalInfo: {
            protein: "15g",
            fiber: "2g",
            fat: "40g",
            energy: "500 kcal"
        },
        specs: {
            packaging: "25kg Bags",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Standard",
            origin: "India"
        }
    },
    {
        id: 304,
        name: "Flax Seed",
        category: "Seeds",
        shortDesc: "Rich flax seeds for heart health.",
        description: "Glossy, brown flax seeds rich in lignans and Omega-3s. Essential for a heart-healthy diet.",
        image: "/images/flax-seed1.jpg",
        tags: ["Heart Healthy", "Fiber"],
        healthBenefits: ["High Fiber", "Omega-3", "Cholesterol Control"],
        nutritionalInfo: {
            protein: "18g",
            fiber: "27g",
            fat: "42g",
            energy: "534 kcal"
        },
        specs: {
            packaging: "25kg Paper Bags",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Brown / Golden",
            origin: "India / Canada"
        }
    },
    {
        id: 305,
        name: "Sabja Seed",
        category: "Seeds",
        shortDesc: "Basil seeds, perfect for cooling drinks.",
        description: "Premium basil seeds that swell up when soaked. A natural coolant known for digestive benefits.",
        image: "/images/sabja-seed.jpg",
        tags: ["Cooling", "Summer"],
        healthBenefits: ["Digestive Health", "Cooling", "Fiber Rich"],
        nutritionalInfo: {
            protein: "14g",
            fiber: "25g",
            fat: "20g",
            energy: "350 kcal"
        },
        specs: {
            packaging: "25kg Bags",
            shelfLife: "24 Months",
            storage: "Cool & Dry Place",
            grade: "Premium Clean",
            origin: "India"
        }
    },

    // Resin
    {
        id: 401,
        name: "Black Resin",
        category: "Resin",
        shortDesc: "Premium black raisins.",
        description: "Seedless black raisins with a sweet, intense flavor. Naturally sun-dried and rich in iron.",
        image: "/images/black-resin.jpeg",
        tags: ["Iron Rich", "Sweet"],
        healthBenefits: ["Blood Health", "Energy Booster", "Antioxidants"],
        nutritionalInfo: {
            protein: "3g",
            fiber: "4g",
            fat: "0.5g",
            energy: "299 kcal"
        },
        specs: {
            packaging: "10kg Cartons",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Seedless Black",
            origin: "India / Afghanistan"
        }
    },
    {
        id: 402,
        name: "Yellow Resin",
        category: "Resin",
        shortDesc: "Golden raisins, sweet and plump.",
        description: "High-quality golden raisins, treated to retain their bright color. Sweet, plump, and perfect for baking.",
        image: "/images/yellow-resin.webp",
        tags: ["Golden", "Baking"],
        healthBenefits: ["Energy Booster", "Digestion", "Mineral Rich"],
        nutritionalInfo: {
            protein: "3g",
            fiber: "4g",
            fat: "0.5g",
            energy: "299 kcal"
        },
        specs: {
            packaging: "10kg Cartons",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Golden Long",
            origin: "India"
        }
    },
    {
        id: 204,
        name: "Dried Cherry",
        category: "Dry Fruits",
        shortDesc: "Sweet & tangy dried cherries, antioxidant rich.",
        description: "Premium dried cherries with a perfect balance of sweetness and tartness. Ideal for snacking, baking, and gourmet desserts.",
        image: "/images/dried-cherry1.jpg",
        tags: ["Antioxidant Rich", "Premium"],
        healthBenefits: ["Rich in Antioxidants", "Supports Heart Health", "Anti-Inflammatory"],
        nutritionalInfo: {
            protein: "1g",
            fiber: "2.1g",
            fat: "0.3g",
            energy: "333 kcal"
        },
        specs: {
            packaging: "1kg / 5kg Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Premium Whole",
            origin: "Turkey / USA"
        }
    },
    {
        id: 205,
        name: "Dried Pomelo",
        category: "Dry Fruits",
        shortDesc: "Naturally sweet citrus pomelo slices.",
        description: "Carefully dried pomelo slices retaining natural citrus aroma and mild sweetness. A refreshing and healthy snack option.",
        image: "/images/dried-pomelo.webp",
        tags: ["Citrus", "Low Fat"],
        healthBenefits: ["Vitamin C Rich", "Boosts Immunity", "Digestive Support"],
        nutritionalInfo: {
            protein: "0.6g",
            fiber: "3g",
            fat: "0g",
            energy: "280 kcal"
        },
        specs: {
            packaging: "1kg / 5kg Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Natural Slices",
            origin: "Thailand / Vietnam"
        }
    },
    {
        id: 206,
        name: "Dried Papaya",
        category: "Dry Fruits",
        shortDesc: "Soft, sweet dried papaya cubes.",
        description: "Bright, chewy dried papaya made from ripe tropical fruit. Popular for snacking and trail mixes.",
        image: "/images/dried-papaya2.webp",
        tags: ["Tropical", "Fiber Rich"],
        healthBenefits: ["Improves Digestion", "Rich in Fiber", "Vitamin A Source"],
        nutritionalInfo: {
            protein: "0.9g",
            fiber: "2.5g",
            fat: "0.1g",
            energy: "320 kcal"
        },
        specs: {
            packaging: "1kg / 5kg Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Diced / Sliced",
            origin: "Thailand / India"
        }
    },
    {
        id: 207,
        name: "Dried Mix Fruit",
        category: "Dry Fruits",
        shortDesc: "Premium assorted dried fruit blend.",
        description: "A delicious mix of dried mango, papaya, pineapple, cherry, and pomelo. Perfect for healthy snacking and gifting.",
        image: "/images/dried-mix-fruits.jpg",
        tags: ["Assorted", "Best Seller"],
        healthBenefits: ["Energy Booster", "Vitamin Rich", "Antioxidants"],
        nutritionalInfo: {
            protein: "1.2g",
            fiber: "3.5g",
            fat: "0.4g",
            energy: "310 kcal"
        },
        specs: {
            packaging: "1kg / 5kg / 10kg Packs",
            shelfLife: "12 Months",
            storage: "Cool & Dry Place",
            grade: "Premium Assorted",
            origin: "Thailand / India"
        }
    },

];
