var Deck = require('./deck.js');
var Player = require('./player.js');
var Dealer = require('./dealer.js');
var numOfRounds = 20;
var players = [new Player('Huey'), new Player('Dewey'), new Player('Lewey'), new Player('Scrooge')]
var dealer = new Dealer();
var decks = new Deck();

function determineOutcome()
{
    for(let i=0; i<players.length; i++)
    {
        if(players[i].active===true)
        {
            if(players[i].handCount <= 21 && dealer.handCount < players[i].handCount)
            {
                players[i].money = players[i].money+30;
                dealer.money = dealer.money-30;
            }
            else
            {
                if(players[i].money < 15)
                {
                    players[i].active = false;
                }
            }
        }
    }
}

decks.intializeDeck();

//main game structure
for(let i=0; i<numOfRounds; i++)
{
    for(let i=0; i<players.length; i++)
    {   
        players[i].bet(dealer);
    }
    decks.shuffle();
    dealer.deal(players, decks);
    for(let i=0; i<players.length; i++)
    {   
        players[i].strategy(decks, dealer);
    }
    dealer.strategy(decks);
    determineOutcome();
    dealer.takeCardsBack(players, decks)
}

for(let i=0; i<players.length; i++)
{
    console.log(players[i]);
}
console.log(dealer);