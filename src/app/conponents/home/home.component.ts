import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dataproducts:any=[];
  lstcategories:any=[];


  constructor(private app:AppService){}
  ngOnInit(): void {
    this.app.lstproducts().subscribe(res=>{
      this.dataproducts = res
    })
    this.app.lstcategories().subscribe(res=>{
      this.lstcategories = res
     
    })
    
   
  }
 
   
  
}
