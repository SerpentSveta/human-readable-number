module.exports = function toReadable(number) {
  let result = '';
  const numberToString = String(number);
  const replaceUnits = (itemNumber) => {
    switch (itemNumber) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  };

  const replaceOneTens = (itemNumber) => {
    switch (itemNumber) {
      case '1':
        return 'eleven';
      case '2':
        return 'twelve';
      case '3':
        return 'thirteen';
      case '4':
        return 'fourteen';
      case '5':
        return 'fifteen';
      case '6':
        return 'sixteen';
      case '7':
        return 'seventeen';
      case '8':
        return 'eighteen';
      case '9':
        return 'nineteen';

      default:
        return 'ten';
    }
  };

  const replaceTens = (itemNumber) => {
    switch (itemNumber) {
      case '2':
        return 'twenty';
      case '3':
        return 'thirty';
      case '4':
        return 'forty';
      case '5':
        return 'fifty';
      case '6':
        return 'sixty';
      case '7':
        return 'seventy';
      case '8':
        return 'eighty';
      case '9':
        return 'ninety';

      default:
        return '';
    }
  };

  if (number === 0) {
    return 'zero';
  }

  if (numberToString.length === 1) {
    return replaceUnits(numberToString);
  }

  if (numberToString.length === 2 && numberToString[0] === '1') {
    return replaceOneTens(numberToString[1]);
  }

  if (numberToString.length === 2 && numberToString[0] !== '1') {
    result = `${replaceTens(numberToString[0])} ${replaceUnits(numberToString[1])}`;
    result = result.replace(/\s+/g, ' ').trim();
  }

  if (numberToString.length === 3 && numberToString[1] === '1') {
    result = `${replaceUnits(numberToString[0])} hundred ${replaceOneTens(numberToString[2])}`;
    result = result.replace(/\s+/g, ' ').trim();
  }

  if (numberToString.length === 3 && numberToString[1] !== '1') {
    result = `${replaceUnits(numberToString[0])} hundred ${replaceTens(numberToString[1])} ${replaceUnits(numberToString[2])}`;
    result = result.replace(/\s+/g, ' ').trim();
  }
  return result;
};
