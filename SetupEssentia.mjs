const audioContext = 0;

function myRandom(min, max) {
   let num = Math.floor(Math.random() * (max - min)) + min;
   return num;
}

export { audioContext, myRandom }
