/**
 * An object mapping exceptional Portuguese words to their plural forms.
 * @type {Record<string, string>}
 */
export const pluralizeExceptionsPt: Record<string, string> = {
  anão: 'anões',
  barril: 'barris',
  farol: 'faróis',
  gentil: 'gentis',
  hotel: 'hotéis',
  projétil: 'projéteis',
  réptil: 'répteis',
  fóssil: 'fósseis',
  cônsul: 'cônsules',
  bem: 'bens',
  cidadã: 'cidadãs',
  jovem: 'jovens',
  capitão: 'capitães',
  escrivão: 'escrivães',
  papel: 'papéis',
  funil: 'funis',
  charlatão: 'charlatães',
  cristão: 'cristãos',
  alemã: 'alemãs',
  cidadão: 'cidadãos',
  mão: 'mãos',
  qualquer: 'quaisquer',
  pão: 'pães',
  alemão: 'alemães',
  cão: 'cães',
  irmão: 'irmãos',
  consul: 'consules',
  mal: 'males',
  réu: 'réus',
  grão: 'grãos',
  hão: 'hães',
  país: 'países',
  Bem: 'Bens',
  Anão: 'Anões',
  Barril: 'Barris',
  Farol: 'Faróis',
  Gentil: 'Gentis',
  Hotel: 'Hotéis',
  Projétil: 'Projéteis',
  Réptil: 'Répteis',
  Fóssil: 'Fósseis',
  Cônsul: 'Cônsules',
  Cidadã: 'Cidadãs',
  Jovem: 'Jovens',
  Capitão: 'Capitães',
  Escrivão: 'Escrivães',
  Papel: 'Papéis',
  Funil: 'Funis',
  Charlatão: 'Charlatães',
  Cristão: 'Cristãos',
  Alemã: 'Alemãs',
  Cidadão: 'Cidadãos',
  Mão: 'Mãos',
  Qualquer: 'Quaisquer',
  Pão: 'Pães',
  Alemão: 'Alemães',
  Cão: 'Cães',
  Irmão: 'Irmãos',
  Consul: 'Consules',
  Mal: 'Males',
  Réu: 'Réus',
  Grão: 'Grãos',
  Hão: 'Hães',
  País: 'Países',
  ANÃO: 'ANÕES',
  BARRIL: 'BARRIS',
  FAROL: 'FARÓIS',
  GENTIL: 'GENTIS',
  HOTEL: 'HOTÉIS',
  PROJÉTIL: 'PROJÉTEIS',
  RÉPTIL: 'RÉPTEIS',
  FÓSSIL: 'FÓSSEIS',
  CÔNSUL: 'CÔNSULES',
  CIDADÃO: 'CIDADÃOS',
  MÃO: 'MÃOS',
  QUALQUER: 'QUAISQUER',
  PÃO: 'PÃES',
  ALEMÃO: 'ALEMÃES',
  CÃO: 'CÃES',
  IRMÃO: 'IRMÃOS',
  CONSUL: 'CONSULES',
  MAL: 'MALES',
  RÉU: 'RÉUS',
  GRÃO: 'GRÃOS',
  HÃO: 'HÃES',
  BEM: 'BENS',
  CIDADÃ: 'CIDADÃS',
  JOVEM: 'JOVENS',
  CAPITÃO: 'CAPITÃES',
  ESCRIVÃO: 'ESCRIVÃES',
  PAPEL: 'PAPEÍS',
  FUNIL: 'FUNIS',
  CHARLATÃO: 'CHARLATÃES',
  CRISTÃO: 'CRISTÃOS',
  ALEMÃ: 'ALEMÃS',
  PAÍS: 'PAÍSES',
}

/**
 * An object defining rules for transforming Portuguese words from singular to plural.
 * @type {Record<string, string>}
 */
export const pluralizeRulesPt: Record<string, string> = {
  ão: 'ões',
  ao: 'oes',
  ês: 'eses',
  es: 'eses',
  m: 'ns',
  l: 'is',
  r: 'res',
  us: 'i',
  x: 'xes',
  z: 'zes',
  ÃO: 'ÕES',
  AO: 'OES',
  ÊS: 'ESES',
  ES: 'ESES',
  M: 'NS',
  L: 'IS',
  R: 'RES',
  US: 'I',
  X: 'XES',
  Z: 'ZES',
}

/**
 * Converts a Portuguese word from singular to plural.
 *
 * First, it checks if the word is already in plural form. Then, it checks if the word is listed in the exceptions,
 * returning its plural form if it is. If not in the exceptions, it applies pluralization rules.
 * If no rule applies, it simply adds 's' at the end of the word.
 *
 * @param {string} string - The Portuguese word to be pluralized.
 * @returns {string} The word in plural form.
 */
export const pluralizePt = (string: string): string => {
  // handle null and undefined
  if (!string) return ''

  // belong to any exceptions?
  if (pluralizeExceptionsPt[string]) {
    return pluralizeExceptionsPt[string]
  }

  // don't need to pluralize
  if (/(s|ões|eses|ns|is|res|xes|zes|ãos|S|ÕES|ESES|NS|IS|RES|XES|ZES|ÃOS)$/.test(string)) {
    return string
  }

  // does not belong to any exception. But have any rules?
  const ruleEntry = Object.entries(pluralizeRulesPt).find(([rule]) => new RegExp(`${rule}$`).test(string))
  if (ruleEntry) {
    const [rule, value] = ruleEntry
    return string.replace(new RegExp(`${rule}$`), value)
  }

  // does not belong to any exceptions nor rules
  return `${string}s`
}
