 function display1(callback){
  setTimeout(() =>
    {
         document.getElementById("countdown").innerHTML = "1";
         callback();
    },1000);
}
function display2(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "2";
        callback();
    },1000);
}
function display3(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "3";
        callback();
    },1000);
}
function display4(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "4";
        callback();
    },1000);
}
function display5(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "5";
        callback();
    },1000);
}
function display6(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "6";
        callback();
    },1000);
}
function display7(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "7";
        callback();
    },1000);
}
function display8(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "8";
        callback();
    },1000);
}
function display9(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "9";
        callback();
    },1000);
}
function display10(callback){
    setTimeout(() =>
    {
        document.getElementById("countdown").innerHTML = "10";
        callback();
    },1000);
}
document.getElementById("btn").addEventListener("click",function()
{
    display10(()=>
    {
        display9(()=>
        {
            display8(()=>
            {
                  display7(()=>
                    {
                        display6(()=>
                        {
                            display5(()=>
                            {
                                display4(()=>
                                {
                                    display3(()=>
                                    {
                                        display2(()=>
                                        {
                                            display1(()=>
                                            {
                                                setTimeout(()=> 
                                                {
                                                    document.getElementById("countdown").innerHTML="HAPPY INDEPENDENCE DAY";
                                                },1000);
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                
            })
        })
    })
})
