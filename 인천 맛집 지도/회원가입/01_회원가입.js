function check(){
    let name = document.getElementById('name').value;
    let uid = document.getElementById('uid').value;
    let password = document.getElementById('password').value;
    let passcheck = document.getElementById('passcheck').value;
    let email = document.getElementById('email').value;
    let check = true;   
    let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; 
    let emails = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    // 이름확인
    if(name === ""){
        document.getElementById('nameError').innerHTML='*이름이 옳바르지 않습니다.'
        check = false;
    }else{
        document.getElementById('nameError').innerHTML='';
    }
    
    // 아이디확인
    if(uid === ""){
        document.getElementById('idError').innerHTML='*아이디를 입력해주세요.'
        check = false;
    }else{
        document.getElementById('idError').innerHTML='';
    }
    
    //비밀번호 일치 여부
    if(password !== passcheck ){
        document.getElementById('passError').innerHTML='';
        document.getElementById('pacheckError').innerHTML='*비밀번호가 일치하지 않습니다.'
        check = false;
    }else{
        document.getElementById('passError').innerHTML='';
        document.getElementById('pacheckError').innerHTML='';
    }
    
    //비밀번호 확인
    if(!regPass.test(password) || password<8) document.getElementById('passError').innerHTML='*영문,숫자,특수문자 조합 8~20자리 아상 입력가능합니다.';
    if(password ===""){
        document.getElementById('passError').innerHTML='*비밀번호를 입력해주세요.'
        check = false;
    }else{
        // document.getElementById('passError').innerHTML='';
    }
    
    //비밀번호 재입력
    if(passcheck ===""){
        document.getElementById('pacheckError').innerHTML='*비밀번호를 한번 더 입력해주세요.'
        check = false;
    }else{
        // document.getElementById('pacheckError').innerHTML='';
    }
    
    //이메일 확인
    if(email === ""){
        document.getElementById('emailError').innerHTML='*이메일을 입력해주세요'
    }
    if(!emails.test(email)){
        document.getElementById('emailError').innerHTML='*이메일이 올바르지 않습니다.';
         check = false;
    }else{
        document.getElementById('emailError').innerHTML="";
    }
    
    if(check == true){
        document.getElementById('nameError').innerHTML='';
        document.getElementById('idError').innerHTML='';
        document.getElementById('passError').innerHTML='';
        document.getElementById('pacheckError').innerHTML='';
        document.getElementById('emailError').innerHTML='';
        setTimeout(function(){
            alert('회원가입이 완료되었습니다.');
            location.replace('J:/이희장/연습/팀 프로젝트/02_Index.html');
        },0);
    }

}
function eng(event){
    const eng = /[^0-9a-zA-Z]/g;
    const ele = event.target;
    if(eng.test(ele.value)){
        ele.value = ele.value.replace(eng,'');
        document.getElementById('idError').innerHTML='*영문 숫자만 입력가능합니다.'
    }
};