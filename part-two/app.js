$("form").submit(function(event){
    event.preventDefault();
    $("ul").append(`<li>Movie name: ${$("#movieName").val()} | Rating: ${$("#rating").val()}/10 <button class='removeBtn'>remove item</button></li>`);
    $("#movieName").val("");
    $("#rating").val("");
});

$("ul").on("click", ".removeBtn", function(event){
    $(this).parent().remove()
});