import { CardComponent } from './card.component';

describe('ListComponent', () => {
  let component: CardComponent;

  beforeEach(() => {
    component = new CardComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
