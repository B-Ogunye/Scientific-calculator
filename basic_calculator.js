
var firstnum;
var secondnum;
var result;
var operator;

function num1(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "1";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "1";
    }
}
function num2(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "2";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "2";
    }
}
function num3(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "3";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "3";
    }
}
function num4(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "4";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "4";
    }
}
function num5(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "5";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "5";
    }
}
function num6(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "6";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "6";
    }
}
function num7(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "7";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "7";
    }
}
function num8(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "8";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "8";
    }
}
function num9(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "9";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "9";
    }
}
function num0(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == "0";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + "0";
    }
}
function float(){
    if ( document.result_panel.display.value == result){
        document.result_panel.display.value == ".";
    }
    else {
        document.result_panel.display.value = document.result_panel.display.value + ".";
    }
}


function clr(){
    document.result_panel.display.value = "";
    document.result_panel.enter.value = "";
    return;
}
function del() {
    document.result_panel.display.value = document.result_panel.display.value.substring(0, document.result_panel.display.value.length - 1);
    documnt.result_panel.enter.value = document.result_panel.display.value;
}
function addop(){
    operator = "+";
    firstnum = parseInt(document.result_panel.display.value);
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + " " + operator + " " ;
}
function subop(){
    operator = "-";
    firstnum = parseInt(document.result_panel.display.value);
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + " " + operator + " ";
}
function multop(){
    operator = "*";
    firstnum = parseInt(document.result_panel.display.value);
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + " " + operator + " ";
}
function divideop(){
    operator = "/";
    firstnum = parseInt(document.result_panel.display.value);
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + " " + operator + " ";
}
function percentop(){
    operator = "%";
    firstnum = parseInt(document.result_panel.display.value);
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + " " + operator + " ";
}
function sqrtop(){
    firstnum = document.result_panel.display.value;
    result = Math.sqrt(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "sqrt(" + firstnum + ")";
}
function pi(){
    operator = "pi";
    firstnum= parseInt(document.result_panel.display.value);
    result = Math.PI(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;                
    document.result_panel.enter.value = firstnum + operator;
}
function e(){
    operator = "E";
    firstnum= parseInt(document.result_panel.display.value);
    result = firstnum * 2.718;
    document.result_panel.display.value = result;
    document.result_panel.display.value = firstnum + operator;
}
function cos(){
    firstnum = parseInt(document.result_panel.display.value);
    if(document.calcbutton.angle[0].checked){
        firstnum *= Math.PI / 180;
    }
    else if(document.calcbutton.angle[2].checked){
        firstnum *= Math.PI / 200;
    }
    else{
        firstnum;
    }
    result = Math.cos(firstnum);
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "cos(" + firstnum + ")";
}
function sin(){
    firstnum = document.result_panel.display.value;
    result = Math.sin(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "sin(" + firstnum + ")";
}
function tan(){
    firstnum = document.result_panel.display.value;
    result = Math.tan(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "tan(" + firstnum + ")";
}
function log(){
    firstnum = document.result_panel.display.value;
    result = Math.log10(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "log(" + firstnum + ")";
}
function ln(){
    firstnum = document.result_panel.display.value;
    result = Math.log(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "ln(" + firstnum + ")";
}
function arcsin(){
    firstnum = document.result_panel.display.value;
    result = Math.asin(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "arc_sin(" + firstnum + ")";
}
function arccos(){
    firstnum = document.result_panel.display.value;
    result = Math.acos(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "arc_cos(" + firstnum + ")";
}
function arctan(){
    firstnum = document.result_panel.display.value;
    result = Math.atan(parseInt(document.result_panel.display.value));
    document.result_panel.display.value = result;
    document.result_panel.enter.value = "arc_tan(" + firstnum + ")";
}
    

function raise(){
    operator = "^";
    firstnum = document.result_panel.display.value;
    document.result_panel.display.value = "";
    document.result_panel.display.value = firstnum + operator;
    
}
function fact (firstnum){
    result = 1;
    for(var i = 1; i <= firstnum; i++){
        result *= i;
        }
        return result;
}
function factorial(firstnum){ 
    operator = "!";
    firstnum = parseInt(document.result_panel.display.value);
//result = fact();
    document.result_panel.display.value = fact(firstnum);
    document.result_panel.enter.value = firstnum + operator;

}

function equals(){
    secondnum = parseInt(document.result_panel.display.value);
    if (operator == "+"){
    result = firstnum + secondnum;
    }
    else if (operator == "-"){
        result = firstnum - secondnum;
    }
    else if (operator == "*"){
        result = firstnum * secondnum;
    }
    else if (operator == "/"){
        result = firstnum / secondnum;
    }
    else if(operator == "^"){
        result = Math.pow(firstnum,secondnum);
    }
    else if (operator == "%"){
        if (document.result_panel.display.value != "0"){
           result = firstnum / 100;
        }
        else if(document.result_panel.display.value  > 1){
          result = (firstnum / secondnum) * 100;
        }
    }
    document.result_panel.display.value = "";
    document.result_panel.display.value = result.toString();
    document.result_panel.enter.value = firstnum + " " + operator + " " + secondnum;
    
}