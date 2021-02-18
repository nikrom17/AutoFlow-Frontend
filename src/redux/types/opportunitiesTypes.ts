import { DefaultSchema } from './commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Opportunities {
  funnelSteps: number[];
  id: number;
  name: string;
}

export interface OpportunitiesState {
  name: DefaultSchema<Opportunities>;
  info: DefaultSchema<any>;
}
