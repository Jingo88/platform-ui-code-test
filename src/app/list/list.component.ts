import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

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
  }

  ngOnInit() {
    localStorage.setItem("unSelectedProviders", JSON.stringify(this.unselectedProviders));
    localStorage.setItem("selectedProviders", JSON.stringify(this.selectedProviders));
  }

  toggleSelect(providerObj){
    if (providerObj.type === this.types.unselected){
      this.updateProvider(providerObj, this.unselectedProviders, this.selectedProviders);
    } else if (providerObj.type === this.types.selected){
      this.updateProvider(providerObj, this.selectedProviders, this.unselectedProviders);
    }
  }

  updateProvider(providerObj, filterArr, pushArr){
    const {id, name, address, phone, img, type} = providerObj;
    const {selected, unselected} = this.types;

    filterArr = filterArr.filter((provider)=>{
      return provider.id !== providerObj.id;
    });
    pushArr.push({
      id,
      name,
      address,
      phone,
      img
    });
    if (type === unselected){
      this.unselectedProviders = [...filterArr];
      this.selectedProviders = [...pushArr];
      localStorage.setItem("unSelectedProviders", JSON.stringify(filterArr));
      localStorage.setItem("selectedProviders", JSON.stringify(pushArr));    
    } else if (type === selected){
      this.unselectedProviders = [...pushArr];
      this.selectedProviders = [...filterArr];
      localStorage.setItem("unSelectedProviders", JSON.stringify(pushArr));
      localStorage.setItem("selectedProviders", JSON.stringify(filterArr));
    }
  }
}
