// function changeurl(url) {
//     alert(url)
//     $("#config").attr("src", url);
// }

$(document).ready(function () {
    new Vue({
        el: '#ifrContent',
        data: { url: 'sys/sysconfig.html' },
        methods: {
            greet: function (event) {
                url = "www.baidu.com";
            }
        }
    });
    $("#config").bind("click", function () {
        $("#ifrContent").attr("src", 'sys/sysconfig.html');
    });
    $("#createTable").bind("click", function () {
        $("#ifrContent").attr("src", 'sys/syscreatetable.html');
    });
});