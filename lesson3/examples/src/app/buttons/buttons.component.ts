import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactivegold:boolean= false;
   inactivesilver:boolean= false;
   inactivecopper:boolean= false;
   constructor() { }

   ngOnInit() { }
   setButton(ButtonID:string){
      if(ButtonID){
         this. inactivegold = true;
      }
      else if(ButtonID){
         this.inactivesilver = true;
      }
      else if(ButtonID){
         this.inactivecopper = true;
      }

   }
   resetButton(){
      this.inactivegold = false;
      this.inactivesilver = false;
      this.inactivecopper = false;
   }
}
