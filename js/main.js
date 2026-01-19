// ===================================================
// Safety Education Data
// ===================================================

const safetyEducationData = [
  {
    id: "life_safety",
    title: "생활안전",
    title_en: "Life Safety",
    emoji: "🏠",
    description: "일상생활(학교, 가정, 실내외 시설 등)에서 발생할 수 있는 사고를 예방하기 위한 교육입니다.",
    achievement_standard: "학교 및 가정 내 시설물의 올바른 이용법을 익히고, 추락·미끄러짐·화상 등 생활 속 위험 요인을 식별하여 안전하게 행동할 수 있다.",
    summary_content: "시설물 이용, 실내외 활동",
    core_goal: "위험 요소 인지 및 안전한 이용",
    gameFile: "games/life-safety.html",
    color: "#FFB74D"
  },
  {
    id: "traffic_safety",
    title: "교통안전",
    title_en: "Traffic Safety",
    emoji: "🚦",
    description: "보행자, 자전거 이용자, 대중교통 이용자로서의 안전을 보장하기 위한 교육입니다.",
    achievement_standard: "교통 법규와 표지판의 의미를 이해하고, 도로 횡단 및 자전거 이용 시 안전 수칙을 실천한다.",
    summary_content: "보행, 자전거, 자동차 이용",
    core_goal: "교통 법규 준수 및 방어 보행",
    gameFile: "games/traffic-safety.html",
    color: "#4CAF50"
  },
  {
    id: "violence_prevention",
    title: "폭력예방 및 신변보호",
    title_en: "Violence Prevention",
    emoji: "🛡️",
    description: "학교 폭력, 성폭력, 유괴 및 미아 사고 등 외부의 위해로부터 자신을 지키는 교육입니다.",
    achievement_standard: "학교 폭력의 유형을 인지하고 거절 의사를 명확히 표현하며, 위기 상황 발생 시 도움을 요청하는 방법을 익힌다.",
    summary_content: "학교폭력, 성폭력, 유괴 예방",
    core_goal: "자기 보호 및 대처 능력 강화",
    gameFile: "games/violence-prevention.html",
    color: "#9C27B0"
  },
  {
    id: "addiction_prevention",
    title: "약물 및 사이버 중독 예방",
    title_en: "Addiction Prevention",
    emoji: "🚫",
    description: "담배, 알코올, 마약류 등 유해 약물과 스마트폰·인터넷 과의존을 예방하기 위한 교육입니다.",
    achievement_standard: "약물의 오남용이 인체에 미치는 영향을 이해하고 유혹을 단호히 거절한다.",
    summary_content: "약물 오남용, 사이버 중독",
    core_goal: "거절 기술 및 건전한 매체 사용",
    gameFile: "games/addiction-prevention.html",
    color: "#F44336"
  },
  {
    id: "disaster_safety",
    title: "재난안전",
    title_en: "Disaster Safety",
    emoji: "🔥",
    description: "화재, 지진, 황사, 폭설 등 자연재해 및 사회적 재난에 대응하는 교육입니다.",
    achievement_standard: "재난 종류별 대피 요령과 행동 수칙을 숙지한다. 화재 시 소화기 사용법과 대피 경로를 익힌다.",
    summary_content: "화재, 지진, 자연재해",
    core_goal: "신속하고 정확한 대피 요령 숙지",
    gameFile: "games/disaster-safety.html",
    color: "#FF5722"
  },
  {
    id: "occupational_safety",
    title: "직업안전",
    title_en: "Occupational Safety",
    emoji: "👷",
    description: "현장 실습이나 미래의 직장 생활에서 발생할 수 있는 산업재해를 예방하는 교육입니다.",
    achievement_standard: "작업장의 위험 요소를 파악하고 보호구 착용 등 안전 수칙을 준수한다.",
    summary_content: "산업현장 안전, 근로 권리",
    core_goal: "산업재해 예방 및 안전 수칙 준수",
    gameFile: "games/occupational-safety.html",
    color: "#795548"
  },
  {
    id: "first_aid",
    title: "응급처치",
    title_en: "First Aid",
    emoji: "❤️",
    description: "사고 발생 시 부상자의 상태 악화를 방지하고 생명을 구하기 위한 긴급 조치 교육입니다.",
    achievement_standard: "119 신고 등 응급 상황 보고 체계를 이해한다. 심폐소생술(CPR)과 자동심장충격기(AED) 사용법을 익힌다.",
    summary_content: "심폐소생술, 기본 외상 처치",
    core_goal: "생명 존중 및 응급 대응 능력",
    gameFile: "games/first-aid.html",
    color: "#E91E63"
  }
];

