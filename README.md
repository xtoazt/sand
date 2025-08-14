# sand. - Unblocked Games Website

A beautiful, minimalistic unblocked games website that allows users to search and discover games using the s16.lol API.

## 🌟 Features

- **Stunning Design**: Modern, minimalistic UI with smooth animations
- **Search Functionality**: Search for any game using the powerful API
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful hover effects and loading animations
- **Game Cards**: Clean, informative game cards with images and descriptions
- **Quick Suggestions**: Click on suggested games for instant results
- **Error Handling**: Graceful error handling and user feedback

## 🎮 How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Search for Games**: Type any game name in the search bar
3. **Click Suggestions**: Use the quick suggestion buttons for popular games
4. **Browse Results**: View games in the beautiful card layout
5. **Play Games**: Click on any game card to open the game in a new tab

## 🛠️ Technical Details

### Files Structure
```
sand/
├── index.html      # Main HTML structure
├── styles.css      # Beautiful CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Inter font family for perfect typography

### API Integration
The website uses the `https://api.s16.lol/v0/api/games` API to fetch game data. The API returns game information including:
- Game title
- Description
- Thumbnail images
- Categories
- Ratings
- Game URLs

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to blue gradient (#667eea to #764ba2)
- **Cards**: Clean white with subtle shadows
- **Text**: Dark gray for readability
- **Accents**: Purple gradient for interactive elements

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Perfect spacing and line heights for readability**

### Animations
- **Fade-in animations** for page elements
- **Hover effects** on cards and buttons
- **Loading spinners** and smooth transitions
- **Staggered card animations** for visual appeal

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop**: Full grid layout with optimal spacing
- **Tablet**: Adjusted grid and typography
- **Mobile**: Single column layout with touch-friendly elements

## 🚀 Getting Started

1. **Download the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Start searching** for your favorite games!

No server setup required - it works directly in the browser!

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Card shadows */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
```

### Adding More Suggestions
Edit the suggestions in `index.html`:
```html
<span class="suggestion">Try: Your Game</span>
```

### Modifying API
Update the API URL in `script.js`:
```javascript
const API_BASE_URL = 'your-api-endpoint';
```

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the design
- Adding more functionality

---

**Enjoy playing games on sand.! 🎮✨**
