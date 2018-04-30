function Dealer()
{
    this.name = "The House";
    this.money = 0;
    this.active = true;
    this.handCount = 0;
    this.hand = [];
    this.hit = function (deck)
    {
        this.hand.push(deck.decks.pop());
        let handLength = this.hand.length;
        this.handCount = 0;
        for(let i=0; i<handLength; i++)
        {
            this.handCount = this.handCount + this.hand[i].numValue;
        }
    }

    this.deal = function (players, deck)
    {
        for(let i=0; i<players.length; i++)
        {
            if(players[i].active===true)
            {
                this.hand.push(deck.decks.pop()); this.hand.push(deck.decks.pop());
                players[i].hand.push(this.hand.pop());  players[i].hand.push(this.hand.pop());     
                players[i].handCount = players[i].hand[0].numValue + players[i].hand[1].numValue;      
            }
        }
    }

    this.giveCard = function(deck, player)
    {
        this.hand.push(deck.decks.pop());
        player.hand.push(this.hand.pop());
    }

    this.takeCardsBack = function (players, deck)
    {
        for(let i=0; i<players.length; i++)
        {
            let pHandLength = players[i].hand.length;
            for(let j=0; j<pHandLength; j++)
            {
                this.hand.push(players[i].hand.pop());
                deck.decks.push(this.hand.pop());        
            }
            players[i].handCount = 0;
        }
        let handLength = this.hand.length;
        for(let i=0; i<handLength; i++)
        {
            deck.decks.push(this.hand.pop());
            this.handCount = 0;
        }
    }

    this.strategy = function(deck)
    {
        while(this.handCount < 17)
        {
            this.hit(deck);
            if(this.handCount > 21)
            {
                for(let i=0; i<this.hand.length; i++)
                {
                    if(this.hand[i].cardValue==="ace")
                    {
                        this.hand[i].numValue = 1;
                        this.handCount = this.handCount - 10;
                    }
                }
            }
        }
    }
}
module.exports = Dealer;