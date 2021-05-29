import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/Section';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  loading = false;
  sections: Section[] = [];
  selectedSections: Section[] = [];

  constructor(public articleService: ArticleService) {
    articleService.sectionsLoading.subscribe(value => this.loading = value);
    articleService.sections.subscribe(value => this.sections = value);
  }

  ngOnInit(): void {
    this.articleService.getSections();
  }

  clearSelection() {
    this.selectedSections = [];
    this.articleService.selectedSections.next(this.selectedSections);
  }

  selectionChange() {
    this.articleService.selectedSections.next(this.selectedSections);
  }

}
