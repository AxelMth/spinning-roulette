import { getFilters, getRestaurants } from './api-requester';

describe('apiRequester', () => {
  it('should work', () => {
    expect(getFilters()).toEqual('api-requester');
    expect(getRestaurants()).toEqual('api-requester');
  });
});
