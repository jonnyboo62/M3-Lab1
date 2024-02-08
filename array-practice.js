// 1
window.console.log("1");
var favorite_movies = ["Arrival", "Inside Out", "Annihilation", "Call Me By Your Name", "Hunger Games"]
window.console.log(favorite_movies[1]);
window.console.log("\n");

// 2
window.console.log("2");
var movies = new Array(5);
for (var i = 0; i < movies.length; i++) {
    movies[i] = "Arrival";
}
window.console.log(movies[0]);
window.console.log("\n");

// 3
window.console.log("3");
movies.splice(2, 0, "Dune")
window.console.log(movies.length);
window.console.log("\n");

// 4
window.console.log("4");
var movies = ["Arrival", "Inside Out", "Annihilation", "Call Me By Your Name", "Hunger Games"];
delete movies[0];
window.console.log(movies);
window.console.log("\n");

// 5
window.console.log("5");
var movies = ["Arrival", "Inside Out", "Annihilation", "Call Me By Your Name", "Hunger Games", "Dune", "Barbie"];
for (var i in movies){
    window.console.log(movies[i]);
}
window.console.log("\n");

// 6
window.console.log("6");
for (var movie of movies){
    window.console.log(movie);
}
window.console.log("\n");

// 7
window.console.log("7");
movies.sort()
for (var movie of movies){
    window.console.log(movie);
}
window.console.log("\n");


// 8
window.console.log("8");
leastFavMovies = ["Yogi Bear", "Wonka", "Justice League"]
window.console.log("Movies I like:");
window.console.log("\n");
for (var movie of movies){
    window.console.log(movie);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
for (var movie of leastFavMovies){
    window.console.log(movie);
}
window.console.log("\n");

// 9
window.console.log("9");
var newMovies = leastFavMovies.concat(movies)
newMovies.sort().reverse()
window.console.log(newMovies);
window.console.log("\n");

// 10
window.console.log("10");
var lastMovie = newMovies.pop()
window.console.log(lastMovie);
newMovies.push(lastMovie)
window.console.log("\n");

// 11
window.console.log("11");
window.console.log(newMovies[0]);
window.console.log("\n");

// 12
window.console.log("12");
var indicesDisliked = [];
for (var i = 0; i < newMovies.length; i++) {
    if (leastFavMovies.includes(newMovies[i])) {
        indicesDisliked.push(i);
    }
}
for (var i = 0; i < indicesDisliked.length; i++) {
        newMovies[indicesDisliked[i]] = favorite_movies[i];
}
window.console.log(newMovies);
window.console.log(indicesDisliked);
window.console.log("\n");

// 13
window.console.log("13");
var movies = [["Arrival", 1], ["Inside Out", 2], ["Annihilation", 3], ["Call Me By Your Name", 4], ["Hunger Games", 5]];
var movieNames = movies.map(function(movie) {
    return movie[0];
});
window.console.log(movieNames)
window.console.log("\n");

// 14
window.console.log("14");
var showEmployee = function(employees) {
    console.log("Employees:");
    console.log("\n");
    for (var employee of employees){
        window.console.log(employee.toUpperCase());
    }
}
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
showEmployee(employees)
window.console.log("\n");

// 15
window.console.log("15");
function filterNothing(inputArray) {
    return inputArray.filter(Boolean);
}
console.log(filterNothing([58, '', 'abcd', true, null, false, 0]));
window.console.log("\n");

// 16
window.console.log("16");
function pullRandom(inputArray) {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
}
window.console.log(pullRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
window.console.log("\n");

// 17
window.console.log("17");
function findLarges(inputArray) {
    return Math.max(...inputArray);
}
window.console.log(findLarges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
window.console.log("\n");
