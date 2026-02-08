// --- CONFIGURATION ---

const TRAITS = [
    // Order: Shortest to Longest (approx) to fill 2-col grid
    // 1. Patroller (30s) -> Trump: 80s
    { id: 'patroller', name: '巡視者', time: 30, trumpTime: 80, icon: '#icon-patroller' },

    // 2. Group: Excitement/Abnormal (40s) -> Trump: Excitement 100s, Abnormal 90s
    {
        id: 'group_exc_abn',
        type: 'group',
        items: [
            { id: 'excitement', name: '興奮', time: 40, trumpTime: 100, icon: '#icon-excitement' },
            { id: 'abnormal', name: '異常', time: 40, trumpTime: 90, icon: '#icon-abnormal' }
        ]
    },

    // 3. Teleport (45s) -> Trump: 100s
    { id: 'teleport', name: '瞬間移動', time: 45, trumpTime: 100, icon: '#icon-teleport', span: 2 },

    // 4. Warp (50s) -> Trump: 100s (Assumed, not listed but standard high-tier)
    { id: 'warp', name: '移形', time: 50, trumpTime: 100, icon: '#icon-warp', large: true, color: 'orange' },

    // 5. Blink (60s) -> Trump: 150s
    { id: 'blink', name: '神出鬼没', time: 60, trumpTime: 150, icon: '#icon-blink', large: true, color: 'orange' }
];

// Items that appear in "Others"
// Items that appear in "Others"
const OTHERS = [
    { id: 'insolence', name: '人格:傲慢', time: 52, icon: '#icon-insolence' },
    { id: 'accelerate', name: '解読加速まで', time: 202, icon: '#icon-accelerate' } // 202s
];

// Endgame items (Pop)
const ENDGAME = [
    { id: 'detention', name: '引き止める', time: 120, icon: '#icon-insolence' }, // Reusing insolence/mask
    { id: 'claustrophobia', name: '幽閉の恐怖', time: 20, icon: '#icon-blocked' } // Reusing blocked
];

