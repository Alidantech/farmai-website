"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CalendarIcon,
  User,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    title: "What technology is used in vertical farming?",
    category: "FOOD CROPS",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    image:
      "https://images.pexels.com/photos/10403883/pexels-photo-10403883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Which type of farming is more prevalent today?",
    category: "ORGANIC FARM",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    image:
      "https://images.pexels.com/photos/30893310/pexels-photo-30893310/free-photo-of-fresh-pumpkin-slices-at-local-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "The Farmers Sentiment Darkens Hopes Fade",
    category: "FARMING TIPS",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    image:
      "https://media.istockphoto.com/id/1371705013/photo/3d-illustration-of-smart-farming-concept-tractor-on-a-smartphone-farm-online-management-ads.jpg?b=1&s=612x612&w=0&k=20&c=iQR1jbNXvAFSc8_hFAUO1p2pPoso0Hq_3cPU5NGGXWo=",
  },
];

const BlogCard = ({ post }: any) => (
  <Link href="#" className="group">
    <div className="rounded-3xl overflow-hidden border bg-card">
      <div className="relative h-[240px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1 bg-white rounded-full text-sm font-medium text-[#517D36]">
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="w-10 h-10 bg-[#ebd96b] rounded-full flex items-center justify-center group-hover:bg-[#d9c85c] transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold group-hover:text-[#517D36] transition-colors">
          {post.title}
        </h3>
      </div>
    </div>
  </Link>
);

export default function BlogPosts() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <div className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm mb-4">
              Latest Blog
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold">
                Latest posts & articles
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Slider ref={sliderRef} className="gap-4" {...settings}>
            {blogPosts.map((post, index) => (
              <div key={index} className="px-2">
                <BlogCard post={post} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
