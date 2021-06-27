// CHUẨN BỊ ĐỂ RENDER TRANG LOG VÀ REGISTER
function insertForm(item){
      let heading = item.heading;
      let log = item.log;
      let register = item.register;
      let functionName = item.functionName;
      let btnName = item.btnName;

    document.getElementById("app").innerHTML=`
    <div class="login-form pading-lf-20">
    <h2 class="heading pading-tb-20 text-center">`+heading+`</h2>
    <div id="short-btn" class="col">
      <a href="#" id="login-btn" onclick="changeToLogForm()" class="btn white-color background-image pading-tb-10 col-half text-center ">Login</a>
      <a href="#" id="register-btn" onclick="changeToRegisterForm()" class="border-color pading-tb-10 col-half text-center ">Signup</a>
    </div>
    <div class="margin-t-25">
      <input id="mail" class="border-color col-full pading-tb-10 pading-lf-20" name="mail" type="mail" placeholder="Email Address" />
      <input id="password" class="border-color col-full pading-tb-10 pading-lf-20 margin-t-20" name="password" type="password" placeholder="Password" />
      <input style="display: `+register+`" id="confirm-password" class="border-color col-full pading-tb-10 pading-lf-20 margin-t-20" name="password" type="password" placeholder="Confirm Password" />
      </div>    
    <div style="display: `+log+`" class="pink-color">Forgot password?</div>
    <div id="big-btn" onclick="`+functionName+`()" class="btn col-full pading-tb-10 margin-t-20 text-center background-image">`+btnName+`</div>
    <div style="display: `+log+`" class="text-center black-color margin-t-20">
      Not a member?
      <a onclick="changeToRegisterForm()" class="pink-color" href="#">Signup now</a>
    </div>
  </div>
`
  }

// MẢNG DỮ LIỆU LOG VÀ REGISTER

  logForm=[
    {
    heading:'Login Form',
    log: 'block',
    register: 'none',
    functionName: 'logIn',
    btnName: 'Login',
   }
]

    registerForm=[
    {
    heading:'Registration Form',
    log: 'none',
    register: 'block',
    functionName: 'registration',
    btnName: 'Register',
    }
]

for(item of logForm){
    insertForm(item);
}

// CHUYỂN SANG TRANG REGISTER

let registerBtn = document.getElementById("register-btn");

//!!!!!!! Tai sao dung addEventListener lại không thể sử dụng đổi nội dung qua lại liên tục mà chỉ thực hiện được 1 lần

let loginBtn = document.getElementById("login-btn");
  
loginBtn.classList.add("border-color");
  function changeToRegisterForm(){
    for(item of registerForm){
        insertForm(item);
      }
    document.getElementById("short-btn").innerHTML=`
    <a href="#" id="login-btn" onclick="changeToLogForm()" class="border-color pading-tb-10 col-half text-center ">Login</a>
    <a href="#" id="register-btn" onclick="changeToRegisterForm()" class="btn white-color background-image pading-tb-10 col-half text-center ">Signup</a>
    `
  }

  // CHUYỂN SANG TRANG LOGIN

  function changeToLogForm(){
    for(item of logForm){
        insertForm(item);
      }
    document.getElementById("short-btn").innerHTML=`
    <a href="#" id="login-btn" onclick="changeToLogForm()" class="btn white-color background-image pading-tb-10 col-half text-center ">Login</a>
    <a href="#" id="register-btn" onclick="changeToRegisterForm()" class="border-color pading-tb-10 col-half text-center ">Signup</a>
  `
  }

// FUNCTION ĐĂNG KÝ
// document.getElementById().value chỉ sử dụng được phạm vi bên trong hàm phải không?
let registerList = [];
let count = registerList.length;
function registration(){
    let registerMail = document.getElementById("mail").value;
    let registerPassword = document.getElementById("password").value;
    let registerConfPassword = document.getElementById("confirm-password").value;    
    if(registerMail&&registerPassword&&registerConfPassword){
        if(registerPassword==registerConfPassword){
            registerList[count]=[registerMail, registerPassword];
            alert("Bạn đã đăng ký thành công");
            count++;
            console.log(registerList);
        }else{
            alert("Mật khẩu không trùng khớp");
        }
         
    }else{
        alert("Mời nhập lại");
    }
}

// FUNCTION ĐĂNG NHẬP

let logInf = [];
function logIn(){
let logMail = document.getElementById("mail").value;
let logPassword = document.getElementById("password").value;
if(logMail&&logPassword){
    logInf = [logMail,logPassword];
    if(registerList.includes(logInf)){
        alert("Bạn đã đăng ký thành công");
    }else{
        alert("Mật khẩu không trùng khớp");
    }
}
}
// !!!!LÀM THỂ NÀO ĐỂ KIỂM TRA MẢNG CÓ TRONG MẢNG HAY KHÔNG?
// !!!!LÀM THỂ NÀO ĐỂ XÓA TRANG MỞ LẠI VẪN CÓ THỂ SỬ DỤNG ĐĂNG NHẬP ĐƯỢC?