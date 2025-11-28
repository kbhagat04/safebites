// Application State
const appState = {
    currentUser: null,
    currentLocation: 'College Station, TX',
    userRestrictions: [],
    currentRestaurant: null,
    restaurants: []
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
                crossContamination: 'Prepared in a facility that handles wheat, dairy, and soy',
                safetyLevel: 'safe'
            },
            {
                id: 102,
                name: 'Steak Burrito',
                description: 'Grilled steak, flour tortilla, cilantro-lime rice, pinto beans, cheese, sour cream, and salsa',
                price: 12.45,
                ingredients: ['steak', 'flour tortilla', 'rice', 'pinto beans', 'cheese', 'sour cream', 'tomato', 'lime'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 850, protein: 48, carbs: 94, fat: 31 },
                crossContamination: 'Contains dairy and gluten',
                safetyLevel: 'unsafe'
            },
            {
                id: 103,
                name: 'Veggie Bowl',
                description: 'Fajita veggies, cilantro-lime rice, black beans, corn salsa, lettuce, and guacamole',
                price: 9.95,
                ingredients: ['peppers', 'onions', 'rice', 'black beans', 'corn', 'lettuce', 'avocado', 'tomato'],
                allergens: [],
                nutrition: { calories: 540, protein: 16, carbs: 81, fat: 18 },
                crossContamination: 'May contain traces of dairy and gluten from shared equipment',
                safetyLevel: 'caution'
            },
            {
                id: 104,
                name: 'Carnitas Tacos',
                description: 'Braised pork, soft corn tortillas, salsa verde, onions, and cilantro',
                price: 11.25,
                ingredients: ['pork', 'corn tortilla', 'tomatillo', 'onions', 'cilantro', 'lime'],
                allergens: [],
                nutrition: { calories: 480, protein: 32, carbs: 42, fat: 20 },
                crossContamination: 'Prepared in a facility that handles wheat and dairy',
                safetyLevel: 'safe'
            },
            {
                id: 105,
                name: 'Cheese Quesadilla',
                description: 'Flour tortilla filled with melted cheese, served with sour cream and guacamole',
                price: 8.95,
                ingredients: ['flour tortilla', 'cheese', 'sour cream', 'avocado'],
                allergens: ['gluten', 'dairy'],
                nutrition: { calories: 720, protein: 28, carbs: 58, fat: 42 },
                crossContamination: 'Contains dairy and gluten',
                safetyLevel: 'unsafe'
            },
            {
                id: 106,
                name: 'Sofritas Bowl',
                description: 'Organic tofu braised with peppers and spices, brown rice, black beans, and fresh salsa',
                price: 10.45,
                ingredients: ['tofu', 'brown rice', 'black beans', 'peppers', 'tomato', 'onions', 'spices'],
                allergens: ['soy'],
                nutrition: { calories: 560, protein: 18, carbs: 78, fat: 17 },
                crossContamination: 'Contains soy, may contain traces of wheat',
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'caution'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'safe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
                safetyLevel: 'unsafe'
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
    'sesame': ['sesame', 'tahini']
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
    item: document.getElementById('itemModal')
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
        simulateLocationDetection();
        hideModal('location');
        if (appState.restaurants.length === 0) {
            loadMainScreen();
        } else {
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
}

function showModal(modalName) {
    modals[modalName].classList.add('active');
}

function hideModal(modalName) {
    modals[modalName].classList.remove('active');
}

// Location Functions
function showLocationModal() {
    showModal('location');
}

function simulateLocationDetection() {
    // Default to College Station, TX
    appState.currentLocation = 'College Station, TX';
    updateLocationDisplay();
}

function updateLocationDisplay() {
    document.getElementById('currentLocation').textContent = appState.currentLocation;
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
    appState.restaurants = restaurantsData.map(restaurant => {
        const safeItemsCount = restaurant.menu.filter(item => 
            isItemSafe(item, appState.userRestrictions)
        ).length;
        
        return {
            ...restaurant,
            safeItemsCount
        };
    });
}

function isItemSafe(item, restrictions) {
    if (restrictions.length === 0) return true;
    
    const safetyLevel = determineSafetyLevel(item, restrictions);
    return safetyLevel === 'safe';
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

function displayRestaurants() {
    const grid = document.getElementById('restaurantGrid');
    grid.innerHTML = '';
    
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
            <span class="safe-items-badge">${restaurant.safeItemsCount} safe items</span>
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
        const safetyLevel = determineSafetyLevel(item, appState.userRestrictions);
        const menuItem = createMenuItem(item, safetyLevel);
        container.appendChild(menuItem);
    });
}

function createMenuItem(item, safetyLevel) {
    const div = document.createElement('div');
    div.className = `menu-item ${safetyLevel}`;
    div.onclick = () => showItemDetails(item, safetyLevel);
    
    let warningHTML = '';
    if (safetyLevel === 'unsafe' && item.allergens.length > 0) {
        warningHTML = `<div class="allergen-warning">⚠️ Contains: ${item.allergens.join(', ')}</div>`;
    } else if (safetyLevel === 'caution') {
        warningHTML = `<div class="cross-contamination">⚠️ ${item.crossContamination}</div>`;
    }
    
    div.innerHTML = `
        <div class="menu-item-header">
            <div>
                <h3>${item.name}</h3>
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
    
    details.innerHTML = `
        <div class="item-detail-header">
            <h3>${item.name}</h3>
            <span class="safety-badge ${safetyLevel}">${safetyLevel.charAt(0).toUpperCase() + safetyLevel.slice(1)}</span>
            <p class="item-detail-price">$${item.price.toFixed(2)}</p>
        </div>
        
        <div class="item-detail-section">
            <h4>Description</h4>
            <p>${item.description}</p>
        </div>
        
        <div class="item-detail-section">
            <h4>Ingredients</h4>
            <ul class="ingredients-list">
                ${item.ingredients.map(ing => `<li class="ingredient-tag">${ing}</li>`).join('')}
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
    `;
    
    showModal('item');
}

// Utility Functions
function formatRestriction(restriction) {
    return restriction.charAt(0).toUpperCase() + restriction.slice(1).replace('-', ' ');
}
