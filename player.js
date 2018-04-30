function Player(name)
{
    this.name = name;
    this.money = 200;
    this.active = true;
    this.handCount = 0;
    this.hand = [];
    this.bet = function (dealer) 
    {
        if(this.active===true)
        {
            this.money = this.money-15;
            dealer.money = dealer.money+15;
        }
    }

    this.hit = function (deck, dealer)
    {
        dealer.giveCard(deck, this);
        this.handCount = 0;
        for(let i=0; i<this.hand.length; i++)
        {
            this.handCount = this.handCount + this.hand[i].numValue;
        }
    }

    this.strategy = function (deck, dealer)
    {
        if(this.active===true)
        {
            while(this.handCount < 17)
            {
                this.hit(deck, dealer);
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
}
module.exports = Player; 


