import { Component, OnInit} from '@angular/core';
import { Banca } from '../banca';
import { BancaService } from '../banche.service';

@Component({
  selector: 'app-banca',
  templateUrl: './banche.component.html',
  styleUrls: ['./banche.component.scss']
})
export class BancaComponent {
  banche  : Banca[] = [];
    selectedBanca : Banca = this.banche[0];

    constructor(private bancaService : BancaService, 
      // private messageService: MessageService
      ) { }

    getBanche(){
       this.bancaService.getBanche().subscribe(cs => this.banche = cs);
    }

    ngOnInit() : void{ //questa funzione viene chiamata automaticamente da angular al momento dell'istanza di questo component
      this.getBanche();
      console.log(this.banche);
    

    }

   
    // onSelect(country: Country) : void{
    //   this.selectedCountry = country;
    //   this.messageService.add(`CountriesComponent: Selected country id=${country.id}`);
    // }

}
