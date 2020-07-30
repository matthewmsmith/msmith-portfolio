
 let $search = $('#search');
 let photoCaption = [];
 let $a = $('a');


 // caption appended to photoCaption array
 $a.each(function () {
   let caption = $(this).attr('data-title').toLowerCase();
   photoCaption.push(caption);
 
 })


 $search.keyup(function () {
     let entered = $(this).val().toLowerCase();
     for(let i = 0; i< photoCaption.length; i ++) {

         if(photoCaption[i].indexOf(entered) < 0) {
            $a.eq(i).hide();
         } else {
           $a.eq(i).show();
         }
        
     }
 })