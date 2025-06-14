import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosComponent } from './estilos.component';

describe('EstilosComponent', () => {
  let component: EstilosComponent;
  let fixture: ComponentFixture<EstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstilosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
