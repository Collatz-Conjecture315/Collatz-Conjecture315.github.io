
  // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Dine the event listener function


  var onButtonClick = function() {
    var cipher = document.getElementById("lang").value;
    var name = document.getElementById("name").value;
    var newname = name;
    var key = document.getElementById("key").value;
    if (cipher==="cc"){

   for (i=0;i<newname.length;i++){
     var ascii = newname.charCodeAt(i)-key;
    if (96<ascii<123||64<ascii<91){
     var t = String.fromCharCode(newname.charCodeAt(i)-key);
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


