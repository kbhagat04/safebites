# 🛡️ SafeBites

**An adaptive, user-centered restaurant menu system for safer dining**

SafeBites addresses the critical challenge of finding safe dining options for people with food allergies and dietary restrictions. Traditional restaurant menus offer limited filtering and unclear ingredient details, forcing diners to rely on inconsistent staff knowledge—increasing the risk of allergic reactions. SafeBites solves this by providing real-time, personalized menu filtering with comprehensive allergen and nutritional information.

![SafeBites Demo](https://img.shields.io/badge/Status-Prototype-blue) ![Version](https://img.shields.io/badge/Version-1.0.0-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🎯 Problem Statement

Dining out is stressful for individuals with food allergies:
- **59% of restaurants** lack accurate allergen information on menus
- **Hidden allergens** in sauces and ingredients cause reactions
- **Static menus** don't adapt to individual dietary needs
- **Manual filtering** is time-consuming and error-prone

SafeBites transforms the dining experience by centralizing and personalizing dietary information in one reliable platform.

---

## ✨ Key Features

### 🔐 **Smart Authentication & Profile**
- Quick login system with personalized profiles
- Comprehensive allergen tracking (8+ common allergens)
- Dietary preference support (vegetarian, vegan, halal, kosher)
- Persistent user settings across sessions

### 📍 **Location-Based Discovery**
- GPS-powered restaurant finder
- College Station, TX location (customizable)
- Distance tracking and radius filtering
- Privacy-first location permissions

### 🚦 **Color-Coded Safety System**
- **🟢 Green (Safe)**: No allergens detected—dine with confidence
- **🟡 Yellow (Caution)**: Cross-contamination risk—review carefully
- **🔴 Red (Unsafe)**: Contains allergens—avoid this item
- Real-time filtering based on your restrictions
- Dynamic safe item counter per restaurant

### 🍽️ **Detailed Menu Intelligence**
- Complete ingredient breakdowns
- Comprehensive nutrition facts (calories, protein, carbs, fat)
- Explicit allergen warnings
- Cross-contamination notices
- Interactive item detail modals

### 🔒 **Privacy & Security**
- End-to-end encryption messaging
- Transparent data usage notices
- Location permissions with opt-out
- Local data storage (prototype)

---

## 🚀 Quick Start

### **Prerequisites**
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for Option 3) or Node.js (for Option 2)

### **Setup for First Time Users**

If you cloned this repository, you may need to make the startup script executable:

```bash
chmod +x start.sh
```

*(This is only needed once after cloning)*

---

### **Option 1: One-Command Launch** ⚡
```bash
./start.sh
```
*Automatically starts server and opens browser*

### **Option 2: NPM Start** (Recommended - No Setup Required)
```bash
npm start
```
*Easiest option - no permissions needed!*

### **Option 3: Manual Python Server**
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📱 Live Demo

### Demo Credentials
```
Email: admin@safebites.com
Password: admin123
```

### Sample User Journey (Alex's Story)

**Scenario**: Alex has nut and dairy allergies and is traveling to College Station, TX

1. **Launch App** → Click "Get Started"
2. **Sign In** → Use demo credentials
3. **Set Restrictions** → Select "Nuts" ✓ and "Dairy" ✓
4. **Allow Location** → Detect College Station, TX
5. **Browse Restaurants** → See 5 nearby options with safe item counts
6. **Select Chipotle** → View color-coded menu
7. **Review Items**:
   - 🟢 Chicken Bowl (safe) → 630 cal, full ingredients
   - 🔴 Steak Burrito (unsafe) → contains gluten & dairy
8. **Make Confident Choice** → Dine safely!

**Demo Time**: ~2 minutes

---

## 🏪 Featured Restaurants

| Restaurant | Cuisine | Menu Items | Safe Options* |
|-----------|---------|------------|---------------|
| **Chipotle Mexican Grill** | Mexican | 6 items | Chicken Bowl, Carnitas Tacos |
| **Taco Bell** | Mexican Fast Food | 5 items | Chips & Guacamole |
| **Schlotzsky's** | Deli & Sandwiches | 5 items | Garden Vegetable Soup |
| **CAVA** | Mediterranean | 5 items | Varies by restrictions |
| **Velvet Taco** | Modern Taco Shop | 6 items | Varies by restrictions |

