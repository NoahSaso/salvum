import useSWR from "swr"

import { Substance } from "../types"

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export const useSubstances = (): {
  substances: Substance[]
  isLoading: boolean
} => {
  const { data, error } = useSWR('/api/substances', fetcher)

  return {
    substances: data,
    isLoading: !error && !data,
  }
}

export const useInteractions = (): {
  interactions: any
  isLoading: boolean
} => {
  const { data, error } = useSWR('/api/interactions', fetcher)

  return {
    interactions: data,
    isLoading: !error && !data,
  }
}