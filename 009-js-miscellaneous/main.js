function displayElements(arr) {

    // to update the iteration
    let n = 0;

    return {

        // implementing the next() function
        next() {

            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}

const arr3 = ['h', 'e', 'l', 'l', 'o'];

const arrIterator3 = displayElements(arr3);

console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());