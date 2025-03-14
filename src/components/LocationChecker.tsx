
import React, { useState } from 'react';
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface LocationCheckerProps {
  onQualified: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ onQualified }) => {
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

  const handleReadyClick = () => {
    setShowEmailField(true);
  };

  const handleSubmitEmail = () => {
    if (readyEmail) {
      // Update user email and continue
      setWaitlistEmail(readyEmail);
      onQualified();
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
            <CompanyDetailsForm 
              companyName={companyName}
              clientCount={clientCount}
              onCompanyNameChange={handleCompanyNameChange}
              onClientCountChange={handleClientCountChange}
            />
          ) : (
            <WaitlistForm 
              waitlistEmail={waitlistEmail}
              onEmailChange={(e) => setWaitlistEmail(e.target.value)}
              onSubmit={submitWaitlist}
              loading={loading}
            />
          )}

          <Collapsible open={showEmailField} onOpenChange={setShowEmailField} className="mt-4">
            <CollapsibleTrigger asChild>
              <Button 
                onClick={handleReadyClick} 
                className="w-full mt-2"
                variant="default"
              >
                I'm ready to start my AI business <ArrowRight className="ml-2" />
              </Button>
            </CollapsibleTrigger>
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
                    onChange={(e) => setReadyEmail(e.target.value)}
                    className="pl-9"
                    type="email"
                  />
                </div>
                <Button 
                  onClick={handleSubmitEmail} 
                  className="w-full mt-2"
                  disabled={!readyEmail}
                  size="sm"
                >
                  Continue
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
      <CardFooter className="py-2">
        {/* Card footer intentionally left empty as it was in the original component */}
      </CardFooter>
    </Card>
  );
};

export default LocationChecker;
