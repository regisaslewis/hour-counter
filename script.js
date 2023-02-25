// Today's Time Info

const compute = document.getElementById("compute");
compute.addEventListener("click", addHours);
const addToday = document.getElementById("addToday");
addToday.addEventListener("click", moveToTable);
const hours = document.createElement("h2");
hours.setAttribute("id", "hours");
let table = document.getElementById("table");
let newRow = "";
let newCell = "";
let newCell2 = "";
const h1 = document.getElementById("hr1");
const m1 = document.getElementById("mn1");
const h2 = document.getElementById("hr2");
const m2 = document.getElementById("mn2");
const startBtn = document.getElementById("currentStart");
const endBtn = document.getElementById("currentEnd");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => location.reload());

function autotab (input1, input2) {
  if (document.getElementById(input1).value.length == 2) {
    document.getElementById(input2).focus();
  }
}

function deleteBack (inp1, inp2) {
  document.getElementById(inp1).addEventListener("keydown", function (event) {
    if (document.getElementById(inp1).value.length === 0) {
      if (event.key === "Backspace") {
      document.getElementById(inp2).focus();
      }
    }
  })
}

function minutesToDecimals(hour, minutes) {  
  minutes *= (5 / 3);    
  if (minutes <= 9) {
    return `${hour}.0${minutes.toFixed(0)}`;
  }
  return `${hour}.${minutes.toFixed(0)}`;
}
function totalTime(hr1, mn1, hr2, mn2) {
    hr1 = Number(h1.value);
    hr2 = Number(h2.value);
    mn1 = Number(m1.value);
    mn2 = Number(m2.value);
    if (hr1 <= 23 && hr2 <= 23 && mn1 <= 59 && mn2 <= 59) {
     if ( hr1 > hr2 || (hr1 === hr2 && mn1 > mn2)) {
      hr2 += 24;
    } return (minutesToDecimals(hr2, mn2) - minutesToDecimals(hr1, mn1)).toFixed(2);
  } else {
    return "Invalid Times";
  }
}

function addHours() {
    hours.innerText = totalTime();
    document.getElementById("total").appendChild(hours);
    if (hours.innerText === "Invalid Times") {
      hours.style.color = "rgb(247, 238, 152)";
      hours.style.backgroundColor = "rgb(198, 0, 69)";
      hours.style.width = "90%";
    } else {
      hours.style.color = "black";
      hours.style.backgroundColor = "rgb(21, 149, 130)";
      hours.style.width = "90%";
    }
}

document.getElementById("compute").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("addToday").focus();
    return addHours();
  } else if ( event.key === "Backspace") {
    m2.focus();
  }
})

function reset() {
  h1.value = "";
  h2.value = "";
  m1.value = "";
  m2.value = "";
  hours.innerText = "";
  h1.focus();
}

function resetNoFocus() {
  h1.value = "";
  h2.value = "";
  m1.value = "";
  m2.value = "";
  hours.innerText = "";
}

function moveToTable() {
  if (totalTime() !== "Invalid Times" && totalTime() !== "0.00") {
    if (hours.innerText !== "") {
      if (window.screen.width >= 600) {
        newRow = table.insertRow(-1);
        newCell = newRow.insertCell(0);
        let hoursText = document.createTextNode(`${h1.value}:${m1.value} - ${h2.value}:${m2.value}`);
        newCell.appendChild(hoursText);
        newCell2 = newRow.insertCell(1);
        let timeText = document.createTextNode(hours.innerText);
        newCell2.appendChild(timeText);
        reset();
      } else {
        newRow = table.insertRow(-1);
        newCell = newRow.insertCell(0);
        let hoursText = document.createTextNode(`${h1.value}:${m1.value} - ${h2.value}:${m2.value}`);
        newCell.appendChild(hoursText);
        newCell2 = newRow.insertCell(1);
        let timeText = document.createTextNode(hours.innerText);
       newCell2.appendChild(timeText);
       resetNoFocus();
      }
    } else {
      colorSwap(addToday, "Place in Table", "16px");
    }
  } else {
    colorSwap(addToday, "Place in Table", "16px");}
}

