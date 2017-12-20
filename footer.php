<?php
/**
 * The template for displaying the footer
 *
 * @package Vtrois
 * @version 2.5(17.12.20)
 */
?>
				<footer>
					<div id="footer">
						<div class="cd-tool visible-lg text-center">
							<?php if ( kratos_option( 'cd_gb' ) && kratos_option( 'cd_weixin' ) ) { ?>
						   		<a rel="nofollow" class="cd-gb-a" href="<?php echo kratos_option('guestbook_links'); ?>"><span class="fa fa-book"></span></a>	
						   	<?php } elseif( kratos_option( 'cd_gb' ) && !kratos_option( 'cd_weixin' ) ){ ?>
						   		<a rel="nofollow" class="cd-gb-b" href="<?php echo kratos_option('guestbook_links'); ?>"><span class="fa fa-book"></span></a>	
						   	<?php } ?>
						   	<?php if ( kratos_option( 'cd_weixin' ) ) : ?>
						   		<a id="weixin-img" class="cd-weixin"><span class="fa fa-weixin"></span><div id="weixin-pic"><img src="<?php echo kratos_option('weixin_image') ?>"></div></a>
						   	<?php endif; ?>
						    <a class="cd-top cd-is-visible cd-fade-out"><span class="fa fa-chevron-up"></span></a>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-md-6 col-md-offset-3 footer-list text-center">
									<p class="kratos-social-icons">
									<?php echo (!kratos_option('social_weibo')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_weibo') . '"><i class="fa fa-weibo"></i></a>'; ?>
									<?php echo (!kratos_option('social_tweibo')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_tweibo') . '"><i class="fa fa-tencent-weibo"></i></a>'; ?>
									<?php echo (!kratos_option('social_mail')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_mail') . '"><i class="fa fa-envelope"></i></a>'; ?>
									<?php echo (!kratos_option('social_twitter')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_twitter') . '"><i class="fa fa-twitter"></i></a>'; ?>
									<?php echo (!kratos_option('social_facebook')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_facebook') . '"><i class="fa fa-facebook-official"></i></a>'; ?>
									<?php echo (!kratos_option('social_linkedin')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_linkedin') . '"><i class="fa fa-linkedin-square"></i></a>'; ?>
									<?php echo (!kratos_option('social_github')) ? '' : '<a target="_blank" rel="nofollow" href="' . kratos_option('social_github') . '"><i class="fa fa-github"></i></a>'; ?>
									</p>
									<p> © <?php echo date('Y'); ?> <a href="<?php echo get_option('home'); ?>"><?php bloginfo('name'); ?></a>. All Rights Reserved. | 本站已运行<span id=span_dt_dt>Loding...</span><br>Theme <a href="https://github.com/xb2016/kratos" target="_blank" rel="nofollow">Kratos</a> made by <a href="https://www.vtrois.com" target="_blank" rel="nofollow">Vtrois</a>
									<?php if(kratos_option('icp_num')){?>
									<br><a href="http://www.miitbeian.gov.cn/" rel="external nofollow" target="_blank"><?php echo kratos_option( 'icp_num' ); ?></a><?php }
									if(kratos_option('gov_num')){?>
									<br><a href="<?php echo kratos_option( 'gov_link' ); ?>" rel="external nofollow" target="_blank"><i class="govimg"></i><?php echo kratos_option( 'gov_num' ); ?></a><?php }?>
									</p>
									<p><?php echo (!kratos_option('site_tongji')) ? '' : kratos_option('site_tongji'); ?></p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
		<?php wp_footer();?>
		<?php if ( kratos_option('site_sa') ) : ?>
		<script type="text/javascript">
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
		</script>
		<?php endif; ?>
		<script type="text/javascript"><?php if(is_home()) echo 'var isindex=true;var title="";';else echo 'var isindex=false;var title="', get_the_title(),'";'; ?></script>
		<div id="spig" class="spig">
			<div id="message">Loading……</div>
			<div id="mumu" class="mumu"></div>
			<span class="hitokoto" id="hitokoto" style="display:none">Loading...</span>
			<div id="hjsbox" style="display:none"></div>
		</div>
		<?php if ( kratos_option('site_snow')==1 ) : ?>
		<canvas id="Snow"></canvas>
		<script>
    (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
        window.requestAnimationFrame = requestAnimationFrame;
    })();
    (function() {
        var flakes = [],
            canvas = document.getElementById("Snow"),
            ctx = canvas.getContext("2d"),
            flakeCount = 300,
            mX = -100,
            mY = -100
            canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        function snow() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < flakeCount; i++) {
                var flake = flakes[i],
                    x = mX,
                    y = mY,
                    minDist = 150,
                    x2 = flake.x,
                    y2 = flake.y;
                var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                    dx = x2 - x,
                    dy = y2 - y;
                if (dist < minDist) {
                    var force = minDist / (dist * dist),
                        xcomp = (x - x2) / dist,
                        ycomp = (y - y2) / dist,
                        deltaV = force / 2;
                    flake.velX -= deltaV * xcomp;
                    flake.velY -= deltaV * ycomp;
                } else {
                    flake.velX *= 0.98;
                    if (flake.velY <= flake.speed) {
                        flake.velY = flake.speed
                    }
                    flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
                }
                ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
                flake.y += flake.velY;
                flake.x += flake.velX;
                if (flake.y >= canvas.height || flake.y <= 0) {
                    reset(flake);
                }
                if (flake.x >= canvas.width || flake.x <= 0) {
                    reset(flake);
                }
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            }
            requestAnimationFrame(snow);
        };
        function reset(flake) {
            flake.x = Math.floor(Math.random() * canvas.width);
            flake.y = 0;
            flake.size = (Math.random() * 3) + 2;
            flake.speed = (Math.random() * 1) + 0.5;
            flake.velY = flake.speed;
            flake.velX = 0;
            flake.opacity = (Math.random() * 0.5) + 0.3;
        }
        function init() {
            for (var i = 0; i < flakeCount; i++) {
                var x = Math.floor(Math.random() * canvas.width),
                    y = Math.floor(Math.random() * canvas.height),
                    size = (Math.random() * 3) + 2,
                    speed = (Math.random() * 1) + 0.5,
                    opacity = (Math.random() * 0.5) + 0.3;
                flakes.push({
                    speed: speed,
                    velY: speed,
                    velX: 0,
                    x: x,
                    y: y,
                    size: size,
                    stepSize: (Math.random()) / 30,
                    step: 0,
                    angle: 180,
                    opacity: opacity
                });
            }
            snow();
        };
        document.addEventListener("mousemove", function(e) {
            mX = e.clientX,
            mY = e.clientY
        });
        window.addEventListener("resize", function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        init();
    })();
        </script>
		<?php endif; ?>
	</body>
</html>
