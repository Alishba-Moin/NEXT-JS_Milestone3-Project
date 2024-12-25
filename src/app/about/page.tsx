import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="w-full md:w-1/2 text-center md:text-left lg:ml-10">
  <h2 className="font-extrabold md:text-base  text-[#151875] mb-4">
    About Our E-Commerce Business
  </h2>
  <p className="text-sm md:text-base text-[#8A8FB9] mb-6">
    At TechNest, we specialize in offering high-quality products designed to meet the needs of modern consumers. 
    With a focus on innovation, style, and value, we aim to provide an exceptional shopping experience.
  </p>
  <p className="text-sm md:text-base text-[#8A8FB9] mb-6">
    Founded with the goal of making premium products accessible, we are committed to delivering customer satisfaction through seamless service and reliable products.
  </p>
  <Link href="/contact">
    <Button className="bg-blue-900 text-white md:px-6  md:text-base hover:bg-blue-600 transition duration-300 rounded-xl">
      Contact Us
    </Button>
  </Link>
</div>
      {/* Team Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-8">
          <div className="max-w-xs w-full text-center">
            <Image
              src="/photos/team-1.jpg" // Your image path
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4 text-teal-600">John Doe</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
          <div className="max-w-xs w-full text-center">
            <Image
              src="/photos/team-2.jpg" // Your image path
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4 text-teal-600">Jane Smith</h3>
            <p className="text-sm text-gray-500">Chief Technology Officer</p>
          </div>
          <div className="max-w-xs w-full text-center">
            <Image
              src="/photos/team-3.jpg" // Your image path
              alt="Team Member 3"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4 text-teal-600">Alice Brown</h3>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or want to know more about us? Feel free to reach out to us anytime.
        </p>
        <Link
      href="mailto:alishbamoin797@gmail.com"
      className="inline-flex items-center mt-6 px-6 py-3 text-white bg-teal-600 hover:bg-teal-500 rounded-full"
    >
      <MdEmail className="mr-2 text-[20px]" /> {/* Email icon */}
      Email Us
    </Link>
      </div>
    </div>
  );
};

export default AboutPage;
