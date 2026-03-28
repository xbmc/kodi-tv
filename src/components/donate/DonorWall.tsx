import React from "react";
import { FeaturedCard } from "../Card";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface Donor {
  publicName: string;
  amount: number;
  currency: string;
}

export default function DonorWall({ donors }: { donors: Donor[] }) {
  return (
    <>
      Here are some of our recent donors. Thanks for your support!
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {donors.map((donor, index) => (
          <div key={index}>
            <FeaturedCard
              title={donor.publicName === "" ? "Anonymous" : donor.publicName}
              icon={
                <UserCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-50" />
              }
            >
              {donor.amount.toString() + " " + donor.currency.toUpperCase()}
            </FeaturedCard>
          </div>
        ))}
      </div>
    </>
  );
}
