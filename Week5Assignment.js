class Card {
    constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;   
    }
    cardDescription(){
        return `${this.name} is ${this.type} and ${this.color}.`;
    }
}

class Deck {
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    addCard(card){
        if(card instanceof Card){
        this.cards.push(card);
        }else{
         throw new Error('Please add a card.')
        }
    }
    deckDescription(){
        return `${this.name} is ${this.cards.length} cards.`;
    }
}

class deckMenu{
    constructor(){
    this.decks = [];
    this.selectedDeck = null;
    }

    start(){
        let selection = this.mainMenu();
        
        while(selection !== 0){
        switch(selection){
            case '1':
                this.viewAll();
                break;
            case '2':
                this.createDeck();
                break;
            case '3':
                this.viewDeck();
                break;
            case '4':
                this.deleteDeck();
                break;
                default:
                    selection = 0;
        }
        selection = this.mainMenu();
        }
        alert('Deck building done.');
    }
    mainMenu(){
        return prompt(`
        0) create new deck
        1) view deck
        2) display decks
        4) delete deck
                    `);
    }

    deckMenuOptions(deckInfo){
        return prompt(`
        0) add card
        1) delete card
        2) return

        ${deckInfo}
                    `);
    }

    viewDecks(){
        let deckString = '';
        for(let i = 0; i < this.decks.length; i++){
            deckString += i + ') ' + this.decks[i].name + '\n';
        }
        alert(deckString);
    }
    createDeck(){
        let name = prompt('Please enter deck name.');
        this.decks.push(new Deck(name));
    }
    viewDeck(){
        let choice = prompt('Enter the number of the deck you want to see');
        if(choice > -1 && choice < this.decks.length){
            this.deckSelection = this.decks[choice];
            let deckList = 'Deck: ' + this.selectedDeck + '\n';
            
            for(let i = 0; i < this.selectedDeck.cards.length; i++){
                deckList += i + ') ' + this.selectedDeck.cards[i].name 
                + ' , ' + this.selectedDeck.cards[i].type 
                + ' , ' + this.selectedDeck.cards[i].color + '\n';
            }
            let selection = this.deckOptions(deckList);
            switch(selection){
                case '1':
                    this.createCard();
                    break;
                case '2':
                    this.deleteCard();
            }
        }
    }

    deleteDeck(){
        let choice = prompt('Enter the deck you want to delete.');
        if(choice > -1 && choice < this.decks.length){
           this.decks.splice(choice, 1); 
        }
    }

    addCard(){
        let name = prompt('Please add card name.');
        let type = prompt('Please add card type.');
        let color = prompt('Please add card color');
        this.selectedDeck.cards.push(new Card(name, type, color));
    }

    removeCard(){
        let choice = prompt('Enter the selection of card you want to remove.');
        if(choice > -1 && choice < this.selectedDeck.cards.length){
            this.selectedDeck.cards.splice(choice, 1);
        }
    }

}

let menu = new deckMenu();
menu.start();

