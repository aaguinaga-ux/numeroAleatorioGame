import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfiguracionService } from '../../services/configuracion.service';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule      
  ],
  templateUrl: '/login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private configService: ConfiguracionService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rango: [4, [Validators.required, Validators.min(4)]],
      intentos: [1, [Validators.required, Validators.min(1)]]
    });
  }

  recogerDatos() {
    if (this.form.invalid) return;

    this.configService.setConfiguracion(this.form.value);

    this.router.navigate(['/juego']);
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get rango() { return this.form.get('rango'); }
  get intentos() { return this.form.get('intentos'); }
}
