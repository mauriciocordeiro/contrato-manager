import { Component, OnInit, Input } from '@angular/core';
import { AditivoInterface } from 'src/app/controllers/contrato';

@Component({
  selector: 'app-aditivo',
  templateUrl: './aditivo.component.html',
  styleUrls: ['./aditivo.component.scss']
})
export class AditivoComponent implements OnInit {

  @Input('aditivo') aditivo: AditivoInterface;

  constructor() { }

  ngOnInit() {
  }

}
