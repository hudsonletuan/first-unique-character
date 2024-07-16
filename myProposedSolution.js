function firstUniqChar(s) {
    ```I aim to have 2 pointers pointed to the first index char and the last index char of the string;
    the second point will keep on moving to the left, meanwhile, the first pointer will only move to
    the right if it is recognized as a duplication;
    it stops when the 1st pointer meets the 2nd pointer
    ```
    const sArr = s.split(""); //Split the characters of the string into an array
    let left = 0; //index of the first pointer
    let right = s.length - 1; //index of the second pointer
    let rChecked = []; //all the checked unique characters of the 2nd pointer
    let dup = []; //duplicated characters (characters that appear more than 1)

    while (left <= right) { //it keeps on going until the 1st pointer meets the 2nd pointer
        if (left === right) { //when 2 pointers meet
            if (!rChecked.includes(s[left]) && !dup.includes(s[left])) { //if there is no duplication for this char, it is the first unique character
                return left + 1; //(1-based)
            } else {
                left++;
                right--;
            }
        } else {
            if (s[left] !== s[right]) { //if the chars at 2 pointers are different
                if (rChecked.includes(s[right])) { //if the char at 2nd pointer is in checked unique list, add it to the dup list and remove from the unique list
                    dup.push(s[right]);
                    rChecked.splice(rChecked.indexOf(s[right]), 1);
                } else {
                    if (!dup.includes(s[right])) { //if the char at 2nd pointer is not either in checked unique list or in dup list, add it to the start of the unique list
                        rChecked.unshift(s[right]);
                    }
                }
                right--; //move the 2nd pointer to the left
                if (rChecked.includes(s[left])) { //if the char at 1st pointer is in checked unique list, add it to the dup list and remove from the unique list
                    dup.push(s[left]);
                    rChecked.splice(rChecked.indexOf(s[left]), 1);
                    left++; // move the 1st pointer to the right
                } else {
                    if (dup.includes(s[left])) { //if the char at 2nd pointer is in dup list, move the 1st pointer to the right
                        left++;
                    }
                }
            } else { //if the chars at 2 pointers are the same
                if (rChecked.includes(s[right])) { // if this char is in the unique list, push it into the dup list and remove from the unique list
                    dup.push(s[right]);
                    rChecked.splice(rChecked.indexOf(s[right]), 1);
                } else {
                    if (!dup.includes(s[right])) { // if this char is not either in checked unique list or in dup list, push it into the dup list
                        dup.push(s[right]);
                    }
                }
                left++; // move the 1st pointer to the right
                right--; //move the 2nd pointer to the left
            }
        }
        
    }
    if (rChecked.length > 0) { // if the unique list is NOT empty, the first char in the unique list is the first unique char in the string
        return sArr.indexOf(rChecked[0]); // return the index of this char in the string array (1-based)
    } else {
        return -1; // if the unique list is empty, there is no unique char, return -1
    }
};
