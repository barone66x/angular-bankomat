import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Banca } from '../banca';
import { BancaService } from '../banche.service';
import { Funzionalita } from '../funzionalita';
@Component({
  selector: 'app-banca-detail',
  templateUrl: './banca-detail.component.html',
  styleUrls: ['./banca-detail.component.scss']
})
export class BancaDetailComponent {
  // @Input() country? : Country
  banca: Banca | undefined;
  funzionalita : Funzionalita[] | undefined
  constructor(
    private route: ActivatedRoute,
    private bancaService: BancaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBanca();
    this.route.params.subscribe(params => {
      this.getBanca();
    });

    this.getFunzionalitaBanca();
    this.route.params.subscribe(params => {
      this.getBanca();
    });
  }

  getBanca(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bancaService.getBanca(id)
      .subscribe((banca) => {
        this.banca = banca;
      });
    }

    getFunzionalitaBanca(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.bancaService.getFunzionalitaBanca(id)
        .subscribe((funzionalita) => {
          this.funzionalita = funzionalita;
        });
      }
    
  goBack(): void {
    this.location.back();
  }

  

}
