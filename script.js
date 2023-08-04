let data = 0;
 document.getElementById("counter_value").innerText = data;
 
//creation of increment function
function increament() {
    data += 1;
    document.getElementById("counter_value").innerText = data;
}
//creation of decrement function
function decreament() {
    data -= 1;
    document.getElementById("counter_value").innerText = data;
}

function reset(){
document.getElementById("counter_value").value = "";
}