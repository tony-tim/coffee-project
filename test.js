console.log("hello world");
var userSearch = document.getElementById('search');

var test = ['hi', 'hello', 'whaddup'];

var testFunction = function() {

    if (userSearch.value === test[0] || test[1] || test[2]){
        console.log(userSearch.value)
    } else{
        console.log("We couldn't find what you are looking for!")
    }
};

document.querySelector('form.search-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    // console.log(userSearch.value);
});