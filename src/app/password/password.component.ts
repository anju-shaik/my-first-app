import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  showsecretText = false;
  log = [];
  ondisplay(){
    this.showsecretText = !this.showsecretText;
    // this.log.push(this.log.length+1);
    this.log.push(new Date);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
