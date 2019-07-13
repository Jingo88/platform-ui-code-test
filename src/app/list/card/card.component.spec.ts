import { CardComponent } from './card.component';

describe('ListComponent', () => {
  let component: CardComponent;

  beforeEach(() => {
    component = new CardComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggle select when click', (done)=>{
    spyOn(component.toggleSelect, 'emit');
    component.emitToggleSelect();
    expect(component.toggleSelect.emit).toHaveBeenCalled();
  })
});
