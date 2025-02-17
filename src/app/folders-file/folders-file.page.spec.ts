import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoldersFilePage } from './folders-file.page';

describe('FoldersFilePage', () => {
  let component: FoldersFilePage;
  let fixture: ComponentFixture<FoldersFilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
