import { CATEGORY_STYLES } from '../utils/categories'

function CategoryBadge({ category }) {
  const safeCategory = category || 'General'

  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full ${CATEGORY_STYLES[safeCategory] || CATEGORY_STYLES.General}`}
    >
      {safeCategory}
    </span>
  )
}

export default CategoryBadge
