// -------------------------------  LEVEL 1


/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

console.log(`\nExercise One:\n-------------`)

function biggerThanZero(number) {
    const result = number > 0;
    console.log(`The number ${number} is bigger than 0: ${result}`)
}

tryOnce = biggerThanZero(-3);
tryTwice = biggerThanZero(0);
tryThrice = biggerThanZero(300);


/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

console.log(`\nExercise Two:\n-------------`)

function biggerThanHundred(number1, number2) {

const result = number1 + number2 > 100;
console.log(`Adding ${number1} and ${number2} we get a number bigger than 100: ${result}`);
}

test1 = biggerThanHundred(1, 28);
test2 = biggerThanHundred(8, 92);
test3 = biggerThanHundred(89, 14);

/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// "de kat krabt de krullen van de trap" geeft "De kat krabt de krullen van de trap"
// "programmeren is super leuk!" geeft "Programmeren is super leuk!"

console.log("\nExercise Three:\n-------------")

function toUpperCase(sentence) {
    let sentenceCapitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    console.log(sentenceCapitalized);
}

const firstSentence = "de kat krabt de krullen van de trap"
const secondSentence = "programmeren is super leuk!"

toUpperCase(firstSentence);
toUpperCase(secondSentence);

/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// "Hallo" geeft string
// [1, 2, 3] geeft object (ja echt!)

console.log("\nExercise Four:\n-------------")

function dataTypePrinter(value) {
    let dataType = typeof value;
    if(dataType === "string") {
        console.log(`${value} is a ${dataType}.`)
    } else if (dataType === "undefined") {
        console.log(`${value} is ${dataType}.`)
    } else {
        console.log(`${value} is an ${dataType}.`)
    }
}

argumentOne = dataTypePrinter({name: 1});
argumentTwo = dataTypePrinter(undefined);
argumentThree = dataTypePrinter("Hallo");
argumentFour = dataTypePrinter([1, 2, 3]);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is weet je niet van tevoren - het zouden zomaar 100 entries kunnen zijn.
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier géén array- of string methoden voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

console.log("\nExercise Five:\n-------------")

function makeWord(arrayOfStrings) {
    let completeWord = "";

    for(let i = 0; i < arrayOfStrings.length; i++) {
        completeWord = completeWord + arrayOfStrings[i];
    }
    console.log(completeWord);
}

const firstWord = makeWord(["abra", "cadabra"]);
const extraWord = makeWord(["sim", "sa", "la", "bim!"])
const secondWord = makeWord(["a", "b", "c", "d", "e"] );

/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// "Frontend web development" geeft "development"
// "De eindopdracht telt voor 30 ECTS" geeft "eindopdracht"
// "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken." geeft "technologie"

console.log("\nExercise Six:\n-------------");

