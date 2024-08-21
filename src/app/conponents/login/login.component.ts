import { Component } from '@angular/core';
import { AppService } from '../../service/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  LoginF : FormGroup = new FormGroup({
    userName : new FormControl('',Validators.required),
    passWord : new FormControl('',Validators.required)
  });

  constructor(private app:AppService){}
 
  onLogin():void{
   this.app.Login(this.LoginF.value).subscribe(res => { 
  if (res.code == 400) {
    Swal.fire({
      title: "Cảnh báo",
      text: "Tài khoản hoặc mật khẩu không đúng",
      icon: "warning"
    });
    this.LoginF.reset()
  } else if (res.code == 401) {
    Swal.fire({
        title: "Nguy Hiểm",
        text: "Tài khoản đang bị khóa",
        icon: "warning"
      });
      this.LoginF.reset()
  } else {
    let jsondata = JSON.stringify(res);
    sessionStorage.setItem('Login',jsondata);
 
    sessionStorage.setItem('token',res.token);
    const returnPath = sessionStorage.getItem('currentPath')
    if(returnPath){
      location.assign(returnPath)
      sessionStorage.removeItem('currentPath')
      this.LoginF.reset()
    }
    else {
      location.assign("http://localhost:55326");
      this.LoginF.reset()
    }
  }
});
    }
    
  }
