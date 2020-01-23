document.addEventListener('DOMContentLoaded',function(){
	$('.dh-container').directionalHover({
		easing:"swing",
		speed: 200
	});
	$('.advantage_detail_ph').slick({
		autoplay:true,
		speed:700,
		slidesToShow: 1,
		 slidesToScroll: 1,
		 infinite: true,
 
 
	})
	let isShowNaBar=false;
	$('.menu_bar_ph').click(function(event) {
		if(isShowNaBar==false){
			$('.menu_banner_botlr').css('height', '240px');
			isShowNaBar=true;
		}
		else{
			$('.menu_banner_botlr').css('height', '0');
			isShowNaBar=false;
		}
		
	});
	// $(".ch_option").css({
	// 	height: $('.ch_option').outerWidth()+'px',
		
	// });
	$(".dh-container").css({
		height: $('.dh-container').outerWidth()/1.5+'px',
		
	});
	$(".scenery_wrap").css({
		height: $('.scenery_wrap').outerWidth()*1.5+'px',
		
	});
	$(".acti_wrap").css({
		height: $('.acti_wrap').outerWidth()*2.3+'px',
		
	});
	
	
	$('.activity_detail').slick({
	  infinite: true,
	  dots:true,
	  autoplay:true,
		speed:1000,
	  slidesToShow: 5,
    slidesToScroll: 1,
	  responsive: [{
            breakpoint: 700, // tablet breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },{
            breakpoint: 500, // mobile breakpoint
            settings: {
                slidesToShow: 2,
   				 slidesToScroll: 1,
   				 prevArrow:"",
		nextArrow:"",
            },
            
        },
	 	 
        
        
        
    	],
		
		swipeToSlide:true,
		arrows:true,
		
	  
	});
	
	$( ".dt_picker" ).datepicker();
	 $( ".provinde" ).selectmenu();
	let vid=document.getElementById('video_banner');
	let playBut=document.getElementById('play_button');
	let closeBut=document.getElementById('close_button');
	let thum=document.getElementById('thumbnail_banner');
	let banner=document.querySelector('.banner_video');
	let listService=document.querySelectorAll('.sv_detail_show>*');
	let addetailheader=document.querySelectorAll('.ad_detail_header');
	let maxadHeight=0;
	Array.from(addetailheader).forEach((value)=>{
		if(value.offsetHeight>maxadHeight){
			maxadHeight=value.offsetHeight;
		}
	})
	Array.from(addetailheader).forEach((value)=>{
		value.style.height=maxadHeight+"px";
	})
	
	
	playBut.onclick=function(event) {
		
		if(vid.paused){
			$('#thumbnail_banner img').removeClass('transition_1s');
			vid.play();
			this.classList.add('hidePlayButton');
			thum.classList.add('hideThum');
			closeBut.classList.add('showCloseButton');
		}
		
	};
	vid.onclick=function(){
		console.log('test2');
		if(vid.paused==false){
			vid.pause();
			playBut.classList.remove('hidePlayButton');
			
		}
	}
	closeBut.onclick=function(){
		$('#thumbnail_banner img').addClass('transition_1s');
		vid.pause();
		vid.currentTime=0;
		thum.classList.remove('hideThum');
		closeBut.classList.remove('showCloseButton');
		playBut.classList.remove('hidePlayButton');
	}
	$('.sv_list>*').click(function(event) {
		$('.sv_list>*').removeClass('keep_hover');
		$('.sv_datail_infor').removeClass('paralax2');
		$(this).addClass('keep_hover ');
		
		$('.sv_detail_show>*').removeClass('active');
		let num=$(this).attr('data-stt');
		$('.sv_detail_show>*:nth-child('+(num)+')').addClass('active');
		$('.sv_detail_show>*:nth-child('+(num)+') .sv_datail_infor').addClass('paralax2');
	});
	let running=false;
	let lastScroll=0;
	$(window).scroll(function(event) {
		// console.log($('.ch_option')[0]);
		// console.log($('.ch_option')[1]);
		//console.log(`${$(window).scrollTop()} + ${$(window).height()} = ${$(window).scrollTop()+$(window).height()} >= ${$('.scenery').offset().top}`)
		let nowPos=$(window).scrollTop();
		
		if((nowPos+$(window).height())>=($('.choice').offset().top+$('.choice').height()))
		{
			$('.ch_option').first().addClass('ch_option_toRight');
			$('.ch_option').last().addClass('ch_option_toLeft');
		}
		else if((nowPos+$(window).height())<($('.choice').offset().top)){
			$('.ch_option').first().removeClass('ch_option_toRight');
			$('.ch_option').last().removeClass('ch_option_toLeft');
		}
		if((nowPos+$(window).height())>=($('.scenery').offset().top+$('.scenery').height())){
			
			$('.scenery_logo').addClass('sceneryLogo1Rotate');
		}
		else if((nowPos+$(window).height())<($('.scenery').offset().top)){
			$('.scenery_logo').removeClass('sceneryLogo1Rotate');
		}
		if((nowPos+$(window).height())>=($('.achievements_detail').offset().top+$('.achievements_detail').height())){
			if(running==false){
				running=true;
				let allNum=document.querySelectorAll('.achi_statisc_num');
				let numTour=allNum[0].getAttribute('data-tour');
				let numAward=allNum[1].getAttribute('data-award');
				let numAccess=allNum[2].getAttribute('data-access');
				let timeRunning=3000;
				let nowTime=0;
				let numRunnning=setInterval(function(){
					nowTime+=50;
					if(nowTime==timeRunning) clearInterval(numRunnning);
					let percent=nowTime/timeRunning;
					allNum[0].innerText=(percent*numTour).toFixed(0);
					allNum[1].innerText=(percent*numAward).toFixed(0);
					allNum[2].innerText=(percent*numAccess).toFixed(0);
				},50)
			}

		}
			
		else if((nowPos+$(window).height())<($('.achievements_detail').offset().top)){
			running=false;
			$('.achi_statisc_num').text('0');
		}
		if(nowPos>$('.service').offset().top){
			if(nowPos<lastScroll){
				$('.navi_scroll').addClass('showNaviScroll');
			}
			else{
				$('.navi_scroll').removeClass('showNaviScroll');
			}
		}
		else{
			$('.navi_scroll').removeClass('showNaviScroll');
		}
		if(nowPos>($('.banner_video').height()/4)){
			$('#thumbnail_banner img').addClass('paralax1');
		}
		else{
			$('#thumbnail_banner img').removeClass('paralax1');
		}
		
		lastScroll=nowPos;
	});
},false); 