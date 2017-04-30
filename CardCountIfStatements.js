var count = 0;

function cc(card) {
  // Only change code below this line
  
  // change count
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count = count + 1;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count = count - 1;
  }
  
  // return bet or hold
  if (count >= 1) {
    return (count + " Bet");
  } else if (count <= 0) {
    return (count + " Hold");
  }
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
