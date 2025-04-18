//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows {
    constructor(year, rating, length, actors){
        this.year = year;
        this.rating = rating;
        this.length = length;
        this.actors = actors;
    }
    ShowStarting() {
        console.log('SHOW STARTING in 3 2 1')
    }
    ShowEnding() {
        console.log('SHOW STARTING in 3 2 1')
    }
    Credits() {
        console.log('SHOW STARTING in 3 2 1')
    }
}

let bridgerton = new NetflixShows (2009, 9.0, 2.5, 'Tony Stark, Spongebob, Batman');

