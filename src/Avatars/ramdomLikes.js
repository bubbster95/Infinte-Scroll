import React from 'react';
import './style.css';

export default class LikesGenerator extends React.Component {
    render() {
        let object = 
        {"first":
            ["Going to the movies","Long walks on the beach","Going out for dinner","Spending other people's money","Going to the bar with pals","Riding shotgun in a sweet car","Hiking deep into the woods","Listening to smooth jazz","Playing the drums at 3AM", "Participating in yoga with goats", "Eating a large portion of beans", "Telling people off in traffic", "Holding hands with the one I love", "Golfing in the morning dew", "Talking about myself for hours", "Shopping for clothes to wear only once", "Beating kids at laser tag", "Playing Fortnight for hours", "Climbing mountains with no gear", "Standing completely still for hours", "Watching paint dry", "Tending to the garden", "Raking leaves well into winter", "Curling up by the fire with a good book", "Reading the comments on Youtube", "Programming using VS Code", "Teaching myself graphic design", "Baking pastries", "Flinging paint onto a canvas"],
        "mid":
            ["water polo","golf","hiking","baking","Martha Stewart","Snoop Dogg","standup comdey","The Office","harmonica", "jazz", "juggling", "trumpet", "ballet", "improv", "theatre", "theater", "didgeridoo", "snakes", "turtles", "monkeys", "animals", "icecream", "Netflix", "capoeira", "Monty Python", "coding", "React.js", "GitHub", "jousting", "driving", "fencing", "walking", "music", "photography", "bathing", "sun tanning", "movies", "laughing", "writing", "coloring"],
        "last":
            ["swimming in random ponds!","doing yoga in dangerous locations.","singing in quiet places.","dancing with wolves!","going to the flea market.","drawing Labradoodles!","painting in my garden.","jogging in shady neighborhoods.","buying fresh flowers!","being affectionate with loved ones.","playing guitar for people on the subway.","getting manie pedis!","playing sports with my friends.","reading a good book.","cooking dinner for my family.","going sightseeing around town.","meditationg in a calm place.","watching the sunrise one last time.","looking at old photos.","playing board games.","lighting scented candles.","visiting the museum.","calling a friend or family member.","volunteering at a soup kitchen.","wrestling with a crocodile.","getting a massage.","contemplating my existence?","stargazing in an open field.", "going to the library!"]};
        let first = object.first[Math.round(Math.random() * (object.first.length-1))];
        let mid = object.mid[Math.round(Math.random() * (object.mid.length-1))];
        let last = object.last[Math.round(Math.random() * (object.last.length-1))];
        return "Likes: " + first + ", " + mid + ", and " + last;
    }
}