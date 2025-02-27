"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by thousands of teams
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">
                  Marketing Director, TechCorp
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "StreamLine has transformed how our marketing team collaborates. We've reduced meeting time by 50% and increased our campaign output by 35%."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-muted-foreground">CTO, GrowthLabs</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "The automation features alone have saved our development team countless hours. The ROI was evident within the first month."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Emily Rodriguez</p>
                <p className="text-sm text-muted-foreground">
                  Project Manager, DesignHub
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                "As a project manager, I've tried dozens of tools. StreamLine is by far the most intuitive and comprehensive solution I've found."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 