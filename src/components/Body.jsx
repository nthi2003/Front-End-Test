import React from 'react';
import { ArrowRight, Network, Users, Gift, Trophy } from 'lucide-react';

const Body = () => {
  return (
    <div className='p-8'>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-2 text-white">💡 How It Works?</span>
        
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        {[
          {
            icon: <Network className="h-[29.44px] w-[29.44px] text-white" />,
            title: "1. Two-Level Referral System",
            description: "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)"
          },
          {
            icon: <Users className="h-[29.44px] w-[29.44px] text-white" />,
            title: "2. Earn Rebates & Commissions",
            description: "Earn rebates on your trades and commissions from F1 and F2."
          },
          {
            icon: <Gift className="h-[29.44px] w-[29.44px] text-white" />,
            title: "3. Claim Daily Rewards",
            description: "Rewards are credited after trades close and claimable daily at 0:00 UTC."
          },
          {
            icon: <Trophy className="h-[29.44px] w-[29.44px] text-white" />,
            title: "4. Referral Tier System",
            description: "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days."
          }
        ].map((item, index) => (
          <div key={index} className="p-6 rounded-[4px] border border-[#313856]">
            <div className='bg-custom-conic-gradient  w-[46px] h-[46px] flex items-center justify-center relative'>
              <div className='flex items-center justify-center blur-sm z-10 w-full h-full'>
              {item.icon}
              </div>
             
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-400">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
