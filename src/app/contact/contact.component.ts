import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(http: HttpClient) { this.https = http; }
  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    checked: new FormControl('', [Validators.required])
  });
  success: boolean = false;
  sending: boolean = false;
  https: HttpClient;
  submitted() {
    let postVars = {
        mail: this.contactForm.controls.mail.value,
        name: this.contactForm.controls.name.value,
        message: this.contactForm.controls.message.value
    };
    let endpoint = 'https://jan-woll.de/send_mail.php';

    return this.https.post(endpoint, postVars).subscribe(
        (res) => {
            console.log(res);
            this.handleSuccess();
        },
        (err) => {
            console.log(err.statusText);
            this.sending = true;
            setTimeout(() => {
                if (err.statusText == 'OK') {
                    this.sending = false;
                    this.success = true;
                    this.contactForm.reset();

                    setTimeout(() => {
                        this.success = false;
                    }, 3000);
                }
            }, 1000);
        }
    );
}

handleSuccess() {
  confetti.default({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

}