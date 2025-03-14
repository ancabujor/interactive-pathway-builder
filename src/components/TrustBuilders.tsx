
import React from 'react';
import { RefreshCw, Tag, TrendingUp } from 'lucide-react';

const TrustBuilders: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-6 px-4">
      <div className="text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <RefreshCw className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-sm font-semibold mb-1">Recurring Revenue</h3>
        <p className="text-xs text-muted-foreground">Monthly subscription model creates predictable cash flow</p>
      </div>
      
      <div className="text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <Tag className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-sm font-semibold mb-1">White-Label Solution</h3>
        <p className="text-xs text-muted-foreground">Your clients never see our branding—only yours</p>
      </div>
      
      <div className="text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-sm font-semibold mb-1">Scalable Margins</h3>
        <p className="text-xs text-muted-foreground">The more clients you add, the higher your profits</p>
      </div>
    </div>
  );
};

export default TrustBuilders;
