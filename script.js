const billInput = document.querySelector(".bill");
const customTip = document.querySelector(".custom-tip");
const peopleInput = document.querySelector(".people");

const cantBeZero = document.querySelector(".cant-be-zero");
const cantBeZero1 = document.querySelector(".cant-be-zero1");
const tipAmount = document.querySelector(".tip-amount");
const totalBill = document.querySelector(".total-bill");

const tipBtn = document.querySelectorAll(".tip-btn");

const resetBtn = document.querySelector(".reset-button");
 

const percentages = [0.05, 0.1, 0.15, 0.25, 0.5];

const CalcTip = (x) => {
    tipAmount.textContent = (billInput.value * percentages[x] / peopleInput.value).toFixed(2);
    totalBill.textContent = ((billInput.value * percentages[x] + +billInput.value) / peopleInput.value).toFixed(2);
};

const CustomCalcTip = (percentage) => {
    let x = percentage / 100;
    tipAmount.textContent = (billInput.value * x / peopleInput.value).toFixed(2);
    totalBill.textContent = ((billInput.value * x + +billInput.value) / peopleInput.value).toFixed(2);
}

const conditions = (index) => {
    !billInput.value ? cantBeZero.classList.remove("hidden") : cantBeZero.classList.add("hidden");
    !peopleInput.value ? cantBeZero1.classList.remove("hidden") : cantBeZero1.classList.add("hidden");
        
    if(peopleInput.value && billInput.value && !customTip.value){
        CalcTip(index);
    }  
    if(peopleInput.value && billInput.value && customTip.value){
        CustomCalcTip(index);
    } 
    if(totalBill.textContent != "0.00") {
    resetBtn.classList.remove("cursor-not-allowed", "opacity-60");
    }
};

for(let i=0; i < tipBtn.length; i++){
  tipBtn[i].addEventListener("click", () => {
    conditions(i);
});
}

customTip.addEventListener("input", () => {
    if(!customTip.value) return;
    if(customTip.value.length > 3){
    customTip.value = customTip.value.split("").slice(0, 3).join('');
    } 
    conditions(customTip.value);  
});

billInput.addEventListener("input", () => {
    cantBeZero.classList.add("hidden");
    if(billInput.value.length > 5){
        billInput.value = billInput.value.split("").slice(0, 5).join('');
    }  
});

peopleInput.addEventListener("input", () => {
    cantBeZero1.classList.add("hidden");
    if(peopleInput.value.length > 2){
        peopleInput.value = peopleInput.value.split("").slice(0, 2).join('');
    }  
});

resetBtn.addEventListener("click", () => {    
    tipAmount.textContent = "0.00";
    totalBill.textContent = "0.00";
    peopleInput.value = "";
    billInput.value = "";
    customTip.value = "";
    resetBtn.classList.add("cursor-not-allowed", "opacity-60");    
});
