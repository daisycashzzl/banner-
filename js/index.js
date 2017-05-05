window.onload = function(){
    //轮播图
    banner();
}
    
/**
 * 定时器切换轮播图
 * 边界检测 实现无缝滚动
 * 角标切换 小圆点s
 */ 
   function banner(){
    //    设置移动默认为1
        var index = 0;
        //获取轮播图
        var banner = document.querySelector('.swiper');
        //获取一屏的宽
        // var boxWidth = document.querySelector('.box').offsetWidth;
        var W = banner.querySelector('li').offsetWidth;
        console.log(W);
        
        //设置位移 让ul移动
        var translateX = function(x){
            banner.style.transform = 'translateX('+x+'px)';
            banner.style.webkitTransform='translateX('+x+'px)';
        }

        //添加过度
        var transition = function(){
            banner.style.transition='all 0.4s';
            banner.style.webkitTransition='all 0.4';
        }
        //移除过度
        var removeTransition = function(){
            banner.style.transition="none";
            banner.style.webkitTransition="none";
        }
        var timer = setInterval(function(){
            //让图片向左移动盒子个宽 负
            index++;
            transition();
            translateX(-W*index);
        },2000);

        //完成无缝滚动 判断index是否越界
        banner.addEventListener('transitionEnd',function(){
            if(index>=5){
                index=0;
                removeTransition();
                translateX(-W*index);
            }
        });
        banner.addEventListener('webkitTransitionEnd',function(){
            if(index>=4){
                index=0;
                removeTransition();
                translateX(-W*index);
            }
        });

//封装复用
        function bindTransitionEnd(obj,callback){
            if(typeof obj=='object'){
                obj.addEventListener('transitionEnd',function(){
                    if(callback){
                        callback();
                    }
                })
            }
        };
   }