
//   This function aids in the generation of ciphers. This also, when returned the ciphers, returns the original string to that cipher.
  function generateCipherStr (string) {
    
        // This function checks the kind of strings that is being passed.
    function base64(str) {
    //   This conditional statement is to know when the inserted string is empty 
      if (str === "" || str.trim() === "") {

    //  If empty return false hence
        return false;
      } try {
    //  Run a try that returns btoa method whose value is atob method of the string.
    //     All, the atob inserted in the btoa method, strictly equal to the string. 
        return btoa(atob(str)) === str;

      } catch (err) {
    //     Catch the error by returning a false
        return false; 
      }
    }
  
    
//     Do a conditional statement with the tenary operator to know what kind of value is passed to the generateCipherStrg function.
//     When the string passed is a cipher, return the original string to the cipher passed atob(string) else return a cipher.
    return base64(string) ? console.log(atob(string)) : console.log(btoa(string));
  }
 

//   Testing generateCipherStr
  generateCipherStr("Hello World");

