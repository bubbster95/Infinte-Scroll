import React from 'react';
import './style.css';

export default class WordGenerator extends React.Component {
    render() {
        let object = 
        {"first":
            ["Bill","Jerry","Sue","Cindy","Martha","Jake","Andy","Pam","Jimbo", "Eric", "Heath", "Gale", "Tori", "Jeune", "Lea", "Alex", "Jackie", "Dave", "Sam", "Zack", "Donna", "Congo", "Jeff", "Deidra", "Levi", "Carl", "Wolfhouse", "Jill", "Jacob", "Gerald", "Abbigale", "Rose", "Steven", "Peter", "Ronaldo", "Lars", "Sadie", "Greg", "Kendal", "Chris"],
        "last":
            ["Bright","Smith","Jolie","Carpenter","Fredericks","Robinson","Styles","Johnson","Perry","Anderson","Williams","Brown","Martin","White","Fletcher","Tardigrade","Plasson","Houle","Baker","Adams","Jones","Garcia","Miller","Davis","Rodriguez","Thomas","Jackson","Clark","Lopez","Wilson","Young","Scott","Johnson","Roberts","Campbell","Taylor","Gonzalez"]};
        let first = object.first[Math.round(Math.random() * (object.first.length-1))];
        let last = object.last[Math.round(Math.random() * (object.last.length-1))];
        return first + " " + last;
    }
}