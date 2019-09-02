function d(a) {
	console.log(a);
}

function arredonda (v) {
	//return Math.round( v * 100 + Number.EPSILON ) / 100;
	return v.toFixed(2);
}

function calcula() {
	
	var frequencia =  parseFloat($("#inp-freq").val());
	var potencia   =  parseFloat($("#inp-pot").val());
	var ganho      =  parseFloat($("#inp-ganho").val());

	var erp = (10 ** ( ganho * 0.1)) * potencia;
	
	var dis = 0;

	if (frequencia <= 10){
		dis = (Math.sqrt(erp * frequencia)) * 0.129;;
	}

	if (frequencia > 10 && frequencia <= 400) {
		dis = (Math.sqrt(erp)) * 0.409;
	}
	
	if (frequencia > 400) {
		dis = (Math.sqrt(erp / frequencia)) * 8.16;
	}
	if (frequencia > 2000) {
		
		$("#res-erp").html("");
		$("#res-dis").html("");

	} else {
		
		var chk = $("#chk-prec").prop('checked');
	
		if (chk) {
			erp = arredonda(erp);
			dis = arredonda(dis);
		}

		$("#res-erp").html(erp);
		$("#res-dis").html(dis);
	}
	
	
}


$(function () {
	
	$("input").focusin(function(e) {
		$(this).val("");
	});
	
	$("input").change(function(e) {
		calcula();
	});
	$("#chk-prec").change(function(e){
		calcula();
	});
	
	calcula();
	
});