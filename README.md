# Órbita — Ótica & Estilo

Site de demonstração comercial para uma ótica fictícia de Lauro de Freitas, na Bahia. O projeto combina catálogo de produtos, carrinho e atendimento pelo WhatsApp em uma aplicação estática, desenvolvida com **HTML, CSS e JavaScript puro**.

> **Seu olhar, novas possibilidades.**

Produtos, marcas, preços, imagens, avaliações, endereço e contatos são demonstrativos. O painel administrativo funciona somente no navegador utilizado e não possui autenticação segura.

## Sobre o projeto

O objetivo é apresentar uma experiência de compra que aproxima a escolha online do atendimento presencial. O visitante explora os produtos, seleciona variantes, monta o carrinho e prepara uma mensagem para a equipe pelo WhatsApp.

A loja confirma disponibilidade, valores e atendimento antes da compra. O pagamento é presencial e a retirada acontece na unidade combinada. Não há pagamento online nem entrega nesta versão.

A identidade visual utiliza azul profundo, verde-lima, tons claros e elementos inspirados em lentes e órbitas. Os textos estão em português do Brasil e os valores são apresentados em reais.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura do documento, formulários e elementos semânticos |
| CSS3 | Identidade visual, layouts responsivos, foco e transições |
| JavaScript puro | Navegação, catálogo, filtros, carrinho, formulários e painel |
| localStorage | Persistência dos dados demonstrativos no navegador |
| APIs nativas do navegador | Prévia temporária de arquivos, modais e cópia de mensagens |

O projeto não utiliza frameworks, bibliotecas externas, TypeScript, Node.js, backend ou banco de dados. Não exige instalação de dependências, compilação ou ferramentas de build. As imagens e fontes necessárias para a experiência são locais ou do sistema.

## Como executar

1. Extraia o ZIP, caso tenha recebido o projeto compactado.
2. Mantenha a estrutura de pastas original.
3. Abra o arquivo **`index.html`** em um navegador moderno com JavaScript habilitado.
4. Explore o site e acesse o painel pelo link **Painel demonstrativo**, no rodapé.

O painel também pode ser acessado pelo endereço `index.html#admin`.

As páginas usam navegação por fragmentos de URL (`#`). Não é necessário configurar reescrita de rotas. Para hospedar, basta publicar o conteúdo desta pasta em um serviço de hospedagem estática com HTTPS.

**Persistência ao abrir arquivos locais:** o comportamento do localStorage em endereços `file://` pode variar entre navegadores. Para uso consistente, mantenha a mesma origem HTTP/HTTPS, navegador e perfil. Mudar de domínio, porta, perfil ou dispositivo cria outro conjunto de dados locais. O site exibe um aviso quando o armazenamento não está disponível.

## Funcionalidades

### Experiência do cliente

- Página inicial com campanha, categorias, destaques, coleção solar e informações da unidade.
- Catálogo com **24 produtos**, distribuídos entre óculos de grau, óculos de sol, armações, lentes para óculos, lentes de contato e acessórios.
- Busca por nome, marca e referência; filtros por categoria, preço, marca, formato, material, cor e disponibilidade.
- Ordenação por relevância, menor preço, maior preço e novidades.
- Página de produto com galeria, descrição, especificações, variantes, estoque e quantidade.
- Favoritos e carrinho persistentes, com edição de quantidades e remoção de itens.
- Separação entre produtos com preço definido e itens sujeitos a orçamento.
- Preparação de mensagens para compra, consulta, orçamento e agendamento pelo WhatsApp.
- Seleção e visualização temporária de receita em imagem ou PDF.
- Páginas sobre a marca, contato, unidade, dúvidas frequentes e privacidade.

### Painel administrativo local

- Visão geral dos produtos e do estoque demonstrativo.
- Cadastro, edição, ativação e desativação de produtos.
- Edição de preços, imagens, variantes e estoque por variante.
- Configuração dos destaques e novidades da coleção.
- Cadastro e remoção de categorias e marcas, com bloqueio de remoção quando vinculadas a produtos.
- Configuração de marca, assinatura, WhatsApp, contatos e horários.
- Edição das condições de garantia e ajustes.
- Cadastro de futuras unidades, mantendo Lauro de Freitas ativa inicialmente.
- Restauração dos dados de exemplo.

## Páginas e rotas

