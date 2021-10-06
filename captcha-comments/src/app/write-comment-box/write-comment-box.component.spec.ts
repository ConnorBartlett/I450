import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCommentBoxComponent } from './write-comment-box.component';

describe('WriteCommentBoxComponent', () => {
  let component: WriteCommentBoxComponent;
  let fixture: ComponentFixture<WriteCommentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteCommentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
