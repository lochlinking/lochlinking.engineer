
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
    document.getElementById("resumeOverlay").style.display = "flex";
    document.getElementById("experience").style.display = "flex";
  }
  
  function off() {
    document.getElementById("resumeOverlay").style.display = "none";
    document.getElementById("resumecontent").style.display = "flex";
  }

  function emailOn() {
    document.getElementById("emailIcon").style.display = "none";
    document.getElementById("email").style.display = "flex";
  }
