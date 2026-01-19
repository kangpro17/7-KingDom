const CACHE_NAME = 'safety-game-v1';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './css/game.css',
    './css/chatbot.css',
    './js/main.js',
    './js/chatbot.js',
    './js/survey.js',
    './images/map_bg.png',
    './images/warrior.png',
    './images/wizard.png',
    './images/life_safety_bg.png',
    './games/life-safety.html',
    './games/traffic-safety.html',
    './games/violence-prevention.html',
    './games/addiction-prevention.html',
    './games/disaster-safety.html',
    './games/occupational-safety.html',
    './games/first-aid.html',
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
