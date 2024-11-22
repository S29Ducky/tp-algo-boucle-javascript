// ex00.js

function sumArray(arr) {
    let resulta = 0; 

    for(let i = 0; i < arr.length; i++){
        resulta = resulta + arr [i]
    }
}

// Exemples de test :
console.log(sumArray([1, 2, 3, 4])); // Résultat attendu : 10
console.log(sumArray([10, -2, 5])); // Résultat attendu : 13