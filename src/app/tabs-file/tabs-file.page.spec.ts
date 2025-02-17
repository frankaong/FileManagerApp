import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsFilePage } from './tabs-file.page';

describe('TabsFilePage', () => {
  let component: TabsFilePage;
  let fixture: ComponentFixture<TabsFilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
