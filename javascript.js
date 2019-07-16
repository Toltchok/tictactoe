var cell = document.querySelectorAll('#cell');
var button = document.querySelector('#button');
function tictactoe() {
  if (this.textContent == '') {
    this.textContent = 'x';
  }
  else if (this.textContent == 'x') {
    this.textContent = 'o';
  }
  else {
    this.textContent = '';
}
}
function clearAll(){
      for (var i = 0, len = cell.length; i < len; i++){
      cell[i].textContent=  '';
    }
}


function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

addEventListenerList(cell,'click',tictactoe);
button.onclick = clearAll;
