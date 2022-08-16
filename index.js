// code your solution here
function saturdayFun (activity=`roller-skate`){

const message =`This Saturday, I want to ${activity}!`;

return message;

}

function mondayWork(activity=`go to the office`){

    const message =`This Monday, I will ${activity}.`;

    return message;

}
function wrapAdjective(symbolName) {

  const result = function  emphatic(msg) {

    return `You are ${symbolName}${msg}${symbolName}!`;
  };
  return result;
}

console.log(wrapAdjective())