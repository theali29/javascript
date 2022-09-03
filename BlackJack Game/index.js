//BlackJack Game

let cards=[] //array-ordered list of items
let sum=0
let hasblackJack=false
let isAlive=false
let msg=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")


let player ={
    Name: "Ali", 
    Chips:145,
    //methods
sayHello:function(){
console.log("Heisann!")
}
}
//object with method
player.sayHello()
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name + ": $" + player.Chips


function getrandomcard()
{
    
    randomNumber=Math.floor(Math.random()*13)+ 1
    if(randomNumber===1)
    {
        return 11
    }
    else if(randomNumber>10)
    {
      return 10
    }
    else
    {
        return randomNumber
    }
}

function startGame()
{
    isAlive=true
    let firstCard=getrandomcard()
    let secondCard=getrandomcard()
    cards=[firstCard,secondCard] //array-ordered list of items
    sum=firstCard+secondCard

  renderGame()
}  
function renderGame()
{
  sumEl.textContent="Sum: "+ sum
  //render out firstCard and secondCard
  cardsEl.textContent="Cards: "
for(let i=0;i<cards.length;i++)
{
    cardsEl.textContent+=cards[i]+" "
//create a for loop that renders out al the cards instead of just two
}
//render out all the cards we have
 
if (sum <= 20){
 msg="Do you want to draw a new card" 
 } else if(sum===21){
 msg="Wohoo! You've got BlackJack!"
 hasblackJack=true
}
else {
 msg="You're out of the game"
 isAlive=false
 }
 
messageEl.textContent=msg
 console.log(msg)
}
 function newCard()
{
    if(isAlive===true&&hasblackJack===false)
    {
        card=getrandomcard()
        sum+=card
        cards.push(card)
        console.log(cards)
        renderGame()
         
    }
    
}
