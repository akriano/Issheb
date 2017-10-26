var calculate = document.getElementById("calculate");
var output = document.GetElemntById("output");


var operation=function(){
if(widow.worker){
var worker=new worker ("weworker.js");
var num= Number(document.GetElementById("fact").value);
worker.postMessage(num);
worker.onmessage=function(e){
output.innerHTML= e.data;
};
}


}

calculate.addEventListner("click",operation);
