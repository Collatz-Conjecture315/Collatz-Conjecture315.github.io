
  // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Define the event listener function
  var onButtonClick = function() {
    var cipher = document.getElementById("lang").value;
    var name = document.getElementById("name").value;
    var key = document.getElementById("key").value;
    if (cipher==="cc"){

      
      var result = "Your cipher is "+ cipher+" and your name is "+name;
      document.getElementById("message").textContent += result;
    }
    else{
      document.write("This is not Caesar Cipher");
    }
      
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);
