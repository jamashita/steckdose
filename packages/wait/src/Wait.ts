export const wait = (ms: number): Promise<void> => {
  return new Promise((resolve: (value: (void)) => void) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
