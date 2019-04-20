// JavaScript Document
function myFunction() {
  var x = document.createElement("INPUT");
x.setAttribute("type", "file");
  document.body.appendChild(x);
}

        function charcounts (startfrom, charend)
        {
            var len=document.getElementById(startfrom).value.length;
            document.getElementById(charend).innerHTML=len;
            
        }
