
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import LocationSelector from '@/components/location/LocationSelector';
import CompanyDetailsForm from '@/components/company/CompanyDetailsForm';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import LocationNotification from '@/components/notifications/LocationNotification';
import { useLocationChecker } from '@/hooks/useLocationChecker';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import ReadyButton from '@/components/location/ReadyButton';
import ReadyEmailForm from '@/components/location/ReadyEmailForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface LocationCheckerProps {
  onQualified: () => void;
  handleReceptionistResponse: (value: string) => void;
  showReceptionistAlert: boolean;
  hasTestedReceptionist: string | undefined;
  handleContinue: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ 
  onQualified, 
  handleReceptionistResponse, 
  showReceptionistAlert, 
  hasTestedReceptionist,
  handleContinue 
}) => {
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

  const {
    readyEmail,
    emailError,
    showEmailField,
    handleEmailChange,
    handleReadyClick,
    handleSubmitEmail
  } = useEmailSubmission();

  const handleReadyButtonClick = () => {
    handleReadyClick(location);
  };

  const handleEmailSubmission = () => {
    handleSubmitEmail(readyEmail);
  };

  const shouldShowReadyButton = location && !showWaitlist && !showEmailField;

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="py-3">
        {/* Header intentionally left empty as in the original component */}
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

          {location === 'Not listed' ? (
            <WaitlistForm 
              waitlistEmail={waitlistEmail} 
              onEmailChange={e => setWaitlistEmail(e.target.value)} 
              onSubmit={submitWaitlist} 
              loading={loading} 
            />
          ) : (
            <>
              {location && !showWaitlist && (
                <>
                  <CompanyDetailsForm 
                    companyName={companyName} 
                    clientCount={clientCount} 
                    onCompanyNameChange={handleCompanyNameChange} 
                    onClientCountChange={handleClientCountChange} 
                  />
                  
                  {/* Receptionist dropdown appearing right after client count */}
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="receptionist-test">Have you tested our AI receptionist?</Label>
                    <Select onValueChange={handleReceptionistResponse} value={hasTestedReceptionist}>
                      <SelectTrigger id="receptionist-test" className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>

                    {showReceptionistAlert && (
                      <Alert className="mt-3 bg-primary/5 border-primary/20">
                        <Info className="h-4 w-4" />
                        <AlertDescription className="text-sm">
                          As a reseller in our White Label Program, your reputation depends on the quality of solutions you provide. That's why we've made testing your AI receptionist a crucial step in your registration process.
                        </AlertDescription>
                      </Alert>
                    )}

                    {hasTestedReceptionist && (
                      <Button onClick={handleContinue} className="w-full mt-4">
                        Continue to Plan Selection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </>
              )}

              <ReadyButton 
                onClick={handleReadyButtonClick} 
                show={shouldShowReadyButton} 
              />

              <ReadyEmailForm 
                showEmailField={showEmailField}
                readyEmail={readyEmail}
                emailError={emailError}
                onEmailChange={handleEmailChange}
                onSubmit={handleEmailSubmission}
              />
            </>
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
