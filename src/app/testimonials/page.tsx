"use client";

import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import Features from '@/components/featured/page';
import NewsLetter from '@/components/Newsletters';

type Review = {
    id: number;
    user: string;
    content: string;
    rating: number;
};

export const reviewsData: Review[] = [
    {
        id: 1,
        user: "Alex K.",
        content:
            `"As a tech enthusiast, I was looking for a product that combines cutting-edge technology with seamless functionality. This product has exceeded my expectations. The performance is outstanding, and it's intuitive to use. A game-changer in the tech industry!"`,
        rating: 5,
    },
    {
        id: 2,
        user: "Sarah M.",
        content:
            `"This device has completely revolutionized the way I work and play. The sleek design, fast performance, and user-friendly interface make it the perfect addition to my tech setup. I can't imagine going back to anything else!"`,
        rating: 5,
    },
    {
        id: 3,
        user: "Ethan R.",
        content:
            `"I’ve been using this product for a few weeks, and I’m blown away by the performance. The hardware is top-notch, and the software runs effortlessly. It’s the ideal combination of power and simplicity—highly recommend it to fellow tech lovers!"`,
        rating: 5,
    },
    {
        id: 4,
        user: "Olivia P.",
        content:
            `"As a software developer, I need a device that can handle demanding tasks while maintaining efficiency. This product not only meets but exceeds my needs. The speed, reliability, and design are perfect for professionals like me!"`,
        rating: 5,
    },
    {
        id: 5,
        user: "Liam K.",
        content:
            `"I love how this product has integrated seamlessly into my daily tech routine. The build quality is exceptional, and I’ve noticed a significant improvement in performance. If you’re into high-performance tech, this is a must-have."`,
        rating: 5,
    },
    {
        id: 6,
        user: "Samantha D.",
        content:
            `"This product has completely changed my workflow. It’s fast, efficient, and looks amazing. The best part? It’s incredibly easy to set up and use, making it perfect for both beginners and experienced users."`,
        rating: 5,
    },
];

const Testimonials = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 3);

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16">
            <h1 className="text-[48px] font-bold uppercase text-center">Our Happy Customers</h1>
            <div className="flex gap-5 mt-10 overflow-x-auto" id="testimonials">
                {displayedReviews.map((review) => (
                    <div
                        key={review.id}
                        className="w-[400px] h-[240px] px-6 py-4 border border-[rgba(0,0,0,0.3)] rounded-[20px] shrink-0 flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-[15px] flex">
                                {/* Render Stars dynamically based on rating */}
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <FaStar key={i} className="h-5 w-5 text-yellow-500" />
                                ))}
                            </div>
                            <div className="flex gap-2 items-center mb-2">
                                <h3 className="font-semibold text-lg">{review.user}</h3>
                                <BsFillCheckCircleFill className="h-6 w-6 text-green-500" />
                            </div>
                            <p className="text-[16px] text-[rgba(0,0,0,0.6)]">{review.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show "See More" button if there are more reviews */}
            {reviewsData.length > 3 && (
                <Button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-blue-800 text-white hover:bg-blue-700 transition"
                >
                    {showAll ? "See Less" : "See More"}
                </Button>
            )}
        </div>
    );
};

export default Testimonials;
