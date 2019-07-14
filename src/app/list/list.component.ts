import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  types = {
    selected: "selected",
    unselected: "unselected",
  };

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321',
      img: "assets/bill.jpg"
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903',
      img: "assets/ellen.jpg"
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384',
      img: "assets/keanu.jpg"
    }
  ];

  constructor() {
    let selected = localStorage.getItem("selectedProviders");
    this.selectedProviders = selected !== null ? JSON.parse(selected) : this.selectedProviders;

    let unselected = localStorage.getItem("unSelectedProviders");
    this.unselectedProviders = unselected !== null ? JSON.parse(unselected) : this.unselectedProviders;

    localStorage.setItem("unSelectedProviders", JSON.stringify(this.unselectedProviders));
    localStorage.setItem("selectedProviders", JSON.stringify(this.selectedProviders));
  }

  unSelectProvider(providerObj){
    this.selectedProviders = this.selectedProviders.filter((provider)=>{
      return provider.id !== providerObj.id;
    });
    this.unselectedProviders.push(providerObj);
    this.updateStorage()
  }

  selectProvider(providerObj){
    this.unselectedProviders = this.unselectedProviders.filter((provider)=>{
      return provider.id !== providerObj.id;
    });
    this.selectedProviders.push(providerObj);
    this.updateStorage()
  }
  
  updateStorage(){
    localStorage.setItem("unSelectedProviders", JSON.stringify(this.unselectedProviders));
    localStorage.setItem("selectedProviders", JSON.stringify(this.selectedProviders));
  }
}
