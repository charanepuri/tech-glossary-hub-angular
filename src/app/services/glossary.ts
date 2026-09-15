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
      term: "Angular",
      category: "Angular Fundamentals",
      definition:
        "A TypeScript-based framework for building scalable web applications.",
      description:
        "Angular provides components, routing, dependency injection, forms, HTTP tools, and other features for complete web application development.",
      difficulty: "Beginner",
      example: "ng new my-angular-app",
      featured: true,
    },

    {
      id: 2,
      term: "Angular CLI",
      category: "Angular Fundamentals",
      definition:
        "A command-line interface for creating, developing, testing, and building Angular applications.",
      description:
        "Angular CLI provides commands for generating files, running development servers, testing projects, and creating production builds.",
      difficulty: "Beginner",
      example: "ng serve",
    },

    {
      id: 3,
      term: "Angular Application",
      category: "Angular Fundamentals",
      definition:
        "A beginner-level Angular concept related to Angular Application.",
      description:
        "Understanding Angular Application helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Application",
    },

    {
      id: 4,
      term: "Standalone Components",
      category: "Angular Fundamentals",
      definition:
        "Angular components that can be used without being declared in an NgModule.",
      description:
        "Standalone components simplify modern Angular application architecture by allowing components to declare their own imports.",
      difficulty: "Beginner",
      example: "imports: [RouterLink]",
    },

    {
      id: 5,
      term: "Angular Module",
      category: "Angular Fundamentals",
      definition:
        "A beginner-level Angular concept related to Angular Module.",
      description:
        "Understanding Angular Module helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Module",
    },

    {
      id: 6,
      term: "Angular Workspace",
      category: "Angular Fundamentals",
      definition:
        "A beginner-level Angular concept related to Angular Workspace.",
      description:
        "Understanding Angular Workspace helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Workspace",
    },

    {
      id: 7,
      term: "Angular Configuration",
      category: "Angular Fundamentals",
      definition:
        "A beginner-level Angular concept related to Angular Configuration.",
      description:
        "Understanding Angular Configuration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Configuration",
    },

    {
      id: 8,
      term: "Angular Schematics",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Schematics.",
      description:
        "Understanding Angular Schematics helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Schematics",
    },

    {
      id: 9,
      term: "Angular Compiler",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Compiler.",
      description:
        "Understanding Angular Compiler helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Compiler",
    },

    {
      id: 10,
      term: "Angular Package Format",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Package Format.",
      description:
        "Understanding Angular Package Format helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Package Format",
    },

    {
      id: 11,
      term: "Angular DevTools",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular DevTools.",
      description:
        "Understanding Angular DevTools helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular DevTools",
    },

    {
      id: 12,
      term: "Angular Language Service",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Language Service.",
      description:
        "Understanding Angular Language Service helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Language Service",
    },

    {
      id: 13,
      term: "Angular Versioning",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Versioning.",
      description:
        "Understanding Angular Versioning helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Versioning",
    },

    {
      id: 14,
      term: "Angular Build System",
      category: "Angular Fundamentals",
      definition:
        "A intermediate-level Angular concept related to Angular Build System.",
      description:
        "Understanding Angular Build System helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Angular Build System",
    },

    {
      id: 15,
      term: "Ivy",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to Ivy.",
      description:
        "Understanding Ivy helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Ivy",
    },

    {
      id: 16,
      term: "AOT Compilation",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to AOT Compilation.",
      description:
        "Understanding AOT Compilation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of AOT Compilation",
    },

    {
      id: 17,
      term: "JIT Compilation",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to JIT Compilation.",
      description:
        "Understanding JIT Compilation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of JIT Compilation",
    },

    {
      id: 18,
      term: "Angular Compiler CLI",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to Angular Compiler CLI.",
      description:
        "Understanding Angular Compiler CLI helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Angular Compiler CLI",
    },

    {
      id: 19,
      term: "Incremental Compilation",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to Incremental Compilation.",
      description:
        "Understanding Incremental Compilation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Incremental Compilation",
    },

    {
      id: 20,
      term: "Angular Rendering Pipeline",
      category: "Angular Fundamentals",
      definition:
        "A advanced-level Angular concept related to Angular Rendering Pipeline.",
      description:
        "Understanding Angular Rendering Pipeline helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Angular Rendering Pipeline",
    },

    // ========================================
    // COMPONENTS & TEMPLATES
    // ========================================

    {
      id: 21,
      term: "Component",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Component.",
      description:
        "Understanding Component helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Component",
      featured: true,
    },

    {
      id: 22,
      term: "Component Template",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Component Template.",
      description:
        "Understanding Component Template helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Component Template",
    },

    {
      id: 23,
      term: "Component Metadata",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Component Metadata.",
      description:
        "Understanding Component Metadata helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Component Metadata",
    },

    {
      id: 24,
      term: "Template Syntax",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Template Syntax.",
      description:
        "Understanding Template Syntax helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Template Syntax",
    },

    {
      id: 25,
      term: "Interpolation",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Interpolation.",
      description:
        "Understanding Interpolation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Interpolation",
    },

    {
      id: 26,
      term: "Property Binding",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Property Binding.",
      description:
        "Understanding Property Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Property Binding",
    },

    {
      id: 27,
      term: "Event Binding",
      category: "Components & Templates",
      definition:
        "A beginner-level Angular concept related to Event Binding.",
      description:
        "Understanding Event Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Event Binding",
    },

    {
      id: 28,
      term: "Two-Way Binding",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Two-Way Binding.",
      description:
        "Understanding Two-Way Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Two-Way Binding",
    },

    {
      id: 29,
      term: "Attribute Binding",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Attribute Binding.",
      description:
        "Understanding Attribute Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Attribute Binding",
    },

    {
      id: 30,
      term: "Class Binding",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Class Binding.",
      description:
        "Understanding Class Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Class Binding",
    },

    {
      id: 31,
      term: "Style Binding",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Style Binding.",
      description:
        "Understanding Style Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Style Binding",
    },

    {
      id: 32,
      term: "Template Reference Variable",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Template Reference Variable.",
      description:
        "Understanding Template Reference Variable helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Template Reference Variable",
    },

    {
      id: 33,
      term: "Input",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Input.",
      description:
        "Understanding Input helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Input",
    },

    {
      id: 34,
      term: "Output",
      category: "Components & Templates",
      definition:
        "A intermediate-level Angular concept related to Output.",
      description:
        "Understanding Output helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Output",
    },

    {
      id: 35,
      term: "Content Projection",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to Content Projection.",
      description:
        "Understanding Content Projection helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Content Projection",
    },

    {
      id: 36,
      term: "View Encapsulation",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to View Encapsulation.",
      description:
        "Understanding View Encapsulation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of View Encapsulation",
    },

    {
      id: 37,
      term: "Host Binding",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to Host Binding.",
      description:
        "Understanding Host Binding helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Host Binding",
    },

    {
      id: 38,
      term: "Host Listener",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to Host Listener.",
      description:
        "Understanding Host Listener helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Host Listener",
    },

    {
      id: 39,
      term: "Dynamic Components",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to Dynamic Components.",
      description:
        "Understanding Dynamic Components helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Dynamic Components",
    },

    {
      id: 40,
      term: "Component Lifecycle",
      category: "Components & Templates",
      definition:
        "A advanced-level Angular concept related to Component Lifecycle.",
      description:
        "Understanding Component Lifecycle helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Component Lifecycle",
    },

    // ========================================
    // SIGNALS & REACTIVITY
    // ========================================

    {
      id: 41,
      term: "Signal",
      category: "Signals & Reactivity",
      definition:
        "A reactive value that lets Angular track changes to application state.",
      description:
        "Signals provide a reactive state model in which Angular can track dependencies and update affected consumers.",
      difficulty: "Beginner",
      example: "count = signal(0)",
      featured: true,
    },

    {
      id: 42,
      term: "Writable Signal",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Writable Signal.",
      description:
        "Understanding Writable Signal helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Writable Signal",
    },

    {
      id: 43,
      term: "Signal Value",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Signal Value.",
      description:
        "Understanding Signal Value helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Signal Value",
    },

    {
      id: 44,
      term: "Reactive State",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Reactive State.",
      description:
        "Understanding Reactive State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Reactive State",
    },

    {
      id: 45,
      term: "Signal Update",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Signal Update.",
      description:
        "Understanding Signal Update helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Signal Update",
    },

    {
      id: 46,
      term: "Signal Read",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Signal Read.",
      description:
        "Understanding Signal Read helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Signal Read",
    },

    {
      id: 47,
      term: "Signal Write",
      category: "Signals & Reactivity",
      definition:
        "A beginner-level Angular concept related to Signal Write.",
      description:
        "Understanding Signal Write helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Signal Write",
    },

    {
      id: 48,
      term: "Computed Signal",
      category: "Signals & Reactivity",
      definition:
        "A read-only reactive value derived from other signals.",
      description:
        "Computed signals recalculate when the signals they depend on change.",
      difficulty: "Intermediate",
      example: "total = computed(() => price() * quantity())",
    },

    {
      id: 49,
      term: "Effect",
      category: "Signals & Reactivity",
      definition:
        "A reactive operation that runs when signals read by it change.",
      description:
        "Effects are useful when a signal change needs to trigger a side effect such as logging or synchronization.",
      difficulty: "Intermediate",
      example: "effect(() => console.log(count()))",
    },

    {
      id: 50,
      term: "Signal Dependency",
      category: "Signals & Reactivity",
      definition:
        "A intermediate-level Angular concept related to Signal Dependency.",
      description:
        "Understanding Signal Dependency helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Signal Dependency",
    },

    {
      id: 51,
      term: "Reactive Graph",
      category: "Signals & Reactivity",
      definition:
        "A intermediate-level Angular concept related to Reactive Graph.",
      description:
        "Understanding Reactive Graph helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Reactive Graph",
    },

    {
      id: 52,
      term: "Signal Equality",
      category: "Signals & Reactivity",
      definition:
        "A intermediate-level Angular concept related to Signal Equality.",
      description:
        "Understanding Signal Equality helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Signal Equality",
    },

    {
      id: 53,
      term: "Linked Signal",
      category: "Signals & Reactivity",
      definition:
        "A intermediate-level Angular concept related to Linked Signal.",
      description:
        "Understanding Linked Signal helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Linked Signal",
    },

    {
      id: 54,
      term: "Signal-Based Component State",
      category: "Signals & Reactivity",
      definition:
        "A intermediate-level Angular concept related to Signal-Based Component State.",
      description:
        "Understanding Signal-Based Component State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Signal-Based Component State",
    },

    {
      id: 55,
      term: "Signal Scheduler",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to Signal Scheduler.",
      description:
        "Understanding Signal Scheduler helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Signal Scheduler",
    },

    {
      id: 56,
      term: "Reactive Context",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to Reactive Context.",
      description:
        "Understanding Reactive Context helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Reactive Context",
    },

    {
      id: 57,
      term: "Signal Propagation",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to Signal Propagation.",
      description:
        "Understanding Signal Propagation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Signal Propagation",
    },

    {
      id: 58,
      term: "Dynamic Dependencies",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to Dynamic Dependencies.",
      description:
        "Understanding Dynamic Dependencies helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Dynamic Dependencies",
    },

    {
      id: 59,
      term: "RxJS Interop",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to RxJS Interop.",
      description:
        "Understanding RxJS Interop helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of RxJS Interop",
    },

    {
      id: 60,
      term: "toSignal / toObservable",
      category: "Signals & Reactivity",
      definition:
        "A advanced-level Angular concept related to toSignal / toObservable.",
      description:
        "Understanding toSignal / toObservable helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of toSignal / toObservable",
    },

    // ========================================
    // ROUTING & NAVIGATION
    // ========================================

    {
      id: 61,
      term: "Angular Router",
      category: "Routing & Navigation",
      definition:
        "The Angular routing system used to navigate between application views.",
      description:
        "Angular Router maps URL paths to components and supports parameters, guards, lazy loading, and navigation.",
      difficulty: "Beginner",
      example: "provideRouter(routes)",
      featured: true,
    },

    {
      id: 62,
      term: "Route",
      category: "Routing & Navigation",
      definition:
        "A beginner-level Angular concept related to Route.",
      description:
        "Understanding Route helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Route",
    },

    {
      id: 63,
      term: "RouterLink",
      category: "Routing & Navigation",
      definition:
        "A directive used to create navigation links within an Angular application.",
      description:
        "RouterLink enables client-side navigation between routes without a full browser reload.",
      difficulty: "Beginner",
      example: "[routerLink]=\"['/glossary', id]\"",
    },

    {
      id: 64,
      term: "Router Outlet",
      category: "Routing & Navigation",
      definition:
        "A beginner-level Angular concept related to Router Outlet.",
      description:
        "Understanding Router Outlet helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Router Outlet",
    },

    {
      id: 65,
      term: "Navigation",
      category: "Routing & Navigation",
      definition:
        "A beginner-level Angular concept related to Navigation.",
      description:
        "Understanding Navigation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Navigation",
    },

    {
      id: 66,
      term: "Route Path",
      category: "Routing & Navigation",
      definition:
        "A beginner-level Angular concept related to Route Path.",
      description:
        "Understanding Route Path helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Route Path",
    },

    {
      id: 67,
      term: "Default Route",
      category: "Routing & Navigation",
      definition:
        "A beginner-level Angular concept related to Default Route.",
      description:
        "Understanding Default Route helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Default Route",
    },

    {
      id: 68,
      term: "Route Parameter",
      category: "Routing & Navigation",
      definition:
        "A dynamic value included in a route URL.",
      description:
        "Route parameters allow a route to identify a specific resource or view from a URL value.",
      difficulty: "Intermediate",
      example: "path: 'glossary/:id'",
    },

    {
      id: 69,
      term: "Query Parameters",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Query Parameters.",
      description:
        "Understanding Query Parameters helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Query Parameters",
    },

    {
      id: 70,
      term: "Child Routes",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Child Routes.",
      description:
        "Understanding Child Routes helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Child Routes",
    },

    {
      id: 71,
      term: "Route Redirect",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Route Redirect.",
      description:
        "Understanding Route Redirect helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Route Redirect",
    },

    {
      id: 72,
      term: "Wildcard Route",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Wildcard Route.",
      description:
        "Understanding Wildcard Route helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Wildcard Route",
    },

    {
      id: 73,
      term: "Router Events",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Router Events.",
      description:
        "Understanding Router Events helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Router Events",
    },

    {
      id: 74,
      term: "Navigation Extras",
      category: "Routing & Navigation",
      definition:
        "A intermediate-level Angular concept related to Navigation Extras.",
      description:
        "Understanding Navigation Extras helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Navigation Extras",
    },

    {
      id: 75,
      term: "Route Guards",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Route Guards.",
      description:
        "Understanding Route Guards helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Route Guards",
    },

    {
      id: 76,
      term: "Resolve",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Resolve.",
      description:
        "Understanding Resolve helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Resolve",
    },

    {
      id: 77,
      term: "Lazy-Loaded Routes",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Lazy-Loaded Routes.",
      description:
        "Understanding Lazy-Loaded Routes helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Lazy-Loaded Routes",
    },

    {
      id: 78,
      term: "Preloading Strategy",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Preloading Strategy.",
      description:
        "Understanding Preloading Strategy helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Preloading Strategy",
    },

    {
      id: 79,
      term: "Functional Guards",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Functional Guards.",
      description:
        "Understanding Functional Guards helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Functional Guards",
    },

    {
      id: 80,
      term: "Custom Route Matcher",
      category: "Routing & Navigation",
      definition:
        "A advanced-level Angular concept related to Custom Route Matcher.",
      description:
        "Understanding Custom Route Matcher helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Custom Route Matcher",
    },

    // ========================================
    // SERVICES & DEPENDENCY INJECTION
    // ========================================

    {
      id: 81,
      term: "Service",
      category: "Services & Dependency Injection",
      definition:
        "A reusable class that contains shared application logic or functionality.",
      description:
        "Angular services are commonly used for data access, business logic, shared state, and reusable operations.",
      difficulty: "Beginner",
      example: "@Injectable({ providedIn: 'root' })",
      featured: true,
    },

    {
      id: 82,
      term: "Dependency Injection",
      category: "Services & Dependency Injection",
      definition:
        "A design pattern in which dependencies are provided to a class instead of being created by the class.",
      description:
        "Angular's dependency injection system manages services and other injectable dependencies.",
      difficulty: "Beginner",
      example: "constructor(private service: MyService) {}",
    },

    {
      id: 83,
      term: "Injectable",
      category: "Services & Dependency Injection",
      definition:
        "A decorator used to configure a class for Angular dependency injection.",
      description:
        "The @Injectable decorator provides metadata that allows Angular to create and inject a class.",
      difficulty: "Beginner",
      example: "@Injectable({ providedIn: 'root' })",
    },

    {
      id: 84,
      term: "Provider",
      category: "Services & Dependency Injection",
      definition:
        "A beginner-level Angular concept related to Provider.",
      description:
        "Understanding Provider helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Provider",
    },

    {
      id: 85,
      term: "Service Instance",
      category: "Services & Dependency Injection",
      definition:
        "A beginner-level Angular concept related to Service Instance.",
      description:
        "Understanding Service Instance helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Service Instance",
    },

    {
      id: 86,
      term: "Constructor Injection",
      category: "Services & Dependency Injection",
      definition:
        "A beginner-level Angular concept related to Constructor Injection.",
      description:
        "Understanding Constructor Injection helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Constructor Injection",
    },

    {
      id: 87,
      term: "Singleton Service",
      category: "Services & Dependency Injection",
      definition:
        "A beginner-level Angular concept related to Singleton Service.",
      description:
        "Understanding Singleton Service helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Singleton Service",
    },

    {
      id: 88,
      term: "InjectionToken",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to InjectionToken.",
      description:
        "Understanding InjectionToken helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of InjectionToken",
    },

    {
      id: 89,
      term: "Provider Configuration",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to Provider Configuration.",
      description:
        "Understanding Provider Configuration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Provider Configuration",
    },

    {
      id: 90,
      term: "Environment Provider",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to Environment Provider.",
      description:
        "Understanding Environment Provider helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Environment Provider",
    },

    {
      id: 91,
      term: "Hierarchical Injector",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to Hierarchical Injector.",
      description:
        "Understanding Hierarchical Injector helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Hierarchical Injector",
    },

    {
      id: 92,
      term: "Provider Scope",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to Provider Scope.",
      description:
        "Understanding Provider Scope helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Provider Scope",
    },

    {
      id: 93,
      term: "Injection Context",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to Injection Context.",
      description:
        "Understanding Injection Context helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Injection Context",
    },

    {
      id: 94,
      term: "inject Function",
      category: "Services & Dependency Injection",
      definition:
        "A intermediate-level Angular concept related to inject Function.",
      description:
        "Understanding inject Function helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of inject Function",
    },

    {
      id: 95,
      term: "Environment Injector",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to Environment Injector.",
      description:
        "Understanding Environment Injector helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Environment Injector",
    },

    {
      id: 96,
      term: "Element Injector",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to Element Injector.",
      description:
        "Understanding Element Injector helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Element Injector",
    },

    {
      id: 97,
      term: "NullInjector",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to NullInjector.",
      description:
        "Understanding NullInjector helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of NullInjector",
    },

    {
      id: 98,
      term: "Optional Injection",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to Optional Injection.",
      description:
        "Understanding Optional Injection helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Optional Injection",
    },

    {
      id: 99,
      term: "Self Injection",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to Self Injection.",
      description:
        "Understanding Self Injection helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Self Injection",
    },

    {
      id: 100,
      term: "SkipSelf Injection",
      category: "Services & Dependency Injection",
      definition:
        "A advanced-level Angular concept related to SkipSelf Injection.",
      description:
        "Understanding SkipSelf Injection helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of SkipSelf Injection",
    },

    // ========================================
    // FORMS & USER INPUT
    // ========================================

    {
      id: 101,
      term: "Angular Forms",
      category: "Forms & User Input",
      definition:
        "A beginner-level Angular concept related to Angular Forms.",
      description:
        "Understanding Angular Forms helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Forms",
      featured: true,
    },

    {
      id: 102,
      term: "Template-Driven Forms",
      category: "Forms & User Input",
      definition:
        "A beginner-level Angular concept related to Template-Driven Forms.",
      description:
        "Understanding Template-Driven Forms helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Template-Driven Forms",
    },

    {
      id: 103,
      term: "Reactive Forms",
      category: "Forms & User Input",
      definition:
        "A model-driven approach for creating and managing Angular forms.",
      description:
        "Reactive forms provide explicit control over form state, values, and validation in TypeScript.",
      difficulty: "Beginner",
      example: "new FormControl('')",
    },

    {
      id: 104,
      term: "FormControl",
      category: "Forms & User Input",
      definition:
        "A class that tracks the value and validation state of an individual form control.",
      description:
        "FormControl is a fundamental building block of Angular reactive forms.",
      difficulty: "Beginner",
      example: "name = new FormControl('')",
    },

    {
      id: 105,
      term: "FormGroup",
      category: "Forms & User Input",
      definition:
        "A beginner-level Angular concept related to FormGroup.",
      description:
        "Understanding FormGroup helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of FormGroup",
    },

    {
      id: 106,
      term: "FormBuilder",
      category: "Forms & User Input",
      definition:
        "A beginner-level Angular concept related to FormBuilder.",
      description:
        "Understanding FormBuilder helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of FormBuilder",
    },

    {
      id: 107,
      term: "Form Validation",
      category: "Forms & User Input",
      definition:
        "A beginner-level Angular concept related to Form Validation.",
      description:
        "Understanding Form Validation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Form Validation",
    },

    {
      id: 108,
      term: "FormArray",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to FormArray.",
      description:
        "Understanding FormArray helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of FormArray",
    },

    {
      id: 109,
      term: "Validators",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to Validators.",
      description:
        "Understanding Validators helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Validators",
    },

    {
      id: 110,
      term: "Custom Validator",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to Custom Validator.",
      description:
        "Understanding Custom Validator helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Custom Validator",
    },

    {
      id: 111,
      term: "Async Validator",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to Async Validator.",
      description:
        "Understanding Async Validator helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Async Validator",
    },

    {
      id: 112,
      term: "Form State",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to Form State.",
      description:
        "Understanding Form State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Form State",
    },

    {
      id: 113,
      term: "FormControl State",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to FormControl State.",
      description:
        "Understanding FormControl State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of FormControl State",
    },

    {
      id: 114,
      term: "Typed Forms",
      category: "Forms & User Input",
      definition:
        "A intermediate-level Angular concept related to Typed Forms.",
      description:
        "Understanding Typed Forms helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Typed Forms",
    },

    {
      id: 115,
      term: "ControlValueAccessor",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to ControlValueAccessor.",
      description:
        "Understanding ControlValueAccessor helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of ControlValueAccessor",
    },

    {
      id: 116,
      term: "Custom Form Control",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to Custom Form Control.",
      description:
        "Understanding Custom Form Control helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Custom Form Control",
    },

    {
      id: 117,
      term: "Dynamic Forms",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to Dynamic Forms.",
      description:
        "Understanding Dynamic Forms helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Dynamic Forms",
    },

    {
      id: 118,
      term: "Cross-Field Validation",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to Cross-Field Validation.",
      description:
        "Understanding Cross-Field Validation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Cross-Field Validation",
    },

    {
      id: 119,
      term: "Async Validation Pipeline",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to Async Validation Pipeline.",
      description:
        "Understanding Async Validation Pipeline helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Async Validation Pipeline",
    },

    {
      id: 120,
      term: "Form Directive Integration",
      category: "Forms & User Input",
      definition:
        "A advanced-level Angular concept related to Form Directive Integration.",
      description:
        "Understanding Form Directive Integration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Form Directive Integration",
    },

    // ========================================
    // HTTP & API INTEGRATION
    // ========================================

    {
      id: 121,
      term: "HttpClient",
      category: "HTTP & API Integration",
      definition:
        "An Angular service used to communicate with HTTP-based backend services.",
      description:
        "HttpClient provides methods for sending HTTP requests and receiving typed responses from APIs.",
      difficulty: "Beginner",
      example: "http.get('/api/terms')",
      featured: true,
    },

    {
      id: 122,
      term: "HTTP Request",
      category: "HTTP & API Integration",
      definition:
        "A beginner-level Angular concept related to HTTP Request.",
      description:
        "Understanding HTTP Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of HTTP Request",
    },

    {
      id: 123,
      term: "HTTP Response",
      category: "HTTP & API Integration",
      definition:
        "A beginner-level Angular concept related to HTTP Response.",
      description:
        "Understanding HTTP Response helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of HTTP Response",
    },

    {
      id: 124,
      term: "REST API",
      category: "HTTP & API Integration",
      definition:
        "An HTTP-based application programming interface that follows REST architectural principles.",
      description:
        "Angular applications commonly communicate with backend resources through REST APIs.",
      difficulty: "Beginner",
      example: "GET /api/terms",
    },

    {
      id: 125,
      term: "GET Request",
      category: "HTTP & API Integration",
      definition:
        "A beginner-level Angular concept related to GET Request.",
      description:
        "Understanding GET Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of GET Request",
    },

    {
      id: 126,
      term: "POST Request",
      category: "HTTP & API Integration",
      definition:
        "A beginner-level Angular concept related to POST Request.",
      description:
        "Understanding POST Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of POST Request",
    },

    {
      id: 127,
      term: "API Endpoint",
      category: "HTTP & API Integration",
      definition:
        "A beginner-level Angular concept related to API Endpoint.",
      description:
        "Understanding API Endpoint helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of API Endpoint",
    },

    {
      id: 128,
      term: "PUT Request",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to PUT Request.",
      description:
        "Understanding PUT Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of PUT Request",
    },

    {
      id: 129,
      term: "PATCH Request",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to PATCH Request.",
      description:
        "Understanding PATCH Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of PATCH Request",
    },

    {
      id: 130,
      term: "DELETE Request",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to DELETE Request.",
      description:
        "Understanding DELETE Request helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of DELETE Request",
    },

    {
      id: 131,
      term: "HttpHeaders",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to HttpHeaders.",
      description:
        "Understanding HttpHeaders helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of HttpHeaders",
    },

    {
      id: 132,
      term: "HttpParams",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to HttpParams.",
      description:
        "Understanding HttpParams helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of HttpParams",
    },

    {
      id: 133,
      term: "HTTP Error Handling",
      category: "HTTP & API Integration",
      definition:
        "A intermediate-level Angular concept related to HTTP Error Handling.",
      description:
        "Understanding HTTP Error Handling helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of HTTP Error Handling",
    },

    {
      id: 134,
      term: "HTTP Interceptor",
      category: "HTTP & API Integration",
      definition:
        "A mechanism that can inspect and modify HTTP requests and responses.",
      description:
        "Interceptors are commonly used for authentication headers, logging, caching, and centralized error handling.",
      difficulty: "Intermediate",
      example: "withInterceptors([authInterceptor])",
    },

    {
      id: 135,
      term: "Functional Interceptor",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to Functional Interceptor.",
      description:
        "Understanding Functional Interceptor helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Functional Interceptor",
    },

    {
      id: 136,
      term: "Request Context",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to Request Context.",
      description:
        "Understanding Request Context helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Request Context",
    },

    {
      id: 137,
      term: "HTTP Transfer Cache",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to HTTP Transfer Cache.",
      description:
        "Understanding HTTP Transfer Cache helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of HTTP Transfer Cache",
    },

    {
      id: 138,
      term: "Retry Strategy",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to Retry Strategy.",
      description:
        "Understanding Retry Strategy helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Retry Strategy",
    },

    {
      id: 139,
      term: "API Authentication",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to API Authentication.",
      description:
        "Understanding API Authentication helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of API Authentication",
    },

    {
      id: 140,
      term: "HTTP Interceptor Chain",
      category: "HTTP & API Integration",
      definition:
        "A advanced-level Angular concept related to HTTP Interceptor Chain.",
      description:
        "Understanding HTTP Interceptor Chain helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of HTTP Interceptor Chain",
    },

    // ========================================
    // STATE MANAGEMENT
    // ========================================

    {
      id: 141,
      term: "Component State",
      category: "State Management",
      definition:
        "Data maintained by a component that represents its current state.",
      description:
        "Component state can be represented with properties, signals, or other reactive mechanisms.",
      difficulty: "Beginner",
      example: "count = signal(0)",
      featured: true,
    },

    {
      id: 142,
      term: "Local State",
      category: "State Management",
      definition:
        "A beginner-level Angular concept related to Local State.",
      description:
        "Understanding Local State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Local State",
    },

    {
      id: 143,
      term: "Shared State",
      category: "State Management",
      definition:
        "Application data that needs to be accessed or updated by multiple components.",
      description:
        "Shared state can be coordinated through services, signals, or dedicated state management libraries.",
      difficulty: "Beginner",
      example: "stateService.user()",
    },

    {
      id: 144,
      term: "Application State",
      category: "State Management",
      definition:
        "A beginner-level Angular concept related to Application State.",
      description:
        "Understanding Application State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Application State",
    },

    {
      id: 145,
      term: "State Update",
      category: "State Management",
      definition:
        "A beginner-level Angular concept related to State Update.",
      description:
        "Understanding State Update helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of State Update",
    },

    {
      id: 146,
      term: "State Initialization",
      category: "State Management",
      definition:
        "A beginner-level Angular concept related to State Initialization.",
      description:
        "Understanding State Initialization helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of State Initialization",
    },

    {
      id: 147,
      term: "State Synchronization",
      category: "State Management",
      definition:
        "A beginner-level Angular concept related to State Synchronization.",
      description:
        "Understanding State Synchronization helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of State Synchronization",
    },

    {
      id: 148,
      term: "Signal State",
      category: "State Management",
      definition:
        "Application state represented using Angular signals.",
      description:
        "Signals provide a lightweight reactive approach for managing local and shared application state.",
      difficulty: "Intermediate",
      example: "todos = signal<Todo[]>([])",
    },

    {
      id: 149,
      term: "State Service",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to State Service.",
      description:
        "Understanding State Service helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of State Service",
    },

    {
      id: 150,
      term: "Reactive State",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to Reactive State.",
      description:
        "Understanding Reactive State helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Reactive State",
    },

    {
      id: 151,
      term: "State Derivation",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to State Derivation.",
      description:
        "Understanding State Derivation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of State Derivation",
    },

    {
      id: 152,
      term: "State Mutation",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to State Mutation.",
      description:
        "Understanding State Mutation helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of State Mutation",
    },

    {
      id: 153,
      term: "State Persistence",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to State Persistence.",
      description:
        "Understanding State Persistence helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of State Persistence",
    },

    {
      id: 154,
      term: "State Selector",
      category: "State Management",
      definition:
        "A intermediate-level Angular concept related to State Selector.",
      description:
        "Understanding State Selector helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of State Selector",
    },

    {
      id: 155,
      term: "NgRx",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to NgRx.",
      description:
        "Understanding NgRx helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of NgRx",
    },

    {
      id: 156,
      term: "Store",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to Store.",
      description:
        "Understanding Store helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Store",
    },

    {
      id: 157,
      term: "Actions",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to Actions.",
      description:
        "Understanding Actions helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Actions",
    },

    {
      id: 158,
      term: "Reducer",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to Reducer.",
      description:
        "Understanding Reducer helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Reducer",
    },

    {
      id: 159,
      term: "Effects",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to Effects.",
      description:
        "Understanding Effects helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Effects",
    },

    {
      id: 160,
      term: "Entity State Management",
      category: "State Management",
      definition:
        "A advanced-level Angular concept related to Entity State Management.",
      description:
        "Understanding Entity State Management helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Entity State Management",
    },

    // ========================================
    // ANGULAR ARCHITECTURE
    // ========================================

    {
      id: 161,
      term: "Angular Architecture",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Angular Architecture.",
      description:
        "Understanding Angular Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Angular Architecture",
      featured: true,
    },

    {
      id: 162,
      term: "Component-Based Architecture",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Component-Based Architecture.",
      description:
        "Understanding Component-Based Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Component-Based Architecture",
    },

    {
      id: 163,
      term: "Feature",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Feature.",
      description:
        "Understanding Feature helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Feature",
    },

    {
      id: 164,
      term: "Shared Component",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Shared Component.",
      description:
        "Understanding Shared Component helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Shared Component",
    },

    {
      id: 165,
      term: "Core Services",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Core Services.",
      description:
        "Understanding Core Services helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Core Services",
    },

    {
      id: 166,
      term: "Application Configuration",
      category: "Angular Architecture",
      definition:
        "A beginner-level Angular concept related to Application Configuration.",
      description:
        "Understanding Application Configuration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Application Configuration",
    },

    {
      id: 167,
      term: "Bootstrap Application",
      category: "Angular Architecture",
      definition:
        "The process of starting an Angular application with its root component and configuration.",
      description:
        "Modern standalone applications can be started with bootstrapApplication.",
      difficulty: "Beginner",
      example: "bootstrapApplication(App, appConfig)",
    },

    {
      id: 168,
      term: "Feature-Based Architecture",
      category: "Angular Architecture",
      definition:
        "An organization strategy that groups application code around features or business capabilities.",
      description:
        "Feature-based structure can improve maintainability by keeping related components, services, and models together.",
      difficulty: "Intermediate",
      example: "pages/glossary/",
    },

    {
      id: 169,
      term: "Smart Component",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Smart Component.",
      description:
        "Understanding Smart Component helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Smart Component",
    },

    {
      id: 170,
      term: "Presentational Component",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Presentational Component.",
      description:
        "Understanding Presentational Component helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Presentational Component",
    },

    {
      id: 171,
      term: "Shared Utilities",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Shared Utilities.",
      description:
        "Understanding Shared Utilities helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Shared Utilities",
    },

    {
      id: 172,
      term: "Dependency Graph",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Dependency Graph.",
      description:
        "Understanding Dependency Graph helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Dependency Graph",
    },

    {
      id: 173,
      term: "Application Providers",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Application Providers.",
      description:
        "Understanding Application Providers helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Application Providers",
    },

    {
      id: 174,
      term: "Standalone Architecture",
      category: "Angular Architecture",
      definition:
        "A intermediate-level Angular concept related to Standalone Architecture.",
      description:
        "Understanding Standalone Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Standalone Architecture",
    },

    {
      id: 175,
      term: "Domain-Driven Angular Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Domain-Driven Angular Architecture.",
      description:
        "Understanding Domain-Driven Angular Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Domain-Driven Angular Architecture",
    },

    {
      id: 176,
      term: "Layered Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Layered Architecture.",
      description:
        "Understanding Layered Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Layered Architecture",
    },

    {
      id: 177,
      term: "Clean Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Clean Architecture.",
      description:
        "Understanding Clean Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Clean Architecture",
    },

    {
      id: 178,
      term: "Modular Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Modular Architecture.",
      description:
        "Understanding Modular Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Modular Architecture",
    },

    {
      id: 179,
      term: "Monorepo Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Monorepo Architecture.",
      description:
        "Understanding Monorepo Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Monorepo Architecture",
    },

    {
      id: 180,
      term: "Micro Frontend Architecture",
      category: "Angular Architecture",
      definition:
        "A advanced-level Angular concept related to Micro Frontend Architecture.",
      description:
        "Understanding Micro Frontend Architecture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Micro Frontend Architecture",
    },

    // ========================================
    // TYPESCRIPT FOR ANGULAR
    // ========================================

    {
      id: 181,
      term: "TypeScript",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to TypeScript.",
      description:
        "Understanding TypeScript helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of TypeScript",
      featured: true,
    },

    {
      id: 182,
      term: "Type",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to Type.",
      description:
        "Understanding Type helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Type",
    },

    {
      id: 183,
      term: "Interface",
      category: "TypeScript for Angular",
      definition:
        "A TypeScript structure used to describe the shape of an object.",
      description:
        "Interfaces are commonly used in Angular projects to define models and contracts.",
      difficulty: "Beginner",
      example: "interface User { name: string; }",
    },

    {
      id: 184,
      term: "Class",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to Class.",
      description:
        "Understanding Class helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Class",
    },

    {
      id: 185,
      term: "Function",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to Function.",
      description:
        "Understanding Function helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Function",
    },

    {
      id: 186,
      term: "Array Type",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to Array Type.",
      description:
        "Understanding Array Type helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Array Type",
    },

    {
      id: 187,
      term: "Union Type",
      category: "TypeScript for Angular",
      definition:
        "A beginner-level Angular concept related to Union Type.",
      description:
        "Understanding Union Type helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Union Type",
    },

    {
      id: 188,
      term: "Generic",
      category: "TypeScript for Angular",
      definition:
        "A TypeScript feature that allows reusable code to work with different types.",
      description:
        "Generics provide flexibility while preserving compile-time type safety.",
      difficulty: "Intermediate",
      example: "Array<string>",
    },

    {
      id: 189,
      term: "Enum",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Enum.",
      description:
        "Understanding Enum helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Enum",
    },

    {
      id: 190,
      term: "Type Alias",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Type Alias.",
      description:
        "Understanding Type Alias helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Type Alias",
    },

    {
      id: 191,
      term: "Optional Property",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Optional Property.",
      description:
        "Understanding Optional Property helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Optional Property",
    },

    {
      id: 192,
      term: "Access Modifier",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Access Modifier.",
      description:
        "Understanding Access Modifier helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Access Modifier",
    },

    {
      id: 193,
      term: "Type Assertion",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Type Assertion.",
      description:
        "Understanding Type Assertion helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Type Assertion",
    },

    {
      id: 194,
      term: "Utility Types",
      category: "TypeScript for Angular",
      definition:
        "A intermediate-level Angular concept related to Utility Types.",
      description:
        "Understanding Utility Types helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Utility Types",
    },

    {
      id: 195,
      term: "Conditional Types",
      category: "TypeScript for Angular",
      definition:
        "A advanced-level Angular concept related to Conditional Types.",
      description:
        "Understanding Conditional Types helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Conditional Types",
    },

    {
      id: 196,
      term: "Mapped Types",
      category: "TypeScript for Angular",
      definition:
        "A advanced-level Angular concept related to Mapped Types.",
      description:
        "Understanding Mapped Types helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Mapped Types",
    },

    {
      id: 197,
      term: "Template Literal Types",
      category: "TypeScript for Angular",
      definition:
        "A advanced-level Angular concept related to Template Literal Types.",
      description:
        "Understanding Template Literal Types helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Template Literal Types",
    },

    {
      id: 198,
      term: "Type Guards",
      category: "TypeScript for Angular",
      definition:
        "A advanced-level Angular concept related to Type Guards.",
      description:
        "Understanding Type Guards helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Type Guards",
    },

    {
      id: 199,
      term: "Decorator",
      category: "TypeScript for Angular",
      definition:
        "A special TypeScript declaration that supplies metadata or modifies a class or member.",
      description:
        "Angular uses decorators such as @Component and @Injectable to describe framework behavior.",
      difficulty: "Advanced",
      example: "@Component({ selector: 'app-home' })",
    },

    {
      id: 200,
      term: "Dependency Type Inference",
      category: "TypeScript for Angular",
      definition:
        "A advanced-level Angular concept related to Dependency Type Inference.",
      description:
        "Understanding Dependency Type Inference helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Dependency Type Inference",
    },

    // ========================================
    // ANGULAR PERFORMANCE
    // ========================================

    {
      id: 201,
      term: "Change Detection",
      category: "Angular Performance",
      definition:
        "The process Angular uses to detect state changes and update the rendered view.",
      description:
        "Understanding change detection helps developers build responsive and efficient Angular applications.",
      difficulty: "Beginner",
      example: "ChangeDetectionStrategy.OnPush",
      featured: true,
    },

    {
      id: 202,
      term: "Change Detection Cycle",
      category: "Angular Performance",
      definition:
        "A beginner-level Angular concept related to Change Detection Cycle.",
      description:
        "Understanding Change Detection Cycle helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Change Detection Cycle",
    },

    {
      id: 203,
      term: "Lazy Loading",
      category: "Angular Performance",
      definition:
        "A technique that loads application code only when it is needed.",
      description:
        "Lazy loading can reduce the initial JavaScript payload by loading routes or components on demand.",
      difficulty: "Beginner",
      example: "loadComponent: () => import('./pages/home/home')",
    },

    {
      id: 204,
      term: "Bundle Size",
      category: "Angular Performance",
      definition:
        "A beginner-level Angular concept related to Bundle Size.",
      description:
        "Understanding Bundle Size helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Bundle Size",
    },

    {
      id: 205,
      term: "Production Build",
      category: "Angular Performance",
      definition:
        "An optimized build of an Angular application intended for deployment.",
      description:
        "Production builds optimize application assets and prepare the project for a hosting environment.",
      difficulty: "Beginner",
      example: "ng build",
    },

    {
      id: 206,
      term: "Browser Rendering",
      category: "Angular Performance",
      definition:
        "A beginner-level Angular concept related to Browser Rendering.",
      description:
        "Understanding Browser Rendering helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Browser Rendering",
    },

    {
      id: 207,
      term: "Performance Budget",
      category: "Angular Performance",
      definition:
        "A beginner-level Angular concept related to Performance Budget.",
      description:
        "Understanding Performance Budget helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Performance Budget",
    },

    {
      id: 208,
      term: "OnPush Change Detection",
      category: "Angular Performance",
      definition:
        "A change detection strategy that can reduce unnecessary component checking.",
      description:
        "OnPush allows Angular to check a component under defined change conditions and can improve rendering efficiency.",
      difficulty: "Intermediate",
      example: "changeDetection: ChangeDetectionStrategy.OnPush",
    },

    {
      id: 209,
      term: "TrackBy",
      category: "Angular Performance",
      definition:
        "A intermediate-level Angular concept related to TrackBy.",
      description:
        "Understanding TrackBy helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of TrackBy",
    },

    {
      id: 210,
      term: "Deferrable Views",
      category: "Angular Performance",
      definition:
        "Angular template functionality for deferring the loading and rendering of part of an application.",
      description:
        "Deferrable views can postpone non-critical work and improve initial loading performance.",
      difficulty: "Intermediate",
      example: "@defer { <app-heavy-component /> }",
    },

    {
      id: 211,
      term: "Code Splitting",
      category: "Angular Performance",
      definition:
        "A intermediate-level Angular concept related to Code Splitting.",
      description:
        "Understanding Code Splitting helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Code Splitting",
    },

    {
      id: 212,
      term: "Route Lazy Loading",
      category: "Angular Performance",
      definition:
        "A intermediate-level Angular concept related to Route Lazy Loading.",
      description:
        "Understanding Route Lazy Loading helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Route Lazy Loading",
    },

    {
      id: 213,
      term: "Preloading",
      category: "Angular Performance",
      definition:
        "A intermediate-level Angular concept related to Preloading.",
      description:
        "Understanding Preloading helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Preloading",
    },

    {
      id: 214,
      term: "Image Optimization",
      category: "Angular Performance",
      definition:
        "A intermediate-level Angular concept related to Image Optimization.",
      description:
        "Understanding Image Optimization helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Image Optimization",
    },

    {
      id: 215,
      term: "Zoneless Angular",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Zoneless Angular.",
      description:
        "Understanding Zoneless Angular helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Zoneless Angular",
    },

    {
      id: 216,
      term: "Hydration",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Hydration.",
      description:
        "Understanding Hydration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Hydration",
    },

    {
      id: 217,
      term: "Incremental Hydration",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Incremental Hydration.",
      description:
        "Understanding Incremental Hydration helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Incremental Hydration",
    },

    {
      id: 218,
      term: "Server-Side Rendering",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Server-Side Rendering.",
      description:
        "Understanding Server-Side Rendering helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Server-Side Rendering",
    },

    {
      id: 219,
      term: "Web Vitals Optimization",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Web Vitals Optimization.",
      description:
        "Understanding Web Vitals Optimization helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Web Vitals Optimization",
    },

    {
      id: 220,
      term: "Runtime Performance Profiling",
      category: "Angular Performance",
      definition:
        "A advanced-level Angular concept related to Runtime Performance Profiling.",
      description:
        "Understanding Runtime Performance Profiling helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Runtime Performance Profiling",
    },

    // ========================================
    // TESTING & DEPLOYMENT
    // ========================================

    {
      id: 221,
      term: "Angular Testing",
      category: "Testing & Deployment",
      definition:
        "The practice of testing Angular components, services, and application behavior.",
      description:
        "Angular testing helps verify that application functionality behaves as expected.",
      difficulty: "Beginner",
      example: "describe('Home', () => {})",
      featured: true,
    },

    {
      id: 222,
      term: "Unit Test",
      category: "Testing & Deployment",
      definition:
        "A beginner-level Angular concept related to Unit Test.",
      description:
        "Understanding Unit Test helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Unit Test",
    },

    {
      id: 223,
      term: "TestBed",
      category: "Testing & Deployment",
      definition:
        "An Angular testing utility used to configure and create testing environments.",
      description:
        "TestBed provides APIs for configuring dependencies and creating component fixtures in tests.",
      difficulty: "Beginner",
      example: "TestBed.configureTestingModule({})",
    },

    {
      id: 224,
      term: "Test Case",
      category: "Testing & Deployment",
      definition:
        "A beginner-level Angular concept related to Test Case.",
      description:
        "Understanding Test Case helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Test Case",
    },

    {
      id: 225,
      term: "Test Suite",
      category: "Testing & Deployment",
      definition:
        "A beginner-level Angular concept related to Test Suite.",
      description:
        "Understanding Test Suite helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Test Suite",
    },

    {
      id: 226,
      term: "Assertion",
      category: "Testing & Deployment",
      definition:
        "A beginner-level Angular concept related to Assertion.",
      description:
        "Understanding Assertion helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Assertion",
    },

    {
      id: 227,
      term: "Component Testing",
      category: "Testing & Deployment",
      definition:
        "A beginner-level Angular concept related to Component Testing.",
      description:
        "Understanding Component Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Beginner",
      example: "// Example usage of Component Testing",
    },

    {
      id: 228,
      term: "Service Testing",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Service Testing.",
      description:
        "Understanding Service Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Service Testing",
    },

    {
      id: 229,
      term: "Dependency Mocking",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Dependency Mocking.",
      description:
        "Understanding Dependency Mocking helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Dependency Mocking",
    },

    {
      id: 230,
      term: "Spy",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Spy.",
      description:
        "Understanding Spy helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Spy",
    },

    {
      id: 231,
      term: "Test Fixture",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Test Fixture.",
      description:
        "Understanding Test Fixture helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Test Fixture",
    },

    {
      id: 232,
      term: "Integration Testing",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Integration Testing.",
      description:
        "Understanding Integration Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Integration Testing",
    },

    {
      id: 233,
      term: "Router Testing",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to Router Testing.",
      description:
        "Understanding Router Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of Router Testing",
    },

    {
      id: 234,
      term: "HTTP Testing",
      category: "Testing & Deployment",
      definition:
        "A intermediate-level Angular concept related to HTTP Testing.",
      description:
        "Understanding HTTP Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Intermediate",
      example: "// Example usage of HTTP Testing",
    },

    {
      id: 235,
      term: "End-to-End Testing",
      category: "Testing & Deployment",
      definition:
        "A advanced-level Angular concept related to End-to-End Testing.",
      description:
        "Understanding End-to-End Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of End-to-End Testing",
    },

    {
      id: 236,
      term: "CI/CD Testing",
      category: "Testing & Deployment",
      definition:
        "A advanced-level Angular concept related to CI/CD Testing.",
      description:
        "Understanding CI/CD Testing helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of CI/CD Testing",
    },

    {
      id: 237,
      term: "Production Build",
      category: "Testing & Deployment",
      definition:
        "An optimized build of an Angular application intended for deployment.",
      description:
        "Production builds optimize application assets and prepare the project for a hosting environment.",
      difficulty: "Advanced",
      example: "ng build",
    },

    {
      id: 238,
      term: "Angular Deployment",
      category: "Testing & Deployment",
      definition:
        "The process of publishing a built Angular application to a hosting environment.",
      description:
        "Angular applications can be deployed to static hosting platforms and other web hosting environments.",
      difficulty: "Advanced",
      example: "ng build --output-path dist",
    },

    {
      id: 239,
      term: "Static Hosting",
      category: "Testing & Deployment",
      definition:
        "A advanced-level Angular concept related to Static Hosting.",
      description:
        "Understanding Static Hosting helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Static Hosting",
    },

    {
      id: 240,
      term: "Deployment Pipeline",
      category: "Testing & Deployment",
      definition:
        "A advanced-level Angular concept related to Deployment Pipeline.",
      description:
        "Understanding Deployment Pipeline helps developers build, organize, optimize, or maintain Angular applications.",
      difficulty: "Advanced",
      example: "// Example usage of Deployment Pipeline"
    }

  ];

  private readonly favoritesKey =
    'tech-glossary-hub-favorites';

  getTerms(): GlossaryTerm[] {
    return this.terms;
  }

  getFavoriteIds(): number[] {
    const storedFavorites =
      localStorage.getItem(this.favoritesKey);

    if (!storedFavorites) {
      return [];
    }

    try {
      const parsed = JSON.parse(storedFavorites);

      return Array.isArray(parsed)
        ? parsed.map(Number).filter(id => !Number.isNaN(id))
        : [];
    } catch {
      return [];
    }
  }

  isFavorite(termId: number): boolean {
    return this.getFavoriteIds().includes(termId);
  }

  toggleFavorite(termId: number): void {
    const favorites = this.getFavoriteIds();
    const index = favorites.indexOf(termId);

    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      favorites.push(termId);
    }

    localStorage.setItem(
      this.favoritesKey,
      JSON.stringify(favorites)
    );
  }

  getFavoriteTerms(): GlossaryTerm[] {
    const favoriteIds = this.getFavoriteIds();

    return this.terms.filter(term =>
      favoriteIds.includes(term.id)
    );
  }

  getFavoriteCount(): number {
    return this.getFavoriteIds().length;
  }

}