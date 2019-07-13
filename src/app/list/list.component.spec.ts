import { ListComponent } from './list.component';
import { 
  mockProviderObj, 
  mockSelectedArray, 
  mockUnselectedArray, 
  mockUpdateSelected, 
  mockUpdateUnSelected,
} from './list.component.mock';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('toggleSelect',()=>{
    it('should call update provider when toggle is invoked', ()=>{
      spyOn(component, 'updateProvider');
      component.toggleSelect(mockProviderObj);
      expect(component.updateProvider).toHaveBeenCalledWith(mockProviderObj, mockUnselectedArray, mockSelectedArray);
    })
  });

  describe('updateProvider', ()=>{

    it('should update the provider arrays', ()=>{
      component.updateProvider(mockProviderObj, mockUnselectedArray, mockSelectedArray);
      expect(component.selectedProviders).toEqual(mockUpdateSelected);
      expect(component.unselectedProviders).toEqual(mockUpdateUnSelected);
    })

    it('should call localStorage set item',()=>{
      spyOn(localStorage, 'setItem');
      component.updateProvider(mockProviderObj, mockUnselectedArray, mockSelectedArray);
      expect(localStorage.setItem).toHaveBeenCalled();
    })
  })
});
