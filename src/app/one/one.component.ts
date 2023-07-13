import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
isHide : boolean = true;
  isHide1 : boolean = true;
  @ViewChild('phone')phone : ElementRef | any;
  @ViewChild('email')email : ElementRef | any; 

  dropdownform(eve:any){
    if(this.phone.nativeElement.value === eve.target.value){
      this.isHide = false;
      this.isHide1 = true;
    }else if(this.email.nativeElement.value === eve.target.value){
      this.isHide1 = false;
      this.isHide = true;
    }
  } 
}
