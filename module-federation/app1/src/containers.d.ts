declare module 'module1/baz' {
  function baz(): Promise<string>;
  export { baz };
}

declare module 'module1/Root' {
  const Text: React.ComponentType;
  export default Text;
}
