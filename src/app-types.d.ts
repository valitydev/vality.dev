declare module "*.svg" {
  const content: React.FC<any>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
