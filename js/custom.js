$("#orderSamplePack").on('click',function(){
	$("#samplePackGrid, .order-sample-pack").addClass("d-none");
	$("#checkoutSamplePack").addClass("d-block");
});

$("#closeSamplePack").on('click',function(){
	$("#samplePackGrid, .order-sample-pack").removeClass("d-none");
	$("#checkoutSamplePack").removeClass("d-block");
});

$(document).ready(function () {
	$(".next-step").click(function (e) {
		var $active = $('.nav-tabs li>a.active');
		$active.parent().next().removeClass('disabled');
		nextTab($active);
	});
	$(".prev-step").click(function (e) {
		var $active = $('.nav-tabs li>a.active');
		prevTab($active);
	});
});

function nextTab(elem) {
	$(elem).parent().next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
	$(elem).parent().prev().find('a[data-toggle="tab"]').click();
}