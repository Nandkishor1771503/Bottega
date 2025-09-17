import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Aarav", text: "Amazing taste and ambiance!", rating: 5 },
  { id: 2, name: "Meera", text: "Really loved the espresso.", rating: 4 },
  { id: 3, name: "Rahul", text: "Great service, will come again.", rating: 5 },
  { id: 4, name: "Simran", text: "Latte was smooth and creamy.", rating: 4 },
  { id: 5, name: "Kabir", text: "Cozy vibe, highly recommended.", rating: 5 },
  {
    id: 6,
    name: "Ishita",
    text: "Could improve the seating space.",
    rating: 3,
  },
];

export default function Reviews() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 pb-10">
      {/* Heading */}
      <h2 className="text-[#d68b0c] text-2xl sm:text-3xl lg:text-4xl font-thin mb-8 text-center sm:text-left">
        What our customers say
      </h2>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(({ id, name, text, rating }) => (
          <div
            key={id}
            className="bg-black text-[#d68b0c] rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-[#d68b0c]/40 hover:scale-[1.02] transition-transform"
          >
            {/* Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating
                      ? "fill-[#d68b0c] text-[#d68b0c]"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm sm:text-base italic leading-relaxed">
              “{text}”
            </p>

            {/* Reviewer */}
            <h3 className="text-sm sm:text-base font-semibold">— {name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
