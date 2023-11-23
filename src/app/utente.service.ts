import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs'; //bisogna aggiungere of
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utente } from './utente';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {

 

  private utenteUrl = 'http://localhost:5194/api/Utenti';

  constructor( private http: HttpClient) { }


  getUtenti() : Observable<Utente[]>{
    return this.http.get<Utente[]>(this.utenteUrl); //of serve a far diventare quella variabile un observable
  }

  getUtentiByBancaId(idBanca : number) : Observable<Utente[]>{
    console.log(idBanca);
    return this.http.get<Utente[]>(`${this.utenteUrl}/tutti/${idBanca}`); //of serve a far diventare quella variabile un observable
  }

  getUtentiBloccatiByBancaId(idBanca : number) : Observable<Utente[]>{
    return this.http.get<Utente[]>(`${this.utenteUrl}/bloccati/${idBanca}`); //of serve a far diventare quella variabile un observable
  }

  addUtente(utente : Utente) : Observable<Utente>{
    return this.http.post<Utente>(this.utenteUrl , utente);
  }

  aggiornaUtente(utente: Utente) : Observable<Utente>{
    return this.http.put<Utente>(`${this.utenteUrl}/${utente.id}`, utente);
  }
}
