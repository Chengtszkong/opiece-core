/**
 * 将毫秒数转换为 HH:MM:SS 格式
 * @param {Number} ms 总毫秒
 * @returns {String} HH:MM:SS
 */
export function formatMilliseconds(ms: number): string {
    if (!ms || ms <= 0) return '00:00:00'
    // 计算小时、分钟和秒
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)

    // 格式化为两位数
    const formattedHours = hours < 10 ? `0${hours}` : hours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    // 返回 HH:MM:SS 格式
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}