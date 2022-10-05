let countEl=document.getElementById("count-el");
let count=0;


function increment(){
    count=count+1;
    countEl.innerText=count;
    console.log(count);
}


function save(){
    console.log(count);
}


if (countEl>45){
    alert("It is full");
}








