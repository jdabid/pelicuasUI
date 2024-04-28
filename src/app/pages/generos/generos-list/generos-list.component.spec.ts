import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosListComponent } from './generos-list.component';

describe('GenerosListComponent', () => {
  let component: GenerosListComponent;
  let fixture: ComponentFixture<GenerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
