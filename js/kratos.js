(function() {

	'use strict';

	var shareMenu = function() {
		$(".Share").click(function() {
			$(".share-wrap").fadeToggle("slow");
		});

		$('.qrcode').each(function(index, el) {
			var url = $(this).data('url');
			if ($.fn.qrcode) {
				$(this).qrcode({
					text: url,
					width: 150,
					height: 150,
				});
			}
		});
	}

	var topStart = function() {
		$('#top-Start').click(function() {
			$('html,body').animate({
				scrollTop: $('#kratos-blog').offset().top
			}, 1000);
		});
	};

	var isiPad = function() {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function() {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	var mainMenu = function() {
		$('#kratos-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});
	};

	var parallax = function() {
		$(window).stellar();
	};

	var offcanvas = function() {
		var $clone = $('#kratos-menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});
		$('#kratos-page').prepend($clone);
		$('.js-kratos-nav-toggle').on('click', function() {
			if ($('body').hasClass('kratos-offcanvas')) {
				$('body').removeClass('kratos-offcanvas');
			} else {
				$('body').addClass('kratos-offcanvas');
			}
		});
		$('#offcanvas-menu').css('height', $(window).height());
		$(window).resize(function() {
			var w = $(window);
			$('#offcanvas-menu').css('height', w.height());
			if (w.width() > 769) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	}

	var sidebaraffix = function() {
		if ($("#main").height() > $("#sidebar").height()) {
			var footerHeight = 0;
			if ($('#page-footer').length > 0) {
				footerHeight = $('#page-footer').outerHeight(true);
			}
			$('#sidebar').affix({
				offset: {
					top: $('#sidebar').offset().top - 30,
					bottom: $('#footer').outerHeight(true) + footerHeight + 6
				}
			});
		}
	}

	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $("#offcanvas-menu, .js-kratos-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function() {
					$('body .animate-box.item-animate').each(function(k) {
						var el = $(this);
						setTimeout(function() {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});
				}, 100);
			}
		}, {
			offset: '85%'
		});
	};

	var showThumb = function(){
		(function ($) {
			$.extend({
				tipsBox: function (options) {
					options = $.extend({
						obj: null,
						str: "+1",
						startSize: "10px",
						endSize: "25px",
						interval: 800,
						color: "red",
						callback: function () { }
					}, options);
					$("body").append("<span class='num'>" + options.str + "</span>");
					var box = $(".num");
					var left = options.obj.offset().left + options.obj.width() / 2;
					var top = options.obj.offset().top - options.obj.height();
					box.css({
						"position": "absolute",
						"left": left - 12 + "px",
						"top": top + 9 + "px",
						"z-index": 9999,
						"font-size": options.startSize,
						"line-height": options.endSize,
						"color": options.color
					});
					box.animate({
						"font-size": options.endSize,
						"opacity": "0",
						"top": top - parseInt(options.endSize) + "px"
					}, options.interval, function () {
						box.remove();
						options.callback();
					});
				}
			});
		})(jQuery);

	}

	var showlove = function() {
			$.fn.postLike = function() {
				if ($(this).hasClass('done')) {
					layer.msg('您已经支持过了', function() {});
					return false;
				} else {
					$(this).addClass('done');
					layer.msg('感谢您的支持');
					var id = $(this).data("id"),
						action = $(this).data('action'),
						rateHolder = $(this).children('.count');
					var ajax_data = {
						action: "love",
						um_id: id,
						um_action: action
					};
					$.post("/wp-admin/admin-ajax.php", ajax_data, function(data) {
						$(rateHolder).html(data);
					});
					return false;
				}
			};
			$(document).on("click", ".Love", function() {
				$(this).postLike();
			});
		}

	var gotop = function() {
		var offset = 300,
			offset_opacity = 1200,
			scroll_top_duration = 700,
			$back_to_top = $('.cd-top'),
			$cd_gb = $('.cd-gb'),
			$cd_weixin = $('.cd-weixin');
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
				$cd_gb.addClass('cd-fade-out');
				$cd_weixin.addClass('cd-fade-out');
			}
		});
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});
	}
	
	var weixinpic = function() {
		$("#weixin-img").mouseout(function(){
	        $("#weixin-pic")[0].style.display = 'none';
	    })
		$("#weixin-img").mouseover(function(){
	        $("#weixin-pic")[0].style.display = 'block';
	    })
	}

	var showPhotos = function() {
		layer.photos({
		  photos: '.kratos-post-content'
		  ,anim: 0
		}); 
	}

	var copyright = function() {
		console.log("原项目托管：https://github.com/Vtrois/Kratos");
		console.log("修改版项目托管：https://github.com/xb2016/Kratos");
	}

	$(function() {
		topStart();
		mainMenu();
		shareMenu();
		parallax();
		offcanvas();
		showThumb();
		showlove();
		gotop();
		weixinpic();
		mobileMenuOutsideClick();
		contentWayPoint();
		showPhotos();
		copyright();
	});
}());
//内容展开/收缩
jQuery(document).ready(
	function(jQuery){
	jQuery('.collapseButton').click(function(){
		jQuery(this).parent().parent().find('.xContent').slideToggle('slow');
		if (jQuery(this).parent().parent().find('.xicon').hasClass('active')) {
			jQuery(this).parent().parent().find('.xicon').removeClass('active');
		} else {
			jQuery(this).parent().parent().find('.xicon').addClass('active');
		}
	});
	jQuery('.icoButton').click(function(){
		jQuery(this).parent().parent().parent().find('.xContent').slideToggle('slow');
		if (jQuery(this).parent().parent().parent().find('.xicon').hasClass('active')) {
			jQuery(this).parent().parent().parent().find('.xicon').removeClass('active');
		} else {
			jQuery(this).parent().parent().parent().find('.xicon').addClass('active');
		}
	});
});
//一言
setTimeout("getkoto()",3000);
var t;
function getkoto(){
	var hjs = document.createElement('script');
	hjs.setAttribute('id', 'hjs');
	hjs.setAttribute('src', 'https://api.lwl12.com/hitokoto/main/get/hitokoto/?encode=json');
	document.getElementById("hjsbox").appendChild(hjs);
	t=setTimeout("getkoto()",10000);
	}
