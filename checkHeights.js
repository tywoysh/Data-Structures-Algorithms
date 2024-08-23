const heightChecker = (heights) => {
    // Create an expected array (sorted)
    const expected = [...heights].sort((a,b) =>a-b)
    //Create a counter variable
    let counter = 0;
    // Loop through expected array and compare to given heights array
    for(let i = 0; i < expected.length; i++) {
        if (heights[i] !== expected[i]) {
            counter++
        }
    }
    // Return counter variable
    return counter;
}

console.log(heightChecker([2,7,4,2,1,3]))