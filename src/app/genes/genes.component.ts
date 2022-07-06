import { Component, OnInit } from '@angular/core';

import { Gene } from '../gene'
import { GENES } from '../mock-genes';


@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.css']
})
export class GenesComponent implements OnInit {

  constructor() { }

  genes = GENES;
  
  ngOnInit(): void {
  }

}
