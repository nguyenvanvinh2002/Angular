import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../service/app.service';
import { query } from 'express';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit {
  danhMuc:any;
  danhMucs:any;
  lstproducts:any;
  URL:string='https://localhost:7025/img/'
constructor(private activedRouter: ActivatedRoute,private app:AppService){}
  ngOnInit(): void {
    
    this.activedRouter.paramMap.subscribe(query=>{
    this.danhMuc=query.get("danhMuc");
    this.app.lstproductsbydanhmuc(this.danhMuc).subscribe(res=>{
     this.danhMuc = res
    })
   })
   this.app.categoriesbydanhmuc(this.danhMuc).subscribe(res=>{
    this.danhMucs = res
  })
    
  
  }
 
}
