/*
	obj 要改变的是那个元素
	attr 要改变的是那个属性
	target 要将该属性的值改到多少
*/
function animate(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(current < target){
			iSpeed = 8;
		}else{
			iSpeed = -8;
		}
		if( Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
				obj.style[attr] = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
			
		}
	},30);
}





function animate1(obj,attr,target){//减速动画
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		iSpeed = (target - current)/10;
		iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);
		if(!iSpeed){
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
		}
	},30);
}


function animate2(obj,attr,target,isLinear){//综合动画
	if(isLinear == undefined){
		isLinear = true;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = false;
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(isLinear){
			if(current < target){
				iSpeed = 8;
			}else{
				iSpeed = -8;
			}
			if( Math.abs(target - current) < Math.abs(iSpeed)){
				if(attr == 'opacity'){
					obj.style[attr] = target/100;
				}else{
					obj.style[attr] = target + 'px';
				}
				isStop = true;
			}
		}else{
			iSpeed = (target - current)/10;
			iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);
			if(!iSpeed){
				isStop = true;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
		}


	},30)
}

// 多值动画
//obj 修改的是那个元素
//options 是一个对象，里边包含了要修改的属性以及对应的值
//isLinear 速度
//endFn 回调函数（链式调用）
function animate3(obj,options,isLinear,endFn){
	if(isLinear == undefined){
		isLinear = true;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStopAll = true;
		for(var attr in options){
			var isStop = false;
			var iSpeed = 0;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(isLinear){
				if(current < options[attr]){
					iSpeed = 8;
				}else{
					iSpeed = -8;
				}
				if( Math.abs(options[attr] - current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style[attr] = options[attr]/100;
					}else{
						obj.style[attr] = options[attr] + 'px';
					}
					isStop = true;
				}else{
					isStopAll = false;
				}
			}else{
				iSpeed = (options[attr] - current)/10;
				iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);
				if(!iSpeed){
					isStop = true;
				}else{
					isStopAll = false;
				}
			}
			if(!isStop){
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
			if(isStopAll){
				clearInterval(obj.timer);
				typeof endFn == 'function' && endFn();
			}
		}

	},30)
}


function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}