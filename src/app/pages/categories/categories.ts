import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  termCount: number;
}

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

  categories: Category[] = [
    {
      id: 1,
      name: 'HTML',
      description:
        'Structure and markup concepts used to build modern web pages.',
      icon: '</>',
      termCount: 25
    },
    {
      id: 2,
      name: 'CSS',
      description:
        'Styling, layouts, animations, and responsive design concepts.',
      icon: '#',
      termCount: 25
    },
    {
      id: 3,
      name: 'JavaScript',
      description:
        'Core JavaScript programming and interactive web development concepts.',
      icon: 'JS',
      termCount: 25
    },
    {
      id: 4,
      name: 'React',
      description:
        'Modern React concepts for creating reusable user interfaces.',
      icon: '⚛',
      termCount: 15
    },
    {
      id: 5,
      name: 'TypeScript',
      description:
        'Typed JavaScript concepts for building scalable applications.',
      icon: 'TS',
      termCount: 15
    }
  ];

  totalTerms(): number {
    return this.categories.reduce(
      (total, category) => total + category.termCount,
      0
    );
  }
}