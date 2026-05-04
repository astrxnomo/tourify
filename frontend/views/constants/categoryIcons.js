const categoryIcons = {
  Restaurantes: "restaurant",
  Playas: "beach-access",
  Museos: "museum",
  Parques: "park",
  "Vida Nocturna": "nightlife",
  Monumentos: "account-balance",
};

export function getCategoryIcon(name) {
  return categoryIcons[name] ?? "place";
}
