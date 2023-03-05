let myLeads = [];

const input = document.getElementById('input');

const inputBtn = document.getElementById('input-btn');

inputBtn.addEventListener("click", function(){

    myLeads.push(input.value);
    console.log(myLeads);

});

