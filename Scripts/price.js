$(document).ready(function(){
	recount();
    $("input").change(function(){
	    recount();
    })
})

function recount()
{
    var Sum = 0;

    var Count = parseFloat($("#Count").val());
    if (price["counts"]) {
        for (var i = 0; i < price["counts"].length; i++) {
            if (Count >= price["counts"][i]["count"]) {
                Sum += Count * price["counts"][i]["price"];
                break;
            }
        }
    }

    $("#hidden_sum").remove();
    $("#total-summ").text(Sum).after("<input type='hidden' name='Sum' id='hidden_sum' value='" + Sum + "'/>");
    $(".order-service-info-text").remove();
    $(price["counts"]).each(function () {
        $("<p class='order-service-info-text'></p>").html("от " + this["count"] + " - " + this["price"] + " руб.<br/>").insertAfter(".order-service-info-text-title");
    })
}

