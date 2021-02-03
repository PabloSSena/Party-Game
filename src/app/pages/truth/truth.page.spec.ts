import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TruthPage } from './truth.page';

describe('TruthPage', () => {
  let component: TruthPage;
  let fixture: ComponentFixture<TruthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TruthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
