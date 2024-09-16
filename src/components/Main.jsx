import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Wallet, DollarSign, Users, Share2 } from "lucide-react";
import AnimatedLeaderboard from "./templates/AnimatedLeaderboard";
import SocialMediaTask from "./templates/SocialMediaTask";

const Main = () => {
  return (
    <main className="flex-1 overflow-y-auto p-2 space-y-4">
      <div className="grid grid-cols-3 gap-4 mt-2">
        {/* wallet card */}
        <Card className="overflow-hidden transition-all hover:shadow-lg h-20 flex flex-col">
          <CardHeader className="p-3 flex-shrink-0">
            <CardTitle className="flex items-center text-sm font-medium">
              <Wallet className="h-4 w-4 mr-2 text-blue-500" />
              Wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow flex items-center justify-between">
            <div>
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-blue-600 mr-1">₹</span>
                <span className="text-xl font-extrabold">0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Earning card */}
        <Card className="overflow-hidden transition-all hover:shadow-lg h-20 flex flex-col">
          <CardHeader className="p-3 flex-shrink-0">
            <CardTitle className="flex items-center text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-2 text-green-500" />
              Earnings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow flex items-center justify-between">
            <div>
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-green-600 mr-1">₹</span>
                <span className="text-xl font-extrabold">0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* referrals card */}
        <Card className="overflow-hidden transition-all hover:shadow-lg h-20 flex flex-col">
          <CardHeader className="p-3 flex-shrink-0">
            <CardTitle className="flex items-center text-sm font-medium">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              Referrals
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow flex items-center justify-between">
            <div className="flex">
              <span className="text-xl font-extrabold">0</span>
            </div>
            <Share2 className="h-4 w-4 text-yellow-500 mb-1 cursor-pointer" />
          </CardContent>
        </Card>
      </div>

      <AnimatedLeaderboard />
      <SocialMediaTask />
    </main>
  );
};

export default Main;
