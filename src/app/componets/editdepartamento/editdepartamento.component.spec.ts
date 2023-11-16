import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepartamentoComponent } from './editdepartamento.component';

describe('EditdepartamentoComponent', () => {
  let component: EditdepartamentoComponent;
  let fixture: ComponentFixture<EditdepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdepartamentoComponent]
    });
    fixture = TestBed.createComponent(EditdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
