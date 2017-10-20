app.directive('tab',function($timeout) {
   return {
       repeat:false,
       templateUrl:"./App/View/tab_fold.html",
       link:function(){
           $('.header a').eq(0).addClass('line').siblings().removeClass('line');
           $('.header').on('click','a',function() {
               $(this).addClass('line').siblings().removeClass('line');
           });
           if ($(".list>li").length > 2) {
               $('.list').width($('.list>li').width() * $('.list>li').length                       + 200);
               var mySwipers = new IScroll('#coller',{
                   mouseWheel: true,
                   scrollX:true,
                   click:true
               })
           }
           //轮播切换代码
           var myswiper=new Swiper('.swiper-container',{
               //自动切换时间的间隔
               autoplay:800,
               //是否无缝滚动
               loop:true,
               //滚动效果
               effect:'coverflow',
               //设置分页器
               pagination:'.swiper-pagination',
               //设置分页器类型
               paginationType:'bullets',
               //设置点击切换
               paginationClickable:'true',
               //点击之后是否禁用自动切换
               autoplayDisableOnInteraction:false,
               //左右键点击
               nextButton:'.swiper-button-next',
               prevButton:'.swiper-button-prev',
               //设置键盘切换
               keyboardControl:true,
               //设置鼠标切换
               mousewheelControl:true,
               //设置容器显示的数量
               slidesPerView:1,
               slidesPerGroup:1

           })
            $("#more").on("click",function() {
                $(this)[0].innerHTML = "<img src='Content/img/loading.gif'>";

               var str = "";

                   for(var i=0;i<4;i++){
                       str += "<li><img src='Content/img/pics3.gif'><h3>上汽大众-全新路途L                             </h3><p>上汽大众-全新旅途L享2年0利率</p><span>1元                                              </span><b>1.44万</b></li>"
                   };

                   $timeout(function(){
                        $(".onload")[0].innerHTML += str;
                       $("#more")[0].innerHTML = "点击加载更多哦";
                   },1000);

            })
       }
   }
});