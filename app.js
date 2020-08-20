function getnumber(num){
    var result=document.getElementById('result')
    result.value+=num
}
function clearinp(){
    var result=document.getElementById('result')
    result.value=""
}
function ans(){
    var result=document.getElementById('result')
    result.value=eval(result.value)
}