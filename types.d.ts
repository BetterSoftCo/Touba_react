declare module "*.png" {
    const src: string;
    export default src;
}
declare module "*.svg" {
    const svg: string;
    export default svg;
}
declare module "*.jpg" {
    const src: string;
    export default jpg;
}

declare global {
  namespace Express {
    interface Request {
      user: any;
      
    }

  }
  export default user;

}