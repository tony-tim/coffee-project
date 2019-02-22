"use strict"


/*--Displays the list of search terms to the page ---------------------------------------------------------------------------------------- */

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<div class = "container"><div class = "coffee_name"> <h1>' + coffee.name + '</h1> </div>';
    html += '<div class = "coffee_roast"<p>' + "Roast Style: " + coffee.roast + '</p> </div> </div>';
    html += '</tr>';

    return html;
}

/*--creates a html list of all coffees that match search terms---------------------------------------------------------------------------------------- */

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

/*--Creates an array of the search items---------------------------------------------------------------------------------------- */

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "display all") {
            filteredCoffees = coffees
        }

    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

/*------User added coffee--------*/

function userCoffee(e) {
    e.preventDefault();
    var roast = document.querySelector("#userRoastSelection").value;
    var newCoffee = document.querySelector("#userCoffee").value;
    var id = coffees.length+1;

    var newUserCoffee = {
        id: id,
        roast: roast,
        name: newCoffee

    };

    coffees.push(newUserCoffee);
    updateCoffees(e);
    updateStoredCoffee(coffees);

}

function updateStoredCoffee(coffees) {
    var string = JSON.stringify(coffees);
    localStorage.setItem('coffees', string);
}

// function removeUserCoffee(e) {
//     localStorage.removeItem("coffees");
//     updateCoffees(e);
//     location.reload();
// }



var addUserCoffee = document.querySelector('#coffee-button');

addUserCoffee.addEventListener('click', userCoffee);

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

/*--display all function ---------------------------------------------------------------------------------------- */


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');



tbody.innerHTML = renderCoffees(coffees);



/*--Search Bar Things ---------------------------------------------------------------------------------------- */

// function searchFunction() {
//     // Declare variables
//     var input, filter, i, txtValue;
//     input = document.getElementById('userInput');
//     filter = input.value.toUpperCase();
//     // ul = document.getElementById("myUL");
//     // li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < coffees.length; i++) {
//         var a = coffees[i].getElementsByTagName("[]");
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }