import type {
  Category,
  City,
  Event,
  Favorite,
  Image,
  Notification,
  Place,
  Review,
  Role,
  User,
} from '@/types';

// =========================
// ROLES
// =========================

export const roles: Role[] = [
  {
    id: 1,
    name: 'admin',
    label: 'Administrator',
    description: 'Full system access',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'user',
    label: 'User',
    description: 'Regular user access',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// USERS
// =========================

export const users: User[] = [
  {
    id: 1,
    role_id: 2,
    name: 'Juan García',
    email: 'juan@example.com',
    password: 'hashed_password',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// CITIES
// =========================

export const cities: City[] = [
  {
    id: 1,
    name: 'Bogotá',
    description: 'La capital de Colombia, ubicada en los Andes con museos de clase mundial y cultura vibrante.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Cartagena',
    description: 'Joya del Caribe con arquitectura colonial y playas hermosas en la costa caribeña.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'Santa Marta',
    description: 'Puerta a las montañas de la Ciudad Perdida y playas vírgenes.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: 'Medellín',
    description: 'La ciudad de la eterna primavera, transformación urbana y cultura innovadora.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: 'Tayrona',
    description: 'Parque natural con playas, jungla y ruinas arqueológicas frente al Caribe.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: 'Salento',
    description: 'Pueblo multicolor en el Valle del Cauca con paisajes del Eje Cafetero.',
    country: 'Colombia',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// CATEGORIES
// =========================

export const categories: Category[] = [
  {
    id: 1,
    name: 'Restaurantes',
    description: 'Los mejores lugares para comer',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Playas',
    description: 'Playas paradisíacas',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'Museos',
    description: 'Historia y cultura',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: 'Parques',
    description: 'Espacios naturales y recreativos',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: 'Vida Nocturna',
    description: 'Bares, discotecas y entretenimiento',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: 'Monumentos',
    description: 'Sitios históricos y monumentos',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// PLACES
// =========================

export const places: Place[] = [
  {
    id: 1,
    city_id: 1,
    category_id: 1,
    name: 'Andrés Carne de Res',
    description: 'Restaurante icónico de la gastronomía colombiana con los mejores cortes y ambiente festivo.',
    address: 'Calle 82, Bogotá',
    latitude: 18.4801972,
    longitude: -69.9419728,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.8,
  },
  {
    id: 2,
    city_id: 2,
    category_id: 6,
    name: 'Centro Histórico de Cartagena',
    description: 'Patrimonio de la Humanidad con arquitectura colonial, calles empedradas y murallas.',
    address: 'Centro, Cartagena',
    latitude: 10.4239,
    longitude: -75.5431,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.9,
  },
  {
    id: 3,
    city_id: 1,
    category_id: 3,
    name: 'Museo del Oro',
    description: 'Museo con la colección más grande de artefactos de oro del mundo prehispánico.',
    address: 'Carrera 6, Bogotá',
    latitude: 4.7110,
    longitude: -74.0087,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.8,
  },
  {
    id: 4,
    city_id: 3,
    category_id: 2,
    name: 'Playa Grande',
    description: 'Playa virgen de aguas cristalinas y arena blanca en Santa Marta.',
    address: 'Santa Marta',
    latitude: 11.2435,
    longitude: -74.2192,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.9,
  },
  {
    id: 5,
    city_id: 1,
    category_id: 6,
    name: 'Casa de Nariño',
    description: 'Palacio presidencial y sede de la Casa de Nariño con tour histórico.',
    address: 'Carrera 8, Bogotá',
    latitude: 4.7142,
    longitude: -74.0074,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.5,
  },
  {
    id: 6,
    city_id: 4,
    category_id: 2,
    name: 'Playa El Laguito',
    description: 'Hermosa playa en Medellín con acceso fácil y ambiente relajado.',
    address: 'Medellín',
    latitude: 6.2176,
    longitude: -75.5367,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.6,
  },
  {
    id: 7,
    city_id: 1,
    category_id: 4,
    name: 'Parque Nacional Natural Serranía de la Macarena',
    description: 'Parque con el famoso Caño Cristales, río de los cinco colores.',
    address: 'Serranía de la Macarena, Caquetá',
    latitude: 2.1907,
    longitude: -74.8061,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.9,
  },
  {
    id: 8,
    city_id: 4,
    category_id: 5,
    name: 'Parque Arví',
    description: 'Parque de cable con restaurantes y tiendas con vistas panorámicas de Medellín.',
    address: 'Medellín',
    latitude: 6.2518,
    longitude: -75.5213,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.7,
  },
  {
    id: 9,
    city_id: 3,
    category_id: 1,
    name: 'Casa Blanca Seafood',
    description: 'Restaurante especializado en mariscos frescos con vista al mar Caribe.',
    address: 'Santa Marta',
    latitude: 11.2435,
    longitude: -74.2175,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.7,
  },
  {
    id: 10,
    city_id: 5,
    category_id: 4,
    name: 'Parque Nacional Natural Tayrona',
    description: 'Parque con playas, jungla y ruinas arqueológicas Tayrona.',
    address: 'Tayrona, Santa Marta',
    latitude: 11.3150,
    longitude: -74.0950,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.9,
  },
  {
    id: 11,
    city_id: 6,
    category_id: 2,
    name: 'Playa de Oro',
    description: 'Tranquila playa en Salento con ambiente de pueblo cafetero.',
    address: 'Salento, Quindío',
    latitude: 4.7660,
    longitude: -75.5724,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.7,
  },
  {
    id: 12,
    city_id: 4,
    category_id: 6,
    name: 'Comuna 13 - Transformación Urbana',
    description: 'Zona transformada con murales, arte callejero y vistas panorámicas de Medellín.',
    address: 'Comuna 13, Medellín',
    latitude: 6.1836,
    longitude: -75.5569,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.8,
  },
  {
    id: 13,
    city_id: 2,
    category_id: 1,
    name: 'El Celler',
    description: 'Restaurante boutique con cocina fusionista en Cartagena Vieja.',
    address: 'Centro Histórico, Cartagena',
    latitude: 10.4261,
    longitude: -75.5441,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.8,
  },
  {
    id: 14,
    city_id: 6,
    category_id: 3,
    name: 'Valle de Cocóra',
    description: 'Valle con las palmas de cera más altas del mundo en el Eje Cafetero.',
    address: 'Salento, Quindío',
    latitude: 4.7590,
    longitude: -75.5820,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.9,
  },
  {
    id: 15,
    city_id: 3,
    category_id: 4,
    name: 'Ciudad Perdida',
    description: 'Área arqueológica precolombina en la Sierra Nevada con camino de 4 días.',
    address: 'Sierra Nevada, Santa Marta',
    latitude: 11.0413,
    longitude: -73.6225,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.7,
  },
  {
    id: 16,
    city_id: 2,
    category_id: 5,
    name: 'Club Cartagena',
    description: 'Club de noche en la zona amurallada con música y ambiente caribeño.',
    address: 'Cartagena',
    latitude: 10.4261,
    longitude: -75.5431,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    averageRating: 4.5,
  },
];

// =========================
// EVENTS
// =========================

export const events: Event[] = [
  {
    id: 1,
    city_id: 2,
    place_id: 2,
    title: 'Festival de Cartagena',
    description: 'Festival anual de cine, música y artes con eventos en el Centro Histórico.',
    date: new Date('2026-04-15').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    city_id: 3,
    place_id: 4,
    title: 'Concierto en Playa Grande',
    description: 'Festival de música con artistas nacionales e internacionales frente al Caribe.',
    date: new Date('2026-05-20').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    city_id: 4,
    place_id: 12,
    title: 'Feria de las Flores',
    description: 'El evento más importante de Medellín con desfiles, flores y celebración de la cultura.',
    date: new Date('2026-08-07').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    city_id: 1,
    place_id: 3,
    title: 'Maratón de Bogotá',
    description: 'Carrera anual por las calles de la capital que atrae a miles de participantes.',
    date: new Date('2026-07-10').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    city_id: 6,
    place_id: 14,
    title: 'Festival Cafetero',
    description: 'Celebración de la cultura cafetera con degustaciones, música y tradiciones del Eje.',
    date: new Date('2026-12-10').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    city_id: 3,
    place_id: 15,
    title: 'Expedición a Ciudad Perdida',
    description: 'Trek arqueológico con guías especializados a la Ciudad Perdida.',
    date: new Date('2026-09-15').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    city_id: 2,
    place_id: 13,
    title: 'Noche Caribeña de Cartagena',
    description: 'Fiesta nocturna en la zona amurallada con comida, música y diversión.',
    date: new Date('2026-06-25').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 8,
    city_id: 1,
    place_id: 3,
    title: 'Exposición de Oro en el Museo',
    description: 'Exhibición especial de piezas de oro precolombino del Museo del Oro.',
    date: new Date('2026-10-20').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// REVIEWS
// =========================

export const reviews: Review[] = [
  {
    id: 1,
    user_id: 1,
    reviewable_id: 1,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Excelente comida y servicio de primera. Los cortes son de primera calidad. Totalmente recomendado.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    user_id: 1,
    reviewable_id: 2,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Hermoso lugar lleno de historia. Imprescindible si visitas Santo Domingo.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    user_id: 1,
    reviewable_id: 4,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Playa paradisíaca, agua cristalina y arena blanca. ¡Perfecta! Ideal para familias.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    user_id: 1,
    reviewable_id: 1,
    reviewable_type: 'event',
    rating: 4,
    comment: 'Gran evento cultural. Muy bien organizado y divertido. La música estuvo genial.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    user_id: 1,
    reviewable_id: 3,
    reviewable_type: 'place',
    rating: 4,
    comment: 'Museo con exposiciones interesantes sobre la historia dominicana. Buena experiencia.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    user_id: 1,
    reviewable_id: 9,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Los mariscos están súper frescos. El pescado frito es increíble. Vuelvo cada vez que puedo.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    user_id: 1,
    reviewable_id: 14,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Lugar mágico. Las vistas son espectaculares y hay mucho para explorar. Artesanía hermosa.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 8,
    user_id: 1,
    reviewable_id: 12,
    reviewable_type: 'place',
    rating: 4,
    comment: 'El teleférico ofrece vistas increíbles de la ciudad. Muy recomendado.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 9,
    user_id: 1,
    reviewable_id: 7,
    reviewable_type: 'place',
    rating: 4,
    comment: 'Excelente para hacer ejercicio. Muy bien mantenido y seguro. Ideal para toda la familia.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 10,
    user_id: 1,
    reviewable_id: 13,
    reviewable_type: 'place',
    rating: 5,
    comment: 'Ambiente bohemio perfecto. La fusión de cocina es deliciosa. Servicio atento.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// FAVORITES
// =========================

export const favorites: Favorite[] = [
  {
    id: 1,
    user_id: 1,
    favorable_id: 1,
    favorable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    user_id: 1,
    favorable_id: 2,
    favorable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    user_id: 1,
    favorable_id: 4,
    favorable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    user_id: 1,
    favorable_id: 14,
    favorable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    user_id: 1,
    favorable_id: 1,
    favorable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    user_id: 1,
    favorable_id: 2,
    favorable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    user_id: 1,
    favorable_id: 1,
    favorable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 8,
    user_id: 1,
    favorable_id: 3,
    favorable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 9,
    user_id: 1,
    favorable_id: 5,
    favorable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// NOTIFICATIONS
// =========================

export const notifications: Notification[] = [
  {
    id: 1,
    user_id: 1,
    notifiable_id: 1,
    notifiable_type: 'event',
    title: 'Próximo Evento',
    message: 'El Festival Colonial comienza mañana. ¡No te lo pierdas!',
    is_read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    user_id: 1,
    notifiable_id: 2,
    notifiable_type: 'place',
    title: 'Nuevo Lugar',
    message: 'Se agregó un nuevo lugar en tu ciudad favorita.',
    is_read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    user_id: 1,
    notifiable_id: undefined,
    notifiable_type: undefined,
    title: 'Bienvenido',
    message: '¡Gracias por unirte a Tourify! Comienza a explorar.',
    is_read: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    user_id: 1,
    notifiable_id: 5,
    notifiable_type: 'event',
    title: 'Evento Próximo',
    message: 'El Carnaval de Santiago inicia en una semana. Prepárate.',
    is_read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    user_id: 1,
    notifiable_id: 9,
    notifiable_type: 'place',
    title: 'Nuevo Restaurante',
    message: 'Descubre "Chez Marina", especializado en mariscos frescos.',
    is_read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    user_id: 1,
    notifiable_id: 3,
    notifiable_type: 'city',
    title: 'Oferta Especial',
    message: 'Disfruta de descuentos especiales en museos de Santo Domingo.',
    is_read: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    user_id: 1,
    notifiable_id: 6,
    notifiable_type: 'event',
    title: 'Festival de Música',
    message: 'Festival de Música de Puerto Plata este fin de semana.',
    is_read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// IMAGES
// =========================

export const images: Image[] = [
  // Andrés Carne de Res
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 1,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Centro Histórico de Cartagena
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 2,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Museo del Oro
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1564399579883-451a5e44ec54?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 3,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Playa Grande
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 4,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Casa de Nariño
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1570129477492-45f003313e78?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 5,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Playa El Laguito
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 6,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Cañ Cristales
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 7,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Parque Arví
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 8,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Casa Blanca Seafood
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561e1d?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 9,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Parque Tayrona
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1520583997671-90f73ad32d99?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 10,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Playa de Oro Salento
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 11,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Comuna 13
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1499747292176-77588151d7d7?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 12,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // El Celler
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1504674900967-e21b49ce6d73?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 13,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Valle de Cocóra
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 14,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Ciudad Perdida
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 15,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Club Cartagena
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 16,
    imageable_type: 'place',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Festival de Cartagena
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 1,
    imageable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Concierto en Playa Grande
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 2,
    imageable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Feria de las Flores
  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1503980523714-fc8edc0ff944?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 3,
    imageable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Maratón Bogotá
  {
    id: 20,
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 4,
    imageable_type: 'event',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Bogotá city
  {
    id: 21,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 1,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Cartagena city
  {
    id: 22,
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 2,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Santa Marta city
  {
    id: 23,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 3,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Medellín city
  {
    id: 24,
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 4,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Tayrona city
  {
    id: 25,
    url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 5,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Salento city
  {
    id: 26,
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600',
    imageable_id: 6,
    imageable_type: 'city',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// =========================
// HELPER FUNCTIONS
// =========================

function getEntityImages(imageableType: Image['imageable_type'], entityId: number): Image[] {
  return images.filter((img) => img.imageable_type === imageableType && img.imageable_id === entityId);
}

export function getCityById(id: number): City | undefined {
  const city = cities.find((item) => item.id === id);
  if (!city) {
    return undefined;
  }

  return {
    ...city,
    images: getEntityImages('city', city.id),
  };
}

export function getCities(): City[] {
  return cities.map((city) => ({
    ...city,
    images: getEntityImages('city', city.id),
  }));
}

export function getCategoryById(id: number): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getPlaceById(id: number): Place | undefined {
  const place = places.find((p) => p.id === id);
  if (place) {
    return {
      ...place,
      city: getCityById(place.city_id),
      category: getCategoryById(place.category_id),
      images: getEntityImages('place', place.id),
      reviews: reviews.filter((r) => r.reviewable_type === 'place' && r.reviewable_id === place.id),
    };
  }
  return undefined;
}

export function getEventById(id: number): Event | undefined {
  const event = events.find((e) => e.id === id);
  if (event) {
    return {
      ...event,
      city: getCityById(event.city_id),
      place: getPlaceById(event.place_id),
      images: getEntityImages('event', event.id),
      reviews: reviews.filter((r) => r.reviewable_type === 'event' && r.reviewable_id === event.id),
    };
  }
  return undefined;
}

export function getPlacesByCity(cityId: number): Place[] {
  return places.filter((place) => place.city_id === cityId).map((place) => ({
    ...place,
    city: getCityById(place.city_id),
    category: getCategoryById(place.category_id),
    images: getEntityImages('place', place.id),
    reviews: reviews.filter((review) => review.reviewable_type === 'place' && review.reviewable_id === place.id),
  }));
}

export function getPlacesByCategory(categoryId: number): Place[] {
  return places.filter((place) => place.category_id === categoryId).map((place) => ({
    ...place,
    city: getCityById(place.city_id),
    category: getCategoryById(place.category_id),
    images: getEntityImages('place', place.id),
    reviews: reviews.filter((review) => review.reviewable_type === 'place' && review.reviewable_id === place.id),
  }));
}

export function getEventsByCity(cityId: number): Event[] {
  return events.filter((event) => event.city_id === cityId).map((event) => ({
    ...event,
    city: getCityById(event.city_id),
    place: getPlaceById(event.place_id),
    images: getEntityImages('event', event.id),
    reviews: reviews.filter((review) => review.reviewable_type === 'event' && review.reviewable_id === event.id),
  }));
}

export function getUserFavorites(userId: number): Favorite[] {
  return favorites.filter((fav) => fav.user_id === userId);
}

export function getUserNotifications(userId: number): Notification[] {
  return notifications.filter((notif) => notif.user_id === userId);
}

export function getUnreadNotificationsCount(userId: number): number {
  return notifications.filter((notif) => notif.user_id === userId && !notif.is_read).length;
}
