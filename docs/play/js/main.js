(() => {
  // 記号の意味:
  // # = 壁
  // . = 床
  // P = てんちゃん
  // C = 猫缶
  // G = ゴール
  // * = ゴール上の猫缶
  const STAGES = [
    {
      map: [
        '######',
        '#....#',
        '#.CP.#',
        '#..G.#',
        '#....#',
        '######'
      ]
    },
    {
      map: [
        '######',
        '#..G.#',
        '#.C..#',
        '#..P.#',
        '#....#',
        '######'
      ]
    },
    {
      map: [
        '######',
        '#.G..#',
        '#.C#.#',
        '#..C.#',
        '#.PG.#',
        '######'
      ]
    }
  ];

  const boardEl = document.getElementById('board');
  const stageNumberEl = document.getElementById('stage-number');
  const stageTotalEl = document.getElementById('stage-total');
  const moveCountEl = document.getElementById('move-count');
  const clearMessageEl = document.getElementById('clear-message');
  const nextBtn = document.getElementById('next-btn');

  let stageIndex = 0;
  let moveCount = 0;
  let player = { x: 0, y: 0 };
  let walls = new Set();
  let goals = new Set();
  let cans = new Set();

  stageTotalEl.textContent = String(STAGES.length);

  function key(x, y) {
    return `${x},${y}`;
  }

  function parseStage(index) {
    walls = new Set();
    goals = new Set();
    cans = new Set();
    moveCount = 0;
    clearMessageEl.textContent = '';
    nextBtn.disabled = true;

    const rows = STAGES[index].map;
    rows.forEach((row, y) => {
      row.split('').forEach((tile, x) => {
        if (tile === '#') walls.add(key(x, y));
        if (tile === 'G' || tile === '*') goals.add(key(x, y));
        if (tile === 'C' || tile === '*') cans.add(key(x, y));
        if (tile === 'P') player = { x, y };
      });
    });

    render();
  }

  function render() {
    boardEl.innerHTML = '';
    stageNumberEl.textContent = String(stageIndex + 1);
    moveCountEl.textContent = String(moveCount);

    for (let y = 0; y < 6; y += 1) {
      for (let x = 0; x < 6; x += 1) {
        const cell = document.createElement('div');
        cell.className = 'cell floor';
        const k = key(x, y);

        if (walls.has(k)) {
          cell.className = 'cell wall';
          cell.textContent = '⬛';
        } else {
          if (goals.has(k)) {
            cell.classList.add('goal');
            cell.textContent = '🐾';
          }
          if (cans.has(k)) {
            cell.textContent = goals.has(k) ? '🥫' : '🥫';
          }
          if (player.x === x && player.y === y) {
            cell.textContent = '🐱';
          }
        }

        boardEl.appendChild(cell);
      }
    }
  }

  function isClear() {
    if (goals.size === 0) return false;
    for (const canPos of cans) {
      if (!goals.has(canPos)) return false;
    }
    return true;
  }

  function tryMove(dx, dy) {
    if (isClear()) return;

    const nx = player.x + dx;
    const ny = player.y + dy;
    const nextKey = key(nx, ny);

    if (walls.has(nextKey)) return;

    if (cans.has(nextKey)) {
      const cx = nx + dx;
      const cy = ny + dy;
      const canNext = key(cx, cy);

      if (walls.has(canNext) || cans.has(canNext)) return;

      cans.delete(nextKey);
      cans.add(canNext);
    }

    player = { x: nx, y: ny };
    moveCount += 1;

    if (isClear()) {
      clearMessageEl.textContent = 'クリア！すべての猫缶をゴールへ運びました！';
      if (stageIndex < STAGES.length - 1) {
        nextBtn.disabled = false;
      } else {
        clearMessageEl.textContent = '全ステージクリア！てんちゃんのお手伝い成功！';
      }
    }

    render();
  }

  function bindControls() {
    document.getElementById('up-btn').addEventListener('click', () => tryMove(0, -1));
    document.getElementById('down-btn').addEventListener('click', () => tryMove(0, 1));
    document.getElementById('left-btn').addEventListener('click', () => tryMove(-1, 0));
    document.getElementById('right-btn').addEventListener('click', () => tryMove(1, 0));

    document.getElementById('reset-btn').addEventListener('click', () => parseStage(stageIndex));
    nextBtn.addEventListener('click', () => {
      if (stageIndex < STAGES.length - 1) {
        stageIndex += 1;
        parseStage(stageIndex);
      }
    });

    window.addEventListener('keydown', (event) => {
      const map = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0]
      };
      const move = map[event.key];
      if (!move) return;
      event.preventDefault();
      tryMove(move[0], move[1]);
    });
  }

  bindControls();
  parseStage(stageIndex);
})();
