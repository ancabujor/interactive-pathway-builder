
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  return (
    <Card className={`w-full h-full overflow-hidden shadow-lg border-2 border-primary/10 transition-all duration-300 hover:shadow-xl hover:border-primary/20 ${className}`}>
      <CardContent className="p-0 h-full">
        <iframe 
          src="https://demo.folio.la/uOlaHJrK" 
          className="w-full h-full border-0"
          title="AI Front Desk Dashboard Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
