export interface projectsProps {
  id: number;
  image: string;
  projectName: string;
  description: string;
  date: string;
  startDate: string;
  location: string;
  projectServices: {
    services: {
      name: string;
      icon: string;
    }[];
    images: string[];
  };
}
