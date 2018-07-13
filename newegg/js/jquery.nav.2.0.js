;(function($){
	"use strict";
	
//	对象合并：局部
//	$.fn.extend({
//		nav:function(){
//			var that = this;
//			this.children("ul").children("li").on("mouseenter",function(){
//				$(this).css({
//					background:"#ccc"
//				}).siblings().css({
//					background:""
//				}).end().children("ul").stop().slideDown(50)
//				.parent().siblings().children("ul").stop().slideUp(50)
//			})
//			this.children("ul").children("li").on("mouseleave",function(){
//				that.children("ul").children("li").css({background:""})
//				.children("ul").stop().slideUp(50)
//			})
//		}
//	})

//	对象合并：全局
//	$.extend({
//		nav:function(ele){
//			ele.children("ul").children("li").on("mouseenter",function(){
//				$(this).css({
//					background:"#ccc"
//				}).siblings().css({
//					background:""
//				}).end().children("ul").stop().slideDown(50)
//				.parent().siblings().children("ul").stop().slideUp(50)
//			})
//			ele.children("ul").children("li").on("mouseleave",function(){
//				ele.children("ul").children("li").css({background:""})
//				.children("ul").stop().slideUp(50)
//			})
//		}
//	})

//	给设置方法:全局
//	$.nav = function(ele){
//		ele.children("ul").children("li").on("mouseenter",function(){
//			$(this).css({
//				background:"#ccc"
//			}).siblings().css({
//				background:""
//			}).end().children("ul").stop().slideDown(50)
//			.parent().siblings().children("ul").stop().slideUp(50)
//		})
//		ele.children("ul").children("li").on("mouseleave",function(){
//			ele.children("ul").children("li").css({background:""})
//			.children("ul").stop().slideUp(50)
//		})
//	}
	
//	给设置方法:局部
	$.fn.nav = function(){
		var that = this;
		this.children("ul").children("li").on("mouseenter",function(){
			$(this).css({
				background:"#ccc"
			}).siblings().css({
				background:""
			}).end().children("ul").stop().slideDown(50)
			.parent().siblings().children("ul").stop().slideUp(50)
		})
		this.children("ul").children("li").on("mouseleave",function(){
			that.children("ul").children("li").css({background:""})
			.children("ul").stop().slideUp(50)
		})
	}
	
//	var obj = {}
//	obj.show = function(){
//		console.log(1)
//	}
//	obj.show()
	
})(jQuery);

