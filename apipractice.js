<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>API Practice</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </head>
  <body>
    Hello World!
    <button
      onclick="myGetRequest('https://api.openbrewerydb.org/breweries?by_city=charleston')"
    >
      GO GET BREWERIES
    </button>

    <div> id="breweries"</div>
    <script>
      function myGetRequest(url) {
        $.getJSON(url, function(response) {
            for(let i = 0; i < response.length; i++){
          console.log(response[i].name);
                document.getElementById("breweries").innerHTML = response[i].name + "<br />";
                
            }
        });
      }
    </script>
  </body>
</html>





