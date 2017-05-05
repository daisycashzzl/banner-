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
            if(index>=4){
                index=0;
                removeTransition();
                translateX(-W*index);
            }
            setPoint(index);
        });
        banner.addEventListener('webkitTransitionEnd',function(){
            if(index>=4){
                index=0;
                removeTransition();
                translateX(-W*index);
            }
            setPoint(index);
        });

//-------------------3-角标 切换------------------------
  //index 表示当前播放图的索引值
  function setPoint(index){
    var lis=document.querySelectorAll('.num li');
    //排他
    //先排除所有的
    for(var i=0;i<lis.length;i++){
      lis[i].classList.remove('active');
      console.log(lis[i]);
    }
    //显示自己
    lis[index].classList.add('active');
  }
 }