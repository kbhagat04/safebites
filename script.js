// Application State
const appState = {
    currentUser: null,
    currentLocation: 'College Station, TX',
    searchRadius: 1.5, // miles
    userRestrictions: [],
    currentRestaurant: null,
    restaurants: [],
    currentItem: null,
    excludedIngredients: {} // Format: { itemId: [ingredient1, ingredient2, ...] }
};

// Restaurant and Menu Data
const restaurantsData = [
    {
        id: 1,
        name: 'Chipotle Mexican Grill',
        cuisine: 'Mexican',
        distance: '0.3 miles',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
        menu: [
            {
                id: 101,
                name: 'Chicken Bowl',
                description: 'Grilled chicken, cilantro-lime rice, black beans, fajita veggies, lettuce, and guacamole',
                price: 10.95,
                ingredients: ['chicken', 'rice', 'black beans', 'peppers', 'onions', 'lettuce', 'avocado', 'lime', 'cilantro'],
                allergens: [],
                nutrition: { calories: 630, protein: 42, carbs: 71, fat: 19 },
                crossContamination: 'Prepared in shared equipment. May contain traces of wheat, dairy, and soy',
            },
            {
                id: 102,
                name: 'Steak Burrito',
                description: 'Grilled steak, flour tortilla, cilantro-lime rice, pinto beans, cheese, sour cream, and salsa',
                price: 12.45,
                ingredients: ['steak', 'flour tortilla', 'rice', 'pinto beans', 'cheese', 'sour cream', 'tomato', 'lime'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 850, protein: 48, carbs: 94, fat: 31 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 103,
                name: 'Veggie Bowl',
                description: 'Fajita veggies, cilantro-lime rice, black beans, corn salsa, lettuce, and guacamole',
                price: 9.95,
                ingredients: ['peppers', 'onions', 'rice', 'black beans', 'corn', 'lettuce', 'avocado', 'tomato'],
                allergens: [],
                nutrition: { calories: 540, protein: 16, carbs: 81, fat: 18 },
                crossContamination: 'Prepared in shared equipment. May contain traces of wheat, dairy, and soy',
            },
            {
                id: 104,
                name: 'Carnitas Tacos',
                description: 'Braised pork, soft corn tortillas, salsa verde, onions, and cilantro',
                price: 11.25,
                ingredients: ['pork', 'corn tortilla', 'tomatillo', 'onions', 'cilantro', 'lime'],
                allergens: [],
                nutrition: { calories: 480, protein: 32, carbs: 42, fat: 20 },
                crossContamination: 'Prepared in shared equipment. May contain traces of wheat and dairy',
            },
            {
                id: 105,
                name: 'Cheese Quesadilla',
                description: 'Flour tortilla filled with melted cheese, served with sour cream and guacamole',
                price: 8.95,
                ingredients: ['flour tortilla', 'cheese', 'sour cream', 'avocado'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 720, protein: 28, carbs: 58, fat: 42 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 106,
                name: 'Sofritas Bowl',
                description: 'Organic tofu braised with peppers and spices, brown rice, black beans, and fresh salsa',
                price: 10.45,
                ingredients: ['tofu', 'brown rice', 'black beans', 'peppers', 'tomato', 'onions', 'spices'],
                allergens: ['soy'],
                nutrition: { calories: 560, protein: 18, carbs: 78, fat: 17 },
                crossContamination: 'Contains soy. Prepared in shared equipment with wheat and dairy',
            },
            {
                id: 107,
                name: 'Barbacoa Burrito Bowl',
                description: 'Tender barbacoa beef, cilantro-lime rice, pinto beans, fresh tomato salsa, cheese, and lettuce',
                price: 11.75,
                ingredients: ['beef', 'rice', 'pinto beans', 'tomato', 'cheese', 'lettuce', 'lime', 'cilantro'],
                allergens: ['dairy'],
                nutrition: { calories: 750, protein: 46, carbs: 68, fat: 30 },
                crossContamination: 'Contains dairy',
            },
            {
                id: 108,
                name: 'Chips and Salsa',
                description: 'Fresh tortilla chips with tomato salsa',
                price: 2.95,
                ingredients: ['corn chips', 'tomato', 'onion', 'cilantro', 'jalapeño', 'lime'],
                allergens: [],
                nutrition: { calories: 290, protein: 4, carbs: 40, fat: 13 },
                crossContamination: 'Prepared in facility that handles dairy',
            },
            {
                id: 109,
                name: 'Kid\'s Build Your Own',
                description: 'Choice of chicken or cheese quesadilla with rice and beans',
                price: 6.95,
                ingredients: ['flour tortilla', 'chicken', 'cheese', 'rice', 'beans'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 475, protein: 22, carbs: 55, fat: 16 },
                crossContamination: 'Contains gluten and dairy',
            }
        ]
    },
    {
        id: 2,
        name: 'Taco Bell',
        cuisine: 'Mexican Fast Food',
        distance: '0.5 miles',
        rating: 4.2,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
        menu: [
            {
                id: 201,
                name: 'Crunchy Taco Supreme',
                description: 'Seasoned beef, lettuce, tomatoes, sour cream, and cheese in a crunchy shell',
                price: 2.49,
                ingredients: ['beef', 'corn shell', 'lettuce', 'tomato', 'sour cream', 'cheese', 'taco seasoning'],
                allergens: ['dairy'],
                nutrition: { calories: 190, protein: 8, carbs: 14, fat: 11 },
                crossContamination: 'Contains dairy, prepared with shared equipment',
            },
            {
                id: 202,
                name: 'Bean Burrito',
                description: 'Refried beans, cheese, onions, and red sauce in a flour tortilla',
                price: 1.99,
                ingredients: ['flour tortilla', 'refried beans', 'cheese', 'onions', 'red sauce'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 350, protein: 13, carbs: 54, fat: 9 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 203,
                name: 'Black Bean Crunchwrap Supreme',
                description: 'Black beans, lettuce, tomatoes, nacho cheese, and sour cream in a grilled tortilla',
                price: 4.99,
                ingredients: ['flour tortilla', 'black beans', 'lettuce', 'tomato', 'nacho cheese', 'sour cream', 'tostada shell'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 680, protein: 17, carbs: 74, fat: 32 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 204,
                name: 'Chicken Power Bowl',
                description: 'Grilled chicken, black beans, rice, lettuce, tomatoes, guacamole, and avocado ranch',
                price: 5.99,
                ingredients: ['chicken', 'black beans', 'rice', 'lettuce', 'tomato', 'guacamole', 'avocado ranch'],
                allergens: ['dairy'],
                nutrition: { calories: 470, protein: 26, carbs: 49, fat: 18 },
                crossContamination: 'Contains dairy in ranch dressing',
            },
            {
                id: 205,
                name: 'Chips and Guacamole',
                description: 'Crispy tortilla chips with fresh guacamole',
                price: 3.99,
                ingredients: ['corn chips', 'avocado', 'lime', 'cilantro', 'tomato', 'onion'],
                allergens: [],
                nutrition: { calories: 230, protein: 3, carbs: 23, fat: 15 },
                crossContamination: 'May contain traces from shared fryers',
            },
            {
                id: 206,
                name: 'Chalupa Supreme',
                description: 'Seasoned beef, lettuce, tomatoes, sour cream, and cheese in a fried chalupa shell',
                price: 3.99,
                ingredients: ['fried shell', 'beef', 'lettuce', 'tomato', 'sour cream', 'cheese'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 360, protein: 13, carbs: 30, fat: 21 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 207,
                name: 'Cheesy Gordita Crunch',
                description: 'Seasoned beef, cheese, lettuce, and ranch in a flatbread with a crunchy taco shell inside',
                price: 4.49,
                ingredients: ['flatbread', 'beef', 'cheese', 'lettuce', 'ranch', 'corn shell'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 490, protein: 19, carbs: 38, fat: 29 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 208,
                name: 'Mexican Pizza',
                description: 'Seasoned beef, refried beans, pizza sauce, cheese, and tomatoes between two crispy tortillas',
                price: 4.99,
                ingredients: ['flour tortilla', 'beef', 'refried beans', 'pizza sauce', 'cheese', 'tomato'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 540, protein: 20, carbs: 47, fat: 30 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 209,
                name: 'Nacho Fries',
                description: 'Crispy fries topped with nacho cheese sauce',
                price: 2.49,
                ingredients: ['potatoes', 'nacho cheese', 'spices'],
                allergens: ['dairy'],
                nutrition: { calories: 320, protein: 4, carbs: 38, fat: 17 },
                crossContamination: 'Contains dairy, fried in shared oil',
            }
        ]
    },
    {
        id: 3,
        name: 'Schlotzsky\'s',
        cuisine: 'Deli & Sandwiches',
        distance: '0.7 miles',
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop',
        menu: [
            {
                id: 301,
                name: 'The Original Sandwich',
                description: 'Smoked ham, Genoa salami, cotto salami, mozzarella, parmesan, lettuce, tomato, onion, and signature sauce on sourdough',
                price: 8.99,
                ingredients: ['sourdough bread', 'ham', 'salami', 'mozzarella', 'parmesan', 'lettuce', 'tomato', 'onion', 'mayo', 'mustard'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 820, protein: 48, carbs: 78, fat: 34 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 302,
                name: 'Turkey Avocado Sandwich',
                description: 'Oven-roasted turkey, avocado, bacon, Swiss cheese, lettuce, tomato, and chipotle mayo on wheat',
                price: 9.49,
                ingredients: ['wheat bread', 'turkey', 'avocado', 'bacon', 'swiss cheese', 'lettuce', 'tomato', 'chipotle mayo'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 740, protein: 42, carbs: 64, fat: 32 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 303,
                name: 'Chicken Bacon Ranch Sandwich',
                description: 'Grilled chicken breast, bacon, cheddar, lettuce, tomato, and ranch dressing on sourdough',
                price: 9.99,
                ingredients: ['sourdough bread', 'chicken', 'bacon', 'cheddar', 'lettuce', 'tomato', 'ranch dressing'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 890, protein: 52, carbs: 72, fat: 38 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 304,
                name: 'Garden Vegetable Soup',
                description: 'Fresh vegetables in a tomato-based broth',
                price: 4.99,
                ingredients: ['tomato', 'carrots', 'celery', 'onion', 'zucchini', 'green beans', 'vegetable broth', 'herbs'],
                allergens: [],
                nutrition: { calories: 120, protein: 4, carbs: 24, fat: 2 },
                crossContamination: 'Prepared in a facility that handles dairy and gluten',
            },
            {
                id: 305,
                name: 'Caesar Side Salad',
                description: 'Romaine lettuce, parmesan cheese, croutons, and Caesar dressing',
                price: 3.99,
                ingredients: ['romaine lettuce', 'parmesan', 'croutons', 'caesar dressing'],
                allergens: ['gluten', 'dairy', 'eggs', 'fish'],
                nutrition: { calories: 280, protein: 8, carbs: 18, fat: 20 },
                crossContamination: 'Contains gluten, dairy, eggs, and fish (anchovies in dressing)',
            },
            {
                id: 306,
                name: 'BLT Sandwich',
                description: 'Applewood bacon, lettuce, tomato, and mayo on toasted sourdough',
                price: 7.99,
                ingredients: ['sourdough bread', 'bacon', 'lettuce', 'tomato', 'mayo'],
                allergens: ['gluten', 'eggs'],
                nutrition: { calories: 620, protein: 24, carbs: 58, fat: 32 },
                crossContamination: 'Contains gluten and eggs',
            },
            {
                id: 307,
                name: 'Tomato Basil Soup',
                description: 'Creamy tomato soup with fresh basil',
                price: 4.99,
                ingredients: ['tomato', 'cream', 'basil', 'garlic', 'onion', 'vegetable broth'],
                allergens: ['dairy'],
                nutrition: { calories: 240, protein: 6, carbs: 32, fat: 10 },
                crossContamination: 'Contains dairy',
            },
            {
                id: 308,
                name: 'Chips & Salsa',
                description: 'House-made potato chips with fresh salsa',
                price: 3.49,
                ingredients: ['potato', 'tomato', 'onion', 'cilantro', 'jalapeño', 'lime'],
                allergens: [],
                nutrition: { calories: 180, protein: 2, carbs: 26, fat: 8 },
                crossContamination: 'Prepared in shared facility',
            }
        ]
    },
    {
        id: 4,
        name: 'CAVA',
        cuisine: 'Mediterranean',
        distance: '0.9 miles',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop',
        menu: [
            {
                id: 401,
                name: 'Build Your Own Bowl - Chicken',
                description: 'Grilled chicken, basmati rice, mixed greens, hummus, tomato-cucumber salad, pickled onions, and tahini',
                price: 11.95,
                ingredients: ['chicken', 'basmati rice', 'mixed greens', 'hummus', 'tomato', 'cucumber', 'pickled onions', 'tahini'],
                allergens: ['sesame'],
                nutrition: { calories: 620, protein: 42, carbs: 68, fat: 18 },
                crossContamination: 'Contains sesame',
            },
            {
                id: 402,
                name: 'Falafel Bowl',
                description: 'Crispy falafel, SuperGreens, hummus, crazy feta, tomato-cucumber salad, and harissa',
                price: 10.95,
                ingredients: ['falafel', 'kale', 'romaine', 'cabbage', 'hummus', 'feta', 'tomato', 'cucumber', 'harissa', 'chickpeas'],
                allergens: ['sesame', 'dairy'],
                nutrition: { calories: 580, protein: 18, carbs: 72, fat: 24 },
                crossContamination: 'Contains sesame and dairy',
            },
            {
                id: 403,
                name: 'Grilled Steak Bowl',
                description: 'Grilled steak, basmati rice, roasted vegetables, tzatziki, and lemon herb tahini',
                price: 13.95,
                ingredients: ['steak', 'basmati rice', 'roasted vegetables', 'tzatziki', 'tahini', 'lemon', 'herbs'],
                allergens: ['dairy', 'sesame'],
                nutrition: { calories: 720, protein: 48, carbs: 64, fat: 28 },
                crossContamination: 'Contains dairy and sesame',
            },
            {
                id: 404,
                name: 'Spicy Lamb Meatball Pita',
                description: 'Spicy lamb meatballs, tomato-cucumber salad, pickled onions, cabbage slaw, and garlic dressing in pita',
                price: 12.45,
                ingredients: ['lamb meatballs', 'pita bread', 'tomato', 'cucumber', 'pickled onions', 'cabbage', 'garlic dressing'],
                allergens: ['gluten'],
                nutrition: { calories: 680, protein: 38, carbs: 72, fat: 24 },
                crossContamination: 'Contains gluten',
            },
            {
                id: 405,
                name: 'Roasted Veggie Bowl',
                description: 'Roasted vegetables, SuperGreens, hummus, lentil tabbouleh, and lemon herb tahini',
                price: 9.95,
                ingredients: ['roasted vegetables', 'kale', 'romaine', 'cabbage', 'hummus', 'lentils', 'parsley', 'tahini', 'lemon'],
                allergens: ['sesame'],
                nutrition: { calories: 480, protein: 16, carbs: 68, fat: 18 },
                crossContamination: 'Contains sesame',
            },
            {
                id: 406,
                name: 'Harissa Honey Chicken Bowl',
                description: 'Spicy harissa honey chicken, basmati rice, crazy feta, hummus, corn, and pickled onions',
                price: 12.45,
                ingredients: ['chicken', 'basmati rice', 'feta', 'hummus', 'corn', 'pickled onions', 'harissa', 'honey'],
                allergens: ['dairy', 'sesame'],
                nutrition: { calories: 690, protein: 44, carbs: 72, fat: 22 },
                crossContamination: 'Contains dairy and sesame',
            },
            {
                id: 407,
                name: 'Chicken + Cauliflower Rice Bowl',
                description: 'Grilled chicken, riced cauliflower, SuperGreens, roasted vegetables, and lemon herb tahini',
                price: 11.95,
                ingredients: ['chicken', 'cauliflower rice', 'kale', 'romaine', 'roasted vegetables', 'tahini', 'lemon'],
                allergens: ['sesame'],
                nutrition: { calories: 440, protein: 38, carbs: 32, fat: 18 },
                crossContamination: 'Contains sesame',
            },
            {
                id: 408,
                name: 'Mini Pita Chips & Hummus',
                description: 'Warm pita chips with classic hummus',
                price: 4.95,
                ingredients: ['pita chips', 'chickpeas', 'tahini', 'lemon', 'garlic', 'olive oil'],
                allergens: ['gluten', 'sesame'],
                nutrition: { calories: 320, protein: 10, carbs: 42, fat: 14 },
                crossContamination: 'Contains gluten and sesame',
            }
        ]
    },
    {
        id: 5,
        name: 'Velvet Taco',
        cuisine: 'Modern Taco Shop',
        distance: '1.2 miles',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
        menu: [
            {
                id: 501,
                name: 'Chicken & Waffle Taco',
                description: 'Crispy chicken tender, waffle, maple syrup, and ancho aioli on flour tortilla',
                price: 4.95,
                ingredients: ['flour tortilla', 'chicken', 'waffle', 'maple syrup', 'ancho aioli', 'eggs'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 520, protein: 24, carbs: 52, fat: 24 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 502,
                name: 'Spicy Tikka Chicken Taco',
                description: 'Grilled chicken tikka, cucumber, tomato, cilantro, and spicy tikka sauce on naan bread',
                price: 4.50,
                ingredients: ['naan bread', 'chicken tikka', 'cucumber', 'tomato', 'cilantro', 'tikka sauce', 'yogurt'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 380, protein: 28, carbs: 42, fat: 12 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 503,
                name: 'Elote Taco',
                description: 'Grilled corn, cotija cheese, cilantro, lime, and ancho aioli on corn tortilla',
                price: 3.95,
                ingredients: ['corn tortilla', 'corn', 'cotija cheese', 'cilantro', 'lime', 'ancho aioli', 'chili powder'],
                allergens: ['dairy'],
                nutrition: { calories: 280, protein: 8, carbs: 38, fat: 12 },
                crossContamination: 'Contains dairy',
            },
            {
                id: 504,
                name: 'Nashville Hot Tofu Taco',
                description: 'Crispy Nashville hot tofu, pickles, cabbage slaw, and ranch on flour tortilla',
                price: 4.25,
                ingredients: ['flour tortilla', 'tofu', 'pickles', 'cabbage', 'ranch dressing', 'hot sauce'],
                allergens: ['gluten', 'soy', 'dairy', 'eggs'],
                nutrition: { calories: 420, protein: 16, carbs: 44, fat: 20 },
                crossContamination: 'Contains gluten, soy, dairy, and eggs',
            },
            {
                id: 505,
                name: 'Pork Belly & Grits Taco',
                description: 'Slow-roasted pork belly, jalapeño cheese grits, pickled onions, and cilantro on flour tortilla',
                price: 5.25,
                ingredients: ['flour tortilla', 'pork belly', 'grits', 'cheese', 'jalapeño', 'pickled onions', 'cilantro'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 580, protein: 22, carbs: 48, fat: 32 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 506,
                name: 'Chips & Queso',
                description: 'Crispy tortilla chips with house-made queso dip',
                price: 5.95,
                ingredients: ['corn chips', 'cheese', 'milk', 'jalapeño', 'spices'],
                allergens: ['dairy'],
                nutrition: { calories: 640, protein: 16, carbs: 52, fat: 42 },
                crossContamination: 'Contains dairy',
            },
            {
                id: 507,
                name: 'Rotisserie Chicken Taco',
                description: 'Herb-marinated rotisserie chicken, goat cheese, tomato, and chimichurri on corn tortilla',
                price: 4.75,
                ingredients: ['corn tortilla', 'chicken', 'goat cheese', 'tomato', 'chimichurri', 'herbs'],
                allergens: ['dairy'],
                nutrition: { calories: 340, protein: 26, carbs: 28, fat: 14 },
                crossContamination: 'Contains dairy',
            },
            {
                id: 508,
                name: 'Cuban Pig Taco',
                description: 'Slow-roasted pork, ham, Swiss cheese, pickles, mustard, and mojo sauce on flour tortilla',
                price: 4.95,
                ingredients: ['flour tortilla', 'pork', 'ham', 'swiss cheese', 'pickles', 'mustard', 'mojo sauce'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 460, protein: 28, carbs: 36, fat: 22 },
                crossContamination: 'Contains gluten and dairy',
            }
        ]
    },
    {
        id: 6,
        name: 'Blaze Pizza',
        cuisine: 'Fast-Fire Pizza',
        distance: '1.5 miles',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        menu: [
            {
                id: 601,
                name: 'Build Your Own Pizza - 11"',
                description: 'Choose your sauce, cheese, and unlimited toppings on our signature dough',
                price: 9.95,
                ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'toppings of choice'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 710, protein: 32, carbs: 86, fat: 26 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 602,
                name: 'BBQ Chicken Pizza',
                description: 'BBQ sauce, mozzarella, chicken, red onions, cilantro, and BBQ drizzle',
                price: 10.95,
                ingredients: ['pizza dough', 'bbq sauce', 'mozzarella', 'chicken', 'red onions', 'cilantro'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 820, protein: 42, carbs: 92, fat: 30 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 603,
                name: 'Meat Eater Pizza',
                description: 'Red sauce, mozzarella, pepperoni, crumbled meatballs, Italian sausage, and bacon',
                price: 11.95,
                ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'pepperoni', 'meatballs', 'sausage', 'bacon'],
                allergens: ['gluten', 'dairy', 'eggs'],
                nutrition: { calories: 980, protein: 48, carbs: 88, fat: 48 },
                crossContamination: 'Contains gluten, dairy, and eggs',
            },
            {
                id: 604,
                name: 'Veg Out Pizza',
                description: 'Red sauce, mozzarella, mushrooms, bell peppers, red onions, tomatoes, olives, and arugula',
                price: 10.45,
                ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'mushrooms', 'bell peppers', 'red onions', 'tomatoes', 'olives', 'arugula'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 720, protein: 28, carbs: 94, fat: 26 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 605,
                name: 'White Top Pizza',
                description: 'Garlic pesto sauce, mozzarella, ricotta, bacon, and arugula',
                price: 11.45,
                ingredients: ['pizza dough', 'pesto', 'mozzarella', 'ricotta', 'bacon', 'arugula', 'garlic'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 860, protein: 38, carbs: 82, fat: 42 },
                crossContamination: 'Contains gluten and dairy',
            },
            {
                id: 606,
                name: 'Gluten-Free Margherita Pizza',
                description: 'Red sauce, mozzarella, cherry tomatoes, and basil on gluten-free crust',
                price: 12.95,
                ingredients: ['gluten-free dough', 'tomato sauce', 'mozzarella', 'cherry tomatoes', 'basil', 'olive oil'],
                allergens: ['dairy'],
                nutrition: { calories: 680, protein: 26, carbs: 78, fat: 28 },
                crossContamination: 'Contains dairy, prepared in shared kitchen with gluten',
            },
            {
                id: 607,
                name: 'Caesar Salad',
                description: 'Romaine, parmesan, croutons, and Caesar dressing',
                price: 7.95,
                ingredients: ['romaine lettuce', 'parmesan', 'croutons', 'caesar dressing', 'lemon'],
                allergens: ['gluten', 'dairy', 'eggs', 'fish'],
                nutrition: { calories: 360, protein: 12, carbs: 24, fat: 24 },
                crossContamination: 'Contains gluten, dairy, eggs, and fish',
            },
            {
                id: 608,
                name: 'Fresh Fruit Cup',
                description: 'Seasonal fresh fruit medley',
                price: 4.95,
                ingredients: ['strawberries', 'pineapple', 'cantaloupe', 'grapes', 'blueberries'],
                allergens: [],
                nutrition: { calories: 80, protein: 2, carbs: 20, fat: 0 },
                crossContamination: 'Prepared in facility that handles nuts',
            },
            {
                id: 609,
                name: 'Garlic Knots',
                description: 'Warm garlic knots with marinara dipping sauce',
                price: 4.95,
                ingredients: ['pizza dough', 'garlic', 'butter', 'parmesan', 'parsley', 'marinara sauce'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 420, protein: 12, carbs: 58, fat: 16 },
                crossContamination: 'Contains gluten and dairy',
            }
        ]
    }
];

// Allergen mappings
const allergenKeywords = {
    'nuts': ['almond', 'cashew', 'walnut', 'pecan', 'peanut', 'nut', 'granola'],
    'dairy': ['milk', 'cheese', 'cream', 'butter', 'yogurt', 'whey', 'casein', 'lactose', 'cheddar', 'parmesan', 'feta', 'goat cheese', 'sour cream', 'mayo'],
    'gluten': ['wheat', 'flour', 'bread', 'pasta', 'tortilla', 'noodles', 'barley', 'rye', 'wrap'],
    'shellfish': ['shrimp', 'crab', 'lobster', 'clam', 'mussel', 'oyster'],
    'eggs': ['egg', 'mayo', 'mayonnaise'],
    'soy': ['soy', 'tofu', 'edamame', 'soy sauce', 'tempeh', 'miso'],
    'fish': ['salmon', 'tuna', 'cod', 'fish', 'ahi'],
    'sesame': ['sesame', 'tahini'],
    'vegetarian': ['chicken', 'beef', 'steak', 'pork', 'bacon', 'ham', 'sausage', 'pepperoni', 'salami', 'turkey', 'lamb', 'duck', 'meat', 'meatball', 'carnitas', 'barbacoa', 'chorizo', 'prosciutto'],
    'vegan': ['chicken', 'beef', 'steak', 'pork', 'bacon', 'ham', 'sausage', 'pepperoni', 'salami', 'turkey', 'lamb', 'duck', 'meat', 'meatball', 'carnitas', 'barbacoa', 'chorizo', 'prosciutto', 'milk', 'cheese', 'cream', 'butter', 'yogurt', 'whey', 'casein', 'lactose', 'cheddar', 'parmesan', 'feta', 'goat cheese', 'sour cream', 'egg', 'mayo', 'mayonnaise', 'honey'],
    'halal': ['pork', 'bacon', 'ham', 'pepperoni', 'salami', 'prosciutto', 'lard'],
    'kosher': ['pork', 'bacon', 'ham', 'pepperoni', 'salami', 'prosciutto', 'shellfish', 'shrimp', 'crab', 'lobster', 'clam', 'mussel', 'oyster']
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    login: document.getElementById('loginScreen'),
    profile: document.getElementById('profileScreen'),
    main: document.getElementById('mainScreen'),
    menu: document.getElementById('menuScreen')
};

const modals = {
    location: document.getElementById('locationModal'),
    item: document.getElementById('itemModal'),
    customize: document.getElementById('customizeModal')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    showScreen('welcome');
});

// Event Listeners
function initializeEventListeners() {
    // Welcome screen
    document.getElementById('getStartedBtn').addEventListener('click', () => {
        showScreen('login');
    });

    // Header buttons
    document.getElementById('profileBtn').addEventListener('click', () => {
        if (appState.currentUser) {
            showScreen('profile');
        } else {
            showScreen('login');
        }
    });

    document.getElementById('locationBtn').addEventListener('click', () => {
        if (appState.currentUser) {
            showLocationModal();
        }
    });

    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        appState.currentUser = { email };
        showScreen('profile');
    });

    // Profile setup - removed duplicate, now handled below with edit restrictions

    // Location modal
    document.getElementById('allowLocationBtn').addEventListener('click', () => {
        // Get selected radius
        const radiusSelect = document.getElementById('searchRadius');
        appState.searchRadius = parseFloat(radiusSelect.value);
        
        simulateLocationDetection();
        hideModal('location');
        if (appState.restaurants.length === 0) {
            loadMainScreen();
        } else {
            processRestaurantData();
            displayRestaurants();
            updateLocationDisplay();
        }
    });

    document.getElementById('denyLocationBtn').addEventListener('click', () => {
        appState.currentLocation = 'College Station, TX';
        hideModal('location');
        if (appState.restaurants.length === 0) {
            loadMainScreen();
        } else {
            updateLocationDisplay();
        }
    });

    document.getElementById('changeLocationBtn').addEventListener('click', () => {
        if (appState.currentUser) {
            showLocationModal();
        }
    });

    // Edit restrictions
    document.getElementById('editRestrictionsBtn').addEventListener('click', () => {
        showScreen('profile');
    });

    // Update when returning from profile edit
    document.getElementById('saveProfileBtn').addEventListener('click', () => {
        saveUserProfile();
        // If we're editing (not first time setup), refresh the restaurant list
        if (appState.restaurants.length > 0) {
            processRestaurantData();
            displayRestaurants();
            displayActiveRestrictions();
            showScreen('main');
        } else {
            showLocationModal();
        }
    }, { once: false });

    // Back button from menu
    document.getElementById('backBtn').addEventListener('click', () => {
        showScreen('main');
    });

    // Close item modal
    document.getElementById('closeModal').addEventListener('click', () => {
        hideModal('item');
        // Refresh menu to show any customization changes
        if (appState.currentRestaurant) {
            displayMenuItems(appState.currentRestaurant.menu);
        }
    });
    
    // Close customize modal
    document.getElementById('closeCustomizeModal').addEventListener('click', () => {
        hideModal('customize');
    });
    
    // Apply customization
    document.getElementById('applyCustomizationBtn').addEventListener('click', () => {
        applyCustomization();
    });
    
    // Reset customization
    document.getElementById('resetCustomizationBtn').addEventListener('click', () => {
        resetCustomization();
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

// Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    
    // Update user email display when showing profile screen
    if (screenName === 'profile' && appState.currentUser) {
        document.getElementById('userEmail').textContent = appState.currentUser.email;
    }
}

function showModal(modalName) {
    modals[modalName].classList.add('active');
}

function hideModal(modalName) {
    modals[modalName].classList.remove('active');
}

// Location Functions
function showLocationModal() {
    // Set current radius in dropdown
    const radiusSelect = document.getElementById('searchRadius');
    radiusSelect.value = appState.searchRadius.toString();
    showModal('location');
}

function simulateLocationDetection() {
    // Default to College Station, TX
    appState.currentLocation = 'College Station, TX';
    updateLocationDisplay();
}

function updateLocationDisplay() {
    document.getElementById('currentLocation').textContent = `${appState.currentLocation} (${appState.searchRadius} mile radius)`;
}

// Profile Functions
function saveUserProfile() {
    const checkboxes = document.querySelectorAll('.restriction-checkbox input:checked');
    appState.userRestrictions = Array.from(checkboxes).map(cb => cb.value);
}

function displayActiveRestrictions() {
    const restrictionsList = document.getElementById('restrictionsList');
    restrictionsList.innerHTML = '';
    
    if (appState.userRestrictions.length === 0) {
        restrictionsList.innerHTML = '<p style="color: var(--text-light);">No restrictions selected</p>';
        return;
    }
    
    appState.userRestrictions.forEach(restriction => {
        const tag = document.createElement('span');
        tag.className = 'restriction-tag';
        tag.textContent = restriction.charAt(0).toUpperCase() + restriction.slice(1);
        restrictionsList.appendChild(tag);
    });
}

// Main Screen Functions
function loadMainScreen() {
    showScreen('main');
    updateLocationDisplay();
    displayActiveRestrictions();
    processRestaurantData();
    displayRestaurants();
}

function processRestaurantData() {
    appState.restaurants = restaurantsData
        .filter(restaurant => {
            // Filter restaurants by search radius
            const distance = parseFloat(restaurant.distance);
            return distance <= appState.searchRadius;
        })
        .map(restaurant => {
            const safeItemsCount = restaurant.menu.filter(item => 
                isItemSafe(item, appState.userRestrictions)
            ).length;
            const cautionItemsCount = restaurant.menu.filter(item => 
                isItemCaution(item, appState.userRestrictions)
            ).length;
            
            return {
                ...restaurant,
                safeItemsCount,
                cautionItemsCount
            };
        });
}

function isItemSafe(item, restrictions) {
    if (restrictions.length === 0) return true;
    
    const safetyLevel = determineSafetyLevel(item, restrictions);
    return safetyLevel === 'safe';
}

function isItemCaution(item, restrictions) {
    if (restrictions.length === 0) return false;
    
    const safetyLevel = determineSafetyLevel(item, restrictions);
    return safetyLevel === 'caution';
}

function determineSafetyLevel(item, restrictions) {
    if (restrictions.length === 0) {
        return 'safe';
    }
    
    // Check for direct allergen matches
    for (const restriction of restrictions) {
        if (item.allergens.includes(restriction)) {
            return 'unsafe';
        }
        
        // Check ingredients
        const keywords = allergenKeywords[restriction] || [];
        for (const ingredient of item.ingredients) {
            for (const keyword of keywords) {
                if (ingredient.toLowerCase().includes(keyword.toLowerCase())) {
                    return 'unsafe';
                }
            }
        }
    }
    
    // If has cross-contamination warning, mark as caution
    if (item.crossContamination && item.crossContamination.toLowerCase().includes('may contain')) {
        return 'caution';
    }
    
    return 'safe';
}

function getRestrictionViolations(item, restrictions) {
    const violations = [];
    const restrictionLabels = {
        'vegetarian': 'Contains meat',
        'vegan': 'Not vegan',
        'halal': 'Not halal',
        'kosher': 'Not kosher',
        'nuts': 'Contains nuts',
        'dairy': 'Contains dairy',
        'gluten': 'Contains gluten',
        'shellfish': 'Contains shellfish',
        'eggs': 'Contains eggs',
        'soy': 'Contains soy',
        'fish': 'Contains fish',
        'sesame': 'Contains sesame'
    };
    
    for (const restriction of restrictions) {
        // Check direct allergen match
        if (item.allergens.includes(restriction)) {
            if (!violations.includes(restrictionLabels[restriction])) {
                violations.push(restrictionLabels[restriction]);
            }
            continue;
        }
        
        // Check ingredients for keywords
        const keywords = allergenKeywords[restriction] || [];
        for (const ingredient of item.ingredients) {
            for (const keyword of keywords) {
                if (ingredient.toLowerCase().includes(keyword.toLowerCase())) {
                    if (!violations.includes(restrictionLabels[restriction])) {
                        violations.push(restrictionLabels[restriction]);
                    }
                    break;
                }
            }
        }
    }
    
    return violations;
}

function displayRestaurants() {
    const grid = document.getElementById('restaurantGrid');
    const countEl = document.getElementById('restaurantCount');
    grid.innerHTML = '';
    
    if (appState.restaurants.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-light); grid-column: 1/-1; text-align: center; padding: 40px;">No restaurants found within your search radius. Try increasing the radius.</p>';
        countEl.textContent = '0 restaurants found';
        return;
    }
    
    countEl.textContent = `${appState.restaurants.length} restaurant${appState.restaurants.length !== 1 ? 's' : ''} found`;
    
    appState.restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        grid.appendChild(card);
    });
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.onclick = () => openRestaurantMenu(restaurant);
    
    card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(restaurant.name)}'">
        <div class="restaurant-content">
            <div class="restaurant-header">
                <div>
                    <h3>${restaurant.name}</h3>
                    <div class="restaurant-rating">
                        <span>⭐ ${restaurant.rating}</span>
                        <span>•</span>
                        <span>${restaurant.cuisine}</span>
                    </div>
                </div>
            </div>
            <p class="restaurant-info">📍 ${restaurant.distance}</p>
            <div class="items-badges">
                <span class="safe-items-badge">${restaurant.safeItemsCount} safe</span>
                ${restaurant.cautionItemsCount > 0 ? `<span class="caution-items-badge">${restaurant.cautionItemsCount} caution</span>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Menu Screen Functions
function openRestaurantMenu(restaurant) {
    appState.currentRestaurant = restaurant;
    showScreen('menu');
    
    document.getElementById('restaurantName').textContent = restaurant.name;
    document.getElementById('restaurantDetails').textContent = `${restaurant.cuisine} • ${restaurant.distance} • ⭐ ${restaurant.rating}`;
    
    displayMenuItems(restaurant.menu);
}

function displayMenuItems(menu) {
    const container = document.getElementById('menuItems');
    container.innerHTML = '';
    
    menu.forEach(item => {
        // Check if item has customizations and use customized version
        const displayItem = getCustomizedItem(item);
        const safetyLevel = determineSafetyLevel(displayItem, appState.userRestrictions);
        const menuItem = createMenuItem(displayItem, safetyLevel, item.id);
        container.appendChild(menuItem);
    });
}

function createMenuItem(item, safetyLevel, originalItemId) {
    const div = document.createElement('div');
    div.className = `menu-item ${safetyLevel}`;
    const hasCustomization = appState.excludedIngredients[originalItemId || item.id]?.length > 0;
    
    // Use original item ID for onclick to ensure we track customizations correctly
    const itemId = originalItemId || item.id;
    div.onclick = () => {
        // Always get fresh customized item when clicking
        const originalItem = appState.currentRestaurant.menu.find(i => i.id === itemId);
        const displayItem = getCustomizedItem(originalItem);
        const currentSafety = determineSafetyLevel(displayItem, appState.userRestrictions);
        showItemDetails(originalItem, currentSafety);
    };
    
    let warningHTML = '';
    if (safetyLevel === 'unsafe') {
        const violations = getRestrictionViolations(item, appState.userRestrictions);
        if (violations.length > 0) {
            warningHTML = `<div class="allergen-warning">⚠️ ${violations.join(', ')}</div>`;
        }
    } else if (safetyLevel === 'caution') {
        warningHTML = `<div class="cross-contamination">⚠️ ${item.crossContamination}</div>`;
    }
    
    div.innerHTML = `
        <div class="menu-item-header">
            <div>
                <h3>${item.name}${hasCustomization ? ' 🔧' : ''}</h3>
                <p class="menu-item-description">${item.description}</p>
            </div>
            <span class="safety-badge ${safetyLevel}">${safetyLevel.charAt(0).toUpperCase() + safetyLevel.slice(1)}</span>
        </div>
        ${warningHTML}
        <div class="menu-item-footer">
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
            <span class="nutrition-preview">${item.nutrition.calories} cal • ${item.nutrition.protein}g protein</span>
        </div>
    `;
    
    return div;
}

function showItemDetails(item, safetyLevel) {
    const details = document.getElementById('itemDetails');
    const excludedForItem = appState.excludedIngredients[item.id] || [];
    const hasCustomization = excludedForItem.length > 0;
    const displayIngredients = item.ingredients.filter(ing => !excludedForItem.includes(ing));
    
    details.innerHTML = `
        <div class="item-detail-header">
            <h3>${item.name}</h3>
            <span class="safety-badge ${safetyLevel}">${safetyLevel.charAt(0).toUpperCase() + safetyLevel.slice(1)}</span>
            <p class="item-detail-price">$${item.price.toFixed(2)}</p>
        </div>
        
        ${hasCustomization ? `
            <div class="customization-notice">
                🔧 Customized: ${excludedForItem.map(ing => `No ${ing}`).join(', ')}
            </div>
        ` : ''}
        
        <div class="item-detail-section">
            <h4>Description</h4>
            <p>${item.description}</p>
        </div>
        
        <div class="item-detail-section">
            <h4>Ingredients</h4>
            <ul class="ingredients-list">
                ${displayIngredients.map(ing => `<li class="ingredient-tag">${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="item-detail-section">
            <h4>Nutrition Facts</h4>
            <div class="nutrition-grid">
                <div class="nutrition-item">
                    <div class="nutrition-label">Calories</div>
                    <div class="nutrition-value">${item.nutrition.calories}</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Protein</div>
                    <div class="nutrition-value">${item.nutrition.protein}g</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Carbs</div>
                    <div class="nutrition-value">${item.nutrition.carbs}g</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Fat</div>
                    <div class="nutrition-value">${item.nutrition.fat}g</div>
                </div>
            </div>
        </div>
        
        ${item.allergens.length > 0 ? `
            <div class="item-detail-section">
                <h4>Allergens</h4>
                <div class="allergen-warning">
                    ⚠️ Contains: ${item.allergens.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(', ')}
                </div>
            </div>
        ` : ''}
        
        <div class="item-detail-section">
            <h4>Cross-Contamination Notice</h4>
            <div class="cross-contamination">
                ${item.crossContamination}
            </div>
        </div>
        
        <button id="customizeItemBtn" class="btn-primary full-width" style="margin-top: 20px;">🔧 Customize Item</button>
    `;
    
    showModal('item');
    
    // Add customize button handler
    document.getElementById('customizeItemBtn').onclick = () => {
        showCustomizationModal(item);
    };
}

// Utility Functions
function formatRestriction(restriction) {
    return restriction.charAt(0).toUpperCase() + restriction.slice(1).replace('-', ' ');
}

// Customization Functions
function showCustomizationModal(item) {
    appState.currentItem = item;
    const content = document.getElementById('customizeContent');
    const excludedForItem = appState.excludedIngredients[item.id] || [];
    
    content.innerHTML = `
        <div class="customize-item-header">
            <h4>${item.name}</h4>
            <p class="customize-subtitle">Tap ingredients to remove them</p>
        </div>
        <div class="ingredients-customize-grid">
            ${item.ingredients.map(ingredient => `
                <label class="ingredient-customize-option">
                    <input type="checkbox" 
                           class="ingredient-checkbox" 
                           value="${ingredient}"
                           ${excludedForItem.includes(ingredient) ? 'checked' : ''}>
                    <span class="ingredient-customize-label">
                        <span class="ingredient-name">${ingredient}</span>
                        <span class="remove-indicator">Remove</span>
                    </span>
                </label>
            `).join('')}
        </div>
    `;
    
    showModal('customize');
}

function applyCustomization() {
    const item = appState.currentItem;
    if (!item) return;
    
    const checkboxes = document.querySelectorAll('.ingredient-checkbox:checked');
    const excluded = Array.from(checkboxes).map(cb => cb.value);
    
    if (excluded.length > 0) {
        appState.excludedIngredients[item.id] = excluded;
    } else {
        delete appState.excludedIngredients[item.id];
    }
    
    hideModal('customize');
    
    // Refresh the item details with updated customization
    const customizedItem = getCustomizedItem(item);
    const safetyLevel = determineSafetyLevel(customizedItem, appState.userRestrictions);
    showItemDetails(item, safetyLevel);
    
    // Refresh the menu display to show updated safety badges
    if (appState.currentRestaurant) {
        displayMenuItems(appState.currentRestaurant.menu);
    }
}

function resetCustomization() {
    const item = appState.currentItem;
    if (!item) return;
    
    delete appState.excludedIngredients[item.id];
    
    // Uncheck all checkboxes
    document.querySelectorAll('.ingredient-checkbox').forEach(cb => {
        cb.checked = false;
    });
}

function getCustomizedItem(item) {
    const excluded = appState.excludedIngredients[item.id] || [];
    if (excluded.length === 0) return item;
    
    // Filter ingredients
    const remainingIngredients = item.ingredients.filter(ing => !excluded.includes(ing));
    
    // Recalculate allergens based on remaining ingredients
    const recalculatedAllergens = [];
    
    // Check each allergen keyword against remaining ingredients
    for (const [allergen, keywords] of Object.entries(allergenKeywords)) {
        // Check if any remaining ingredient contains allergen keywords
        const hasAllergen = remainingIngredients.some(ingredient => 
            keywords.some(keyword => ingredient.toLowerCase().includes(keyword.toLowerCase()))
        );
        
        // Also keep allergen if it's in the original allergens list and ingredient still present
        const originallyHasAllergen = item.allergens.includes(allergen) && hasAllergen;
        
        if (hasAllergen || originallyHasAllergen) {
            if (!recalculatedAllergens.includes(allergen)) {
                recalculatedAllergens.push(allergen);
            }
        }
    }
    
    // Create a copy with filtered ingredients and recalculated allergens
    const customizedItem = {
        ...item,
        ingredients: remainingIngredients,
        allergens: recalculatedAllergens,
        isCustomized: true,
        excludedIngredients: excluded
    };
    
    return customizedItem;
}
