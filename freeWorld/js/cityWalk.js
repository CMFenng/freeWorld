/**
 * Created by CMF on 2017/3/16.
 */
$(function() {
	$.ajax({
		url: "json/citywalk/cityWalkList.json",
		success: function(data, staus, jqxhr) {
			handleListData(data);
            handleListEvent();
		}
	});

	// 处理数据
	function handleListData(result) {
		for(var i = 0; i < result.length; i++) {
            $(".ProductList").append(
                $("<div>").attr({class: "listUnit"}).append(
                    $("<div>").attr({class: "bigCard"}).append(
                        $("<a>").append(
                            $("<img>").attr({class: "itemImg", src: result[i].imgurl})
                        )
                    ).append(
                        $("<div>").attr({class: "itemInfo"}).append(
                            $("<span>").attr({class: "infoPlace"}).text(result[i].address)
                        ).append(
                            $("<div>").attr({class: "infoNum"}).append(
                                $("<span>").text(result[i].browseCount)
                            ).append(
                                "次浏览"
                            ).append(
                                $("<span>").text(result[i].soldCount)
                            ).append(
                                "件已售"
                            )
                        ).append(
                            $("<h2>").append(
                                $("<a>").attr({title: result[i].title, target: "_blank"}).text(result[i].title)
                            )
                        ).append(
                            (function () {
                                var $uls = $("<ul>").attr({class : "infoList"});
                                for(var j = 0; j < result[i].introduce.length; j++){
                                    $uls.append(
                                        $("<li>").append(
                                            $("<i>").attr({class : "iconfont icon-star-line"})
                                        ).append(
                                            result[i].introduce[j]
                                        ).append(
                                            $("<br>")
                                        )
                                    )
                                }
                                return $uls;
                            })()
                        ).append(
                            $("<div>").attr({class : "bigCardPrice"}).append(
                                $("<span>").attr({class : "line"}).text(result[i].oldPrice)
                            ).append(
                                $("<em>").text(result[i].newPrice)
                            ).append(
                                "元起"
                            )
                        ).append(
                            $("<div>").attr({class : "bigCardBottomBar"}).append(
                                $("<a>").attr({class : "bigCardBtn",target: "_blank"}).text("立即预订")
                            )
                        )
                    )
                )
            )
		}
	}


	// 事件处理
    function handleListEvent() {
        /*头部搜索框*/
        $(".ipText").focus(function () {
            $(".autoComplete").show();
            $(this).css({
                border : "1px solid #21c09e"
            })
        })
        $(".ipText").blur(function () {
            $(".autoComplete").hide();
            $(this).css({
                border : "none"
            })
        })


    }

})