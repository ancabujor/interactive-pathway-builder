
import React from 'react';
import { Globe } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Qualified locations
export const QUALIFIED_LOCATIONS = ['United States', 'United Kingdom', 'Australia'];

interface LocationSelectorProps {
  location: string;
  onLocationChange: (value: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  location,
  onLocationChange
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor="location">Where are your clients located?</Label>
      <div className="relative">
        <Select 
          value={location} 
          onValueChange={onLocationChange}
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
  );
};

export default LocationSelector;
