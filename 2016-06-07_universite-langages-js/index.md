<!-- .slide: data-background="#ff9900" -->
# Université des langages - JS



<!-- .slide: data-background="#0af" -->
## Déroulement de la soirée

- Historique
- Le JS de maman
- Le JS de papa
- Pratiquons !



<!-- .slide: data-background="#00ffc4" -->
## Historique

- Au début : WWW était du print
- 1995: Java (Sun), **JS** créé par Brendan Eich (Netscape)
- IE4 fait gagner la guerre des navigateurs
- 2004: Mozaic Godzilla => **Mozila**
- 2008: **Chrome** : JavaScript enfin performant !
- 2009: ES5, Chrome et **Node.JS**
- Puis en 2015 => **ES6** !

Notes:
JS anciennement appelé LiveScript
Netscape a remplacé appelé NCSA Mosaic
A la mort de netscape JS passé à ecma international



<!-- .slide: data-background="#ff9eef" -->
## Le JS à Maman (ES5)

- Variables
- Fonctions
- Assertions
- Scopes
- closures
- This
- Prototypes


<!-- .slide: data-background="#ff9eef" -->
## Variables

```javascript
// Un commentaire
var maVariable; // undefined

var unNombre = 1;
var chaineDeCaractere = 'toto'; /* doubleQuote ça marche aussi */
var booleen = true; // false
maVariable = null;
maVariable = uneFonction;
maVariable = unNombre;

unTableau = [1, true, 'une string', {}];
unObject = {
  cle: 1,
  cle2: {
     toto: 'tata'
  }
  cle4: [1, 2, 3, 4]
};
```


<!-- .slide: data-background="#ff9eef" -->
## Les fonctions

```javascript
// fonction nomée
function multiplication (param1, param2) {
  return param1 * param2;
}

multiplication(2, 2); // retourne 4

// Une fonction est un objet
console.log(multiplication.name); // 'multiplication'

// Fonction anonyme
var multiplication = function () { /*...*/ }
```


<!-- .slide: data-background="#ff9eef" -->
## Assertions

```javascript
'1' == 1; // true
true == 'true'; // true

NaN == NaN; // true
```

** Coercition du type ! **


