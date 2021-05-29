import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/Article';
import { Section } from '../models/Section';
import { HttpService } from './http.service';

interface ArticleResponse {
  num_results: number;
  results: Article[];
}

interface SectionsResponse {
  num_results: number;
  results: Section[];
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  totalResults = new BehaviorSubject(0);
  articles = new BehaviorSubject<Article[]>([]);
  sections = new BehaviorSubject<Section[]>([]);
  selectedSections = new BehaviorSubject<Section[]>([]);
  articlesLoading = new BehaviorSubject(false);
  sectionsLoading = new BehaviorSubject(false);

  constructor(public http: HttpService, private snackBar: MatSnackBar) { }

  private prepareArticles(results: Article[]) {
    return [
      ...results.map(result => ({
        section: result.section,
        title: result.title,
        abstract: result.abstract,
        url: result.url,
        multimedia: result.multimedia
      }))
    ];
  }

  private prepareSections(results: Section[]) {
    return [
      ...results.map(result => ({
        section: result.section,
        display_name: result.display_name
      }))
    ];
  }

  getArticles(startPage: number, limit: number) {
    this.articlesLoading.next(true);
    this.http.get<ArticleResponse>('all/all.json', { page: startPage, limit }).subscribe(response => {
      this.articles.next(this.prepareArticles(response.results));
      this.totalResults.next(response.num_results);
    }, error => {
      this.snackBar.open(error.message, undefined, { duration: 10000 })
    }).add(() => {
      this.articlesLoading.next(false);
    });
  }

  getSections() {
    this.sectionsLoading.next(true);
    this.http.get<SectionsResponse>('section-list.json').subscribe(response => {
      this.sections.next(this.prepareSections(response.results));
    }, error => {
      this.snackBar.open(error.message, undefined, { duration: 10000 })
    }).add(() => {
      this.articlesLoading.next(false);
    });
  }
}
