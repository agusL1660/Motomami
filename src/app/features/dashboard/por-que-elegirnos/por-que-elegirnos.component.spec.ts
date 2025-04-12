import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorQueElegirnosComponent } from './por-que-elegirnos.component';

describe('PorQueElegirnosComponent', () => {
  let component: PorQueElegirnosComponent;
  let fixture: ComponentFixture<PorQueElegirnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorQueElegirnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorQueElegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
