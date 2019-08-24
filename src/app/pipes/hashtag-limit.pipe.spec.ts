import { HashtagLimitPipe } from './hashtag-limit.pipe';

describe('HashtagLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new HashtagLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
