import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Wallet, DollarSign, Users, Share2 } from "lucide-react";
import AnimatedLeaderboard from "./templates/AnimatedLeaderboard";
import SocialMediaTask from "./templates/SocialMediaTask";
import AnimatedReferCard from "./templates/AnimatedReferCard";
import ShareReferLink from "./templates/ShareReferLink";
import MemberShipLeads from "./templates/MemberShipLeads";
import ConnectWithUs from "./templates/ConnectWithUs";
import MainTopCard from "./templates/MainTopCard";
const Main = () => {
  return (
    <main className="flex-1 overflow-y-auto p-2 space-y-4">
      <MainTopCard />
      <AnimatedLeaderboard />
      <SocialMediaTask />
      <AnimatedReferCard />
      <ShareReferLink />
      <MemberShipLeads />
      <ConnectWithUs />
    </main>
  );
};

export default Main;
