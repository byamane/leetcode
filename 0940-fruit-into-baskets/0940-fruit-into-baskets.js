/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let fruitCount = new Map()
    let left = 0
    let maxFruits = 0

    for (let right=0; right < fruits.length; right++){
        fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1) // set fruit into hash map every iteration

        while (fruitCount.size > 2) {
            // When fruit count is greater than 2, delete left fruit
            fruitCount.set(fruits[left], fruitCount.get(fruits[left]) - 1) 

            // If fruit in hashMap has no more occurrences, delete from hashMap
            if (fruitCount.get(fruits[left]) === 0) {
                fruitCount.delete(fruits[left])
            }

            left++
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits
};