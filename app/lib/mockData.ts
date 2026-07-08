// Mock data for frontend-only application
export const mockHomes = [
  {
    id: "1",
    title: "Cozy Apartment in Downtown",
    description: "Beautiful 2-bedroom apartment in the heart of the city",
    guests: "4",
    bedrooms: "2",
    bathrooms: "1",
    country: "United States",
    photo: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    price: 120,
    categoryName: "Apartment",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "2",
    title: "Modern House with Garden",
    description: "Spacious modern house perfect for families",
    guests: "6",
    bedrooms: "3",
    bathrooms: "2",
    country: "United Kingdom",
    photo: "https://images.unsplash.com/photo-1570129477492-45c003d96b5f?w=400&h=300&fit=crop",
    price: 200,
    categoryName: "House",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "3",
    title: "Beachfront Villa",
    description: "Luxury villa with ocean views and private beach access",
    guests: "8",
    bedrooms: "4",
    bathrooms: "3",
    country: "Mexico",
    photo: "https://images.unsplash.com/photo-1570129477492-45c003d96b5f?w=400&h=300&fit=crop",
    price: 350,
    categoryName: "Villa",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "4",
    title: "Mountain Cabin",
    description: "Rustic cabin with stunning mountain views",
    guests: "4",
    bedrooms: "2",
    bathrooms: "1",
    country: "Canada",
    photo: "https://images.unsplash.com/photo-1488936861217-8520dc3f914f?w=400&h=300&fit=crop",
    price: 150,
    categoryName: "Cabin",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "5",
    title: "Tokyo Studio",
    description: "Compact and efficient studio in central Tokyo",
    guests: "2",
    bedrooms: "1",
    bathrooms: "1",
    country: "Japan",
    photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    price: 90,
    categoryName: "Studio",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "6",
    title: "Paris Apartment",
    description: "Charming Parisian apartment with classic architecture",
    guests: "3",
    bedrooms: "1",
    bathrooms: "1",
    country: "France",
    photo: "https://images.unsplash.com/photo-1540932895986-6a0ee3018563?w=400&h=300&fit=crop",
    price: 180,
    categoryName: "Apartment",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "7",
    title: "Barcelona Loft",
    description: "Modern loft in the vibrant Eixample district",
    guests: "5",
    bedrooms: "2",
    bathrooms: "2",
    country: "Spain",
    photo: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop",
    price: 160,
    categoryName: "Loft",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
  {
    id: "8",
    title: "Sydney Penthouse",
    description: "Luxury penthouse with harbor views",
    guests: "6",
    bedrooms: "3",
    bathrooms: "2",
    country: "Australia",
    photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    price: 250,
    categoryName: "Penthouse",
    addedCategory: true,
    addedLocation: true,
    addedDescription: true,
    createdAT: new Date(),
  },
];

export function getHomesData(filters?: {
  filter?: string;
  country?: string;
  guest?: string;
  room?: string;
  bathroom?: string;
}) {
  let filtered = mockHomes;

  if (filters?.filter) {
    filtered = filtered.filter(
      (home) => home.categoryName?.toLowerCase() === filters.filter?.toLowerCase()
    );
  }

  if (filters?.country) {
    filtered = filtered.filter(
      (home) => home.country?.toLowerCase() === filters.country?.toLowerCase()
    );
  }

  if (filters?.guest) {
    filtered = filtered.filter(
      (home) => parseInt(home.guests || "0") >= parseInt(filters.guest || "0")
    );
  }

  if (filters?.room) {
    filtered = filtered.filter(
      (home) => parseInt(home.bedrooms || "0") >= parseInt(filters.room || "0")
    );
  }

  if (filters?.bathroom) {
    filtered = filtered.filter(
      (home) => parseInt(home.bathrooms || "0") >= parseInt(filters.bathroom || "0")
    );
  }

  return filtered.map((home) => ({
    photo: home.photo,
    id: home.id,
    price: home.price,
    description: home.description,
    country: home.country,
    Favorite: [],
  }));
}
