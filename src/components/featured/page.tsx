import { BsTruck } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { RiRecycleFill } from "react-icons/ri";

export default function Features() {
  return (
    <section className="w-full bg-gray-300 flex flex-col items-center py-10 px-4 md:px-16">
      {/* Section Heading */}
      <h3 className="text-2xl font-normal text-[#2A254B] text-center mb-10">
        What makes our brand different
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Block 1 */}
        <div className="flex flex-col items-start gap-4">
          <BsTruck className="text-[#fa893d] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
            Next day as standard
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature Block 2 */}
        <div className="flex flex-col items-start gap-4">
          <FaHandHoldingHeart className="text-[#45c6a4] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
            Made by true artisans
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Feature Block 3 */}
        <div className="flex flex-col items-start gap-4">
          <AiOutlineTag className="text-[#c12b37] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
            Unbeatable prices
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>

        {/* Feature Block 4 */}
        <div className="flex flex-col items-start gap-4">
          <RiRecycleFill className="text-[#3a48ff] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"/>
          <h4 className="text-lg font-normal text-[#2A254B]">
            Recycled packaging
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>
      </div>
    </section>
  );
}
