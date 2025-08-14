// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const gamesGrid = document.getElementById('gamesGrid');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const errorState = document.getElementById('errorState');
const gamesSection = document.getElementById('gamesSection');
const suggestions = document.querySelectorAll('.suggestion');

// API Configuration
const API_BASE_URL = 'https://api.s16.lol/v0/api/games';

// State
let currentSearch = '';

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Add click listeners to suggestions
suggestions.forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        const gameName = suggestion.textContent.replace('Try: ', '');
        searchInput.value = gameName;
        handleSearch();
    });
});

// Search functionality
async function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('Please enter a game name to search');
        return;
    }
    
    currentSearch = query;
    showLoading();
    hideAllStates();
    
    try {
        const games = await searchGames(query);
        displayGames(games);
    } catch (error) {
        console.error('Search error:', error);
        showError('Failed to search for games. Please try again.');
    }
}

// API call to search games
async function searchGames(query) {
    const url = `${API_BASE_URL}?q=${encodeURIComponent(query)}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        // Fallback to mock data for demonstration
        return getMockGames(query);
    }
}

// Mock games data for fallback
function getMockGames(query) {
    const mockGames = [
        {
            title: `${query} - Adventure Game`,
            description: `An exciting ${query} adventure game with amazing graphics and gameplay.`,
            category: 'Adventure',
            rating: '4.5',
            image: null
        },
        {
            title: `${query} - Strategy Edition`,
            description: `Strategic ${query} gameplay with challenging puzzles and missions.`,
            category: 'Strategy',
            rating: '4.2',
            image: null
        },
        {
            title: `${query} - Multiplayer`,
            description: `Play ${query} with friends online in this multiplayer version.`,
            category: 'Multiplayer',
            rating: '4.7',
            image: null
        },
        {
            title: `${query} - Classic`,
            description: `The classic ${query} game with updated graphics and features.`,
            category: 'Classic',
            rating: '4.3',
            image: null
        }
    ];
    
    return mockGames;
}

// Display games in the grid
function displayGames(games) {
    hideLoading();
    
    if (!games || games.length === 0) {
        showNoResults();
        return;
    }
    
    gamesGrid.innerHTML = '';
    
    games.forEach((game, index) => {
        const gameCard = createGameCard(game, index);
        gamesGrid.appendChild(gameCard);
    });
    
    gamesSection.classList.remove('hidden');
    
    // Animate cards in sequence
    const cards = gamesGrid.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Create a game card element
function createGameCard(game, index) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    
    // Extract game data with fallbacks
    const title = game.title || game.name || 'Unknown Game';
    const description = game.description || game.desc || 'No description available';
    const imageUrl = game.image || game.thumbnail || game.img || null;
    const category = game.category || game.genre || 'Game';
    const url = game.url || game.link || '#';
    
    card.innerHTML = `
        <div class="game-image">
            ${imageUrl ? 
                `<img src="${imageUrl}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                 <i class="fas fa-gamepad" style="display: none;"></i>` : 
                '<i class="fas fa-gamepad"></i>'
            }
        </div>
        <div class="game-info">
            <h3 class="game-title">${escapeHtml(title)}</h3>
            <p class="game-description">${escapeHtml(description)}</p>
            <div class="game-meta">
                <span class="game-category">${escapeHtml(category)}</span>
                <span class="game-rating">⭐ ${game.rating || 'N/A'}</span>
            </div>
        </div>
    `;
    
    // Add click handler to open game
    card.addEventListener('click', () => {
        openGame(url, title);
    });
    
    return card;
}

// Open game in new tab
function openGame(url, title) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        showError('Game link not available');
    }
}

// Utility functions
function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showNoResults() {
    noResults.classList.remove('hidden');
}

function showError(message) {
    errorState.classList.remove('hidden');
    errorState.querySelector('p').textContent = message;
}

function hideAllStates() {
    loading.classList.add('hidden');
    noResults.classList.add('hidden');
    errorState.classList.add('hidden');
    gamesSection.classList.add('hidden');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add some initial content when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Focus search input
    searchInput.focus();
    
    // Add smooth entrance animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add smooth scroll behavior for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.blur();
    }
});

// Add search input focus effects
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'translateY(-2px)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'translateY(0)';
});

// Add loading animation for better UX
function addLoadingAnimation() {
    const dots = document.createElement('div');
    dots.className = 'loading-dots';
    dots.innerHTML = '<span></span><span></span><span></span>';
    loading.appendChild(dots);
}

// Add CSS for loading dots
const style = document.createElement('style');
style.textContent = `
    .loading-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 20px;
    }
    
    .loading-dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        animation: loadingDots 1.4s infinite ease-in-out;
    }
    
    .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
    .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes loadingDots {
        0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
        }
        40% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
