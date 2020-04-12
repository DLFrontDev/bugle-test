export interface Trainee {
  id: number;
  avatar: string;
  name: string;
  email: string;
  attended: boolean;
  passed: boolean;
}

export interface Slide {
  id: number;
  sort: number;
  path: string;
  alt: string;
}
