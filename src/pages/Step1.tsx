
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import DashboardPreview from '@/components/DashboardPreview';
import TrustBuilders from '@/components/TrustBuilders';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Step1 = () => {
  const navigate = useNavigate();
  const {
    setCurrentStep
  } = useUserContext();

  const handleNextStep = () => {
    setCurrentStep(2);
    navigate('/step2');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      <header className="w-full py-2 border-b">
        <div className="flex justify-center items-center space-x-4 sm:space-x-8">
          <div className="flex flex-col items-center">
            <div className="step-indicator active">1</div>
            <span className="text-xs mt-1 text-center">Demo</span>
          </div>
          <div className="w-12 h-px bg-muted-foreground/30" />
          <div className="flex flex-col items-center">
            <div className="step-indicator">2</div>
            <span className="text-xs mt-1 text-center">Assessment</span>
          </div>
          <div className="w-12 h-px bg-muted-foreground/30" />
          <div className="flex flex-col items-center">
            <div className="step-indicator">3</div>
            <span className="text-xs mt-1 text-center">Selection</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 p-2 min-h-0">
          {/* Left Side - Value Proposition */}
          <section className="flex flex-col justify-center p-6 bg-gradient-to-br from-background to-primary/5 rounded-lg border shadow-sm">
            <div className="max-w-md mx-auto space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                White-Label AI Receptionist
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Build a Profitable AI Business Under Your Own Brand
                </h1>
                <p className="text-lg text-muted-foreground">
                  Launch your own AI receptionist service with zero development costs.
                </p>
                
                <Button onClick={handleNextStep} className="group" size="lg">
                  Build My AI Company
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Trust Builders Section */}
              <div className="pt-8">
                <TrustBuilders />
              </div>
            </div>
          </section>
          
          {/* Right Side - Demo Dashboard */}
          <section className="bg-background rounded-lg shadow-sm border p-2 flex flex-col">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <h2 className="text-sm font-semibold">Your Branded Reseller Command Center</h2>
            </div>
            <div className="flex-1 overflow-hidden">
              <DashboardPreview className="h-full" />
            </div>
          </section>
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

export default Step1;
