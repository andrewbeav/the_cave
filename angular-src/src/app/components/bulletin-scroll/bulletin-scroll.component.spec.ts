import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinScrollComponent } from './bulletin-scroll.component';

describe('BulletinScrollComponent', () => {
  let component: BulletinScrollComponent;
  let fixture: ComponentFixture<BulletinScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
