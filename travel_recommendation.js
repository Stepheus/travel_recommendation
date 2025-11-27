//Doc element

var user_input = document.getElementById("search_bar").value;
var display_div = document.getElementById("recommendation-result");

function resetEntry(){
    document.getElementById("search_bar").value = "";
}

function searchCity(){
    let user_input = document.getElementById("search_bar").value;
    console.log({user_input});
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        
        findPlace(user_input, data);
    
        


    })
    .catch(error=> console.error({error})
    );
}

function findPlace(user_input, data){
        //clear previous input
        document.getElementById("recommendation-result").innerHTML = "";
        //database structure
        //I need loops that go through an object => 3 keys => countries, temples, beaches =>
        // 1 array => each array is different
        // Countries array => 3 objects () => id, name of country, cities => city key array of 2 objects
        // => 3keys => name, image, and description
        // Temple array => 4 objects => id, name, image, description
        // beaches array  => 4 objects => id, name, image, description
         
        //Be cause of the difference in their structure, I'm gonna use two big loop to go through
        //them and find if entry exist

    //for countries search
    
    //A logic that takes user value and if beach, beaches/ temple, temples, / countries, country/
    // give at least two recommendation: Need case studies. Let's start with countries

    let previous_value, country, city, beach, temple; // to make sure we're not printing the same info twice

    switch (user_input.toLowerCase()){
        case "countries":
        case "country":
            for (let x = 0; x < 2 /*to give 2 recommendations*/; x++){

                do{
                    country = Math.floor(Math.random() * data.countries.length);
                    city = Math.floor(Math.random() * data.countries[x].cities.length);
                } while (data.countries[country].cities[city] == previous_value);
                
                previous_value = data.countries[country].cities[city];
                displayResult(data.countries[country].cities[city]);
            }
            break;
        case "beach":
        case "beaches":
              for (let x = 0; x < 2 /*to give 2 recommendations*/; x++){
                do{
                    beach = Math.floor(Math.random() * data.beaches.length);

                } while (previous_value == data.beaches[beach]);

                previous_value = data.beaches[beach];
                displayResult(data.beaches[beach]);
               
            }
            break;
        case "temple":
        case "temples":
               for (let x = 0; x < 2 /*to give 2 recommendations*/; x++){
                    do{
                        temple = Math.floor(Math.random() * data.temples.length);

                    } while (previous_value == data.temples[temple]);

                    previous_value = data.temples[temple];

                    //to pass a time object
                    displayResult(data.temples[temple]);    
               
                }
            break;
        default:
            console.error("Please enter a valid entry: 'Beach', 'Country', or 'Temple'");
        

    }

    previous_value = "";       

}

function displayResult (place){

    // document.getElementById("recommendation-result").innerHTML = "";

    //the image
    console.log("displaying results");
    let place_img = document.createElement("img");
    place_img.alt = place.name;
    place_img.src = place.imageUrl;
    place_img.classList.add("img_recommendation");

    //the name
    let place_name = document.createElement("h2");
    place_name.innerText = place.name;

    //the description
    let place_description = document.createElement("p");
    place_description.innerText = place.description;
    place_description.classList.add("text_recommendation");

    //put them all together
    let text_div = document.createElement("div");
    text_div.append(place_name, place_description);
    text_div.classList.add("text_recommendation");

    //block div for display only
    let block_div = document.createElement("div");
    block_div.classList.add("active_block");
    document.getElementById("recommendation-result").append(block_div, place_img, text_div);


}

function clearDiv(){
    document.getElementById("recommendation-result").innerHTML = "";
}

