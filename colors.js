function setThemeFontColor_a(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
function setThemeBackColor(color) {
  var target = document.querySelector('body');
  target.style.backgroundColor = color;
}

function themeHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'light') {
    // Switch to dark theme
    setThemeBackColor('black');
    setThemeFontColor_a('powderblue');
    target.style.color = 'white';
    self.value = 'dark';
  }
  else {
    // Switch to light theme
    setThemeBackColor('white');
    setThemeFontColor_a('blue');
    target.style.color = 'black';
    self.value = 'light';
  }
}
