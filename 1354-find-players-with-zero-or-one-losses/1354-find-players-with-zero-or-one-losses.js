/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Map(), losers = new Map()
    let noLosses = [], oneLoss = []

    // Set winners and losers plus occurrence volume into hash maps
    for (let i=0; i < matches.length; i++){
        winners.set(matches[i][0], (winners.get(matches[i][0]) || 0) + 1)
        losers.set(matches[i][1], (losers.get(matches[i][1]) || 0) + 1)
    }

    // Find players with no losses
    for (let player of winners.keys()){
        if (!losers.has(player)) noLosses.push(player)
    }

    // Find players with one loss
    for (let [player, losses] of losers.entries()){
        if (losses === 1) oneLoss.push(player)
    }

    return [[...new Set(noLosses)].sort((a,b) => a - b), oneLoss.sort((a,b) => a - b)]
};