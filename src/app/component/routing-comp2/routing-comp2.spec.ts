import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComp2 } from './routing-comp2';

describe('RoutingComp2', () => {
  let component: RoutingComp2;
  let fixture: ComponentFixture<RoutingComp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingComp2],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingComp2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
