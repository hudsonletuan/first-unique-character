function firstUniqChar(s) {
    ```I aim to check each char from left to right once,
    all the unique characters are stored in an array
    so I can return the index of the first unique character later
    ```
    const sArr = s.split(""); //Split the characters of the string into an array
    let checked = []; //all the checked unique characters
    let dup = []; //all the duplicated characters
    for (let i = 0; i < sArr.length; i++) { //for loop to go through every character from left to right
        if (!checked.includes(sArr[i]) && !dup.includes(sArr[i])) { // if the character is not either in the unique list or duplication list, add it to the end of the unique list
            checked.push(sArr[i]);
        } else if (checked.includes(sArr[i])) { // if the character is already in the unique list, add it to the dup list and remove from the unique list
            dup.push(sArr[i]);
            checked.splice(checked.indexOf(sArr[i]), 1);
        }
    }
    if (checked.length > 0) { // if the unique list is NOT empty, the first char in the unique list is the first unique char in the string
        return sArr.indexOf(checked[0]) + 1; // return the index of this char in the string array (1-based)
    } else {
        return -1; // if the unique list is empty, there is no unique char, return -1
    }
};
