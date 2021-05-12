export type TNotRegisteredLead = { iin: string };

export type TRegisteredLead = { iin: string, phone: string, name: string };

export type TSearchLead = { status: 'search_lead' };

export type TRegisterLead = { status: 'register_lead', notRegisteredLead: TNotRegisteredLead };

export type TShowLead = { status: 'show_lead', registeredLead: TRegisteredLead };

export type TRegisterStates = | TSearchLead | TRegisterLead | TShowLead;