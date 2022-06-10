import { getDatabaseProperties } from './notion';

describe('notion', () => {
  it('should work', () => {
    expect(getDatabaseProperties("", "")).toEqual('notion');
  });
});
