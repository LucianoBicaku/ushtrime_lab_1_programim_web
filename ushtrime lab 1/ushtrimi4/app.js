function runC() {
  document.case.display.value = "";
}

const clickBtn = (par) => {
  document.case.display.value += par;
};

const clearLastChar = () => {
  document.case.display.value = document.case.display.value.slice(0, -1);
};

function runEquals() {
  var equals = eval(document.case.display.value);
  document.case.display.value = equals;
}
