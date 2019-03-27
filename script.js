$("button").click(function() {
    var waterStatus=$("input").val();
if (waterStatus > 211){
    $("p").text("Boiling!");
}else if (waterStatus < 33  ){
    $("p").text("Frozen!");
}else{
    $("p").text("Drink it!");
}
});


