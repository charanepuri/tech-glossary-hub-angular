import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  readonly highlights = [
    {
      title: 'Angular Focused',
      description:
        'A dedicated glossary covering Angular concepts, architecture, development patterns, and the modern Angular ecosystem.'
    },
    {
      title: 'Beginner Friendly',
      description:
        'Technical concepts are presented using clear definitions, descriptions, syntax, and practical examples.'
    },
    {
      title: 'Easy to Explore',
      description:
        'Search, filtering, sorting, categories, related terms, and sequential navigation make concepts easier to discover.'
    },
    {
      title: 'Personal Learning',
      description:
        'Favorites allow users to save important concepts and revisit them whenever they need.'
    }
  ];

  readonly technologies = [
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'Angular Router',
    'Angular Forms',
    'Signals',
    'LocalStorage'
  ];

}