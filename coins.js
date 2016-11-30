/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var askForMoney = prompt("Doller Amount");
console.log(askForMoney)
askForMoney *= 100;
change(askForMoney);

function change(dollerAmount){
    // validating positive dollar amount
    if(dollerAmount >= 1){

        var quarter = 0;
        var dime = 0;
        var nickel = 0;
        var pennie = 0;
        var subCoin = 0;

        for( ; dollerAmount >= 0; dollerAmount -= subCoin){
            if(dollerAmount >= 25 ){
                quarter += 1;
                subCoin = 25;
            }else if(dollerAmount >= 10){
                dime += 1;
                subCoin = 10;
            }else if(dollerAmount >= 5){
                nickel += 1;
                subCoin = 5;
            }else if(dollerAmount >= 1) {
                pennie += 1;
                subCoin = 1;
            }else{
                askForMoney /=100;
                document.getElementById("convert").innerHTML ="<p>You entered in "+ askForMoney+"</p>"+"quarters = " + quarter + " dimes = " + dime + " nickels = " + nickel + " pennies = " + pennie;
            }
        }    
    }else{
        askForMoney = prompt("Doller Amount");
        change(askForMoney);
    }  
}

// function coinCounter (dollerAmount) {
//     var quarter = 0;
//     var dime = 0;
//     var nickel = 0;
//     var pennie = 0;
//   // Initialize a JavaScript object to hold the coins
//     var coinPurse = {};
//     do{
//         if(dollerAmount >= 25 ){
//             quarter += 1;
//             subCoin -= 25;
//             console.log(quarter);
//         }else if(dollerAmount >= 10){
//             dime += 1;
//             subCoin = 10;
//             console.log(dime);
//         }else if(dollerAmount >= 5){
//             nickel += 1;
//             subCoin = 5;
//         }else{
//             pennies += 1;
//             subCoin = 1;
//         }
//     }while(dollerAmount)

//     coinPurse.quarters = 0;

//     return coinPurse;
    
// }        

// var coins = coinCounter()
// console.log();
