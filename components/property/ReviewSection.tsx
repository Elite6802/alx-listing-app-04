import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;      // Reviewer's name
  rating: number;    // e.g., 1-5 stars
  comment: string;
  date: string;      // optional
}

interface ReviewSectionProps {
  propertyId: number | string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            {review.date && <p className="text-gray-400 text-sm mt-1">{review.date}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