// Full Hunter Database
// Full Hunter Database (Updated based on user request)
// Full Hunter Database (Updated based on user request)
const HUNTERS = [
    {
        id: 'leo', name: '復讐者', skills: [
            { name: '黒レオ自動追尾消滅', time: 25 }, { name: 'パペット再設置', time: 20 }, { name: 'パペット破壊後再設置', time: 45 }
        ]
    },
    {
        id: 'joker', name: '道化師', skills: [
            { name: 'ロケットダッシュ', time: 12 }, { name: 'ダッシュ妨害', time: 6 }
        ]
    },
    {
        id: 'bane', name: '断罪狩人', skills: [
            { name: 'チェーン命中', time: 14 }, { name: 'チェーン外し', time: 11 }, { name: 'トラバサミ', time: 50 }
        ]
    },
    {
        id: 'ripper', name: 'リッパー', skills: [
            { name: 'エーバー', time: 20 }, { name: '切りチャージ', time: 9 }, { name: '切りストック(最大2)', time: 0, static: true }
        ]
    },
    {
        id: 'violetta', name: '結魂者', skills: [
            { name: '糸吐き', time: 10 }, { name: 'くも糸加速', time: 1 }
        ]
    },
    {
        id: 'geisha', name: '芸者', skills: [
            { name: '刹那', time: 9 }, { name: 'アゲハ', time: 14 }
        ]
    },
    {
        id: 'hastur', name: '黄衣の王', skills: [
            { name: '触手', time: 5 }, { name: '行詩（疑うに見る）', time: 20 }
        ]
    },
    {
        id: 'wu_chang', name: '白黒無常', skills: [
            { name: '急魂', time: 20 }, { name: 'ワープ', time: 30 }, { name: 'ベル', time: 14 }
        ]
    },
    {
        id: 'joseph', name: '写真家', skills: [
            { name: '写真', time: 45 }, { name: '出入り', time: 8 }, { name: 'パラパラ', time: 10 }
        ]
    },
    {
        id: 'burke', name: '狂眼', skills: [
            { name: 'オーバークロック', time: 30 }
        ]
    },
    {
        id: 'yidhra', name: '夢の魔女', skills: [
            { name: '無（存在感なし）', time: 75 }, { name: '有（存在感あり）', time: 45 }
        ]
    },
    {
        id: 'robbie', name: '泣き虫', skills: [
            { name: '魂', time: 15 }, { name: '安息の道', time: 18 }
        ]
    },
    {
        id: 'luchino', name: '魔トカゲ', skills: [
            { name: 'ジャンプ', time: 11 }
        ]
    },
    {
        id: 'mary', name: '血の女王', skills: [
            { name: '初手鏡', time: 8 }, { name: '鏡像', time: 13 }, { name: '鏡', time: 15, icon: '#icon-mirror' }
        ]
    },
    {
        id: 'bonbon', name: 'ガードNo.26', skills: [
            { name: '爆弾生成', time: 6 }, { name: '爆弾生成(MAX)', time: 5 }, { name: 'リモート爆弾', time: 30 }
        ]
    },
    {
        id: 'ann', name: '使徒', skills: [
            { name: '猫', time: 10 }, { name: 'ランウェイ', time: 16 }
        ]
    },
    {
        id: 'antonio', name: 'ヴァイオリニスト', skills: [
            { name: '弦', time: 13 }, { name: '弦キャンセル', time: 7 }, { name: '狂想曲', time: 14 }
        ]
    },
    {
        id: 'galatea', name: '彫刻師', skills: [
            { name: '石像', time: 16 }, { name: '像に形に墓場', time: 15 }
        ]
    },
    {
        id: 'undead', name: 'アンデッド', skills: [
            { name: 'ダッシュ', time: 10 }, { name: '重叩き', time: 14 }
        ]
    },
    {
        id: 'polun', name: '破輪', skills: [
            { name: '変形', time: 5 }, { name: '罠(14s/個)', time: 4 }, { name: '悲観', time: 32 }, { name: '洞下', time: 30 }
        ]
    },
    {
        id: 'naiad', name: '漁師', skills: [
            { name: '銛（山＋魚）', time: 7 }, { name: '強波', time: 15 }
        ]
    },
    {
        id: 'wax', name: '蝋人形師', skills: [
            { name: '硬化', time: 18 }, { name: '熱浪', time: 25 }
        ]
    },
    {
        id: 'nightmare', name: '悪夢', skills: [
            { name: '渡りガラス', time: 20 }, { name: '今日長', time: 55 }
        ]
    },
    {
        id: 'keegan', name: '書記官', skills: [
            { name: '記録', time: 19 }, { name: '審査', time: 6 }
        ]
    },
    {
        id: 'hermit', name: '隠者', skills: [
            { name: '変換(初)', time: 50 }, { name: '変換', time: 12 }, { name: '奇跡', time: 100 }, { name: '寄託', time: 40 }
        ]
    },
    {
        id: 'nightwatch', name: '夜の番人', skills: [
            { name: '風域展開', time: 13 }, { name: '捕食', time: 13 }
        ]
    },
    {
        id: 'sangria', name: 'オペラ歌手', skills: [
            { name: '超訳', time: 9 }, { name: '追奏', time: 24 }, { name: '影襲', time: 20 }
        ]
    },
    {
        id: 'fools_gold', name: 'フールズ・ゴールド', skills: [
            { name: 'つるはし', time: 6 }, { name: '石', time: 25 }, { name: '一触即発', time: 16 }
        ]
    },
    {
        id: 'ivy', name: '時空の影', skills: [
            { name: '異族の正体', time: 18 }, { name: '広囲', time: 48 }, { name: '侵食転送', time: 43 }
        ]
    },
    {
        id: 'goatman', name: '足萎えの羊', skills: [
            { name: '包囲時間', time: 9 }
        ]
    },
    {
        id: 'flabaroo', name: 'フラバルー', skills: [
            { name: 'Wサプライズ', time: 14 }, { name: '空中ブランコ', time: 19 }
        ]
    },
    {
        id: 'merchant', name: '雑貨商', skills: [
            // Placeholder skills as specific cooldowns were not found/provided
            { name: 'スキル情報求', time: 0 }
        ]
    },
    {
        id: 'billiards', name: 'ビリヤードプレイヤー', skills: [
            { name: '撞点', time: 12 }, { name: '怪物', time: 20 }, { name: '手球', time: 18 }
        ]
    },
    {
        id: 'queen_bee', name: '女王蜂', skills: [
            { name: '反哺TP', time: 18 }
        ]
    }
];

const WARNING_THRESHOLD = 5;

