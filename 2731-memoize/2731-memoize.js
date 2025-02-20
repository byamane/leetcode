/**
 * @param {Function} fn
 * @return {Function}
 */
 
function memoize(fn) {
    const memoMap = new Map()

    return function(...args) {
        const formattedArgs = JSON.stringify(args) // Format args from array/int to string for setting map keys 
        
        // Check map key for existing value 
        // Retrieve and return value if so
        if (memoMap.has(formattedArgs)) return memoMap.get(formattedArgs) 
        
        const newMapValue = fn(...args)
        memoMap.set(formattedArgs, newMapValue)
        return newMapValue
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */