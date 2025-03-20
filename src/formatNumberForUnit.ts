/**
 * 格式化数值为带单位
 * @example formatNumberForUnit(1000, 'k') // 1K
 * @param {Number} num 需要格式化的数值
 * @param {String} unit 单位，可选值：'k' 或 'w'
 * @returns {String} 格式化后的数值
 */
export function formatNumberForUnit(num: number, unit: 'k' | 'w'): string {
    const units: Record<'k' | 'w', number> = {
        k: 1000,
        w: 10000,
    };

    // if (!units[unit]) {
    //     throw new Error('Invalid unit. Use "k" for thousand or "w" for ten thousand.');
    // }

    if (num >= units[unit]) {
        return (num / units[unit]).toFixed(1).replace(/\.0$/, '') + unit;
    }

    return num.toString();
}
