import { describe, expect, it } from 'vitest';
import { formatMilliseconds } from '../src/index';

describe('对 formatMilliseconds 函数进行测试', () => {
    it('formatMilliseconds(41408000) should be 11:30:08', () => {
        expect(formatMilliseconds(41408000)).toBe('11:30:08');
    });
    it('formatMilliseconds(90000) should be 00:01:30', () => {
        expect(formatMilliseconds(90000)).toBe('00:01:30');
    });
    it('formatMilliseconds(0) should be 00:00:00', () => {
        expect(formatMilliseconds(0)).toBe('00:00:00');
    });
    it('formatMilliseconds(null) should be 00:00:00', () => {
        expect(formatMilliseconds(null as any)).toBe('00:00:00');
    });
});
