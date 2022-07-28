declare module 'app1/Text' {
  const Text: React.ComponentType<{ children: string }>;
  export default Text;
}

declare module 'app1/foo' {
  function foo(): Promise<string>;
  export { foo };
}
