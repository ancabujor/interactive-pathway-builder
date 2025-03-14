
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Users, Phone, Calculator, DollarSign, 
  Plus, Settings, LogOut, BookOpen, 
  Globe, FileText, Box, LifeBuoy
} from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className="flex h-full w-full overflow-hidden bg-white shadow-sm rounded-lg border">
      {/* Sidebar */}
      <div className="w-64 bg-[#f8f9ff] border-r h-full flex flex-col">
        <div className="p-4 border-b flex items-center">
          <div className="flex text-blue-600 font-bold items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 mr-2 flex items-center justify-center">
              <span className="text-white text-xs">🎧</span>
            </div>
            <span className="text-xl">AI Front Desk</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <nav className="p-2">
            <div className="py-2">
              <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-2 rounded-md my-1">
                <Users className="h-5 w-5 mr-2" />
                <span>My Receptionists</span>
              </div>
              
              <div className="flex items-center justify-between text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Plans</span>
                </div>
                <span>▼</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <Box className="h-5 w-5 mr-2" />
                <span>Embed</span>
              </div>
              
              <div className="flex items-center justify-between text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  <span>Branding Configuration</span>
                </div>
                <span>▼</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <Globe className="h-5 w-5 mr-2" />
                <span>Custom Domain</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Tutorials</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <DollarSign className="h-5 w-5 mr-2" />
                <span>Subscription</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <FileText className="h-5 w-5 mr-2" />
                <span>Academy</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                <span>Import Twilio</span>
              </div>
              
              <div className="flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <LogOut className="h-5 w-5 mr-2" />
                <span>Logout</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-md p-1 mr-3">
              <span className="text-sm">YOUR LOGO</span>
            </div>
            <h1 className="text-xl font-bold">Your Company</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600">👤</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">All Receptionists</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Box className="mr-2 h-4 w-4" />
                  Embed Iframe
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Earnings
                </Button>
                <Button className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Purchase More Seats
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border hover:border-blue-300 cursor-pointer transition-all">
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Plus className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Add New Client</h3>
                      <p className="text-gray-600 text-sm">
                        Setup a new business account. Pay immediately for a confirmed client and setup a premium account day one.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border hover:border-blue-300 cursor-pointer transition-all">
                <CardContent className="p-4">
                  <div className="flex">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Create Trial</h3>
                      <p className="text-gray-600 text-sm">
                        Set up a free trial for a prospect. Pay later, when they are confirmed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Active Clients (1)</h2>
            <p className="text-gray-600 mb-4">
              You have set up 1 of 5 accounts. Adding a new account will not increase your monthly charge, since you are paying for 4.
            </p>
            
            <div className="bg-gray-50 rounded-md p-4 max-w-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Mr. Sparkle Car Wash</h3>
                  <div className="text-sm text-gray-500">testanca</div>
                </div>
                <Settings className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Trial Accounts (0 / ∞)</h2>
            <p className="text-gray-600">
              No trial accounts yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
