/**
 * Created by Administrator on 2017/7/21.
 */
     $(document).ready(function(){
         var count=0;
         $('#small_btn').click(function() {
             //变小导航
             if (count % 2 == 0) {
                     $('.aside_nav').animate({
                         width: "80px",
                     }, 400 );
                     $('.aside_down img').nextAll().hide( );
                     $('.aside_logo img').hide().next().css('margin-right', '30px');
                     $('.project_all_wrap').animate({
                          marginLeft:"80px",
                     }, 400 );
                     $('.aside_content ul li').animate({
                          paddingLeft:"25px",
                     }, 400 );
                     $('.aside_content ul li ul').addClass("mini_ui");
                 count++;
             }
             //变大导航
             else {
                 $('.aside_nav').animate({
                     width: "260px",
                 }, 300);
                 $('.aside_down img').nextAll().show();
                 $('.aside_logo img').show('slow').next().css('margin-right', '30px');
                 $('.project_all_wrap').animate({ marginLeft:"260px"},400)
                 $('.aside_content ul li').css('padding-left', '73px');
                 $('.aside_content ul li ul').removeClass("mini_ui");
                 count++;
             }
         });
     });


