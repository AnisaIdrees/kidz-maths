var countTypes = ["forwardcounting","backwardcounting"]
var userInput = prompt("what you want to see?\nForward-Counting!\nBackward-Counting!").toLowerCase();
if(userInput === "forwardcounting"){
    for(var i = 1; i <=100 ; i+= 10){
        document.write("<div class='row'>")
        for(var j = i; j<i+10;j++){
            document.write("<div class ='box'>"  + j + "</div>")
        }
        document.write("</div>")
        }
}
else if(userInput === "backwardcounting"){
    for(var i=100; i>=1; i-=10){
        document.write("<div class='row1'>")
        for(var j = i; j>i-10;j--){
            document.write("<div class='shadow'>"  + j + "</div>")
        }
        document.write("</div>")
        }
    }




var startNum = +prompt("Enter Start Number")
var endingNum = +prompt("Enter Ending Number")
var tableOf = +prompt("Enter The Table Number ")

document.write("<div class ='multiply-box'>")
for(var i= startNum; i<=endingNum; i++){
    document.write( tableOf + "  X  " +  i + " = " +( tableOf*i) +  "</br>")
}
document.write("</div>")






