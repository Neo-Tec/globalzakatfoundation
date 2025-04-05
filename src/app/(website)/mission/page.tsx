"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationCard from "@/components/DonationCard";

const currentProjects = [
  {
    title: "Free Imprisoned Muslims",
    description:
      "Advocate for the release and legal defense of unjustly detained Muslims, particularly innocent youth in Indian jails.",
    imageSrc:
      "https://images.unsplash.com/photo-1581091870627-3f9b7b8d4b1b?auto=format&fit=crop&w=600",
  },
  {
    title: "Empower Muslim Judiciary",
    description:
      "Support underprivileged Muslim children in becoming lawyers and judges to protect the community from injustice.",
    imageSrc:
      "https://images.unsplash.com/photo-1528744598421-b7b93e12df73?auto=format&fit=crop&w=600",
  },
  {
    title: "Train Muslim Bureaucrats",
    description:
      "Prepare Muslim students for competitive civil service exams like IAS, IPS, and IFS.",
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600",
  },
  {
    title: "Develop Youth Skills",
    description:
      "Provide skill development programs for intelligent but underprivileged Muslim children.",
    imageSrc:
      "https://images.unsplash.com/photo-1519455953755-af066f52f1c3?auto=format&fit=crop&w=600",
  },
  {
    title: "Fund Higher Education",
    description:
      "Offer financial assistance to deserving, needy students pursuing advanced studies.",
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600",
  },
  {
    title: "Support Islamic Madrasas",
    description:
      "Provide financial aid to sustain and improve Islamic religious schools.",
    imageSrc:
      "https://images.unsplash.com/photo-1581091870627-3f9b7b8d4b1b?auto=format&fit=crop&w=600",
  },
  {
    title: "Establish Neighborhood Maktabs",
    description: "Set up religious schools in underserved Muslim communities.",
    imageSrc:
      "https://images.unsplash.com/photo-1528744598421-b7b93e12df73?auto=format&fit=crop&w=600",
  },
  {
    title: "Aid Vulnerable Communities",
    description:
      "Assist the poor, elderly, widows, orphans, and destitute individuals.",
    imageSrc:
      "https://images.unsplash.com/photo-1519455953755-af066f52f1c3?auto=format&fit=crop&w=600",
  },
  {
    title: "Treat Poor Patients",
    description: "Fund medical care for impoverished patients in need.",
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600",
  },
  {
    title: "Support Underprivileged Marriages",
    description: "Facilitate weddings for financially disadvantaged girls.",
    imageSrc:
      "https://images.unsplash.com/photo-1581091870627-3f9b7b8d4b1b?auto=format&fit=crop&w=600",
  },
  {
    title: "Transform Zakat Recipients",
    description:
      "Help eligible individuals become self-sufficient and future Zakat donors.",
    imageSrc:
      "https://images.unsplash.com/photo-1528744598421-b7b93e12df73?auto=format&fit=crop&w=600",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 bg-zakat-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium tracking-wider text-zakat-primary uppercase bg-zakat-primary/10 rounded-full">
              Current Initiatives
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zakat-dark">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-zakat-primary mx-auto mt-6 mb-8 rounded"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Your donations directly support these ongoing projects, bringing
              hope and relief to communities in dire need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <DonationCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                // raised={project.raised}
                // goal={project.goal}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
