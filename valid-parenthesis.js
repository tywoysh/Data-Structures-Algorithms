const isValid = (str) => {

    const items = {
        '(':')',
        '{':'}',
        '[':']'
    };

    const stack = [];

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        const currentElem = str[i];
        if(currentElem in items){
            stack.push(currentElem);
        } else {
            const lastElement = stack.pop()
            if (currentElem !== items[lastElement]) {return false}
        }
    }

    return stack.length === 0

}