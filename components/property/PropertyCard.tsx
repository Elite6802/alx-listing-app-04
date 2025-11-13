interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    description: string;
    image: string;
    amenities: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-xl font-semibold mb-4">${property.price}/night</p>
      <p className="mb-6">{property.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
      <ul className="list-disc list-inside">
        {property.amenities.map((amenity, idx) => (
          <li key={idx}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}
