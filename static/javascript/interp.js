
$(document).ready(() => {

    const $poem = $("#poem");
    const $analysis = $("#analysis");
   
    $poem.on("mouseover", function() {
        console.log("hello");
        $analysis.show();
    });
    $poem.on("mouseout", function() {
        $analysis.hide();
    });
});