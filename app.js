"use strict"
const Form = document.forms.amountValidation

let Income_Value = document.querySelector(".totalIncome")
let Expense_Value = document.querySelector(".totalExpense")

let Income = Number(Income_Value.innerHTML)
let Expense = Number(Expense_Value.innerHTML)

let TotalSum = document.querySelector(".totalBalance")
let Alert=document.querySelector(".alert")

if (TotalSum && Income === 0.00 && Expense === 0.00) {
    TotalSum.innerHTML = `₹0.00`;
    Income_Value.innerHTML = `₹0.00`;
    Expense_Value.innerHTML = `₹0.00`;
}

Form.addEventListener("submit", (event) => {
    event.preventDefault()

    let ListItems = document.querySelector("#amountDetailInput")
    let AmountItems = document.querySelector("#amountInput")

    let ListValue = ListItems.value
    let AmountValue = Number(AmountItems.value.trim())

    if (AmountValue == "" || ListValue == "") {
        alert("Please enter both list details and a valid amount.")
        return;
    }

    let newDiv = document.createElement("div")
    newDiv.id = "MainDetails"

    let Listtag = document.createElement("h3")
    Listtag.className = "ListDetails"
    Listtag.innerHTML = `${ListValue}`


    let Amounttag = document.createElement("h3")
    Amounttag.className = "AmontDetails"
    Amounttag.innerHTML = `${AmountValue}`


    if (AmountValue <= 0) {
        Amounttag.innerHTML = `${AmountValue}`
    }
    else {
        Amounttag.innerHTML = ` +${AmountValue}`
    }


    let Removebtn = document.createElement("button")
    Removebtn.className = "RemoveList"
    Removebtn.innerHTML = "X"
    Removebtn.style.color = "black"

    let pricelist = document.createElement("div")
    pricelist.id = "priceList"

    newDiv.appendChild(Removebtn)
    newDiv.appendChild(Listtag);
    newDiv.appendChild(Amounttag);

    pricelist.appendChild(newDiv)

    let HistoryList = document.querySelector("#historyList")

    HistoryList.appendChild(pricelist)

    let Main = document.querySelector("#Main")

    Main.append(pricelist)

    if (AmountValue <= 0) {
        Expense += AmountValue;
        Expense_Value.innerHTML = `₹ ${Expense}.00`;
        newDiv.style.borderRight = "4px solid red";
        Listtag.style.color = "red"

    } else {
        Income += AmountValue;
        Income_Value.innerHTML = `₹ ${Income}.00`;
        newDiv.style.borderRight = "4px solid green";
        Listtag.style.color = "green"
    }

    TotalSum.innerHTML = ` ${Expense + Income}.00`

   
    Removebtn.addEventListener("click", (event) => {
        
      newDiv.remove()
      let removeammount=event.target.parentElement.lastChild.innerHTML
          
      if(AmountValue >=0){
           Income -=removeammount
           Income_Value.innerHTML=`${Income}.00`
      }
      else{
           Expense -=removeammount
           Expense_Value.innerHTML=`${Expense}.00`
      }
      TotalSum.innerHTML=`${Expense+Income}.00`
      
//  Way 2

        // if (AmountValue >= 0){
        //     Income -= AmountValue
        //     Income_Value.innerHTML = `₹ ${Income}.00`
        // }
        // else {
        //     Expense -= AmountValue
        //     Expense_Value.innerHTML = `₹ ${Expense}.00`
        // }
        // TotalSum.innerHTML = ` ${Expense + Income}.00`

        if (Expense + Income === 0) {
            TotalSum.innerHTML = "₹0.00"
        }
    });
   Form.reset()
});






//  Trying Edit Button


// "use strict"


// const Form = document.forms.amountValidation

// let Income_Value = document.querySelector(".totalIncome")
// let Expense_Value = document.querySelector(".totalExpense")

// let Income = Number(Income_Value.innerHTML)
// let Expense = Number(Expense_Value.innerHTML)


// let TotalSum = document.querySelector(".totalBalance")

// if (TotalSum && Income === 0.00  && Expense === 0.00) {
//     TotalSum.innerHTML = `₹ ${Income+Expense}`;
//     Income_Value.innerHTML = `₹ ${Income}`;
//     Expense_Value.innerHTML = `₹ ${Expense}`;
// }

