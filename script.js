const targetLevel = document.getElementById("level");

function getDepth(element) {
    let level = 0;
    while (element) {
        level++;
        element = element.parentElement;  // Traverse up the DOM tree
    }
    return level;
}

// Get the depth of the element with id "level"
const depth = getDepth(targetLevel);

// Properly format and display the alert message
alert(`The level of the element is: ${depth}`);
