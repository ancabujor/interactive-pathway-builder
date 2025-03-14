
import React, { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { MapPin, ArrowRight } from 'lucide-react';

// Qualified locations (would come from API in a real application)
const QUALIFIED_LOCATIONS = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

interface LocationCheckerProps {
  onQualified: () => void;
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ onQualified }) => {
  const { userData, updateUserData } = useUserContext();
  const [location, setLocation] = useState(userData.location || '');
  const [loading, setLoading] = useState(false);

  const checkLocation = () => {
    if (!location.trim()) {
      toast.error('Please enter your location');
      return;
    }
    
    setLoading(true);
    
    // Simulate API check with timeout
    setTimeout(() => {
      const isQualified = QUALIFIED_LOCATIONS.some(
        qualifiedLocation => location.toLowerCase().includes(qualifiedLocation.toLowerCase())
      );
      
      updateUserData({ 
        location, 
        isQualified 
      });
      
      if (isQualified) {
        toast.success('Your location qualifies for our white-label program!');
        onQualified();
      } else {
        toast.info('Your location is currently on our waitlist');
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto hover-scale">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl font-medium text-center">Check Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Your Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                id="location"
                placeholder="City, State, or Country" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          
          {userData.isQualified === false && userData.location && (
            <div className="text-sm p-3 bg-muted rounded-md">
              <p className="font-medium">Your location is on our waitlist</p>
              <p className="text-muted-foreground mt-1">
                We're expanding rapidly and will notify you when we're available in your area.
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={checkLocation}
          disabled={loading}
        >
          {loading ? (
            <span className="inline-flex items-center">
              Checking... <span className="ml-2 animate-pulse-subtle">⋯</span>
            </span>
          ) : (
            <span className="inline-flex items-center">
              Check Availability <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationChecker;
