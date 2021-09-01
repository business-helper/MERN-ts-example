export interface IMember {
  id?: string;
  name: string;
  country: string;
}


export interface IError {
  name: string;
  message: string;
  stack?: string;
}
