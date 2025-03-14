
import React, { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { MapPin, ArrowRight, Globe, Mail } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Qualified locations
const QUALIFIED_LOCATIONS = ['United States', 'United Kingdom', 'Australia'];

interface LocationCheckerProps {
  onQualified: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ onQualified }) => {
  const { userData, updateUserData } = useUserContext();
  const [location, setLocation] = useState(userData.location || '');
  const [loading, setLoading] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');

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
    }
  };

  const checkLocation = () => {
    if (!location) {
      toast.error('Please select your location');
      return;
    }
    
    setLoading(true);
    
    // Process qualified locations
    setTimeout(() => {
      const isQualified = QUALIFIED_LOCATIONS.includes(location);
      
      updateUserData({ 
        location, 
        isQualified 
      });
      
      if (isQualified) {
        toast.success('Your location qualifies for our white-label program!');
        onQualified();
      } else if (location !== 'Not listed') {
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

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="py-3">
        <CardTitle className="text-lg font-medium text-center">Check Availability</CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="space-y-2">
          {!showWaitlist ? (
            <>
              <div className="space-y-1">
                <Label htmlFor="location">Where are your clients located?</Label>
                <div className="relative">
                  <Select 
                    value={location} 
                    onValueChange={handleLocationChange}
                  >
                    <SelectTrigger id="location" className="w-full">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Select client location" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {QUALIFIED_LOCATIONS.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                      <SelectItem value="Not listed">Not listed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {userData.isQualified === false && userData.location && userData.location !== 'Not listed' && (
                <div className="text-xs p-2 bg-muted rounded-md">
                  <p className="font-medium">Your location is on our waitlist</p>
                  <p className="text-muted-foreground mt-0.5">
                    We'll notify you when we're available in your area.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-3">
              <div className="text-xs p-2 bg-blue-100 text-blue-800 rounded-md">
                <p className="font-medium">Join our waitlist</p>
                <p className="mt-0.5">
                  We're not available in your region yet, but we're expanding quickly!
                </p>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="waitlist-email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    id="waitlist-email"
                    placeholder="you@example.com" 
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="pl-9"
                    type="email"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="py-2">
        {!showWaitlist ? (
          <Button 
            className="w-full"
            onClick={checkLocation}
            disabled={loading || !location}
            size="sm"
          >
            {loading ? (
              <span className="inline-flex items-center">
                Checking... <span className="ml-2">⋯</span>
              </span>
            ) : (
              <span className="inline-flex items-center">
                Check Availability <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            )}
          </Button>
        ) : (
          <Button 
            className="w-full"
            onClick={submitWaitlist}
            disabled={loading}
            size="sm"
          >
            {loading ? (
              <span className="inline-flex items-center">
                Submitting... <span className="ml-2">⋯</span>
              </span>
            ) : (
              <span className="inline-flex items-center">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default LocationChecker;
