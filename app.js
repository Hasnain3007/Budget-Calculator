var budgetInput = document.getElementById('budget');
var budgetBtn = document.getElementById('budget-btn');
var productTiltle = document.getElementById('title');
var productCost = document.getElementById('cost');
var checkAmount = document.getElementById('done');
var totalBudget = document.getElementById('total');
var totalExpenses = document.getElementById('expenses');
var balance = document.getElementById('balance');
var table = document.getElementById('table');



var myBudget ;

budgetBtn.addEventListener('click',()=>{
    if (budgetInput.value=='') {
        alert('please set a budget')
    }else{
        myBudget =+ budgetInput.value
    // Number(myBudget)
    balance.innerHTML = myBudget
    totalBudget.innerHTML=myBudget
    budgetInput.value=''
    console.log(typeof myBudget);

    }
   
})


checkAmount.addEventListener('click',()=>{
    if (productTiltle.value == '' || productCost.value =='') {
        
        alert('please set product title or cost ')
    }else{
        var itemPrice =+ productCost.value
    // Number(itemPrice)
    // console.log(typeof itemPrice);
    var itemName = productTiltle.value
    totalExpenses.innerText += itemPrice


    balance.innerHTML = myBudget-itemPrice

    productCost.value=''
    productTiltle.value=''
    table.innerHTML += `<tr id="tr"> <td>${itemName}</td> <td>${itemPrice}</td> <td><i id="delete" class="fa-solid fa-trash"></i></td></tr>`
    var dlt = document.getElementById('delete')
    dlt.addEventListener('click',()=>{
        document.getElementById('tr').remove()
    })
    }
})

