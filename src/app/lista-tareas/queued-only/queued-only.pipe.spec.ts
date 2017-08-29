import { QueuedOnlyPipe } from './queued-only.pipe';

describe('QueuedOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new QueuedOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
