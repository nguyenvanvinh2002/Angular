import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 isLogin:any
 URL: string = 'https://localhost:7025/img/';
userName:any;
profileusername:any=[];

hoVaTenF :  FormGroup = new FormGroup({
  hovaTen: new FormControl('')
});
sodienthoaiF: FormGroup = new FormGroup({
  soDienThoai : new FormControl('')
})
emailF : FormGroup = new FormGroup({
  email : new FormControl('')
})
diaChiF : FormGroup = new FormGroup({
  diaChi : new FormControl('')
})

  constructor(private app:AppService,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
   this.isLogin = this.app.CheckLogin()
   this.activeRouter.paramMap.subscribe(query=>{
    this.userName = query.get('userName')
    this.app.userbyname(this.userName).subscribe(res=>{
     this.profileusername = res;
    
    })
  })

 
  }
  Logout(){
    sessionStorage.clear();
    location.assign("http://localhost:4200/Login")
   }
   hovaten(){
    if(this.userName){
      this.app.updateprofile(this.userName,this.hoVaTenF.value).subscribe(res=>{
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thành công",
          icon: "success"
        });
        this.app.userbyname(this.userName).subscribe(res=>{
          this.profileusername = res;
         sessionStorage.setItem('Login',JSON.stringify(this.profileusername))
         })
       })
    }
   }
   sodienthoai(){
    if(this.userName){
      this.app.updateprofile(this.userName,this.sodienthoaiF.value).subscribe(res=>{
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thành công",
          icon: "success"
        });
        this.app.userbyname(this.userName).subscribe(res=>{
          this.profileusername = res;
         sessionStorage.setItem('Login',JSON.stringify(this.profileusername))
         })
      })
    }
  }
  email(){
    if(this.userName){
      this.app.updateprofile(this.userName,this.emailF.value).subscribe(res=>{
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thành công",
          icon: "success"
        });
        this.app.userbyname(this.userName).subscribe(res=>{
          this.profileusername = res;
         sessionStorage.setItem('Login',JSON.stringify(this.profileusername))
         })
      })
    }
  }
  diaChi(){
    if(this.userName){
      this.app.updateprofile(this.userName,this.diaChiF.value).subscribe(res=>{
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thành công",
          icon: "success"
        });
        this.app.userbyname(this.userName).subscribe(res=>{
          this.profileusername = res;
         sessionStorage.setItem('Login',JSON.stringify(this.profileusername))
         })
      })
    }
  }
  
}
