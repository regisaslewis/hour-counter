const compute = document.getElementById("compute");
compute.addEventListener("click", addHours);
const hours = document.createElement("h2");
hours.setAttribute("id", "hours");

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
function totalHours(hr1, mn1, hr2, mn2) {
    hr1 = Number(document.getElementById("hr1").value);
    hr2 = Number(document.getElementById("hr2").value);
    mn1 = Number(document.getElementById("mn1").value);
    mn2 = Number(document.getElementById("mn2").value);
    if (hr1 <= 23 && hr2 <= 23 && mn1 <= 59 && mn2 <= 59) {
     if ( hr1 > hr2) {
      hr2 += 24;
    } return (minutesToDecimals(hr2, mn2) - minutesToDecimals(hr1, mn1)).toFixed(2);
  } else {
    return "Invalid Times";
  } 
}

function addHours() {
    hours.innerText = totalHours();
    document.getElementById("total").appendChild(hours);
}

document.getElementById("compute").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    return addHours();
  } else if ( event.key === "Backspace") {
    document.getElementById("mn2").focus();
  }
})