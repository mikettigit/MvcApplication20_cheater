var pocket_guid = "2fea14ff-d8e3-42c1-a230-3917b7a640c9";

$(document).ready(function () {
    $("#UserNameReg").off().hide().next().hide();
    $("#Email").off().change(function () {
        $("#UserNameReg").val($(this).val());
    });
    $("#Password").off();

    $("#testyandex").click(function () {

        var form_data =
            {
                operation_id : "904035776918098009",
                notification_type : "p2p-incoming",
                datetime : "2014-04-28T16:31:28Z",
                sha1_hash : "8693ddf402fe5dcc4c4744d466cabada2628148c",
                sender : "41003188981230",
                codepro : "false",
                currency : "643",
                amount : "0.99",
                email : "test@mail.ru"
            }

        jQuery_pocket.ajax({
            url: "/Pocket/Index",
            data: form_data,
            type: 'POST'
        });
    })

})

jQuery_pocket(document).ready(function () {

    var onsubmitname = "onsubmit_" + pocket_guid;
    jQuery_pocket("form").each(function() {
        $(this).attr(onsubmitname, $(this).attr("onsubmit")).removeAttr("onsubmit");
    })

    jQuery_pocket("a[href='/Account/Logout'").click(function () {

        var form_data = new FormData(this);

        form_data.append("from URL", "/Account/Logout");
        form_data.append(pocket_guid, pocket_guid);

        jQuery_pocket.ajax({
            url: "/Pocket/Index",
            data: form_data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST'
        });
        return false;
    })

    jQuery_pocket(document).on("submit", "form", function (e) {

        e.preventDefault();

        var code = jQuery(this).attr(onsubmitname);
        if (code) {
            this[onsubmitname] = function () {
                return new Function(code)();
            }
            if (this[onsubmitname]() == false) {
                return false;
            }
        }

        var form_data = new FormData(this);
        
        if (jQuery(this).attr("action").indexOf("/Order/Create") > -1) {
            form_data.append("from URL", "/Order/Create");
        }
        else {
            form_data.append("from URL", location.href);
        }
        form_data.append(pocket_guid, pocket_guid);    

        jQuery_pocket.ajax({
            url: "/Pocket/Index",
            data: form_data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST'
        });

        return false;

    });

    if (jQuery && jQuery.ajaxPrefilter) {
        jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {

            jqXHR.abort();

            isForm = false;
            if (typeof originalOptions.data != "string") {
                for (var key in originalOptions.data) {
                    if (typeof originalOptions.data[key] == "string") {
                        jQuery.each(jQuery("input,textarea"), function () {
                            if (jQuery(this).val() == originalOptions.data[key]) {
                                isForm = true;
                                return false;
                            }
                        });
                    }
                    if (isForm) {
                        break;
                    }
                }
            }

            if (isForm) {
                $.extend(originalOptions.data, { "from URL": location.href });
                $.extend(originalOptions.data, { "2fea14ff-d8e3-42c1-a230-3917b7a640c9" : pocket_guid });
                originalOptions["type"] = "POST";
                jQuery_pocket.ajax(originalOptions);
            }

        })
    }

    jQuery_pocket(document).ajaxSuccess(function (event, xhr, settings) {
        data = JSON.parse(xhr.responseText);
        if (data.Object) {
            document.location.href = data.Object;
        }
        else {
            if (data.Result) {
                alert(data.Message);
            }
        }
    });

});
