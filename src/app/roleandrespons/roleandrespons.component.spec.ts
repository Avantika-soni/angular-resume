import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleandresponsComponent } from './roleandrespons.component';

describe('RoleandresponsComponent', () => {
  let component: RoleandresponsComponent;
  let fixture: ComponentFixture<RoleandresponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleandresponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleandresponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
