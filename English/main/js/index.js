//页面跳转
function login() {
    var userOk = false;
    //获取输入的账户名和密码
    var username = $("#username").val();
    var password = $("#password").val();
    var info;
    //进行页面级别验证
    if (username == "" || password == "") {
        $("#message").text("管理员，账号密码总要填吧！");//错误则给出登陆错误提示
    } else {
        $.ajax({
            'url': _sysUrlHead,
            'method': 'post',
            'data': { account: username, password: password },
            'dataType': "json",
            'async': false,
            'success': function (data) {
                info = data;
            },
            'error': function (data) {
                info = data;
            }
        });
       console.log(info)
       // if (info.length > 0) {
            window.location.href = "main/main.html";
       // } else {
         //   $("#message").text("管理员，账号或者密码不对哟，重新试一试!");//错误则给出登陆错误提示
       // }
       
    }

}



$(document).ready(function () {
    $("#login").bind('click', function () {
        login();
    });
});