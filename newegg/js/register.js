var oname=document.getElementById("name");
		var tishi = document.getElementById("tishi");
		var opwd=document.getElementById("pwd"); 
		var pawd;
		var orepwd=document.getElementById("repwd");
		var oinyzm=document.getElementById("inyzm");
		var oyzm=document.getElementById("yzm");
		var obtn=document.getElementById("btn");
		var oli = document.getElementsByTagName("li");
		var agreen=document.getElementById("agreen")

		var onoff = false;


		oname.onblur = function(){
			var str = /^[0-9a-zA-Z]{6,18}$/
			if(str.test(oname.value)){
				onoff =true;
				tishi.innerHTML=""
			}else{
				onoff =false;
				tishi.innerHTML="!用户名不合法请重新输入"
			}
		}
		
		pwd.onblur = function(){
			if(pwd.value.length>=6&&pwd.value.length<=16){
				onoff =true;
				pawd = pwd.value;
				tishi.innerHTML=""
			}else{
				onoff =false;
				tishi.innerHTML="!密码必须为6～16位"
			}
		}
		
		orepwd.onblur = function(){
			if(orepwd.value==pawd){
				onoff =true;
				tishi.innerHTML=""
			}else{
				onoff =false;
				tishi.innerHTML="!密码不一致"
			}
		}
		
		var numonOff = 0;
			var azonOff = 0;
			var tsonOff = 0;
		orepwd.oninput=function(){
			for(var i=0;i<orepwd.value.length;i++){
			if(orepwd.value.charCodeAt(i)>=48 && orepwd.value.charCodeAt(i)<=57){
						numonOff = 1;
					}
					if(orepwd.value.charCodeAt(i)>=65 && orepwd.value.charCodeAt(i)<=90 || orepwd.value.charCodeAt(i)>=97 && orepwd.value.charCodeAt(i)<=122){
						azonOff = 1;
					}
					if(orepwd.value[i]=="!" ||orepwd.value[i]=="@" ||orepwd.value[i]=="#" ||orepwd.value[i]=="$" ||orepwd.value[i]=="%"){
						tsonOff = 1;
					}
				}
				if(numonOff + azonOff + tsonOff == 1){
                    oli[1].style.background="#EEEEEE";
					oli[2].style.background="#EEEEEE";					
					oli[0].innerHTML="低";
					oli[0].style.background="red";
					numonOff = azonOff = tsonOff = 0;
					
				}else if(numonOff + azonOff + tsonOff == 2){
					oli[0].style.background="#EEEEEE";
					oli[2].style.background="#EEEEEE";
					oli[1].innerHTML="中";
					oli[1].style.background="orange";
					numonOff = azonOff = tsonOff = 0;
					
				}else if(numonOff + azonOff + tsonOff == 3){
					oli[0].style.background="#EEEEEE";
					oli[1].style.background="#EEEEEE";
					oli[2].innerHTML="高";
					oli[2].style.background="green";
					numonOff = azonOff = tsonOff = 0;
					
				}
		}
		
		
		
		var yan ="";
		onload=oyzm.onclick= function(){
			yan=getyan();
			oyzm.innerHTML=yan;
			
		}
		oinyzm.onblur = function(){
			if(oinyzm.value == yan){
				onoff =true;
				tishi.innerHTML=""
			}else{
				onoff =false;
				tishi.innerHTML="!验证码不正确"
			}
		}
		
		function getyan(){
			var yan="";
			for ( var i=0;i<4; i++) {
			yan += parseInt(Math.random()*10)+"";
		}
			return yan;
		}
		
		
		
		obtn.onmouseenter=function(){
			if(onoff&&agreen.checked){
			$("#btn").click(function(){
			$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"register",
				userID:$("input[name=user]").val(),
				password:$("input[name=password]").val()
			},
			success:function(res){
				switch(res){
					case "0":$("span").html("用户名重名，请重新设置");break;
					case "1":
						$("span").html("注册成功，3秒后跳转登录");
						setTimeout(()=>{
							location.href = "http://localhost/newegg/login.html";
						},3000)
						break;
				}
			}
		});
		
	})

				
			}else if(onoff){
				alert("请同意新蛋网的服务协议！");
			}
			
			}
		
		
