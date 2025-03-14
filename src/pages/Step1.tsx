
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
    <PageTransition>
      <div className="min-h-screen bg-secondary/30 flex flex-col">
        {/* Progress indicator */}
        <header className="w-full max-w-7xl mx-auto px-4 py-6">
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

        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 space-y-12 fade-in-stagger">
          {/* Hero section */}
          <section className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              White-Label AI Receptionist
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Grow Your Business with<br />Our White-Label Solution
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offer cutting-edge AI receptionist services to your clients under your own brand. Increase your revenue without the overhead.
            </p>
          </section>

          {/* Calculator section */}
          <section className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <DollarSign className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-center">Calculate Your Potential Profit</h2>
            </div>
            <Calculator />
          </section>

          {/* Dashboard preview section */}
          <section className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Monitor className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-center">Reseller Dashboard Preview</h2>
            </div>
            <DashboardPreview />
          </section>

          {/* Client view section */}
          <section className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-center">White-Label Client Experience</h2>
            </div>
            <Card className="p-6 w-full max-w-2xl mx-auto bg-muted/50 border-dashed hover-scale">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Screenshot preview of the client interface</p>
                <div className="w-full h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Client interface placeholder</p>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA section */}
          <section className="mt-16 text-center">
            <Button 
              size="lg" 
              onClick={handleNextStep}
              className="animate-pulse-subtle hover:animate-none group"
            >
              Continue to Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Check if your location qualifies for our white-label program.
            </p>
          </section>
        </main>

        <footer className="border-t py-6">
          <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">White-Label AI Receptionist Program</p>
            <div className="flex items-center">
              <a href="#" className="text-sm text-primary inline-flex items-center hover:underline">
                Learn more <ChevronRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Step1;
