import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  stats = [
    {
      value: '5+',
      label: 'Categories'
    },
    {
      value: '100+',
      label: 'Technical Terms'
    },
    {
      value: '3',
      label: 'Difficulty Levels'
    },
    {
      value: '100%',
      label: 'Beginner Friendly'
    }
  ];

  featuredCategories = [
    {
      name: 'HTML',
      description: 'Learn the building blocks used to structure modern web pages.',
      icon: '</>',
      route: '/categories'
    },
    {
      name: 'CSS',
      description: 'Explore styling, layouts, animations, and responsive design.',
      icon: '#',
      route: '/categories'
    },
    {
      name: 'JavaScript',
      description: 'Understand the core concepts behind interactive web applications.',
      icon: 'JS',
      route: '/categories'
    },
    {
      name: 'React',
      description: 'Explore essential concepts for building modern user interfaces.',
      icon: '⚛',
      route: '/categories'
    },
    {
      name: 'TypeScript',
      description: 'Learn typed JavaScript concepts for scalable applications.',
      icon: 'TS',
      route: '/categories'
    }
  ];

  featuredTerms = [
    {
      term: 'Component',
      category: 'React',
      difficulty: 'Beginner',
      description:
        'A reusable building block that encapsulates structure, behavior, and presentation.'
    },
    {
      term: 'Flexbox',
      category: 'CSS',
      difficulty: 'Beginner',
      description:
        'A CSS layout system designed to arrange elements efficiently in one dimension.'
    },
    {
      term: 'Promise',
      category: 'JavaScript',
      difficulty: 'Intermediate',
      description:
        'An object representing the eventual completion or failure of an asynchronous operation.'
    },
    {
      term: 'Interface',
      category: 'TypeScript',
      difficulty: 'Intermediate',
      description:
        'A TypeScript structure used to define the shape and contract of an object.'
    }
  ];
}