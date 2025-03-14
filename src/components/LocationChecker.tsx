
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LocationSelector from '@/components/location/LocationSelector';
import CompanyDetailsForm from '@/components/company/CompanyDetailsForm';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import LocationNotification from '@/components/notifications/LocationNotification';
import { useLocationChecker } from '@/hooks/useLocationChecker';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { useUserContext } from '@/context/UserContext';

interface LocationCheckerProps {
  onQualified: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ onQualified }) => {
  const navigate = useNavigate();
  const { setCurrentStep } = useUserContext();
  
  const {
    location,
    loading,
    showWaitlist,
    waitlistEmail,
    companyName,
    clientCount,
    userData,
    handleLocationChange,
    submitWaitlist,
    setWaitlistEmail,
    handleCompanyNameChange,
    handleClientCountChange
  } = useLocationChecker({ onQualified });

  const [showEmailField, setShowEmailField] = useState(false);
  const [readyEmail, setReadyEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleReadyClick = () => {
    if (!location) {
      // Just focus on the location field if empty instead of showing toast
      return;
    }
    setShowEmailField(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setReadyEmail(email);
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmitEmail = () => {
    if (readyEmail && validateEmail(readyEmail)) {
      setWaitlistEmail(readyEmail);
      setCurrentStep(3);
      navigate('/step3');
    } else if (readyEmail) {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="py-3">
        <CardTitle className="text-lg font-medium text-center">Check Availability</CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="space-y-2">
          <LocationSelector 
            location={location} 
            onLocationChange={handleLocationChange} 
          />
          
          <LocationNotification 
            location={userData.location} 
            isQualified={userData.isQualified} 
          />

          {!showWaitlist ? (
            <>
              {location && (
                <CompanyDetailsForm 
                  companyName={companyName}
                  clientCount={clientCount}
                  onCompanyNameChange={handleCompanyNameChange}
                  onClientCountChange={handleClientCountChange}
                />
              )}
            </>
          ) : (
            <WaitlistForm 
              waitlistEmail={waitlistEmail}
              onEmailChange={(e) => setWaitlistEmail(e.target.value)}
              onSubmit={submitWaitlist}
              loading={loading}
            />
          )}

          {!showEmailField ? (
            <Button 
              onClick={handleReadyClick} 
              className="w-full mt-2"
              variant="default"
              disabled={!location}
            >
              I'm ready to start my AI business <ArrowRight className="ml-2" />
            </Button>
          ) : (
            <Collapsible open={true} className="mt-3">
              <CollapsibleContent className="mt-3 space-y-2">
                <div className="bg-muted/50 p-2 rounded text-sm">
                  <p className="font-medium">Awesome! One last thing...</p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="ready-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      id="ready-email"
                      placeholder="you@example.com" 
                      value={readyEmail}
                      onChange={handleEmailChange}
                      className={`pl-9 ${emailError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      type="email"
                    />
                  </div>
                  {emailError && (
                    <p className="text-xs text-red-500 mt-1">{emailError}</p>
                  )}
                  <Button 
                    onClick={handleSubmitEmail} 
                    className="w-full mt-2"
                    disabled={!readyEmail || !!emailError}
                    size="sm"
                  >
                    Start My AI Business <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </CardContent>
      <CardFooter className="py-2">
        {/* Card footer intentionally left empty as it was in the original component */}
      </CardFooter>
    </Card>
  );
};

export default LocationChecker;
