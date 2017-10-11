/*主页预加载文章书籍前两条*/
$(function() {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url:"/load.do",
        success: function (data) {
            console.info(data);
            var json = eval(data);
            if(parseInt(json.length)==parseInt(0)){
                alert("没有这么多哦！^_^")
            }else {
                if(parseInt(json.length)==parseInt(1)){
                    document.getElementById("article2").style.visibility="visible";//设置标签可见
                    $("#title1").html(json[0].title);
                    $("#content1").html(json[0].content.substring(0,150)+"••••••••••");
                    $("#img1").attr("src",json[0].picture);
                    $("#id_num1").html(json[0].id);
                    document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                }else {
                    document.getElementById("article2").style.visibility="visible";//设置标签可见
                    $("#title1").html(json[0].title);
                    $("#content1").html(json[0].content.substring(0,150)+"••••••••••");
                    $("#img1").attr("src",json[0].picture);
                    $("#id_num1").html(json[0].id);
                    $("#title2").html(json[1].title);
                    $("#content2").html(json[1].content.substring(0,150)+"••••••••••");
                    $("#img2").attr("src",json[1].picture);
                    $("#id_num2").html(json[1].id);
                }
            }
        }
    });
/*主页预加载目录内容*/
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url:"/loadCata.do",
        success: function (data) {
            console.info(data)
            var json = eval(data);
            $.each(json,function (index,item) {
                document.getElementById("article2").style.visibility="visible";//设置标签可见
                $("#catalog1").html(json[0].cataName);
                $("#catalog2").html(json[1].cataName);
                $("#catalog3").html(json[2].cataName);
                $("#catalog4").html(json[3].cataName);
                $("#catalog5").html(json[4].cataName);
                $("#catalog6").html(json[5].cataName);
                $("#catalog7").html(json[6].cataName);
            })
        }
    })
    
   /* //预加载用户信息
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url:"/loadUser.do",
        success:function (data) {
            
        }
    })*/




});

/*第一页，第二页,第三页点击事件数据交互*/
function pagenum1(){
    var page1 = parseInt(document.getElementById("page1").innerHTML);
    $.ajax({
        type: "POST",
        async:false,
        dataType: "JSON",
        url: "/page.do",
        success: function (data) {
            var json = eval(data);
                if(parseInt(json.length)==parseInt(0)){
                    alert("没有这么多哦！^_^")
                }else {
                    if(parseInt(json.length)==parseInt(1)){
                        document.getElementById("article2").style.visibility="visible";//设置标签可见
                        $("#title1").html(json[0].title);
                        $("#content1").html(json[0].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[0].picture);
                        $("#id_num1").html(json[0].id);
                        document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                    }else {
                        document.getElementById("article2").style.visibility="visible";//设置标签可见
                        $("#title1").html(json[0].title);
                        $("#content1").html(json[0].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[0].picture);
                        $("#id_num1").html(json[0].id);
                        $("#title2").html(json[1].title);
                        $("#content2").html(json[1].content.substring(0,150)+"••••••••••");
                        $("#img2").attr("src",json[1].picture);
                        $("#id_num2").html(json[1].id);
                    }
                }
        }
    })
}
function pagenum2(){
    var  page2 = parseInt(document.getElementById("page2").innerHTML);
    $.ajax({
        type: "POST",
        async:false,
        dataType: "JSON",
        url:"/page.do",
        success: function (data) {
            console.info(data)
            var json = eval(data);
                if(parseInt(json.length)<=parseInt(2)){
                    alert("没有这么多哦！^_^")
                }else {
                    if(parseInt(json.length)==parseInt(3)){
                        document.getElementById("article2").style.visibility="visible";//设置标签可见
                        $("#title1").html(json[2].title);
                        $("#content1").html(json[2].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[2].picture);
                        $("#id_num1").html(json[2].id);
                        document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                    }else {
                        document.getElementById("article2").style.visibility="visible";//设置标签可见
                        $("#title1").html(json[2].title);
                        $("#content1").html(json[2].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[2].picture);
                        $("#id_num1").html(json[2].id);
                        $("#title2").html(json[3].title);
                        $("#content2").html(json[3].content.substring(0,150)+"••••••••••");
                        $("#img2").attr("src",json[3].picture);
                        $("#id_num2").html(json[3].id);
                    }
                }

        }
    })
}

