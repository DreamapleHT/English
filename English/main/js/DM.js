const _sysUrlHead = "service/loginHandler.ashx";
//命名规范

/*************************************************读取数据库**************************************************************** */
/*************************************************读取数据库**************************************************************** */
/*************************************************读取数据库**************************************************************** */
/*************************************************读取数据库**************************************************************** */
//需要读取数据库的
//查询数据
let loadData = {
	//按主键查询数据
	/**
	 * url:请求页面地址
	 * name:请求表名称，配置名称
	 * parms:参数
	 * async:同步/异步
	 * dataFunction:回调
	 */
	getOne: function (url, name, parms, async, dataFunction) {
		$.ajax({
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': { name: name, id: parms },
			'dataType': "json",
			'async': async,
			'success': function (data) {
				dataFunction(data);
			}
		});
	},
	//查询数据分页
	getList: function (url, parms, async, dataFunction) {
		$.ajax({
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': parms,
			'dataType': "json",
			'async': async,
			'success': function (data) {
				dataFunction(data);
			}
		});
	}
}

//增加数据
let addData = {
	//增加一条数据
	addOne: function (url, async, dataFunction) {
		$.ajax({
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function (data) {
				dataFunction(data);
			}
		});
	}
}
//修改数据
let modifyData = {
	//按主键修改数据
	modifyOne: function (url, async, dataFunction) {
		$.ajax({
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function (data) {
				dataFunction(data);
			}
		});
	},
	//按条件修改数据
	modifyMany: function (url, async, dataFunction) {
		$.ajax({
			'url': _sysUrlHead + url,
			'method': 'POST',
			'data': {},
			'dataType': "text",
			'async': async,
			'success': function (data) {
				dataFunction(data);
			}
		});
	}
}


/*************************************************读取配置文件**************************************************************** */
/*************************************************读取配置文件**************************************************************** */
/*************************************************读取配置文件**************************************************************** */
/*************************************************读取配置文件**************************************************************** */
var readConfig = {
	//读取xml配置文件
	readWebConfigXml: function () {
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari    
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5    
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET", globals.path + '/component/module/uploadify/js/uploadify.xml', false);
		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML;
		return xmlDoc.getElementsByTagName("server")[0].childNodes[0].nodeValue;
	},
	// 读取json配置文件
	readWebConfigJson: function () {
		$.getJSON(globals.path + '/component/module/uploadify/js/config.json', function (data) {
			// alert(data.server);
		});
	}

}


/*************************************************表单验证**************************************************************** */
/*************************************************表单验证**************************************************************** */
/*************************************************表单验证**************************************************************** */
/*************************************************表单验证**************************************************************** */
// 1.	验证时间
// 2.	验证数字
// 3.	验证是否为空
// 4.	验证汉字
// 5.	验证字符长度
// 6.	验证数字长度
// 7.	验证年龄
// 8.	验证性别
// 9.	验证邮箱
// 10.	验证邮编
// 11.	验证QQ
// 12.	验证手机号码
// 13.	验证座机号码
// 14.	验证身份证
let verify = {
	istime: function () {

	},
	isint: function () {

	}
}




/*************************************************图片预览**************************************************************** */
/*************************************************图片预览**************************************************************** */
/*************************************************图片预览**************************************************************** */
/*************************************************图片预览**************************************************************** */




/*************************************************加密解密**************************************************************** */
/*************************************************加密解密**************************************************************** */
/*************************************************加密解密**************************************************************** */
/*************************************************加密解密**************************************************************** */

// 加密 加密方式 MD5
// 解密 

/*************************************************格式化**************************************************************** */
/*************************************************格式化**************************************************************** */
/*************************************************格式化**************************************************************** */
/*************************************************格式化**************************************************************** */

// 日期格式化


/*************************************************Cookie操作**************************************************************** */
/*************************************************Cookie操作**************************************************************** */
/*************************************************Cookie操作**************************************************************** */
/*************************************************Cookie操作**************************************************************** */
// 创建和存储 cookie
// 在这个例子中我们要创建一个存储访问者名字的 cookie。当访问者首次访问网站时，他们会被要求填写姓名。名字会存储于 cookie 中。当访问者再次访问网站时，他们就会收到欢迎词。

// 首先，我们会创建一个可在 cookie 变量中存储访问者姓名的函数：

function setCookie(c_name, value, expiredays) {
	let exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
// 上面这个函数中的参数存有 cookie 的名称、值以及过期天数。

// 在上面的函数中，我们首先将天数转换为有效的日期，然后，我们将 cookie 名称、值及其过期日期存入 document.cookie 对象。


function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1) c_end = document.cookie.length
			// return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return ""
}
// 上面的函数首先会检查 document.cookie 对象中是否存有 cookie。
// 假如 document.cookie 对象存有某些 cookie，那么会继续检查我们指定的 cookie 是否已储存。如果找到了我们要的 cookie，就返回值，否则返回空字符串。

function checkCookie() {
	username = getCookie('username')
	if (username != null && username != "") { alert('Welcome again ' + username + '!') }
	else {
		username = prompt('Please enter your name:', "")
		if (username != null && username != "") {
			setCookie('username', username, 365)
		}
	}
}


let username = document.cookie.split(";")[0].split("=")[1];
//JS操作cookies方法!
//写cookies
function setCookie(name, value) {
	let Days = 30;
	let exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


// 读取cookies

function getCookie(name) {
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
// 删除cookies


function delCookie(name) {
	let exp = new Date();
	exp.setTime(exp.getTime() - 1);
	let cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//使用示例
setCookie("name", "hayden");
// alert(getCookie("name"));
//如果需要设定自定义过期时间
//那么把上面的setCookie　函数换成下面两个函数就ok;
//程序代码
// function setCookie(name, value, time) {
// 	let strsec = getsec(time);
// 	let exp = new Date();
// 	exp.setTime(exp.getTime() + strsec * 1);
// 	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
// }
// function getsec(str) {
// 	// alert(str);
// 	let str1 = str.substring(1, str.length) * 1;
// 	let str2 = str.substring(0, 1);
// 	if (str2 == "s") {
// 		return str1 * 1000;
// 	}
// 	else if (str2 == "h") {
// 		return str1 * 60 * 60 * 1000;
// 	}
// 	else if (str2 == "d") {
// 		return str1 * 24 * 60 * 60 * 1000;
// 	}
// }
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
setCookie("name", "hayden", "s20");




