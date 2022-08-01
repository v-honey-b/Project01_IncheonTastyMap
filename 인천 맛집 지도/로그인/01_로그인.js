function loginCheck() {
    let loginForm = document.loginForm;
    let id = document.getElementById('id').value;
    let pw = document.getElementById('pass').value;

    if(id == "") {
        alert("아이디를 입력해주세요");
    }else if(pw == "") {
        alert("비밀번호를 입력해주세요");
    }else{
        loginForm.submit();
    }    
}