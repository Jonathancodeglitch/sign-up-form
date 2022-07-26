let btn=document.querySelector('button');
let password=document.querySelector(".pass1");
let recoveryPassword=document.querySelector(".pass2");
let error=document.querySelector(".error");
let content1=password.textContent
let content2=recoveryPassword.textContent

btn.addEventListener('click',(e)=>{
  e.preventDefault
    if(password.value===recoveryPassword.value){
        alert('created successfully');
    }else{
      console.log(password,recoveryPassword)
      password.value='';
      recoveryPassword.value='';
        password.style.border = "1px solid red"
        recoveryPassword.style.border = "1px solid red"
       error.textContent='* password do not match'
    }
  
})