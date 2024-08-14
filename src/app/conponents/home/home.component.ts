import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper/types';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dataproducts:any=[];
  lstcategories:any=[];
  products:any;
  id:any;
  URL:string='https://localhost:7025/img/'
  public breakpoints: number = 5;
  public bannerpoint:number = 3

  constructor(private app:AppService,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
   
      this.app.lstproducts().subscribe(res=>{
        this.dataproducts = res
      })
    
    
    this.app.lstcategories().subscribe(res=>{
      this.lstcategories = res
     
    })
    this.activeRouter.paramMap.subscribe(query=>{
      this.id=query.get("id");
    this.app.lstproductsbyId(this.id).subscribe(res=>{
      this.products = res
    });
    
  })
  if (window.innerWidth < 960) {
    this.breakpoints = 3;
    this.bannerpoint = 2
  }
  if (window.innerWidth < 720) {
    this.breakpoints = 2;
    this.bannerpoint = 1
  }
  if (window.innerWidth < 540) {
    this.breakpoints = 2;
    this.bannerpoint = 1;
  }
  }
}
