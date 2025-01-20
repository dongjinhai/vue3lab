const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverElement = document.querySelector('.game-over');
const restartBtn = document.getElementById('restartBtn');

// 游戏常量
const GROUND_HEIGHT = 20;
const DINO_WIDTH = 40;
const DINO_HEIGHT = 60;
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const CACTUS_TYPES = [
  { width: 30, height: 50 }, // 单柱仙人掌
  { width: 60, height: 40 }, // 双柱仙人掌
  { width: 40, height: 60 }  // 高柱仙人掌
];
const CACTUS_SPEED = 5;
const CACTUS_INTERVAL = 2000;

// 游戏状态
let dino = {
  x: 100,
  y: canvas.height - GROUND_HEIGHT - DINO_HEIGHT,
  width: DINO_WIDTH,
  height: DINO_HEIGHT,
  dy: 0,
  isJumping: false
};

let cacti = [];
let score = 0;
let gameSpeed = CACTUS_SPEED;
let lastCactusTime = 0;
let isGameOver = false;

// 绘制恐龙
function drawDino() {
  ctx.save();
  ctx.translate(dino.x, dino.y);
  
  // 身体
  ctx.beginPath();
  ctx.moveTo(10, 40);
  ctx.lineTo(30, 40);
  ctx.lineTo(30, 10);
  ctx.lineTo(20, 0);
  ctx.lineTo(10, 10);
  ctx.closePath();
  ctx.fillStyle = '#333';
  ctx.fill();
  
  // 眼睛
  ctx.beginPath();
  ctx.arc(25, 15, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  // 腿
  ctx.fillStyle = '#333';
  ctx.fillRect(15, 40, 5, 10);
  ctx.fillRect(25, 40, 5, 10);
  
  ctx.restore();
}

// 绘制障碍物
function drawCacti() {
  cacti.forEach(cactus => {
    ctx.save();
    ctx.translate(cactus.x, cactus.y);
    
    // 根据类型绘制不同仙人掌
    switch(cactus.type) {
      case 0: // 单柱仙人掌
        ctx.fillStyle = '#2e8b57';
        ctx.fillRect(10, 0, 10, 50);
        break;
        
      case 1: // 双柱仙人掌
        ctx.fillStyle = '#3cb371';
        ctx.fillRect(5, 0, 10, 40);
        ctx.fillRect(20, 0, 10, 40);
        break;
        
      case 2: // 高柱仙人掌
        ctx.fillStyle = '#228b22';
        ctx.fillRect(10, 0, 10, 60);
        // 添加顶部装饰
        ctx.beginPath();
        ctx.arc(15, -5, 5, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    
    ctx.restore();
  });
}

// 绘制背景
function drawBackground() {
  // 天空渐变
  const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  skyGradient.addColorStop(0, '#87CEEB');
  skyGradient.addColorStop(1, '#B0E2FF');
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height - GROUND_HEIGHT);

  // 云朵
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  drawCloud(100, 50, 80, 40);
  drawCloud(300, 80, 100, 50);
  drawCloud(500, 60, 120, 60);
}

function drawCloud(x, y, width, height) {
  ctx.beginPath();
  ctx.ellipse(x + width * 0.25, y + height * 0.5, width * 0.25, height * 0.6, 0, 0, Math.PI * 2);
  ctx.ellipse(x + width * 0.5, y + height * 0.3, width * 0.3, height * 0.7, 0, 0, Math.PI * 2);
  ctx.ellipse(x + width * 0.75, y + height * 0.5, width * 0.25, height * 0.6, 0, 0, Math.PI * 2);
  ctx.fill();
}

// 绘制草地
function drawGround() {
  // 草地渐变
  const grassGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grassGradient.addColorStop(0, '#228B22');
  grassGradient.addColorStop(1, '#006400');
  ctx.fillStyle = grassGradient;
  ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

  // 绘制多种草叶
  const grassColors = ['#006400', '#228B22', '#2E8B57'];
  for (let x = 0; x < canvas.width; x += 5) {
    const height = Math.random() * 15 + 5;
    const type = Math.floor(Math.random() * 3);
    
    ctx.strokeStyle = grassColors[type];
    ctx.lineWidth = type + 1;
    
    // 不同类型草叶的绘制方式
    switch(type) {
      case 0: // 细长草
        ctx.beginPath();
        ctx.moveTo(x, canvas.height - GROUND_HEIGHT);
        ctx.lineTo(x + 5, canvas.height - GROUND_HEIGHT - height);
        ctx.lineTo(x + 10, canvas.height - GROUND_HEIGHT);
        ctx.stroke();
        break;
      case 1: // 宽叶草
        ctx.beginPath();
        ctx.moveTo(x, canvas.height - GROUND_HEIGHT);
        ctx.lineTo(x + 3, canvas.height - GROUND_HEIGHT - height * 0.8);
        ctx.lineTo(x + 7, canvas.height - GROUND_HEIGHT - height * 1.2);
        ctx.lineTo(x + 10, canvas.height - GROUND_HEIGHT);
        ctx.stroke();
        break;
      case 2: // 丛生草
        ctx.beginPath();
        ctx.moveTo(x, canvas.height - GROUND_HEIGHT);
        for (let i = 0; i < 3; i++) {
          ctx.lineTo(x + 3 + i * 2, canvas.height - GROUND_HEIGHT - height * (0.8 - i * 0.2));
        }
        ctx.lineTo(x + 10, canvas.height - GROUND_HEIGHT);
        ctx.stroke();
        break;
    }
  }
}

// 更新恐龙位置
function updateDino() {
  if (dino.isJumping) {
    dino.dy += GRAVITY;
    dino.y += dino.dy;
    
    // 落地检测
    if (dino.y >= canvas.height - GROUND_HEIGHT - DINO_HEIGHT) {
      dino.y = canvas.height - GROUND_HEIGHT - DINO_HEIGHT;
      dino.isJumping = false;
      dino.dy = 0;
    }
  }
}

// 更新障碍物
function updateCacti() {
  const now = Date.now();
  
  // 生成新障碍物
  if (now - lastCactusTime > CACTUS_INTERVAL) {
    const type = Math.floor(Math.random() * CACTUS_TYPES.length);
    const cactusType = CACTUS_TYPES[type];
    cacti.push({
      x: canvas.width,
      y: canvas.height - GROUND_HEIGHT - cactusType.height,
      width: cactusType.width,
      height: cactusType.height,
      type: type
    });
    lastCactusTime = now;
  }

  // 移动障碍物
  cacti.forEach(cactus => {
    cactus.x -= gameSpeed;
  });

  // 移除屏幕外的障碍物
  cacti = cacti.filter(cactus => cactus.x + cactus.width > 0);
}

// 碰撞检测
function checkCollision() {
  return cacti.some(cactus => {
    return dino.x < cactus.x + cactus.width &&
           dino.x + dino.width > cactus.x &&
           dino.y < cactus.y + cactus.height &&
           dino.y + dino.height > cactus.y;
  });
}

// 更新分数
function updateScore() {
  score++;
  scoreElement.textContent = score;
  gameSpeed += 0.01;
}

// 游戏循环
function gameLoop() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();
  drawGround();
  drawDino();
  drawCacti();

  updateDino();
  updateCacti();

  if (checkCollision()) {
    gameOver();
    return;
  }

  updateScore();
  requestAnimationFrame(gameLoop);
}

// 游戏结束
function gameOver() {
  isGameOver = true;
  gameOverElement.style.display = 'block';
}

// 重新开始游戏
function restartGame() {
  dino = {
    x: 100,
    y: canvas.height - GROUND_HEIGHT - DINO_HEIGHT,
    width: DINO_WIDTH,
    height: DINO_HEIGHT,
    dy: 0,
    isJumping: false
  };
  cacti = [];
  score = 0;
  gameSpeed = CACTUS_SPEED;
  isGameOver = false;
  gameOverElement.style.display = 'none';
  scoreElement.textContent = score;
  gameLoop();
}

// 事件监听
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !dino.isJumping) {
    dino.dy = JUMP_FORCE;
    dino.isJumping = true;
  }
});

restartBtn.addEventListener('click', restartGame);

// 启动游戏
restartGame();
