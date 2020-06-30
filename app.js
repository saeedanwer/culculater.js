function getNumber(num){
    // console.log(num)
    var result = document.getElementById("result");
    result.value += num;

}
function clearbtn(){
    var result = document.getElementById("result");
    result.value =""

}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)

}
function back(){
    var result = document.getElementById("result")
    result.value = result.value.slice(0,-1)
}