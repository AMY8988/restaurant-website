function setActive(currentSectionId){

        $(`.nav-link`).removeClass("active");
        $(`.nav-link[href="#${currentSectionId}"]`).addClass("active");
     
};

function redirect(x){
   return window.location.href = `index.html#${x}` ;
}

//home waypoint scroll
let screenHeight = $("#home").height();
$(window).scroll(function(){
        let currentHeight = $(this).scrollTop();

        if(currentHeight >= screenHeight-600){

            $(".scroll-nav").addClass("nav-scroll");
            
        }else{
            $(".scroll-nav").removeClass("nav-scroll");
            setActive("home");
        }
        
});  


//nav scroll active
function navScroll(){
    let currentSection = $(`section[id]`);
        setActive("home");
    currentSection.waypoint(function(direction){
       if(direction === "down"){
           let currentSectionId = $(this.element).attr("id");
           console.log(currentSectionId);
           setActive(currentSectionId);
       }
        
    } , {
        offset: '25%'
    });

    currentSection.waypoint(function(direction){
        if(direction === "up"){
            let currentSectionId = $(this.element).attr("id");
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
         
     });
};

navScroll();

//menu-list.html file

$(".show-add-to-card").click(function(){
   
})

$(".show-add-to-card").click(function(){
    $(".sidebar").toggleClass("sidebar-show");
   
 });
 
 $(".hide-sidebar").click(function(){
     $(".sidebar").removeClass("sidebar-show");
    
  });


