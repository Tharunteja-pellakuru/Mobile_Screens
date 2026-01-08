# Marketing Showcase - Standalone Project

A standalone React application featuring interactive marketing and portfolio showcase components with smooth scroll-snap navigation.

## Features

✅ **HomeContainer** - Landing page with hero section
✅ **Marketing Container** - Swipeable cards with infinite scrolling
  - Digital Marketing
  - SEO Optimization
  - Ad Campaigns  
  - Online Reputation Management
✅ **Services Showcase** - Portfolio section with service cards
✅ **Scroll-snap Navigation** - Smooth page-to-page scrolling
✅ **Touch-enabled** - Swipeable cards for mobile devices
✅ **Responsive Design** - Works on all screen sizes

## Installation

1. Navigate to the project directory:
```bash
cd marketing_showcase_standalone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
marketing_showcase_standalone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HomeContainer/          # Landing page
│   │   ├── MarketingComponents/    # Swipeable marketing cards
│   │   ├── PortfolioContainer/     # Portfolio showcase
│   │   └── common/                 # Shared components (Icons)
│   ├── assets/
│   │   ├── images/                 # All image assets
│   │   └── logos/                  # Logo assets
│   ├── App.js                      # Main app component
│   ├── App.css                     # App styles with scroll-snap
│   ├── index.js                    # React entry point
│   └── index.css                   # Global styles
├── package.json
└── README.md
```

## Key Components

### 1. SwipeableLayout (Marketing Container)
- Vertical swipe navigation between cards
- Scroll-lock when centered in viewport
- 4 marketing service cards with infinite scrolling

### 2. ServicesShowcase (Portfolio)
- Interactive portfolio cards
- Touch-scrollable image carousel
- Explore popup functionality

### 3. HomeContainer
- Hero section with rating badge
- Background component
- Responsive layout

## Technologies

- React 18
- CSS Modules
- Scroll Snap API
- Touch Events
- Flexbox/Grid layouts

## Build

To create a production build:
```bash
npm run build
```

The build folder will contain optimized production files.

## License

All rights reserved.
