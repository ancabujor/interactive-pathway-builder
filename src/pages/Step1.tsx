import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Calculator from '@/components/Calculator';
import DashboardPreview from '@/components/DashboardPreview';
import { ArrowRight, ChevronRight, Monitor, DollarSign } from 'lucide-react';
const Step1 = () => {
  const navigate = useNavigate();
  const {
    setCurrentStep
  } = useUserContext();
  const handleNextStep = () => {
    setCurrentStep(2);
    navigate('/step2');
  };
  return <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      {/* Progress indicator */}
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
        {/* Hero section - reduced padding */}
        <section className="flex flex-col justify-center items-center p-2 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-1">
            White-Label AI Receptionist
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1 text-center">Build a Profitable AI Business Under Your Own Brand</h1>
          <p className="text-sm text-muted-foreground max-w-md text-center mb-2">Launch your own AI receptionist service with 262% ROI and zero development costs.</p>
          <Button onClick={handleNextStep} className="group" size="sm">
            Start Assessment
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>
        
        {/* Main content area - Dashboard and Calculator */}
        <div className="flex-1 grid grid-cols-3 gap-2 p-2 min-h-0">
          {/* Reseller Dashboard preview section - 2/3 width */}
          <section className="col-span-2 bg-background rounded-lg shadow-sm border p-2 flex flex-col">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Monitor className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold">Reseller Dashboard</h2>
            </div>
            <div className="flex-1 overflow-hidden">
              <DashboardPreview className="h-full" />
            </div>
          </section>

          {/* Calculator section - 1/3 width */}
          <section className="col-span-1 bg-background rounded-lg shadow-sm border p-2 flex flex-col">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <DollarSign className="h-4 w-4 text-primary" />
              
            </div>
            <div className="flex-1 overflow-y-auto">
              <Calculator />
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
    </div>;
};
export default Step1;