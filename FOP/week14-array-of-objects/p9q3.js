let input = require("readline-sync")

class Contact{
    constructor(name, mobileNumber){
        this.name = name;
        this.mobileNumber = mobileNumber;
    }

    getContactDetails(){
        return "Name: " + this.name +"\nMobile Number: " + this.mobileNumber;
    }
}

class AddressBook{
    constructor(myContact = []){
        this.myContact = myContact

        // From Practical
        this.myContact.push(new Contact("Homer", 98849959));
        this.myContact.push(new Contact("Marge", 84774744));
        this.myContact.push(new Contact("Lisa", 86994994));
        this.myContact.push(new Contact("Maggie", 94775883));
        this.myContact.push(new Contact("Bart", 88838848));
    }

    getNumberOfContacts(){
        return this.myContact.length;
    }

    getContactAt(index){
        return this.myContact[index]
    }

    searchContact(name){
        // Check if the name exists in the contacts
        for(let i = 0; i < this.myContact.length; i++){
            if(this.myContact[i].name === name){
                return this.myContact[i].mobileNumber;
            }
        }

        return "not found!"
    }
}

let myAddressBook = new AddressBook()
let mainMenuOption;

// A do while loop which breaks when the main menu option is equal to 3
do {
    console.log("Personal Addressbook")
    console.log("-----------------------")
    console.log("(1) Show All Contacts")
    console.log("(2) Search Contact")
    console.log("(3) Exit")

    mainMenuOption = input.questionInt(">> ");

    // Switch statement on main menu option
    switch(mainMenuOption){
        case 1:
            // Call showAllContacts()
            showAllContacts();
            break;
        case 2:
            // Call search()
            search();
            break;
        case 3:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid option!");
            break;
    }
} while(mainMenuOption !== 3);

function showAllContacts(){
    let numberOfContacts = myAddressBook.getNumberOfContacts();
    let currentContact = 0;
    let showAllContactOption;

    // A do while loop which breaks when the show all contact option is equal to X
    do {

        if(currentContact > numberOfContacts -1){
            currentContact = numberOfContacts - 1
        }else if(currentContact < 0){
            currentContact = 0
        }
        
        console.log("------------------")
        console.log("Contact " + (currentContact + 1) + " of " + numberOfContacts)
        console.log("------------------")
        // Console log the contact name
        let {name, mobileNumber} = myAddressBook.getContactAt(currentContact)
        console.log("Name: " + name)
        console.log("Mobile Number: " + mobileNumber)
        console.log("------------------")
        console.log("(Press N for next contact, P for previous contact, X to exit)")
        showAllContactOption = input.question(">> ");

        // Switch on show all contact option
        switch(showAllContactOption.toLowerCase()){
            case "n":
                currentContact++;
                break;
            case "p":
                currentContact--;
                break;
            case "x":
                break;
                
            default:
                console.log("Invalid option!");
                break;
        }
    } while(showAllContactOption.toLowerCase() !== "x");
}

function search(){
    // Search the contact by name and return the mobile number
    let name = input.question("Enter the name of the contact: ");
    let searchContact = myAddressBook.searchContact(name);

    if(searchContact != "not found!"){
        console.log(`${name}'s mobile number is ${searchContact}\n`)
    }

    return searchContact;
}