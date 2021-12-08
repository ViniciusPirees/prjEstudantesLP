import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantesSearchComponent } from './estudantes-search.component';

describe('EstudantesSearchComponent', () => {
  let component: EstudantesSearchComponent;
  let fixture: ComponentFixture<EstudantesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudantesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudantesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
