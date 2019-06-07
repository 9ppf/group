// //手机 
// function phone(){
//     var $ts=$("#tishi");
//     var $js1=$("#jingshi");
//     $js1.css("opacity","1");
//      var mobilereg1 = /^1[3-8][0-9]{9}$/; // 1[356789][0-9] （后面再接8位数）
//      var $mobile = $.trim($('.phone').val());
//      if (!$mobile) {
//         $ts.html("请输入手机号");
//         setTimeout(function(){ $js1.css("opacity","0");},1000);
//         return;
//     } else if (!mobilereg1.test($mobile)) {
//         $ts.html('请填写正确的手机号码');
//         setTimeout(function(){ $js1.css("opacity","0");},1000);
//         return;
//     }
//  }   
 
//  // 密码
//  function upwd(){
//     var $ts=$("#tishi");
//     var $js1=$("#jingshi");
//     $js1.css("opacity","1");
//     var upwd=/^[0-9a-zA-z]{8,10}$/;
//     var $upwd=$.trim($('.upwd').val());
//     if(!$upwd){
//         $ts.html("请输入密码");
//         setTimeout(function(){ $js1.css("opacity","0");},1000);
//         return;
//    }else if(!upwd.test($upwd)){
//         $ts.html('请填写正确的密码');
//         setTimeout(function(){ $js1.css("opacity","0");},1000);
//         return;
//    }else{
//     $ts.html('登陆成功');
//     setTimeout(function(){ $js1.css("opacity","0");},1000); 
//    }
//  }

//  function login() {
//     upwd(); 
//     phone(); 
// }

// //新用户注册 
// function reg(){
//     var $login=$(".login");
//     var $reg=$(".reg");   
//     $login.css("display","none");
//     $reg.css("display","block");

// }

// // 注册验证
// function reg_reg(){
//     upwd(); 
//     phone(); 
// }

// //新用户登录
//  function newLogin(){
//     var $login=$(".login");
//     var $reg=$(".reg"); 
//     $login.css("display","block");
//     $reg.css("display","none");
//  }

// //忘记密码
// function forget(){
//     var $login=$(".login");
//     var $forget=$(".forget");
//     $login.css("display","none");
//     $forget.css("display","block");
// }

// //重置成功
// function ok(){
//     function upwd2(){
//         var $ts=$("#tishi");
//         var $js1=$("#jingshi");
//         $js1.css("opacity","1");
//         var upwd=/^[0-9a-zA-z]{8,10}$/;
//         var $upwd=$.trim($('.upwd').val());
//         if(!$upwd){
//             $ts.html("请输入密码");
//             setTimeout(function(){ $js1.css("opacity","0");},1000);
//             return;
//        }else if(!upwd.test($upwd)){
//             $ts.html('请填写正确的密码');
//             setTimeout(function(){ $js1.css("opacity","0");},1000);
//             return;
//        }else{
//             var $login=$(".login");
//             var $forget=$(".forget");
//             $login.css("display","block");
//             $forget.css("display","none");
//        };
//     }
//    phone(); 
// }











//登陆时的信息验证
function login() {
        var $js1=$("#jingshi1");
        var $ts=$("#tishi1");
        // 手机
        var mobilereg1 = /^1[3-8][0-9]{9}$/; // 1[356789][0-9] （后面再接8位数）
        var $mobile = $.trim($('.phone1').val());
        // 密码
        var upwd=/^[0-9a-zA-z]{8,10}$/;
        var $upwd=$.trim($('.upwd1').val());
        $js1.css("opacity","1");
        if (!$mobile) {
            $ts.html("请输入手机号");
            setTimeout(function(){ $js1.css("opacity","0");},1000);
            return;
        } else if (!mobilereg1.test($mobile)) {
            $ts.html('请填写正确的手机号码');
            setTimeout(function(){ $js1.css("opacity","0");},1000);
            return;
        }
       if(!$upwd){
            $ts.html("请输入密码");
            setTimeout(function(){ $js1.css("opacity","0");},1000);
            return;
       }else if(!upwd.test($upwd)){
            $ts.html('请填写正确的密码');
            setTimeout(function(){ $js1.css("opacity","0");},1000);
            return;
       }else{
        $ts.html('登陆成功');
        setTimeout(function(){ $js1.css("opacity","0");},1000); 
    }
    var $show=$(".show");
    var $choose=$(".choose");
    $choose.css("opacity","1");
    $show.css("display","none");
 }

//新用户注册 
function reg(){
    var $login=$(".login");
    var $reg=$(".reg");   
    $login.css("display","none");
    $reg.css("display","block");

}

// 注册时的信息验证
function reg_reg() {
    var $js1=$("#jingshi2");
    var $ts=$("#tishi2");
    // 手机
    var mobilereg1 = /^1[3-8][0-9]{9}$/; // 1[356789][0-9] （后面再接8位数）
    var $mobile = $.trim($('.phone2').val());
    // 密码
    var upwd=/^[0-9a-zA-z]{8,10}$/;
    var $upwd=$.trim($('.upwd2').val());
    $js1.css("opacity","1");
    if (!$mobile) {
        $ts.html("请输入手机号");
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
    } else if (!mobilereg1.test($mobile)) {
        $ts.html('请填写正确的手机号码');
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
    }
   if(!$upwd){
        $ts.html("请输入密码");
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
   }else if(!upwd.test($upwd)){
        $ts.html('请填写正确的密码');
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
   }else{
    $ts.html('登陆成功');
    setTimeout(function(){ $js1.css("opacity","0");},1000); 
}
}
//新用户登录
 function newLogin(){
    var $login=$(".login");
    var $reg=$(".reg"); 
    $login.css("display","block");
    $reg.css("display","none");
 }

//忘记密码
function forget(){
    var $login=$(".login");
    var $forget=$(".forget");
    $login.css("display","none");
    $forget.css("display","block");
}

//重置成功
function ok(){
    var $js1=$("#jingshi3");
    var $ts=$("#tishi3");
    // 手机
    var mobilereg1 = /^1[3-8][0-9]{9}$/; // 1[356789][0-9] （后面再接8位数）
    var $mobile = $.trim($('.phone3').val());
    // 密码
    var upwd=/^[0-9a-zA-z]{8,10}$/;
    var $upwd=$.trim($('.upwd3').val());
    $js1.css("opacity","1");
    if (!$mobile) {
        $ts.html("请输入手机号");
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
    } else if (!mobilereg1.test($mobile)) {
        $ts.html('请填写正确的手机号码');
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
    }
   if(!$upwd){
        $ts.html("请输入密码");
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
   }else if(!upwd.test($upwd)){
        $ts.html('请填写正确的密码');
        setTimeout(function(){ $js1.css("opacity","0");},1000);
        return;
   }else{
    $ts.html('登陆成功');
    setTimeout(function(){ $js1.css("opacity","0");},1000); 
}
    var $login=$(".login");
    var $forget=$(".forget");
    $login.css("display","block");
    $forget.css("display","none");
}