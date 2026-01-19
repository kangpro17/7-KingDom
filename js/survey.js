// ===================================================
// Survey System
// ===================================================

class SurveyModal {
    constructor(gameId, gameTitle, onComplete) {
        this.gameId = gameId;
        this.gameTitle = gameTitle;
        this.onComplete = onComplete;
        this.selectedRating = 0;
        this.init();
    }

    init() {
        this.createDOM();
        this.bindEvents();
    }

    createDOM() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'surveyModal';
        overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h2 class="pixel-text" style="font-size: 0.9rem; color: var(--text-dark);">
            🎮 게임 만족도 조사
          </h2>
        </div>
        <div class="modal-body">
          <p style="text-align: center; margin-bottom: var(--spacing-lg); font-size: 1.1rem;">
            <strong>${this.gameTitle}</strong> 게임은 어떠셨나요?
          </p>
          <div class="star-rating" id="starRating">
            <span class="star" data-value="1">⭐</span>
            <span class="star" data-value="2">⭐</span>
            <span class="star" data-value="3">⭐</span>
            <span class="star" data-value="4">⭐</span>
            <span class="star" data-value="5">⭐</span>
          </div>
          <p id="ratingText" style="text-align: center; margin-top: var(--spacing-md); color: #666; min-height: 24px;"></p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-gold btn-pixel" id="submitSurvey" disabled>제출하기</button>
          <button class="btn btn-danger" id="skipSurvey">건너뛰기</button>
          <button class="btn btn-primary" id="goHomeBtn" style="background: #5B4A2A; border-color: #3E3219;">🏠 홈으로</button>
        </div>
      </div>
    `;
        document.body.appendChild(overlay);

        this.elements = {
            overlay,
            stars: overlay.querySelectorAll('.star'),
            ratingText: overlay.querySelector('#ratingText'),
            submitBtn: overlay.querySelector('#submitSurvey'),
            skipBtn: overlay.querySelector('#skipSurvey'),
            homeBtn: overlay.querySelector('#goHomeBtn')
        };
    }

    bindEvents() {
        this.elements.stars.forEach(star => {
            star.addEventListener('click', (e) => {
                this.setRating(parseInt(e.target.dataset.value));
            });

            star.addEventListener('mouseenter', (e) => {
                this.highlightStars(parseInt(e.target.dataset.value));
            });
        });

        this.elements.overlay.querySelector('.star-rating').addEventListener('mouseleave', () => {
            this.highlightStars(this.selectedRating);
        });

        this.elements.submitBtn.addEventListener('click', () => this.submit());
        this.elements.skipBtn.addEventListener('click', () => this.skip());
        this.elements.homeBtn.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    setRating(value) {
        this.selectedRating = value;
        this.highlightStars(value);
        this.elements.submitBtn.disabled = false;

        const texts = [
            '',
            '😢 아쉬워요',
            '😐 그저 그래요',
            '🙂 괜찮아요',
            '😊 재미있어요',
            '🤩 최고예요!'
        ];
        this.elements.ratingText.textContent = texts[value];
    }

    highlightStars(value) {
        this.elements.stars.forEach((star, index) => {
            star.classList.toggle('active', index < value);
        });
    }

    show() {
        setTimeout(() => {
            this.elements.overlay.classList.add('active');
        }, 500);
    }

    hide() {
        this.elements.overlay.classList.remove('active');
        setTimeout(() => {
            this.elements.overlay.remove();
        }, 300);
    }

    submit() {
        if (this.selectedRating > 0) {
            SurveyManager.saveSurvey(this.gameId, this.selectedRating);
        }
        this.hide();
        if (this.onComplete) this.onComplete(this.selectedRating);
    }

    skip() {
        this.hide();
        if (this.onComplete) this.onComplete(null);
    }
}

// Survey Manager (same as in main.js, duplicated for standalone use)
const SurveyManager = window.SurveyManager || {
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
    }
};

window.SurveyModal = SurveyModal;
