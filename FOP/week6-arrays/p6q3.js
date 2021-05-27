/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

var list1 = [12, 56, 76, 32, 12, 34];
var list2 = [12, 56, 76, 32, 12, 34];

if(list1.length == list2.length){
    var identical = true;
    for(var i = 0; i < list1.length; i++){
        if(list1[i] != list2[i]) identical = false
    }

    identical && console.log("Two lists are strictly identical")
}