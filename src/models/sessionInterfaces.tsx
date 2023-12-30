export interface Credentials {
  email: string,
  password: string,
  [key: string]: string
}

export interface ContextValue {
  session: (credentials: Credentials) => Promise<void>,
  dataToken: string
}

