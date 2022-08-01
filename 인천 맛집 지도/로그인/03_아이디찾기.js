function ch(){
    let name= document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let check = true;
    let emails = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if(name===""){
        document.getElementById('namecheck').innerHTML='*이름을 입력해주세요';
        check= false;
    }else{
        document.getElementById('namecheck').innerHTML='';
    }

    if(email===""){
        document.getElementById('emailcheck').innerHTML='*이메일을 입력해주세요';
        check= false;
    }else{
        document.getElementById('emailcheck').innerHTML='';
    }

    if(!emails.test(email)){
        document.getElementById('emailcheck').innerHTML='이메일이 잘못되었습니다.'
        check = false;
    }else{
        document.getElementById('emailcheck').innerHTML='';
    }

    if(check){
        document.getElementById('namecheck').innerHTML='';
        document.getElementById('emailcheck').innerHTML='';
        setTimeout(function(){
            alert('완료되었습니다.');
        })
    }else{
        alert('잘못입력된 정보가 있습니다.')
    }
}