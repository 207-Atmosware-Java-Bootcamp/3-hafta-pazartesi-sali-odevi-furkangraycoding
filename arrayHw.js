var num;
var rand;
var sum = 0;
var even = 0;
var odd = 0;
var arr = [];
var arrNew = [];
num = Number(prompt("Enter array length"));
function arrays(num) {
    for (var i = 0; i < num; i++) {
                rand = Math.round(Math.random() * 9 + 1);
                arr[i] = rand;
                arrNew[i] = rand + 1;
                sum += rand;
                if (rand % 2 == 0) {
                    even += rand;
                } else {
                    odd += rand;
                }}}
arrays(num);
document.write("<br> Array: "+arr);
document.write("<br> First: " + arr[0]);
document.write("<br> Last: " + arr[num - 1] + "<br>");
document.write("<br> Sum of evens: " + even);
document.write("<br> Sum of odds: " + odd);
document.write("<br> sum of elements: " + sum + "<br>");
document.write("<br> sorted array lower to higher: "+arr.sort(function (a, b) { return a - b;}));
document.write(" <br> sorted higher to sorted: "+arr.sort(function (a, b) {return a - b;}).reverse());
document.write("<br> +1 added array: "+arrNew);