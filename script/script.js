
function checkAllCheckboxes(divId) {
    // Get the div with id "week"
    const hiDiv = document.getElementById(divId);

    // Find all checkboxes inside the div
    const checkboxes = hiDiv.querySelectorAll("input[type='checkbox']");

    // Loop through checkboxes and set their "checked" property to true
    const first = checkboxes[0];

    if(first.checked){
        checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    }else{
        checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
    }

   
}