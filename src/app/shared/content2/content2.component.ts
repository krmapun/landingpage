import { Component, OnInit } from "@angular/core";
import { DataSwapiService } from "src/app/services/data-swapi.service";
import { MoviesInterface } from "../../models/movies-interface";

@Component({
  selector: "app-content2",
  templateUrl: "./content2.component.html",
  styleUrls: ["./content2.component.css"]
})
export class Content2Component implements OnInit {

  constructor(private dataswapi: DataSwapiService) {}
  
  private Movies: [];
  
  ngOnInit() {
    this.getMoviesInfo();
  }

  getMoviesInfo() {
    this.dataswapi.getAllMovies().subscribe((movies: MoviesInterface) => this.Movies = movies.results);
  }
}
