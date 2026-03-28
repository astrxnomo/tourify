import { MaterialIcons } from '@expo/vector-icons';

const categoryIcons: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  Restaurantes: 'restaurant',
  Playas: 'beach-access',
  Museos: 'museum',
  Parques: 'park',
  'Vida Nocturna': 'nightlife',
  Monumentos: 'account-balance',
};

export function getCategoryIcon(name: string): keyof typeof MaterialIcons.glyphMap {
  return categoryIcons[name] ?? 'place';
}
