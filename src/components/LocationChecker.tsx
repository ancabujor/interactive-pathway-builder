
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LocationSelector from '@/components/location/LocationSelector';
import CompanyDetailsForm from '@/components/company/CompanyDetailsForm';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import LocationNotification from '@/components/notifications/LocationNotification';
import { useLocationChecker } from '@/hooks/useLocationChecker';

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
        </div>
      </CardContent>
      <CardFooter className="py-2">
        {/* Card footer intentionally left empty as it was in the original component */}
      </CardFooter>
    </Card>
  );
};

export default LocationChecker;
