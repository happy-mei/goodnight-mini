export const formatDate = (date: Date, format?: string) => {
  const y = date.getFullYear().toString()
  let m:number | string = date.getMonth() + 1
  let d:number | string = date.getDate()
  m = (m < 10 ? '0' : '') + m
  d = (d < 10 ? '0' : '') + d
  if (format) {
    return format.replace('YYYY', y).replace('MM', m).replace('DD', d)
  } else {
    return `${y}-${m}-${d}`
  }
}

export const formatTime = (date: Date) => {
  const h = date.getHours()
  const m = date.getMinutes()
  return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`
}

export const getDayCn = (date: Date) => {
  const dayMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
  }
  return dayMap[date.getDay()]
}
