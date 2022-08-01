function pwcheck(){
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let email = document.getElementById('mail');
    let emails = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    let check = true;
    
    if(id.value === ""){
        document.getElementById('id_check').innerHTML='*아이디를 입력해주세요.';
        check = false;    
    }else{
        document.getElementById('id_check').innerHTML='';
    }
    
    if(name.value === ""){
        document.getElementById('name_check').innerHTML='*이름을 입력해주세요.';
        check = false; 
    }else{
        document.getElementById('name_check').innerHTML='';
    }
    
    if(email.value === ""){
         document.getElementById('email_check').innerHTML='*이메일을 입력해주세요.';
         check = false;
    }else{
         document.getElementById('email_check').innerHTML='';
    }
    
    if(!emails.test(email.value)){
         document.getElementById('email_check').innerHTML='*이메일이 잘못되었습니다.';
         check = false;
    }else{
         document.getElementById('email_check').innerHTML='';
    }
    
    if(check){
        document.getElementById('id_check').innerHTML='';
        document.getElementById('name_check').innerHTML='';
        document.getElementById('email_check').innerHTML='';
        setTimeout(function(){
            alert('완료되었습니다.')
        })
    }else{
        alert('잘못입력된 정보가 있습니다.')
    }
}