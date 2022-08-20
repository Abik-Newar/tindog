var btn = document.getElementById("topBtn");
window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        btn.style.display ="block";
    }
    else {
        btn.style.display = "none";
    }
};

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
