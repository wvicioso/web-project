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
      elem.style.marginLeft = '0';
    }
  }, 500)
}

function setWidth() {
   // document.body.style.width = window.innerWidth - 10;
}

function openMenu() {
  var elem = document.getElementsByClassName('mobile-nav')[0];
  elem.style.marginLeft = '0';
}

function closeMenu() {
  var elem = document.getElementsByClassName('mobile-nav')[0];
  elem.style.marginLeft = '-80%';
}

window.addEventListener("load", function(){
  setWidth();
  fadeIn();
  slideInRightSide();
  slideAboutHeader();
});
