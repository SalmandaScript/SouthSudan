//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//toggle question code 
$(document).ready(function() 
{ 

$("#shbtn0").click(function() 
{ 

$("#d0").toggle(); 

}); 

}); 


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 


$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//previous page 
function southAfrica(){
open("https://salmandascript.github.io/SouthAfrica/SouthAfrica.html");
}

//previous page 
function sudan(){
open("https://salmandascript.github.io/Sudan/Sudan.html");
}

//quizz questions code 
function checkAnswer()
  {
   var totQuestion = 2;

   var ansQuestion = 0;

   var rightAns = 0;

   for (var i = 1; i <= totQuestion; i++)
   {
    var elem = document.getElementsByName("q" + i);

    for (var j = 0; j < elem.length; j++)
    {
     if (elem[j].checked)
     {

      ansQuestion++;

      if (elem[j].dataset.answer == 1)
      {
       rightAns++;
      }

     }
    }
   }

   if (ansQuestion != totQuestion)
   {
    alert("Please answer all questions");
   }
   else
   {
    alert("Your Score is " + rightAns + " Out Of " + totQuestion);
   }
  }
  //quizz question code end 
  