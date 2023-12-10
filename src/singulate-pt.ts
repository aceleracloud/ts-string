/**
 * A dictionary mapping plural words to their singular exceptions in Portuguese.
 * This object contains specific cases where the standard rules of singularization do not apply.
 * Each key is a plural word, and its corresponding value is the singular form of that word.
 * @type {Record<string, string>}
 */
export const singulateExceptionsPt: Record<string, string> = {
  cidadões: 'cidadão',
  mãos: 'mão',
  quaisquer: 'qualquer',
  lápis: 'lápis',
  ônibus: 'ônibus',
  vírus: 'vírus',
  atlas: 'atlas',
  crisântemo: 'crisântemo',
  pães: 'pão',
  cães: 'cão',
  mães: 'mãe',
  pés: 'pé',
  países: 'país',
  homens: 'homem',
  mulheres: 'mulher',
  caracteres: 'caráter',
  juniores: 'júnior',
  seniores: 'sênior',
  leões: 'leão',
  povos: 'povo',
  árvores: 'árvore',
  filhos: 'filho',
  folhas: 'folha',
  lobos: 'lobo',
  olhos: 'olho',
  fósseis: 'fóssil',
  anzóis: 'anzol',
  lençóis: 'lençol',
  raízes: 'raiz',
  hifens: 'hífen',
  táxis: 'táxi',
  Cidadões: 'Cidadão',
  Mãos: 'Mão',
  Quaisquer: 'Qualquer',
  Lápis: 'Lápis',
  Ônibus: 'Ônibus',
  Vírus: 'Vírus',
  Atlas: 'Atlas',
  Crisântemo: 'Crisântemo',
  Pães: 'Pão',
  Cães: 'Cão',
  Mães: 'Mãe',
  Pés: 'Pé',
  Países: 'País',
  Homens: 'Homem',
  Mulheres: 'Mulher',
  Caracteres: 'Caráter',
  Juniores: 'Júnior',
  Seniores: 'Sênior',
  Leões: 'Leão',
  Povos: 'Povo',
  Árvores: 'Árvore',
  Filhos: 'Filho',
  Folhas: 'Folha',
  Lobos: 'Lobo',
  Olhos: 'Olho',
  Fósseis: 'Fóssil',
  Anzóis: 'Anzol',
  Lençóis: 'Lençol',
  Raízes: 'Raiz',
  Hifens: 'Hífen',
  Táxis: 'Táxi',
  CIDADÕES: 'CIDADÃO',
  MÃOS: 'MÃO',
  QUAISQUER: 'QUALQUER',
  LÁPIS: 'LÁPIS',
  ÔNIBUS: 'ÔNIBUS',
  VÍRUS: 'VÍRUS',
  ATLAS: 'ATLAS',
  CRISÂNTEMO: 'CRISÂNTEMO',
  PÃES: 'PÃO',
  CÃES: 'CÃO',
  MÃES: 'MÃE',
  PÉS: 'PÉ',
  PAÍSES: 'PAÍS',
  HOMENS: 'HOMEM',
  MULHERES: 'MULHER',
  CARACTERES: 'CARÁTER',
  JUNIORES: 'JÚNIOR',
  SENIORES: 'SÊNIOR',
  LEÕES: 'LEÃO',
  POVOS: 'POVO',
  ÁRVORES: 'ÁRVORE',
  FILHOS: 'FILHO',
  FOLHAS: 'FOLHA',
  LOBOS: 'LOBO',
  OLHOS: 'OLHO',
  FÓSSEIS: 'FÓSSIL',
  ANZÓIS: 'ANZOL',
  LENÇÓIS: 'LENÇOL',
  RAÍZES: 'RAIZ',
  HIFENS: 'HÍFEN',
  TÁXIS: 'TÁXI',
}

/**
 * A dictionary defining the rules for transforming Portuguese words from plural to singular.
 * This object contains common endings in plural forms and their corresponding singular transformations.
 * Each key is a plural ending, and its corresponding value is the singular replacement.
 * @type {Record<string, string>}
 */
export const singulateRulesPt: Record<string, string> = {
  ões: 'ão',
  oes: 'ao',
  eses: 'ês',
  ns: 'm',
  is: 'l',
  res: 'r',
  i: 'us',
  xes: 'x',
  zes: 'z',
  ÕES: 'ÃO',
  OES: 'AO',
  ESES: 'ÊS',
  NS: 'M',
  IS: 'L',
  RES: 'R',
  I: 'US',
  XES: 'X',
  ZES: 'Z',
}

/**
 * Converts a Portuguese word from its plural form to its singular form.
 * It first checks if the word is in the exceptions list and returns the corresponding singular form.
 * If it's not an exception, it applies the standard rules of singularization based on word endings.
 * If no rules apply, it removes the ending 's' if present.
 *
 * @param {string} string - The Portuguese word in its plural form.
 * @returns {string} The singular form of the input word.
 */
export const singulatePt = (string: string) => {
  if (!string) return ''

  if (singulateExceptionsPt[string]) {
    return singulateExceptionsPt[string]
  }

  // Verificar palavras invariantes
  if (['táxi', 'lápis', 'ônibus'].includes(string)) {
    return string
  }

  const ruleEntry = Object.entries(singulateRulesPt).find(([rule]) => new RegExp(`${rule}$`).test(string))
  if (ruleEntry) {
    const [rule, value] = ruleEntry
    return string.replace(new RegExp(`${rule}$`), value)
  }

  if (string.endsWith('s')) return string.substring(0, string.length - 1)

  return string
}
