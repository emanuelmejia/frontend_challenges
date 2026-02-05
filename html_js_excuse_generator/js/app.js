window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let ranWho = Math.floor(Math.random() * who.length);
  let ranAct = Math.floor(Math.random() * action.length);
  let ranWhat = Math.floor(Math.random() * what.length);
  let ranWhen = Math.floor(Math.random() * when.length);

  excuse = `${who[ranWho]} ${action[ranAct]}  ${what[ranWhat]} ${when[ranWhen]}`;
  document.querySelector("#excuse").innerHTML = excuse;
}