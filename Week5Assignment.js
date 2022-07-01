class Card {
    constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;   
    }
    describe(){
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
    describe(){
        return `${this.name} is ${this.cards.length} cards.`;
    }
}

class deckMenu{
    constructor(){
    this.decks = [];
    this.selectedDeck = null;
    }

    start(){
        let selection = this.showMainMenu();
        
        while(selection != 0){
        switch(selection){
            case '1':
                this.createDeck();
                break;
            case '2':
                this.viewDeck();
                break;
            case '3':
                this.displayDeck();
                break;
            case '4':
                this.deleteDeck();
                break;
            default:
                selection = 0;
        }
        selection = this.ShowMainMenu();
        }
        alert('Deck building done.');
    }
    showMainMenu(){
        return prompt(`
        0) exit
        1) create deck
        2) view deck
        3) display deck
        4) delete deck
            `);
    }

    showDeckMenuOptions(deckInfo){
        return prompt(`
        0) back
        1) create card
        2) delete card
        -----
        ${deckInfo}
         `);
    }

    displayDecks(){
        let deckString = '';
        for(let i = 0; i < this.decks.length; i++){
            deckString += i + ')' + this.decks[i].name + '\n';
        }
        alert(deckString);
    }
    createDeck(){
        let name = prompt('Please enter deck name.');
        this.decks.push(new Deck(name));
    }
    viewDeck(){
        let index = prompt('Enter the number of the deck you want to see');
        if(index > -1 && index < this.decks.length){
            this.selectedDeck = this.decks[index];
            let description = 'Deck: ' + this.selectedDeck.name + '\n';
            
            for(let i = 0; i < this.selectedDeck.cards.length; i++){
                description += i + ')' + this.selectedDeck.cards[i].name 
                + ' - ' + this.selectedDeck.cards[i].type.color + '\n';
            }
            let selection = this.showDeckOptions(description);
            switch(selection){
                case '1':
                    this.addCard();
                    break;
                case '2':
                    this.removeCard();
            }
        }
    }

    deleteDeck(){
        let index = prompt('Enter the deck you want to delete.');
        if(index > -1 && index < this.decks.length){
           this.decks.splice(index, 1); 
        }
    }

    addCard(){
        let name = prompt('Please add card name.');
        let type = prompt('Please add card type.');
        let color = prompt('Please add card color');
        this.selectedDeck.cards.push(new Card(name, type, color));
    }

    removeCard(){
        let index = prompt('Enter the selection of card you want to remove.');
        if(index > -1 && index < this.selectedDeck.cards.length){
            this.selectedDeck.cards.splice(index, 1);
        }
    }

}

let menu = new deckMenu();
menu.start();