import { makeAutoObservable, observable } from "mobx";
import { HomeItems } from "../../types";
import { getMovies } from "../../api";

export class Store {

  constructor() {
    makeAutoObservable(this, {
      movies: observable,
      loading: observable,
    });
  }
  public movies: HomeItems[] = [];
  public loading: boolean = false;

  public fetch = async() => {
    const list = await getMovies();
    this.movies = await list.results
  }
}
