# Órbita — Ótica & Estilo

Site estático demonstrativo, feito exclusivamente com HTML, CSS e JavaScript puro. Sem bibliotecas externas, fontes remotas, Node.js, backend, banco de dados, instalação, compilação ou build. Todas as imagens fornecidas estão na pasta do projeto.

## Abrir e navegar

1. Se recebeu o ZIP, extraia a pasta inteira antes de abrir.
2. Abra `index.html` em um navegador moderno, como Edge, Chrome, Firefox ou Safari.
3. Acesse o painel pelo link **Painel demonstrativo**, no rodapé. A rota é `index.html#admin`.

As páginas usam rotas após `#`. Não é preciso configurar reescrita de URLs no servidor. Todas as páginas estão na mesma aplicação estática.

Para disponibilizar a demonstração na web, envie o conteúdo desta pasta a uma hospedagem estática com HTTPS. Nenhum processo de servidor da aplicação é necessário. A prévia HTTP usada durante a revisão foi apenas uma ferramenta de desenvolvimento, sem backend da loja.

O armazenamento de páginas abertas por `file://` varia conforme o navegador e suas configurações de privacidade. Para persistência consistente, use a mesma origem HTTP/HTTPS e o mesmo navegador. O site avisa quando não consegue salvar. Mudar de endereço, porta, perfil ou dispositivo cria outro conjunto de dados locais.

## O que foi implementado

- Início com campanha, categorias, destaques, coleção solar, processo de compra, benefícios, marcas e avaliações fictícias, unidade e rodapé.
- Catálogo com 24 produtos nas seis categorias; busca por nome, referência e marca; filtros de categoria, preço, marca, formato, material, cor e estoque; ordenação e estado vazio.
- Produto com duas imagens ilustrativas (vista geral e recorte de detalhe), variantes, quantidade, estoque, especificações, favoritos, condições e relacionados.
- Carrinho persistente, edição e remoção, subtotal, variantes, unidade, nome e observações opcionais. Orçamentos são identificados separadamente e não entram no subtotal conhecido.
- Prévia de mensagem para WhatsApp; link codificado quando houver número configurado; nenhum destinatário por padrão. Abrir uma conversa não confirma pedido nem baixa estoque.
- Orçamento com seleção de armação e lentes e prévia temporária de JPG, PNG, WebP e PDF até 8 MB, com verificação de formato, tamanho e assinatura do arquivo. Anexo manual na conversa.
- Solicitação de agendamento com validação, serviço, unidade e preferência de data/horário. Sem reserva automática.
- Sobre, contato, dúvidas e privacidade.
- Painel local com cadastro, edição e desativação de produtos; preços, imagens, variantes, estoque, destaques; categorias, marcas, contatos, condições e futuras unidades; restauração dos exemplos.
- Layout responsivo, foco visível, navegação por teclado, modais nativos, filtros móveis com contenção de foco, respeito a movimento reduzido, imagens alternativas, avisos de erro e proibição de indexação.

## Onde configurar

| Arquivo | Conteúdo |
| --- | --- |
| `js/config.js` | Marca, assinatura, WhatsApp, contatos, horários, condições, unidades, categorias e marcas iniciais |
| `js/data.js` | Produtos iniciais, preços, referências, imagens e estoque por variante |
| `css/style.css` | Paleta, tipografia, espaçamentos e responsividade; cores centrais em `:root` |
| `assets/images/` | Campanha, fotos demonstrativas de produtos e detalhes de galeria |
| `js/app.js` | Navegação, regras, formulários, painel, carrinho e mensagem |

O painel modifica somente o localStorage deste navegador, na chave `orbita.demo.v1`. Não modifica os arquivos nem publica essas alterações para outros visitantes. Para distribuir alterações a todos, edite `config.js` e `data.js` e envie novamente os arquivos à hospedagem. Dados já personalizados no navegador prevalecem sobre os exemplos nos arquivos; use **Restaurar exemplos** para carregar os novos dados iniciais.

O número de WhatsApp começa vazio. Em **Painel → Loja e unidades**, informe apenas um número de atendimento autorizado: código `55`, DDD e número, apenas dígitos. Também é possível editar `whatsapp` em `config.js`. Sem número válido, o botão exibe a prévia e permite copiar a mensagem, sem abrir conversa com terceiros. O link configurado usa `https://wa.me/` e `encodeURIComponent` para o texto. Nenhuma API de mensagens é utilizada.

