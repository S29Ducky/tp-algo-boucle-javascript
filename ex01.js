function findMax(arr) {
	let max = arr[0]; // Initialiser max avec le premier élément du tableau

	for (let i = 0; i < arr.length; i++) {
		// Commencez la boucle à 1, car le premier élément est déjà dans max
		if (arr[i] > max) {
			max = arr[i]; // Mettre à jour max si un élément plus grand est trouvé
		}
	}

	return max;
}

console.log(findMax([1, 3, 7, 2])); // 7
console.log(findMax([-5, -1, -10])); // -1
