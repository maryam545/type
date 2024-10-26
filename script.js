const myString =
  "این ویدئو با زحمات فراوان تهیه شده با لایک و سابسکرایب ما رو خوشحال کنید";
let myArray = myString.split("");
let looperTimer;
function looper() {
  if (myArray.length > 0) {
    document.getElementById("myTypingText").innerHTML += myArray.shift();
  } else {
    clearTimeout(looperTimer);
  }
  looperTimer = setTimeout(looper, 70);
}
looper();
