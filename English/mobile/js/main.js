//获取数据
function loadOne() {
	var params = {};
	params.sqlname = "data_qry";
	loadData.getList("", params, true, function(data) {

		for(var i = 0; i < data.length; i++) {
			$("#notice").text(data[i].ZYDZ);

		}

	});
}

$(document).ready(function() {
	loadOne();
});