class CooldownTracker {
    constructor() {
        this.gridTraits = document.getElementById('grid-traits');
        this.gridOthers = document.getElementById('grid-others');
        this.endgameArea = document.getElementById('endgame-status');
        this.startBtn = document.getElementById('start-btn');
        this.statusBar = document.getElementById('status-bar');
        this.hunterSelect = document.getElementById('hunter-select');
        this.hunterPrev = document.getElementById('hunter-prev');
        this.hunterNext = document.getElementById('hunter-next');
        this.hunterSkillArea = document.getElementById('hunter-skill-area');
        this.blockedStatus = document.getElementById('blocked-status');
        this.blockedTimerDisplay = document.getElementById('blocked-timer');
        this.matchTimerDisplay = document.getElementById('match-timer'); // New Match Timer

        this.timers = {};
        this.interval = null;
        this.waitInterval = null;
        this.waitTime = 5;
        this.highlightThreshold = 10; // Seconds before highlighting
        this.state = 'idle'; // idle, waiting, running, endgame
        this.blockedEndTime = null;
        this.matchStartTime = null;

        this.init();
    }

    init() {
        this.populateHunterSelect();
        this.renderAll();

        this.startBtn.addEventListener('click', () => this.handleStartBtn());
        this.hunterSelect.addEventListener('change', () => this.updateHunter());
        this.hunterPrev.addEventListener('click', () => this.navHunter(-1));
        this.hunterNext.addEventListener('click', () => this.navHunter(1));

        this.updateHunter();
    }

    populateHunterSelect() {
        this.hunterSelect.innerHTML = '';
        HUNTERS.forEach((h, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = h.name;
            this.hunterSelect.appendChild(opt);
        });
    }

    navHunter(dir) {
        let idx = this.hunterSelect.selectedIndex + dir;
        if (idx < 0) idx = this.hunterSelect.options.length - 1;
        if (idx >= this.hunterSelect.options.length) idx = 0;
        this.hunterSelect.selectedIndex = idx;
        this.updateHunter();
    }

    updateHunter() {
        const index = this.hunterSelect.value;
        const hunter = HUNTERS[index];

        this.hunterSkillArea.innerHTML = '';

        hunter.skills.forEach((skill, i) => {
            const skillId = `hunter-skill-${i}`;
            const card = document.createElement('div');
            card.className = 'tracker-card hunter-card'; // Add specific class
            card.id = `card-${skillId}`;

            // Use specific icon if defined, else generic
            const iconRef = skill.icon || '#icon-hunter-skill';

            card.innerHTML = `
                <svg><use href="${iconRef}"></use></svg>
                <div class="label">${skill.name}</div>
                <div class="timer" id="timer-${skillId}">${skill.time}</div>
            `;

            this.hunterSkillArea.appendChild(card);

            // Add click listener for manual start
            card.addEventListener('click', () => {
                const t = this.timers[skillId];
                this.restartTimer(t);
            });

            this.timers[skillId] = {
                element: document.getElementById(`timer-${skillId}`),
                card: card,
                remaining: skill.time,
                original: skill.time,
                active: false,
                manual: true // Mark as manual
            };
        });
    }

    renderAll() {
        this.gridTraits.innerHTML = '';
        this.gridOthers.innerHTML = '';

        // Blocked Trait Logic
        // Since "Blocked" is independent, we don't put it in the grid.
        // We manage it separately via showBlockedUI.
    }

