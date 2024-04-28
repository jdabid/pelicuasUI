import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListComponent } from './peliculas-list.component';

describe('PeliculasListComponent', () => {
  let component: PeliculasListComponent;
  let fixture: ComponentFixture<PeliculasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
