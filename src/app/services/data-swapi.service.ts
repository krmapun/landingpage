import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataSwapiService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    const url_swapi = "https://swapi.co/api/films/";
    return this.http.get(url_swapi);
  }
}
