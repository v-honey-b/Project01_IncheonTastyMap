function change(){
    let password = document.getElementById('password').value;
    let passcheck = document.getElementById('passcheck').value;
    let email = document.getElementById('email').value;
    let check =true;
    let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    let emails = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(password !== passcheck){
        document.getElementById('pass').innerHTML='';
        document.getElementById('pass_check').innerHTML='*비밀번호가 일치하지 않습니다.';
        check= false;
    }else{
        document.getElementById('pass').innerHTML='';
        document.getElementById('pass_check').innerHTML='';
    }
    if(!regPass.test(password)|| password.length < 8){
        document.getElementById('pass').innerHTML='*비밀번호는 문자 숫자 특수문자를 사용한 8~25자리 이상 입력바랍니다.';
        check=false;
    }
    if(password === ""){
        document.getElementById('pass').innerHTML='*비밀번호를 입력해주세요.';
        check = false;
    }
    if(passcheck === ""){
        document.getElementById('pass_check').innerHTML='*비밀번호를 한번더 입력해주세요';
        check = false;
    }
    if(email ===""){
        document.getElementById('mail').innerHTML='*이메일을 입력해주세요';
        check = false;
    }       
    if(!emails.test(email)){
        document.getElementById('mail').innerHTML='*이메일 형식이 올바르지 않습니다.';
    }else{
        document.getElementById('mail').innerHTML='';
    }
    if(check){
        document.getElementById('pass').innerHTML='';
        document.getElementById('pass_check').innerHTML='';
        document.getElementById('mail').innerHTML='';
        setTimeout(function(){
            alert('수정되었습니다.');
            location.replace('J:/이희장/연습/팀 프로젝트/myinfo.html');
        });
    }

    
}
function loadImg(){
    let loadimg = document.getElementById('imgupload'); // 인풋 파일에 등록된 값을 변수에 저장
    // 인풋 파일에 파일 있는 경우
    if(loadimg.files && loadimg.files[0]){
        //fileReader 인스턴스 생성
        const reader = new FileReader();
        //이미지가 업로드 된 경우
        reader.onload = e =>{
            const priviewImg = document.getElementById('img'); // 출력하여 보여줄 이미지태그
            priviewImg.src = e.target.result;
        }
        reader.readAsDataURL(loadimg.files[0]);
    }
}
const inputImg = document.getElementById('imgupload');
    inputImg.addEventListener('change',e =>{
        loadImg(e.target);
});