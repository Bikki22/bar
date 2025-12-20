import React from "react";

const Testimonial = () => {
  const teamMembers = [
    {
      name: "ROBIN SMITH",
      role: "Barman",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "DAVID WHITE",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "ALEX FOREST",
      role: "Sales Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "ROBIN SMITH",
      role: "Barman",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "DAVID WHITE",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "ALEX FOREST",
      role: "Sales Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];
  return (
    <div className="flex items-center justify-center py-10 mt-6 w-full">
      <div className="w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center pt-10 ">
              <div className="relative mb-18">
                <div className="absolute inset-0 rounded-full bg-[#d2c8b9] transform scale-115"></div>

                <div className="absolute inset-0 rounded-full bg-white transform scale-103"></div>

                <div className="relative w-84 h-84 rounded-full overflow-hidden border-0 border-transparent shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-orange bg-[url('./dust.png')] px-8 py-2 mb-3 shadow-lg relative hover:text-white hover:bg-coffee cursor-pointer">
                <div
                  className="bg-[#4c241b] w-7 h-5 hover:inline-block absolute -right-0.5 -top-5 z-10
                [clip-path:polygon(1%_100%,0_0,100%_100%)] "
                ></div>
                <div
                  className="bg-[#4c241b] w-5 h-6 hover:inline-block absolute -left-0.5 -top-5 z-10
                [clip-path:polygon(0_100%,100%_0,100%_100%)]"
                ></div>
                <svg
                  className="absolute left-[-40px] top-0 -translate-y-1/2 z-0"
                  width="78"
                  height="48"
                  viewBox="0 0 78 52"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="pattern-left"
                      patternUnits="userSpaceOnUse"
                      width="78"
                      height="52"
                    >
                      <rect width="60" height="50" fill="#bb7037" />

                      <img
                        href="https://vintclub.cwsthemes.com/wp-content/themes/vintclub/img/patterns/shape_pattern.png"
                        width="78"
                        height="52"
                        opacity="0.25"
                      />
                    </pattern>
                  </defs>

                  <path
                    d="M0.7,0.2l12,25.9L0.7,51.5h76.9V0.2H0.7z"
                    fill="url(#pattern-left)"
                  />
                </svg>
                <svg
                  className="absolute right-[-40px] top-0 -translate-y-1/2 fill-orange inline-block"
                  width="68"
                  height="42"
                  viewBox="0 0 78 52"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
                    className="#bb7037"
                  />
                </svg>
                <h3 className="text-white font-bold text-lg tracking-wider text-center z-10">
                  {member.name}
                </h3>
              </div>

              {/* Role */}
              <div className="text-amber-900 font-serif text-2xl italic">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
