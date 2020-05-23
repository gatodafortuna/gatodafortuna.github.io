var frequency = 1;
var obtained = 0;

function myFunction() {
    $("input").prop("disabled", true);
    console.log(frequency);

    var gems = $("input").val();
    var roll = null

    var probability = Math.random() * 100;

    if (frequency == 1 && gems >= 20) {
        if (probability < 90) {
            roll = Math.round(Math.random() * (25 - 22 + 1)) + 22;
        } else {
            roll = Math.round(Math.random() * (28 - 26 + 1)) + 26;
        };
        document.getElementById("p1").innerHTML = $("#p1").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 20);
        gems = Number(gems) + (Number(roll) - 20);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 2 && gems >= 30) {
        if (probability < 87.5) {
            roll = Math.round(Math.random() * (36 - 33 + 1)) + 33;
        } else {
            roll = Math.round(Math.random() * (48 - 37 + 1)) + 37;
        };
        document.getElementById("p2").innerHTML = $("#p2").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 30);
        gems = Number(gems) + (Number(roll) - 30);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 3 && gems >= 65) {
        if (probability < 75) {
            roll = Math.round(Math.random() * (76 - 70 + 1)) + 70;
        } else if (probability < 95) {
            roll = Math.round(Math.random() * (83 - 77 + 1)) + 77;
        } else {
            roll = Math.round(Math.random() * (88 - 84 + 1)) + 84;
        };
        document.getElementById("p3").innerHTML = $("#p3").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 65);
        gems = Number(gems) + (Number(roll) - 65);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 4 && gems >= 150) {
        if (probability < 75) {
            roll = Math.round(Math.random() * (170 - 158 + 1)) + 158;
        } else if (probability < 95) {
            roll = Math.round(Math.random() * (179 - 171 + 1)) + 171;
        } else {
            roll = Math.round(Math.random() * (188 - 180 + 1)) + 180;
        };
        document.getElementById("p4").innerHTML = $("#p4").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 150);
        gems = Number(gems) + (Number(roll) - 150);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 5 && gems >= 240) {
        if (probability < 75) {
            roll = Math.round(Math.random() * (264 - 250 + 1)) + 250;
        } else if (probability < 97) {
            roll = Math.round(Math.random() * (275 - 265 + 1)) + 265;
        } else {
            roll = Math.round(Math.random() * (288 - 276 + 1)) + 276;
        };
        document.getElementById("p5").innerHTML = $("#p5").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 240);
        gems = Number(gems) + (Number(roll) - 240);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 6 && gems >= 330) {
        if (probability < 79) {
            roll = Math.round(Math.random() * (355 - 348 + 1)) + 348;
        } else if (probability < 91) {
            roll = Math.round(Math.random() * (369 - 356 + 1)) + 356;
        } else if (probability < 98) {
            roll = Math.round(Math.random() * (380 - 370 + 1)) + 370;
        } else {
            roll = Math.round(Math.random() * (388 - 381 + 1)) + 381;
        };
        document.getElementById("p6").innerHTML = $("#p6").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 330);
        gems = Number(gems) + (Number(roll) - 330);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 7 && gems >= 500) {
        if (probability < 79) {
            roll = Math.round(Math.random() * (535 - 520 + 1)) + 520;
        } else if (probability < 91) {
            roll = Math.round(Math.random() * (555 - 536 + 1)) + 536;
        } else if (probability < 98) {
            roll = Math.round(Math.random() * (573 - 556 + 1)) + 556;
        } else {
            roll = Math.round(Math.random() * (588 - 574 + 1)) + 574;
        };
        document.getElementById("p7").innerHTML = $("#p7").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 500);
        gems = Number(gems) + (Number(roll) - 500);
        $("input").val(gems);
        frequency++;
    } else if (frequency == 8 && gems >= 660) {
        if (probability < 85) {
            roll = Math.round(Math.random() * (738 - 688 + 1)) + 688;
        } else if (probability < 96) {
            roll = Math.round(Math.random() * (789 - 739 + 1)) + 739;
        } else if (probability < 99) {
            roll = Math.round(Math.random() * (840 - 790 + 1)) + 790;
        } else {
            roll = Math.round(Math.random() * (888 - 888 + 1)) + 841;
        };
        document.getElementById("p8").innerHTML = $("#p8").text() + roll;
        obtained = Number(obtained) + (Number(roll) - 660);
        gems = Number(gems) + (Number(roll) - 660);
        $("input").val(gems);
        frequency = 0;
    };
    document.getElementById("obtained").innerHTML = "Você obteve " + Number(obtained) + " gemas avançadas";
};
