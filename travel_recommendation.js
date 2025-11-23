//Doc element

var user_input = document.getElementById("search_bar");
var result_div = document.getElementById("recommendation-result")

function resetEntry(){
    user_input.value = "";
}

function searchCity(){
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {

        let city = user_input.value;

        //database structure
        //I need loops that go through an object => 3 keys => countries, temples, beaches =>
        // 1 array => each array is different
        // Countries array => 3 objects () => id, name of country or temple or beach, cities => city key array of 2 objects
        // => 3keys => name, image, and description
        // Temple array => 4 objects => 4 keys => id, name, image, description
        // beaches array  => 4 objects => 4 keys => id, name, image, description
         
        //Check user input to give him the rigth info.
        //First we gonna if it's a city
        const countries = data.countries;
        //for ()
        


    })
    .catch(error=> console.error({error})
    );
}
