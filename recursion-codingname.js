function question4(arr, callback) {
    let arrCopy = [...arr] // copy the array

    if (arrCopy.length === 0){
        return true
    }

    if (callback(arrCopy[0])) {
        arrCopy.shift() // remove first element
        return question4(arrCopy, callback) // IMPORTANT: DO THE RETURN
    } else {
        return false
    }
}

function productOfArray(arr) {
    if (arr.length === 0) return 1
    return arr.shift() * productOfArray(arr)
}

function contains(obj, prop) {
    for(let key in obj) {
        if(typeof(obj[key]) === 'object') {
            return contains(obj[key], prop)
        }

        if(obj[key] === prop) {
            return true
        }
    }
    return false
}
