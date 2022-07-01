class Card {
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    describe() {
        return `${this.name} is ${this.type} and ${this.color}.`; 
    }
}

class Deck {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(card) {
        if (card instanceof Card) {
            this.cards.push(card);
        }else {
            throw new Error (`You must ad a card: ${card}`);
        }
    }

    describe() {
        return `${this.name} is ${this.cards.length} cards.`;
    }
}

class deckMenu {
    constructor() {
        this.decks = [];
        this.selectedDeck = null;
    }

    start() {
        let selection = this.showMainMenu();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createDeck();
                    break;
                case '2':
                    this.displayDecks();
                    break;
                case '3':
                    this.viewDecks();
                    break;
                case '4':
                    this.deletedeck();
                    break;
                default:
                     selection = 0;
            }
            selection = this.showMainMenu();
        }

        alert('Deck building done.');
    }
    
    showMainMenu() {
        return prompt(`
            0) exit
            1) create deck
            2) display deck
            3) view decks
            4) delete deck
        `);
    }
    
    showCardMenu(deckInfo) {
        return prompt(`
            0) back
            1) add card
            2) remove card
            ------
            ${deckInfo}
        `);
    }

    displayDecks() {
        let deckString = '';
        for (let i = 0; i < this.decks.length; i++) {
            deckString += i + ')' + this.decks[i].name + '\n';
        }
        alert(deckString);
    }

    createDeck() {
        let name = prompt('Enter deck name');
        this.decks.push(new Deck(name));
    }

    viewDecks() {
        let index = prompt('Enter deck number');
        if (index > -1 && index < this.decks.length) {
            this.selectedDeck = this.decks[index];
            let description = 'Deck ' + this.selectedDeck.name + '\n';

            for (let i = 0; i < this.selectedDeck.cards.length; i++) {
                description += i + ')' + this.selectedDeck.cards[i].name 
                 + ' - ' + this.selectedDeck.cards[i].type + ' - ' + this.selectedDeck.cards[i].color + '\n';
            }

            let selection = this.showCardMenu(description);
            switch (selection) {
                case '1':
                    this.addCard();
                    break;
                case '2':
                    this.removeCard();
            }
        }
    }

    deleteDeck() {
        let index = prompt('Enter the number of deck to delete');
        if (index > -1 && index < this.deck.length) {
            this.deck.splice(index, 1);
        }
    }

    addCard(){
        let name = prompt('Enter card name');
        let type = prompt('Enter card type');
        let color = prompt('Enter card color');
        this.selectedDeck.cards.push(new Card(name, type, color));
    }

    removeCard () {
        let index = prompt('Enter card to remove');
        if (index > -1 && index < this.selectedDeck.cards.length) {
            this.selectedDeck.cards.splice(index, 1);
        }
    }
}

let menu = new deckMenu();
menu.start();