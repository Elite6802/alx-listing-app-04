interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
}
