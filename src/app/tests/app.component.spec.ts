import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../app.routes';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'apiTDD' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('apiTDD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, apiTDD');
  });

  it('Has menu with option Register', () => {
    const router : Router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(AppComponent);
    const routerSpy = spyOn(router,"navigate");

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const registerOption:HTMLLinkElement = compiled.querySelector('nav ul li:first-child a') as HTMLLinkElement;
    
    registerOption.click();
    fixture.detectChanges();
    expect(routerSpy).toHaveBeenCalledOnceWith(['/register']);
  });
});
