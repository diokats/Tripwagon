jQuery( init );

// Same as: jQuery( document ).ready( init );

// Our Application logic goes here:
function init( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandler
    }

    function jsonHandler( data ){
        function getCity( hotel ){ // 4 times: 1 { ... }, 2 { ... }, 3 { ... }, 4 { ... }
        return hotel.city;
    }

        let entries = data[1].entries;
        // console.log( entries ); 
        let cities = entries.map( getCity ); // Array[ { HOTEL } x 4 ]
        let uniqueCities = removeDups(cities);
        console.log( uniqueCities );
        createOptions(uniqueCities);
        
    }

  
        

        function removeDups(names) {
            let unique = {
                Paris: true,
                Marseille: true,
                Toulouse: true,
            };
            names.forEach(function(i) {
              if(!unique[i]) { unique[i] = true; }
            });
            return Object.keys(unique);
          }
          
          function createOptions( listOfCities ){
            //1) get datalist
            let datalist = document.querySelector("#cities-list");
            console.log(datalist);
            //2)loop over unique cities array
           listOfCities.map(addOption);

            function addOption(city){
 
                datalist.innerHTML += `<option value="${ city }"></option>;`;

            }
                //2.1)inside loop
                //-create city value
                //-add a datalist (innerHTML)
                //-HINT: datalist.innerHTML= "<option>...</option>";

          }


    

    $.ajax( options );

}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });