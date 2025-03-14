
import React from 'react';

interface LocationNotificationProps {
  location: string;
  isQualified: boolean;
}

const LocationNotification: React.FC<LocationNotificationProps> = ({
  location,
  isQualified
}) => {
  if (!location || (location === 'Not listed') || isQualified) {
    return null;
  }

  return (
    <div className="text-xs p-2 bg-muted rounded-md">
      <p className="font-medium">Your location is on our waitlist</p>
      <p className="text-muted-foreground mt-0.5">
        We'll notify you when we're available in your area.
      </p>
    </div>
  );
};

export default LocationNotification;
