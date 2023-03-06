let myLeads = [];
const inputEl = document.getElementById("input");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("uL-el");
const delete_btn = document.getElementById("delete-btn");

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if(LeadsFromLocalStorage){
    myLeads = LeadsFromLocalStorage;
    renderLeads()
}

delete_btn.addEventListener("dblclick" , function() {

    localStorage.clear();
    myLeads = [];
    renderLeads();
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`;

    }
    ulEl.innerHTML = listItems;
}