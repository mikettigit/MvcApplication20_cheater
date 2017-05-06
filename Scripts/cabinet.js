$(document).ready(function(){
    $("body").on("change", "select", function () {
        var parent = $(this).parents(".tb-row");
        var form_data =
        {
            "Date": parent.find(".order-create-date").html(),
            "UserLogin": parent.find(".order-cell span").html(),
            "State": $(this).val(),
            "ChangeOrderState": ""
        }

        $.ajax({
            url: "/Pocket/Index",
            data: form_data,
            type: 'POST'
        })
    })
})
