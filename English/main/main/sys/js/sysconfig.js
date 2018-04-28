//获取数据
function loadList() {
	var params = {};
	params.sqlname = "config_qry";
	loadData.getList("", params, true, function(data) {

        data.options="a";
        new Vue({
            el: '#app',
            data: {sites: data}
        });
		// for(var i = 0; i < data.length; i++) {
		// 	$("#notice").text(data[i].ZYDZ);

		// }

	});
}

$(document).ready(function() {
	loadList();
});