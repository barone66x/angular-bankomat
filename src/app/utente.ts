import { Banca } from "./banca"
export interface Utente {
     id : number
    idBanca : number
    nomeUtente : string
    password : string
    bloccato : boolean
   // banche : Banca

}
