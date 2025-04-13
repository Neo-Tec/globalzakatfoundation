"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import ImageSlide from "@/components/ImageSlide";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ImageSlide />
      <AboutSection />

      {/* Current Projects Section */}

      <ImageGallery />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