let sum = -1;
function addTotalTimes() {
  sum++;
  document.getElementById("daysTotal").blur();
  if (sum == 0) {
    let tooter = [];
    let count = document.getElementById("table").rows.length;
    for (let i = 1; i < count; i++) {
      tooter = Number(document.getElementById("table").rows[i].cells[1].innerText);
      sum += tooter;
    }
    let totally = document.createElement("p");
    let dude = document.createElement("p");
    totally.setAttribute("id", "totally");
    dude.setAttribute("id", "dude");
    totally.innerText = `Combined total time:`;
    dude.innerText = `${sum.toFixed(2)} hrs.`
    document.getElementById("finalDiv").appendChild(totally);
    document.getElementById("finalDiv").appendChild(dude);
    let clear = document.createElement("button");
    clear.innerText = "Clear to \n Add More";
    clear.setAttribute("id", "clear");
    clear.setAttribute("onclick", "clearFunction()");
    document.getElementById("finalDiv").appendChild(clear);
    let addToDB = document.createElement("button");
    addToDB.innerText = "Place in Database";
    addToDB.setAttribute("id", "add-to-DB");
    addToDB.addEventListener("click", dbit);
    document.getElementById("finalDiv").appendChild(addToDB);
    if (dude.innerText === "NaN hrs.") {
      dude.style.backgroundColor = "rgb(198, 0, 69)";
      dude.style.color = "rgb(247, 238, 152)";
      dude.innerText = "Invalid";
    }
  } else {
    return;
  }
}

function clearFunction() {
  sum = -1;
  totally.remove();
  dude.remove();
  document.getElementById("clear").remove();
  document.getElementById("add-to-DB").remove();
  h1.focus();
}

// Current Time Features

function showTime() {
  let currentTime = new Date();
  let currentHour = ("0" + currentTime.getHours()).slice(-2);
  let currentMin = ("0" + currentTime.getMinutes()).slice(-2);
  let timeShow = `${currentHour}:${currentMin}`;
  document.getElementById("timeNow").innerText = timeShow;
}

function giveTimeStart() {
  let currentTime = new Date();
  let currentHour = ("0" + currentTime.getHours()).slice(-2);
  let currentMin = ("0" + currentTime.getMinutes()).slice(-2);
  h1.value = currentHour;
  m1.value = currentMin;
  return;
}

function giveTimeEnd() {
  let currentTime = new Date();
  let currentHour = ("0" + currentTime.getHours()).slice(-2);
  let currentMin = ("0" + currentTime.getMinutes()).slice(-2);
  h2.value = currentHour;
  m2.value = currentMin;
  return;
}

startBtn.addEventListener("click", function () {
  giveTimeStart();
  startBtn.blur();
})

endBtn.addEventListener("click", function () {
  giveTimeEnd();
  endBtn.blur();
})

function showSeconds() {
  let currentTime = new Date();
  let currentSec = ":"+ ("0" + currentTime.getSeconds()).slice(-2);
  let showSec = currentSec;
  document.getElementById("seconds").innerText = showSec;
}

setInterval(showTime, 1000);
setInterval(showSeconds, 1000);

// Database Stuff

const errorMessage = document.getElementById("error-message")
const popUpAll = document.getElementById("pop-up-all");
const popUpTable = document.getElementById("pop-up-table");
const popUpSearch = document.getElementById("pop-up-search");
const popUpTotal = document.getElementById("pop-up-total");
const serverPostBtn = document.getElementById("to-server");
const dateToday = document.getElementById("date-today");
const viewDateBtn = document.getElementById("view-date");
const viewDBAllBtn = document.getElementById("view-db-all");
const dbTotalBtn = document.getElementById("db-total-hours");
const vdMonth = document.getElementById("vd1");
const vdDay = document.getElementById("vd2");
const vdYear = document.getElementById("vd3");
const tdMonth = document.getElementById("td1");
const tdDay = document.getElementById("td2");
const tdYear = document.getElementById("td3");

function tableScroll(div) {
  setTimeout(() => div.scrollIntoView({behavior: "smooth"}), 500);
}

function responseFail() {
  errorMessage.style.diplay = "block";
  setTimeout(() => errorMessage.style.display = "none", "2000");
}

// View the Entire db.json contents

function viewDatabaseAll() {
  popUpTable.style.dispaly = "none";
  popUpSearch.style.display = "none";
  popUpTotal.style.display = "none";
  popUpTotal.textContent = "";


  if (popUpAll.style.display === "flex") {
    viewDBAllBtn.textContent = "View the whole database";
    popUpAll.style.display = "none";
    popUpAll.innerHTML = " ";
  } else {
    viewDBAllBtn.textContent = "Close the database";
    fetch(`http://localhost:3000/hours`)
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((e) => {
          let dataDiv = document.createElement("div");
          dataDiv.className = "data-div";
          dataDiv.id = `time-info${e.id}`;
          dataDiv.innerText = `Date: ${e.date}  \n Start Time: ${e.startTime} \n End Time: ${e.endTime} \n Total Hours: ${e.total}`;

          function allowEdit() {
            document.querySelector("#hidden-form").style.display = "inline-block";
            document.querySelector("#id-info").textContent = `ID# ${e.id}`
            document.querySelector("#ed1").value = e.date[0] + e.date[1];
            document.querySelector("#ed2").value = e.date[3] + e.date[4];
            document.querySelector("#ed3").value = e.date[6] + e.date[7];
            document.querySelector("#est1").value = e.startTime[0] + e.startTime[1];
            document.querySelector("#est2").value = e.startTime[3] + e.startTime[4];
            document.querySelector("#eet1").value = e.endTime[0] + e.endTime[1];
            document.querySelector("#eet2").value = e.endTime[3] + e.endTime[4];
            document.querySelector("#eTotal").value = e.total;
          }

          dataDiv.addEventListener("click", allowEdit);
        popUpAll.appendChild(dataDiv);
        })
      })
      .catch((error) => {
        responseFail();
        console.log(error.message);
      })
    popUpAll.style.display = "flex";
  }
  viewDBAllBtn.blur();
}

