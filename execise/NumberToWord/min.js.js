const OnceMap = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',  'nineteen', 'twenty'
  ]
  
  const tensMap = [
    'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ]
  
  function covertToWord(input){
      
      let numberToWord = '';
      let currentValue = input;
      
      
       if(currentValue > 20 && currentValue < 100)
      
      
      if(currentValue > 20 && currentValue < 100) {
      let index = currentValue /10 -1;
      numberToWord += ' ' + tensMap[index]
  }
  
      if(currentValue > 0 && currentValue <= 20) {
      let index = currentValue -1;
      numberToWord = OnceMap[index];
  }
  return numberToWord;
  }
  const result = covertToWord(80)
  console.log(result);