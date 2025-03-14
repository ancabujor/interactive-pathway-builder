
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Calculator from '@/components/Calculator';
import DashboardPreview from '@/components/DashboardPreview';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, ChevronRight, Monitor, DollarSign, Users } from 'lucide-react';

const Step1 = () => {
  const navigate = useNavigate();
  const { setCurrentStep } = useUserContext();
  
  const handleNextStep = () => {
    setCurrentStep(2);
    navigate('/step2');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      {/* Progress indicator */}
      <header className="w-full py-3 border-b">
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
        <div className="grid grid-cols-3 h-full">
          {/* Hero section */}
          <section className="col-span-3 flex flex-col justify-center items-center p-4 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-2">
              White-Label AI Receptionist
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-center">
              Grow Your Business with Our White-Label Solution
            </h1>
            <p className="text-sm text-muted-foreground max-w-md text-center mb-4">
              Offer cutting-edge AI receptionist services under your own brand.
            </p>
            <Button 
              onClick={handleNextStep}
              className="group"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </section>
          
          <div className="col-span-3 grid grid-cols-3 gap-3 p-3">
            {/* Calculator section */}
            <section className="col-span-1 bg-background rounded-lg shadow-sm border p-3">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold">Profit Calculator</h2>
              </div>
              <Calculator />
            </section>

            {/* Dashboard preview section */}
            <section className="col-span-1 bg-background rounded-lg shadow-sm border p-3">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Monitor className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold">Reseller Dashboard</h2>
              </div>
              <DashboardPreview />
            </section>

            {/* Client view section */}
            <section className="col-span-1 bg-background rounded-lg shadow-sm border p-3">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Users className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold">Client Experience</h2>
              </div>
              <Card className="w-full bg-muted/50 border-dashed">
                <div className="text-center p-3">
                  <p className="text-xs text-muted-foreground mb-2">Client interface preview</p>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-xs">Client interface</p>
                  </div>
                </div>
              </Card>
            </section>
          </div>
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
