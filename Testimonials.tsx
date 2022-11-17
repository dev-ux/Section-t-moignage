import React from 'react'
import { TestimonialCard } from './TestimonialCard'

const TESTIMONIAL_DATA = [

    {
        customerName: "Marvin KASSI",
        imageURL: "/image-colton.jpg",
        testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ",

    },

    {
        customerName: "Marvin JUNIOR",
        imageURL: "/image-irene.jpg",
        testimonialText: "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",

    },

    {
        customerName: "KASSI Junior",
        imageURL: "/image-anne.jpg",
        testimonialText: "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",

    },


];

export const Testimonials = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {
                TESTIMONIAL_DATA.map((item) => {
                    return <TestimonialCard customerName={item.customerName} imageURL={item.imageURL} testimonialText={item.testimonialText} />
                })

            }
        </div>
    )
}
