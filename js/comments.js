function modalClose(){
    if( document.querySelector('.js-modal-close')){
        document.querySelector('.js-modal-close').addEventListener('click',()=>{
            document.querySelector('.js-modal-overlay').classList.remove('active')
        })
    }
}

function modalShow(){
    modalClose();
    document.querySelector('.js-modal-overlay').classList.add('active');
    document.querySelector('.js-modal-content').classList.add('active');
}
/*وقتی که چند مودال در صفحه تعریف شده است و میخواهیم با دکمه بستن، پنجره مودال بسته شود*/

/*comments section*/
function getLeaveComment(){
     document.querySelectorAll('form.js-comment-form').forEach(function(commentForm){
         commentForm.addEventListener('submit',function(form){
             form.preventDefault();
             modalShow()
         })
     })
 }
 function validateText(parent){
     parent.querySelectorAll('input[type="text"]').forEach(function(text){
         text.validity;
         if(text.validity.valueMissing){
             text.setCustomValidity('این فیلد را پر کنید');
         }
         else {
             text.setCustomValidity('');
         }
     })
 }
 function validateTextArea(parent){
     parent.querySelectorAll('textarea').forEach(function(textbox){
 
         if (textbox.value==''){
             textbox.setCustomValidity('لطفا نظر خود را بنویسید')
         }
         else {
             textbox.setCustomValidity('')
         }
     })
 
 }
 function commentValidateEmail(input){
     input.validity;
     if (input.validity.valueMissing)
     {
         input.setCustomValidity('این فیلد را پر کنید');
     }
     if(input.validity.typeMismatch) {
         input.setCustomValidity('فرمت ایمیل صحیح نیست');
     }
     else{
         input.setCustomValidity('');
     }
 }
 
 function validateCommentForm(){
     document.querySelectorAll('.js-comment-form').forEach(function(form){
         form.addEventListener('click',function (e){
             validateText(e.currentTarget);
             validateTextArea(e.currentTarget)
             commentValidateEmail(e.currentTarget.querySelector('input[type="email"]'))
         })
     })
 }
 function validationPassLength(password){
     if(password.value.length<6){
         password.setCustomValidity("رمز عبور باید حداقل شامل 6 کاراکتر باشد");
     }
     else {
         password.setCustomValidity('');
     }
 }
 let newdive=document.createElement('div');
 function addCommentSection(elem){
     var parentElem= elem.parentNode.parentNode;
     if(!parentElem.querySelector(".new-comment-reply-container")){
         parentElem.appendChild(newdive).setAttribute('class','new-comment-reply-container');
         getLeaveComment();
         validateCommentForm();
     }
     else{
         parentElem.querySelector(".new-comment-reply-container").remove();
     }
 }
 if(document.querySelector('.js-post-comments')){
     let commentElem=document.querySelector(".post-new-comment");
 
     newdive.innerHTML=commentElem.innerHTML;
    document.querySelectorAll('.js-reply-btn').forEach((replyBtn)=>{
        replyBtn.addEventListener('click',(replyBtn)=>{ addCommentSection(replyBtn.target)})
 
    })
 
     getLeaveComment();
 }
 if(document.querySelector('.js-comment-form')){
    validateCommentForm()
}