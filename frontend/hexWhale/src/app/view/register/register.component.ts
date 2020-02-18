import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReusableBlockService } from 'src/app/service/reusable-block.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerSuccess: any;
  hideSuccess: boolean;

  constructor(private fb: FormBuilder, private common: ReusableBlockService) {
    this.hideSuccess = true;
    this.registerForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'city': [null, Validators.required],
      'mobile': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  register() {
    this.registerForm.value.role = `user`;
    this.registerForm.value.disable = false
    this.registerForm.value.date = new Date();
    this.common.register(this.registerForm.value)
      .subscribe(res => {
        this.registerSuccess = res;
        if (this.registerSuccess.message !== `Error`) {
          this.hideDiv()
          return this.registerForm.reset()
        }
      })
  }

  hideDiv() {
    this.hideSuccess = false
    setTimeout(() => {
      this.hideSuccess = true;
    }, 5000);
  }

}
