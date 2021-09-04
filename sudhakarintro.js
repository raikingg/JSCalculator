
function addfun() {
    // document.getElementById("forms").style.display = "none";

    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    a = parseInt(a);
    b = parseInt(b);
    var result;

    result = a + b;
    document.getElementById("heading1").innerHTML = result;
}
function subfun() {
    var result;
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    a = parseInt(a);
    b = parseInt(b);
    result = a - b;
    document.getElementById("heading1").innerHTML = result;
}
function mulfun() {
    var result;
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    a = parseInt(a);
    b = parseInt(b);
    result = a * b;
    document.getElementById("heading1").innerHTML = result;
}
function divfun() {
    var result;
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    a = parseInt(a);
    b = parseInt(b);
    if (a == 0) {
        result = 0;
        document.getElementById("heading1").innerHTML = result;
    }
    else if (b == 0) {
        result = "Infinity";
        document.getElementById("heading1").innerHTML = result;
    } else {
        result = a / b;
        document.getElementById("heading1").innerHTML = result;
    }
}
function clrfun() {
    document.getElementById("fname").value = null;
    document.getElementById("lname").value = null;

}


// function quadfun() {
//     var result1 = 0;
//     var result2 = 0;
//     var a = document.getElementById("aname").value;
//     var b = document.getElementById("bname").value;
//     var b = document.getElementById("cname").value;
//     a = parseInt(a);
//     b = parseInt(b);
//     c = parseInt(c);
//     var root = (b * b) - (4 * a * c);
//     result1 = (((root) - b)) / (2 * a);
//     result2 = -1 * (((root) + b)) / (2 * a);
//     console.log(result1);
//     document.getElementById("heading1").innerHTML = result1;
//     document.getElementById("heading2").innerHTML = result2;
// }