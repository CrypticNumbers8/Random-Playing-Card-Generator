const cardNames = [
  '2c',
  '2d',
  '2h',
  '2s',
  '3c',
  '3d',
  '3h',
  '3s',
  '4c',
  '4d',
  '4h',
  '4s',
  '5c',
  '5d',
  '5h',
  '5s',
  '6c',
  '6d',
  '6h',
  '6s',
  '7c',
  '7d',
  '7h',
  '7s',
  '8c',
  '8d',
  '8h',
  '8s',
  '9c',
  '9d',
  '9h',
  '9s',
  '10c',
  '10d',
  '10h',
  '10s',
  'jc',
  'jd',
  'jh',
  'js',
  'qc',
  'qd',
  'qh',
  'qs',
  'kc',
  'kd',
  'kh',
  'ks',
  'ac',
  'ad',
  'ah',
  'as',
];

const cardFullNames = {
  '2c': 'Two of Clubs',
  '2d': 'Two of Diamonds',
  '2h': 'Two of Hearts',
  '2s': 'Two of Spades',
  '3c': 'Three of Clubs',
  '3d': 'Three of Diamonds',
  '3h': 'Three of Hearts',
  '3s': 'Three of Spades',
  '4c': 'Four of Clubs',
  '4d': 'Four of Diamonds',
  '4h': 'Four of Hearts',
  '4s': 'Four of Spades',
  '5c': 'Five of Clubs',
  '5d': 'Five of Diamonds',
  '5h': 'Five of Hearts',
  '5s': 'Five of Spades',
  '6c': 'Six of Clubs',
  '6d': 'Six of Diamonds',
  '6h': 'Six of Hearts',
  '6s': 'Six of Spades',
  '7c': 'Seven of Clubs',
  '7d': 'Seven of Diamonds',
  '7h': 'Seven of Hearts',
  '7s': 'Seven of Spades',
  '8c': 'Eight of Clubs',
  '8d': 'Eight of Diamonds',
  '8h': 'Eight of Hearts',
  '8s': 'Eight of Spades',
  '9c': 'Nine of Clubs',
  '9d': 'Nine of Diamonds',
  '9h': 'Nine of Hearts',
  '9s': 'Nine of Spades',
  '10c': 'Ten of Clubs',
  '10d': 'Ten of Diamonds',
  '10h': 'Ten of Hearts',
  '10s': 'Ten of Spades',
  jc: 'Jack of Clubs',
  jd: 'Jack of Diamonds',
  jh: 'Jack of Hearts',
  js: 'Jack of Spades',
  qc: 'Queen of Clubs',
  qd: 'Queen of Diamonds',
  qh: 'Queen of Hearts',
  qs: 'Queen of Spades',
  kc: 'King of Clubs',
  kd: 'King of Diamonds',
  kh: 'King of Hearts',
  ks: 'King of Spades',
  ac: 'Ace of Clubs',
  ad: 'Ace of Diamonds',
  ah: 'Ace of Hearts',
  as: 'Ace of Spades',
};

const aronsonStack = [
  'js',
  'kc',
  '5c',
  '2h',
  '9s',
  'as',
  '3h',
  '6c',
  '8d',
  'ac',
  '10s',
  '5h',
  '2d',
  'kd',
  '7d',
  '8c',
  '3s',
  'ad',
  '7s',
  '5s',
  'qd',
  'ah',
  '8s',
  '3d',
  '7h',
  'qh',
  '5d',
  '7c',
  '4h',
  'kh',
  '4d',
  '10d',
  'jc',
  'jh',
  '10c',
  'jd',
  '4s',
  '10h',
  '6h',
  '3c',
  '2s',
  '9h',
  'ks',
  '6s',
  '4c',
  '8h',
  '9c',
  'qs',
  '6d',
  'qc',
  '2c',
  '9d',
];

const tamarizStack = [
  '4c',
  '2h',
  '7d',
  '3c',
  '4h',
  '6d',
  'as',
  '5h',
  '9s',
  '2s',
  'qh',
  '3d',
  'qc',
  '8h',
  '6s',
  '5s',
  '9h',
  'kc',
  '2d',
  'jh',
  '3s',
  '8s',
  '6h',
  '10c',
  '5d',
  'kd',
  '2c',
  '3h',
  '8d',
  '5c',
  'ks',
  'jd',
  '8c',
  '10s',
  'kh',
  'jc',
  '7s',
  '10h',
  'ad',
  '4s',
  '7h',
  '4d',
  'ac',
  '9c',
  'js',
  'qd',
  '7c',
  'qs',
  '10d',
  '6c',
  'ah',
  '9d',
];

const cardImage = document.getElementById('cardImage');
const cardNameElement = document.getElementById('cardName');
const generateButton = document.getElementById('generateButton');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const intervalInput = document.getElementById('intervalInput');
const spinner = document.getElementById('spinner');
const stackSelect = document.getElementById('stackSelect');
const stackNumber = document.getElementById('stackNumber');

let intervalId;
let isGenerating = false;
let currentStack = null;

generateButton.addEventListener('click', generateRandomCard);

startButton.addEventListener('click', () => {
  if (isGenerating) return;
  isGenerating = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  const interval = parseInt(intervalInput.value) * 1000;
  intervalId = setInterval(generateRandomCard, interval);
  spinner.style.display = 'inline-block'; // Show the spinner
});

stopButton.addEventListener('click', () => {
  if (!isGenerating) return;
  isGenerating = false;
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
  spinner.style.display = 'none'; // Hide the spinner
});

stackSelect.addEventListener('change', () => {
  currentStack = stackSelect.value;
  updateStackNumber();
});

function generateRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardNames.length);
  const randomCardName = cardNames[randomIndex];
  const cardImageUrl = `Card_Images/${randomCardName}.svg`;

  cardImage.src = cardImageUrl;
  cardImage.alt = randomCardName;
  cardNameElement.textContent =
    'The ' +
    cardFullNames[randomCardName] +
    ' (' +
    randomCardName.toUpperCase() +
    ')';
  updateStackNumber();
  stopButton();
}

function updateStackNumber() {
  if (currentStack === 'None') {
    stackNumber.textContent = '';
    return;
  }

  let stack;
  let as_val;
  switch (currentStack) {
    case 'Tamariz':
      stack = tamarizStack;
      as_val = 7;
      break;
    case 'Aronson':
      stack = aronsonStack;
      as_val = 6;

      break;
    default:
      stack = null;
  }

  if (stack) {
    let stackIndex = stack.indexOf(cardImage.alt) + 1;
    if (cardImage.src == 'Card_Images/as.svg') {
      if (currentStack == tamarizStack) {
        stackIndex = 7;
      }
      if (currentStack == aronsonStack) {
        stackIndex = 6;
      }
    }
    stackNumber.textContent = `Stack Number: ${stackIndex}`;
  } else {
    stackNumber.textContent = '';
  }
}
