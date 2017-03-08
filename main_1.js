var updateOperator = function(e) {
  //saves number from screen
  arrayNumber.push(screen.innerHTML);
  //clear screen
  screen.innerHTML = "";
  //add operation to array
  arrayNumber.push(e.target.innerHTML);
}
