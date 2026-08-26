import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Category } from '../../models/category.model';
import { GlossaryService } from '../../services/glossary';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories implements OnInit {

  categories: Category[] = [];

  constructor(
    private glossaryService: GlossaryService
  ) {}

  ngOnInit(): void {

    this.categories = [

      {
        id: 1,
        name: 'Angular Fundamentals',
        description:
          'Core Angular concepts, application basics, CLI, and modern standalone development.',
        icon: 'A'
      },

      {
        id: 2,
        name: 'Components & Templates',
        description:
          'Components, templates, data binding, and modern Angular template control flow.',
        icon: '<>'
      },

      {
        id: 3,
        name: 'Signals & Reactivity',
        description:
          'Signals, computed values, effects, and reactive application patterns.',
        icon: 'S'
      },

      {
        id: 4,
        name: 'Routing & Navigation',
        description:
          'Routes, navigation, route parameters, RouterLink, and lazy loading.',
        icon: '↗'
      },

      {
        id: 5,
        name: 'Services & Dependency Injection',
        description:
          'Services, providers, injectables, and Angular dependency injection.',
        icon: 'DI'
      },

      {
        id: 6,
        name: 'Forms & User Input',
        description:
          'Angular forms, reactive forms, controls, validation, and user input.',
        icon: 'F'
      },

      {
        id: 7,
        name: 'HTTP & API Integration',
        description:
          'HttpClient, REST APIs, HTTP requests, responses, and interceptors.',
        icon: 'API'
      },

      {
        id: 8,
        name: 'State Management',
        description:
          'Component state, shared state, signal state, and reactive data management.',
        icon: 'ST'
      },

      {
        id: 9,
        name: 'Angular Architecture',
        description:
          'Application configuration, bootstrap, project organization, and architecture.',
        icon: 'AR'
      },

      {
        id: 10,
        name: 'TypeScript for Angular',
        description:
          'Interfaces, generics, decorators, and TypeScript concepts used with Angular.',
        icon: 'TS'
      },

      {
        id: 11,
        name: 'Angular Performance',
        description:
          'Change detection, OnPush, deferrable views, and application optimization.',
        icon: '⚡'
      },

      {
        id: 12,
        name: 'Testing & Deployment',
        description:
          'Angular testing, TestBed, production builds, and application deployment.',
        icon: '✓'
      }
    ];
  }

  getTermCount(categoryName: string): number {
    return this.glossaryService
      .getTerms()
      .filter(term => term.category === categoryName)
      .length;
  }

  totalTerms(): number {
    return this.glossaryService
      .getTerms()
      .length;
  }
}