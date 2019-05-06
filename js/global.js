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

function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}

function validateForm(e) {
  e.preventDefault();
  var name = document.getElementById('Name')
  var email = document.getElementById('Email')
  var inquiry = document.getElementById('Inquiry')
  var counter = 0;
  if (name.value == "") {
    document.getElementById('nameError').style.display = "inline-block";
  } else {
    document.getElementById('nameError').style.display = "none";
    counter++;
  }

  if (!ValidateEmail(email) || email.value == "" ) {
    document.getElementById('emailError').style.display = "inline-block";
  } else {
    document.getElementById('emailError').style.display = "none";
    counter++;
  }

  if (inquiry.value == "") {
    document.getElementById('inquiryError').style.display = "inline-block";
  } else {
    document.getElementById('inquiryError').style.display = "none";
    counter++;
  }

  if(counter == 3) {
    document.getElementById('form').style.display = 'none'
    document.getElementById('contact-p').style.display = 'none'
    document.getElementById('thankyou').style.display = 'inline-block'
  }


  return false;
}

window.addEventListener("load", function(){
  setWidth();
  fadeIn();
  slideInRightSide();
  slideAboutHeader();
});
