var hid = 0;
var pass =0;
var sr = -1; 
const text =  document.getElementById("text");
text.onclick = function() {
    if (sr==1) {
        
       window.open('https://ajoulinka.shop/');
       sr=0;
};
}

function saveHid()  {
    const hid = document.getElementById('hid').value;  
    if (hid == "202021577") {
        sr=sr+1;
    }
  }

  
  function savePassword()  {
    const pass = document.getElementById('pass').value;
    
    if (pass == "abcd1234") {
        sr= sr+1;
        text = "window.open('https://ajoulinka.shop/')" 
    } 
  }

  