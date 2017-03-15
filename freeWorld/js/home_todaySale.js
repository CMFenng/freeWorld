/**
 * Created by CMF on 2017/3/15.
 */
$(function () {
    var numUl = 0;
    $(".home_switch").click(function () {
        $(".home_todaySale_list").hide();
        numUl++;
        console.log(numUl);
        $(".home_todaySale_list")[numUl].style.display = "block"
        if(numUl == 3){
            numUl = -1;
        }
    });
    $(".home_switch").hover(function () {
        $(this).css({
            "color": "#00b081",
        });
    }, function () {
        $(this).css("color", "#636363");
    });

    $(".home_todaySale_item").hover(function () {
        $(this).css("box-shadow", "0 0 5px rgba(0,0,0,.15)");
        console.log($(this));
        // $(this + " .pics img").css("opacity", ".7");
    }, function () {
        $(this).css("box-shadow", "none");
        // $(this + " .pics img").css("opacity", "1");
    });
})