export interface SolutionItem {
  title: string;
  desc: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  image: string;
  previewImage: string;
  alt: string;
  description: string;
  challenge: string;
  approach: string;
  Development: string;
  Results: string;
  Solution: SolutionItem[];
}