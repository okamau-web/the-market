import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData: RegUser = {
    firstName: '',
    otherNames: '',
    role: '',
    username: '',
    email: '',
    password: '',
    phone: 254,
  };
 
  roles = ['Super Admin', 'Property Manager', 'Tenant', 'User'];

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit() {}
  registerUser() {
    console.log('about to load')
    // this.auth.registerUser(this.registerUserData).subscribe(
    //   (res) => {
    //     console.log(res);
    //     // localStorage.setItem('token', res['token']);
    //     this.route.navigate(['/home']);
    //   },
    //   (err) => console.log(err)
    // );
  }
}
