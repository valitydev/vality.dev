declare module "*.svg" {
  const content: React.SVGProps<SVGSVGElement>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
