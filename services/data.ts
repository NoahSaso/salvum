import interactions from '../data/interactions.json'
import substances from '../data/substances.json'

export const getInteractions = () => interactions

// sort substances only once
let substancesSorted = false

export const getSubstances = () => {
  if (!substancesSorted) {
    substances.sort((a, b) => a.name.localeCompare(b.name))
    substancesSorted = true
  }

  return substances
}
