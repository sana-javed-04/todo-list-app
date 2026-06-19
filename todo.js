let inptTask = document.querySelector("#task");
let btn = document.querySelector(".btn");
let listCont = document.querySelector(".list-cont");

btn.addEventListener("click", () => {
    if (inptTask.value === "") {
        alert("You must write Something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inptTask.value;
        listCont.appendChild(li);

        // span to make cross
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inptTask.value = "";
    saveData();
});

listCont.addEventListener("click", (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("chkd");
        saveData();
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});


// This function saves the current state of the to-do list to localStorage
function saveData() {
    // Save the HTML content of listContainer to localStorage under the key "data"
    localStorage.setItem("data", listCont.innerHTML);
}

// This function loads the saved to-do list from localStorage
function showTask() {
    // Retrieve the saved data from localStorage and set it as the innerHTML of listContainer
    listCont.innerHTML = localStorage.getItem("data");
}
showTask();

