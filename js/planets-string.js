(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //original answer I added <br> tags into the array
var breakThePlanets = planetsString.replaceAll("|","<br>");
var breakPlanetArray = breakThePlanets.split(' ');
console.log(breakPlanetArray);

//Walkthrough this answer is to get the planets back into a string and use <br> tags in between the planets.
console.log(planetsArray.join('<br>'))

//bonus
    var output = '<ul><li>'+ planetsArray.join('</li><li>')+ </li></ul>';
        document.write(output);

})();
