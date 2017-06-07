/**
 * Created by dell on 2017/3/25.
 */
var zrr=[];//命名一个空数组
//适用人群dl效果
$(function(){
    var ro1=document.getElementById("ro1");
    var dis=ro1.getElementsByTagName("div");
    var H4=ro1.getElementsByTagName("h4");
    for(var n=0;n<dis.length;n++){
        dis[n].index=n;
        dis[n].onmouseover=function(){
            for(var j=0;j<dis.length;j++){
                dis[j].style.border="1px solid white";
                H4[j].style.color="black";
                H4[j].style.fontWeight="";
            }
            dis[this.index].style.border="1px solid #ececec";
            dis[this.index].style.cursor="pointer";
            H4[this.index].style.color="#fb9507";
            H4[this.index].style.fontWeight="bolder";
        }
        dis[n].onmouseout=function(){
            for(var s=0;s<dis.length;s++){
                dis[s].style.border="1px solid white";
                H4[s].style.color="black";
                H4[s].style.fontWeight="";
            }
        }
    }
    //回到顶部效果
    iTop();
    change();
    //滚动监听
    var divs=$("#cont > div[id^='Ban']");
    for(var a=0;a<divs.length;a++){
        zrr[a]=$(divs[a]).offset().top;
    }
})
function change(){
    var ro=document.getElementById("ro");
    var divs=ro.getElementsByTagName("div");
    var h4=ro.getElementsByTagName("h4");
    for(var i=0;i<divs.length;i++){
        divs[i].index=i;
        divs[i].onmouseover=function(){
            for(var p=0;p<divs.length;p++){
                divs[p].style.border="1px solid white";
                h4[p].style.color="black";
                h4[p].style.fontWeight="";
            }
            divs[this.index].style.border="1px solid #ececec";
            divs[this.index].style.cursor="pointer";
            h4[this.index].style.color="#fb9507";
            h4[this.index].style.fontWeight="bolder";
        }
        divs[i].onmouseout=function(){
            for(var b=0;b<divs.length;b++){
                divs[b].style.border="1px solid white";
                h4[b].style.color="black";
                h4[b].style.fontWeight="";
            }
        }
    }
}
//首页清调减排
function mo1(){
    var sq1=document.getElementById("sq1");
    sq1.innerHTML="清理肠道";
    sq1.style.fontSize="14px";
    sq1.style.color="white";
}
function mo11(){
    var sq1=document.getElementById("sq1");
    sq1.innerHTML="清";
    sq1.style.fontSize="24px";
    sq1.style.color="#424242";
}
function mo2(){
    var sq2=document.getElementById("sq2");
    sq2.innerHTML="酸碱平衡";
    sq2.style.fontSize="14px";
    sq2.style.color="white";
}
function mo22(){
    var sq2=document.getElementById("sq2");
    sq2.innerHTML="调";
    sq2.style.fontSize="24px";
    sq2.style.color="#424242";
}
function mo3(){
    var sq3=document.getElementById("sq3");
    sq3.innerHTML="减脂轻体";
    sq3.style.fontSize="14px";
    sq3.style.color="white";
}
function mo33(){
    var sq3=document.getElementById("sq3");
    sq3.innerHTML="减";
    sq3.style.fontSize="24px";
    sq3.style.color="#424242";
}
function mo4(){
    var sq4=document.getElementById("sq4");
    sq4.innerHTML="排毒养颜";
    sq4.style.fontSize="14px";
    sq4.style.color="white";
}
function mo44(){
    var sq4=document.getElementById("sq4");
    sq4.innerHTML="排";
    sq4.style.fontSize="24px";
    sq4.style.color="#424242";
}
//回到顶部按钮
var timer=null;
var sTop=true;
function iTop(){
    var ri7=document.getElementById("toTop");
    var S6=document.getElementById("S6");
    var Gohome=document.getElementById("Gohome");
    //滚动时触发
    window.onscroll=function(){
        if(!sTop){
            clearInterval(timer);
        }
        sTop=false;
    }
    ri7.onclick=function(){
        timer=setInterval(function(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            var speed =Math.floor(-top / 6);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            sTop=true;
            if(top==0){
                clearInterval(timer);
            }
        },30);
    }
    Gohome.onclick=function(){
        timer=setInterval(function(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            var speed =Math.floor(-top / 6);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            sTop=true;
            if(top==0){
                clearInterval(timer);
            }
        },30);
    }
    S6.onclick=function(){
        timer=setInterval(function(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            var speed =Math.floor(-top / 6);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            sTop=true;
            if(top==0){
                clearInterval(timer);
            }
        },30);
    }
}
//回到首页按钮

$(window).scroll(function(){
    var top=$(window).scrollTop();//这里后面一定记得加括号
    var height=$(window).height();//指的是屏幕高度 因为电脑和电脑不一样 都用 $(window) 来取
    if(top>=2200-height){
        $("#S3").css("border-bottom","3px solid #fb9507");
        $("#S1").css("border-bottom","3px solid white");
        $("#S2").css("border-bottom","3px solid white");
        $("#S4").css("border-bottom","3px solid white");
        $("#S5").css("border-bottom","3px solid white");
        $("#S6").css("border-bottom","3px solid white");
    }else if(top>=1500-height){
        $("#S2").css("border-bottom","3px solid #fb9507");
        $("#S1").css("border-bottom","3px solid white");
        $("#S3").css("border-bottom","3px solid white");
        $("#S4").css("border-bottom","3px solid white");
        $("#S5").css("border-bottom","3px solid white");
        $("#S6").css("border-bottom","3px solid white");
    }else if(top>=1000-height){
        $("#S1").css("border-bottom","3px solid #fb9507");
        $("#S2").css("border-bottom","3px solid white");
        $("#S3").css("border-bottom","3px solid white");
        $("#S4").css("border-bottom","3px solid white");
        $("#S5").css("border-bottom","3px solid white");
        $("#S6").css("border-bottom","3px solid white");
    }
    if(top>=1800){
        $("#S4").css("border-bottom","3px solid #fb9507");
        $("#S5").css("border-bottom","3px solid #fb9507");
        $("#S1").css("border-bottom","3px solid white");
        $("#S2").css("border-bottom","3px solid white");
        $("#S3").css("border-bottom","3px solid white");
        $("#S6").css("border-bottom","3px solid white");
    }
    if(top==0){
        $("#S6").css("border-bottom","3px solid #fb9507");
        $("#S4").css("border-bottom","3px solid white");
        $("#S5").css("border-bottom","3px solid white");
        $("#S1").css("border-bottom","3px solid white");
        $("#S2").css("border-bottom","3px solid white");
        $("#S3").css("border-bottom","3px solid white");
    }
    console.log(zrr.length);

})

