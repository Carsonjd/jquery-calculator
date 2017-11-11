// $(document).ready(function(){

  var inputArr = [];
  var oper = '';
  var tmpResult = 0;

  var screen = $('#screen');
  var span = $('span');
  var clearButton = $('#clear');
  var operator = $('.operator');
  var equalsButton = $('#equals');
  var zeroButton = $('#zero');

  span.on('click', function(event){
    var eventTarget = $(event.target).text();
    screen.append(eventTarget);
    if(eventTarget === "C"){
      screen.empty();
      inputArr = [];
      oper = '';
      return;
    }
    else if(eventTarget === '='){
      screen.empty();
      screen.append(evaluate(inputArr, oper));
    }
    else if (eventTarget === '-' && inputArr.length < 1 && oper === '') {
      inputArr[0] = eventTarget;
    }
    else if(inputArr.length < 1 && parseInt(eventTarget) == eventTarget && oper === ''){
      inputArr[0] = eventTarget;
    }
    else if(inputArr.length === 1 && parseInt(eventTarget) == eventTarget && oper === ''){
      inputArr[0] += eventTarget;
    }
    else if (oper === '' && parseInt(eventTarget) != eventTarget) {
      oper = eventTarget;
    }
    else if (inputArr.length === 1 && oper != '') {
      inputArr[1] = eventTarget
    }
    else if (inputArr.length === 2 && oper != '') {
      inputArr[1] += eventTarget;
    }
    console.log(oper);
    console.log(inputArr);
  });

function evaluate (arr, char) {
    screen.empty();
    var num1 = parseInt(arr[0])
    var num2 = parseInt(arr[1])
    if (num2 != arr[1]){
      return 'ERROR'
    }
    else if(char === 'x'){
      tmpResult = num1 * num2;
    }
    else if(char === '÷'){
      tmpResult = num1 / num2;
    }
    else if(char === '+'){
      tmpResult = num1 + num2;
    }
    else if(char === '-'){
      tmpResult = num1 - num2;
    }
    else {
      return 'ERROR'
    }
    resultShow();
    return tmpResult
  };

  function resultShow (){
    oper = '';
    inputArr[0] = tmpResult;
    inputArr.splice(1,1);
  };

// });
