import React from "react";
import { Button } from "../ui/button";
import membership from "../../assets/membership.png";
import leads from "../../assets/leads.png";

const MemberShipLeads = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        variant="outline"
        className="flex items-center justify-center p-4 h-auto gap-1 hover:bg-gray-200"
      >
        <img src={membership} className="h-7 w-7" />
        <span className="font-barlow">Premium Membership</span>
      </Button>
      <Button
        variant="outline"
        className="flex items-center justify-center p-4 h-auto hover:bg-gray-200"
      >
        <img src={leads} className="mr-2 h-8 w-8 mb-1" />
        <span className="font-barlow">My Leads</span>
      </Button>
    </div>
  );
};

export default MemberShipLeads;