function pagenum3(){
    var  page3 = parseInt(document.getElementById("page3").innerHTML);
    $.ajax({
        type: "POST",
        async:false,
        dataType: "JSON",
        url:"/page.do",
        success: function (data) {
            var json = eval(data);
                if(parseInt(json.length)<=parseInt(4)){
                    alert("没有这么多哦！^_^")
                }else {
                    if(parseInt(json.length)==parseInt(5)){
                        document.getElementById("article2").style.visibility="visible";
                        $("#title1").html(json[4].title);
                        $("#content1").html(json[4].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[4].picture);
                        $("#id_num1").html(json[4].id);
                        document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                    }else {
                        document.getElementById("article2").style.visibility="visible";
                        $("#title1").html(json[4].title);
                        $("#content1").html(json[4].content.substring(0,150)+"••••••••••");
                        $("#img1").attr("src",json[4].picture);
                        $("#id_num1").html(json[4].id);
                        $("#title2").html(json[5].title);
                        $("#content2").html(json[5].content.substring(0,150)+"••••••••••");
                        $("#img2").attr("src",json[5].picture);
                        $("#id_num2").html(json[5].id);
                    }
                }
        }
    })
}

/*下一页点击事件数据交互*/
function nextpage() {
    var title = document.getElementById("title2").innerHTML;
    $.ajax({
        type: "POST",
        async:false,
        dataType: "JSON",
        url:"/page.do",
        success: function (data) {
            var json = eval(data);
            $.each(json,function (index,item) {
                if((json[index].title)==title.toString()){
                    if(json[index+1]==null){
                        alert("已经到底啦，^_^");
                        return;
                    }else {
                        if(json[index+2]==null){
                            $("#title1").html(json[index+1].title);
                            $("#content1").html(json[index+1].content.substring(0,150)+"••••••••••");
                            $("#img1").attr("src",json[index+1].picture);
                            $("#id_num1").html(json[index+1].id);
                            document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                        }else {
                            $("#title1").html(json[index+1].title);
                            $("#content1").html(json[index+1].content.substring(0,150)+"••••••••••");
                            $("#img1").attr("src",json[index+1].picture);
                            $("#id_num1").html(json[index+1].id);
                            $("#title2").html(json[index+2].title);
                            $("#content2").html(json[index+2].content.substring(0,150)+"••••••••••");
                            $("#img2").attr("src",json[index+2].picture);
                            $("#id_num2").html(json[index+2].id);
                        }
                    }
                    if(parseInt(index+1)==parseInt(json.length)){
                        if(parseInt(index/2)==parseInt(0)){
                            $("#title1").html(json[index+1].title);
                            $("#content1").html(json[index+1].content.substring(0,150)+"••••••••••");
                            $("#img1").attr("src",json[index+1].picture);
                            $("#id_num1").html(json[index+1].id);
                            $("#title2").html(json[index+2].title);
                            $("#content2").html(json[index+2].content.substring(0,150)+"••••••••••");
                            $("#img2").attr("src",json[index+2].picture);
                            $("#id_num2").html(json[index+2].id);
                        }else {
                            $("#title1").html(json[index+1].title);
                            $("#content1").html(json[index+1].content.substring(0,150)+"••••••••••");
                            $("#img1").attr("src",json[index+1].picture);
                            $("#id_num1").html(json[index+1].id);
                            document.getElementById("article2").style.visibility="hidden";//设置标签隐藏
                        }
                    }
                }
            })
        }
    })
}

/*顶层菜单栏传递参数到catalog.jsp*/
function catalog1() {
    var cataName = document.getElementById("catalog1").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog2() {
    var cataName = document.getElementById("catalog2").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog3() {
    var cataName = document.getElementById("catalog3").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog4() {
    var cataName = document.getElementById("catalog4").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog5() {
    var cataName = document.getElementById("catalog5").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog6() {
    var cataName = document.getElementById("catalog6").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
function catalog7() {
    var cataName = document.getElementById("catalog7").innerHTML;
    var url = "catalog.jsp?cataName="+cataName;
    window.location.href=url;
}
