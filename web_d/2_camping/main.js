
//gnb
$('.gnb').hover(function(){
    //마우스가 진입했을 때 할 일
    //$('.subnav').show()
    //$('.subnav').fadeIn()
    $('.subnav').stop().slideDown();
},function(){
    //마우스가 벗어났을 때  할 일
    //$('.subnav').hide()
    //$('.subnav').fadeOut()
    $('.subnav').stop().slideUp();
})

//banner slide
let num=0;

//setInterval(할일, 시간) --> 시간마다 할 일
//setInterval(function(){}, 3000) --> 3초마다 할 일 

/* if(조건문){조건문이 참일 때 할 일}

if(조건문A){
    조건문이 참일 때 할 일
}else if(조건문B){
    조건문A이 거짓이고 조건문B이 참일 때 할 일
}else{
    모든 조건문에 만족하지 않을 때 할 일
}

if(조건문){
    조건문이 참일 때 할 일
else{
    조건문이 거짓일 때 할 일
    }
}
 */

setInterval(function(){
    if(num<2){
        num++;
    }else{
        num=0
    }
    let slidePosition=num*(-300)+"px";
    //num++; //1씩 증가
    console.log(num)
    //$('.main ul').animate({실행문},1000)
    $('.main ul').animate({
        top:slidePosition
    },1000)
}, 3000) 

//텝메뉴
//$('.btn li').click(function){} //.btn li중 어떤 li라도 클릭하면 어떤 실행문이 실행됨

$('.btn li').click(function(){
    console.log("토요일이당~~")
})
