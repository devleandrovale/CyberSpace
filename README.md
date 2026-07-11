# CyberSpace
Loja conceito futurista (E-commerce) responsiva com animações fluidas baseadas em Intersection Observer, efeitos glow e um carrinho de compras funcional simulado com JavaScript puro, desenvolvido para praticar HTML e CSS, com foco em posicionamento de elementos, organização de layout e boas práticas de estruturação front-end.

# 🌌 CyberSpace — Loja Conceito Futurista

O **CyberSpace** é uma landing page de e-commerce conceitual voltada para a venda de gadgets e hardwares de alta performance com uma estética cyberpunk/futurista. O projeto foi desenvolvido com foco em **Clean Code**, **performance de renderização**, **acessibilidade** e **responsividade**.

Dispositivo interativo criado com o objetivo de aplicar na prática os conceitos de manipulação do DOM e boas práticas modernas de Front-End.

🚀 **[Clique aqui para acessar o projeto em tempo real](https://devleandrovale.github.io/CyberSpace/)**

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica bem definida utilizando landmarks (`header`, `main`, `section`, `aside`, `footer`) para melhor indexação e leitura de tela.
- **CSS3** — Custom Properties (variáveis), Flexbox, Grid Layout, transições suaves, pseudo-elementos (`::before`) para overlay e efeitos de brilho (*glow*).
- **JavaScript (ES6+)** — Manipulação dinâmica do DOM para o carrinho de compras e lógica de estados.
- **Intersection Observer API** — Utilizado para criar animações de entrada ao fazer scroll de forma leve e performática.

---

## 🖥️ Funcionalidades Implementadas

- **Carrinho de Compras Funcional:** Adição de produtos em tempo real com soma automática de valores, contador dinâmico no menu superior e persistência de dados em memória.
- **Menu Lateral do Carrinho (Drawer):** Interface interativa que desliza para a tela ao clicar no botão do carrinho, acompanhada de um overlay com efeito *blur*.
- **Sistema de Notificação (Toasts):** Avisos visuais flutuantes que surgem de forma fluida no canto da tela sempre que um item é adicionado.
- **Scroll Animado (Fade + Slide):** Os elementos da página surgem suavemente conforme o usuário navega, disparados de forma otimizada pela API nativa do navegador.
- **Navegação Âncora Suave:** O botão "Sobre" no menu redireciona o usuário de forma fluida e elegante para a seção correspondente.
- **Selo de Autoria Fixo:** Um selo sutil posicionado no canto inferior direito assina o projeto de forma profissional.

---

## ⚡ Qualidade, Performance & Acessibilidade

O projeto foi inteiramente refinado seguindo os padrões exigidos por auditorias modernas como o **Google Lighthouse**:

- **Animações Leves:** Uso consciente de `transform` e `opacity` para garantir que o navegador processe as animações via GPU, evitando travamentos (*jank*).
- **Otimização com `will-change`:** Aplicado estrategicamente nas propriedades de animação para preparar a renderização com antecedência.
- **Performance Mobile-First:** Animações baseadas em scroll são desativadas automaticamente em telas menores para economizar bateria e processamento de aparelhos mais antigos.
- **Acessibilidade (A11y):** Foco visível (`:focus-visible`) implementado para navegação completa via teclado, uso adequado de descrições de imagens (`alt`) e atributos `aria-label` / `aria-labelledby`.
- **Carregamento Otimizado:** Imagens configuradas com `loading="lazy"` para poupar dados e acelerar a primeira pintura da tela (*FCP*).

---

## 👤 Autor

Desenvolvido por **Leandro Vale** Graduando em Engenharia de Software e Desenvolvimento de Sistemas, apaixonado pelo ecossistema de Desenvolvimento Frontend.

- **LinkedIn:** [linkedin.com/in/devleandrovale/](https://www.linkedin.com/in/devleandrovale/)
- **E-mail:** devleandrovale@gmail.com