viewDBAllBtn.addEventListener("click", () => {
  viewDatabaseAll();  
  tableScroll(popUpAll);
});

// Add from Today to the Database

function dbit() {
  tdMonth.focus();
  let tableArr = Array.from(document.querySelectorAll("td"));
  tableArr.forEach((e) => {
    let taDiv = document.createElement("div");
    taDiv.className = "taDiv";
    taDiv.textContent = e.textContent;
    popUpTable.appendChild(taDiv);
    popUpTable.style.display = "grid";
    popUpAll.style.display = "none";
    popUpSearch.style.display = "none";
    popUpTotal.style.display = "none";
    popUpTotal.textContent = "";
    viewDBAllBtn.textContent = "View the whole database";
    tableScroll(popUpTable);
  })
}

// Single-click date entry

function inputTodayDate() {
  let today = new Date().toLocaleDateString();
  if (today.length === 9) {
    today = "0" + today;
  }
  tdMonth.value = today[0] + today[1];
  tdDay.value = today[3] + today[4];
  tdYear.value = today[8] + today[9];
}

dateToday.addEventListener("click", inputTodayDate);

/* Post Today's Times
this is far too complicated to be the best way, but it works for now */

function colorSwap(btn, oldText, fSize="14px") {
  btn.textContent = "Invalid Info";
  btn.style.backgroundColor = "red";
  btn.style.fontSize = "14px";
  btn.style.color = "yellow";
  btn.style.backgroundColor = "red";
  btn.style.color = "yellow";
  setTimeout(() => {
    btn.textContent = oldText;
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.boxShadow = "none";
    btn.style.fontSize = fSize;
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "salmon";
      btn.style.color = "black";
      btn.style.boxShadow = "3px 2px 2px black";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      btn.style.boxShadow = "none";
    });
  }, "1700");
}

function postNew() {
  let tableArr2 = Array.from(document.querySelectorAll(".taDiv"));
  if (tableArr2.length === 0 || tdMonth.value === "" || tdDay.value === "" || tdYear.value === "") {
    colorSwap(serverPostBtn, "Post to Server");
  } else {
  function startTimeGrab() {
    for (let i = 0; i < tableArr2.length; i++) {
      if (i % 2 === 0) {
        let starter = document.createElement("div");
        starter.style.display = "none";
        starter.className = "starter";
        starter.id = "starter" + i;
        starter.textContent = tableArr2[i].textContent[0] + tableArr2[i].textContent[1] + ":" + tableArr2[i].textContent[3] + tableArr2[i].textContent[4];
        document.body.appendChild(starter);
      }
    }
  }

  function endTimeGrab() {
    for (let i = 0; i < tableArr2.length; i++) {
      if (i % 2 === 0) {
        let ender = document.createElement("div");
        ender.style.display = "none";
        ender.className = "ender";
        ender.id = "ender" + i;
        ender.textContent = tableArr2[i].textContent[8] + tableArr2[i].textContent[9] + ":" + tableArr2[i].textContent[11] + tableArr2[i].textContent[12];
        document.body.appendChild(ender);
      }
    }
  }
 
  function totalTimeGrab() {
    for (let i = 0; i < tableArr2.length; i++) {
      if (i % 2 === 1) {
        let totTimer = document.createElement("div");
        totTimer.className = "totTimer";
        totTimer.id = "totTimer" + i;
        totTimer.style.display = "none";
        totTimer.textContent = Number(tableArr2[i].textContent);
        document.body.appendChild(totTimer);
      }
    }
  }

  startTimeGrab();
  endTimeGrab();
  totalTimeGrab();
  let arr1 = Array.from(document.querySelectorAll(".starter"));
  let arr2 = Array.from(document.querySelectorAll(".ender"));
  let arr3 = Array.from(document.querySelectorAll(".totTimer"));

  function postMultiple() {
    for (let i = 0; i < arr1.length; i++) {
      let postData = {
      date: `${tdMonth.value}/${tdDay.value}/${tdYear.value}`,
      startTime: arr1[i].textContent,
      endTime: arr2[i].textContent,
      total: Number(arr3[i].textContent),
      };
      const postObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(postData),
      };
      fetch(`http://localhost:3000/hours`, postObject)
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((error) => {
          responseFail();
          console.log(error.message);
        })
    }
  }
  postMultiple();
  serverPostBtn.textContent = "POSTED"
  serverPostBtn.style.fontSize = "36px";
  serverPostBtn.style.width = "auto";
  serverPostBtn.style.height = "45px";
  serverPostBtn.style.transform = "rotate(-45deg)";
  serverPostBtn.style.fontWeight = "bold";
  serverPostBtn.style.color = "black";
  serverPostBtn.style.backgroundColor = "white";
  serverPostBtn.style.boxShadow = "none";
  serverPostBtn.style.zIndex = "10";
  popUpTable.style.display = "none";
  serverPostBtn.removeEventListener("mouseenter", mouseEnter);
  serverPostBtn.removeEventListener("mouseleave", mouseLeave);
  serverPostBtn.removeEventListener("click", postNew);
}
}

