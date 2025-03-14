
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardIframeProps {
  className?: string;
}

const DashboardIframe: React.FC<DashboardIframeProps> = ({ className }) => {
  return (
    <Card className={`w-full h-full overflow-hidden ${className}`}>
      <CardContent className="p-0 h-full">
        <iframe 
          src="https://demo.folio.la/uOlaHJrK" 
          className="w-full h-full border-0" 
          title="Dashboard Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default DashboardIframe;
