import { Component, Input } from '@angular/core';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';
import { Banca } from '../banca';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss'],
})
export class UtentiComponent {
  @Input() onlyBlocked!: boolean;

  @Input() idBanca!: number;

  utentiBanca$: Observable<Utente[]> = new Observable<Utente[]>();
  utenti: Utente[] = [];
  utenteToUpdate: Utente | undefined;

  constructor(
    private utenteService: UtenteService,
    private route: ActivatedRoute
  ) {}

  chooseGetMethod() {
    console.log('sono in choose');
    if (!this.onlyBlocked) {
      this.getUtentiByBancaId();
    } else {
      this.getUtentiBloccatiByBancaId();
    }
  }

  getUtentiByBancaId() {
    console.log('sono nel metodo tutti');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.utentiBanca$ =  this.utenteService.getUtentiByBancaId(id);
    this.utenteService.getUtentiByBancaId(id).subscribe((ss) => {
      this.utenti = ss;
      console.log(ss);
    });
  }

  getUtentiBloccatiByBancaId() {
    console.log('sono nel metodo bloccati');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.utentiBanca$ = this.utenteService.getUtentiBloccatiByBancaId(id);
    this.utenteService
      .getUtentiBloccatiByBancaId(id)
      .subscribe((ss) => (this.utenti = ss));
  }

  cancellaLista() {
    this.utenti = [];
  }

  aggiornaUtenti(utente: Utente) {
    console.log(utente);
    this.utenteService
      .aggiornaUtente(utente)
      .subscribe((sa) => (this.utenteToUpdate = sa));
  }

  // addUtente(){
  //   this.utenteService.addUtente(this.utenteTest).subscribe(ss => this.utenteTest == ss);
  //   console.log("metodo add lanciato");
  // }
}
