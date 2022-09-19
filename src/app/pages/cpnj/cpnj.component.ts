import { Component, OnInit } from '@angular/core';
import { WorldClockApiService } from 'src/app/services/world-clock-api.service';

@Component({
  selector: 'app-cpnj',
  templateUrl: './cpnj.component.html',
  styleUrls: ['./cpnj.component.css']
})
export class CpnjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validarCNPJ(cnpj: any) {
    console.log(cnpj)

    //Remove a formatação caso exista
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    //confere se o input está com 14 digitos
    if (cnpj.length != 14)
      return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return false;

    // Valida Digito verificador
    let tamanho = cnpj.length - 2
    console.log('tamanho',tamanho)
    let numeros = cnpj.substring(0, tamanho);
    console.log('numeros',numeros)
    let digitos = cnpj.substring(tamanho);
    console.log('digitos',digitos)

    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return false;

    return true;

  }

}
