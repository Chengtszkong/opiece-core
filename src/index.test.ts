import { describe, expect, it } from 'vitest'
import { sum } from './index'

describe('对sum求和函数进行测试', () => {
    it('sum(1, 2) should be 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('sum(0, 0) should be 0', () => {
        expect(sum(0, 0)).toBe(0)
    })
    it('sum(2, null) should be null', () => {
        expect(sum(2, null as any)).toBe(null)
    })
})