// 점수 및 버튼 DOM 요소 노드 취득
const sentence = document.getElementsByClassName("game-info")[0];
const score = document.getElementsByClassName("score")[0];
const scissorBtn = document.getElementById("scissor");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const resetBtn = document.getElementById("reset-button");

const userChoiceImage = document.getElementsByClassName("user-choice")[0];
const computerChoiceImage = document.getElementsByClassName("computer-choice")[0];


// 사용자 및 컴퓨터의 초기값 설정 (0: 가위, 1: 바위, 2: 보)
let user = 100;
let computer = 100;

const updateGame = function () {                // 게임 진행 함수
  if (user === computer) {                      // 비김
    sentence.innerText = "비겼습니다";
  } else if ((user === 0 && computer === 2) ||
             (user === 1 && computer === 0) ||
             (user === 2 && computer === 1)) {  // 승리
    sentence.innerText = "이겼습니다";
    let scores = score.innerText.split(" : ");
    let userScore = parseInt(scores[0]);
    let computerScore = parseInt(scores[1]);
    userScore += 1;
    score.innerText = `${userScore} : ${computerScore}`;
  } else {                                      // 패배
    sentence.innerText = "졌습니다";
    let scores = score.innerText.split(" : ");
    let userScore = parseInt(scores[0]);
    let computerScore = parseInt(scores[1]);
    computerScore += 1;
    score.innerText = `${userScore} : ${computerScore}`;
  }
}

const changeComputerImage = function (computer) {  // 컴퓨터 이미지 변환 함수
    if (computer == 0) {
      computerChoiceImage.src = "가위.png";
    } else if (computer == 1) {
      computerChoiceImage.src = "바위.png";
    } else {
      computerChoiceImage.src = "보.png";
    }
};


scissorBtn.onclick = () => {  // 사용자가 가위를 선택했을 경우
  user = 0;
  computer = Math.floor(Math.random() * 3);  // 가위바위보 중 랜덤 선택
  updateGame();
  userChoiceImage.src = "가위.png";          // 사용자 이미지 변환
  changeComputerImage(computer);
}
rockBtn.onclick = () => {  // 사용자가 바위를 선택했을 경우
  user = 1;
  computer = Math.floor(Math.random() * 3);
  updateGame();
  userChoiceImage.src = "바위.png";
  changeComputerImage(computer);
}
paperBtn.onclick = () => {  // 사용자가 보를 선택했을 경우
  user = 2;
  computer = Math.floor(Math.random() * 3);
  updateGame();
  userChoiceImage.src = "보.png";
  changeComputerImage(computer);
}

resetBtn.onclick = () => {  // 사용자가 초기화를 선택했을 경우
  sentence.innerText = "가위바위보 게임을 시작합니다";
  // 점수를 0 : 0 으로 초기화
  let scores = score.innerText.split(" : ");
  let userScore = parseInt(scores[0]);
  let computerScore = parseInt(scores[1]);
  userScore = 0;
  computerScore = 0;
  score.innerText = `${userScore} : ${computerScore}`;
  // 초기 이미지로 변경
  userChoiceImage.src = "left.png";
  computerChoiceImage.src = "right.png";
}