var gems_temp = 0

$(document).on("click","#btn",function(){
	var gems = $("input[name=gems]").val();
	gems_temp = gems;
	if (gems >= 20) {
		var min=21;
		var max=28;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#20").text("1 : Roll 20 a 28 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn").attr("id", "btn2");
	}
});

$(document).on("click","#btn2",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 30) {
		var min=31;
		var max=48;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#30").text("2 : Roll 30 a 48 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn2").attr("id", "btn3");
	};
});

$(document).on("click","#btn3",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 65) {
		var min=66;
		var max=88;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#65").text("3 : Roll 65 a 88 = " + random)
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn3").attr("id", "btn4");
	};
});

$(document).on("click","#btn4",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 150) {
		var min=151;
		var max=188;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#150").text("4 : Roll 150 a 188 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn4").attr("id", "btn5");
	};
});

$(document).on("click","#btn5",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 240) {
		var min=241;
		var max=288;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#240").text("5 : Roll 240 a 288 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn5").attr("id", "btn6");
	};
});

$(document).on("click","#btn6",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 330) {
		var min=331;
		var max=388;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#330").text("6 : Roll 330 a 388 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn6").attr("id", "btn7");
	};
});

$(document).on("click","#btn7",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 500) {
		var min=501;
		var max=588;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#500").text("7 : Roll 500 a 588 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn7").attr("id", "btn8");
	};
});

$(document).on("click","#btn8",function(){
	var gems = $("input[name=gems]").val();
	if (gems >= 660) {
		var min=661;
		var max=888;
		var random = Math.floor(min + Math.random()*(max + 1 - min));
		var total = Number(gems) + (Number(random) - (Number(min) - 1))
		$("input[name=gems]").val(total);
		$("#660").text("8 : Roll 660 a 888 = " + random);
		var ganho = Number(total) - Number(gems_temp)
		$("#ganho").text("Gemas recebidas = " + ganho);
		$("#btn8").attr("id", "btn9");
	};
});
