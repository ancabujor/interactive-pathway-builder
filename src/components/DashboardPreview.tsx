
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { 
  Users, 
  Settings, 
  PlusCircle, 
  Phone, 
  Globe, 
  FileText, 
  ShoppingBag, 
  Import, 
  LogOut,
  ChevronDown,
  Link2,
  Cog,
  CalculatorIcon
} from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const { userData } = useUserContext();
  const [displayedCount, setDisplayedCount] = useState(userData.clientCount || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Example client data
  const clients = [
    { id: 1, name: "Mr. Sparkle Car Wash", subdomain: "testanca" },
    { id: 2, name: "Sunshine Dental", subdomain: "sunshine" },
    { id: 3, name: "Peterson Law", subdomain: "peterson" },
    { id: 4, name: "Metro Fitness", subdomain: "metrofit" },
    { id: 5, name: "Green Leaf Gardens", subdomain: "greenleaf" },
  ];

  // Update displayed count with animation whenever userData.clientCount changes
  useEffect(() => {
    if (userData.clientCount !== displayedCount) {
      setIsAnimating(true);
      
      // Use setTimeout to create animation delay
      const timer = setTimeout(() => {
        setDisplayedCount(userData.clientCount || 0);
        
        // Reset animation state after a delay
        setTimeout(() => {
          setIsAnimating(false);
        }, 700);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [userData.clientCount, displayedCount]);

  // Get visible clients based on current count
  const visibleClients = clients.slice(0, displayedCount);

  return (
    <Card className={`w-full h-full overflow-hidden ${className}`}>
      <CardContent className="p-0 h-full">
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-[240px] bg-[#f0f4ff] border-r border-gray-200 h-full flex flex-col">
            {/* Logo area */}
            <div className="p-4 border-b border-gray-200">
              <div className="text-[#4361ee] font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                AI Front Desk
              </div>
            </div>

            {/* Navigation menu */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-2 space-y-1">
                {/* My Receptionists - highlighted */}
                <div className="flex items-center space-x-2 p-2 bg-[#e0e8ff] text-[#4361ee] rounded-md font-medium">
                  <Users size={18} />
                  <span>My Receptionists</span>
                </div>
                
                {/* Plans - with dropdown */}
                <div className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="flex items-center space-x-2">
                    <Users size={18} />
                    <span>Plans</span>
                  </div>
                  <ChevronDown size={16} />
                </div>
                
                {/* Embed */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Link2 size={18} />
                  <span>Embed</span>
                </div>
                
                {/* Branding Config - with dropdown */}
                <div className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <div className="flex items-center space-x-2">
                    <Settings size={18} />
                    <span>Branding Configuration</span>
                  </div>
                  <ChevronDown size={16} />
                </div>
                
                {/* Custom Domain */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Globe size={18} />
                  <span>Custom Domain</span>
                </div>
                
                {/* Tutorials */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FileText size={18} />
                  <span>Tutorials</span>
                </div>
                
                {/* Subscription */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <ShoppingBag size={18} />
                  <span>Subscription</span>
                </div>
                
                {/* Academy */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FileText size={18} />
                  <span>Academy</span>
                </div>
                
                {/* Import Twilio */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Import size={18} />
                  <span>Import Twilio</span>
                </div>
                
                {/* Logout */}
                <div className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <LogOut size={18} />
                  <span>Logout</span>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f8fafc]">
            {/* Top header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded flex items-center justify-center border border-gray-200">
                  <img src="/lovable-uploads/8f2c4451-1acf-4359-881a-4d993e5df136.png" alt="Logo" className="w-6 h-6" />
                </div>
                <span className="font-semibold">
                  {userData.companyName || 'Your Company'}
                </span>
              </div>
              
              {/* User profile icon */}
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            
            {/* Main dashboard area */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              {/* All Receptionists section */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">All Receptionists</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>Embed Iframe</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm">
                      <CalculatorIcon className="h-4 w-4" />
                      <span>Calculate Earnings</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Purchase More Seats</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-500 bg-blue-50 p-2 rounded-full">
                        <PlusCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Add New Client</h3>
                        <p className="text-gray-500 text-sm">
                          Setup a new business account. Pay immediately for a confirmed client and setup a premium account day one.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-500 bg-blue-50 p-2 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Create Trial</h3>
                        <p className="text-gray-500 text-sm">
                          Set up a free trial for a prospect. Pay later, when they are confirmed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active Clients */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center mb-2">
                  <h2 className={`text-xl font-bold ${isAnimating ? 'animate-pulse text-blue-600' : ''}`}>
                    Active Clients ({displayedCount}/5)
                  </h2>
                </div>
                <p className="text-gray-500 mb-4">
                  You have set up {displayedCount} of 5 accounts. 
                  {displayedCount < 5 && " Adding a new account will not increase your monthly charge, since you are paying for 4."}
                </p>
                
                {/* Client cards */}
                <div className="space-y-3">
                  {visibleClients.map(client => (
                    <div 
                      key={client.id} 
                      className={`bg-gray-50 p-3 rounded-md flex justify-between items-center 
                                ${client.id > (userData.clientCount || 0) - 1 ? 'animate-fade-in' : ''}`}
                    >
                      <div>
                        <h3 className="font-semibold">{client.name}</h3>
                        <p className="text-gray-500 text-sm">{client.subdomain}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1.5 rounded-full hover:bg-gray-200">
                          <Cog className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Trial Accounts */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-xl font-bold mb-4">Trial Accounts (0 / ∞)</h2>
                <p className="text-gray-500">No trial accounts yet.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
