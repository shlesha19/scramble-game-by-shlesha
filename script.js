const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['word','game','play','bird','tree','butterfly','water','book','paper','school','window','house','furniture','chair','table','car','tractor','helicopter','food','spoon','pen','pencil','machine','board','nature','phone'];

const  creteNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  //console.log(ranNum);

  let newTempSwords = sWords [ranNum];
  //console.log (newTempSwords.split(""));
  return newTempSwords;

}

const scrambleWords = (arr) => {
  for (let i = arr.length -1; i>0; i--){
    let temp = arr[i];
    //console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    //console.log(i);
    //console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

btn.addEventListener('click',function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = creteNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    //console.log(randWords.join(""));
    msg.innerHTML = `Guess this word:  "${randWords}"....it's a common thing/animal`;
  }else{
    let tempWord = guess.value;
    if(tempWord === newWords) {
     // console.log("correct");
     play = false;
     msg.innerHTML = `Congratulations!! It's correct... (${newWords})`;
     btn.innerHTML = "Get New Word";
     guess.classList.toggle('hidden');
     guess.value = "";
    }else{
      //console.log('incorrect');
      play = false;
     msg.innerHTML = `Alas!! It's incorrect... It is(${newWords})`;
     btn.innerHTML = "Get New Word";
     guess.classList.toggle('hidden');
     guess.value = "";
    }
  }
})