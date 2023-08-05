let data = 0;
document.getElementById("counter_value").innerText = data;

//creation of increment function
function increament() {
  data += 1;
  document.getElementById("counter_value").innerText = data;
  document.getElementById("decrease_btn").innerHTML = "DECREASE";

  if (data % 2 == 0) {
    document.getElementById("counter_value").style.color = "red";
  } else {
    document.getElementById("counter_value").style.color = "blue";
  }
}
//creation of decrement function
function decreament() {
  if (data >= 1) {
    data -= 1;
    document.getElementById("counter_value").innerText = data;
  } else {
    counter_valuexddtdr;
    document.getElementById("decrease_btn").innerHTML = "Btn DISABLED";
  }

  if (data % 2 == 0) {
    document.getElementById("counter_value").style.color = "red";
  } else {
    document.getElementById("counter_value").style.color = "blue";
  }

  if (data === 0) {
    document.getElementById("counter_value").style.color = "deeppink";
  }
}

function reset() {
  console.log(data);
  data = 0;
  document.getElementById("counter_value").innerHTML = data;
  if (data === 0) {
    document.getElementById("counter_value").style.color = "deeppink";
  }
}
