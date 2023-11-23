import { Injectable } from '@angular/core';
// import { COUNTRIES,  } from './mock-countries';

import { Observable , of} from 'rxjs'; //bisogna aggiungere of
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Banca } from './banca';
import { Funzionalita } from './funzionalita';

@Injectable({
  providedIn: 'root'
})
export class BancaService {

  private bancheUrl : string = 'http://localhost:5194/api/Banche'
  private funzionalitaUrl: string = 'http://localhost:5194/api/BancheFunzionalita';
  constructor( private http: HttpClient) { }

  getBanche(): Observable<Banca[]>{
    // const countries = of(COUNTRIES); // serve a stare in osservazione e a ritornare un observable di Country[]
   
    return this.http.get<Banca[]>(this.bancheUrl)
  }

  getBanca(id : number | null ) : Observable<Banca>{
  
   
    return this.http.get<Banca>(`${this.bancheUrl}/${id}`); //of serve a far diventare quella variabile un observable
   
    
  }

   getFunzionalitaBanca(id : number | null ): Observable<Funzionalita[]>
   {
    return this.http.get<Funzionalita[]>(`${this.funzionalitaUrl}/${id}`);
   }
}