As imagens do painel podem apontar para `assets/images/nome.webp` ou URL HTTPS. As imagens fornecidas são locais. Para adicionar uma foto local, copie o arquivo para a pasta e informe o caminho; o painel não faz upload para hospedagem. URLs externas podem depender de disponibilidade e termos do provedor. Há imagem substituta em caso de erro.

Os produtos de lentes ficam sob orçamento. O cadastro exige preço vazio para lentes para óculos e lentes de contato, evitando indicar preço final sem avaliar parâmetros. Referências e combinações de cor/tamanho são únicas. Estoque é inteiro e não pode ser negativo. O carrinho considera também as unidades já adicionadas da mesma variante.

## Dados e limitações

**Esta é uma loja fictícia.** Produtos, marcas, imagens, avaliações, contatos e endereço são exemplos. As imagens foram geradas por IA e são ilustrativas; podem não corresponder às cores e medidas das variantes. As galerias incluem recortes ampliados da imagem original. Apenas Lauro de Freitas está ativa inicialmente.

Não há login seguro. Uma senha em JavaScript não seria proteção real, por isso não foi implementada. Qualquer pessoa com acesso ao navegador pode editar o painel. Não use como gestão real de pedidos ou estoque. As quantidades são demonstrativas e editadas manualmente; mensagens não representam reservas, pagamentos, vendas ou baixas de estoque.

Somente produtos, estoque, configurações, favoritos e carrinho são persistidos. Nome, contato, observações, preferências de agendamento e receita não são salvos pelo site. A receita usa uma URL temporária na memória, revogada ao remover o arquivo, sair da página ou fechar a aplicação. Seu nome e conteúdo não são incluídos na mensagem. **O arquivo não é anexado por links do WhatsApp:** o cliente precisa anexá-lo manualmente na conversa.

O texto da solicitação fica na prévia até o usuário decidir abrir o WhatsApp. Ao usar um número configurado, o texto será passado ao serviço pelo link. Não existe cobrança online ou entrega. Pagamento presencial e retirada dependem de confirmação da equipe.

## Verificações realizadas

Revisão funcional no navegador: busca por referência; resultado vazio; filtros combinados de marca/preço; seleção de variante; adição; quantidade máxima; cálculo do subtotal; persistência do carrinho e favoritos; bloqueio de produto indisponível; identificação de lentes sob orçamento; mensagem sem número configurado; cadastro, edição persistente e desativação; validação do WhatsApp; seleção e descarte de prévia de imagem; mensagem de orçamento; solicitação de agendamento; restauração dos exemplos.

Exemplo conferido: 3 unidades da armação Aurora a R$ 389,00 resultam em R$ 1.167,00. Adicionar um item de lentes sob orçamento não altera esse subtotal e inclui aviso separado na mensagem.

Verificação de layout em 360, 390, 768 e 1440 px, nas telas de início, catálogo, produto, carrinho vazio, orçamento, agendamento e painel: sem rolagem horizontal e sem erros nas imagens carregadas. Imagens de produto são carregadas sob demanda. Revisão visual da campanha nas larguras de tablet, celular e computador.

O fluxo real de envio ao WhatsApp não foi executado: não foi fornecido um número de atendimento. A construção do link usa codificação nativa, e o comportamento sem destinatário foi validado. Nenhuma mensagem foi enviada. A seleção de imagem foi exercitada; a validação e renderização de PDF, formatos inválidos e limite de tamanho foram conferidas no código, sem anexar documentos médicos reais.

## Para uma operação real

1. Substitua marca, contatos, endereço, horários, produtos, fotos, preços e condições por informações reais revisadas. Configure um WhatsApp autorizado e teste a conversa no computador e no celular.
2. Confirme manualmente disponibilidade, valores das lentes, retirada, pagamento e horários. Esta versão não centraliza o estoque nem garante reservas.
3. Hospede os arquivos com HTTPS e revise acessibilidade, conteúdo, desempenho e a política de privacidade conforme o tratamento real dos dados. Revise o procedimento de recebimento e tratamento de receitas na conversa de atendimento.
4. Distribua alterações globais pelos arquivos estáticos. Para administração centralizada, autenticação segura, estoque sincronizado ou envio seguro de receitas pelo site, será necessário outro escopo com serviços de servidor; esses recursos foram excluídos conforme a restrição do projeto.
5. Mantenha `noindex` e `robots.txt` durante a demonstração. Só libere indexação quando o negócio real, os contatos e o conteúdo estiverem prontos. Não há dados estruturados apresentando a demonstração como estabelecimento real.
