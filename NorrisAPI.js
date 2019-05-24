// Write two functions to interact with the Chuck Norris public API for jokes found here:
// https://api.chucknorris.io/

// The first function takes as input the joke category (string) and returns a joke (string) from the
// API. If the category isn’t valid, according to the API, return null.

function jokeCategory(str) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${str}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(contents) {
            console.log(JSON.stringify(contents))
        })
    }
    
    // The second function takes as input a string, searches for jokes containing that string, and
    // returns one of the returned jokes.
    
    function jokeSearch(str) {
        fetch(`https://api.chucknorris.io/jokes/search?query=${str}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(contents) {
            console.log(JSON.stringify(contents))
        })
}