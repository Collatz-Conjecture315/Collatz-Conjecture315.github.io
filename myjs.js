
  // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Define the event listener function
  var onButtonClick = function() {
    var name = document.getElementById("name").value;
    var result = "Your result is "+ name;
    document.getElementById("message").textContent += result;  
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);
