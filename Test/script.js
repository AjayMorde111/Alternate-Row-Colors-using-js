
var t = document.getElementById("myTable");
var r = t.getElementsByTagName("tr");

for (var i = 1; i < r.length; i =i+2) {
    r[i].className = "red";
}
for (var i = 0; i < r.length; i=i+2) {
    r[i].className = "green";
}
