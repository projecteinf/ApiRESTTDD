import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { provideRouter, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { routes } from '../app.routes';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes),RouterLink],
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
    expect(compiled.querySelector('h1')?.textContent).toContain('Request API Example');
  });

  it('Has menu with option Register', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router : Router = TestBed.inject(Router);
    
    
    fixture.detectChanges();
    router.initialNavigation();

    const registerOptions:DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
    const link:HTMLAnchorElement = registerOptions[0].nativeElement as HTMLAnchorElement;
    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/register');
    
    
  });
});
