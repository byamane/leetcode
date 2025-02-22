/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}

    for (let i=0; i < this.length; i++) {

        let values = this[i]
        let key = fn(values)

        if (!obj[key]) {
            obj[key] = []
        }

        obj[key].push(values)
    }

    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */