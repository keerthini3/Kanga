$("#orderSamplePack").on('click',function(){
  $("#samplePackGrid, .order-sample-pack").addClass("d-none");
  $("#checkoutSamplePack").addClass("d-block");
});

$("#closeSamplePack").on('click',function(){
  $("#samplePackGrid, .order-sample-pack").removeClass("d-none");
  $("#checkoutSamplePack").removeClass("d-block");
});