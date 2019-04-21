import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilterComponent } from './searchfilter.component';

describe('SearchfilterComponent', () => {
  let component: SearchfilterComponent;
  let fixture: ComponentFixture<SearchfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
