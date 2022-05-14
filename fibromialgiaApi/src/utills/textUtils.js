export const TEXTSRESULT = {
  positivo: (score) => `Parabéns, você finalizou o teste.
  Você adquiriu os seguintes resultados:
  ${score}
  O seu resultado aparentemente é compatível com fibromialgia.
  Lembre-se que tem que sentir os sintomas por mais de 3 meses na mesma intensidade e que também é necessário que o médico exclua outros diagnósticos diferenciais pertinentes.
  Recomendamos que busque o seu médico especialista em dor para correto tratamento da sua doença.
  `,

  negative: (score) => `RESULTADO NEGATIVO:
  Parabéns, você finalizou o teste.
  Você adquiriu os seguintes resultados: ${score}
  Aparentemente o seu resultado não é compatível com fibromialgia pelos critérios da academia americana de reumatologia.
  Mas especialmente se o seu resultado está maior que 8 vale a pena buscar algum neurologista, médico fisiatra ou reumatologista especialista em dor para obter o seu correto diagnóstico.
  `,
  median: (score) => `RESULTADO MEDIANO:
  Parabéns, você finalizou o teste.
  Você adquiriu os seguintes resultados: ${score}
  Aparentemente o seu resultado não é compatível com fibromialgia pelos critérios da academia americana de reumatologia.
  Mas especialmente se o seu resultado está maior que 8 vale a pena buscar algum neurologista, médico fisiatra ou reumatologista especialista em dor para obter o seu correto diagnóstic
  `,
};
