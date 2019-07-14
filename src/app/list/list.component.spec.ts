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

  describe('selectProvider',()=>{
    it('should update arrays when called, Jason should be in selectedProviders', ()=>{
      component.selectProvider(mockProviderObj);
      expect(component.selectedProviders).toEqual(mockUpdateSelected);
      expect(component.unselectedProviders).toEqual(mockUpdateUnSelected);
    });
    it('should call updateStorage when finished',()=>{
      spyOn(component, 'updateStorage');
      component.selectProvider(mockProviderObj);
      expect(component.updateStorage).toHaveBeenCalled();
    })
  });

  describe('unselectProvider', ()=>{
    it('should update arrays when called, selectedProviders should be empty', ()=>{
      component.unSelectProvider(mockProviderObj);
      expect(component.selectedProviders).toEqual(mockSelectedArray);
      expect(component.unselectedProviders).toEqual(mockUnselectedArray);
    })
    it('should call updateStorage when finished',()=>{
      spyOn(component, 'updateStorage');
      component.unSelectProvider(mockProviderObj);
      expect(component.updateStorage).toHaveBeenCalled();
    })
  });

  describe('updateStorage', ()=>{
    it('should call local storage set item when invoked', ()=>{
      spyOn(localStorage, 'setItem');
      component.updateStorage();
      expect(localStorage.setItem).toHaveBeenCalled();
    })
  })
});
