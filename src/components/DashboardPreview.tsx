
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { Users, CalculatorIcon, ShoppingCart, Phone, PlusCircle, Settings, Bell } from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const { userData } = useUserContext();
  
  return (
    <Card className={`overflow-hidden w-full flex flex-col ${className}`}>
      <CardContent className="p-0">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-[280px] bg-blue-50 border-r border-gray-200 min-h-[600px] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center space-x-2">
              <div className="text-blue-500 font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                AI Front Desk
              </div>
            </div>
            <div className="flex-1">
              <div className="p-2">
                <div className="flex items-center space-x-3 p-2 bg-blue-100 text-blue-700 rounded-md">
                  <Users size={18} />
                  <span>My Receptionists</span>
                </div>
                
                <div className="flex items-center justify-between space-x-3 p-2 text-gray-700 mt-2">
                  <div className="flex items-center space-x-3">
                    <Users size={18} />
                    <span>Plans</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                <div className="flex items-center space-x-3 p-2 text-gray-700 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span>Embed</span>
                </div>
                
                <div className="flex items-center justify-between space-x-3 p-2 text-gray-700 mt-1">
                  <div className="flex items-center space-x-3">
                    <Settings size={18} />
                    <span>Branding Configuration</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                {/* Additional menu items */}
                <div className="mt-4 space-y-3">
                  {[
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>, label: "Custom Domain" },
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>, label: "Tutorials" },
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>, label: "Subscription" },
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>, label: "Academy" },
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>, label: "Import Twilio" },
                    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>, label: "Logout" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 text-gray-700">
                      <span className="ml-1">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Top header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded bg-gray-200 flex items-center justify-center text-xs">
                  LOGO
                </div>
                <span className="font-semibold text-lg">
                  {userData.companyName || 'Your Company'}
                </span>
              </div>
            </div>
            
            {/* Main dashboard */}
            <div className="p-6 flex-1">
              {/* All Receptionists section */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">All Receptionists</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>Embed Iframe</span>
                    </button>
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded text-sm">
                      <CalculatorIcon className="h-4 w-4" />
                      <span>Calculate Earnings</span>
                    </button>
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded text-sm">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Purchase More Seats</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <h2 className="text-xl font-bold mb-3">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-500">
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
                      <div className="text-blue-500">
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
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Active Clients ({userData.clientCount || 0}/5)</h2>
                <p className="text-gray-500">
                  You have set up {userData.clientCount || 0} of 5 accounts. Adding a new account will not increase your monthly charge, since you are paying for 5.
                </p>
              </div>
              
              {/* Trial Accounts */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="text-xl font-bold mb-3">Trial Accounts (1 / ∞)</h2>
                <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Mr. Sparkle Car Wash</h3>
                    <p className="text-gray-500 text-sm">testanca</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-200">
                      <Settings className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                      <Bell className="h-4 w-4" />
                      <span>Convert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
