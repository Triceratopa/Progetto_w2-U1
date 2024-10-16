/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
/*console.log(pets)
console.log (pets[0])
console.log(pets[1])
console.log(pets[2])
console.log(pets[3])
ho fatto in due modi poichè non sapevo quale fosse il migliore*/

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/*console.log(pets.sort())*/
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/*console.log(pets.reverse())*/
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*const firstRemoved=pets.shift()

pets.push(firstRemoved)
console.log(pets)*/
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

/*const licensePlate=
     ['as823456','as5743394','as38573']
  for(let i=0;i<cars.length;i++)  {
    cars[i].licensePlate=licensePlate[i]
  }
  console.log( cars)*/




/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
/*const newArray = [{
    brand: 'Tesla',
    model: 'Model 3',
    color: 'Pastel Black',
    trims: ['carbon fiber']
}]

for(let i=0; i<newArray.length;i++){
cars.push(newArray[i] )}
console.log(cars)
for(let i=0; i<cars.length;i++){
    .pop(trims)
}
console.log(cars)*/


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let  i= 0;i<justTrims.length;i++){
cars.push(justTrims[i])

} 
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(i=0;i<cars.length;i++){
    if(cars[i].color==='b'){
        
        console.log('Fizz' , )

    }else{
        console.log('Buzz')
    }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
/*let i =0



console.log(numericArray)*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = []

switch(charactersArray){
    case 'a': 0
    break; 
    case 'b': 1
    break; 
    case 'c': 2
    break; 
    case 'd': 3
    break; 
    case 'e': 4
    break; 
    case 'f': 5
    break; 
    case 'g': 6
    break; 
    case 'h': 7
    break; 
    case 'i': 8
    break; 
    case 'l': 9
    break; 
    case 'm': 10
    break; 
    case 'n': 11
    break; 
    case 'o': 12
    break; 
    case 'p': 13
    break; 
    case 'q': 14
    break; 
    case 'r': 15
    break; 
    case 's': 16
    break; 
    case 't': 17
    break; 
    case 'u': 18
    break; 
    case 'v': 19
    break; 
    case 'z': 20
    break; 
default:
}
charactersArray.push(alphabet)
console.log(alphabet)
