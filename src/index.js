module.exports = function toReadable (number) {
    const numberToWord = (number) => {
        const str_numbers = number.toString();
        switch (str_numbers) {
            case "9":
                return "nine";
            case "8":
                return "eight";
            case "7":
                return "seven";
            case "6":
                return "six";
            case "5":
                return "five";
            case "4":
                return "four";
            case "3":
                return "three";
            case "2":
                return "two";
            case "1":
                return "one";
        }
    }
    
    const numberOfDecadesToWord = (number) => {
        const str_numbers = number.toString();
        switch (str_numbers) {
            case "9":
                return "ninety";
            case "8":
                return "eighty";
            case "7":
                return "seventy";
            case "6":
                return "sixty";
            case "5":
                return "fifty";
            case "4":
                return "forty";
            case "3":
                return "thirty";
            case "2":
                return "twenty";
        }
    }
    
    const secondDecadeToWord = (number) => {
        const str_numbers = number.toString();
        switch (str_numbers) {
            case "19":
                return "nineteen";
            case "18":
                return "eighteen";
            case "17":
                return "seventeen";
            case "16":
                return "sixteen";
            case "15":
                return "fifteen";
            case "14":
                return "fourteen";
            case "13":
                return "thirteen";
            case "12":
                return "twelve";
            case "11":
                return "eleven";
            case "10":  
                return "ten";  
        }
    }
    const str_numbers = number.toString().split("");
    let readable_line = [];
    let i = 0;
    while (i < str_numbers.length) {
        if (str_numbers.length >= 2 && i == str_numbers.length-2 && str_numbers[i] >= 2){
            readable_line.push(numberOfDecadesToWord(str_numbers[i]));
            i++;
        } else if (str_numbers.length >= 2 && i == str_numbers.length-2 && str_numbers[i] == 1){
            readable_line.push(secondDecadeToWord(str_numbers[i]+str_numbers[i+1]));
            return readable_line.join(' ');
        } else if (str_numbers.length == 1 && str_numbers[i] == 0) {
            readable_line.push("zero");
            i++;
        } else if (str_numbers[i] == 0) {
            i++;
            continue;
        } else {
            readable_line.push(numberToWord(str_numbers[i]));
            i++;
        }
        if (str_numbers.length == 3 && i == 1) {
            readable_line.push("hundred");
        }
    }
    return readable_line.join(' ');
}

/*console.log(toReadable(222));*/