function echokoto(result){
	var hc = eval(result);
	//$("#hitokoto").fadeTo(300,0);
	document.getElementById("hitokoto").innerHTML = hc.hitokoto;
	//$("#hitokoto").fadeTo(300,0.75);
}
//请在这里修改你的建站时间
function show_date_time(){
	window.setTimeout("show_date_time()",1e3);
	var BirthDay=new Date("2017/01/25"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=Math.floor(e_hrsold),e_minsold=60*(e_hrsold-hrsold),minsold=Math.floor(60*(e_hrsold-hrsold)),seconds=Math.floor(60*(e_minsold-minsold));
	span_dt_dt.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒"
}
show_date_time();
//OωO表情
//请注意下面api的路径
var OwO_demo = new OwO({
	logo: 'OωO表情',
	container: document.getElementsByClassName('OwO')[0],
	target: document.getElementsByClassName('OwO')[0],
	api: '/wp-content/themes/kratos/inc/OwO.json',
	position: 'down',
	width: '90%',
	maxHeight: '250px'
});
function grin(tag) {
	var myField;
	tag = ' ' + tag + ' ';
	if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
	myField = document.getElementById('comment');
	} else {
		return false;
	}
	if (document.selection) {
		myField.focus();
	sel = document.selection.createRange();
		sel.text = tag;
	myField.focus();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = endPos;
		myField.value = myField.value.substring(0, startPos)
			+ tag
			+ myField.value.substring(endPos, myField.value.length);
		cursorPos += tag.length;
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		var owoopen = document.getElementsByClassName('OwO OwO-open')[0];
		owoopen.className = "OwO";
	} else {
		myField.value += tag;
		myField.focus();
	}
}
