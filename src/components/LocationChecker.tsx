
import React, { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import LocationSelector, { QUALIFIED_LOCATIONS } from '@/components/location/LocationSelector';
import CompanyDetailsForm from '@/components/company/CompanyDetailsForm';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import LocationNotification from '@/components/notifications/LocationNotification';

interface LocationCheckerProps {
  onQualified: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ onQualified }) => {
  const { userData, updateUserData } = useUserContext();
  const [location, setLocation] = useState(userData.location || '');
  const [loading, setLoading] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [companyName, setCompanyName] = useState(userData.companyName || '');
  const [clientCount, setClientCount] = useState(userData.clientCount || 5);

  const handleLocationChange = (value: string) => {
    setLocation(value);
    
    if (value === 'Not listed') {
      setShowWaitlist(true);
      updateUserData({ 
        location: value,
        isQualified: false
      });
    } else {
      setShowWaitlist(false);
      // Automatically check location when selection changes
      checkLocation(value);
    }
  };

  const checkLocation = (selectedLocation: string) => {
    if (!selectedLocation) {
      toast.error('Please select your location');
      return;
    }
    
    setLoading(true);
    
    // Process qualified locations
    setTimeout(() => {
      const isQualified = QUALIFIED_LOCATIONS.includes(selectedLocation);
      
      updateUserData({ 
        location: selectedLocation, 
        isQualified 
      });
      
      if (isQualified) {
        toast.success('Your location qualifies for our white-label program!');
        onQualified();
      } else if (selectedLocation !== 'Not listed') {
        toast.info('Your location is currently on our waitlist');
      }
      
      setLoading(false);
    }, 500);
  };

  const submitWaitlist = () => {
    if (!waitlistEmail.trim()) {
      toast.error('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(waitlistEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      updateUserData({ 
        email: waitlistEmail
      });
      toast.success("You've been added to our waitlist!");
      setLoading(false);
    }, 500);
  };

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
    updateUserData({ companyName: e.target.value });
  };

  const handleClientCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;
    setClientCount(count);
    updateUserData({ clientCount: count });
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="py-3">
        <CardTitle className="text-lg font-medium text-center">Check Availability</CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="space-y-2">
          {!showWaitlist ? (
            <>
              <LocationSelector 
                location={location} 
                onLocationChange={handleLocationChange} 
              />
              
              <LocationNotification 
                location={userData.location} 
                isQualified={userData.isQualified} 
              />

              <CompanyDetailsForm 
                companyName={companyName}
                clientCount={clientCount}
                onCompanyNameChange={handleCompanyNameChange}
                onClientCountChange={handleClientCountChange}
              />
            </>
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