// ===================================================
// Progress Management
// ===================================================

const ProgressManager = {
  STORAGE_KEY: 'safety_game_progress',

  getProgress() {
    const data = sessionStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : this.getDefaultProgress();
  },

  getDefaultProgress() {
    return {
      completedGames: [],
      stars: {},
      totalStars: 0,
      lastPlayed: null
    };
  },

  saveProgress(progress) {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
  },

  completeGame(gameId, stars) {
    const progress = this.getProgress();
    // Only mark as completed if at least one star is earned
    if (stars > 0) {
      if (!progress.completedGames.includes(gameId)) {
        progress.completedGames.push(gameId);
      }
      progress.stars[gameId] = Math.max(progress.stars[gameId] || 0, stars);
    }
    progress.totalStars = Object.values(progress.stars).reduce((a, b) => a + b, 0);
    progress.lastPlayed = gameId;
    this.saveProgress(progress);
    return progress;
  },

  isCompleted(gameId) {
    return this.getProgress().completedGames.includes(gameId);
  },

  getStars(gameId) {
    return this.getProgress().stars[gameId] || 0;
  },

  getTotalStars() {
    return this.getProgress().totalStars || 0;
  },

  resetProgress() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};

// ===================================================
// Survey Management
// ===================================================

const SurveyManager = {
  STORAGE_KEY: 'safety_game_surveys',

  getSurveys() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveSurvey(gameId, rating) {
    const surveys = this.getSurveys();
    surveys.push({
      gameId,
      rating,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(surveys));
  },

  getAverageRating(gameId) {
    const surveys = this.getSurveys().filter(s => s.gameId === gameId);
    if (surveys.length === 0) return 0;
    return surveys.reduce((sum, s) => sum + s.rating, 0) / surveys.length;
  }
};

// ===================================================
// Main Map Initialization
// ===================================================

function initializeMap() {
  const dungeonGrid = document.getElementById('dungeonGrid');
  if (!dungeonGrid) return;

  const progress = ProgressManager.getProgress();

  // Create dungeon nodes
  safetyEducationData.forEach((game, index) => {
    const isCompleted = progress.completedGames.includes(game.id);
    const stars = progress.stars[game.id] || 0;

    const node = document.createElement('div');
    node.className = `dungeon-node ${isCompleted ? 'completed' : ''} ${index === 3 ? 'center' : ''}`;
    node.innerHTML = `
      <div class="dungeon-icon-wrapper" style="--game-color: ${game.color}">
        <span class="dungeon-icon">${game.emoji}</span>
      </div>
      <div class="dungeon-label">
        <div class="dungeon-number">STAGE ${index + 1}</div>
        <div class="dungeon-name">${game.title}</div>
        ${isCompleted ? `<div class="dungeon-stars">${'⭐'.repeat(stars)}</div>` : ''}
      </div>
    `;

    node.addEventListener('click', () => {
      window.location.href = game.gameFile;
    });

    dungeonGrid.appendChild(node);
  });

  // Update progress display
  updateProgressDisplay(progress);

  // Add floating coins
  addFloatingCoins();
}

function updateProgressDisplay(progress) {
  const starsContainer = document.getElementById('progressStars');
  if (!starsContainer) return;

  const totalPossibleStars = 7 * 3; // 7 games, max 3 stars each
  const earnedStars = progress.totalStars || 0;

  starsContainer.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const star = document.createElement('span');
    star.className = `progress-star ${i < progress.completedGames.length ? 'earned' : ''}`;
    star.textContent = i < progress.completedGames.length ? '⭐' : '☆';
    starsContainer.appendChild(star);
  }

  const label = document.getElementById('progressLabel');
  if (label) {
    label.textContent = `${progress.completedGames.length}/7 던전 정복`;
  }
}

function addFloatingCoins() {
  const container = document.querySelector('.bg-elements');
  if (!container) return;

  for (let i = 0; i < 5; i++) {
    const coin = document.createElement('div');
    coin.className = 'floating-coin';
    coin.textContent = '🪙';
    coin.style.left = `${10 + Math.random() * 80}%`;
    coin.style.top = `${20 + Math.random() * 40}%`;
    coin.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(coin);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeMap);
