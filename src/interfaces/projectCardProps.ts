export interface projectCardProps {
  id: string;
  name: string;
  description: string;
  timezone: string;
  startDate: Date;
  location: string;
  services: {
    icon: string;
    name: string;
  }[];
  story: string;
}
