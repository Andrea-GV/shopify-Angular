import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class FormLoginComponent {

  formulario: FormGroup;

  // formBuilder = inject(FormBuilder);
  // usersService = inject(UsersService);
  // router = inject(Router);

  // lo manejo mejor desde un constructor que inyectado, así le puedo aplicar los valodadores y el private
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router)
  {
    this.formulario = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }

  async onSubmit() {
    try {
      const response = await this.usersService.login(this.formulario.value);
      alert('Usuario logado correctamente');
      localStorage.setItem('token_crm', response.token!);
      this.router.navigateByUrl('/gestion');
    } catch (error) {
      alert('Error en login');
    }
    
    // ESTO NOS DIO ERROR QUE NO SABÍAMOS DE QUÉ MANERA MANEJAR YA Y LO CAMBIAMOS POR EL TRY - CATCH... Pero traga TODO
  // const response = await this.usersService.login(this.formulario.value);
  //   if (response.success) {
  //     // Alerta avisando del login correcto
  //     alert('Login correcto');

  //     // *************** REVISAR TODO ESTO
      
  //     // ¿Cómo nos guardamos el token?
  //     localStorage.setItem('token_crm', response.token!);

  //     this.router.navigateByUrl('/productos');
  //   } else {
  //     alert(response.error);
  //   }
   }

}