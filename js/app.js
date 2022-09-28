if(navigator.serviceWorker){
    navigator.serviceWorker.register("./sw.js");
}


$(document).ready(function(){
    $(".menu").click(function(){
        $(".keep").toggleClass("width");
    });
});

