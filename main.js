var ultimaOperacao = false;
var operacao;
var operador01;

$(document).ready(function(){
$(".btn").click(function(){
	if(ultimaOperacao){
		$("#res").html($(this).html());
		ultimaOperacao = false;
	}
	else{
		$("#res").html(parseFloat(
			$("#res").html() + $(this).html())); 	
	}
})	 


$(".btnOp").click(function(){
	operador01 = parseFloat($("#res").html());
	operacao = $(this).html();
	ultimaOperacao = true;
});

$("#igual").click(function(){
	var operador02 = parseFloat($("#res").html());

	$("#res").css({backgroundColor: "lightgreen"})

	switch (operacao){
		case "+":
			$("#res").html(operador01 + operador02);
			break;
		case "-":
			$("#res").html(operador01 - operador02);
			break;
		case "*":
			$("#res").html(operador01 * operador02);
			break;
		case "/":
			$("#res").html(operador01 / operador02);

	}
})


$("#reset").click(function(){
	$("#res").html(0);
})
$("#res").mouseenter(function(){
	$("#res").css({backgroundColor: "lightBlue", fontFamily: "Arial"})
})
$("#res").mouseleave(function(){
	$("#res").css({backgroundColor: "rgba(224, 255, 224, 0.8)", fontFamily: "Arial"})
})
// $("#igual").mouseenter(function(){
// 	$("#igual").css({backgroundColor: "lightBlue", fontFamily: "Arial"})
// })
// $("#igual").mouseout(function(){
// 	$("#igual").css({backgroundColor: "white", fontFamily: "Arial"})
// })




})

