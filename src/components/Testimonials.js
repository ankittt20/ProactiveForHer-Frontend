import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      job: "CEO at ABC Company",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus suscipit dolor, ac congue justo lobortis id. Sed fringilla vestibulum lectus.",
      avatar: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "Marketing Manager at XYZ Company",
      comment:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eget lorem purus. Sed euismod felis a enim varius tincidunt.",
      avatar: "https://via.placeholder.com/150x150",
    },
    {
      id: 3,
      name: "Bob Johnson",
      job: "Software Engineer at DEF Company",
      comment:
        "Fusce commodo eros eu interdum varius. Sed posuere purus sit amet sapien malesuada, eget commodo metus consequat. Nam non sollicitudin justo.",
      avatar: "https://via.placeholder.com/150x150",
    },
  ];

  return (
    <div id="testimonials" className="h-full my-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#77037B] font-semibold tracking-wide uppercase text-center">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">
            What Our Customers Say
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.job}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
