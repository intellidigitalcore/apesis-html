 // add card 
 $("#add-card").click(function(e){
    $("#card-modals-bg").removeClass("hidden")
})

$("#card-popup-bg").click(function(e){
    $("#card-modals-bg").addClass("hidden")
})
$("#cancel-card-popup").click(function(e){
    $("#card-modals-bg").addClass("hidden")
})

// edit card details 
$(".edit-card-details").click(function(e){
    $("#edit-payment").removeClass("hidden")
})

$("#edit-payment-bg").click(function(e){
    $("#edit-payment").addClass("hidden")
})

$("#cancel-edit-card").click(function(e){
    $("#edit-payment").addClass("hidden")
})

// delete modal 
$(".delete-billing-info").click(function(e){
    $("#delete-modal").removeClass("hidden")
})

$(".close-delete-modal").click(function(e){
    $("#delete-modal").addClass("hidden")
})

// edit-billing modal 
$(".edit-billing").click(function(e){
    $("#edit-billing").removeClass("hidden")
})

$("#edit-billing-bg").click(function(e){
    $("#edit-billing").addClass("hidden")
})

$("#cancel-edit-billing").click(function(e){
    $("#edit-billing").addClass("hidden")
})
