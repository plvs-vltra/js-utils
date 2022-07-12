MATH = {
    /**
     * Returns array of numbers 
     * @param {Number} from 
     * @param {Number} to 
     * @returns Array
     */
     createARangeOfNumbers: function(from, to){
        if(from && typeof from == "number" && to && typeof to == "number" ){
            let array = [];
    
            for(let i = from; i <= to; i++){
                array.push(i);
            }
        
            return array;
        } else {
            throw new Error('createARangeOfNumbers: Typeof @from and @to must be a number!');
        }
        
    },
    


    /**
     * Returns factorial of @number
     * @param {Number} number 
     * @returns Number
     */
    factorialOf: function(number){
        if(number && typeof number == "number"){
            return number == 0 ? 1 : MATH.createARangeOfNumbers(1, number).reduce((prev, next) => {
                return prev * next
            });
        } else {
            throw new Error('factorialOf: Typeof @number must be a number!');
        }
    }
};

let a = MATH.createARangeOfNumbers(1, 10)