<!-- .slide: data-background="#ff9eef" -->
![WTF!](http://gif.co/rHOV.gif)


<!-- .slide: data-background="#ff9eef" -->
## Assertions

Toujours utiliser un triple égale, qui ne convertie pas le type

```javascript
1 === 1; // true
true !== false; // true

var variable1 = true;
var variable2 = false;
if (variable1 || variable2) {
   console.log('ça passe');
}
else if (variable1 && variable2) {
   console.log(('ça passe pas x2');
}
var variable = null || 'toto'; // 'toto'
```


<!-- .slide: data-background="#ff9eef" -->
## Boucles

Du classique : `for` et `while`

```javascript
var it = 0;
while (it < 10) {
  it++;
}

for (var i = 0; i < 10; i++;) {}

for (var i in [1, 'a', 3, '5']) {
   console.log(i); // 0, puis 1, puis 2, puis 3
}
```


<!-- .slide: data-background="#ff9eef" -->
## Scope
Scope = portée d'un symbole

Scope d'une variable = fonction

```javascript
function scope () {
  var answer1 = foo();

  function foo () { return 42; }

  var answer2 = foo();

  if (true) {
    var banana = 'banana';
  }
  console.log(banana); // 'banana';
}
```
Notes: On peux déclarer les fonctions dans n'importe quel ordre


<!-- .slide: data-background="#ff9eef" -->
## Closure

Une fonction capture le scope parent !

```javascript
var bar = 'hellow';

function foo () { 
    console.log(bar);
}

foo();    // 'hello'

bar = 'world';

foo();   // 'world'
```


<!-- .slide: data-background="#ff9eef" -->
## This

le mot clé this fait référence à un scope, mais lequel ?

```javascript
function () {
    function foo() { console.log(this); }
    
    foo();                          // this = scope appelant
    new foo();                      // this = instance de la classe
    var object = { bar: foo };
    object.bar();                   // this = object
    foo.call(object);               // this = object
}
```


<!-- .slide: data-background="#ff9eef" -->
## Prototype

Le JS n'est pas un langage Objet, même si tout est objet
Le JS est un langage prototypé

```javascript
function chien () {
 this.crie = functio () {
  console.log('miaou');
 }
}
```
```javascript
function chien () { }
chien.prototype.crie = function () {
  console.log('miaou');
};
```

Notes: Le prototype d'un objet est utilisé pour fournir de façon dynamique des propriétés aux objets qui héritent du prototype
http://blog.xebia.fr/2013/06/10/javascript-retour-aux-bases-constructeur-prototype-et-heritage/



<!-- .slide: data-background="#00a6ff" -->
## Le JS à la papa (ES Next)

- `Let` et `Const`
- Arrow function
- Classes
- Promises
- Generators
- Modules
- Autres nouveautés ES6-7
- La suite


<!-- .slide: data-background="#00a6ff" -->
## Un tas de nouveautés !

2009 -> 2015 = 6 ans de nouveauté d'un coup !

![](http://gif.co/qswj.gif)


<!-- .slide: data-background="#00a6ff" -->
## Des sprints de 1 an

![](http://gif.co/o70L.gif)


<!-- .slide: data-background="#00a6ff" -->
## Rétrocompatibilité !

![](/2016-06-07_universite-langages-js/javascript.png)


<!-- .slide: data-background="#00a6ff" -->
## `let` et `const`

Des variables et constantes bien scopé !

```javascript
for (let i in [1, 0, 4]) {
    const test = 'une constante';
    test = 'une autre valeur'; // KO
}

console.log(i); // undefined
```


<!-- .slide: data-background="#00a6ff" -->
## Bye bye les `var`

![](http://gif.co/o4Yb.gif)


<!-- .slide: data-background="#00a6ff" -->
## Arrow function

```javascript
function () {
    this.test = [1, 2, 4, 5];
    this.multiple = 2;
    
    let firstWay = this.test.map((value) => {
        return this.value * this.multiple;
    });
    
    const secondWay = this.test.map( x => x * this.multiple);
}
```

Une manière d'avoir des fonction sans perdre le `this` !


<!-- .slide: data-background="#00a6ff" -->
## Classes

```javascript
class chien () extends animal {
    constructor () {
      super();
    }
    
    uneMethode () {
       return 42;
    }
    
    static uneMethodeStatic() { return 43; }
}
```


<!-- .slide: data-background="#00a6ff" -->
## Ce n'est que du sucre !

![](http://gif.co/urQJ.gif)


<!-- .slide: data-background="#00a6ff" -->
## Promises

```javascript
anAsyncCall()
    .then((data) => {
        return data.userId;
    })
    .then((userId) => anotherAsyncCall(userId) )
    .then((dataOfSecondCall) => {
        console.log('yolo je chaine les promesses', dataOfSecondCall);
    })
    .catch((err) => {
        console.error(err);
    });
```


<!-- .slide: data-background="#00a6ff" -->
## Promises

```javascript
function anAsyncCall() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject(new Error('L\'aléatoire ne vous aime pas !');
            }
            resolve(42);
        }, 500);
    });
}
```


<!-- .slide: data-background="#00a6ff" -->
## Generator

```javascript
function *countTo3() {
      yield 1;
      yield 2;
      yield 3;
}

let iterator = countTo3();
 
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Notes: La puissances des coroutines !!


<!-- .slide: data-background="#00a6ff" -->
## Modules

Module A
```javascript
export let name = 1;
```

Module B
```javascript
import {name} from 'moduleA';

console.log(name); // 1
```

Fonctionne avec tous les symboles


<!-- .slide: data-background="#00a6ff" -->
#### Autres nouveautés ES6-7

- Objets Littéraux
- Templates Literals
- Destructuring
- Opérateur Rest et spread
- Symbols
- Iteratérables
- Boucles for...of
- Defaults values
- Map / WeakMap | Set / WeakSet
- Opérateur de puissance
- Proxy function
- Nouvelles fonctions utilitaires


<!-- .slide: data-background="#00a6ff" -->
## La suite

- D'autres fonctions utilitaires
- Nouvelle API de calcul bas niveau
- Async function



# Pratiquons !

- [Code Combat](https://codecombat.com)
- [Coding Game](https://www.codingame.com)
- [NodeSchool](http://nodeschool.io/)
- [plunker](https://plnkr.co/)
- [jsfiddle](https://jsfiddle.net/)

- [**ES6 katas**](http://es6katas.org/)



<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Ce que nous n'avons pas vu

- Objets Littéraux
- Templates Literals
- Destructuring
- Opérateur Rest et spread
- Symbols
- Iteratérables
- Boucles for...of
- Defaults values
- Map / WeakMap | Set / WeakSet
- Opérateur de puissance
- Proxy function


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Templates Literals

```javascript
console.log(`Combien font 2 + 2  ? ${2 + 2}`);
// Combien font 2 + 2 ? 4

let rang = 'premier';
console.log(`"J'aime bien la personne au ${rang} rang"
 ... car elle est assise
 et qu'elle me laisse passer des lignes`);
// "J'aime bien la personne au premier rang"
//    ... car elle est assise
//    et qu'elle me laisse passer des lignes
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Destructuring

```javascript
let unTableau = [1, 'paul', 4, 5];

let [val1, val2, val3] = unTableau;

console.log(val1, val2, val3); // 1, paul, 4
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Opérateur ... (Rest et spread)

```javascript
let unTableau = [1, 'paul', 4, 5];

let [val1, ...autres] = unTableau;
console.log(val1);   // 1
console.log(autres); // ['paul', 4, 5]

function uneFonction(arg1, ...autreArgs) {
   return autreArgs;
}

unFonction(1, 2, 3, 4, 5, 6); // [2, 3, 4, 5, 6]

function unAutreFonction(x, y, z) {
   console.log(x, y , z);
}
unAutreFonction(...unTableau);
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Symbols

```javascript
let symbol = Symbol(); // génére un ID unique

Symbol("toto") === Symbol("toto"); // false !
```
Les `symbol` sont itérable


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Iteratérables

Les itérables implémente la fonction `[Symbol.iterator]`

```javascript
let uneChaîne = 'yop';
typeof uneChaîne[Symbol.iterator]  // 'function'

iterator.next()  // { value: "y", done: false }
iterator.next()  // { value: "o", done: false }
iterator.next()  // { value: "p", done: false }
iterator.next()  // { value: undefined, done: true }

let monItérable = {}
monItérable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myItérable] // [1, 2, 3]
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Boucles for...of

```javascript
for (let x of [1, 'x', 3, 45]) {
    console.log(x); // 1, puis 'x', puis 3, puis 45
}
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Defaults values

```javascript
function uneFonction(param1 = 34, param2 = 'unString') {
    console.log(param1, 'et' , param2);
}

uneFonction(); // 34 et unString
uneFonction('ben', 'jerry'); // ben et jerry
uneFonction(null, 35); // null et 35
uneFonction(undefined, 35); // 34 et 35
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Map | Set

```javascript
let uneMap = new Map();
uneMap.set('clé', 'valeur');
uneMap.set(1, 4); // La clé peut être n'importe quoi !

console.log(unMap.get('clé')); // valeur
console.log(unMap.get(1)); // 4

let unSet = new Set();
unSet.set(6);
unSet.set(0);
unSet.set('jeu set et map');

for (let val of unSet.values()) {
 console.log(val); // 6 puis 0 puis jeu set et map
}
```
Ils sont itérables !


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## WeakMap | WeakSet

Identique aux Map | Set mais :
 - ne sont pas itérable
 - n'influence pas le grabage collector (les valeurs peuvent disparaitre si les clés disparaissent)
 
```javascript
let unWeakMap = new WeakMap();
let unWeakSet = new WeakSet();
```
 


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Opérateur de puissance

```javascript
let resultat = 2 ** 3;

console.log(resultat); // 8

resultat **= 2;

console.log(resultat); // 64
```


<!-- .slide: data-background="rgb(255, 175, 70)" -->
## Proxy function

Intercepte les opérations sur les objets

```javascript
let handler = {
    get: function(cible, nom){
        return nom === 'd' ? 'pas de gros mots !' : cible[nom];
    },
    set: function (cible, nom, valeur) {
        cible[nom] = valeur || 42;
    }
};

let p = new Proxy({}, handler);

p.c = 36;
p.r = undefined;

console.log(p.c, p.d, p.r); // 36, 'pas de gros mots !', 42
```



<!-- .slide: data-background="#59d0ffcc" -->
## Bonus 2 - Ce qui va venir

- Async function
- SIMD API
- 3-4 fonctions utilitaires
- Trailing commas


<!-- .slide: data-background="#59d0ffcc" -->
## Async / await

```javascript
async function maFunction() {
    const userInfo = await getUserInfo();
    const userID = userInfo.id;
    
    const friendList = await getFriend(userID);
    
    console.log('friend list of ', userInfo.name, ':', friendList);
};
```
En attendant, utilisez les coroutines !


<!-- .slide: data-background="#59d0ffcc" -->
## SIMD API

Sigle Instruction Multiple Data

Faire plusieurs opérations en une action
```javascript
const a = new SIMD.Float32x4(1, 2, 3, 4);
const b = new SIMD.Float32x4(5, 6, 7, 8);
const c = SIMD.Float32x4.add(a,b); // float32x4[6,8,10,12]
```

Des pérformances décuplé !


<!-- .slide: data-background="#59d0ffcc" -->
## Trailing commas

```javascript
const test = {
    clef: 2,
    clee: 3, // la virgule n'est plus toléré mais dans les specs...
};
```
Pour du code review avec moins de bruit !

Perso j'aime pas, trop verbeux...