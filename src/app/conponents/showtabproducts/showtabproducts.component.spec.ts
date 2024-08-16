import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtabproductsComponent } from './showtabproducts.component';

describe('ShowtabproductsComponent', () => {
  let component: ShowtabproductsComponent;
  let fixture: ComponentFixture<ShowtabproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowtabproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtabproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
