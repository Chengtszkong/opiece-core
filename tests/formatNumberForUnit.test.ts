import { describe, expect, it } from 'vitest';
import { formatNumberForUnit } from '../src/formatNumberForUnit';

describe('对 formatNumberForUnit 进行测试', () => {
    it('should format numbers correctly', () => {
        expect(formatNumberForUnit(999, 'k')).toBe('999');
        expect(formatNumberForUnit(1000, 'k')).toBe('1k');
        expect(formatNumberForUnit(5000, 'k')).toBe('5k');
        expect(formatNumberForUnit(10000, 'k')).toBe('10k');
        expect(formatNumberForUnit(10999, 'w')).toBe('1.1w');
        expect(formatNumberForUnit(23555, 'w')).toBe('2.4w');
        expect(formatNumberForUnit(9999, 'w')).toBe('9999');
    });
});
