import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GlossaryService } from '../../services/glossary';
import { GlossaryTerm } from '../../models/glossary-term.model';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites implements OnInit {

  favoriteTerms: GlossaryTerm[] = [];

  constructor(
    private glossaryService: GlossaryService
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteTerms =
      this.glossaryService.getFavoriteTerms();
  }

  removeFavorite(termId: number): void {

    this.glossaryService.toggleFavorite(termId);

    this.loadFavorites();
  }
}