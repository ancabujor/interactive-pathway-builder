
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Calculator from '@/components/Calculator';
import { toast } from 'sonner';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Calendar, 
  PhoneCall, 
  Shield, 
  BarChart4, 
  DollarSign, 
  ChevronRight, 
  Clock,
  Info,
  Users
} from 'lucide-react';

const Step3 = () => {
  const navigate = useNavigate();
  const { userData, setCurrentStep, resetUserData } = useUserContext();

  const handlePreviousPage = () => {
    setCurrentStep(2);
    navigate('/step2');
  };

  const handleSelfServiceSelection = () => {
    toast.success('Thank you for your selection! Your account is being set up.');
    setTimeout(() => {
      resetUserData();
      navigate('/step1');
    }, 3000);
  };

  const handleConsultationRequest = () => {
    toast.success('Consultation request received! We\'ll be in touch shortly.');
    setTimeout(() => {
      resetUserData();
      navigate('/step1');
    }, 3000);
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
            <div className="step-indicator completed">2</div>
            <span className="text-xs mt-1 text-center">Assessment</span>
          </div>
          <div className="w-12 h-px bg-muted-foreground/30" />
          <div className="flex flex-col items-center">
            <div className="step-indicator active">3</div>
            <span className="text-xs mt-1 text-center">Selection</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Page title */}
        <section className="text-center pt-3 pb-2">
          <h1 className="text-xl font-bold tracking-tight">
            Select Your Reseller Plan
          </h1>
          <p className="text-xs text-muted-foreground">
            Choose the option that best fits your business needs.
          </p>
        </section>

        {/* Main content */}
        <div className="flex-1 flex flex-col px-4 pb-3">
          <div className="flex-1 grid md:grid-cols-3 gap-4">
            {/* Calculator section */}
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader className="py-3">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="h-4 w-4 text-primary" />
                    <CardTitle className="text-sm font-semibold">How many clients would you like to start with?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-3 px-3 flex-1">
                  <Calculator initialClientCount={userData.clientCount || 5} />
                </CardContent>
              </Card>
            </div>

            {/* Plan options */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
              {/* Self-service plan */}
              <Card className="border-2 border-primary/10 flex flex-col">
                <CardHeader className="py-3">
                  <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium w-fit rounded-full mb-1">
                    Most Popular
                  </div>
                  <CardTitle className="text-base">Self-Service Plan</CardTitle>
                  <CardDescription className="text-xs">
                    Get started quickly with our streamlined setup process
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-2 flex-1">
                  <div className="mb-3">
                    <p className="text-xl font-bold">${(userData.calculatedProfit * 0.8).toFixed(0)}<span className="text-xs font-normal text-muted-foreground"> /mo</span></p>
                    <p className="text-xs text-muted-foreground">Based on {userData.clientCount} clients</p>
                  </div>
                  
                  <ul className="space-y-1 text-xs">
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>White-labeled client portal</span>
                    </li>
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>Automated client onboarding</span>
                    </li>
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>Email & chat support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="py-3">
                  <Button 
                    className="w-full"
                    onClick={handleSelfServiceSelection}
                    size="sm"
                  >
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Consultation plan */}
              <Card className="flex flex-col">
                <CardHeader className="py-3">
                  <div className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium w-fit rounded-full mb-1">
                    Premium Support
                  </div>
                  <CardTitle className="text-base">Guided Implementation</CardTitle>
                  <CardDescription className="text-xs">
                    Personalized onboarding and implementation support
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-2 flex-1">
                  <div className="mb-3">
                    <p className="text-xl font-bold">Custom<span className="text-xs font-normal text-muted-foreground"> pricing</span></p>
                    <p className="text-xs text-muted-foreground">Tailored to your business needs</p>
                  </div>
                  
                  <ul className="space-y-1 text-xs">
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>Everything in Self-Service Plan</span>
                    </li>
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>Dedicated implementation manager</span>
                    </li>
                    <li className="flex">
                      <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
                      <span>Priority phone & email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="py-3">
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={handleConsultationRequest}
                    size="sm"
                  >
                    Request Consultation
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Trust builders - simplified for single screen */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Proven Technology</h3>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <BarChart4 className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Recurring Revenue</h3>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Rapid Implementation</h3>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center px-4 pb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            className="text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              toast.success('We\'ll be in touch soon!');
              resetUserData();
              navigate('/step1');
            }}
          >
            Request a Demo
          </Button>
        </div>
      </main>

      <footer className="border-t py-2 px-4 flex justify-between items-center">
        <p className="text-xs text-muted-foreground">White-Label AI Receptionist Program</p>
        <a href="#" className="text-xs text-primary inline-flex items-center hover:underline">
          Contact Support <ChevronRight className="ml-1 h-3 w-3" />
        </a>
      </footer>
    </div>
  );
};

export default Step3;
