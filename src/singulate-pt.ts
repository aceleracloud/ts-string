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
