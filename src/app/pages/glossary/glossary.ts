import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { GlossaryService } from '../../services/glossary';
import { GlossaryTerm } from '../../models/glossary-term.model';

@Component({
  selector: 'app-glossary',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './glossary.html',
  styleUrl: './glossary.css'
})
export class Glossary implements OnInit {

  terms: GlossaryTerm[] = [];
  filteredTerms: GlossaryTerm[] = [];

  searchTerm = '';
  selectedCategory = 'All';
  selectedDifficulty = 'All';
  selectedSort = 'default';

  categories: string[] = [];

ngOnInit(): void {

  this.terms = this.glossaryService.getTerms();

  this.categories = [
    ...new Set(
      this.terms.map(term => term.category)
    )
  ];

  this.route.queryParamMap.subscribe(params => {

    const category =
      params.get('category');

    this.selectedCategory =
      category && this.categories.includes(category)
        ? category
        : 'All';

    this.applyFilters();

  });
}

constructor(
  private glossaryService: GlossaryService,
  private route: ActivatedRoute
) {}

  applyFilters(): void {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    this.filteredTerms = this.terms.filter(term => {

      const matchesSearch =
        !search ||
        term.term.toLowerCase().includes(search) ||
        term.definition.toLowerCase().includes(search) ||
        term.description.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        term.category === this.selectedCategory;

      const matchesDifficulty =
        this.selectedDifficulty === 'All' ||
        term.difficulty === this.selectedDifficulty;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty
      );
    });

    this.applySorting();
  }

  applySorting(): void {

    if (this.selectedSort === 'az') {

      this.filteredTerms.sort((a, b) =>
        a.term.localeCompare(b.term)
      );

    } else if (this.selectedSort === 'za') {

      this.filteredTerms.sort((a, b) =>
        b.term.localeCompare(a.term)
      );

    }
  }

  clearFilters(): void {

    this.searchTerm = '';
    this.selectedCategory = 'All';
    this.selectedDifficulty = 'All';
    this.selectedSort = 'default';

    this.applyFilters();
  }

  trackById(
    index: number,
    term: GlossaryTerm
  ): number {
    return term.id;
  }
}