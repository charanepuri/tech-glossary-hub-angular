import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private glossaryService: GlossaryService
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.term = this.glossaryService
      .getTerms()
      .find(term => term.id === id);

    if (this.term?.relatedTerms) {

      this.relatedTerms = this.glossaryService
        .getTerms()
        .filter(item =>
          this.term?.relatedTerms?.includes(item.term)
        );

    }
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

  this.glossaryService.toggleFavorite(this.term.id);
}
}