serverPostBtn.addEventListener("click", postNew);

function findDate(mm, dd, yy) {
  popUpAll.style.display = "none";
  popUpTable.style.display = "none";
  popUpTotal.style.display = "none";
  popUpTotal.textContent = "";
  viewDBAllBtn.textContent = "View the whole database";

  mm = vdMonth.value;
  dd = vdDay.value;
  yy = vdYear.value;
  fetch(`http://localhost:3000/hours?date_like=${mm}/${dd}/${yy}`)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.length === 0) {
        colorSwap(viewDateBtn, "View", "18px");
      } else {
        data.forEach((e) => {
          let viewDateDiv = document.createElement("div");
          viewDateDiv.className = "data-div";
          viewDateDiv.id = `view-date-time-info${e.id}`;
          viewDateDiv.innerText = `Date: ${e.date}  \n Start Time: ${e.startTime} \n End Time: ${e.endTime} \n Total Hours: ${e.total}`;
          popUpSearch.appendChild(viewDateDiv);
          if (viewDateDiv.innerText !== "") {
            viewDateBtn.textContent = "Add";
          }
        })
        popUpSearch.style.display = "flex";
        let viewDateClearBtn = document.createElement("button");
        viewDateClearBtn.id = "vdcb";
        viewDateClearBtn.textContent = "Clear";
        viewDateClearBtn.addEventListener("click", () => {
          popUpSearch.innerHTML = "";
          vdMonth.value = "";
          vdDay.value = "";
          vdYear.value = "";
          vdMonth.focus();
          viewDateBtn.textContent = "View";
          viewDateClearBtn.remove();
        })
        db2.appendChild(viewDateClearBtn);
      }
    })
    .catch((error) => {
      responseFail();
      console.log(error.message);
    })
}

viewDateBtn.addEventListener("click", () => {
  if(viewDateBtn.nextElementSibling !== null) {
    document.getElementById("vdcb").remove();
  }
  findDate();
  tableScroll(popUpSearch);
  viewDateBtn.blur();
})

function deleteLastDB() {
  const lastEntry = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json/",
      "Accept": "application/json"
    }
  }
  fetch(`http://localhost:3000/hours/`)
    .then((resp) => resp.json())
    .then((data) => {
      let lastID = data.length;
      fetch(`http://localhost:3000/hours/${lastID}`, lastEntry)
      .then((resp) => resp.json())
      .then((dat) => dat)
      .catch((error) => {
        responseFail();
        console.log(error.message);
      })
    })
}

function completeTotal() {
  popUpTable.style.display = "none";
  popUpSearch.style.display = "none";
  popUpAll.style.display = "none";
  viewDBAllBtn.textContent = "View the whole database";


  if (popUpTotal.textContent === "") {
    fetch(`http://localhost:3000/hours`)
      .then((resp) => resp.json())
      .then((data) => {
        let sum = [];
        data.forEach((e) => {
          sum.push(e.total);
        })
        function addSum(tot, nexNum, index, array) {
          return tot + Number(nexNum);
        }
        let allHours = sum.reduce(addSum);
        let bigTotalDiv = document.createElement("div")
        bigTotalDiv.id = "big-total-div";
        bigTotalDiv.innerHTML = `Total Recorded Hours: <strong>${allHours}</strong> <br> Average Hours per Session: <strong>${(allHours / sum.length).toFixed(2)}</strong>`
        popUpTotal.appendChild(bigTotalDiv);
      })
      .catch((error) => {
        responseFail();
        console.log(error.message);
      })
  popUpTotal.style.display = "block";
  }
}

dbTotalBtn.addEventListener("click", () => {
  completeTotal();
  tableScroll(popUpTotal);
  dbTotalBtn.blur();
})

