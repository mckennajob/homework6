//array of food for foodButton
var topics = ['pizza', 'donuts', 'candy'];


$("button").on("click", function() {
  var food = $(this).attr("data-food");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=lUCopZA9sS6dh6TMpuviqZpz5LdmPI4S&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response) {

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div with the class "item"
          var gifDiv = $("<div class='item'>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var foodImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          foodImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(foodImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
       }

           $("#add-button").on("click", function(event) {
             event.preventDefault();
             var food = $("#giphy-input").val().trim();
             topics.push(food);
             renderButtons();
           });

    });



})










//SOME STUFF I LEARNED FROM MY TUTOR
// function getGifs() {
//
//
//
//   var food = $(this).attr("data-food");
//
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=lUCopZA9sS6dh6TMpuviqZpz5LdmPI4S&limit=5";
//
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//
//
//   for(var i = 0; i < topics.length; i++) {
//
//     console.log(topics[i]);
//
//     var button = $('<button>')
//
//     button.addClass('foodButton');
//
//     // Add more things to the buttons like text
//
//     // $("#buttons").append(button);
//     //
//     // $(".foodButton").text(topics[i]);
//
//     $("#gifs-appear-here").prepend(gifDiv);
//
//
//   }
// };



//$('#buttons').on("click",)
