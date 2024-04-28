import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresListComponent } from './actores-list.component';

describe('ActoresListComponent', () => {
  let component: ActoresListComponent;
  let fixture: ComponentFixture<ActoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActoresListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
