function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  } else if (h == 12) {
    h = 12;
    ampm = " AM";
  } else if (h < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  document.getElementById('display').innerHTML = h + ":" + m + ampm;
   var t = setTimeout(function() {
    startTime();
  }, 500);

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
}


//quotes arrays LIFE
var quoteStartLife = ["\"The greatest thing in the world is to ",
  "\"You are never too old to ",
  "\"Our greatest weakness is to ",
  "\"Either you will find a way, or you will ",
  "\"If you can dream it, you can "
];


var quoteMiddleLife = ["try just one more time ",
  "go beyond limits ",
  "never come back ",
  "stand up and fight again ",
  "be what you want to be "
];

var quoteEndLife = ["but never look in the past.\"",
  "until you forget what you wanted.\"",
  "assuming that you know what you are doing.\"",
  "even if no one wants to help you.\"",
  "rather than be miserable.\""
];


//quotes arrays WORK

var quoteStartWork = ["\"Choose a job you love and you will ",
  "\"With hard work and effort, you can ",
  "\"By working faithfully eight hours a day you may ",
  "\"Do your work with your whole heart, and you will ",
  "\"One must work and dare if one really wants to "
];


var quoteMiddleWork = ["succeed in life ",
  "get ahead ",
  "achieve mastery ",
  "fill yourself with hope ",
  "never have to work a day in your life "
];

var quoteEndWork = ["until you stop trying.\"",
  "because giving up is simply not an option.\"",
  "or give up and go home.\"",
  "even if it means sacrificing everything.\"",
  "and let success make the noise.\""
];

function genRandomNumber() {
  return Math.floor(Math.random() * 5);
}

function genQuote() {
  var list = document.getElementById("content");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  var selectedNumber = document.getElementById("number-select").value;
  for (i = 0; i < selectedNumber; i++) {
    var para = document.createElement("p");
    if (document.getElementById("theme-select").value == "life") {
      var t = document.createTextNode(quoteStartLife[genRandomNumber()] + quoteMiddleLife[genRandomNumber()] + quoteEndLife[genRandomNumber()]);
      para.appendChild(t);
      console.log(t);
    } else {
      var t = document.createTextNode(quoteStartWork[genRandomNumber()] + quoteMiddleWork[genRandomNumber()] + quoteEndWork[genRandomNumber()]);
      para.appendChild(t);
      console.log(t);
    }
    document.getElementById("content").appendChild(para);
  }
}