    renderGroup(groupItem, container) {
        const groupCard = document.createElement('div');
        groupCard.className = 'tracker-card group-card';
        // Create 2 halves
        groupItem.items.forEach((item, idx) => {
            const sub = document.createElement('div');
            sub.className = 'sub-card ' + (idx === 0 ? 'top' : 'bottom');
            sub.id = `card-${item.id}`;
            sub.innerHTML = `
                <svg><use href="${item.icon}"></use></svg>
                <div class="label">${item.name}</div>
                <div class="timer" id="timer-${item.id}">${item.time}</div>
            `;
            groupCard.appendChild(sub);

            // Register timer
            this.timers[item.id] = {
                element: sub.querySelector('.timer'),
                card: sub, // The sub-card is the visual target
                remaining: item.time,
                original: item.time,
                trumpTime: item.trumpTime, // New prop
                currentDuration: item.time, // Track duration for %
                name: item.name,
                active: false,
                manual: false,
                id: item.id
            };

            sub.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleCardClick(this.timers[item.id]);
            });
        });
        container.appendChild(groupCard);
    }

    renderCard(item, container) {
        const card = document.createElement('div');
        // Add classes: 
        // card-large (Tall logic)
        // card-square (Square logic)
        // card-span-2 (Span 2 logic)
        // card-orange (Color logic)

        let classes = ['tracker-card'];
        if (item.large) classes.push('card-large'); // Tall
        if (item.shape === 'square') classes.push('card-square');
        if (item.span === 2) classes.push('card-span-2');
        if (item.color === 'orange') classes.push('card-orange');

        card.className = classes.join(' ');
        card.id = `card-${item.id}`;

        card.innerHTML = `
             <svg class="${item.large ? 'icon-large' : ''}">
                <use href="${item.icon}"></use></svg>
            <div class="label">${item.name}</div>
            <div class="timer" id="timer-${item.id}">${item.time}</div>
        `;

        container.appendChild(card);
        this.timers[item.id] = {
            element: document.getElementById(`timer-${item.id}`),
            card: document.getElementById(`card-${item.id}`),
            remaining: item.time,
            original: item.time,
            trumpTime: item.trumpTime, // New prop
            currentDuration: item.time, // Track duration for %
            name: item.name,
            active: false,
            manual: false,
            id: item.id
        };

        // Add Click Handler for Traits/Others
        card.addEventListener('click', () => this.handleCardClick(this.timers[item.id]));
    }

    handleCardClick(timer) {
        if (this.state !== 'running' && this.state !== 'endgame') return;

        // Hunter Skills: Manual toggle is already handled in restartTimer logic?
        // User: "Count stop mid-way ONLY for Traits".
        if (timer.manual) {
            // If inactive, start it.
            if (!timer.active) {
                this.restartTimer(timer);
            }
            // If active, DO NOTHING (cannot stop)
            return;
        }

        // Traits (Teleport, Blink, etc.)
        if (this.isTrait(timer.id)) {
            // Check Match Time > 120s Logic
            const matchElapsed = this.getMatchElapsed();
            const isTrumpEnabled = matchElapsed >= 120;

            // Find if any OTHER trait is currently active
            const activeTrait = this.findActiveTrait();

            // 1. If THIS timer is active (Running)
            if (timer.active) {
                // Clicking running trait -> Do nothing (User requirement)
                return;
            }

            // 2. If ANOTHER timer is active (Running)
            if (activeTrait && activeTrait.id !== timer.id) {
                if (isTrumpEnabled) {
                    // --- TRUMP SWAP LOGIC (Over 120s) ---
                    // Swap allowed: Inherit percentage from activeTrait

                    const percentage = activeTrait.remaining / activeTrait.currentDuration;

                    // New Time = Target's TrumpMax * percentage
                    // If trumpTime is undefined (e.g. Warp), fallback to original
                    const targetMax = timer.trumpTime || timer.original;
                    const newRemaining = Math.max(0, Math.ceil(targetMax * percentage));

                    // Stop the active one
                    this.resetTimer(activeTrait);

                    // Start the new one with inherited time
                    this.activateTimer(timer, newRemaining, targetMax);

                    this.updateStatus(`裏向きカード: ${activeTrait.name} から ${timer.name} に変更 (残${newRemaining}秒)`);
                } else {
                    // --- UNDER 120s: BLOCK SWITCHING ---
                    // User: "From 120s... others also clickable".
                    // Implies before 120s, clicking inactive while one is active is IGNORED.
                    // Only "Finished" traits allow starting a new one (Standard Logic below).
                    return;
                }
            } else {
                // 3. No active traits (All stopped/finished) -> NORMAL START
                // Start this one
                this.activateTimer(timer);

                // Reset others (Single Active Logic)
                Object.values(this.timers).forEach(t => {
                    if (this.isTrait(t.id) && t.id !== timer.id) {
                        this.resetTimer(t);
                    }
                });
            }
        }
    }

    getMatchElapsed() {
        if (!this.matchStartTime) return 0;
        return (Date.now() - this.matchStartTime) / 1000;
    }

    findActiveTrait() {
        return Object.values(this.timers).find(t => this.isTrait(t.id) && t.active);
    }

    isTrait(id) {
        // Check if id belongs to TRAITS list
        // Flatten TRAITS
        const allTraits = [];
        TRAITS.forEach(t => {
            if (t.type === 'group') {
                t.items.forEach(i => allTraits.push(i.id));
            } else {
                allTraits.push(t.id);
            }
        });
        return allTraits.includes(id);
    }

    resetTimer(timer) {
        timer.active = false;
        timer.remaining = timer.original;
        timer.element.textContent = timer.remaining;

        // Remove active class, add 'paused' class for emphasis
        timer.card.classList.remove('active', 'warning', 'hot', 'finished');
        timer.card.classList.add('paused');
        // User: "Emphasize border when stopped at initial"
        // Visual reset to default dim
        this.updateTimerVisuals(timer);
    }

    // Removed Trump Card Logic (startTrumpSwap, handleTrumpSelection, endTrumpSwap, clearSelectable)
    handleStartBtn() {
        if (this.state === 'idle') {
            this.startWait();
        } else if (this.state === 'waiting') {
            this.skipWait();
        } else if (this.state === 'running') {
            // "Popped" logic
            this.triggerPopped();
        } else if (this.state === 'endgame') {
            if (confirm('リセットしますか？')) location.reload();
        }
    }

    startWait() {
        this.state = 'waiting';
        this.startBtn.classList.add('waiting');
        this.startBtn.innerHTML = '即時開始 (SKIP)';
        this.updateStatus('待機中... 5秒後に開始');

        this.waitTime = 5;
        this.updateStartBtnCountdown(); // Initial show

        this.waitInterval = setInterval(() => {
            this.waitTime--;
            this.updateStartBtnCountdown();
            if (this.waitTime <= 0) {
                this.beginCountdown();
            }
        }, 1000);
    }

    updateStartBtnCountdown() {
        this.startBtn.innerHTML = `開始まで ${this.waitTime}秒... <span style="font-size:0.8em">(クリックで即時開始)</span>`;
    }

    skipWait() {
        clearInterval(this.waitInterval);
        this.beginCountdown();
    }

    beginCountdown() {
        clearInterval(this.waitInterval);
        this.state = 'running';

        // Update Button to "Popped"
        this.startBtn.className = 'start-btn popped-btn';
        this.startBtn.textContent = '通電 (POPPED)';
        this.updateStatus('試合進行中 - 通電時にボタンを押してください');

        this.gridTraits.innerHTML = '';
        this.gridOthers.innerHTML = '';

        TRAITS.forEach(item => {
            if (item.type === 'group') {
                this.renderGroup(item, this.gridTraits);
            } else {
                this.renderCard(item, this.gridTraits);
            }
        });

        OTHERS.forEach(item => {
            this.renderCard(item, this.gridOthers);
        });

        // Activate all timers (except Endgame ones and Manual ones)
        Object.values(this.timers).forEach(t => {
            // Manual timers (Hunter Skills) do NOT start automatically
            if (!t.manual) {
                this.activateTimer(t);
            }
        });

        // Blocked Trait Logic
        // Since "Blocked" is independent, we don't put it in the grid.
        // We manage it separately via showBlockedUI.
        // Req: Start Blocked timer (30s) if active.
        // Also trigger Blocked if it's supposed to start at game start?
        // Req 10.2 says "When Blocked is activated...". Usually via Blocked trait.
        // But 4.1 says "Start simultaneously".
        // If "Blocked" (Fuusa Kaijo) is in the TRAITS list (req 10.2), then it starts.
        // It's not in my TRAITS list anymore because I made it separate UI. 
        // IF the user wants it to auto-start, I should call showBlockedUI.
        // Req: "Trait: Blocked Removal (30s)" in table.
        // So yes, it should count. 
        this.showBlockedUI(30);

        // Initialize Match Timer
        this.matchStartTime = Date.now();
        this.createTrumpIndicator();

        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.tick(), 1000);
    }

    createTrumpIndicator() {
        const div = document.createElement('div');
        div.id = 'trump-indicator';
        div.className = 'trump-indicator';
        div.textContent = '裏向きカード';
        div.style.visibility = 'hidden'; // Start hidden
        this.gridOthers.appendChild(div);
        this.trumpIndicator = div;
    }

    triggerPopped() {
        this.state = 'endgame';
        this.startBtn.textContent = 'RESTART (Reload)';
        this.startBtn.className = 'start-btn finished-btn';
        this.updateStatus('通電！ 引き止め・幽閉カウント開始');

        // Add Endgame items to Others grid and start them
        // Add Endgame items to Endgame Area (Top)
        this.endgameArea.classList.remove('hidden');
        this.endgameArea.innerHTML = '';

        ENDGAME.forEach(item => {
            // Render in endgame area
            const card = document.createElement('div');
            card.className = 'endgame-card';
            card.innerHTML = `
            <div class="label">${item.name}</div>
            <div class="timer" id="timer-${item.id}">${item.time}</div>
        `;
            this.endgameArea.appendChild(card);

            // Register timer (logic only, no click)
            this.timers[item.id] = {
                element: document.getElementById(`timer-${item.id}`),
                card: card,
                remaining: item.time,
                original: item.time,
                trumpTime: item.trumpTime, // Store trump time
                name: item.name,           // Store name for status
                currentDuration: item.time,// Store current max for % calc
                active: false,
                id: item.id
            };

            this.activateTimer(this.timers[item.id]);

            // Disable clicks on endgame items
            card.style.pointerEvents = 'none';
        });
    }

    restartTimer(timer) {
        // Only restart if game is running or endgame (to avoid clicking before start)
        if (this.state !== 'running' && this.state !== 'endgame') return;

        this.activateTimer(timer);
    }

    activateTimer(timer, customTime = null, customTotal = null) {
        timer.active = true;
        timer.remaining = customTime !== null ? customTime : timer.original;
        timer.currentDuration = customTotal !== null ? customTotal : timer.original; // Track total for % calc

        timer.element.textContent = timer.remaining;
        timer.card.classList.add('active');
        // Initial check for visual state
        this.updateTimerVisuals(timer);
        timer.card.classList.remove('warning', 'finished', 'paused');
    }

    tick() {
        let activeCount = 0;

        Object.values(this.timers).forEach(timer => {
            if (timer.active && timer.remaining > 0) {
                timer.remaining--;
                timer.element.textContent = timer.remaining;
                activeCount++;

                if (timer.remaining <= 0) {
                    this.finishTimer(timer);
                } else {
                    this.updateTimerVisuals(timer);
                }
            }
        });

        // Blocked Status
        if (this.blockedEndTime) {
            const left = Math.ceil((this.blockedEndTime - Date.now()) / 1000);
            if (left <= 0) {
                this.hideBlockedUI();
            } else {
                this.blockedTimerDisplay.textContent = left;
            }
        }

        // Match Timer
        if (this.state === 'running' || this.state === 'endgame') {
            const elapsed = Math.floor((Date.now() - this.matchStartTime) / 1000);
            const m = Math.floor(elapsed / 60);
            const s = elapsed % 60;
            this.matchTimerDisplay.textContent = `${m}:${s.toString().padStart(2, '0')}`;

            // Trump Indicator (>120s)
            if (elapsed >= 120 && this.trumpIndicator) {
                this.trumpIndicator.style.visibility = 'visible';
            } else if (this.trumpIndicator) {
                this.trumpIndicator.style.visibility = 'hidden';
            }
        }
    }

    finishTimer(timer) {
        timer.active = false;
        timer.card.classList.remove('active', 'warning', 'hot');

        if (timer.manual) {
            // For manual skills, reset to original time so it's ready to be clicked again
            timer.element.textContent = timer.original;
            timer.remaining = timer.original; // Reset value
            // Do not add 'finished' class (which dims it), keep it visible/ready
            // or maybe distinct style? Default is fine.
        } else {
            // For traits, they are done
            timer.card.classList.add('finished');
            timer.element.textContent = '0';
        }
    }

    updateTimerVisuals(timer) {
        // Reset classes
        timer.card.classList.remove('warning', 'hot', 'paused');

        if (timer.remaining <= WARNING_THRESHOLD) {
            timer.card.classList.add('warning');
        } else if (timer.remaining <= this.highlightThreshold) {
            timer.card.classList.add('hot');
        }
        // logic: if > 10, neither 'warning' nor 'hot' is present.
        // CSS handles the default "dimmed" look for .tracker-card .timer
    }

    showBlockedUI(durationSec) {
        this.blockedStatus.classList.remove('hidden');
        this.blockedEndTime = Date.now() + (durationSec * 1000);
        this.blockedTimerDisplay.textContent = durationSec;
    }

    hideBlockedUI() {
        this.blockedStatus.classList.add('hidden');
        this.blockedEndTime = null;
    }

    updateStatus(msg) {
        this.statusBar.textContent = msg;
    }
}

new CooldownTracker();
