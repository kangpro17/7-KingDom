# 🏰 7 안전좌의 주인은 누구인가

> 7대 안전교육을 게임으로 배우는 교육 플랫폼

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📖 소개

슈퍼마리오 스타일의 던전 맵에서 7가지 안전교육 게임을 플레이하며 안전 지식을 습득하는 교육용 웹 플랫폼입니다.

## 🎮 7대 안전교육 게임

| 스테이지 | 주제 | 게임 설명 |
|----------|------|-----------|
| 🏠 Stage 1 | **생활안전** | 집 안의 위험 요소를 찾아 클릭하세요! |
| 🚦 Stage 2 | **교통안전** | 신호등을 보고 안전하게 횡단보도를 건너세요! |
| 🛡️ Stage 3 | **폭력예방 및 신변보호** | 위험한 상황에서 올바른 대처법을 선택하세요! |
| 🚫 Stage 4 | **약물 및 사이버 중독 예방** | 나쁜 유혹을 거절하는 방법을 배우세요! |
| 🔥 Stage 5 | **재난안전** | 화재 발생! 미로를 탈출하며 대피 요령을 익히세요! |
| 👷 Stage 6 | **직업안전** | 작업 상황에 맞는 보호구를 착용시켜주세요! |
| ❤️ Stage 7 | **응급처치** | CPR 리듬 게임으로 심폐소생술을 연습하세요! |

## ✨ 주요 기능

### 🗺️ 던전 맵 시스템
- 슈퍼마리오 스타일의 비주얼 맵
- 진행 상황 저장 (LocalStorage)
- 클리어 시 별점 획득

### 🤖 NPC 챗봇
각 게임마다 도움을 주는 NPC 캐릭터가 등장합니다:
- 🎮 **게임 방법** 안내
- 💡 **승리 전략** 제공
- 🔍 **힌트** 제공

### 📊 만족도 조사
게임 완료 후 별점으로 만족도를 평가할 수 있습니다.

## 🚀 실행 방법

### 로컬에서 실행
1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/your-username/safety-education-game.git
   ```
2. `index.html` 파일을 브라우저에서 열면 됩니다.

### GitHub Pages 배포
1. GitHub에 저장소를 푸시합니다.
2. Settings → Pages → Source를 `main` 브랜치로 설정합니다.
3. 배포된 URL로 접속하여 플레이합니다.

## 📁 프로젝트 구조

```
📦 safety-education-game
├── 📄 index.html          # 메인 맵 페이지
├── 📁 games/              # 7가지 게임 페이지
│   ├── life-safety.html
│   ├── traffic-safety.html
│   ├── violence-prevention.html
│   ├── addiction-prevention.html
│   ├── disaster-safety.html
│   ├── occupational-safety.html
│   └── first-aid.html
├── 📁 css/                # 스타일시트
│   ├── style.css          # 공통 스타일
│   ├── map.css            # 맵 스타일
│   ├── game.css           # 게임 공통 스타일
│   └── chatbot.css        # 챗봇 스타일
└── 📁 js/                 # 자바스크립트
    ├── main.js            # 메인 로직 & 진행상황 관리
    ├── chatbot.js         # NPC 챗봇 시스템
    └── survey.js          # 만족도 조사 시스템
```

## 🎯 학습 목표

본 교육 플랫폼은 다음과 같은 **7대 안전교육 표준**을 기반으로 합니다:

1. **생활안전**: 일상생활 위험 요소 인지 및 예방
2. **교통안전**: 교통 법규 준수 및 안전한 보행
3. **폭력예방**: 자기 보호 및 도움 요청 방법
4. **중독예방**: 유해 약물 및 미디어 중독 예방
5. **재난안전**: 화재, 지진 등 재난 대피 요령
6. **직업안전**: 산업 현장 안전 수칙 준수
7. **응급처치**: CPR 및 기본 응급 처치 능력

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 구조
- **CSS3**: 애니메이션, 반응형 디자인
- **JavaScript (ES6+)**: 게임 로직, 상태 관리
- **LocalStorage**: 진행 상황 저장

## 📱 호환성

- ✅ Chrome, Firefox, Safari, Edge 최신 버전
- ✅ 모바일 브라우저 지원
- ✅ 반응형 디자인

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

<p align="center">
  Made with ❤️ for Safety Education
</p>
