//enter 
function greet() {
    var  name= document.getElementById("nameInput").value; 
    if(name ==""){ 
        document.getElementById("output").innerHTML=" pls. type your name!!";
    } else {
        document.getElementById("output").innerHTML="HELLO," + name + " ! :)"; 
        document.getElementById("goBtn").style.display="block" ;
    }
}

      
