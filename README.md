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
- [ ] **Fotos:** salvar em `assets/img/` com estes nomes (as áreas listradas somem sozinhas quando a foto existe):
  - `hero.jpg` — hoje é o gatinho do Perfil do Google (baixa resolução); ideal: veterinário(a) com um pet (vertical, 4:5)
  - `foto-3.jpg` — hoje é a foto do pet shop do Perfil do Google (baixa resolução)
  - `veterinario.jpg` — retrato do(a) responsável (vertical, 4:5)
  - `foto-1.jpg` a `foto-6.jpg` — fachada, consultório, pet shop, banho e tosa, paciente, equipe
  - `og-image.jpg` — 1200×630, imagem que aparece ao compartilhar o link
- [ ] **Logo oficial:** substituir `assets/img/logo.svg` (hoje é uma pata provisória)
- [ ] **CRMV:** nome e número do(a) responsável técnico(a) (hero, “Sobre” e rodapé) — somente após confirmação
- [ ] **Horários:** confirmar abertura, sábado e domingo (o Google informa só “fecha 18h15”). Atualizar também o bloco JSON-LD no `<head>`
- [ ] **Plantão:** confirmar o número (55) 99118-5665 (tirado de um post do Instagram)
- [ ] **Instagram:** salvar as melhores fotos do @bichosdagenteijui (com autorização) em `assets/img/`
- [ ] **Mapa:** opcional — trocar a ilustração `mapa.svg` por um print real do Google Maps (`mapa.jpg`)
- [ ] **Domínio:** ajustar `canonical` e URLs do JSON-LD
- [ ] **Google:** depois de publicado, adicionar o link do site no Perfil da Empresa (Perfil → Editar perfil → Contato → Site)

## Dados usados
- Endereço: R. 20 de Setembro, 167 - Centro, Ijuí - RS, 98700-000
- WhatsApp/telefone: (55) 99178-7275 — alterar em `js/main.js` (`WHATSAPP`) se mudar
- Instagram: https://www.instagram.com/bichosdagenteijui
- Google: https://share.google/rm68JklPEhJQ6bpwt
