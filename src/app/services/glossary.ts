import { Injectable } from '@angular/core';
import { GlossaryTerm } from '../models/glossary-term.model';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  private readonly terms: GlossaryTerm[] = [

    // ========================================
    // ANGULAR FUNDAMENTALS
    // ========================================

    {
      id: 1,
      term: 'Angular',
      category: 'Angular Fundamentals',
      definition:
        'A TypeScript-based framework for building scalable web applications.',
      description:
        'Angular provides a complete application development platform with components, routing, dependency injection, forms, HTTP tools, and more.',
      difficulty: 'Beginner',
      example: 'ng new my-angular-app',
      relatedTerms: [
        'Angular CLI',
        'Standalone Components'
      ],
      featured: true
    },

    {
      id: 2,
      term: 'Angular CLI',
      category: 'Angular Fundamentals',
      definition:
        'A command-line interface used to create, develop, test, and build Angular applications.',
      description:
        'Angular CLI provides commands for generating project files, running development servers, building applications, and performing other development tasks.',
      difficulty: 'Beginner',
      example: 'ng serve'
    },

    {
      id: 3,
      term: 'Standalone Components',
      category: 'Angular Fundamentals',
      definition:
        'Angular components that can be used without being declared inside an NgModule.',
      description:
        'Standalone components simplify Angular application architecture and support modern Angular development.',
      difficulty: 'Beginner',
      example: 'imports: [RouterLink]'
    },


    // ========================================
    // COMPONENTS & TEMPLATES
    // ========================================

    {
      id: 4,
      term: 'Component',
      category: 'Components & Templates',
      definition:
        'A building block that controls a portion of an Angular application interface.',
      description:
        'Angular components combine a TypeScript class, template, and styles to create reusable user interface sections.',
      difficulty: 'Beginner',
      example: '@Component({ selector: "app-home" })',
      relatedTerms: [
        'Template',
        'Data Binding'
      ],
      featured: true
    },

    {
      id: 5,
      term: 'Template',
      category: 'Components & Templates',
      definition:
        'HTML markup associated with an Angular component.',
      description:
        'Angular templates can display component data and respond to user interactions using Angular template syntax.',
      difficulty: 'Beginner',
      example: '<h1>{{ title }}</h1>'
    },

    {
      id: 6,
      term: 'Data Binding',
      category: 'Components & Templates',
      definition:
        'A mechanism for connecting component data with the application template.',
      description:
        'Angular supports interpolation, property binding, event binding, and two-way binding.',
      difficulty: 'Beginner',
      relatedTerms: [
        'Interpolation',
        'Event Binding'
      ]
    },

    {
      id: 7,
      term: 'Control Flow',
      category: 'Components & Templates',
      definition:
        'Angular template syntax used to conditionally render and repeat content.',
      description:
        'Modern Angular provides built-in control-flow blocks such as @if, @for, and @switch.',
      difficulty: 'Intermediate',
      example: '@if (isLoggedIn) { <p>Welcome</p> }',
      featured: true
    },


    // ========================================
    // SIGNALS & REACTIVITY
    // ========================================

    {
      id: 8,
      term: 'Signal',
      category: 'Signals & Reactivity',
      definition:
        'A reactive value that allows Angular to track changes and update dependent parts of an application.',
      description:
        'Signals provide a reactive state model that makes dependencies between values explicit.',
      difficulty: 'Intermediate',
      example: 'count = signal(0);',
      featured: true
    },

    {
      id: 9,
      term: 'Computed',
      category: 'Signals & Reactivity',
      definition:
        'A read-only reactive value derived from other signals.',
      description:
        'Computed signals automatically recalculate when the signals they depend on change.',
      difficulty: 'Intermediate',
      example: 'total = computed(() => price() * quantity());'
    },

    {
      id: 10,
      term: 'Effect',
      category: 'Signals & Reactivity',
      definition:
        'A reactive operation that runs when the signals it reads change.',
      description:
        'Effects are useful for reacting to signal changes and performing side effects.',
      difficulty: 'Intermediate',
      example: 'effect(() => console.log(count()));'
    },


    // ========================================
    // ROUTING & NAVIGATION
    // ========================================

    {
      id: 11,
      term: 'Angular Router',
      category: 'Routing & Navigation',
      definition:
        'The Angular service responsible for navigation between application views.',
      description:
        'Angular Router maps URL paths to components and supports navigation, route parameters, guards, and lazy loading.',
      difficulty: 'Beginner',
      featured: true
    },

    {
      id: 12,
      term: 'RouterLink',
      category: 'Routing & Navigation',
      definition:
        'A directive used to create navigation links within an Angular application.',
      description:
        'RouterLink allows users to navigate between routes without performing a full browser page reload.',
      difficulty: 'Beginner',
      example: '<a [routerLink]="[\'/glossary\', id]">View</a>'
    },

    {
      id: 13,
      term: 'Route Parameter',
      category: 'Routing & Navigation',
      definition:
        'A dynamic value included in a route URL.',
      description:
        'Route parameters allow an application to load different data based on values contained in the URL.',
      difficulty: 'Intermediate',
      example: 'path: "glossary/:id"'
    },

    {
      id: 14,
      term: 'Lazy Loading',
      category: 'Routing & Navigation',
      definition:
        'A technique that loads application code only when it is needed.',
      description:
        'Lazy loading can reduce the initial JavaScript bundle and improve application startup performance.',
      difficulty: 'Intermediate',
      example: 'loadComponent: () => import("./pages/home/home")'
    },


    // ========================================
    // SERVICES & DEPENDENCY INJECTION
    // ========================================

    {
      id: 15,
      term: 'Service',
      category: 'Services & Dependency Injection',
      definition:
        'A reusable class that contains application logic or shared functionality.',
      description:
        'Angular services are commonly used for data access, business logic, shared state, and reusable functionality.',
      difficulty: 'Beginner',
      featured: true
    },

    {
      id: 16,
      term: 'Dependency Injection',
      category: 'Services & Dependency Injection',
      definition:
        'A design pattern in which required dependencies are provided to a class rather than created by the class itself.',
      description:
        'Angular provides a dependency injection system that manages services and other injectable dependencies.',
      difficulty: 'Intermediate',
      relatedTerms: [
        'Service',
        'Injectable'
      ]
    },

    {
      id: 17,
      term: 'Injectable',
      category: 'Services & Dependency Injection',
      definition:
        'A decorator used to configure a class for Angular dependency injection.',
      description:
        'The @Injectable decorator allows Angular to understand how a class can participate in dependency injection.',
      difficulty: 'Intermediate',
      example: '@Injectable({ providedIn: "root" })'
    },


    // ========================================
    // FORMS & USER INPUT
    // ========================================

    {
      id: 18,
      term: 'Angular Forms',
      category: 'Forms & User Input',
      definition:
        'Angular features used to create and manage user input forms.',
      description:
        'Angular provides template-driven and reactive approaches for building forms and handling validation.',
      difficulty: 'Beginner',
      featured: true
    },

    {
      id: 19,
      term: 'Reactive Forms',
      category: 'Forms & User Input',
      definition:
        'A model-driven approach for creating and managing Angular forms.',
      description:
        'Reactive forms provide explicit control over form state and validation using TypeScript classes.',
      difficulty: 'Intermediate',
      example: 'new FormControl("")'
    },

    {
      id: 20,
      term: 'FormControl',
      category: 'Forms & User Input',
      definition:
        'A class that tracks the value and validation state of an individual form control.',
      description:
        'FormControl is a fundamental building block of Angular reactive forms.',
      difficulty: 'Intermediate',
      example: 'name = new FormControl("")'
    },


    // ========================================
    // HTTP & API INTEGRATION
    // ========================================

    {
      id: 21,
      term: 'HttpClient',
      category: 'HTTP & API Integration',
      definition:
        'Angular service used to communicate with HTTP-based backend services.',
      description:
        'HttpClient provides methods for sending HTTP requests and receiving responses from APIs.',
      difficulty: 'Beginner',
      example: 'http.get("/api/terms")',
      featured: true
    },

    {
      id: 22,
      term: 'HTTP Interceptor',
      category: 'HTTP & API Integration',
      definition:
        'A mechanism that can inspect and modify HTTP requests and responses.',
      description:
        'Interceptors can be used for tasks such as authentication, logging, headers, and error handling.',
      difficulty: 'Advanced'
    },

    {
      id: 23,
      term: 'REST API',
      category: 'HTTP & API Integration',
      definition:
        'An HTTP-based application programming interface following REST architectural principles.',
      description:
        'Angular applications commonly communicate with backend services through REST APIs.',
      difficulty: 'Intermediate'
    },


    // ========================================
    // STATE MANAGEMENT
    // ========================================

    {
      id: 24,
      term: 'Component State',
      category: 'State Management',
      definition:
        'Data maintained by a component that represents its current state.',
      description:
        'Component state can be represented using properties, signals, or other reactive mechanisms.',
      difficulty: 'Beginner'
    },

    {
      id: 25,
      term: 'Shared State',
      category: 'State Management',
      definition:
        'Application data that needs to be accessed or updated by multiple components.',
      description:
        'Shared state can be managed using services, signals, or dedicated state management solutions.',
      difficulty: 'Intermediate'
    },

    {
      id: 26,
      term: 'Signal State',
      category: 'State Management',
      definition:
        'Application state represented using Angular signals.',
      description:
        'Signals can provide a lightweight reactive approach to managing component and shared state.',
      difficulty: 'Intermediate',
      example: 'todos = signal<Todo[]>([])'
    },


    // ========================================
    // ANGULAR ARCHITECTURE
    // ========================================

    {
      id: 27,
      term: 'ApplicationConfig',
      category: 'Angular Architecture',
      definition:
        'A configuration object used to define application-level providers and configuration.',
      description:
        'ApplicationConfig is commonly used with modern standalone Angular applications.',
      difficulty: 'Intermediate',
      example: 'export const appConfig: ApplicationConfig = { ... }',
      featured: true
    },

    {
      id: 28,
      term: 'Bootstrap Application',
      category: 'Angular Architecture',
      definition:
        'The process of starting an Angular application by bootstrapping its root component.',
      description:
        'Modern standalone Angular applications can be started using bootstrapApplication.',
      difficulty: 'Intermediate',
      example: 'bootstrapApplication(App, appConfig)'
    },

    {
      id: 29,
      term: 'Feature-based Architecture',
      category: 'Angular Architecture',
      definition:
        'An application organization strategy that groups files according to business features or functionality.',
      description:
        'Feature-based organization can improve maintainability and make larger Angular applications easier to navigate.',
      difficulty: 'Advanced'
    },


    // ========================================
    // TYPESCRIPT FOR ANGULAR
    // ========================================

    {
      id: 30,
      term: 'Interface',
      category: 'TypeScript for Angular',
      definition:
        'A TypeScript structure used to describe the shape of an object.',
      description:
        'Interfaces are commonly used in Angular applications to define models and contracts.',
      difficulty: 'Beginner',
      example: 'interface User { name: string; }',
      featured: true
    },

    {
      id: 31,
      term: 'Generic',
      category: 'TypeScript for Angular',
      definition:
        'A TypeScript feature that allows reusable code to work with different types.',
      description:
        'Generics provide flexibility while maintaining type safety in Angular applications.',
      difficulty: 'Intermediate',
      example: 'Array<string>'
    },

    {
      id: 32,
      term: 'Decorator',
      category: 'TypeScript for Angular',
      definition:
        'A special declaration that adds metadata or modifies the behavior of a class or member.',
      description:
        'Angular uses decorators such as @Component and @Injectable to provide framework metadata.',
      difficulty: 'Intermediate',
      example: '@Component({ ... })'
    },


    // ========================================
    // ANGULAR PERFORMANCE
    // ========================================

    {
      id: 33,
      term: 'Change Detection',
      category: 'Angular Performance',
      definition:
        'The process Angular uses to detect changes and update the rendered application.',
      description:
        'Understanding change detection helps developers build responsive and efficient Angular applications.',
      difficulty: 'Advanced',
      featured: true
    },

    {
      id: 34,
      term: 'OnPush',
      category: 'Angular Performance',
      definition:
        'A change detection strategy that can reduce unnecessary component checking.',
      description:
        'OnPush can improve performance by allowing Angular to check components under specific change conditions.',
      difficulty: 'Advanced'
    },

    {
      id: 35,
      term: 'Deferrable Views',
      category: 'Angular Performance',
      definition:
        'Angular template functionality for deferring the loading and rendering of parts of an application.',
      description:
        'Deferrable views can help optimize initial rendering and resource loading.',
      difficulty: 'Advanced',
      example: '@defer { <app-heavy-component /> }'
    },


    // ========================================
    // TESTING & DEPLOYMENT
    // ========================================

    {
      id: 36,
      term: 'Angular Testing',
      category: 'Testing & Deployment',
      definition:
        'The practice of testing Angular components, services, and application behavior.',
      description:
        'Testing helps verify that Angular application functionality works as expected.',
      difficulty: 'Intermediate',
      featured: true
    },

    {
      id: 37,
      term: 'TestBed',
      category: 'Testing & Deployment',
      definition:
        'An Angular testing utility used to configure and create testing environments.',
      description:
        'TestBed provides tools for configuring testing modules and creating component fixtures.',
      difficulty: 'Intermediate'
    },

    {
      id: 38,
      term: 'Production Build',
      category: 'Testing & Deployment',
      definition:
        'An optimized build of an Angular application intended for deployment.',
      description:
        'Production builds optimize application assets and prepare the project for hosting.',
      difficulty: 'Intermediate',
      example: 'ng build'
    },

    {
      id: 39,
      term: 'Angular Deployment',
      category: 'Testing & Deployment',
      definition:
        'The process of publishing a built Angular application to a hosting environment.',
      description:
        'Angular applications can be deployed to static hosting platforms and other web hosting environments.',
      difficulty: 'Intermediate'
    }
  ];

  getTerms(): GlossaryTerm[] {
    return this.terms;
  }
}