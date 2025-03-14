
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LocationChecker from '@/components/LocationChecker';
import DashboardPreview from '@/components/DashboardPreview';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, Building, Users, MailIcon, ChevronRight } from 'lucide-react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Step2 = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, setCurrentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'company' | 'preview' | 'email'>(
    userData.isQualified ? 'company' : 'location'
  );
  const [companyName, setCompanyName] = useState(userData.companyName || '');
  const [clientCount, setClientCount] = useState(userData.clientCount || 5);
  const [email, setEmail] = useState(userData.email || '');

  const handleLocationQualified = () => {
    setStage('company');
  };

  const handleCompanySubmit = () => {
    if (!companyName.trim()) {
      toast.error('Please enter your company name');
      return;
    }

    updateUserData({ 
      companyName, 
      clientCount: Number(clientCount) || 5 
    });
    
    setStage('preview');
  };

  const handleEmailSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    updateUserData({ email });
    setCurrentStep(3);
    navigate('/step3');
  };

  const handlePreviousPage = () => {
    if (stage === 'location') {
      setCurrentStep(1);
      navigate('/step1');
    } else if (stage === 'company') {
      setStage('location');
    } else if (stage === 'preview') {
      setStage('company');
    } else if (stage === 'email') {
      setStage('preview');
    }
  };

  const handleNextStage = () => {
    if (stage === 'preview') {
      setStage('email');
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      {/* Progress indicator */}
      <header className="w-full py-3 border-b">
        <div className="flex justify-center items-center space-x-4 sm:space-x-8">
          <div className="flex flex-col items-center">
            <div className="step-indicator completed">1</div>
            <span className="text-xs mt-1 text-center">Demo</span>
          </div>
          <div className="w-12 h-px bg-muted-foreground/30" />
          <div className="flex flex-col items-center">
            <div className="step-indicator active">2</div>
            <span className="text-xs mt-1 text-center">Assessment</span>
          </div>
          <div className="w-12 h-px bg-muted-foreground/30" />
          <div className="flex flex-col items-center">
            <div className="step-indicator">3</div>
            <span className="text-xs mt-1 text-center">Selection</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-4 overflow-hidden">
        {/* Page title */}
        <section className="text-center mb-4">
          <h1 className="text-xl font-bold tracking-tight mb-1">
            Personalized Assessment
          </h1>
          <p className="text-sm text-muted-foreground">
            {stage === 'location' && "Let's check if your location qualifies for our program."}
            {stage === 'company' && "Tell us about your business to customize your experience."}
            {stage === 'preview' && "Here's how your reseller dashboard would look."}
            {stage === 'email' && "One last step - where should we send your personalized plan?"}
          </p>
        </section>

        {/* Two-column layout */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Left column - Form */}
            <div className="flex flex-col space-y-4 overflow-y-auto">
              {stage === 'location' && (
                <LocationChecker onQualified={handleLocationQualified} />
              )}

              {stage === 'company' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="companyName">Company Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          id="companyName"
                          placeholder="Your Company Name" 
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="clientCount">Potential Clients</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          id="clientCount"
                          type="number" 
                          placeholder="How many clients could you sell to?" 
                          value={clientCount}
                          onChange={(e) => setClientCount(Number(e.target.value))}
                          min={1}
                          className="pl-9"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    onClick={handleCompanySubmit}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {stage === 'email' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-center text-sm">
                      To receive your personalized plan and pricing:
                    </p>
                    
                    <div className="space-y-1">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="you@example.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    onClick={handleEmailSubmit}
                  >
                    View Plans & Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              )}
            </div>

            {/* Right column - Dashboard Preview */}
            <div className="hidden md:block">
              <DashboardPreview className="h-full" />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center w-full mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            className="text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {stage === 'location' && userData.isQualified === false && userData.location && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("You've been added to our waitlist");
                updateUserData({ email: '' });
              }}
            >
              Join Waitlist
            </Button>
          )}
        </div>
      </main>

      <footer className="border-t py-2 px-4 flex justify-between items-center">
        <p className="text-xs text-muted-foreground">White-Label AI Receptionist Program</p>
        <a href="#" className="text-xs text-primary inline-flex items-center hover:underline">
          Learn more <ChevronRight className="ml-1 h-3 w-3" />
        </a>
      </footer>
    </div>
  );
};

export default Step2;
