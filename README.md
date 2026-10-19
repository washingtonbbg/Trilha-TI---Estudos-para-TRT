# Trilha TI — Estudos para TRT

Plataforma de estudos de Tecnologia da Informação para quem está começando do zero, com rotina sugerida de **2 horas por dia** e prioridade para Analista Judiciário de TI, aproveitando o núcleo comum ao Técnico.

## Funcionalidades

- 8 aulas introdutórias com exemplos e atividades.
- 24 questões autorais com análise das cinco alternativas após responder.
- Filtros por disciplina, nível, cargo, histórico e texto.
- Marcação de palpite, caderno de erros e anotações.
- Revisões sugeridas: 1 dia para erros/palpites e 7 dias para acertos seguros.
- Rotina diária de 120 minutos e timer de foco.
- Progresso local e exportação/restauração de backup JSON.
- Mapeamento de nove áreas do índice TEC, acesso externo/iframe e registro manual de sessões.

## Executar

Não há dependências de aplicação para instalar. Com Python 3 disponível, execute na raiz:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Abra http://127.0.0.1:8765 no navegador. Encerre o servidor com Ctrl+C. Também é possível usar outro servidor estático apontado para `dist`.

## Verificar

Com Node.js 18 ou superior, na raiz:

```sh
node --check dist/app.js
node --check dist/data.js
node check.cjs
```

O verificador cobre integridade das questões, filtros, revisões, validação de backup e renderização de rotas em um ambiente simulado. Não substitui a verificação visual e de interação em navegador.

## Estrutura

```text
dist/
  index.html          Página da aplicação
  style.css           Layout responsivo
  data.js             Aulas, questões, comentários e mapas de conteúdo
  app.js              Navegação, respostas, filtros e progresso
  programa-base.md    Programa integral de referência e pendências
  plano-estudos.md    Plano inicial de preparação
  analise-tec.md      Análise do caderno e limites de integração
check.cjs             Verificações automatizadas
```

## Conteúdo e escopo

Referência de conteúdo: edital TRT8/FCC fornecido pelo usuário. Para o recorte de Mato Grosso, o destino provisório é TRT23; TRT1 corresponde ao Rio de Janeiro. As normas locais e algumas edições técnicas ainda precisam de confirmação conforme os documentos.

Esta versão oferece fundamentos e **não cobre integralmente o edital**. As questões são autorais, não oficiais FCC/TEC nem previsão do que será cobrado. Os comentários são previamente preparados; não há tutor de IA em tempo real.

## TEC Concursos

O projeto oferece acesso ao caderno indicado e um mapeamento resumido dos grupos observados no índice. Não contém cópia do banco, dos comentários ou das estatísticas da conta TEC. A incorporação pode exigir login ou ser limitada pelo navegador/fornecedor. A plataforma não lê automaticamente respostas do iframe; sessões externas são registradas manualmente e não entram na taxa de acertos autorais.

## Dados e hospedagem

O progresso fica no `localStorage` do navegador, sem servidor de dados ou sincronização entre dispositivos. Use o backup para transferi-lo. O código pode ser servido por hospedagem estática; a privacidade/autenticação precisa ser configurada na hospedagem escolhida, pois não é implementada pelo HTML/JS.

A hospedagem privada original utiliza Sites. Os metadados dessa hospedagem, credenciais, dados pessoais de progresso e o PDF-fonte não integram este repositório. O caminho local do documento de origem foi removido desta cópia para publicação.

## Próximas etapas

Ampliar o banco e as aulas gradualmente; aprofundar programação, dados, redes, segurança e arquitetura; adicionar sistemas operacionais, Direito e conhecimentos gerais; revisar a aderência ao edital de destino e os filtros TEC quando acessíveis.
