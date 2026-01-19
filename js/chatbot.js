// ===================================================
// NPC Chatbot System - Fixed Position with Character Images
// ===================================================

const ChatbotData = {
    life_safety: {
        npcName: "안전 마법사",
        npcImage: "../images/wizard.png",
        greeting: "안녕! 나는 안전 마법사야! 🧙‍♂️ 집이나 학교에서 숨어있는 위험 요소들을 찾아내는 게임이야!",
        howToPlay: "화면에 보이는 방 안에서 위험한 물건이나 상황을 찾아 클릭해! 콘센트에 물이 닿거나, 날카로운 물건, 미끄러운 바닥 같은 것들을 찾으면 돼!",
        strategy: "💡 팁: 먼저 전기 관련 위험(콘센트, 전선)을 찾고, 그 다음 물건의 위치(높은 곳의 물건, 계단)를 확인해봐!",
        hint: "부엌과 욕실 근처를 자세히 살펴봐... 물과 전기가 만나면 위험해! ⚡"
    },
    traffic_safety: {
        npcName: "안전 용사",
        npcImage: "../images/warrior.png",
        greeting: "안녕! 나는 안전 용사야! ⚔️ 안전하게 횡단보도를 건너는 방법을 알려줄게!",
        howToPlay: "보행자 신호등이 초록색일 때 '건너기' 버튼을 눌러 캐릭터를 움직여! 빨간불이나 차가 오면 멈춰야 해!",
        strategy: "💡 팁: 초록불이 켜지자마자 건너지 말고, 좌우를 확인한 후 건너! 그리고 갑자기 뛰면 안 돼!",
        hint: "신호등이 깜빡이기 시작하면 건너지 말고 기다려! 🚶"
    },
    violence_prevention: {
        npcName: "안전 마법사",
        npcImage: "../images/wizard.png",
        greeting: "안녕! 나는 안전 마법사야! 🧙‍♂️ 위험한 상황에서 나를 지키는 방법을 알려줄게!",
        howToPlay: "다양한 상황이 나오면 가장 올바른 대처 방법을 선택해! 위험한 상황을 피하고 도움을 요청하는 방법을 배울 수 있어!",
        strategy: "💡 팁: '싫어요'라고 분명하게 말하고, 위험하면 빨리 자리를 피해! 그리고 반드시 어른에게 알려야 해!",
        hint: "낯선 사람이 다가오면 절대 따라가지 말고, 큰 소리로 도움을 요청해! 📢"
    },
    addiction_prevention: {
        npcName: "안전 용사",
        npcImage: "../images/warrior.png",
        greeting: "안녕! 나는 안전 용사야! ⚔️ 나쁜 유혹을 거절하는 방법을 알려줄게!",
        howToPlay: "친구나 다른 사람이 나쁜 것을 권할 때, 올바른 거절 방법을 선택해! 담배, 술, 게임중독 등 다양한 상황이 나와!",
        strategy: "💡 팁: 확실하게 '아니오'라고 말하고, 다른 재미있는 활동을 제안해봐! 계속 권하면 자리를 피해!",
        hint: "핸드폰이나 게임은 하루 2시간 이내로! 규칙적인 생활이 중독을 예방해! ⏰"
    },
    disaster_safety: {
        npcName: "안전 마법사",
        npcImage: "../images/wizard.png",
        greeting: "안녕! 나는 안전 마법사야! 🧙‍♂️ 화재나 지진이 났을 때 안전하게 대피하는 방법을 알려줄게!",
        howToPlay: "미로 속에서 안전한 대피 경로를 찾아 출구까지 이동해! 화염이나 무너진 곳은 피해야 해!",
        strategy: "💡 팁: 연기가 많으면 낮은 자세로 이동하고, 엘리베이터 대신 계단을 이용해! 출구 표시를 따라가!",
        hint: "화재 시 젖은 수건으로 코와 입을 막고 대피해! 문을 열기 전에 손등으로 온도를 확인해! 🚪"
    },
    occupational_safety: {
        npcName: "안전 용사",
        npcImage: "../images/warrior.png",
        greeting: "안녕! 나는 안전 용사야! ⚔️ 작업장에서 안전하게 일하는 방법을 알려줄게!",
        howToPlay: "각 작업 상황에 맞는 올바른 보호구를 선택해서 작업자에게 착용시켜줘!",
        strategy: "💡 팁: 눈 보호(고글), 손 보호(장갑), 머리 보호(안전모), 발 보호(안전화) 순으로 생각해봐!",
        hint: "용접할 때는 용접 마스크, 화학물질 다룰 때는 보안경과 장갑이 필수야! 🧤"
    },
    first_aid: {
        npcName: "안전 마법사",
        npcImage: "../images/wizard.png",
        greeting: "안녕! 나는 안전 마법사야! 🧙‍♂️ 생명을 구하는 CPR 방법을 알려줄게!",
        howToPlay: "화면에 표시되는 리듬에 맞춰 버튼을 눌러 심폐소생술을 해! 타이밍이 중요해!",
        strategy: "💡 팁: 1분에 100~120회 속도로, '강하게, 빠르게, 깊게' 압박해! 노래 '상어가족' 리듬을 생각해봐!",
        hint: "먼저 119에 신고하고, 주변에 AED가 있는지 확인해! 가슴 압박은 5cm 깊이로! 💓"
    }
};

