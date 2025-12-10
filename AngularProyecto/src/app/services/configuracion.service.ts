import { Injectable } from '@angular/core';
import { Configuracion } from '../models/configuracion.model';

@Injectable({ providedIn: 'root' })
export class ConfiguracionService {
  private configuracion!: Configuracion;

  setConfiguracion(config: Configuracion) {
    this.configuracion = config;
  }

  getConfiguracion(): Configuracion {
    return this.configuracion;
  }

  isConfiguracionLista(): boolean {
    return !!this.configuracion;
  }
}
