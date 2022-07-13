WORD = {
    name: "WORD",



    /**
     * 
     * @param {String} text 
     * @returns Boolean
     */
    isPalindrome: function(text){
        if(typeof text == "string"){
            let isPalindrome = true,
            array = [...text];

            for(let i = 0; i < array.length; i++){
                let a = array[i],
                    b = array[array.length - 1 - i];

                    if(a !== b) {
                        isPalindrome = false; 
                        break;
                    }
            }

            return isPalindrome;
        } else {
            throw new Error('isPalindrome: Typeof @text must be a string!')
        }
    },
};