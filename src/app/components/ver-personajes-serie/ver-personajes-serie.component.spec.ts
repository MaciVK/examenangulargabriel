import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPersonajesSerieComponent } from './ver-personajes-serie.component';

describe('VerPersonajesSerieComponent', () => {
  let component: VerPersonajesSerieComponent;
  let fixture: ComponentFixture<VerPersonajesSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPersonajesSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPersonajesSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
