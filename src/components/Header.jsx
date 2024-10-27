import { ArrowRight, Network, Users, Gift, Trophy } from 'lucide-react'
import Tired from './Tired';


const Header = () => {
    return (
        <div className=" text-white bg-gray-900  ">
            <div className=" relative  lg:h-[400px]  p-8  border-b border-[#313856] bg-gray-900  ">
                <div className='lg:flex'>

                    <div className='lg:w-[50%]'>
                    <div className='lg:w-[441px] lg:h-[144px] gap-[16px]'>
                        <div className="bg-gray-900 text-[#FCFCFD]  lg:p-6 mt-[76px] mb-[60px] lg:r-[580px] lg:l-[40px] ">
                            <h1 className="lg:text-4xl md: text-2xl lg:font-bold mb-4 lg:w-[425px] md:[212px]">
                                Unlock Rewards with the Copin Referral Program
                            </h1>
                            <p className="text-gray-300 mb-2">
                                Earn rebates and commissions by inviting friends.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Grow your network and benefit from our 6-tier reward system.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                            >
                                View referral Ranking
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                    </div>
                    </div>
                    <div className='lg:w-[50%]'>
                        <Tired />
                    </div>
                </div>

              
            </div>
        </div>
    )
};

export default Header;
