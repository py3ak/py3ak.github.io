function d(a) {
	console.log(a);
}

function arredonda (v) {
	//return Math.round( v * 100 + Number.EPSILON ) / 100;
	return v.toFixed(3);
}

function calcula() {
	
	var frequencia =  $("#inp-freq").val();
	var potencia   =  $("#inp-pot").val();
	var ganho      =  $("#inp-ganho").val();

	var erp = (10 ** ( ganho * 0.1)) * potencia;
	
	var dis = 0;

	if (frequencia < 10){
		dis = (Math.sqrt(erp * frequencia)) * 0.129;;
	}

	if (frequencia > 10 && frequencia < 400) {
		dis = -1;
	}
	
	if (frequencia > 400) {
		dis = -1;
	}
	
	var chk = $("#chk-prec").prop('checked');
	
	if (chk) {
		erp = arredonda(erp);
		dis = arredonda(dis);
	}

	$("#res-erp").html(erp);
	$("#res-dis").html(dis);
}


$(function () {
	
	$("input").keyup(function(e) {
		calcula();
	});
	$("#chk-prec").change(function(e){
		calcula();
	});
	
	calcula();
	
});