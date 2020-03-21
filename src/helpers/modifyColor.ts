import chroma from 'chroma-js';

export function modifyColor(action: string, color: string, amount: number) {
  // @ts-ignore
  return new chroma(color)[action](amount).hex();
}
