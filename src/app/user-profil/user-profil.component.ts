import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {

  name : string;
  firstName : string;
  age : number | boolean = 25;
  quote : string= 'two bear or not to beer'
  
  imageSrc: string = 'https://randomuser.me/api/portraits/lego/2.jpg';

  constructor() {
    this.name = 'DOE'
    this.firstName = 'John'
    this.age
   }

  ngOnInit(): void {
  }

  onClick(){}

  toggleShow(){}

  isShown(){}

  public show:boolean = false;
  public buttonName:any = 'Afficher';

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    
    if(this.show)  
      this.buttonName = "Masquer";
    else
      this.buttonName = "Afficher";
  }
}

