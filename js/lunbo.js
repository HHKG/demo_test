$(document).ready(function() {
	//根据图片循环出点数
	var dots = '',
		index = 0,
		clientW = $('.lunbo').width(),
		timer;
	for(var i = 0; i < $('.lunbo>ul>li').length; i++) {
		dots += '<span></span>';
	}
	$('.dots').html(dots);
	//鼠标移入事件，获取span本身的索引
	$('.dots span').on('mouseover', function() {
	    index = $('.dots span').index(this);
		clearInterval(timer);
		light(index);
		clacluate(index);
	}).eq(0).trigger('mouseover');

	//计算ul滑动的距离
	function clacluate(a) {
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
	run();
    //显示左边按钮
    $('.jiantou_prev').on('mouseover',function(){
    	$('.prev').fadeIn();
    	clearInterval(timer);
    })
    //隐藏左边按钮
        $('.jiantou_prev').on('mouseleave',function(){
    	$('.prev').fadeOut();
    	run();
    })
    
     //显示右边按钮
    $('.jiantou_next').on('mouseover',function(){
    	$('.next').fadeIn();
    	clearInterval(timer);
    })
     //隐藏右边按钮
    $('.jiantou_next').on('mouseleave',function(){
    	$('.next').fadeOut();
    	run();
    })
    //点击事件
    $('.prev').click(function(){
    	index-=1;
    	if(index==-1){
    		index=3;//赋值用一个等号，判断用两个等号，标准使用三个等号
    	}
    	light(index);
		clacluate(index);
    });
      //点击事件
    $('.next').click(function(){
    	index+=1;
    	if(index==4){
    		index=0;
    	}
    	light(index);
		clacluate(index);
    })
})