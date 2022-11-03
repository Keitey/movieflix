import { makeAutoObservable, observable } from "mobx";
import { movieDetails } from "../../types";
import { getMovieDetail } from "../../api";

export class Store {

    constructor() {
      makeAutoObservable(this, {
        movies: observable,
        loading: observable,
      });
    }

    public movies: movieDetails | null = null;
    public loading: boolean = false;
  
    public fetch = async(id: any) => {
        this.movies = await getMovieDetail(id);
    }
  }
