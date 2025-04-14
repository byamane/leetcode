/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    // Time complexity: O(n)
    // Space complexity: O(n)

    // A row is one array in grid
    // A column is same index in every array in grid

    const rowCounts = new Map()
    let ans = 0

    // Iterate through each array of grid
    for (const row of grid) {
        // Create key by concatenating the numbers in each row
        const key = row.join(',')
        // Set the rowCounts map equal to how many appearances that concatenated string is found in grid
        rowCounts.set(key, (rowCounts.get(key) || 0) + 1)
    }

    // Iterate over the length of first row in grid to build out each column
    for (let j = 0; j < grid[0].length; j++) {
        const col = []
        // For each row value, grab the corresponding column value in every array in grid to build each column
        for (let i = 0; i < grid.length; i++) {
            col.push(grid[i][j])
        }
        const colKey = col.join(',')
        ans += rowCounts.get(colKey) || 0
    }

    return ans
};