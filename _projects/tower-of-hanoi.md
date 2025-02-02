---
title       : Tower of Hanoi
date        : 2025-01-02
---

Drag and drop the disks to move them between towers. Stack all disks on the rightmost tower to win!

Rule: You can only stack a disk above a bigger disk.

<div class="game-container">
    <p>Moves: <span id="moveCounter">0</span></p>
    <div id="towers">
        <div id="towerA" class="tower" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="towerB" class="tower" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="towerC" class="tower" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    </div>
    <button onclick="resetGame()">Reset Game</button>
    <p id="message"></p>
</div>

<style>
.game-container {
    margin: 20px 0;
    text-align: center;
    background: var(--card-bg)
    border: 1px solid var(--btn-border-color);
    border-radius: 0.5rem;
}

#towers {
    display: flex;
    justify-content: space-around;
    margin: 20px auto;
    max-width: 600px;
    gap: 1rem;
}

.tower {
    width: 120px;
    height: 200px;
    border: 1px solid var(--btn-border-color);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background: var(--card-bg);
    position: relative;
    padding: 0.5rem;
    transition: background-color 0.35s ease-in-out;
    box-shadow: var(--card-shadow);
}

.tower:hover {
    background-color: var(--sidebar-hover-bg);
}

.tower::after {
    content: '';
    width: 8px;
    height: 180px;
    background: var(--text-muted-color);
    position: absolute;
    bottom: 0;
    z-index: 0;
    border-radius: 4px;
    opacity: 0.3;
}

.disk {
    height: 30px;
    margin: 2px;
    border-radius: 0.25rem;
    z-index: 1;
    cursor: move;
    transition: all 0.2s ease;
    border: 1px solid var(--btn-border-color);
}

.disk[draggable="true"] {
    cursor: grab;
}

.disk[draggable="true"]:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
}

.disk1 {
    width: 40px;
    border: 0;
    background: #00CED1;
    box-shadow: var(--card-shadow);
}
.disk2 {
    width: 70px;
    border: 0;
    background: #00BFFF;
    box-shadow: var(--card-shadow);
}
.disk3 {
    width: 100px;
    border: 0;
    background: #1E90FF;
    box-shadow: var(--card-shadow);
}

#message {
    color: var(--text-color);
    font-weight: bold;
    min-height: 1.5em;
}

.game-container button {
    display: inline-block;
    padding: 0.35rem 1.25rem;
    background: var(--btn-bg);
    color: var(--text-color);
    border: 1px solid var(--btn-border-color);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.35s ease-in-out;
    box-shadow: var(--btn-box-shadow);
}

.game-container button:hover {
    background: var(--sidebar-hover-bg);
    transform: translateY(-1px);
}
</style>

<script>
let towers = {
    towerA: [],
    towerB: [],
    towerC: []
};
let moves = 0;

function resetGame() {
    towers = {
        towerA: [3, 2, 1],
        towerB: [],
        towerC: []
    };
    moves = 0;
    document.getElementById('moveCounter').textContent = moves;
    renderTowers();
    document.getElementById('message').textContent = '';
}

function renderTowers() {
    Object.keys(towers).forEach(towerName => {
        const tower = document.getElementById(towerName);
        tower.innerHTML = '';
        towers[towerName].forEach(diskSize => {
            const disk = document.createElement('div');
            disk.className = `disk disk${diskSize}`;
            disk.draggable = true;
            disk.ondragstart = drag;
            disk.dataset.size = diskSize;
            tower.appendChild(disk);
        });
    });
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    if (ev.target.parentElement.lastChild === ev.target) {
        ev.dataTransfer.setData("text", ev.target.dataset.size);
    } else {
        ev.preventDefault();
    }
}

function drop(ev) {
    ev.preventDefault();
    const targetTower = ev.target.closest('.tower');
    const diskSize = parseInt(ev.dataTransfer.getData("text"));
    const sourceTower = document.querySelector(`.disk${diskSize}`).parentElement;

    if (isValidMove(targetTower.id, diskSize)) {
        const sourceId = sourceTower.id;
        towers[sourceId] = towers[sourceId].filter(size => size !== diskSize);
        towers[targetTower.id].push(diskSize);
        moves++;
        document.getElementById('moveCounter').textContent = moves;
        renderTowers();
        checkWin();
    }
}

function isValidMove(targetTowerId, diskSize) {
    const targetTower = towers[targetTowerId];
    return targetTower.length === 0 || targetTower[targetTower.length - 1] > diskSize;
}

function checkWin() {
    if (towers.towerC.length === 3 &&
        towers.towerC.every((disk, index) => disk === 3 - index)) {
        let message = '';
        if (moves < 7) {
            message = `Incredible! You solved it in ${moves} moves - that's better than optimal! 🏆`;
        } else if (moves === 7) {
            message = `Perfect! You solved it in the optimal ${moves} moves! 🎯`;
        } else {
            message = `Congratulations! But can you solve it in fewer moves? 🤔`;
        }
        document.getElementById('message').textContent = message;
    }
}

// Initialize the game when the page loads
window.onload = resetGame;
</script>
