import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  RegisterF:FormGroup = new FormGroup({
    userName : new FormControl('',[Validators.required,Validators.minLength(5)]),
    passWord : new FormControl('',[Validators.required,Validators.minLength(5)]),
    diaChi : new FormControl('',[Validators.required,Validators.minLength(20)]),
    soDienThoai : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    hoVaTen:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
    gioiTinh:new FormControl('Nam',Validators.required)
  });
  get f(){
    return this.RegisterF.controls
   }
  constructor(private app:AppService){}
  ngOnInit(): void {
    
  }
  onRegister():void{
    
    this.app.Register(this.RegisterF.value).subscribe(res=>{
      if (res.code == 400) {
        Swal.fire({
          title: "Cảnh báo",
          text: "Không được để trống",
          icon: "error"
        });
      }
      else if (res.code == 401) {
        Swal.fire({
            title: "Cảnh báo",
            text: "Tài khoản đã tồn tại",
            icon: "warning"
          });
      }
      else{
        
        Swal.fire({
          title: "Thành công",
          text: "Đăng Kí Thành công",
          icon: "success"
        });
        this.RegisterF.reset()
       
      }
    })
  }
}
