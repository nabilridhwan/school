class Offering{

    constructor(){

        this.category = [
            {
                input: 1,
                name: "Noodles"
            },

            {
                input: 2,
                name: "Rice"
            },

            {
                input: 3,
                name: "Drinks"
            }
        ]

        this.noodles = [
            {
                input: 1,
                id: "n001",
                price: 3,
                name: "Mee Siam"
            },

            {
                input: 2,
                id: "n002",
                price: 2,
                name: "Mee Maggi Goreng"
            },

            {
                input: 3,
                id: "n003",
                price: 3,
                name: "Mee Rebus"
            }
        ]

        this.rice = [
            {
                input: 1,
                id: "r001",
                price: 3,
                name: "Chicken Rice"
            },

            {
                input: 2,
                id: "r002",
                price: 3,
                name: "Pineapple Fried Rice"
            },

            {
                input: 3,
                id: "r003",
                price: 8,
                name: "Nasi Briyani (Meat)"
            }
        ]

        this.drinks = [
            {
                input: 1,
                id: "d001",
                price: 2,
                name: "Milo Dinosaur"
            },

            {
                input: 2,
                id: "d002",
                price: 2,
                name: "Lychee Ice Blended"
            },

            {
                input: 3,
                id: "d003",
                price: 3,
                name: "Brown Sugar Milk Tea"
            }
        ]
    }
}

module.exports = Offering