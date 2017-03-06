$(function(){
	function getCss(t, e) {
			if("scale" == e || "rotate" == e || "rotateX" == e || "rotateY" == e || "rotateZ" == e || "scaleX" == e || "scaleY" == e || "translateY" == e || "translateX" == e || "translateZ" == e) switch(t.$Transform || (t.$Transform = {}), e) {
				case "scale":
				case "scaleX":
				case "scaleY":
					return "number" == typeof t.$Transform[e] ? t.$Transform[e] : 100;
				case "translateY":
				case "translateX":
				case "translateZ":
					return t.$Transform[e] ? t.$Transform[e] : 0;
				default:
					return t.$Transform[e] ? t.$Transform[e] : 0
			}
			var n = t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e];
			return "opacity" == e ? Math.round(100 * parseFloat(n)) : parseInt(n)
		}
        $('.wp-inner').fullpage({
            change: function (e) {
                // 移除动画属性
              	$('.page').eq(e.cur).find('.js-animate').each(function() {
                    $(this).removeClass($(this).data('animate')).hide();
                });
            },
            afterChange: function (e) {
                // 添加动画属性
                $('.page').eq(e.cur).find('.js-animate')
                    .each(function () {
                    	var delay = parseFloat($(this).data('delay'));
                    	var time = $(this).data('time')?parseFloat($(this).data('time')) : '';
                    	var animate = $(this).data('animate');
                    	var that = $(this);
                    	if(time!=''){
                    		that.css('animationDuration',time+'s');
	                    	that.css('webkitAnimationDuration',time+'s');
                    	}
                    	setTimeout(function(){
                    		that.addClass(animate).show();
	                   	},delay*1000);
                    	
                    	
                    });
            }
        });
        
        //适配所有手机重新设置尺寸
  //       var scaleW=window.innerWidth/320;
		// var scaleH=window.innerHeight/568;
		// var resizes = document.querySelectorAll('.js-animate');
	 //    for (var j=0; j<resizes.length; j++) {
	 //       resizes[j].style.width=parseInt(getCss(resizes[j],'width'))*scaleW+'px';
		//    resizes[j].style.height=parseInt(getCss(resizes[j],'height'))*scaleH+'px';
		//    resizes[j].style.top=parseInt(getCss(resizes[j],'top'))*scaleH+'px';
		//    resizes[j].style.left=parseInt(getCss(resizes[j],'left'))*scaleW+'px'; 
		// }
        
        
        //音乐控制
       	var music = document.getElementById('music');
		var _audio = document.getElementById('music-audio');
		_audio.addEventListener('ended',function(event){
			music.classList.add('stopped');
		},false);
		
		$('.music').on('touchstart',function(event){
			if(_audio.paused){
				$('#music').removeClass('stopped');
				_audio.play();
				
			}else{
				$('#music').addClass('stopped');
				_audio.pause();
				
				
			}
		});
})
