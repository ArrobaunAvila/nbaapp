import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextAppComponent } from './context-app.component';

describe('ContextAppComponent', () => {
  let component: ContextAppComponent;
  let fixture: ComponentFixture<ContextAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
