import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{ titulo }}</h1>
  <h3>La base es: <strong>{{ base }}</strong></h3>

  <button (click)="acumular(base);">+ {{base}}</button>
  <span>{{ contador }}</span>
  <button (click)="acumular(-1*base);">- {{base}}</button>  
  `
})

export class ContadorComponent{
  public titulo: string = 'Contador app';
  public contador: number = 0;
  public base: number = 5;

  acumular(numero: number):void{
    this.contador += numero;
  }
}