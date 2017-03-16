/**
 * Created by CMF on 2017/3/16.
 */
$(function () {
    $.ajax({
        url : "json/citywalk/cityWalkList.json",
        success : function (data, staus, jqxhr) {
            handleListData(data);
        }
    });
    
    // 处理数据
    function handleListData(result){
        for(var i = 0; i < result.length; i++){
            // 创建类名为 listUnit 的 div
            var $listUnitDiv = $("<div class='listUnit'></div>");
            var $listUnitDiv_bigCardDiv = $("<div class='bigCard'></div>");
            var $bigCardDiv_A = $("<a></a>");
            var $A_itemImg = $("<img>");
            // 设置属性
            $A_itemImg.attr({
                class : "itemImg",
                src : result[i].imgurl
            });
            // 将 img 插入 a 标签中
            $bigCardDiv_A.append($A_itemImg);

            // 创建 itemInfo
            var $bigCardDiv_itemInfoDiv = $("<div class='itemInfo'></div>");



        }


    }
})
