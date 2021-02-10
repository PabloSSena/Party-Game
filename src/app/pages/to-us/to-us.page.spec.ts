import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToUsPage } from './to-us.page';

describe('ToUsPage', () => {
  let component: ToUsPage;
  let fixture: ComponentFixture<ToUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
