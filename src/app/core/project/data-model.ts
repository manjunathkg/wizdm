
export type wmProjectStatus = 'submitted' | 'evaluation' | 'accepted' | 'rejected' | 'completed';

export interface wmProjectLog {

  status : wmProjectStatus,
  comment: string,
  user   : string,
  time   : any
}

export interface wmApplication {

  name?          : string, // Application name
  pitch?         : string, // Elevator pitch
  description?   : string, // Background description
  revenues?      : string, // Revenue streams
  players?       : string, // Other similar players
  differences?   : string, // Uniquenesses
  users?         : string, // Target users
  target?        : string, // Target market (geo, ...)
  comments?      : string  // Aditional comments
}

export interface wmDevelopment {

  repositoryLink?: string,
  productionLink?: string,
  webLink?       : string
}

export interface wmProject {
  
  id?          : string,
  name         : string,
  pitch?       : string,

  body?        : string, // markdown formatted description

  //development? : wmDevelopment,
  
  owner?       : string,
  team?        : string[],
  
  status?      : wmProjectStatus,
  history?     : wmProjectLog[],
  
  created?     : any,
  updated?     : any
}