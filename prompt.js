/**
*模拟prompt
*首先在页面有隐藏的html片段代码
*YOU CAN INIT BY THIS 
*PROMPT.init({
*  container:'',	//最外层的选择器
*	header:'',		//提示头
*	text:'',		//显示文本
*	yesButton:'',	//确定按钮显示文本
*	noButton:'',	//取消按钮显示文本		
*	headerTarget:'',//提示头的选择器
*	textTarget:'',	//内容选择器
*	yesTarget:'',	//确定按钮选择器
*	noTarget:''		//取消按钮选择器
*	yesButtonDisplay:'',//是否显示确定按钮
*	noButtonDisplay:'',//是否显示取消按钮
*	yesCallback:'',		//确定按钮的回调
*	noCallback''		//取消按钮的回调
*});
*
*/
var PROMPT = (function($, undefined){
	
	var _this = {}
	
		,defaultsOptions = {
			container:'#container',
			header:'提示',
			text:'你确定继续此操作吗？',
			yesButton:'确定',
			noButton:'取消',
			headerTarget:'#header',
			textTarget:'#text',
			yesTarget:'#yes',
			noTarget:'#no',
			yesButtonDisplay:true,
			noButtonDisplay:true,
			yesCallback:function(){},
			noCallback:function(){}
		}
		,_options = {};
	
	_this.init = _init;
	_this.show = _show();
	_this.hide = _hide();
	
	function _init(o){
		_options = _extendOptions(o);
		
		_rander();
		
		_addEvents();
		
		_show();
	}
	
	function _show(){
		$(_options.container).fadeIn(100);
	}
	
	function _hide(){
		$(_options.container).fadeOut(100);
	}
	
	function _rander(){
		$(_options.headerTarget).text(_options.header);
		$(_options.textTarget).text(_options.text);
		
		if(_options.yesButtonDisplay)	$(_options.yesTarget).text(_options.yesButton);
		if(_options.noButtonDisplay)	$(_options.noTarget).text(_options.noButton);
	}
	
	function _addEvents(){
		$(_options.container).delegate(_options.yesTarget,'click',function(){
			if($.isFunction(_options.yesCallback))
			{
				_options.yesCallback.call(this);
			}
		});
		
		$(_options.container).delegate(_options.noTarget,'click',function(){
			if($.isFunction(_options.noCallback))
			{
				_options.noCallback.call(this);
			}
		});
	}
	
	function _extendOptions(o){
		return $.extend({},defaultsOptions, o);
	}
	
	return _this;
	
})(jQuery, undefined);
