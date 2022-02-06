farray=[];
function submit()
{
var f_1 = document.getElementById("nof1").value;
var f_2 = document.getElementById("nof2").value;
var f_3 = document.getElementById("nof3").value;
var f_4 = document.getElementById("nof4").value;
var f_5 = document.getElementById("nof5").value;
farray.push(f_1);
farray.push(f_2);
farray.push(f_3);
farray.push(f_4);
farray.push(f_5);
    console.log(farray);
    document.getElementById("display_name").innerHTML = farray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    farray.sort();
    console.log(farray);
    document.getElementById("display_name").innerHTML = farray;
   
}