class Chatbot {
    constructor(gameId) {
        this.gameId = gameId;
        this.data = ChatbotData[gameId] || ChatbotData.life_safety;
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createFixedCharacter();
        this.createChatWindow();
        this.bindEvents();
    }

    createFixedCharacter() {
        // Fixed position character (no movement)
        const character = document.createElement('div');
        character.className = 'chatbot-character';
        character.id = 'chatbotCharacter';
        character.innerHTML = `
            <div class="chatbot-speech-bubble" id="chatbotSpeechBubble">
                도움이 필요한가? 🤔
            </div>
            <img src="${this.data.npcImage}" alt="${this.data.npcName}" class="character-image">
            <div class="character-name">${this.data.npcName}</div>
        `;
        document.body.appendChild(character);
        this.characterElement = character;

        // Show speech bubble periodically
        this.startSpeechBubbleCycle();
    }

    createChatWindow() {
        const container = document.createElement('div');
        container.className = 'chatbot-container';
        container.id = 'chatbotContainer';
        container.style.display = 'none';
        container.innerHTML = `
            <div class="chatbot-window active" id="chatbotWindow">
                <div class="chatbot-header">
                    <div class="chatbot-avatar">
                        <img src="${this.data.npcImage}" alt="${this.data.npcName}">
                    </div>
                    <div class="chatbot-info">
                        <div class="chatbot-name">${this.data.npcName}</div>
                        <div class="chatbot-status">도움이 필요하면 물어봐!</div>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">✕</button>
                </div>
                <div class="chatbot-messages" id="chatbotMessages"></div>
                <div class="chatbot-options" id="chatbotOptions">
                    <button class="chat-option-btn" data-action="howToPlay">
                        <span class="option-icon">🎮</span> 게임 방법
                    </button>
                    <button class="chat-option-btn" data-action="strategy">
                        <span class="option-icon">💡</span> 승리 전략
                    </button>
                    <button class="chat-option-btn" data-action="hint">
                        <span class="option-icon">🔍</span> 힌트 받기
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        this.elements = {
            container,
            window: container.querySelector('#chatbotWindow'),
            close: container.querySelector('#chatbotClose'),
            messages: container.querySelector('#chatbotMessages'),
            options: container.querySelector('#chatbotOptions')
        };
    }

    bindEvents() {
        // Click on character to open chat
        this.characterElement.addEventListener('click', () => this.open());

        // Close button
        this.elements.close.addEventListener('click', () => this.close());

        // Option buttons
        this.elements.options.querySelectorAll('.chat-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleOption(action);
            });
        });
    }

    startSpeechBubbleCycle() {
        const showBubble = () => {
            if (!this.isOpen) {
                const bubble = document.getElementById('chatbotSpeechBubble');
                if (bubble) {
                    const messages = [
                        "도움이 필요한가? 🤔",
                        "여기를 클릭해봐! 👆",
                        "힌트가 필요하면 나를 클릭! 💡",
                        "어려우면 물어봐! 😊"
                    ];
                    bubble.textContent = messages[Math.floor(Math.random() * messages.length)];
                    bubble.classList.add('show');

                    setTimeout(() => {
                        bubble.classList.remove('show');
                    }, 3000);
                }
            }
        };

        // Show first bubble after 3 seconds
        setTimeout(showBubble, 3000);

        // Then every 12 seconds
        setInterval(showBubble, 12000);
    }

    open() {
        this.isOpen = true;
        this.elements.container.style.display = 'block';

        // Hide speech bubble
        const bubble = document.getElementById('chatbotSpeechBubble');
        if (bubble) bubble.classList.remove('show');

        // Show greeting if first time
        if (this.messages.length === 0) {
            this.addMessage('bot', this.data.greeting);
        }
    }

    close() {
        this.isOpen = false;
        this.elements.container.style.display = 'none';
    }

    handleOption(action) {
        const userMessages = {
            howToPlay: '게임 어떻게 하는 거야?',
            strategy: '이기는 방법 알려줘!',
            hint: '힌트 좀 줘!'
        };

        this.addMessage('user', userMessages[action]);

        setTimeout(() => {
            this.showTyping();
            setTimeout(() => {
                this.hideTyping();
                this.addMessage('bot', this.data[action]);
            }, 800);
        }, 300);
    }

    addMessage(type, text) {
        const message = document.createElement('div');
        message.className = `chat-message ${type}`;
        message.innerHTML = `
            <div class="message-avatar">
                ${type === 'bot' ? `<img src="${this.data.npcImage}" alt="">` : '🧒'}
            </div>
            <div class="message-bubble">${text}</div>
        `;
        this.elements.messages.appendChild(message);
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
        this.messages.push({ type, text });
    }

    showTyping() {
        const typing = document.createElement('div');
        typing.className = 'chat-message bot typing-message';
        typing.innerHTML = `
            <div class="message-avatar">
                <img src="${this.data.npcImage}" alt="">
            </div>
            <div class="message-bubble">
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        `;
        this.elements.messages.appendChild(typing);
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }

    hideTyping() {
        const typing = this.elements.messages.querySelector('.typing-message');
        if (typing) typing.remove();
    }
}

// Export for use in game pages
window.Chatbot = Chatbot;
