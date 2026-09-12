import { CATEGORY_STYLES } from '../utils/categories'

function CategoryBadge({ category }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_STYLES[category] || CATEGORY_STYLES.General}`}
    >
      {category}
    </span>
  )
}

export default CategoryBadge
