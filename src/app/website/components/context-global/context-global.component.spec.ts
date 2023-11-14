import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextGlobalComponent } from './context-global.component';

describe('ContextGlobalComponent', () => {
  let component: ContextGlobalComponent;
  let fixture: ComponentFixture<ContextGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
