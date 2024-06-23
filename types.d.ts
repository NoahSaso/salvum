import type { NextPage } from "next"

export type NextPageWithFallback = NextPage<{
  fallback: { [key: string]: any }
}>

export type PlausibleEvents = {
  substance: {
    name: string
  }
  substanceROA: {
    substance: string
    roa: string
    combined: string
  }
  substanceInteraction: {
    substance: string
    otherSubstance: string
    combined: string
  }
  interaction: {
    substance: string
    otherSubstance: string
    combined: string
  }

  venmo: never
  xmr: never
  eth: never
  sol: never
  btc: never
}

// INTERACTIONS DATA
export interface Interaction {
  status: InteractionStatus
  note?: string | null
}

export type Interactions = Record<
  InteractionSubstance,
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
  url: string
  experiencesUrl: string | null
  name: string
  aliases: string[]
  aliasesStr: string
  aliasesSubtitle?: string // matched aliases in fuzzysort
  summary: string | null
  reagents: string | null
  classes: Classes | null
  toxicity: string[] | null
  addictionPotential: string | null
  tolerance: Tolerance | null
  crossTolerances: string[] | null
  roas: ROA[]
  interactions: SubstanceInteraction[] | null
}

export interface Classes {
  chemical: string[] | null
  psychoactive: string[] | null
}

export interface SubstanceInteraction extends Interaction {
  name: string
}

export interface ROA {
  name: string
  dosage?: Dosage[] | null
  duration?: Dosage[] | null
  bioavailability?: string | null
}

export interface Dosage {
  name: string
  value: string | null
  note?: string | null
}

export interface Tolerance {
  full: string
  half: string | null
  zero: string | null
}
