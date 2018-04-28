
//查询单词(调用有道翻译接口)
function findWord(){
	var appKey = '1cbb7c460627b4b0';
	var key = '6fmWO5WeAFNITQA1crcyVLTg19Y2dg1R';
	var salt = (new Date).getTime();
	var query = $("#word").val();
		var from = '';
	var to = 'en';
	var str1 = appKey + query + salt +key;
	var sign = md5(str1);
$.ajax({
    url: 'http://openapi.youdao.com/api',
    type: 'post',
    dataType: 'jsonp',
    data: {
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function (data) {
    	if(data.translation !=undefined){
    		 $("#details").val(data.translation);
    	}
      if(data.web !=undefined){
      	console.log(data.web)
      	var con="";
      	for(var i=0;i<data.web.length;i++){
      		con+=data.web[i].value+'\n';
      	}
    		 $("#web").val(con);
    	}
      if( data.tSpeakUrl !=undefined){
    		$("#content").append("<audio  id='voice' src='"+data.tSpeakUrl+"' controls='controls'></audio>");
    	}
      

       console.log(data.translation);
    } ,
    error:function(data){
    	$("#details").val(data.translation);
    	console.log(data);
    }
});

	
}
