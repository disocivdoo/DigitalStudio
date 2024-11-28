export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: any;
}