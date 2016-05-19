    //根据相应顺序对div排序
    //sortArr为数组
    if (!$.isEmptyObject(sortArr)) {
        $.each(sortArr, function (i, n) {
            $.each($(".section"), function (j, f) {
                if ($(f).attr("id") == n) {
                    $(f).insertBefore(".my-section");
                    return;
                }
            });
        });
    }
