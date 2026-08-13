import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlossaryService } from '../../services/glossary';
import { GlossaryTerm } from '../../models/glossary-term.model';

@Component({
  selector: 'app-glossary',
  imports: [RouterLink],
  templateUrl: './glossary.html',
  styleUrl: './glossary.css'
})
export class Glossary implements OnInit {

  terms: GlossaryTerm[] = [];

  constructor(
    private glossaryService: GlossaryService
  ) {}

  ngOnInit(): void {
    this.terms = this.glossaryService.getTerms();
  }
}