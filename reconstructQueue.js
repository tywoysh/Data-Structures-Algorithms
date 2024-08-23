/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    //First number represents height of person
    //Second number represents amount of people as tall or taller, in front of them in line


    // First, sort by height and add them to the queue.  Also sort them by ascending second value
    let queue = people.sort((a,b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })

    // Then, check each item in the queue and insert using splice
    let reconstructed = []
    for (let i = 0; i < queue.length; i++) {
        let person = queue[i];
        reconstructed.splice(person[1], 0, person)
    }
    return reconstructed

};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))