/*
Rank you comfort with the following material on a scale of 0 - 5:

5 - I got this! I am ready to code

*/



// for loop ints 1-20
for(let i = 1; i <= 20; i++)
console.log(i)
//evens 0 - 200
for(let i = 0; i <= 200; i++){
    console.log(i);
}

//fizzbuzz 1-100
for(let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0){
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

//wild wild life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//change plantee age
plantee.splice(2,1,5001);
console.log(plantee);
//change wolfy hometown
wolfy.splice(3,1,'Gotham City');
console.log(wolfy);
//dart add second hometown
dart.push('Hawkins');
console.log(dart);
//wolfy change name
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);
//yell at ninja turtles
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"] 
for(let turtle of turtles){;
    console.log(turtle.toUpperCase());
}

//methods, revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//log index of titanic
console.log(favMovies[8]);
//sort favMovies array
favMovies.sort();
//pop favMovies
favMovies.pop();
//push guardians of galaxy favMovies
favMovies.push('Guardians of the Galaxy');
//reverse favMovies array
favMovies.reverse();
//shift favMovies;
favMovies.shift();
//unshift favMovies
favMovies.unshift('Terminator 2: Judgment Day');
//find index of Django
console.log(favMovies.indexOf('Django Unchained'));
//splice Django for Avatar
favMovies.splice(15,1,'Avatar');
//slice last half of array, programmatically
//---- testing last halfyness for splice--- 
//for(let i = favMovies.length / 2 - 1; i <= favMovies.length -1; i++){
//     console.log(favMovies[i]);
// }
//---the slice itself:
//favMovies.slice(favMovies.length / 2 -1);
//store slice in variable and log it
let sliceLastHalf = favMovies.slice((favMovies.length / 2) - 1, favMovies.length -1);
console.log(sliceLastHalf);
console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));//index 14. It's not gone because the instructions were to sort the array before popping it...
//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
//remove eggbert                    
whereIsWaldo.splice(1,1);
//remove neff, change to No One
whereIsWaldo[1].splice(2,1,"No One");
console.log(whereIsWaldo);
//access and log waldo
console.log(whereIsWaldo[2][1][1]);

/*Excited Kitten
Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
*/
let catArray = [
    "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."
]
//let result = catArray [Math.floor(Math.random() * catArray.length)];
for(let i = 0; i <= 20; i++){
    let result = catArray [Math.floor(Math.random() * catArray.length)];
    if (i % 2 == 0){
        console.log(result);
    }
    console.log("Love me, pet me! HSSSSSS!");
}