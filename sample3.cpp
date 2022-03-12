// reading a text file
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main () {
  string line = "Hello World!";
  /*
  ifstream myfile("F:\\HTML files\\blanktextfile.txt");
  if (myfile.is_open())
  {
    while ( getline (myfile,line) )
    {
      cout << line << '\n';
    }
    myfile.close();
  }

  else cout << "Unable to open file"; 
*/

fstream myfile("F:\\HTML files\\shehack\\blanktextfile.txt");

myfile <<line;

  return 0;
}