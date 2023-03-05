let myLeads = [];

const input = document.getElementById('input');

const inputBtn = document.getElementById('input-btn');

const ulEl = document.getElementById('uL-el');

console.log(ulEl);

inputBtn.addEventListener("click", function() {

    myLeads.push(input.value);
    console.log(myLeads);

});

for(let i = 0; i < myLeads.length; i++){

    ulEl.textContent += myLeads[i];

}