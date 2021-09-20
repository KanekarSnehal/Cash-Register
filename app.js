const billAmount=document.querySelector("#bill-amount");
const nextButton=document.querySelector("#next-button");
const secondContainer=document.querySelector("#second-container");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const errorMessage=document.querySelector("#error-message");
const showTable=document.querySelector("#show-table");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,100,20,10,15,1];
secondContainer.style.display="none";
nextButton.addEventListener("click",validateBillAmount);

function validateBillAmount()
{
    hideMessage();
    if(Number(billAmount.value)>0)
    {
        secondContainer.style.display="block";
        nextButton.style.display="none";
        showTable.style.display="none";
    }
    else
    {
        showMessage("**Invalid Bill Amount**");
    }
}

checkButton.addEventListener("click",validateCashGiven);

function validateCashGiven()
{
    hideMessage();
    if(Number(cashGiven.value)===Number(billAmount.value))
    {
        showMessage("Bill paid");
    }
    else if(Number(billAmount.value)<0 )
    {
        showMessage("**Invalid Bill Amount**");
        nextButton.style.display="block";
        secondContainer.style.display="none";

    }
    else if(Number(cashGiven.value)>0 && Number(cashGiven.value)>Number(billAmount.value))
    {
        showTable.style.display="flex";
        const amountToBeRetured=Number(cashGiven.value)-Number(billAmount.value);
        calculateChange(amountToBeRetured);
    }
    else
    {
        showMessage("**Cash Given should atleast be equal to bill amount**");
    }
}

function calculateChange(amountToBeRetured)
{
   
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes=Math.trunc(amountToBeRetured/availableNotes[i]);
        amountToBeRetured=amountToBeRetured%availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function showMessage(msg)
{
    errorMessage.style.display="block";
    errorMessage.innerText=msg;
}

function hideMessage()
{
    errorMessage.style.display="none";
}