*Based on nut-free + dairy-free restrictions

---

## 🛠️ Technical Stack

### **Frontend**
- Pure HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)

### **Features**
- Responsive design (mobile-first)
- State management pattern
- Dynamic filtering algorithms
- Modal-based UI interactions

### **No Dependencies**
- Zero npm packages required
- No build process needed
- Works in any modern browser
- Fast load times (<100KB total)

---

## 📂 Project Structure

```
/safebites/
├── index.html          # Main app structure with 5 screens
├── styles.css          # 500+ lines of responsive styling
├── script.js           # 600+ lines of app logic + data
├── package.json        # NPM scripts for easy startup
├── start.sh            # Auto-launch script (executable)
└── README.md           # This file
```

---

## 🎨 Design System

### Color Palette
```css
--primary-color: #4CAF50    /* SafeBites Green */
--safe-color: #4CAF50        /* Green indicator */
--caution-color: #FFC107     /* Yellow warning */
--unsafe-color: #F44336      /* Red alert */
--secondary-color: #2196F3   /* Info blue */
```

### Typography
- System fonts for native feel
- Responsive sizing (14px-48px)
- Clear hierarchy with weight variations

### Components
- Restaurant cards with hover effects
- Menu item cards with safety badges
- Modal overlays for detailed info
- Form inputs with focus states
- Interactive buttons with transitions

---

## 📊 Data Model

### Restaurant Schema
```javascript
{
  id: Number,
  name: String,
  cuisine: String,
  distance: String,
  rating: Number (0-5),
  image: String (URL),
  menu: [MenuItem]
}
```

### Menu Item Schema
```javascript
{
  id: Number,
  name: String,
  description: String,
  price: Number,
  ingredients: [String],
  allergens: [String],
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  },
  crossContamination: String,
  safetyLevel: String
}
```

---

## ✅ Requirements Coverage

| Requirement | Implementation | Status |
|------------|----------------|--------|
| Filter by Restriction | Multi-select allergen/preference filtering | ✅ Complete |
| Restaurant Integration | 5 restaurants with 27 realistic menu items | ✅ Complete |
| Data Accuracy | Detailed ingredients + allergen mappings | ✅ Complete |
| Location Information | GPS permission + College Station detection | ✅ Complete |
| Data Security/Privacy | Privacy notices + encryption messaging | ✅ Complete |

---

## 🎓 Academic Context

### Research Foundation
- **Peniamina et al. (2016)**: Psychological stress from food allergies
- **Sultan et al. (2025)**: Gaps in current digital menu solutions
- **Bomfim et al. (2023)**: Mobile ordering accessibility issues
- **Konstantinou et al. (2025)**: Hidden allergen detection needs
- **Alt (2021)**: Restaurant integration challenges
- **Lyu et al. (2025)**: Geolocation personalization benefits
- **Bemmann & Mayer (2024)**: Data privacy concerns in food apps

### Use Case Validation
SafeBites addresses real-world scenarios:
- Travelers in unfamiliar cities
- Individuals with multiple allergies
- People seeking nutritional transparency
- Diners wanting to avoid cross-contamination

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Check internet connection (uses Unsplash CDN) |
| Modal won't open | Refresh page or check browser console |
| Styles broken | Verify all files in same directory |
| Server won't start | Check port 8000 not in use: `lsof -i :8000` |
| Safe count wrong | Clear browser cache and reload |

---

## 📄 License

MIT License - feel free to use for educational purposes

---

## 🙏 Acknowledgments

- **Concept**: SafeBites research team
- **Design**: Custom responsive framework
- **Images**: Unsplash community
- **Icons**: Unicode emoji standard
- **Testing**: Focus group feedback from allergy community

---

## 📞 Contact & Support

**Demo Issues?** Check troubleshooting section above  
**Questions?** Review the use case walkthrough  
**Feedback?** Document via GitHub issues (if applicable)

---

<div align="center">

**Made with ❤️ for safer dining experiences**

[View Demo](#-quick-start)

</div>
