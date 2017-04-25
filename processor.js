// Process cards.json from HearthstoneJSON.com
const fs = require('fs');
let cards_txt = fs.readFileSync('cards.json', 'utf8');
cards_txt = cards_txt.replace(/\r?\n|\r/g, " ");
cards = JSON.parse(cards_txt);
let s = '';
cards = cards.forEach(c => {
  let flavor = c.flavor ? c.flavor.replace(/\r?\n|\r/g, "%n%") : 'no_flavor';
  let text = c.text ? c.text.replace(/\r?\n|\r/g, "%n%") : 'no_text';
  let temp = `${c.type}|${c.cost ? c.cost : 0}|${c.name}|${text}|${flavor}|${c.cardClass}|${c.rarity}|${c.set}|${c.attack ? c.attack : 0}|${c.health ? c.health : 0}\n`;
  s += temp;
});
fs.writeFile('encoded_cards_' + Date.now() + '.txt', s, err => {
  if(err) return console.log(err);
  console.log('Cards succesfully encoded');
});
