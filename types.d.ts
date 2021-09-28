import type { NextPage } from 'next'

export type NextPageWithFallback = NextPage<{ fallback: { [key: string]: any } }>

// https://app.quicktype.io
export interface Substance {
  url:                string;
  experiencesUrl:     null | string;
  name:               string;
  aliases:            string[];
  aliasesStr:         string;
  summary:            null | string;
  reagents:           null | string;
  classes:            Classes | null;
  toxicity:           string[] | null;
  addictionPotential: null | string;
  tolerance:          Tolerance | null;
  crossTolerances:    string[] | null;
  roas:               Roa[];
  interactions:       Interaction[] | null;
}

export interface Classes {
  chemical:     string[] | null;
  psychoactive: string[] | null;
}

export interface Interaction {
  status: string;
  note?:  string;
  name:   string;
}

export interface Roa {
  name:             string;
  dosage?:          Dosage[] | null;
  duration?:        Dosage[] | null;
  bioavailability?: string;
}

export interface Dosage {
  name:  string;
  value: null | string;
  note?: string;
}

export interface Tolerance {
  full: string;
  half: null | string;
  zero: null | string;
}