// Form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let ListItems = document.querySelector("#amountDetailInput")
//     let AmountItems = document.querySelector("#amountInput")

//     let ListValue = ListItems.value
//     let AmountValue = Number(AmountItems.value.trim())

//     if (AmountValue == "" || ListValue == "") {
//         alert("Please enter both list details and a valid amount.")
//         return;
//     }

//     let newDiv = document.createElement("div")
//     newDiv.id = "MainDetails"

//     let Listtag = document.createElement("h3")
//     Listtag.className = "ListDetails"
//     Listtag.innerHTML =`${ListValue}`


//     let Amounttag = document.createElement("h3")
//     Amounttag.className = "AmontDetails"
//     Amounttag.innerHTML = `${AmountValue}`
    

//     if(AmountValue<=0){
//         Amounttag.innerHTML = `${AmountValue}`
//        }
//        else{
//         Amounttag.innerHTML=` +${AmountValue}`
//        }


//     let Removebtn = document.createElement("button")
//     Removebtn.className = "RemoveList"
//     Removebtn.innerHTML = "X"
//     Removebtn.style.color = "black"

//     let Editbtn = document.createElement("button");
//     Editbtn.className = "EditButton";
//     Editbtn.innerHTML = "&#9998;"; 
   



//     let pricelist=document.createElement("div")
//     pricelist.id="priceList"

//     newDiv.appendChild(Removebtn)
//     newDiv.appendChild(Listtag);
//     newDiv.appendChild(Amounttag);
//     newDiv.appendChild(Editbtn)
   
//     pricelist.append(newDiv)
    
//     let HistoryList=document.querySelector("#historyList")
    
//     HistoryList.append(pricelist)

//     if (AmountValue <= 0) {
//         Expense += AmountValue;
//         Expense_Value.innerHTML = `₹${Expense}`;
//         newDiv.style.borderRight = "4px solid red";
//         Listtag.style.color="red"

//     } else {
//         Income += AmountValue;
//         Income_Value.innerHTML = `₹${Income}`;
//         newDiv.style.borderRight = "4px solid green";
//         Listtag.style.color="green"
//     }

//     TotalSum.innerHTML = ` ${Expense + Income}.00`


//     Removebtn.addEventListener("click", () => {
//         newDiv.remove()
//         if (AmountValue >= 0) {
//             Income -= AmountValue
//             Income_Value.innerHTML = `₹${Income}`
//         }
//         else {
//             Expense -= AmountValue
//             Expense_Value.innerHTML = `₹${Expense}`
//         }
//         TotalSum.innerHTML = ` ${Expense + Income}.00`

//         if (Expense + Income === 0) {
//             TotalSum.innerHTML = "₹0.00"
//         }

//     });
//     Editbtn.addEventListener("click", () => {
//         let editListInput = document.createElement("input");
//         editListInput.type = "text";
//         editListInput.value = ListValue;
    
//         let editAmountInput = document.createElement("input");
//         editAmountInput.type = "number";
//         editAmountInput.value = AmountValue;
    
//         Listtag.innerHTML = "";
//         Listtag.appendChild(editListInput);
    
//         Amounttag.innerHTML = "";
//         Amounttag.appendChild(editAmountInput);
    
     
//         let originalAmountValue = AmountValue;
    
//         editListInput.addEventListener("blur", () => {
//             ListValue = editListInput.value;
//             Listtag.innerHTML = ListValue;
//             updateTotalSum();
//         });

//         editAmountInput.addEventListener("blur", () => {
//             let editedAmountValue = Number(editAmountInput.value);
//             let amountDifference = editedAmountValue - originalAmountValue;
        
//             if (AmountValue <= 0) {
//                 Expense += amountDifference;
//             } else {
//                 Income += amountDifference;
//             }
        
//             Expense_Value.innerHTML = `₹${Expense}`;
//             Income_Value.innerHTML = `₹${Income}`;
        
//             Amounttag.innerHTML = `${editedAmountValue}`;
//             updateTotalSum();
//         });

//         function updateTotalSum() {
//             TotalSum.innerHTML = `₹${Expense + Income}`;
//         }
//     });
//     Form.reset()
// });

