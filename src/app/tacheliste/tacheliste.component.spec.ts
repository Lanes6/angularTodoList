import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachelisteComponent } from './tacheliste.component';

describe('TachelisteComponent', () => {
  let component: TachelisteComponent;
  let fixture: ComponentFixture<TachelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
