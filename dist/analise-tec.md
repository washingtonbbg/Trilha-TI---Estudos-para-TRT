# Integração TEC e mapeamento do caderno

Data: 18/10/2026. Caderno público de referência: https://www.tecconcursos.com.br/caderno/Q7ByxA — “Especifico TI”.

## O que foi verificado

O acesso inicialmente pediu login. Após o usuário entrar diretamente no navegador, foi possível consultar e expandir o índice na interface autenticada. Foram observadas nove áreas: Banco de Dados; Ciência de Dados e Inteligência Artificial; Desenvolvimento de Sistemas; Engenharia de Software; Gestão e Governança; Organização e Arquitetura dos Computadores; Redes; Segurança; Sistemas Operacionais.

A tela mostrava organização por matéria e assunto, ordenação por data e distribuição por índice. Os números apresentados eram posições no índice; não foram tratados como quantidades por assunto nem como evidência de frequência em prova. Uma tentativa de exportação pelo botão nativo não retornou um arquivo confirmado; por isso, o projeto usa um mapeamento dos grupos efetivamente lidos, sem afirmar que importou o índice integral.

O formulário com os filtros usados para criar o caderno não foi auditado integralmente. Não se pode afirmar, só pelo índice, que todas as questões são FCC, de determinada época, nível ou cargo. As classificações de edital na plataforma são análise de aderência deste projeto, não classificação oficial do TEC. Em uma tentativa posterior de retomar o caderno, o site solicitou novo login. A tentativa de exportação nativa levou à página de planos, sem arquivo exportado confirmado; não foi alterada nem contratada assinatura.

## Pontos de atenção do filtro

- O índice de Desenvolvimento inclui C, C#, Delphi/Pascal, Ruby, Visual Basic e PHP. A origem destaca Python, Java, JavaScript e TypeScript.
- Governança inclui ITIL v3/v4 e COBIT 4.1/5/2019; o PDF-base cita ITIL Version 5 e COBIT 2019. Validar a edição e não misturar conceitos específicos de versões.
- Sistemas e redes incluem versões antigas como Windows XP/Vista/8 e Server 2008. O PDF-base destaca Windows 11, Windows 10 no contexto legado e Server 2019/2022/2025.
- Banco de dados inclui SQL Server e modelos adicionais. Conferir os produtos e conceitos expressamente exigidos antes de priorizar.
- O caderno pode ajudar a praticar fundamentos, mas seu tamanho não determina a distribuição de horas nem a incidência futura na prova.

## Como o caderno entra na primeira versão

1. Link para acesso no TEC e botão para tentar exibir o iframe enviado pelo usuário.
2. Mapeamento resumido de grupos do índice, com alertas de aderência ao edital.
3. Registro manual de assunto, quantidade e acertos, identificado como autodeclarado e separado das estatísticas autorais.
4. Banco próprio de 24 questões autorais com análise das cinco alternativas após responder; não são questões oficiais FCC nem reproduções do TEC.

Não foram importados enunciados, gabaritos, comentários, dados de professores ou resultados da conta TEC. Nenhuma credencial de login do usuário é armazenada no projeto.

## Limite técnico

O iframe carrega uma página de outra origem. A política de mesma origem impede que a aplicação leia arbitrariamente seu DOM e suas respostas. Mensagens de redimensionamento, quando suportadas, não constituem API de resultados. A versão atual usa altura fixa e rolagem para não depender da execução de um script externo no contexto da aplicação.

O TEC pode exigir login e plano e pode bloquear o quadro. Cookies de terceiros e políticas de enquadramento também podem impedir o uso. O link externo é a alternativa disponível. No teste local, o iframe carregou uma tela de login do TEC, com pedido para entrar novamente. A resolução autenticada dentro do iframe não foi confirmada nesta etapa.

Uma integração completa exige verificar API ou exportação de dados documentada e escopo de autorização/licença apropriado. Nenhum mecanismo desse tipo foi confirmado. Não foram tentados endpoints privados nem reprodução do banco.

## Referências

- TEC, termos: https://www.tecconcursos.com.br/termos-de-uso
- Caderno fornecido: https://www.tecconcursos.com.br/caderno/Q7ByxA
- MDN, política de mesma origem: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy

## Continuidade

Revisar os filtros de criação do caderno quando acessíveis; comparar disciplina por disciplina ao programa-base; ampliar aulas e questões gradualmente; corrigir eventual erro de exercício com referência identificada. Se houver autorização e mecanismo oficial de integração, reavaliar o acesso a dados de respostas sem copiar conteúdo indevidamente.
