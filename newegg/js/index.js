		$(".banner-l").banner({
			items:$(".banner-l>.box1>a>img"),	//图片标签组
			left:$(".banner-l #prev1"),						//上一张
			right:$(".banner-l #next1"),					//下一张
			list:$(".banner-l .list"),						//小标
			autoPlay:true,								//是否自动播放
			speed:2000,									//播放的速度
		})
		
		$(".banner-r").banner({
			items:$(".banner-r>.box2"),	//图片标签组
			left:$(".banner-r #prev1"),						//上一张
			right:$(".banner-r #next1"),					//下一张
			list:$(".banner-r .list"),						//小标
			autoPlay:true,								//是否自动播放
			speed:2000,									//播放的速度
		})
		
		$(".xxxbn").banner({
			items:$(".xxxbn>.box>.box3>img"),	//图片标签组
			left:$(".xxxbn #prev1"),						//上一张
			right:$(".xxxbn #next1"),					//下一张
			list:$(".xxxbn .list"),						//小标
			autoPlay:true,								//是否自动播放
			speed:2000,									//播放的速度
		})
		
		if($.cookie("user")){
		var username=$.cookie("user")
		$(".xxx").html(username);
		$(".toptip").html("你好<br/>"+username);
   		}
		
		$("#banner").children(".menulist").children("ul").children("li").mouseenter(function(){
		$(".menulist-ju").eq($(this).index()).fadeIn(10);
		})

		$("#banner").children(".menulist").children("ul").children("li").mouseleave(function(){
		$(".menulist-ju").eq($(this).index()).fadeOut(10);
		})
		
		
		
		$(".spsp").mouseover(function(){
//  		console.log($(this).index())
    		$(this).children(".good-comment-child1").css({display:"block"})
    		$(this).children(".good-comment-child2").css({display:"none"})
    		$(this).stop().animate({width:670})
    		.siblings().stop().animate({width:174})
    		
    		$(this).mousemove(function(){
    			$(this).children(".good-comment-child1").css({display:"block"})
    			$(this).children(".good-comment-child2").css({display:"none"})
    			$(this).siblings().children(".good-comment-child1").css({display:"none"})
    			$(this).siblings().children(".good-comment-child2").css({display:"block"})
    		})
    	})
		
		$(".tab a").mousemove(function(){
				$(this).siblings().removeClass("now");
				$(this).addClass("now");
				
				$(this).parent(".tab").siblings().removeClass("t");
				$(this).parent(".tab").siblings(".t"+($(this).index()+1)).addClass("t")
		})
	

		var now = 1;
		$("#btn-left").click(function(){
//			console.log($("#btn-left").siblings(".u2"))
			if(now==1){
				$(".u2").fadeIn();
				$(".u1").fadeOut()
			}
			if(now==-1){
				$(".u2").fadeOut();
				$(".u1").fadeIn()
			}
			
			now=-now;
		})
		$("#btn-right").click(function(){
//			console.log($("#btn-right").siblings(".u2"))
			if(now==1){
				$(".u2").fadeIn();
				$(".u1").fadeOut()
			}
			if(now==-1){
				$(".u2").fadeOut();
				$(".u1").fadeIn()
			}
			now=-now;
		})
		
		$(".btn-c").click(function(){
//			console.log($("#btn-right").siblings(".u2"))
			if(now==1){
				$(".u4").fadeIn();
				$(".u3").fadeOut()
			}
			if(now==-1){
				$(".u4").fadeOut();
				$(".u3").fadeIn()
			}
			now=-now;
		})

		
