// via https://unpkg.com/browse/emojibase-data@6.0.0/meta/groups.json
export const allGroups = [
  [0, '😀', 'smileys-emotion'],
  [1, '👋', 'people-body'],
  [2, '✨', 'custom'],
  [3, '🐱', 'animals-nature'],
  [4, '🍎', 'food-drink'],
  [5, '🏠️', 'travel-places'],
  [6, '⚽', 'activities'],
  [7, '📝', 'objects'],
  [8, '⛔️', 'symbols'],
  [9, '🏁', 'flags']
].map(([id, emoji, name]) => ({ id, emoji, name }))

export const groups = [...allGroups.slice(0, 2), ...allGroups.slice(3)]
