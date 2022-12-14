// function period() {
// var month = document.getElementsByClassName("monthly");
// var year = document.getElementsByClassName("yearly");

// month.classList.toggle("text-muted");
// year.classList.toggle("text-muted");
// }

// let checkbox = document.getElementsByClassName("switch");
// console.log(checkbox.checked);



var monthly = document.getElementById("monthly");
var yearly = document.getElementById("yearly");

var monthlyPriceArcade = document.getElementById("monthlyPriceArcade");
var yearlyPriceArcade = document.getElementById("yearlyPriceArcade");
var yearlyBonusArcade = document.getElementById("yearlyBonusArcade");

var monthlyPriceAdvanced = document.getElementById("monthlyPriceAdvanced");
var yearlyPriceAdvanced = document.getElementById("yearlyPriceAdvanced");
var yearlyBonusAdvanced = document.getElementById("yearlyBonusAdvanced");

var monthlyPricePro = document.getElementById("monthlyPricePro");
var yearlyPricePro = document.getElementById("yearlyPricePro");
var yearlyBonusPro = document.getElementById("yearlyBonusPro");

// var monthlyPrice = document.getElementById("monthlyPrice");
// var yearlyPrice = document.getElementById("yearlyPrice");


var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        monthly.classList.toggle("text-muted");
        yearly.classList.toggle("text-muted");

        monthlyPriceArcade.classList.toggle("hidden-text");
        yearlyPriceArcade.classList.toggle("hidden-text");
        yearlyBonusArcade.classList.toggle("hidden-text");

        monthlyPriceAdvanced.classList.toggle("hidden-text");
        yearlyPriceAdvanced.classList.toggle("hidden-text");
        yearlyBonusAdvanced.classList.toggle("hidden-text");

        monthlyPricePro.classList.toggle("hidden-text");
        yearlyPricePro.classList.toggle("hidden-text");
        yearlyBonusPro.classList.toggle("hidden-text");
    } else {
        monthly.classList.toggle("text-muted");
        yearly.classList.toggle("text-muted");

        monthlyPriceArcade.classList.toggle("hidden-text");
        yearlyPriceArcade.classList.toggle("hidden-text");
        yearlyBonusArcade.classList.toggle("hidden-text");

        monthlyPriceAdvanced.classList.toggle("hidden-text");
        yearlyPriceAdvanced.classList.toggle("hidden-text");
        yearlyBonusAdvanced.classList.toggle("hidden-text");

        monthlyPricePro.classList.toggle("hidden-text");
        yearlyPricePro.classList.toggle("hidden-text");
        yearlyBonusPro.classList.toggle("hidden-text");
    }
})