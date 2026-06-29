/**
 * 法定节假日数据
 * 按年维护，每年需要更新
 */

export interface Holiday {
  /** 节日名称 */
  name: string;
  /** 节日日期（MM-DD 格式） */
  date: string;
  /** 是否为调休工作日 */
  isWorkday?: boolean;
}

// 2024年法定节假日
const holidays2024: Holiday[] = [
  // 调休工作日
  { name: '调休', date: '02-04', isWorkday: true },
  { name: '调休', date: '02-18', isWorkday: true },
  { name: '调休', date: '04-07', isWorkday: true },
  { name: '调休', date: '04-28', isWorkday: true },
  { name: '调休', date: '05-11', isWorkday: true },
  { name: '调休', date: '09-14', isWorkday: true },
  { name: '调休', date: '09-29', isWorkday: true },
  { name: '调休', date: '10-12', isWorkday: true },
  // 法定假日
  { name: '元旦', date: '01-01' },
  { name: '春节', date: '02-10' },
  { name: '春节', date: '02-11' },
  { name: '春节', date: '02-12' },
  { name: '春节', date: '02-13' },
  { name: '春节', date: '02-14' },
  { name: '春节', date: '02-15' },
  { name: '春节', date: '02-16' },
  { name: '春节', date: '02-17' },
  { name: '清明节', date: '04-04' },
  { name: '清明节', date: '04-05' },
  { name: '清明节', date: '04-06' },
  { name: '劳动节', date: '05-01' },
  { name: '劳动节', date: '05-02' },
  { name: '劳动节', date: '05-03' },
  { name: '劳动节', date: '05-04' },
  { name: '劳动节', date: '05-05' },
  { name: '端午节', date: '06-08' },
  { name: '端午节', date: '06-09' },
  { name: '端午节', date: '06-10' },
  { name: '中秋节', date: '09-15' },
  { name: '中秋节', date: '09-16' },
  { name: '中秋节', date: '09-17' },
  { name: '国庆节', date: '10-01' },
  { name: '国庆节', date: '10-02' },
  { name: '国庆节', date: '10-03' },
  { name: '国庆节', date: '10-04' },
  { name: '国庆节', date: '10-05' },
  { name: '国庆节', date: '10-06' },
  { name: '国庆节', date: '10-07' },
];

// 2025年法定节假日
const holidays2025: Holiday[] = [
  { name: '元旦', date: '01-01' },
  { name: '春节', date: '01-28' },
  { name: '春节', date: '01-29' },
  { name: '春节', date: '01-30' },
  { name: '春节', date: '01-31' },
  { name: '春节', date: '02-01' },
  { name: '春节', date: '02-02' },
  { name: '春节', date: '02-03' },
  { name: '春节', date: '02-04' },
  { name: '清明节', date: '04-04' },
  { name: '清明节', date: '04-05' },
  { name: '清明节', date: '04-06' },
  { name: '劳动节', date: '05-01' },
  { name: '劳动节', date: '05-02' },
  { name: '劳动节', date: '05-03' },
  { name: '劳动节', date: '05-04' },
  { name: '劳动节', date: '05-05' },
  { name: '端午节', date: '05-31' },
  { name: '端午节', date: '06-01' },
  { name: '端午节', date: '06-02' },
  { name: '中秋节', date: '10-06' },
  { name: '中秋节', date: '10-07' },
  { name: '中秋节', date: '10-08' },
  { name: '国庆节', date: '10-01' },
  { name: '国庆节', date: '10-02' },
  { name: '国庆节', date: '10-03' },
  { name: '国庆节', date: '10-04' },
  { name: '国庆节', date: '10-05' },
];

// 2026年法定节假日
const holidays2026: Holiday[] = [
  { name: '元旦', date: '01-01' },
  { name: '元旦', date: '01-02' },
  { name: '元旦', date: '01-03' },
  { name: '春节', date: '02-17' },
  { name: '春节', date: '02-18' },
  { name: '春节', date: '02-19' },
  { name: '春节', date: '02-20' },
  { name: '春节', date: '02-21' },
  { name: '春节', date: '02-22' },
  { name: '春节', date: '02-23' },
  { name: '清明节', date: '04-05' },
  { name: '清明节', date: '04-06' },
  { name: '清明节', date: '04-07' },
  { name: '劳动节', date: '05-01' },
  { name: '劳动节', date: '05-02' },
  { name: '劳动节', date: '05-03' },
  { name: '劳动节', date: '05-04' },
  { name: '劳动节', date: '05-05' },
  { name: '端午节', date: '06-19' },
  { name: '端午节', date: '06-20' },
  { name: '端午节', date: '06-21' },
  { name: '中秋节', date: '09-25' },
  { name: '中秋节', date: '09-26' },
  { name: '中秋节', date: '09-27' },
  { name: '国庆节', date: '10-01' },
  { name: '国庆节', date: '10-02' },
  { name: '国庆节', date: '10-03' },
  { name: '国庆节', date: '10-04' },
  { name: '国庆节', date: '10-05' },
  { name: '国庆节', date: '10-06' },
  { name: '国庆节', date: '10-07' },
  { name: '国庆节', date: '10-08' },
];

const holidaysByYear: Record<number, Holiday[]> = {
  2024: holidays2024,
  2025: holidays2025,
  2026: holidays2026,
};

/**
 * 获取指定日期的节假日信息
 * @param month 日历月份（0-11）
 * @param day 日历日（1-31）
 * @param year 年份
 * @returns 节假日名称或空字符串
 */
export function getHolidayName(month: number, day: number, year: number): string {
  const holidays = holidaysByYear[year] ?? [];
  const md = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const holiday = holidays.find(h => h.date === md);
  return holiday !== undefined ? holiday.name : '';
}

/**
 * 获取指定日期的完整节假日信息
 * @returns Holiday 对象或 undefined
 */
export function getHolidayInfo(month: number, day: number, year: number): Holiday | undefined {
  const holidays = holidaysByYear[year] ?? [];
  const md = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return holidays.find(h => h.date === md);
}
