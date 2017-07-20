import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()

export class CandidateService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {

    }
    getCandidates() {
        return  [
            { nick: "Cristelle", name: "Ann Tolentino", city: "Manila", img: "cristelle-ann-tolentino.jpg", votes: 2, modalid: 11 },
            { nick: "Stephanie", name: "Joy Pendon", city: "Antipolo City", img: "stephanie-joy-pendon.jpg", votes: 1, modalid: 12 },
            { nick: "Arianne", name: "Deseree Viardo", city: "Pampanga", img: "arianne-deseree-viardo.jpg", votes: 3, modalid: 13 },
            { nick: "Hannah", name: "Khayle Iglesia", city: "Isabela", img: "hannah-kayle-iglesia.jpg", votes: 12, modalid: 14 },
            { nick: "Jannie", name: "Loudette Alipoon", city: "Navotas City", img: "jannie-loudette-alipoon.jpg", votes: 23, modalid: 15 },
            { nick: "Jaila", name: "Eunice Ragindin", city: "Bataan", img: "jaila-eunice-ragindin.jpg", votes: 43, modalid: 16 },
            { nick: "Sandrianne", name: "Esquilona", city: "Tarlac", img: "sandrianne-esquilona.jpg", votes: 21, modalid: 17 },
            { nick: "Kristine", name: "Eiriel Nolasco", city: "Bulacan", img: "kristine-eiriel-nolasco.jpg", votes: 32, modalid: 18 },
            { nick: "Charlene", name: "Fontanilla", city: "Valenzuela City", img: "charlene-fontanilla.jpg", votes: 32, modalid: 19 },
            { nick: "Sheila", name: "Mae Morales", city: "Caloocan City", img: "sheila-mae-morales.jpg", votes: 67, modalid: 20 },
            { nick: "Crystal", name: "Rosehelly Alday", city: "Camarines Sur", img: "crystal-rosehelly-alday.jpg", votes: 34, modalid: 21 },
            { nick: "Angela", name: "Carla Sandigan", city: "Pateros", img: "angela-carla-sandigan.jpg", votes: 18, modalid: 22 },
            { nick: "Bertmari", name: "Bergmannsdottir", city: "Scandinavia", img: "bertmari-bergmannsdottir.jpg", votes: 190, modalid: 23 },
            { nick: "Suzanne", name: "Perez", city: "California", img: "suzanne-perez.jpg", votes: 120, modalid: 24 },
            { nick: "Darlene", name: "May Reyes", city: "Singapore", img: "darlene-may-reyes.jpg", votes: 100, modalid: 25 },
            { nick: "Nicole", name: "Marie Deguilmo", city: "United Kingdom", img: "nicole-marie-deguilmo.jpg", votes: 98, modalid: 26 },
            { nick: "Maxine", name: "Xanti Manalus", city: "Central Luzon", img: "maxine-xanti-manalus.jpg", votes: 120, modalid: 27 },
            { nick: "Nicole", name: "Kristel Losloso", city: "Southern Luzon", img: "nicole-kristel-losloso.jpg", votes: 120, modalid: 28 },
            { nick: "Rica", name: "Sey", city: "Australia", img: "rica-sey.jpg", votes: 129, modalid: 29 },
            { nick: "Abagail", name: "Jane Grigsby", city: "Melbourne", img: "abagail-jane-grigsby.jpg", votes: 139, modalid: 30 },
            { nick: "Jesas", name: "Wada", city: "Japan", img: "jesas-wada.jpg", votes: 178, modalid: 31 },
            { nick: "Savannah", name: "Mari Gankiewicz", city: "Hawaii", img: "savannah-mari-gankiewicz.jpg", votes: 239, modalid: 32 },
            { nick: "Chelly", name: "Grace Falconer", city: "Northern Mindanao", img: "chelly-grace-falconer.jpg", votes: 409, modalid: 33 },
            { nick: "Louise", name: "Lian Enumerable", city: "Negros Island Region", img: "louise-lian-enumerable.jpg", votes: 678, modalid: 34 },
            { nick: "Colleen", name: "Chan", city: "Iloilo", img: "colleen-chan.jpg", votes: 987, modalid: 35 },
            { nick: "Sofia", name: "Marie Sibug", city: "Albay", img: "sofia-marie-sibug.jpg", votes: 109, modalid: 36 },
            { nick: "Claire", name: "Yvonne Aznar", city: "Davao", img: "claire-yvonne-aznar.jpg", votes: 67, modalid: 37 },
            { nick: "Ilene", name: "Astrid De Vera", city: "Cebu", img: "ilene-astrid-de-vera.jpg", votes: 36, modalid: 38 },
            { nick: "Pamela", name: "Bianca Villacorte", city: "Cavite", img: "pamela-bianca-villacorte.jpg", votes: 19, modalid: 39 },
            { nick: "Alyssa", name: "Joreen Reyes", city: "Lemery, Batangas", img: "alyssa-joreen-reyes.jpg", votes: 79, modalid: 40 }
        ]
    }

    getVotes() {        
        return this.http.get(this.url);
    }
}