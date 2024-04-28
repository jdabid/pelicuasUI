import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEditComponent } from './peliculas-edit.component';

describe('PeliculasEditComponent', () => {
  let component: PeliculasEditComponent;
  let fixture: ComponentFixture<PeliculasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
