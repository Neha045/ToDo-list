//Check off specific todos by clicking
$("ul").on('click',"li", function(){
    $(this).toggleClass("checkoff");
});
//click on X to delete todo
$("ul").on('click',"span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//
$("input[type = 'text']").on('keypress',function(event){
   if (event.which === 13){
       //grabbing a new todo from text input
       var todoText = $(this).val();
       $(this).val("");
       // cerating a new li and adding to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
   } 
});
$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})