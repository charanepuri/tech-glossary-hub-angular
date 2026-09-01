import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { GlossaryService } from '../../services/glossary';
import { GlossaryTerm } from '../../models/glossary-term.model';

@Component({
  selector: 'app-term-details',
  imports: [RouterLink],
  templateUrl: './term-details.html',
  styleUrl: './term-details.css'
})
export class TermDetails implements OnInit {

  term: GlossaryTerm | undefined;

  relatedTerms: GlossaryTerm[] = [];

  previousTerm: GlossaryTerm | undefined;

  nextTerm: GlossaryTerm | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public glossaryService: GlossaryService
  ) {}

  ngOnInit(): void {
    this.loadTerm();
  }

  loadTerm(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const terms =
      this.glossaryService.getTerms();

    this.term = terms.find(
      term => term.id === id
    );

    if (!this.term) {
      this.relatedTerms = [];
      this.previousTerm = undefined;
      this.nextTerm = undefined;
      return;
    }

    this.relatedTerms = terms.filter(
      item =>
        this.term?.relatedTerms?.includes(item.term)
    );

    const currentIndex = terms.findIndex(
      item => item.id === id
    );

    this.previousTerm =
      currentIndex > 0
        ? terms[currentIndex - 1]
        : undefined;

    this.nextTerm =
      currentIndex < terms.length - 1
        ? terms[currentIndex + 1]
        : undefined;
  }

  isFavorite(): boolean {
    return this.term
      ? this.glossaryService.isFavorite(this.term.id)
      : false;
  }

  toggleFavorite(): void {

    if (!this.term) {
      return;
    }

    this.glossaryService.toggleFavorite(
      this.term.id
    );
  }

  navigateToTerm(id: number): void {
    this.router.navigate([
      '/glossary',
      id
    ]);
  }
}