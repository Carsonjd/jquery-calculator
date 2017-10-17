$(document).ready(function(){

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
    console.log(eventTarget)
    if(eventTarget === "C"){
      screen.empty();
      evalArr = [];
      oper = '';
      return;
    }
    else if(eventTarget === '='){
      screen.empty();
      screen.append(evaluate(evalArr));
      return;
    }
    else if(evalArr.length === 0){
      evalArr.push(parseInt(eventTarget))
      screen.append(eventTarget);
    }
    else if (oper === '') {
      oper = eventTarget
      screen.append(eventTarget);
    }
    else if (evalArr.length === 1) {
      evalArr.push(parseInt(eventTarget))
      console.log(evalArr)
      evaluate(evalArr);
    }
  });

  var evaluate = function(arr){
    screen.empty();
    if(oper === 'x'){
      evalPlaceholder = arr[0] * arr[1];
    }
    if(oper === '÷'){
      evalPlaceholder = arr[0] / arr[1];
    }
    if(oper === '+'){
      evalPlaceholder = arr[0] + arr[1];
    }
    if(oper === '-'){
      evalPlaceholder = arr[0] - arr[1];
    }
    screen.append(evalPlaceholder);
    console.log(evalPlaceholder)
    oper = '';
    arr[0] = evalPlaceholder;
    arr.splice(1,1);
  }





});
