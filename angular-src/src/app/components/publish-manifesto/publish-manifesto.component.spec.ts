import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishManifestoComponent } from './publish-manifesto.component';

describe('PublishManifestoComponent', () => {
  let component: PublishManifestoComponent;
  let fixture: ComponentFixture<PublishManifestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishManifestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
