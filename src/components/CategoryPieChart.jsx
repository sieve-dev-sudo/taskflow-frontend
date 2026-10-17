import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useLanguage } from '../context/LanguageContext'

const CATEGORY_COLORS = {
  General: '#94a3b8',
  Work: '#3b82f6',
  Personal: '#a855f7',
  Shopping: '#ec4899',
  Health: '#14b8a6',
}

const FALLBACK_COLOR = '#94a3b8'

function getColor(name) {
  return CATEGORY_COLORS[name] || FALLBACK_COLOR
}

function ChartTooltip({ active, payload, total }) {
  if (!active || !payload || payload.length === 0) return null
  const { label, value, name } = payload[0].payload
  const percent = Math.round((value / total) * 100)

  return (
    <div className="px-3 py-2 text-sm rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-100">
      <span
        className="inline-block w-2.5 h-2.5 rounded-full mr-2"
        style={{ backgroundColor: getColor(name) }}
      />
      <span className="font-medium">{label}</span>
      <span className="ml-2 text-slate-500 dark:text-slate-300">
        {value} ({percent}%)
      </span>
    </div>
  )
}

function CategoryPieChart({ data }) {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState(null)

  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  if (total === 0) {
    return (
      <p className="text-center text-sm text-slate-400 py-8">
        {t('analytics.noData')}
      </p>
    )
  }

  const sortedData = [...data].sort((a, b) => b.value - a.value)
  const isDimmed = (name) => hovered !== null && hovered !== name

  return (
    <div>
      <div className="relative h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sortedData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius={62}
              outerRadius={92}
              paddingAngle={3}
              cornerRadius={5}
              stroke="none"
              onMouseEnter={(_, index) => setHovered(sortedData[index].name)}
              onMouseLeave={() => setHovered(null)}
            >
              {sortedData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={getColor(entry.name)}
                  fillOpacity={isDimmed(entry.name) ? 0.3 : 1}
                />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip total={total} />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            aria-hidden="true"
            className="text-3xl font-bold text-slate-800 dark:text-slate-100"
          >
            {total}
          </span>
          <span className="sr-only">{t('stats.total', { count: total })}</span>
        </div>
      </div>

      <ul className="mt-4 space-y-1" aria-label={t('analytics.byCategory')}>
        {sortedData.map((entry) => {
          const ratio = (entry.value / total) * 100
          return (
            <li
              key={entry.name}
              onMouseEnter={() => setHovered(entry.name)}
              onMouseLeave={() => setHovered(null)}
              className={`px-2 py-1.5 rounded-lg transition-opacity hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                isDimmed(entry.name) ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: getColor(entry.name) }}
                />
                <span className="flex-1 text-sm text-slate-700 dark:text-slate-200">
                  {entry.label}
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {entry.value}
                </span>
                <span className="w-12 text-right text-xs text-slate-500 dark:text-slate-400">
                  {Math.round(ratio)}%
                </span>
              </div>
              <div className="mt-1.5 ml-6 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${ratio}%`, backgroundColor: getColor(entry.name) }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryPieChart
