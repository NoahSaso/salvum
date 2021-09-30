import type { NextPage } from 'next'

export type NextPageWithFallback = NextPage<{ fallback: { [key: string]: any } }>

export type PlausibleEvents = {
  substance: { name: string }
  substanceROA: { substance: string; roa: string; combined: string }
  substanceInteraction: { substance: string; otherSubstance: string; combined: string }
  interaction: { substance: string; otherSubstance: string; combined: string }

  venmo: never
  xmr: never
  eth: never
  ltc: never
  btc: never
}

// INTERACTIONS DATA
export interface Interaction {
  status: InteractionStatus
  note?: string
}

export type Interactions =
  Record<InteractionSubstance,
    Record<InteractionSubstance, Interaction>
  >

export type InteractionSubstance =
  | "Mushrooms"
  | "LSD"
  | "DMT"
  | "Mescaline"
  | "DOx"
  | "NBOMes"
  | "2C-x"
  | "2C-T-x"
  | "aMT"
  | "5-MeO-xxT"
  | "Cannabis"
  | "Ketamine"
  | "MXE"
  | "DXM"
  | "PCP"
  | "Nitrous"
  | "Amphetamines"
  | "MDMA"
  | "Cocaine"
  | "Caffeine"
  | "Alcohol"
  | "GHB/GBL"
  | "Opioids"
  | "Benzodiazepines"
  | "MAOIs"
  | "SSRIs"

// SUBSTANCES DATA (https://app.quicktype.io)
export interface Substance {
  url:                string
  experiencesUrl:     null | string
  name:               string
  aliases:            string[]
  aliasesStr:         string
  aliasesSubtitle?:    string // matched aliases in fuzzysort
  summary:            null | string
  reagents:           null | string
  classes:            Classes | null
  toxicity:           string[] | null
  addictionPotential: null | string
  tolerance:          Tolerance | null
  crossTolerances:    string[] | null
  roas:               ROA[]
  interactions:       SubstanceInteraction[] | null
}

export interface Classes {
  chemical:     string[] | null
  psychoactive: string[] | null
}

export interface SubstanceInteraction extends Interaction {
  name:   string
}

export interface ROA {
  name:             string
  dosage?:          Dosage[] | null
  duration?:        Dosage[] | null
  bioavailability?: string
}

export interface Dosage {
  name:  string
  value: null | string
  note?: string
}

export interface Tolerance {
  full: string
  half: null | string
  zero: null | string
}
