
import React from 'react';
import { User, Building, Package, File, Briefcase } from 'lucide-react';

export interface ClientType {
  title: string;
  icon: React.ReactNode;
}

export interface Client {
  name: string;
  type: ClientType;
  location: string;
}

// Generic client types with icons
export const clientTypes: ClientType[] = [
  { title: "Primary Client", icon: <User className="h-4 w-4 text-blue-600" /> },
  { title: "Business Account", icon: <Building className="h-4 w-4 text-green-600" /> },
  { title: "Service Client", icon: <Package className="h-4 w-4 text-purple-600" /> },
  { title: "Project Account", icon: <File className="h-4 w-4 text-orange-600" /> },
  { title: "Partner Client", icon: <Briefcase className="h-4 w-4 text-red-600" /> },
];

// Generate array of client data based on client count
export const generateClients = (companyName: string, clientCount: number, location: string): Client[] => {
  return Array.from({ length: Math.min(clientCount, 5) }, (_, index) => ({
    name: `${companyName} ${index > 0 ? (index + 1) : ''}`,
    type: clientTypes[index % clientTypes.length],
    location: location
  }));
};

// Calculate remaining available client slots (out of 5)
export const calculateRemainingSlots = (clientCount: number): number => {
  return 5 - Math.min(clientCount, 5);
};
