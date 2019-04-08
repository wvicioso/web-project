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

window.addEventListener("load", function(){
  fadeIn()
});
