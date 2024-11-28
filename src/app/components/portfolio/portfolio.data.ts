import { Project } from './portfolio.types';

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Blog Personal',
    description: 'Blog minimalista con sistema de gestión de contenidos, categorías dinámicas, newsletter integrado y panel de administración personalizado. Optimizado para SEO y rendimiento.',
    shortDescription: 'Blog moderno con diseño minimalista y gestión de contenidos avanzada',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    category: 'Blog',
    technologies: ['Angular', 'Firebase', 'Tailwind CSS', 'SEO'],
    link: '/example/blog'
  },
  {
    title: 'Portafolio Fotógrafo',
    description: 'Sitio web elegante para fotógrafos profesionales con galería interactiva, sistema de reservas integrado y presentación de trabajos con efectos visuales cautivadores.',
    shortDescription: 'Portafolio visual con diseño elegante y funcionalidades premium',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    category: 'Landing Page',
    technologies: ['Angular', 'Tailwind CSS', 'Animaciones', 'Galería'],
    link: '/example/photographer'
  },
  {
    title: 'Landing Page Producto',
    description: 'Página de aterrizaje moderna para productos digitales con alto índice de conversión, animaciones suaves y diseño optimizado para captación de leads.',
    shortDescription: 'Landing page optimizada para conversión y engagement',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Landing Page',
    technologies: ['Angular', 'Tailwind CSS', 'Marketing', 'Analytics'],
    link: '/example/landing'
  },
  {
    title: 'Barbería Premium',
    description: 'Sitio web profesional para barberías con sistema de reservas en tiempo real, galería de trabajos y gestión completa de citas y servicios.',
    shortDescription: 'Web para barbería con sistema de reservas avanzado',
    image: 'https://images.unsplash.com/photo-1678356164573-9a534fe43958',
    category: 'Servicios',
    technologies: ['Angular', 'Firebase', 'Sistema de Reservas', 'Pagos'],
    link: '/example/barber'
  },
  {
    title: 'Tienda Online',
    description: 'E-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos integrada y panel de administración para gestión de inventario.',
    shortDescription: 'Tienda online moderna con todas las funcionalidades necesarias',
    image: 'https://images.unsplash.com/photo-1688561807971-728cd39eb71c',
    category: 'E-commerce',
    technologies: ['Angular', 'Stripe', 'Firebase', 'Dashboard'],
    link: '/example/shop'
  },
  {
    title: 'Restaurante Gourmet',
    description: 'Sitio web elegante para restaurantes con menú digital interactivo, sistema de reservas y presentación visual de alta calidad para la experiencia gastronómica.',
    shortDescription: 'Web premium para restaurantes con funcionalidades exclusivas',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    category: 'Servicios',
    technologies: ['Angular', 'Animaciones', 'Reservas', 'Menu Digital'],
    link: '/example/restaurant'
  }
];