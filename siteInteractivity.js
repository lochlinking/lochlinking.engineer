/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("exitNav").style.display = "flex";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("exitNav").style.display = "none";
  }

  function openEmail() {
    document.getElementById("emailOverlay").style.width = "100%";
    document.getElementById("emailOverlay").style.display = "flex";
    document.getElementById("exitEmail").style.display = "flex";
  }

  function closeEmail() {
    document.getElementById("emailOverlay").style.width = "0%";
    document.getElementById("exitEmail").style.display = "none";
  }

function openAbout(evt, interests, buttonIndex) {
    // Declare all variables
    var i, tabcontentA, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontentA = document.getElementsByClassName("tabcontentA");
    for (i = 0; i < tabcontentA.length; i++) {
      tabcontentA[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(interests).style.display = "block";
    evt.currentTarget.className += " active";

    if (buttonIndex !== 1) {
        document.getElementById("button1").style.opacity = "0.5";
    } else {
        document.getElementById("button1").style.opacity = "1";
    }
  }

  function openResume(evt, resumeSection, buttonIndexR) {
    // Declare all variables
    var j, tabcontentR, tablinksR;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontentR = document.getElementsByClassName("tabcontentR");
    for (j = 0; j < tabcontentR.length; j++) {
      tabcontentR[j].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinksR = document.getElementsByClassName("tablinksR");
    for (j = 0; j < tablinksR.length; j++) {
      tablinksR[j].className = tablinksR[j].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(resumeSection).style.display = "block";
    evt.currentTarget.className += " active";

    if (buttonIndexR !== 3) {
        document.getElementById("button3").style.opacity = "0.5";
    } else {
        document.getElementById("button3").style.opacity = "1";
    }

  }


  function on() {
    document.getElementById("resumeOverlay").style.display = "block";
    document.getElementById("experience").style.display = "block";
  }
  
  function off() {
    document.getElementById("resumeOverlay").style.display = "none";
    document.getElementById("resumecontent").style.display = "flex";
  }