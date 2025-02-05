class MenuItems{
    #mainFood;
    #dessert;

    constructor(mainFood, dessert)
    {
        this.#mainFood = mainFood;
        this.#dessert = dessert;
        this.total = 0;
    }
    get mainFood(){
        return this.#mainFood;
    }
    set mainFood(mainFood){
        this.#mainFood = mainFood;
    }

    get dessert(){
        return this.#dessert;
    }

    set dessert(dessert){
        this.#dessert = dessert;
    }

     calcTotal(mainItem = 0, dessertItem = 0){
        const mainPrice = 126.99;
        const dessertPrice = 59.99;
        let mainX = mainItem * mainPrice;
        let dessertX = dessertItem * dessertPrice;
        this.total = mainX + dessertX;

        return this.total;

    }
}

const prompt = require('prompt-sync')();

let mainItem = Number(prompt('How many main items would you like: '));
let dessertItem = Number(prompt('How many dessert items would you like: '));

let customer = new MenuItems();
customer.calcTotal(mainItem,dessertItem);
console.log(`R`+Math.floor(customer.total));
