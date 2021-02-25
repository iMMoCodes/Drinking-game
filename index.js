const container = document.querySelector(".container");
const pushButton = document.querySelector(".push");
const deckRight = document.querySelector(".deckRight");
const deckLeft = document.querySelector(".deckLeft");
const overlay = document.querySelector(".overlay");
const infoText = document.querySelector(".info-text");
const infoCard = document.querySelector(".info-card");
const infoRule = document.querySelector(".info-rule");
// tee korttipakka
const cardDeck = [
   "Ac","2c","3c","4c","5c","6c","7c","8c","9c","Tc","Jc","Qc","Kc",
   "As","2s","3s","4s","5s","6s","7s","8s","9s","Ts","Js","Qs","Ks",
   "Ad","2d","3d","4d","5d","6d","7d","8d","9d","Td","Jd","Qd","Kd",
   "Ah","2h","3h","4h","5h","6h","7h","8h","9h","Th","Jh","Qh","Kh"
];
//tee käytetyt kortit
const usedCards = [];
//yhdistä korttipakka buttoniin
//yhdistä korttipakka ja kuva
//näytä seuraava kortti
const handleButton = () => {
   //vaihda alkukortti seuraavaan
   // Vaihda randomisti
   //numero 1-52
   let cardNum = Math.floor(Math.random()*52);
   // yhdistä numero ja kortti
   let cardCode = cardDeck[cardNum];
   if(usedCards.includes(cardCode)){
      if(usedCards.length < 52){
      handleButton();
      } 
      else {
         container.setAttribute("class","game-over");
         let outOfCards = document.createElement("h1");
         outOfCards.classList.add("oufOfCardsH")
         outOfCards.innerHTML="Out of cards";
         document.body.appendChild(outOfCards);
         let replayBtn=document.createElement("button");
         replayBtn.classList.add("replay-btn");
         replayBtn.innerHTML="Replay";
         document.body.appendChild(replayBtn);
         replayBtn.addEventListener("click",() => {
            location.reload();
         });
         }
   } else {
   switch(cardCode) {
      //ÄSSÄT
      case "Ac":
      deckLeft.src = "./kuvat/Ac.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ace of clubs"
      infoRule.innerHTML = "Waterfall"
      break;
      case "As":
      deckLeft.src = "./kuvat/As.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ace of spades"
      infoRule.innerHTML = "Waterfall"
      break;
      case "Ad":
      deckLeft.src = "./kuvat/Ad.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ace of diamonds"
      infoRule.innerHTML = "Waterfall"
      break;
      case "Ah":
      deckLeft.src = "./kuvat/Ah.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ace of hearts"
      infoRule.innerHTML = "Waterfall"
      break;
      // KAKKOSET
      case "2c":
      deckLeft.src = "./kuvat/2c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Two of clubs"
      infoRule.innerHTML = "Give two drinks to other person"
      break;
      case "2s":
      deckLeft.src = "./kuvat/2s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Two of spades"
      infoRule.innerHTML = "Give two drinks to other person"
      break;
      case "2d":
      deckLeft.src = "./kuvat/2d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Two of diamonds"
      infoRule.innerHTML = "Give two drinks to other person"
      break;
      case "2h":
      deckLeft.src = "./kuvat/2h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Two of hearts"
      infoRule.innerHTML = "Give two drinks to other person"
      break;
      //KOLMOSET
      case "3c":
      deckLeft.src = "./kuvat/3c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Three of clubs"
      infoRule.innerHTML = "Drink three drinks yourself"
      break;
      case "3s":
      deckLeft.src = "./kuvat/3s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Three of spades"
      infoRule.innerHTML = "Drink three drinks yourself"
      break;
      case "3d":
      deckLeft.src = "./kuvat/3d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Three of diamonds"
      infoRule.innerHTML = "Drink three drinks yourself"
      break;
      case "3h":
      deckLeft.src = "./kuvat/3h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Three of hearts"
      infoRule.innerHTML = "Drink three drinks yourself"
      break;      
      // NELOSET
      case "4c":
      deckLeft.src = "./kuvat/4c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Four of clubs"
      infoRule.innerHTML = "Shout HITLER!, last one drinks 3"
      break;
      case "4s":
      deckLeft.src = "./kuvat/4s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Four of spades"
      infoRule.innerHTML = "Shout HITLER!, last one drinks 3"
      break;
      case "4d":
      deckLeft.src = "./kuvat/4d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Four of diamonds"
      infoRule.innerHTML = "Shout HITLER!, last one drinks 3"
      break;
      case "4h":
      deckLeft.src = "./kuvat/4h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Four of hearts"
      infoRule.innerHTML = "Shout HITLER!, last one drinks 3"
      break;
      // VITOSET
      case "5c":
      deckLeft.src = "./kuvat/5c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Five of clubs" 
      infoRule.innerHTML = "Drink one,next two, next three"
      break;
      case "5s":
      deckLeft.src = "./kuvat/5s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Five of spades"
      infoRule.innerHTML = "Drink one,next two, next three"
      break;
      case "5d":
      deckLeft.src = "./kuvat/5d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Five of diamonds"
      infoRule.innerHTML = "Drink one,next two, next three"
      break;
      case "5h":
      deckLeft.src = "./kuvat/5h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Five of hearts"
      infoRule.innerHTML = "Drink one,next two, next three"
      break;
      // KUTOSET
      case "6c":
      deckLeft.src = "./kuvat/6c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Six of clubs"
      infoRule.innerHTML = "Women drink 3"
      break;
      case "6s":
      deckLeft.src = "./kuvat/6s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Six of spades"
      infoRule.innerHTML = "Women drink 3"
      break;
      case "6d":
      deckLeft.src = "./kuvat/6d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Six of diamonds"
      infoRule.innerHTML = "Women drink 3"
      break;
      case "6h":
      deckLeft.src = "./kuvat/6h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Six of hearts"
      infoRule.innerHTML = "Women drink 3"
      break;
      // Seiskat
      case "7c":
      deckLeft.src = "./kuvat/7c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Seven of clubs"
      infoRule.innerHTML = "Category"
      break;
      case "7s":
      deckLeft.src = "./kuvat/7s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Seven of spades"
      infoRule.innerHTML = "Category"
      break;
      case "7d":
      deckLeft.src = "./kuvat/7d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Seven of diamonds"
      infoRule.innerHTML = "Category"
      break;
      case "7h":
      deckLeft.src = "./kuvat/7h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Seven of hearts"
      infoRule.innerHTML = "Category"
      break;
      // KASIT
      case "8c":
      deckLeft.src = "./kuvat/8c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Eight of clubs"
      infoRule.innerHTML = "Make up a rule"
      break;
      case "8s":
      deckLeft.src = "./kuvat/8s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Eight of spades"
      infoRule.innerHTML = "Make up a rule"
      break;
      case "8d":
      deckLeft.src = "./kuvat/8d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Eight of diamonds"
      infoRule.innerHTML = "Make up a rule"
      break;
      case "8h":
      deckLeft.src = "./kuvat/8h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Eight of hearts"
      infoRule.innerHTML = "Make up a rule"
      break;
      // YSIT
      case "9c":
      deckLeft.src = "./kuvat/9c.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Nine of clubs"
      infoRule.innerHTML = "Everyone drinks 3"
      break;
      case "9s":
      deckLeft.src = "./kuvat/9s.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Nine of spades"
      infoRule.innerHTML = "Everyone drinks 3"
      break;
      case "9d":
      deckLeft.src = "./kuvat/9d.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Nine of diamonds"
      infoRule.innerHTML = "Everyone drinks 3"
      break;
      case "9h":
      deckLeft.src = "./kuvat/9h.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Nine of hearts"
      infoRule.innerHTML = "Everyone drinks 3"
      break;
      // KYMPIT
      case "Tc":
      deckLeft.src = "./kuvat/Tc.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ten of clubs"
      infoRule.innerHTML = "Men drink 3"
      break;
      case "Ts":
      deckLeft.src = "./kuvat/Ts.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ten of spades"
      infoRule.innerHTML = "Men drink 3"
      break;
      case "Td":
      deckLeft.src = "./kuvat/Td.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ten of diamonds"
      infoRule.innerHTML = "Men drink 3"
      break;
      case "Th":
      deckLeft.src = "./kuvat/Th.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Ten of hearts"
      infoRule.innerHTML = "Men drink 3"
      break;
      // JÄTKÄT
      case "Jc":
      deckLeft.src = "./kuvat/Jc.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Jack of clubs"
      infoRule.innerHTML = "Pause card"
      break;
      case "Js":
      deckLeft.src = "./kuvat/Js.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Jack of spades"
      infoRule.innerHTML = "Pause card"
      break;
      case "Jd":
      deckLeft.src = "./kuvat/Jd.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Jack of diamonds"
      infoRule.innerHTML = "Pause card"
      break;
      case "Jh":
      deckLeft.src = "./kuvat/Jh.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Jack of hearts"
      infoRule.innerHTML = "Pause card"
      break;
      // AKAT
      case "Qc":
      deckLeft.src = "./kuvat/Qc.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Queen of clubs"
      infoRule.innerHTML = "Whore, when other drink, you take one"
      break;
      case "Qs":
      deckLeft.src = "./kuvat/Qs.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Queen of spades"
      infoRule.innerHTML = "Whore, when other drink, you take one"
      break;
      case "Qd":
      deckLeft.src = "./kuvat/Qd.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Queen of diamonds"
      infoRule.innerHTML = "Whore, when other drink, you take one"
      break;
      case "Qh":
      deckLeft.src = "./kuvat/Qh.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "Queen of hearts"
      infoRule.innerHTML = "Whore, when other drink, you take one"
      break;
      // Kurkot
      case "Kc":
      deckLeft.src = "./kuvat/Kc.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "King of clubs"
      infoRule.innerHTML = "Take a big sip"
      break;
      case "Ks":
      deckLeft.src = "./kuvat/Ks.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "King of spades"
      infoRule.innerHTML = "Take a big sip"
      break;
      case "Kd":
      deckLeft.src = "./kuvat/Kd.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "King of diamonds"
      infoRule.innerHTML = "Take a big sip"
      break;
      case "Kh":
      deckLeft.src = "./kuvat/Kh.svg"
      usedCards.push(cardCode);
      infoCard.innerHTML = "King of hearts"
      infoRule.innerHTML = "Take a big sip"
      break;
   }
}
}
pushButton.addEventListener("click",handleButton);
