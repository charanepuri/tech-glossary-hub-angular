import { Injectable } from '@angular/core';
import { GlossaryTerm } from '../models/glossary-term.model';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  private readonly terms: GlossaryTerm[] = [

    // HTML

    {
      id: 1,
      term: 'HTML',
      category: 'HTML',
      definition: 'HyperText Markup Language used to structure content on the web.',
      description:
        'The standard markup language used to create and structure web pages.',
      difficulty: 'Beginner',
      example: '<h1>Hello World</h1>',
      relatedTerms: ['Semantic HTML', 'Attribute','DOCTYPE'],
      featured: true
    },

    {
      id: 2,
      term: 'Semantic HTML',
      category: 'HTML',
      definition:
        'HTML elements that clearly describe their meaning and purpose.',
      description:
        'Semantic elements improve document structure, accessibility, and readability.',
      difficulty: 'Beginner',
      example: '<header>Website Header</header>',
      relatedTerms: ['Semantic HTML', 'Attribute','DOCTYPE'],
      featured: true
    },

    {
      id: 3,
      term: 'Form',
      category: 'HTML',
      definition:
        'An HTML element used to collect and submit user input.',
      description:
        'Forms provide controls that allow users to enter and submit information.',
      difficulty: 'Beginner',
      syntax: '<form>...</form>',
      example: '<form><input type="text"></form>',
      relatedTerms: ['Semantic HTML', 'Attribute','DOCTYPE'],
    },

    {
      id: 4,
      term: 'Attribute',
      category: 'HTML',
      definition:
        'Additional information provided inside an HTML opening tag.',
      description:
        'Attributes modify the behavior or provide additional information about an HTML element.',
      difficulty: 'Beginner',
      example: '<img src="image.jpg" alt="Example">',
      relatedTerms: ['Semantic HTML', 'Attribute','DOCTYPE'],
    },

    {
      id: 5,
      term: 'DOCTYPE',
      category: 'HTML',
      definition:
        'A declaration that tells the browser which HTML standard the document uses.',
      description:
        'The DOCTYPE declaration helps browsers render the document using standards mode.',
      difficulty: 'Beginner',
      syntax: '<!DOCTYPE html>',
      relatedTerms: ['Semantic HTML', 'Attribute','DOCTYPE'],
    },

    // CSS

    {
      id: 6,
      term: 'CSS',
      category: 'CSS',
      definition:
        'Cascading Style Sheets used to style and layout web pages.',
      description:
        'CSS controls the visual presentation of HTML elements including colors, spacing, and layouts.',
      difficulty: 'Beginner',
      example: 'body { margin: 0; }',
      featured: true
    },

    {
      id: 7,
      term: 'Flexbox',
      category: 'CSS',
      definition:
        'A CSS layout system designed for arranging elements in one dimension.',
      description:
        'Flexbox makes it easier to align and distribute elements within a container.',
      difficulty: 'Beginner',
      syntax: 'display: flex;',
      example: '.container { display: flex; }',
      relatedTerms: ['CSS Grid', 'Media Query'],
      featured: true
    },

    {
      id: 8,
      term: 'CSS Grid',
      category: 'CSS',
      definition:
        'A two-dimensional CSS layout system for creating rows and columns.',
      description:
        'CSS Grid provides powerful tools for building structured two-dimensional layouts.',
      difficulty: 'Intermediate',
      syntax: 'display: grid;',
      example: '.container { display: grid; }'
    },

    {
      id: 9,
      term: 'Media Query',
      category: 'CSS',
      definition:
        'A CSS feature used to apply styles based on device or viewport conditions.',
      description:
        'Media queries are commonly used to create responsive layouts.',
      difficulty: 'Intermediate',
      syntax: '@media (max-width: 768px) { ... }'
    },

    {
      id: 10,
      term: 'Pseudo-class',
      category: 'CSS',
      definition:
        'A keyword used to define a special state of an HTML element.',
      description:
        'Pseudo-classes allow styles to be applied when elements are in specific states.',
      difficulty: 'Intermediate',
      example: 'button:hover { ... }'
    },

    // JavaScript

    {
      id: 11,
      term: 'JavaScript',
      category: 'JavaScript',
      definition:
        'A programming language widely used to create interactive web applications.',
      description:
        'JavaScript enables dynamic behavior and application logic in web browsers.',
      difficulty: 'Beginner',
      example: 'console.log("Hello World");',
      featured: true
    },

    {
      id: 12,
      term: 'Variable',
      category: 'JavaScript',
      definition:
        'A named container used to store a value in a program.',
      description:
        'JavaScript provides let, const, and var for declaring variables.',
      difficulty: 'Beginner',
      syntax: 'const name = "John";'
    },

    {
      id: 13,
      term: 'Function',
      category: 'JavaScript',
      definition:
        'A reusable block of code designed to perform a specific task.',
      description:
        'Functions allow developers to organize logic into reusable units.',
      difficulty: 'Beginner',
      syntax: 'function greet() { ... }',
      example: 'function greet() { return "Hello"; }'
    },

    {
      id: 14,
      term: 'Promise',
      category: 'JavaScript',
      definition:
        'An object representing the eventual completion or failure of an asynchronous operation.',
      description:
        'Promises are commonly used to handle asynchronous operations in JavaScript.',
      difficulty: 'Intermediate',
      example: 'fetch("/api/data").then(response => response.json())',
      relatedTerms: ['Async/Await', 'Function'],
      featured: true
    },

    {
      id: 15,
      term: 'Async/Await',
      category: 'JavaScript',
      definition:
        'Syntax used to work with promises using a more readable asynchronous style.',
      description:
        'Async and await make asynchronous JavaScript code easier to read and maintain.',
      difficulty: 'Intermediate',
      syntax: 'async function example() { await promise; }'
    },

    // React

    {
      id: 16,
      term: 'Component',
      category: 'React',
      definition:
        'A reusable building block used to construct React user interfaces.',
      description:
        'React components encapsulate UI structure and behavior.',
      difficulty: 'Beginner',
      example: 'function Welcome() { return <h1>Hello</h1>; }',
      featured: true,
      relatedTerms: ['Props', 'State','useEffect']
    },

    {
      id: 17,
      term: 'Props',
      category: 'React',
      definition:
        'Inputs passed from a parent component to a child component.',
      description:
        'Props allow components to receive data and configuration from their parent.',
      difficulty: 'Beginner',
      example: '<User name="Charan" />'
    },

    {
      id: 18,
      term: 'State',
      category: 'React',
      definition:
        'Data managed by a React component that can change over time.',
      description:
        'State allows components to respond to user interactions and application changes.',
      difficulty: 'Intermediate',
      example: 'const [count, setCount] = useState(0);'
    },

    {
      id: 19,
      term: 'useEffect',
      category: 'React',
      definition:
        'A React Hook used to perform side effects in functional components.',
      description:
        'useEffect can be used for tasks such as data fetching and subscriptions.',
      difficulty: 'Intermediate',
      syntax: 'useEffect(() => { ... }, []);'
    },

    // TypeScript

    {
      id: 20,
      term: 'TypeScript',
      category: 'TypeScript',
      definition:
        'A strongly typed programming language built on top of JavaScript.',
      description:
        'TypeScript adds static typing and additional development features to JavaScript.',
      difficulty: 'Beginner',
      example: 'let age: number = 25;',
      featured: true
    },

    {
      id: 21,
      term: 'Interface',
      category: 'TypeScript',
      definition:
        'A TypeScript structure used to define the shape of an object.',
      description:
        'Interfaces provide contracts that describe the properties and types an object should contain.',
      difficulty: 'Intermediate',
      syntax: 'interface User { name: string; }',
      relatedTerms: ['Type Alias', 'Generic'],
      featured: true
    },

    {
      id: 22,
      term: 'Type Alias',
      category: 'TypeScript',
      definition:
        'A custom name given to a type definition.',
      description:
        'Type aliases make complex or reusable type definitions easier to work with.',
      difficulty: 'Intermediate',
      syntax: 'type ID = string | number;'
    },

    {
      id: 23,
      term: 'Generic',
      category: 'TypeScript',
      definition:
        'A feature that allows reusable components to work with multiple types.',
      description:
        'Generics provide type flexibility while preserving type safety.',
      difficulty: 'Advanced',
      syntax: 'function identity<T>(value: T): T { return value; }'
    },

    {
      id: 24,
      term: 'Enum',
      category: 'TypeScript',
      definition:
        'A TypeScript feature used to define a collection of named constants.',
      description:
        'Enums can represent a fixed set of related values.',
      difficulty: 'Intermediate',
      syntax: 'enum Status { Active, Inactive }'
    }
  ];

  getTerms(): GlossaryTerm[] {
    return this.terms;
  }
}