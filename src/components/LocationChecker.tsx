
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

  const {
    readyEmail,
    emailError,
    showEmailField,
    handleEmailChange,
    handleReadyClick,
    handleSubmitEmail
  } = useEmailSubmission();

  const handleReadyButtonClick = () => {
    // When ready is clicked, move to the next stage (receptionist) immediately
    handleReadyClick(location);
    // Trigger the onQualified callback to move to the receptionist stage
    if (location) {
      onQualified();
    }
  };

  const handleEmailSubmission = () => {
    // Pass onQualified as the next stage handler
    handleSubmitEmail(readyEmail, onQualified);
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
                <CompanyDetailsForm 
                  companyName={companyName} 
                  clientCount={clientCount} 
                  onCompanyNameChange={handleCompanyNameChange} 
                  onClientCountChange={handleClientCountChange} 
                />
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
