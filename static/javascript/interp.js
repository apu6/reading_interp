
$(document).ready(() => {

    const $part1 = $("#part1");
    const $part2 = $("#part2");
    const $part3 = $("#part3");
    const $part4 = $("#part4");
    const $analysis1 = $("#analysis1");
    const $analysis2 = $("#analysis2");
    const $analysis3 = $("#analysis3");
    const $analysis4 = $("#analysis4");

    $part1.on("mouseover", function() {
        $analysis1.show();
        $(document.body).attr("style", "background-image: url('static/images/painting2.png')");
    });
    $part1.on("mouseout", function() {
        $analysis1.hide();
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $part2.on("mouseover", function() {
        $analysis2.show();
        $(document.body).attr("style", "background-image: url('static/images/painting3.png')");
    });
    $part2.on("mouseout", function() {
        $analysis2.hide();
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $part3.on("mouseover", function() {
        $analysis3.show();
        $(document.body).attr("style", "background-image: url('static/images/painting4.jpeg')");
    });
    $part3.on("mouseout", function() {
        $analysis3.hide();
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $part4.on("mouseover", function() {
        $analysis4.show();
        $(document.body).attr("style", "background-image: url('static/images/painting5.png')");
    });
    $part4.on("mouseout", function() {
        $analysis4.hide();
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
});