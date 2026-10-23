import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabindingComp1 } from './databinding-comp1';

describe('DatabindingComp1', () => {
  let component: DatabindingComp1;
  let fixture: ComponentFixture<DatabindingComp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingComp1],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabindingComp1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
