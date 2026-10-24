/**
 * Picks the translation key for the greeting that matches the hour of day.
 * 5 to 11 is morning, 12 to 17 afternoon, 18 to 20 evening, otherwise night.
 * @param {number} hour - Hour of the day from 0 to 23.
 * @returns {string} Translation key such as "greeting.morning".
 */
export function getGreetingKey(hour) {
  if (hour >= 5 && hour < 12) return 'greeting.morning'
  if (hour >= 12 && hour < 18) return 'greeting.afternoon'
  if (hour >= 18 && hour < 21) return 'greeting.evening'
  return 'greeting.night'
}
