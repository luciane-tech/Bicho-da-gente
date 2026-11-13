# Pata Verde — site para clínica veterinária (projeto conceito)

Projeto de portfólio da **[Life Creative](https://lifecreative.com.br/)**: um site de página única para clínica veterinária, pet shop e banho e tosa, focado em transformar visitas em agendamentos pelo WhatsApp.

> **Marca, endereço, telefones, profissionais e depoimentos são fictícios.** Os números exibidos — WhatsApp (51) 99999-1234, telefone (51) 3333-1234 e plantão (51) 98888-1234 — são apenas ilustrativos e não fazem ligação: em `js/main.js` a constante `WHATSAPP` fica vazia de propósito.
> Os botões de WhatsApp, telefone, Instagram e Google mostram um aviso explicando o que fariam no site real.

**Ver online:** https://luciane-tech.github.io/Bicho-da-gente/

## O que o site entrega
- WhatsApp com **mensagem pronta por serviço** (topo, cada serviço, contato, rodapé e botão flutuante)
- **Plantão em destaque**, com ligação em um toque
- 7 serviços: clínica, plantão, cirurgias, banho e tosa, hospedagem, busca e entrega, pet shop
- Horários com **o dia de hoje destacado automaticamente**
- Mapa clicável que abre o Google Maps
- Avaliações de clientes e botão para avaliar no Google
- Responsável técnico e CRMV visíveis (confiança)
- 100% adaptado ao celular, leve e sem dependências

## Estrutura
- `index.html` — página única
- `css/style.css` — visual (verde-água `#2F9C8A` + laranja `#E8743B`)
- `js/main.js` — WhatsApp com mensagem pronta, avisos de demonstração, menu mobile, destaque do dia
- `assets/img/` — imagens
- `preview-site.html` — versão em arquivo único (abre direto no navegador)

## Como adaptar para um cliente real
1. Em `js/main.js`, preencha `WHATSAPP` com o número da clínica (ex.: `5511999999999`)
2. Troque nome, endereço, telefones, horários, CRMV e depoimentos reais no `index.html`
3. Troque os links `data-demo` por links reais (`tel:`, Instagram, Perfil do Google, Google Maps)
4. Substitua as fotos em `assets/img/` mantendo os nomes
5. Remova a faixa `demo-bar`, a meta `robots noindex` e ajuste `canonical`/`og:url` para o domínio
6. Adicione dados estruturados (JSON-LD `VeterinaryCare`) com os dados reais para SEO local

## Créditos
- Ícones: [Phosphor Icons](https://phosphoricons.com/) (licença MIT)
- Fotos ilustrativas: [Unsplash](https://unsplash.com/) (Unsplash License); banner e foto da seção "Sobre" fornecidos pela Life Creative
- Design e desenvolvimento: [Life Creative](https://lifecreative.com.br/)
