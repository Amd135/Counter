let count=0;

function increase(){
    count= count+1;
    document.getElementById("num").innerText=count;

}
function start(){
    alert("start");
    count=0;
  
}

function reset(){
    let count1 = count + "-";
    document.getElementById("txt").innerText += count1;
    document.getElementById("num").innerText=0;
    count=0;
}