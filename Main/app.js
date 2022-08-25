
    function stopalarm(){
    var zudio = document.querySelector("audio");
    zudio.remove();   
}
          // Function to generate random number
           function randomNumber(min, max) {
               return Math.floor(Math.random() * (max - min) + min);
          }

          // Function call
      var random1= randomNumber(1, 100);
      var h2 = document.getElementById('jstext');
      h2.append( random1 );
      var add = h2.append(' + ');
       

          // Function to generate random number
         // function randomNumber(min, max) {
             //  return Math.floor(Math.random() * (max - min) + min);
         // }
          
          // Function call
      var random2=randomNumber(1, 100); h2.append( random2 );
       var isequalto = h2.append(" = ?");
       var submitBtn = document.getElementById('submitbtn')
       function correction()
       {
          var ans = document.getElementById("answer").value;
          
          if(random1+random2 == ans)
               alert("correct"), // add a , instead of ;
               stopalarm();// #UnCommentItLater
          else
               alert("sorry");

       }
submitBtn.addEventListener('click', correction)
// Experiment
// stopalarm();          
       
          