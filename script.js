const compute = document.getElementById("compute");
compute.addEventListener("click", addHours);
const addToday = document.getElementById("addToday");
addToday.addEventListener("click", moveToTable);
const hours = document.createElement("h2");
hours.setAttribute("id", "hours");
const h1 = document.getElementById("hr1");
const m1 = document.getElementById("mn1");
const h2 = document.getElementById("hr2");
const m2 = document.getElementById("mn2");

function autotab (input1, input2) {
  if (document.getElementById(input1).value.length == 2) {
    document.getElementById(input2).focus();
  }
}

function deleteBack (inp1, inp2) {
  document.getElementById(inp1).addEventListener("keyup", function (event) {
    if (event.key === "Backspace" && document.getElementById(inp1).value.length === 0) {
      document.getElementById(inp2).focus();
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
     if ( hr1 > hr2) {
      hr2 += 24;
    } return (minutesToDecimals(hr2, mn2) - minutesToDecimals(hr1, mn1)).toFixed(2);
  } else {
    return "Invalid Times";
  } 
}

function addHours() {
    hours.innerText = totalTime();
    document.getElementById("total").appendChild(hours);
}

document.getElementById("compute").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("addToday").focus();
    return addHours();
  } else if ( event.key === "Backspace") {
    document.getElementById("mn2").focus();
  }
})

function reset() {
  h1.value = "";
  h2.value = "";
  m1.value = "";
  m2.value = "";
  hours.innerText = "";
  document.getElementById("hr1").focus();
}

function moveToTable() {
  let table = document.getElementById("table");
  let newRow = table.insertRow(-1); 
  let newCell = newRow.insertCell(0);
  let hoursText = document.createTextNode(`${h1.value}:${m1.value} - ${h2.value}:${m2.value}`);
  newCell.appendChild(hoursText);
  let newCell2 = newRow.insertCell(1);
  let timeText = document.createTextNode(hours.innerText);
  newCell2.appendChild(timeText);
  reset();
}