function WriteToFile(passForm) {
 
    var fso = CreateObject("Scripting.FileSystemObject"); 
    var s = fso.CreateTextFile("F:\HTML files\blanktextfile.txt", True);
  
   var firstName = document.getElementById('fname');
   var lastName  = document.getElementById('lname');
  
   s.writeline("First Name :" + FirstName);
   s.writeline("Last Name :" + lastName);
  
   s.writeline("-----------------------------");
   s.Close();
   
  // Requiring fs module in which
// writeFile function is defined.
const fs = require('F:\HTML files\blanktextfile.txt')
  
// Data which will write in a file.
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})

var mine = document.innerHTML("snidufns");
  }