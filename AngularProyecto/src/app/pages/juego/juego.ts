import { Component } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  imports: [CommonModule, FormsModule],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {
  nombre!: string;
  apellido!: string;
  rango!: number;
  intentos!: number;
  numeroGenerado!: number;

  numeroIngresado: number | null = null;
  mensaje: string = "";
  intentosRestantes!: number;

  constructor(
    private configService: ConfiguracionService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.configService.isConfiguracionLista()) {
      this.router.navigate(['/login']);
      return;
    }

    const config = this.configService.getConfiguracion();
    this.nombre = config.nombre;
    this.apellido = config.apellido;
    this.rango = config.rango;
    this.intentos = config.intentos;
    this.intentosRestantes = this.intentos;
    this.numeroGenerado = Math.floor(Math.random() * this.rango);

  }

  enviarNumero() {
    if (this.numeroIngresado === null) return;

    this.intentosRestantes--;

    if (this.numeroIngresado === this.numeroGenerado) {
      this.mensaje = "¡Has Ganado!";
      return;
    }

   
    if (this.numeroIngresado > this.numeroGenerado) {
      this.mensaje = "Te pasaste";
    } 
    else {
      const diferencia = this.numeroGenerado - this.numeroIngresado;

      if (diferencia === 1) this.mensaje = "Caliente";
      else if (diferencia === 2) this.mensaje = "Templado";
      else this.mensaje = "Frío";
    }

    if (this.intentosRestantes === 0) {
      this.mensaje = `Vaya, has perdido. El número era ${this.numeroGenerado}`;
    }
  }
}
