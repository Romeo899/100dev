// Arrow function syntax:


// let func = (arg1, arg2, argN) => expression;

// Rewrite with arrow functions:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed.") ,
  () => alert("You canceled the execution.")
);

