// 초기 점수
let userScore = 0;
let computerScore = 0;

// HTML 요소 가져오기
const buttons = document.querySelectorAll('.choice');
const scoreText = document.getElementById('score');
const winnerText = document.getElementById('winner');
const userImage = document.getElementById('user-image');
const computerImage = document.getElementById('computer-image');
const resetBtn = document.getElementById('reset');

// 컴퓨터 선택 함수 정의 
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// 승패 판단 함수 정의 
function getWinner(user, computer) {
    if (user === computer) return 'draw';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) return 'user';
    return 'computer';
}

// 버튼 클릭 이벤트
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        //사용자 선택
        const userChoice = btn.dataset.choice;

        //컴퓨터 선택 호출 
        const computerChoice = getComputerChoice();

        //승패 호출 
        const result = getWinner(userChoice, computerChoice);


        // 이미지 보여주기 
        userImage.src = `${userChoice}.png`;
        computerImage.src = `${computerChoice}.png`;

        // 초기화 후에 게임을 해도 이미지를 다시 보이게
        userImage.style.display = 'block';
        computerImage.style.display = 'block';

        // 점수 업데이트
        if (result === 'user') {
            userScore++;
            winnerText.textContent = '인간 승!';
        } else if (result === 'computer') {
            computerScore++;
            winnerText.textContent = '컴퓨터 승!';
        } else {
            winnerText.textContent = '무승부!';
        }

        // 점수 표시
        scoreText.textContent = `${userScore} : ${computerScore}`;
    });
});



// 초기화 버튼 
resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;

    scoreText.textContent = '0 : 0';
    winnerText.textContent = '시작하려면 가위, 바위, 보 중 하나를 선택하세요.';

    userImage.style.display = 'none';
    computerImage.style.display = 'none';

});
