function changMode() {
  if (document.getElementById("switch").checked) {
    setCookie("mode", "light", 365);
    document.getElementById("mode").innerHTML =
      '<link rel="stylesheet" href="css/lightMode.css?ver=2">';
    document.getElementById("logo").innerHTML =
      '<img src="img/logo_black.png" width="100" alt="logo">';
  } else {
    setCookie("mode", "dark", 365);
    document.getElementById("mode").innerHTML =
      '<link rel="stylesheet" href="css/darkMode.css?ver=8">';
    document.getElementById("logo").innerHTML =
      '<img src="img/logo_white.png" width="100" alt="logo">';
  }
}

function changModeMini() {
  if (document.getElementById("switch").checked) {
    document.getElementById("switch").checked = false;
    changMode();
  } else {
    document.getElementById("switch").checked = true;
    changMode();
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function load(id, path) {
  $(function () {
    $(id).load(path);

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });
}

function showImg(src) {
  document.getElementById("img-show").innerHTML = '<img src="' + src + '">';
  document.getElementById("show-img").style.display = "block";
}

var link = 1;
function active(key) {
  link = key;
  document.getElementById("1").classList.remove("active");
  document.getElementById("2").classList.remove("active");
  document.getElementById("3").classList.remove("active");
  document.getElementById("4").classList.remove("active");
  document.getElementById("5").classList.remove("active");
  document.getElementById("6").classList.remove("active");
  if(key!=0)
    document.getElementById(link).classList.add("active");
  setCookie("page", key, 365);

  switch (key) {
    case "0":
      document.getElementById("title").innerHTML = "algnot | Administrator";
      break;
    case "1":
      document.getElementById("title").innerHTML = "algnot | Home";
      var event = setTimeout(resetTime, 500);
      break;
    case "2":
      document.getElementById("title").innerHTML = "algnot | Profile";
      break;
    case "3":
      document.getElementById("title").innerHTML = "algnot | Education";
      break;
    case "4":
      document.getElementById("title").innerHTML = "algnot | My skill";
      break;
    case "5":
      document.getElementById("title").innerHTML = "algnot | Article";
      break;
    case "6":
      document.getElementById("title").innerHTML = "algnot | Contact me";
      break;
  }
}

var chat = 0; //0->not show  |||| 1->show
function showChat() {
  if (chat == 0) {
    document.getElementById("chat").style.height = "300px";
    document.getElementById("icon-chat").innerHTML =
      '<i class="fas fa-chevron-down" onclick="showChat()"></i>';
    chat = 1;
  } else {
    document.getElementById("chat").style.height = "0px";
    document.getElementById("icon-chat").innerHTML =
      '<i class="fas fa-chevron-up" onclick="showChat()"></i>';
    chat = 0;
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});

var d = new Date();
document.getElementById("date").innerHTML +=
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
document.getElementById("date2").innerHTML +=
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
document.getElementById("date3").innerHTML +=
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

if (getCookie("mode") == "") {
  setCookie("mode", "dark", 365);
}

if (getCookie("mode") == "dark") {
  document.getElementById("switch").checked = false;
  changMode();
}

if (getCookie("mode") == "light") {
  document.getElementById("switch").checked = true;
  changMode();
}

if (getCookie("page") == "") {
  load("#root", "link/home.html");
  setCookie("page", "1", 365);
}

if (getCookie("page") == "0") {
  load("#root", "link/login.html");
  active("0");
  setCookie("page", "0", 365);
}

if (getCookie("page") == "1") {
  load("#root", "link/home.html");
  active("1");

  var event = setTimeout(resetTime, 500);
  var date = new Date();
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var hours = date.getHours();

  if (hours > 0 && hours < 12) {
    document.getElementById("hello").innerHTML = "Good morning. 🌞";
  } else if (hours > 12 && hours < 18) {
    document.getElementById("hello").innerHTML = "Good afternoon. ⛅";
  } else {
    document.getElementById("hello").innerHTML = "Good evening. 🌙";
  }
  document.getElementById("day").innerHTML =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  document.getElementById("7-day").innerHTML = day[date.getDay()];
  document.getElementById("time").innerHTML =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

if (getCookie("page") == "2") {
  load("#root", "link/profile.html");
  active("2");
}

if (getCookie("page") == "3") {
  load("#root", "link/education.html");
  active("3");
}

if (getCookie("page") == "4") {
  load("#root", "link/skill.html");
  active("4");
}

if (getCookie("page") == "5") {
  load("#root", "link/artical.html");
  active("5");
}

if (getCookie("page") == "6") {
  load("#root", "link/comment.html");
  active("6");
}

function resetTime() {
  var date = new Date();
  document.getElementById("day").innerHTML =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  document.getElementById("7-day").innerHTML = day[date.getDay()];
  document.getElementById("time").innerHTML =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  if (hours > 1 && hours < 13) {
    document.getElementById("hello").innerHTML = "Good morning. 🌞";
  } else if (hours > 13 && hours < 19) {
    document.getElementById("hello").innerHTML = "Good afternoon. ⛅";
  } else {
    document.getElementById("hello").innerHTML = "Good evening. 🌙";
  }
  event = setTimeout(resetTime, 1000);
}
