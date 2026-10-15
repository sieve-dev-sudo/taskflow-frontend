import { CATEGORY_STYLES } from '../utils/categories'
import { useLanguage } from '../context/LanguageContext'

function CategoryBadge({ category }) {
  const { t } = useLanguage()
  const safeCategory = CATEGORY_STYLES[category] ? category : 'General'

  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full font-medium ${CATEGORY_STYLES[safeCategory]}`}
    >
      {t(`category.${safeCategory}`)}
    </span>
  )
}

export default CategoryBadge
