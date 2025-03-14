
import { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { toast } from 'sonner';
import { QUALIFIED_LOCATIONS } from '@/components/location/LocationSelector';

interface UseLocationCheckerProps {
  onQualified: () => void;
}

export function useLocationChecker({ onQualified }: UseLocationCheckerProps) {
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

  return {
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
  };
}
