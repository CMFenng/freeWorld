/**
 * Created by CMF on 2017/3/16.
 */
$(function() {
	$.ajax({
		url: "json/citywalk/cityWalkList.json",
		success: function(data, staus, jqxhr) {
			handleListData(data);
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
                        $("<div>").attr({class: "itemInfo"})
                    )
                )
            )




			$(".ProductList").append(($("<div>").attr({class: "listUnit"})
                .append($("<div>").attr({class: "bigCard"})
                    .append($("<a>")
                        .append($("<img>").attr({class: "itemImg", src: result[i].imgurl})
                        )
                    )
                    .append($("<div>").attr({class: "itemInfo"})
                        .append($("<span>").attr({class: "infoPlace"}).text(result[i].address))
                        .append($("<div>").attr({class: "infoNum"})
                            .append($("<span>").append("次浏览").text(result[i].browseCount))
                            .append($("<span>").append("件已售").text(result[i].soldCount))
                        )
                        .append($("<h2>")
                            .append($("<a>").attr({title: result[i].title, target: "_blank"}).text(result[i].title))
                        )
                        .append($("<ul>")).attr({class : "infoList"})

                                (function () {
                                    for(var j = 0; j < result[i].introduce.length; j++){
                                    $(".infoList").append(
                                        $("li").append(
                                            $("<i>").attr({class : "iconfont icon-star-line"}).text(result[i].introduce[j]).append("<br>")
                                        ))
                                    }
                                })()

                        .append($("div")).attr({class : "bigCardPrice"})
                            .append($("<span>")).attr({class : "line"}).text(result[i].oldPrice)
                            .append($("<em>")).text(result[i].newPrice).append("元起")
                        .append($("div")).attr({class : "bigCardBottomBar"}).append($("<a>")).attr({class : "bigCardBtn",target: "_blank"}).text("立即预订")
                    )
                )
            ))
		}
	}
})