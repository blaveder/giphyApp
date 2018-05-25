
$(document).ready(function () {
    var standardList = ["kitty", "puppy", "cockatoo", "bird", "funny", "donald Trump"];





    function buttonGenerator(firstList) {
        var buttonContainer = $("#button-container");
        $("#button-container").empty();

        for (var i = 0; i < firstList.length; i++) {
            var button = $("<input type='button'>");

            buttonContainer.append(button);
            button.attr({ value: firstList[i], class: "btn btnSp btn-light" });
        }
        if (firstList.length == 20) {
            firstList.splice(5, firstList.length)
        }


        $(".btn").on("click", function () {

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
                    p.text(results[i].title);
                    cards.attr("class", "row test");
                    cards.append(cardColumn);
                    cardColumn.append(carDiv);
                    carDiv.append("<img src=" + results[i].images.fixed_height.url + ' ' + 'class=' + '"' + 'card-img-top' + '"' + "/>");

                    carDiv.append(cardBody);
                    cardBody.append(h5);
                    cardBody.append(p);


                    h5.text("Rating: " + results[i].rating);




                    $("#gif-container").addClass("test");
                }
            });

        });
    }
    buttonGenerator(standardList);

    $("#add-image").on("click", function (event) {

        event.preventDefault();

        var userInput = $("#user-input").val();
        // console.log(userInput);
        // console.log(standardList);
        standardList.push(userInput);
        buttonGenerator(standardList);
        $("#user-input").val("");
        $("#user-input").empty();

        if (userInput === "") {
            event.preventDefault();

            standardList.pop(-1);
        }
    });


});



