import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private baseUrl = 'http://localhost:3000';

  // private httpClient = inject(HttpClient);
  // lo cambio por un constructor
  constructor(
    private httpClient: HttpClient
  ) { }

  registro(nuevoUsuario: Usuario) {
    return firstValueFrom(
      this.httpClient.post<RegistroResponse>(
        `${this.baseUrl}/registro`,
        nuevoUsuario
      )
    )
  }

  login(body: LoginBody) {
    return firstValueFrom(
      this.httpClient.post<LoginResponse>(
        `${this.baseUrl}/login`,
        body
      )
    );
  }

  isLogged() {
    return localStorage.getItem('token_crm') ? true : false;
  }
  
}