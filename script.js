const link = 'https://api.quotable.io/random';
let seenText = document.querySelector('.text');
let textArea = document.querySelector('textarea');
let timer = document.querySelector('.timer');
function timerWeb(){
  let time = 60;
  let play = true;
  let interval = setInterval(function(){
    time--;
    timer.textContent = time;
    if( time === 0){
      clearInterval(interval);
      play = false;
      if(!play){
        textArea.disabled = true;
      };
    };
  },1000);
  function gameEnd(){
  
  };
};
timerWeb();
textArea.addEventListener('input', function(){
  const arrayQuo = Array.from(seenText.querySelectorAll('span'));
  const arrayValue = textArea.value.split('');
  arrayQuo.forEach(function( characterSpan, index ){
    const character = arrayValue[index];
    if( character == null){
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
    } else if( character === characterSpan.innerText ){
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    }else{
      characterSpan.classList.remove('correct'); 
      characterSpan.classList.add('incorrect');
    }
  });
});
function getRandomQuote(){
  return fetch(link)
  .then(response => response.json())
  .then(data => data.content)
};
async function renderNew(){
  const quote = await getRandomQuote();
  seenText.textContent = '';
  quote.split('').forEach( character => {
    let characterSpan = document.createElement('span');
    characterSpan.textContent = character;
    seenText.appendChild(characterSpan);
  });
  textArea.value = null;
};
renderNew()