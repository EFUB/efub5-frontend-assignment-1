const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const message = document.getElementById('message');
const scoreElement = document.getElementById('score');

const choices = ['바위', '가위', '보'];

let totalCount = 0;
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

rockBtn.addEventListener('click', () => playGame('바위'));
scissorsBtn.addEventListener('click', () => playGame('가위'));
paperBtn.addEventListener('click', () => playGame('보'));
document.getElementById('reset').addEventListener('click', resetScores);

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // 이미지 요소 생성
    const playerImage = document.createElement('img');
    const computerImage = document.createElement('img');

    // 플레이어 이미지 설정
    if (playerChoice === '바위') {
        playerImage.src = 'images/rock.png';
    } else if (playerChoice === '가위') {
        playerImage.src = 'images/scissors.png';
    } else if (playerChoice === '보') {
        playerImage.src = 'images/paper.png';
    }
    playerImage.alt = `사용자 선택: ${playerChoice}`;

    // 컴퓨터 이미지 설정
    if (computerChoice === '바위') {
        computerImage.src = 'images/rock.png';
    } else if (computerChoice === '가위') {
        computerImage.src = 'images/scissors.png';
    } else if (computerChoice === '보') {
        computerImage.src = 'images/paper.png';
    }
    computerImage.alt = `컴퓨터 선택: ${computerChoice}`;

    // 이미지를 표시할 div 선택
    const imagesDiv = document.querySelector('.images');
    imagesDiv.innerHTML = ''; // 이전 이미지를 제거
    imagesDiv.appendChild(playerImage);
    imagesDiv.appendChild(computerImage);
    // 승부 결정 로직...
    if (playerChoice === computerChoice) {
        message.textContent = `비겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
        tieCount++;
    } else if (
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '가위' && computerChoice === '보') ||
        (playerChoice === '보' && computerChoice === '바위')
    ) {
        message.textContent = `이겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
        winCount++;
    } else {
        message.textContent = `졌습니다. 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
        loseCount++;
    }
    
    totalCount++;
    updateScore(); // 점수 업데이트 호출
}

function resetScores() {
    totalCount = 0;
    winCount = 0;
    tieCount = 0;
    loseCount = 0;
    updateScore();
    message.textContent = "점수 리셋되었습니다!";
    
    // 이미지 숨기기
    const playerImageBox = document.getElementById('playerImage');
    const computerImageBox = document.getElementById('computerImage');
    playerImageBox.style.display = 'none';
    computerImageBox.style.display = 'none';
}

function updateScore() {
    scoreElement.textContent = `총 대결 수: ${totalCount} | 이긴 횟수: ${winCount} | 비긴 횟수: ${tieCount} | 진 횟수: ${loseCount}`;
}

// 초기 점수 업데이트
updateScore();
