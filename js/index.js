// $(document).ready(function(){

  var evalArr = [];
  var oper = '';
  var evalPlaceholder = 0;

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
      evalArr = [];
      oper = '';
      return;
    }
    else if(eventTarget === '='){
      screen.empty();
      screen.append(evaluate(evalArr, oper));
    }
    else if (eventTarget === '-' && evalArr.length < 1 && oper === '') {
      evalArr[0] = eventTarget;
    }
    else if(evalArr.length < 1 && parseInt(eventTarget) == eventTarget && oper === ''){
      evalArr[0] = eventTarget;
    }
    else if(evalArr.length === 1 && parseInt(eventTarget) == eventTarget && oper === ''){
      evalArr[0] += eventTarget;
    }
    else if (oper === '' && parseInt(eventTarget) != eventTarget) {
      oper = eventTarget;
    }
    else if (evalArr.length === 1 && oper != '') {
      evalArr[1] = eventTarget
    }
    else if (evalArr.length === 2 && oper != '') {
      evalArr[1] += eventTarget;
    }
    console.log(oper);
    console.log(evalArr);
  });

function evaluate (arr, char) {
    screen.empty();
    var num1 = parseInt(arr[0])
    var num2 = parseInt(arr[1])
    if (num2 != arr[1]){
      return 'ERROR'
    }
    else if(char === 'x'){
      evalPlaceholder = num1 * num2;
    }
    else if(char === '÷'){
      evalPlaceholder = num1 / num2;
    }
    else if(char === '+'){
      evalPlaceholder = num1 + num2;
    }
    else if(char === '-'){
      evalPlaceholder = num1 - num2;
    }
    else {
      return 'ERROR'
    }
    resultShow();
    return evalPlaceholder.toFixed(5)
  };

  function resultShow (){
    oper = '';
    evalArr[0] = evalPlaceholder;
    evalArr.splice(1,1);
  };

// });
