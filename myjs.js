
  // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Dine the event listener function
  //document.write("Hello Wolrd!!!!");
  //var key = document.getElementById("key").value;
  //document.getElementById("mypara").innerHTML+=key;
  

  var onButtonClick = function() {
    document.getElementById("mypara").innerHTML="Result is: ";
    var cipher = document.getElementById("langs").value;
    var name = document.getElementById("name").value;
    var newname = name;
    var key = document.getElementById("key").value;

     if (newname.length===0){
      alert("Enter an input! ")
      //break;
      }
    if (key.length==0){
      alert("Enter a key! ")
      //break;
    }

    if (cipher==="cc"){
      //document.getElementById("mypara").style.size=large;
   
   for (i=0;i<newname.length;i++){

    var cterm = newname.charCodeAt(i);
    if ((cterm>96 && cterm<123) ||(cterm>64 && cterm<91)){

     var ascii = newname.charCodeAt(i)-key;

    if (96<ascii && ascii<123){
     var t = String.fromCharCode(newname.charCodeAt(i)-key);
     document.getElementById("mypara").innerHTML+=t;
   } 
    else if(90<ascii && ascii<97){
    var t = String.fromCharCode(newname.charCodeAt(i)+26-key);
    document.getElementById("mypara").innerHTML+=t;
  } 
    else if(64<ascii &&ascii<91){
    var t = String.fromCharCode(newname.charCodeAt(i)-key);
    document.getElementById("mypara").innerHTML+=t;
  }
    else if( ascii<65){
    var t = String.fromCharCode(newname.charCodeAt(i)+26-key);
    document.getElementById("mypara").innerHTML+=t;
  }
  } 
  else{
  var t = String.fromCharCode(newname.charCodeAt(i))
  document.getElementById("mypara").innerHTML+=t;
  }
  }
   }
    
  else if(cipher==="bc"){
  var len = newname.length-key;
  for(i=len;i<newname.length;i++){
    var element = newname[i];
    document.getElementById("mypara").innerHTML+=element;
    
  }
  for(i=0;i<newname.length-key;i++){
    var element = newname[i];
    document.getElementById("mypara").innerHTML+=element;
  }

  
    
  }else{
      document.write("This is not Caesar Cipher");
    }
      
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);


