import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTextEditorComponent } from './suku-text-editor.component';

describe('SukuTextEditorComponent', () => {
  let component: SukuTextEditorComponent;
  let fixture: ComponentFixture<SukuTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
