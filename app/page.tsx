import Banner from "@/components/widget/Banner";
import BlogPosts from "@/components/widget/BlogPosts";
import Features from "@/components/widget/Features";
import Hero from "@/components/widget/Hero";
import History from "@/components/widget/History";
import PartnerLogos from "@/components/widget/Partner";
import Services from "@/components/widget/Services";
import WhatWeDo from "@/components/widget/WhatWeDo";
import WhoWeAre from "@/components/widget/WhoWeAre";

export default function LandingPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero Section */} <Hero /> {/* Features Section */}
      <Features />
      {/* Services Section */} <Services />
      {/* Who We Are Section */}
      <WhoWeAre />
      {/* Testimonials Section */}
      {/* Pricing Section */}
      {/* Final CTA Section */}
      {/* Partner Logos Section */}
      <PartnerLogos />
      {/* What We Do Section */}
      <WhatWeDo />
      {/* History Section */}
      <History />
      {/* Banner Section */}
      <Banner />
      {/* Blog Posts Section */}
      <BlogPosts />
    </main>
  );
}
