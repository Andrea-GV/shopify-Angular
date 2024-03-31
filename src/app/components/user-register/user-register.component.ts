import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  formulario: FormGroup;

  // formBuilder = inject(FormBuilder);
  // usersService = inject(UsersService);
  // router = inject(Router);
  
  // Igual que en login, lo manejo todo mejor desde un constructor
   constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router)
  {
     this.formulario = this.formBuilder.group({
    username: [],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }


  async onSubmit() {
    const response = await this.usersService.registro(this.formulario.value);
    if (response.success) {
      alert('Usuario registrado correctamente');
       this.router.navigateByUrl('/login');
    } else {
      alert('Error en registro');
    }
  }
}

