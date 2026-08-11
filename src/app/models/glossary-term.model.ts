export interface GlossaryTerm {
  id: number;
  term: string;
  category: string;
  definition: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  syntax?: string;
  example?: string;
  relatedTerms?: string[];
  featured?: boolean;
}