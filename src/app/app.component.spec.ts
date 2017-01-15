import { TestBed, async } from '@angular/core/testing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture, component, element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Resume'`, async(() => {
    expect(component.title).toEqual('Resume');
  }));

  it('should render title in tag with id #ac-title', async(() => {
    expect(element.querySelector('#ac-title').textContent).toEqual('Resume');
  }));

  it('should render name in tag with id #ac-name', async(() => {
    expect(element.querySelector('#ac-name').textContent).toEqual('Attila Csányi');
  }));
});
