var _sysUrlHead = "http://192.168.0.122:3000";
//命名规范
//需要读取数据库的，optData


//查询数据
var loadData = {
	//按主键查询数据
	getOne: function(url,parms, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {id:parms},
			'dataType': "json",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	},
	//查询数据分页
	getList: function(url, parms, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data':parms,
			'dataType': "json",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	}
}

//增加数据
var addData = {
	//增加一条数据
	addOne: function(url, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	}
}
//修改数据
var modifyData = {
	//按主键修改数据
	modifyOne:function(url, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	},
	//按条件修改数据
	modifyMany:function(url, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	}
}
//删除数据
var delData =  {
	//按照主键删除数据
	function(url, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	},
	//按照条件删除数据
	function(url, async, dataFunction) {
		$.ajax({　　　　　　
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function(data) {　　　　　　
				dataFunction(data);
			}　　　　
		});
	}
}