function longestWord(sentence) {
    let longestWord = "test";
    let sentenceAsArray = sentence.split(" ");
    for (let i = 0; i < sentenceAsArray.length; i++) {
        const word = sentenceAsArray[i];

        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const sentenceOne = "Frontend web development";
const sentenceTwo = "De eindopdracht telt voor 30 ECTS";
const sentenceThree = "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken.";

console.log(`The longest word in the sentence:\n "${sentenceOne}" \nis:\n\n     ${longestWord(sentenceOne)} \n\n`);
console.log(`The longest word in the sentence:\n "${sentenceTwo}" \nis:\n\n     ${longestWord(sentenceTwo)} \n\n`);
console.log(`The longest word in the sentence:\n "${sentenceThree}" \nis:\n\n     ${longestWord(sentenceThree)} \n\n`);

// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

console.log("\nLevel 2:\n-------------");
console.log("\nExercise 6a:\n-------------");

function readBackwards(word) {
    return word.split("").reverse().join("");
}

const first = "koekje";
const second = "vrienden";
const third = "libellebil"
const bonus = "was it a car or a cat i saw"

console.log(`The dutch word "${first}" read backwards becomes: "${readBackwards(first)}"\n`);
console.log(`The dutch word "${second}" read backwards becomes: "${readBackwards(second)}"\n`);
console.log(`The dutch word "${third}" read backwards becomes: "${readBackwards(third)}"\n`);

console.log(`\nBut what do you read when spelling the english sentence "${bonus}" backwards?\nAnswer: ${readBackwards(bonus)}`);

// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

console.log("\nExercise 6b:\n-------------");

function thisIsApalindrome(word) {
    let palindrome = readBackwards(word);
    return word === palindrome;
}

const lepel = "lepel";
const madam = "madam";
const vrienden = "vrienden";

console.log(`The dutch word "${lepel}" is a palindrome: ${thisIsApalindrome(lepel)}`);
console.log(`The dutch word "${madam}" is a palindrome: ${thisIsApalindrome(madam)}`);
console.log(`The dutch word "${vrienden}" is a palindrome: ${thisIsApalindrome(vrienden)}`);

/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

console.log("\nExercise 7:\n-------------");

function numberOfTimes(sentence, letter) {
    let counter = 0;
    for(let i = 0; i < sentence.length; i++) {
        if(sentence.charAt(i) === letter) {
            counter = counter + 1;
        }
    } return counter;
}

const strOne = "Hans en marietje lopen naar de supermarkt";
const letterOne = "e";
const strTwo = "Hans is zijn mondkapje vergeten";
const letterTwo = "a";

console.log(`The dutch sentence "${strOne}" contains the letter "${letterOne}" ${numberOfTimes(strOne, letterOne)} times.`);
console.log(`The dutch sentence "${strTwo}" contains the letter "${letterTwo}" ${numberOfTimes(strTwo, letterTwo)} times.`);

/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

console.log("\nExercise 8:\n-------------");

function randomWord() {
    const library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomWord = "";

    for(let i = 0; i < 9; i++) {
        let randomletter = library[Math.floor(Math.random()*library.length)];
        randomWord = randomWord + randomletter
    }
    return randomWord;
}

console.log(`Your automatically generated password is: ${randomWord()}`);
console.log(`Your automatically generated password is: ${randomWord()}`);
console.log(`Your automatically generated password is: ${randomWord()}`);

// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

console.log("\nExercise 9:\n-------------");

function lastEntry(array, n) {

    if(n === undefined) {
        let number = array.pop();
        array.push(number);
        console.log(`\nThe current entry is: ${array} \nThe last number is: ${number}`);
    }

    if(typeof n === 'number') {
        let lastEntries = [];
        for(let i = array.length-n; i < array.length; i++) {
            lastEntries = lastEntries + " " + array[i];
        }
        console.log(`\nThe current entry is: ${array} and ${n} \nThe last ${n} entries in this array are: ${lastEntries}`)
    }
}

lastEntry([3, 6, 9, 17, 4, 6, 25, 8]);
lastEntry([46, 65, 34, 204, 190, 89], 3);
lastEntry([24, 05, 1980, 27, 02, 2019], 2);

/* Opdracht 10 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

console.log("\nExercise 10:\n-------------");

function fizzBuzz() {

    for (let i = 1; i < 101; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('Fizz Buzz!');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0 ) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

console.log("\nExercise 11:\n-------------");

function hallo(names) {
    if (names.length > 2) {
        indexOfSecondLastName = names.length - 2;
        lastName = names.pop();
        secondLastName = names.pop();
        names.splice(indexOfSecondLastName, indexOfSecondLastName)
        console.log(`Hoi ${names.join(", ")}, ${secondLastName} en ${lastName}!`)
    } else {
        console.log(`Hoi ${names.join(" en ")}!`)
    }
}

hallo(["Nick", "Nova", "Mitchel", "Arjen"]);
hallo(["Piet", "Henk"]);
hallo(["A", "B", "C", "D", "E", "F"]);
