let myLeads = [];
const inputEl = document.getElementById("input");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("uL-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
});

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        listItems +=
            listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>
    `;
        console.log(listItems);
    }
    ulEl.innerHTML = listItems;
}