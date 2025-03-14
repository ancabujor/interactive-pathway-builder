
import React from 'react';
import { Shield, BarChart4, Calendar } from 'lucide-react';

const TrustBuilders: React.FC = () => {
  return <div className="grid grid-cols-3 gap-2 mt-3 w-full max-w-[60%] mx-auto">
      <div className="text-center">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
          <Shield className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-xs font-semibold">Proven Technology</h3>
      </div>
      
      <div className="text-center">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
          <BarChart4 className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-xs font-semibold">Recurring Revenue</h3>
      </div>
      
      <div className="text-center">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
          <Calendar className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-xs font-semibold">Rapid Implementation</h3>
      </div>
    </div>;
};

export default TrustBuilders;
