# 🤍 Site Institucional: Instituto AbraceRS

![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![Contexto](https://img.shields.io/badge/Contexto-Freelance-blueviolet)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)

Este projeto é a versão definitiva do site institucional do **Instituto AbraceRS**, desenvolvido como trabalho freelancer. Trata-se de uma aplicação web completa (Front-end + Back-end as a Service), pensada com foco em arquitetura, usabilidade e um visual polido, permitindo que o instituto publique conteúdo, gerencie projetos e receba cadastros de associados e voluntários de forma autônoma.

---

## 🎯 Objetivo do Projeto

Entregar uma presença digital profissional e escalável para o instituto, indo além de uma landing page estática. A arquitetura foi planejada para separar responsabilidades (páginas públicas, serviços, área administrativa e autenticação), com dados dinâmicos no Supabase, priorizando manutenção, segurança e uma experiência de uso alinhada a um produto real.

---

## 🚀 Funcionalidades

O sistema cobre tanto a vitrine institucional quanto a gestão de conteúdo:

1. **Site institucional multipágina (SPA):** Home, Quem Somos, Como Atuamos, Blog e Junte-se, com navegação fluida via Angular Router.
2. **Projetos e posts dinâmicos:** Listagem, detalhe, busca, filtros, ordenação e paginação a partir do banco no Supabase.
3. **Área administrativa protegida:** Login com autenticação Supabase e rotas protegidas por `authGuard` para criar e editar projetos e posts.
4. **Editor rico e mídia:** Conteúdo formatado com editor (PrimeNG/Quill), upload de imagens e galerias via Supabase Storage.
5. **Cadastros de engajamento:** Formulários de associado e voluntário persistidos no banco, com visão administrativa dos registros recebidos.
6. **CTAs de doação e engajamento:** Chamadas para ação alinhadas à comunicação do instituto (incluindo campanhas externas).

---

## 🛠️ Tecnologias Utilizadas

* **Angular (v20):** Framework Front-end utilizado na construção da interface, roteamento e organização em componentes.
* **TypeScript:** Tipagem estática para maior segurança e clareza no código.
* **Supabase:** BaaS responsável por autenticação, banco de dados (PostgreSQL) e armazenamento de imagens.
* **Bootstrap (v5.3):** Base de layout e grid responsivo.
* **PrimeNG + Quill:** Componentes de UI e editor de texto rico na área administrativa.
* **Font Awesome:** Ícones na identidade visual e nos blocos de conteúdo.
* **RxJS:** Observables para o estado de autenticação e fluxo reativo da aplicação.

---

## 🧠 Conceitos Aplicados

* **Arquitetura em camadas:** Separação entre páginas, componentes reutilizáveis, services, guards e integração com o Supabase.
* **Roteamento e SPA:** Navegação interna com rotas públicas e rotas administrativas protegidas.
* **Autenticação e autorização:** Login via Supabase Auth, controle de sessão com `BehaviorSubject` e proteção de rotas com `CanActivate`.
* **CRUD com Storage:** Criação, leitura, atualização e exclusão de posts/projetos, incluindo upload e remoção de imagens em buckets.
* **Formulários reativos:** Uso de `ReactiveFormsModule` com validação nos formulários admin e de cadastro.
* **Controle de visibilidade de conteúdo:** Filtros por status/público para diferenciar o que o visitante vê do que o admin gerencia.
* **Design responsivo e polido:** Layout pensado para desktop e mobile, com identidade visual consistente em todo o site.
