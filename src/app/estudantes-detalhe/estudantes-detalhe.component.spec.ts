import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantesDetalheComponent } from './estudantes-detalhe.component';

describe('EstudantesDetalheComponent', () => {
  let component: EstudantesDetalheComponent;
  let fixture: ComponentFixture<EstudantesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudantesDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudantesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
