/**
 * Headline numbers.
 *
 * Every metric carries a `source` naming the system or role it came from.
 * An unattributed number on a portfolio reads as invented, and cannot be
 * defended in an interview. If a number cannot be sourced, it does not belong
 * in this file.
 */

export interface Metric {
  value: string
  label: string
  source: string
}

export const headlineMetrics: Metric[] = [
  {
    value: '3,000+',
    label: 'Active policies monitored',
    source: 'TaskMaster, Minet Uganda',
  },
  {
    value: '40%',
    label: 'Manual processing removed',
    source: 'TaskMaster, Minet Uganda',
  },
  {
    value: '99%+',
    label: 'Uptime sustained for 40+ staff',
    source: 'IT Operations, Minet Uganda',
  },
  {
    value: '6+',
    label: 'Years building production systems',
    source: 'Nmicros 2020, to present',
  },
]