Acrescente a rota ao final de `index.html`:

| Rota | Página |
| --- | --- |
| `#inicio` | Página inicial |
| `#catalogo` | Catálogo e filtros |
| `#produto/p1` | Produto de exemplo: Aurora |
| `#favoritos` | Produtos favoritos |
| `#carrinho` | Seleção de produtos e solicitação de compra |
| `#orcamento` | Orçamento com prévia temporária de receita |
| `#agendamento` | Solicitação de atendimento ou ajuste |
| `#sobre` | História e proposta da marca |
| `#unidade` | Unidade de Lauro de Freitas |
| `#contato` | Contatos e dúvidas frequentes |
| `#privacidade` | Informações sobre dados locais e arquivos |
| `#admin` | Painel demonstrativo |

## Estrutura de arquivos

```text
orbita/
├── index.html
├── README.md
├── robots.txt
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   ├── data.js
│   └── app.js
└── assets/
    ├── favicon.svg
    ├── imagem-indisponivel.svg
    └── images/
        ├── campanha.webp
        ├── produto-01.webp … produto-24.webp
        └── detalhe-01.webp … detalhe-24.webp
```

## Personalização

| O que alterar | Onde |
| --- | --- |
| Marca, assinatura, contatos, horários e condições iniciais | [`js/config.js`](js/config.js) |
| Unidades, categorias e marcas iniciais | [`js/config.js`](js/config.js) |
| Produtos, referências, preços, variantes e estoque inicial | [`js/data.js`](js/data.js) |
| Cores, tipografia, espaçamentos e responsividade | [`css/style.css`](css/style.css), principalmente `:root` |
| Conteúdo das telas e comportamento da aplicação | [`js/app.js`](js/app.js) |
| Fotografias e imagens de produtos | `assets/images/` |

As alterações feitas no painel são salvas na chave **`orbita.demo.v1`** do localStorage. Elas não modificam os arquivos do projeto nem são publicadas para outros visitantes.

Para distribuir alterações a todos os visitantes, edite os arquivos estáticos e publique novamente. Dados personalizados já salvos no navegador prevalecem sobre os exemplos dos arquivos. A opção **Restaurar exemplos** carrega novamente os dados iniciais e limpa o carrinho e os favoritos daquele navegador.

### WhatsApp

O campo `whatsapp` em `js/config.js` começa vazio:

```js
whatsapp: ''
```

É possível configurá-lo pelo arquivo ou em **Painel → Loja e unidades**. Informe apenas um número de atendimento autorizado, com código do país `55`, DDD e número, somente com dígitos.

- **Sem número configurado:** a aplicação mostra uma prévia copiável, sem abrir conversas com terceiros.
- **Com número configurado:** a aplicação permite abrir um link `https://wa.me/` com o texto codificado por `encodeURIComponent`.

O link não envia a mensagem automaticamente. Abrir o WhatsApp também não confirma compra ou agendamento e não reduz o estoque.

### Produtos e imagens

Cada produto possui identificador, referência, categoria, marca, descrição, imagens, preço ou indicação de orçamento, variantes, estoque e características.

As referências e as combinações de cor e tamanho devem ser únicas. O estoque de cada variante é um número inteiro não negativo. Produtos indisponíveis não podem ser adicionados ao carrinho como se estivessem em estoque.

O preço exibido para óculos de grau e armações corresponde à armação; lentes com grau são cobradas separadamente. Os produtos de lentes para óculos e lentes de contato ficam sob orçamento, conforme os parâmetros a confirmar.

Para adicionar uma imagem local, copie o arquivo para `assets/images/` e informe seu caminho no cadastro. O painel também aceita URLs HTTPS, mas não faz upload de arquivos para uma hospedagem. Imagens externas dependem da disponibilidade do serviço de origem.

As imagens fornecidas foram geradas por IA e são ilustrativas. A segunda imagem das galerias é um recorte ampliado da foto principal. Veja a procedência e os prompts em [`assets/ORIGEM-DAS-IMAGENS.md`](assets/ORIGEM-DAS-IMAGENS.md).

## Dados, receita e privacidade

O site persiste somente produtos, estoque, configurações, favoritos e carrinho demonstrativos. Nome, telefone, observações, preferências de agendamento e receitas não são salvos pelo site no localStorage.

A prévia de receita aceita **JPG, PNG, WebP ou PDF de até 8 MB**. Há validação de tipo, tamanho e assinatura do arquivo. A visualização usa uma URL temporária na memória, descartada ao remover a prévia, sair da página ou fechar a aplicação.

**Selecionar a receita não significa enviá-la.** O conteúdo do arquivo não é incluído nas URLs e não fica disponível no painel. Para solicitar o orçamento, o cliente precisa anexar a receita manualmente na conversa do WhatsApp.

Ao abrir o WhatsApp com um número configurado, o texto da solicitação é passado ao serviço pelo link. A aplicação explica esse processo antes do encaminhamento.

## Responsividade e acessibilidade

- Layouts adaptados para celular, tablet e computador.
- Rótulos nos campos, textos alternativos nas imagens e foco visível.
- Navegação por teclado e link para pular ao conteúdo.
- Modais nativos e filtros móveis com contenção de foco.
- Respeito à preferência por movimento reduzido.
- Estados vazios, avisos de erro, mensagens de retorno e imagem substituta em caso de falha.
- Imagens WebP locais com carregamento sob demanda no catálogo.

Durante a demonstração, a indexação é desestimulada por `noindex`, `nofollow` e `robots.txt`. Esses mecanismos não são controle de acesso. O site não apresenta dados estruturados que identifiquem a ótica fictícia como estabelecimento real.

## Verificações realizadas

Os fluxos foram revisados no navegador durante o desenvolvimento:

- Busca por referência, estado sem resultados, filtros combinados e ordenação por preço.
- Seleção de variantes, adição, edição de quantidades e remoção do carrinho.
- Bloqueio de estoque insuficiente e de produtos indisponíveis.
- Persistência de carrinho, favoritos e alterações administrativas após recarregar.
- Cadastro, edição de preço e desativação de produtos.
- Separação dos itens sob orçamento e geração da mensagem sem WhatsApp configurado.
- Seleção e descarte de prévia de imagem, orçamento e solicitação de agendamento.
- Abertura e aplicação dos filtros no layout móvel.
- Restauração dos dados de exemplo.

O cálculo conferido para **3 armações Aurora de R$ 389,00** foi **R$ 1.167,00**. Incluir lentes sob orçamento manteve esse subtotal e acrescentou a indicação de valor pendente.

As telas de início, catálogo, produto, carrinho vazio, orçamento, agendamento e painel foram verificadas em **360, 390, 768 e 1440 pixels**, sem rolagem horizontal e sem erros nas imagens carregadas.

Não há suíte de testes automatizados distribuída com o projeto. Nenhuma mensagem real foi enviada ao WhatsApp, pois não foi fornecido um número de atendimento. O fluxo de imagem foi exercitado; o tratamento de PDF e as verificações de formato e tamanho também foram inspecionados no código, sem utilizar receitas médicas reais.

## Limitações da demonstração

- O painel é público e não possui autenticação ou autorização de servidor.
- Os dados ficam locais ao navegador; não existe sincronização entre dispositivos ou visitantes.
- O estoque é ilustrativo e atualizado manualmente. Não há reserva de produtos ou gestão centralizada de pedidos.
- Não há pagamento online, cálculo de frete, entrega, confirmação automática de compra ou reserva automática de horário.
- A aplicação não envia, armazena remotamente ou anexa receitas ao WhatsApp.
- Lentes de contato permitem consultar parâmetros e disponibilidade; o site não diagnostica nem recomenda grau.
- Apenas Lauro de Freitas está ativa inicialmente. A estrutura permite cadastrar futuras unidades.

## Preparação para uso real

1. Substitua todos os dados fictícios por informações reais revisadas, incluindo fotografias, produtos, preços, endereço e condições de atendimento.
2. Configure um WhatsApp autorizado e confira o destinatário e a mensagem no computador e no celular.
3. Publique os arquivos em hospedagem estática com HTTPS.
4. Revise conteúdo, acessibilidade, privacidade e o procedimento de recebimento de receitas na conversa de atendimento.
5. Mantenha a confirmação de disponibilidade, valores, horários, pagamento e retirada sob responsabilidade da equipe.
6. Libere a indexação somente quando o estabelecimento real e o conteúdo estiverem prontos.

Administração centralizada, autenticação segura, estoque sincronizado e envio seguro de receitas pelo site exigiriam uma nova implementação com serviços de servidor, fora das restrições desta versão.
