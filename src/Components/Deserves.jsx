import React from "react";
import DeliveryIcon  from "../assets/delivery.svg";
import PricingIcon  from "../assets/pricing.svg";
import GuaranteeIcon  from "../assets/guarantee.svg";
import RepairIcon  from "../assets/repair.svg";

const Deserves = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-screen-xl shadow-2xl mx-auto text-center">
        <div className="line border-blue-400 border-[2px] rounded-lg mt-2 mb-5"></div>
        <h1 className="text-3xl font-bold mb-8">
          Your Brand Deserves the Best
        </h1>
        <p className="mb-8">Why so many choose us for custom apparel.</p>
        <div className="border-t border-b border-gray-200 my-3 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-5">
              <img src={DeliveryIcon} className="mb-3 w-20 h-20" />
              <h2 className="text-2xl font-semibold">Fast Rush Delivery</h2>
              <p>
                Rush deliveries are our specialty, and we never take an order
                unless we are 100% sure that we can guarantee your deadline.
              </p>
            </div>
            <div className="flex flex-col items-center p-5 border-x border-gray-200">
              <img src={PricingIcon} className="mb-3 w-20 h-20" />
              <h2 className="text-2xl font-semibold">Better Pricing</h2>
              <p>
                With free shipping and competitive pricing, we provide our
                high-quality products for a price and standard unmatched
                anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center p-5 border-r border-gray-200">
              <img src={GuaranteeIcon} className="mb-3 w-20 h-20" />
              <h2 className="text-2xl font-semibold">
                Industry Leading Satisfaction Guarantee
              </h2>
              <p>
                Accuracy, quality, and expedience are core to our business and
                day-to-day operations. We're happy when you're happy.
              </p>
            </div>
            <div className="flex flex-col items-center p-5">
              <img src={RepairIcon} className="mb-3 w-20 h-20" />
              <h2 className="text-2xl font-semibold">Design Review & Repair</h2>
              <p>
                Our professional in-house designers review and repair every
                order we receive to ensure each one is printed to perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deserves;
