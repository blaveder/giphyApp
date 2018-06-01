$(document).ready(function () {
    var standardList = ["kitty", "puppy", "cockatoo", "bird", "funny", "donald Trump"];
    var donaldTrump = "donald Trump";





    function buttonGenerator(firstList) {

        var buttonContainer = $("#button-container");
        $("#button-container").empty();

        if (firstList.length == 10) {
            console.log("we got to 20")
            standardList = firstList.slice(0, 6)
            console.log(standardList);

            //   $("#button-container").empty();

            buttonGenerator(standardList);



            // console.log(firstList.indexOf(donaldTrump));


        }
        else {
            for (var i = 0; i < firstList.length; i++) {
                var button = $("<input type='button'>");

                buttonContainer.append(button);
                button.attr({ value: firstList[i], class: "btn btnSp btn-light" });
            }


        }

    }
    buttonGenerator(standardList);

    $("#button-container").on("click", ".btn", function () {

        var person = $(this).attr("value");
        var offset = Math.floor((Math.random() * 10) * 10);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=Nd2l5e3g2sVHIOCLQfXIKRY2OIutniDC&limit=12&offset=" + offset + '"';

        console.log(person);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            console.log(results);
            var cardClass = "card";
            $("#gif-containers").empty();
            for (var i = 0; i < results.length; i++) {
                var cards = $("#gif-containers");
                var cardColumn = $("<div class='col-lg-3 col-xs-3'>");
                var carDiv = $("<div class='card'>");
                var cardBody = $("<div class='card-body'>");
                var h5 = $("<h5 class='card-title'>");
                var p = $("<p class='card-text'>");
                var imageGif = $("<img>");
                p.text(results[i].title);
                cards.attr("class", "row test");
                cards.append(cardColumn);
                cardColumn.append(carDiv);
                // carDiv.append("<img src=" + results[i].images.fixed_height.url + ' ' + 'class=' + '"' + 'card-img-top' + '"' + "/>");
                carDiv.append(imageGif);
                imageGif.attr("src", response.data[i].images.fixed_height.url, response.data[i].images.fixed_height_still.url);
                imageGif.attr("data-animate", results[i].images.fixed_height.url);
                imageGif.attr("data-still", results[i].images.fixed_height_still.url);
                imageGif.attr("data-state", "animated");
                imageGif.attr("class", "card-img-top");
                carDiv.append(cardBody);
                cardBody.append(h5);
                cardBody.append(p);


                h5.text("Rating: " + results[i].rating);




                $("#gif-container").addClass("test");
            }
        });

    });


    $("#add-image").on("click", function (event) {

        event.preventDefault();
        var userInput = $("#user-input").val();
        console.log(userInput);


        if (!userInput) {
            // event.preventDefault();
            console.log("looks like an empty string");

            // standardList.pop(-1);
        }
        else {
            standardList.push(userInput);
            buttonGenerator(standardList);
            $("#user-input").val("");
            // $("#user-input").empty();
        }


        // console.log(userInput);
        // console.log(standardList);



    });
    $("body").on("click", ".card-img-top", function (event) {

        console.log("whyyyyy")
        var animate = $(this).attr("data-animate");

        var state = $(this).attr("data-state");
        console.log(this);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });

});
