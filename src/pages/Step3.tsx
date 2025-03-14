
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Calculator from '@/components/Calculator';
import PageTransition from '@/components/PageTransition';
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
  Info 
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

  // Implementation roadmap steps
  const roadmapSteps = [
    { 
      title: 'Account Setup', 
      description: 'Your white-label reseller account is created within 24 hours',
      icon: Clock,
      days: '1-2 days'
    },
    { 
      title: 'Brand Customization', 
      description: 'Upload your branding assets and customize your client experience',
      icon: Info,
      days: '3-5 days'
    },
    { 
      title: 'Training & Onboarding', 
      description: 'Complete your onboarding session with our implementation team',
      icon: Calendar,
      days: '1 week'
    },
    { 
      title: 'First Client Onboarding', 
      description: 'Start adding your first clients with our guided assistance',
      icon: Check,
      days: '2 weeks'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-secondary/30 flex flex-col">
        {/* Progress indicator */}
        <header className="w-full max-w-7xl mx-auto px-4 py-6">
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

        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 space-y-12 fade-in-stagger">
          {/* Page title */}
          <section className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Select Your Reseller Plan
            </h1>
            <p className="text-muted-foreground">
              Choose the option that best fits your business needs.
            </p>
          </section>

          {/* Calculator section */}
          <section className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <DollarSign className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-center">Your Profit Calculation</h2>
            </div>
            <Calculator initialClientCount={userData.clientCount} />
          </section>

          {/* Plan selection section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">Available Plans</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Self-service plan */}
              <Card className="hover-scale border-2 border-primary/10 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium w-fit rounded-full mb-2">
                    Most Popular
                  </div>
                  <CardTitle>Self-Service Plan</CardTitle>
                  <CardDescription>
                    Get started quickly with our streamlined setup process
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="mb-6">
                    <p className="text-3xl font-bold">${(userData.calculatedProfit * 0.8).toFixed(0)}<span className="text-sm font-normal text-muted-foreground"> /mo</span></p>
                    <p className="text-sm text-muted-foreground">Based on {userData.clientCount} clients</p>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>White-labeled client portal</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Automated client onboarding</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Email & chat support</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Monthly billing automation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={handleSelfServiceSelection}
                  >
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Consultation plan */}
              <Card className="hover-scale overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium w-fit rounded-full mb-2">
                    Premium Support
                  </div>
                  <CardTitle>Guided Implementation</CardTitle>
                  <CardDescription>
                    Personalized onboarding and dedicated implementation support
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="mb-6">
                    <p className="text-3xl font-bold">Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span></p>
                    <p className="text-sm text-muted-foreground">Tailored to your business needs</p>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Everything in Self-Service Plan</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Dedicated implementation manager</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Custom integration support</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Priority phone & email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={handleConsultationRequest}
                  >
                    Request Consultation
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Implementation roadmap */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Implementation Roadmap</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              After you select a plan, here's what happens next:
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {roadmapSteps.map((step, index) => (
                <Card key={index} className="border-dashed hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium mb-1">{step.title}</p>
                      <p className="text-xs text-muted-foreground mb-2">{step.days}</p>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Trust builders */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">Why Partner With Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proven Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI receptionist technology has been tested and refined across thousands of businesses.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Recurring Revenue</h3>
                <p className="text-sm text-muted-foreground">
                  Build a stable monthly revenue stream with our high-retention white-label solution.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Be up and running with your first clients in as little as two weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center pt-4">
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

        <footer className="border-t py-6">
          <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">White-Label AI Receptionist Program</p>
            <div className="flex items-center">
              <a href="#" className="text-sm text-primary inline-flex items-center hover:underline">
                Contact Support <ChevronRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Step3;
