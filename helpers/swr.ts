import useSWR from "swr"

import { Interactions, Substance } from "../types"

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export const useSubstances = (): {
  substances: Substance[]
  error: any
} => {
  const { data, error } = useSWR('/api/substances', fetcher)

  return {
    substances: data,
    error
  }
}

export const useInteractions = (): {
  interactions: Interactions
  error: any
} => {
  const { data, error } = useSWR('/api/interactions', fetcher)

  return {
    interactions: data,
    error
  }
}