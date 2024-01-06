export interface IModel {
  id: number;
  user: string;
  title: string;
  description: string;
  details: string;
  inferences: number;
  ratings: {
    stars: number;
  };
}
