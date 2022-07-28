let counter = 3;

export async function baz() {
  if (counter <= 0) {
    return 'end';
  }

  // eslint-disable-next-line import/no-unresolved
  const { foo } = await import('app1/foo');

  counter--;
  return `baz + ${await foo()}`;
}
