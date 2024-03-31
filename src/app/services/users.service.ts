import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/user.interface';
import { firstValueFrom } from 'rxjs';

type LoginBody = {
  email: string,
  password: string
}
type RegistroResponse = {
  success?: string,
  error?: string
}
type LoginResponse = {
  success?: string,
  token?: string,
  error?: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:3000/users';

  private httpClient = inject(HttpClient);

  registro(nuevoUsuario: Usuario) {
    return firstValueFrom(
      this.httpClient.post<RegistroResponse>(
        `${this.baseUrl}`,
        nuevoUsuario
      )
    )
  }

  login(body: LoginBody) {
    return firstValueFrom(
      this.httpClient.post<LoginResponse>(
        `${this.baseUrl}`,
        body
      )
    );
  }

  isLogged() {
    return localStorage.getItem('token_crm') ? true : false;
  }

}