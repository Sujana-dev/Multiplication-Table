let inputBox = document.querySelector(".input")
let error = document.querySelector(".output")
let button = document.querySelector(".btn")
let multiPlication = document.querySelector(".multi")


button.addEventListener("click",function(){
    let getValue = inputBox.value
    if(inputBox.value == " "){
         error.innerHTML = "Please enter Number"
     }
    else if(isNaN (inputBox.value)){
        error.innerHTML ="Please Enter a Number"
    }
    else{
        for(let i=1; i<=10; i++){
            multiPlication.innerHTML += getValue + "x" + i + "=" + getValue*i + "<br>"
        }
        
    }
})