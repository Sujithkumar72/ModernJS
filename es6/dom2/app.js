document.getElementById("loan-form").addEventListener("submit", function(e){
    //show loader //Hide results
    document.getElementById("results").style.display ="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(){
    console.log("Calculating....");
    calculate();


    
}

function calculate(){
    
    const amount =document.getElementById("amount");
    const interest =document.getElementById("interest");
    const years=document.getElementById("years");
    const mPayment=document.getElementById("monthly-payment");
    const totalPayment=document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;
    const x= Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly= (principal *x*calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        mPayment.value = monthly.toFixed(2);
        totalPayment.value= (monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly* calculatedPayments)-principal).toFixed(2);
        document.getElementById("results").style.display ="block";
        document.getElementById("loading").style.display="none";
      
    } else {
        showError("Please check your numbers");
    }
 
}

function showError(error){
    document.getElementById("results").style.display ="none";
    document.getElementById("loading").style.display="none";
    const errDiv = document.createElement("div");
    errDiv.className ="alert alert-danger";
    const card=document.querySelector(".card");
    const heading = document.querySelector(".heading");
    errDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector(".alert").remove();
}