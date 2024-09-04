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
  danhMuc: any;
  danhMucs: any;
  loadding: any
  lstproducts: any;
  p: number = 1
  URL: string = 'https://localhost:7025/img/'
  constructor(private activedRouter: ActivatedRoute, private app: AppService) { }
  ngOnInit(): void {
    this.loadding = true
    this.activedRouter.paramMap.subscribe(query => {
      this.danhMuc = query.get("danhMuc");
      this.app.categoriesbydanhmuc(this.danhMuc).subscribe(res => {
        this.danhMucs = res
      })
        this.app.lstproductsbydanhmuc(this.danhMuc).subscribe(res => {
        setTimeout(() => {
          this.danhMuc = res
          this.loadding = false
        }, 1000);
        })
    })
  }
}
