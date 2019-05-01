function fadeIn(i=1) {
  var bodyElems = document.body.children;

  setTimeout(function(){
    bodyElems[i].style.opacity = 1;
    if (bodyElems.length != i) {
      i+=1
      fadeIn(i)
    }
  }, 500)
}

function slideInRightSide() {
  var elem = document.getElementsByClassName('right-side')[0];
  setTimeout(function(){
    if (elem) {
      elem.style.right = '0';
    }
  }, 800)
}

function slideAboutHeader() {
  var elem = document.getElementsByClassName('101')[0];
  setTimeout(function(){
    if (elem) {
      elem.style.marginLeft = '50px';
    }
  }, 500)
}

window.addEventListener("load", function(){
  fadeIn();
  slideInRightSide();
  slideAboutHeader();
});
