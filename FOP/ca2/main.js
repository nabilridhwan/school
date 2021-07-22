var input = require("readline-sync")
var Offering = require("./offering")
var menu = new Offering()
var cartOption;
var categoryOption;

// do{
//     cartOption = input.questionInt("Welcome to NiceMeal Restaurant\n\t1. View Menu\n\t2. View Cart\n\t0. Quit\n>>>> ")
//     switch (cartOption) {
//         case 1:
//             // PRINT MENU
//             break;
//         case 2:
//             // CHECK MENU, IF EMPTY, SAY EMPTY
//             break;
//         default:
//             break;
//     }
// }while(cartOption != 0)


console.log("\t\tSelect Dish")
for(var i = 0; i < menu.category.length; i++){
    console.log("\t\t\t" + menu.category[i].input + ". " + menu.category[i].name)
}
categoryOption = input.questionInt(">>>> ")
console.log(menu.category[categoryOption-1].name)