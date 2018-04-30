function Deck ()
{
    this.decks = []
    this.intializeDeck = function()
    {
        let suits = ['hearts', 'diamonds','spades','clubs'];
        let card = ["ace",'2','3','4','5','6','7','8','9','10',"jack","queen","king"];
        let numberOfDecks = Math.floor(Math.random()*8)+1;
        for(let j=1; j<=numberOfDecks; j++)
        {
            for(let i=0; i<=suits.length-1; i++)
            {
                for(let n=0; n<=card.length-1; n++)
                {
                    if(card[n]==="2" || card[n]==="3" || card[n]==="4" || card[n]==="5" || card[n]==="6" || card[n]==="7" || card[n]==="8" || card[n]==="9")
                    {
                        this.decks.push({suit: suits[i], cardValue: card[n], numValue: n+1});
                    }
                    else if(card[n]==="jack" || card[n]==="queen" || card[n]==="king" || card[n]==="10")
                    {
                        this.decks.push({suit: suits[i], cardValue: card[n], numValue: 10});
                    }
                    else
                    {
                        this.decks.push({suit: suits[i], cardValue: card[n], numValue: 11});
                    }
                }
            }
        }
        for(let i=0; i<this.decks.length; i++)
        {
            if(this.decks[i].suit === 'hearts' || this.decks.suit === 'diamonds')
            {   
                this.decks[i].color = "red";
            }
            else
            {
                this.decks[i].color = "black";
            }
        }
    }
    this.shuffle = function()
    {
        let i = 0, j = 0, temp = null;

        for (i = this.decks.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (this.decks.length));
            temp = this.decks[i];
            this.decks[i] = this.decks[j];
            this.decks[j] = temp;
        }
    }
}
module.exports = Deck;

