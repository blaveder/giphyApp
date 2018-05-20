
$(document).ready(function () {
    var standardList = ["kitty", "puppy", "cockatoo", "bird", "funny", "donald Trump"];
    var dynamic = ["maybe"];
    var buttonContainer = $("#button-container");



    function buttonGenerator(firstList) {

        $("#button-container").empty();

        for (var i = 0; i < firstList.length; i++) {
            var button = $("<input type='button'>");

            buttonContainer.append(button);
            button.attr({ value: firstList[i], class: "buttons" });
        }
        if (firstList.length == 20) {
            firstList.splice(5, firstList.length)
        }
    }
    buttonGenerator(standardList);

    $("#add-image").on("click", function (event) {

        event.preventDefault();

        var userInput = $("#user-input").val().trim();
        console.log(userInput);
        console.log(standardList);
        standardList.push(userInput);
        buttonGenerator(standardList);
        $("#user-input").val("");

        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response);




        // });buttonGenerator(standardList);
    });
    $("#user-input").empty();
});





