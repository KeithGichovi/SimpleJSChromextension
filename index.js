let myLeads = [];

const input = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('uL-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(input.value);
    renderLeads()
});



function renderLeads() {
    let listItems = '';

    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}