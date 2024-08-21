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
    userName : new FormControl('',Validators.required),
    passWord : new FormControl('',Validators.required),
    diaChi : new FormControl('',Validators.required),
    soDienThoai : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    hoVaTen:new FormControl('',Validators.required),
    gioiTinh:new FormControl('Nam',Validators.required)
  });
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
