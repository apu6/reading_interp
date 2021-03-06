
$(document).ready(() => {

    const $part1 = $("#part1");
    const $part2 = $("#part2");
    const $part3 = $("#part3");
    const $part4 = $("#part4");
    const $analysis1 = $("#analysis1");
    const $analysis2 = $("#analysis2");
    const $analysis3 = $("#analysis3");
    const $analysis4 = $("#analysis4");
    const $undergrowth = $("#undergrowth");
    const $grassy = $("#grassy");
    const $morning = $("#morning");
    const $black = $("#black");
    const $woods = $("#woods");
    const $yellow = $("#yellow-woods");

    $undergrowth.on("mouseover", function() {
        console.log("aiyalskfjlskfjlskfj");
        $(document.body).attr("style", "background-image: url('static/images/undergrowth.png')");
    });
    $undergrowth.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $grassy.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/grassy.png')");
    });
    $grassy.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $morning.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/morning.png')");
    });
    $morning.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $black.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/black.jpg')");
    });
    $black.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $woods.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/woods.png')");
    });
    $woods.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });
    $yellow.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/yellow-woods.png')");
    });
    $yellow.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.png')");
    });

    const $randomize = $("#randomize");
    const $1 = $("#1");
    const $2 = $("#2");
    const $3 = $("#3");
    const $4 = $("#4");
    const $5 = $("#5");
    const $6 = $("#6");
    const $7 = $("#7");
    const $8 = $("#8");
    const $9 = $("#9");
    const $10 = $("#10");
    const $11 = $("#11");
    const $12 = $("#12");
    const $13 = $("#13");
    const $14 = $("#14");
    const $15 = $("#15");
    const $16 = $("#16");
    const $17 = $("#17");
    const $18 = $("#18");
    const $19 = $("#19");

    switch(Math.floor(Math.random() * 10)) {
        case 0:
            console.log("case 0");
            $randomize.append($1);
            $randomize.append($2);
            $randomize.append($11);
            $randomize.append($18);
            $(document.body).attr("style", "background-image: url('static/images/painting3.png')");
            break;
        case 1:
            console.log("case 1");
            $randomize.append($4);
            $randomize.append($8);
            $randomize.append($13);
            $randomize.append($2);
            $(document.body).attr("style", "background-image: url('static/images/painting4.png')");
            break;
        case 2:
            console.log("case 2");
            $randomize.append($7);
            $randomize.append($3);
            $randomize.append($10);
            $randomize.append($9);
            $(document.body).attr("style", "background-image: url('static/images/painting2.png')");
            break;
        case 3:
            console.log("case 3");
            $randomize.append($16);
            $randomize.append($19);
            $randomize.append($1);
            $randomize.append($4);
            $(document.body).attr("style", "background-image: url('static/images/painting.png')");
            break;
        case 4:
            console.log("case 4");
            $randomize.append($5);
            $randomize.append($6);
            $randomize.append($1);
            $randomize.append($13);
            $(document.body).attr("style", "background-image: url('static/images/painting5.png')");
            break;
        case 5:
            console.log("case 5");
            $randomize.append($6);
            $randomize.append($17);
            $randomize.append($15);
            $randomize.append($3);
            $(document.body).attr("style", "background-image: url('static/images/painting3.png')");
            break;
        case 6:
            console.log("case 6");
            $randomize.append($9);
            $randomize.append($10);
            $randomize.append($5);
            $randomize.append($16);
            $(document.body).attr("style", "background-image: url('static/images/painting2.png')");
            break;
        case 7:
            console.log("case 7");
            $randomize.append($18);
            $randomize.append($4);
            $randomize.append($9);
            $randomize.append($14);
            $(document.body).attr("style", "background-image: url('static/images/painting4.png')");
            break;
        case 8:
            console.log("case 8");
            $randomize.append($1);
            $randomize.append($10);
            $randomize.append($12);
            $randomize.append($6);
            $(document.body).attr("style", "background-image: url('static/images/undergrowth.png')");
            break;
        case 9:
            console.log("case 9");
            $randomize.append($16);
            $randomize.append($7);
            $randomize.append($3);
            $randomize.append($11);
            $(document.body).attr("style", "background-image: url('static/images/woods.png')");
            break;
        case 10:
            console.log("case 10");
            $randomize.append($8);
            $randomize.append($3);
            $randomize.append($1);
            $randomize.append($15);
            $(document.body).attr("style", "background-image: url('static/images/yellow-woods.png')");
            break;
        default:
            console.log("default");
            $randomize.append($4);
            $randomize.append($5);
            $randomize.append($6);
            $randomize.append($7);
            $(document.body).attr("style", "background-image: url('static/images/frost.png')");
            break;
    }

    $frost = $("#frost");
    $frost.on("mouseover", function() {
        $(document.body).attr("style", "background-image: url('static/images/frost.png')");
    });
    $frost.on("mouseout", function() {
        $(document.body).attr("style", "background-image: url('static/images/painting.jpeg')");
    });
});