module.exports = function toReadable (number) {
    let result = '';
    let numberToString = String(number);
    let replaceUnits = function (itemNumber) {
        switch(itemNumber) {
        case '1':
            return 'one';
            break;
        case '2':
            return 'two';
            break;
        case '3': 
            return 'three';
            break;
        case '4': 
            return 'four';
            break;
        case '5': 
            return 'five';
            break;
        case '6': 
            return 'six';
            break;
        case '7': 
            return 'seven';
            break;
        case '8': 
            return 'eight';
            break;
            case '9': 
            return 'nine';
            break;          
        default: 
            return '';
     }
    };

    let replaceOneTens = function (itemNumber) {
        switch(itemNumber) {
        case '1': 
            return 'eleven';
            break; 
        case '2': 
            return 'twelve';
            break;
        case '3': 
            return 'thirteen';
            break; 
        case '4': 
            return 'fourteen';
            break; 
        case '5': 
            return 'fifteen';
            break; 
        case '6': 
            return 'sixteen';
            break; 
        case '7': 
            return 'seventeen';
            break; 
        case '8': 
            return 'eighteen';
            break; 
        case '9': 
            return 'nineteen';
            break;   
     
        default: 
            return 'ten';
     }
    }
    
    let replaceTens = function (itemNumber) {
        switch(itemNumber) {
        case '2': 
            return 'twenty';
            break;
        case '3': 
            return 'thirty';
            break; 
        case '4': 
            return 'forty';
            break; 
        case '5': 
            return 'fifty';
            break; 
        case '6': 
            return 'sixty';
            break; 
        case '7': 
            return 'seventy';
            break; 
        case '8': 
            return 'eighty';
            break; 
        case '9': 
            return 'ninety';
            break;   
     
        default: 
            return '';
     }
    }
        

    if (numberToString == 0) {
    return 'zero';
    };

    if (numberToString.length == 1) {
    return replaceUnits (numberToString);     
    };

    if (numberToString.length == 2 && numberToString[0] === '1') {
        return replaceOneTens (numberToString[1]); 
    }

    if (numberToString.length == 2 && numberToString[0] != '1') {
        result = `${replaceTens(numberToString[0])} ${replaceUnits (numberToString[1])}`;
        result = result.replace(/\s+/g, ' ').trim();
        return result;
    }

    if (numberToString.length == 3 && numberToString[1] === '1') {
        result = `${replaceUnits (numberToString[0])} hundred ${replaceOneTens(numberToString[2])}`; 
        result = result.replace(/\s+/g, ' ').trim();
        return result;
    }
    
    if (numberToString.length == 3 && numberToString[1] != '1') {
        result = `${replaceUnits (numberToString[0])} hundred ${replaceTens(numberToString[1])} ${replaceUnits(numberToString[2])}`;
        result = result.replace(/\s+/g, ' ').trim();
        return result;
    }
}  

console.log(module.exports(30));