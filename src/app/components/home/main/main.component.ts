import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { Multimedia } from 'src/app/models/Multimedia';
import { Section } from 'src/app/models/Section';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loading = false;
  articles: Article[] = [];
  selectedSections: string[] = [];
  totalResults = 0;
  page = 0;
  limit = 0;

  constructor(public articleService: ArticleService, private aRoute: ActivatedRoute, private router: Router) {
    articleService.articlesLoading.subscribe(value => this.loading = value);
    articleService.articles.subscribe(value => this.articles = value);
    articleService.totalResults.subscribe(value => this.totalResults = value);
    articleService.selectedSections.subscribe(value => this.selectedSections = value.map(item => item.display_name));
  }

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe(params => {
      this.page = Number(params.page || 1);
      this.limit = Number(params.limit || 15);
      this.articleService.getArticles(this.page - 1, this.limit);
      this.scrollToTop();
    });
  }

  getImage(multimedia: Multimedia[]) {
    return multimedia?.find(media => media.format === 'mediumThreeByTwo440')?.url || '/assets/images/thumbnail.JPG';
  }

  pageNumberChanged(value: { page: number, limit: number }) {
    this.router.navigate([], { relativeTo: this.aRoute, queryParams: value })
  }

  scrollToTop() {
    const container = document.getElementsByClassName('main-container')[0];
    if (container) container.scrollTop = 0;
  }

}
