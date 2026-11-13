# Site — Bichos da Gente (Clínica Veterinária · Ijuí/RS)

Site estático (HTML + CSS + JS), sem dependências. Abra `index.html` no navegador ou publique em qualquer hospedagem (Hostinger, Netlify, GitHub Pages, Vercel).

## Estrutura
- `index.html` — página única (Serviços, Plantão, Sobre, Fotos, Avaliações, Horários, Contato)
- `css/style.css` — visual (cores da marca: verde-água + laranja)
- `js/main.js` — links de WhatsApp com mensagem pronta, menu mobile, destaque do dia de hoje nos horários
- `assets/img/` — fotos e logo

Todos os pontos a ajustar estão marcados com `<!-- EDITAR -->` no HTML.

## Checklist antes de publicar
- [ ] **Avaliações:** copiar 3 depoimentos reais do Google (com autorização) para a seção `#avaliacoes`
- [ ] **Fotos:** hoje o site usa fotos ilustrativas do Unsplash (licença gratuita para uso comercial) + 2 fotos do Perfil do Google (`foto-3.jpg` pet shop, `foto-5.jpg` gatinho). Para versão final, trocar por fotos reais mantendo os mesmos nomes em `assets/img/`:
  - `hero.jpg` — banner (cachorro e gato com fundo #2F9C8A). Confirmar direito de uso da imagem enviada
  - `veterinario.jpg` — veterinária com filhote de golden (imagem enviada pela Life Creative; confirmar direito de uso)
  - `foto-1.jpg` a `foto-6.jpg` — galeria
  - `og-image.jpg` — 1200×630, gerada a partir do banner
- [ ] **Logo oficial:** substituir `assets/img/logo.svg` (hoje é uma pata provisória)
- [ ] **CRMV:** nome e número do(a) responsável técnico(a) (hero, “Sobre” e rodapé) — somente após confirmação
- [ ] **Horários:** confirmar abertura, sábado e domingo (o Google informa só “fecha 18h15”). Atualizar também o bloco JSON-LD no `<head>`
- [ ] **Plantão:** confirmar o número (55) 99118-5665 (tirado de um post do Instagram)
- [ ] **Instagram:** salvar as melhores fotos do @bichosdagenteijui (com autorização) em `assets/img/`
- [ ] **Mapa:** opcional — trocar a ilustração `mapa.svg` por um print real do Google Maps (`mapa.jpg`)
- [ ] **Domínio:** hoje o site está em https://luciane-tech.github.io/Bicho-da-gente/ (demonstração). Ao virar oficial: trocar `canonical`, `og:url`, `og:image` e URLs do JSON-LD, e **remover a meta `robots noindex`**
- [ ] **Google:** depois de publicado, adicionar o link do site no Perfil da Empresa (Perfil → Editar perfil → Contato → Site)

## Créditos
- Ícones: Phosphor Icons (licença MIT)
- Fotos ilustrativas: Unsplash (Unsplash License)
- Site desenvolvido por Life Creative — https://lifecreative.com.br/

## Dados usados
- Endereço: R. 20 de Setembro, 167 - Centro, Ijuí - RS, 98700-000
- WhatsApp/telefone: (55) 99178-7275 — alterar em `js/main.js` (`WHATSAPP`) se mudar
- Instagram: https://www.instagram.com/bichosdagenteijui
- Google: https://share.google/rm68JklPEhJQ6bpwt
