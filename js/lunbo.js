$(document).ready(function() {
	//根据图片循环出点数
	var dots = '',
		index = 0,
		timer;
	console.log($('.lunbo>ul>li').length);
	for(var i = 0; i < $('.lunbo>ul>li').length; i++) {
		dots += '<span></span>';
	}
	$('.dots').html(dots);
	//鼠标移入事件，获取span本身的索引
	$('.dots span').on('mouseover', function() {
		var index = $('.dots span').index(this);
		clearInterval(timer);
		light(index);
		clacluate(index);
		run(index);
	}).eq(0).trigger('mouseover');

	//计算ul滑动的距离
	function clacluate(a) {
		var clientW = $('.lunbo').width(),
			moveW = -a * clientW + 'px';
		$('.lunbo ul').stop(true, false).animate({
			'margin-left': moveW
		}, 300);
	}
	//圆点高亮
	function light(c) {
		console.log(c);
		for(var j = 0; j < $('.dots span').length; j++) {
			$('.dots span').removeClass('active');
		}
		$('.dots span').eq(c).addClass('active');
	}
	//自动轮播
	function run() {
		timer=setInterval(function() {
			index += 1;
			if(index <= 4) {
				if(index == 4) {
					index = 0;
				}
				console.log(index);
				clacluate(index);
				light(index);
			}
			
		}, 2000);
	}
    //鼠标移入照片清除定时器
    $('.lunbo ul li').on('mouseover',function(){
    	clearInterval(timer);
    })
    //鼠标移走设置定时器
    $('.lunbo ul li').on('mouseleave',function(){
    	run();
    })
})