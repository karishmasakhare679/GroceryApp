import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName , FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm =FormGroup;
  username : any;
  password : any;
 
  ngOnInit(): void {
  }
//   public constructor HeaderComponent(private fb:FormBuilder)
//  {
// this.loginForm = FormGroup;
// this.username = this.loginForm.email.valus;


//  }
  

  

}
