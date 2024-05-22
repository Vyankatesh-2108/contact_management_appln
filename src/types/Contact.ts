// src/types/Contact.ts
export enum ContactStatus {
    Active = 'active',
    Inactive = 'inactive',
}
  
export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: ContactStatus;
}

export interface Country {
    country: string;
    countryInfo: {
      _id: number;
      lat: number;
      long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}