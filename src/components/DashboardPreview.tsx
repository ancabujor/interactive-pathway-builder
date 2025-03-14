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
  const {
    userData
  } = useUserContext();
  return <Card className={`w-full h-full overflow-hidden ${className}`}>
      <CardContent className="p-0 h-full">
        <div className="flex h-full">
          {/* Sidebar - reduced width */}
          <div className="w-[200px] bg-blue-50 border-r border-gray-200 h-full flex flex-col">
            <div className="p-2 border-b border-gray-200 flex items-center space-x-2">
              <div className="text-blue-500 font-bold flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                AI Front Desk
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-1">
                <div className="flex items-center space-x-2 p-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                  <Users size={14} />
                  <span>My Receptionists</span>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-1 text-gray-700 mt-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <Users size={14} />
                    <span>Plans</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                <div className="flex items-center space-x-2 p-1 text-gray-700 mt-1 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 ml-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span>Embed</span>
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-1 text-gray-700 mt-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <Settings size={14} />
                    <span>Branding Config</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                {/* Additional menu items - simplified */}
                <div className="mt-2 space-y-1">
                  {[{
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
                  label: "Custom Domain"
                }, {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
                  label: "Tutorials"
                }, {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
                  label: "Subscription"
                }].map((item, index) => <div key={index} className="flex items-center space-x-2 p-1 text-gray-700 text-xs">
                      <span className="ml-1">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top header */}
            <div className="p-2 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-[10px]">
                  LOGO
                </div>
                <span className="font-semibold text-sm">
                  {userData.companyName || 'Your Company'}
                </span>
              </div>
            </div>
            
            {/* Main dashboard - scrollable */}
            <div className="p-2 flex-1 overflow-y-auto">
              {/* All Receptionists section */}
              <div className="bg-white rounded-lg border border-gray-200 p-2 mb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-bold">All Receptionists</h2>
                  <div className="flex space-x-1">
                    
                    
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-2 mb-2">
                <h2 className="text-sm font-bold mb-2">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-200 rounded-lg p-2">
                    <div className="flex items-start space-x-2">
                      <div className="text-blue-500">
                        <PlusCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs">Add New Client</h3>
                        <p className="text-gray-500 text-[10px]">
                          Setup a new business account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-2">
                    <div className="flex items-start space-x-2">
                      <div className="text-blue-500">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs">Create Trial</h3>
                        <p className="text-gray-500 text-[10px]">
                          Set up a free trial for a prospect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active Clients */}
              <div className="bg-white rounded-lg border border-gray-200 p-2 mb-2">
                <h2 className="text-sm font-bold mb-1">Active Clients ({userData.clientCount || 0}/5)</h2>
                <p className="text-gray-500 text-xs">
                  You have set up {userData.clientCount || 0} of 5 accounts.
                </p>
              </div>
              
              {/* Trial Accounts */}
              <div className="bg-white rounded-lg border border-gray-200 p-2">
                <h2 className="text-sm font-bold mb-2">Trial Accounts (1 / ∞)</h2>
                <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                  <div>
                    
                    <p className="text-gray-500 text-[10px]">testanca</p>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1 rounded-full hover:bg-gray-200">
                      <Settings className="h-3 w-3 text-gray-500" />
                    </button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center space-x-1 text-xs">
                      <Bell className="h-3 w-3" />
                      <span>Convert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default DashboardPreview;