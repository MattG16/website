<html>
  <head>
    <style>
       input {
        margin: 15px;
      }
      h1 {
        text-align: center;
      }
      #exp {
        text-align: center;
      }
    </style>
    <title>Caesar Cipher</title>
  </head>
  <body>
    <h1>Digital Ceasar Cipher</h1>
    <p id="exp">This is a digital Ceasar Cipher. Since it is digital and uses key codes it is slightly more secure as some letters, when encrypted, may look like symbols which would trick whoever is trying to crack your code. Since the program is based on the digital alphabet of codes for every character on the keyboard the code #'s you can input any integer from -22 to 3. The number of possibilities in the cipher remains the same as a traditional Ceasar cipher just the characters are different therefore codes made using this application can only be cracked by this application. You must reset after every time or the program will break. Spaces are represented either by a square or a space in the encrypted code. Decrypt still in dev.</p>
      <span>Message:</span><input type="text" id="message">
      <br>
      <span>Code #:</span><input type="number" id="int" min= -22 max= 3>
      <br>
      <button onclick="encrypt()">Encrypt</button>
      <button onclick="decrypt()">Decrypt</button>
      <button onclick="reset()">Reset</button>
      <br>
      <br>
      <br>
       <p id="demo"></p>
    <script>
      var message = [];
      var msg = document.getElementById("message").value;
      var int = document.getElementById("int").value;
      
      function encrypt() {
        if(document.getElementById("int").value > 3 || document.getElementById("int").value < -22) {
          window.location.reload();
        } else {
         document.getElementById("message").value.toUpperCase();
        for(var i = 0; i < document.getElementById("message").value.length; i++) {
        message.push(document.getElementById("message").value.charCodeAt(i));
        console.log(message);
        message[i] = message[i] + parseInt(document.getElementById("int").value);
        console.log(message);
        message[i] = String.fromCharCode(message[i]);
        }
        console.log(message);
        document.getElementById("demo").innerHTML = message.join("");
      }
      }

      function decrypt() {
         if(document.getElementById("int").value > 3 || document.getElementById("int").value < -22) {
          window.location.reload();
        } else {
         document.getElementById("message").value.toUpperCase();
        for(var i = 0; i < document.getElementById("message").value.length; i++) {
        message.push(document.getElementById("message").value.charCodeAt(i));
        console.log(message);
        message[i] = message[i] - parseInt(document.getElementById("int").value);
        console.log(message);
        message[i] = String.fromCharCode(message[i]);
        }
        console.log(message);
        document.getElementById("demo").innerHTML = message.join("");
      }
      }


       function reset() {
        window.location.reload();
      }

    </script>
  </body>
</html>
