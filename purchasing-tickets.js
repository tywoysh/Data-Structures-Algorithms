const purchaseTickets = (tix, person) => {
    // Create counting variable
    let time = 0;
    // Loop through array
    while(tix[person] > 0){
        for(let i = 0; i < tix.length; i++) {
            if(tix[i] > 0) {
                tix[i]--;
                time++;

                if(tix[person] === 0) {
                    return time;
                }
            }
        }
    }

    // return counting variable
}

console.log(purchaseTickets([2,3,2], 2))






