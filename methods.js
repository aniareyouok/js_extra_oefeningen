// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.

console.log('\nExercise 1a\n-------------');

emailadresses.push('m.westerbroek@novi.nl');
console.log(`E-mailaddressen van medewerkers: \n${emailadresses.join(", ")}`);

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.

console.log('\nExercise 1b\n-------------');

function emailList(list, newEmail) {
    list.push(newEmail);
    console.log(`${newEmail} has been added to the list of e-mailadresses:\n${list.join(", ")}`);
}

emailList(emailadresses, "aniareyouok@riseup.net");

/* Opdracht 2 */
// 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl

console.log('\nExercise 2a\n-------------');

function findEmail(list, newEmail) {
    if(list.includes(newEmail)) {
    console.log(`Yes, ${newEmail} is in our list of e-mailadresses!`)
    } else {
        console.log(`Sorry, we can't find ${newEmail} in our list of e-mailadresses.`)
    }
}

findEmail(emailadresses, "n.stuivenberg@novi.nl");
findEmail(emailadresses, "some@randomemail.com");

// 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.

console.log('\nExercise 2b\n-------------');



/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!


// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.


/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie
