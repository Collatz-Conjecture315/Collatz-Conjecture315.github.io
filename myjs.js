
  // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Dine the event listener function
  

  var onButtonClick = function() {

    var cipher = document.getElementById("lang").value;
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

   for (i=0;i<newname.length;i++){
     var ascii = newname.charCodeAt(i)-key;

    if (96<ascii && ascii<123){
     var t = String.fromCharCode(newname.charCodeAt(i)-key);
     document.write(t);
   } else if(90<ascii && ascii<97){
    var t = String.fromCharCode(newname.charCodeAt(i)+26-key);
    document.write(t);
  } 
    else if(64<ascii &&ascii<91){
    var t = String.fromCharCode(newname.charCodeAt(i)-key);
    document.write(t);
  }else if( ascii<65){
    var t = String.fromCharCode(newname.charCodeAt(i)+26-key);
    document.write(t);
  }
  }
   }
    
    else{
      document.write("This is not Caesar Cipher");
    }
      
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);


