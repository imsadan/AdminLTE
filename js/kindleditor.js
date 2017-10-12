

var TT  = {
	// 编辑器参数
	kingEditorParams : {
		//指定上传文件参数名称
		filePostName  : "file",
		//指定上传文件请求的url。
		uploadJson : '/xxx/xxx/',
		//上传类型，分别为image、flash、media、file
		dir : "image"
	},
    
    createEditor : function(select){
    	return KindEditor.create(select, TT.kingEditorParams);
    }

};
