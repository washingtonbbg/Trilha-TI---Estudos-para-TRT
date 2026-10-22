import Script from "next/script";
import { requireChatGPTUser } from "./chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireChatGPTUser("/");
  return (
    <>
      <a className="skip" href="#main">Ir para o conteúdo</a>
      <aside className="sidebar">
        <a href="#inicio" className="brand"><span className="brand-icon">t<span>i</span></span><span>trilha<span className="brand-light">TI</span><small>UM PASSO DE CADA VEZ</small></span></a>
        <div className="profile"><span className="avatar">01</span><div>Seu começo em TI<small>{user.email}</small></div></div>
        <nav aria-label="Navegação principal">
          <a href="#inicio" data-nav="inicio"><span>◈</span>Meu dia</a>
          <a href="#trilha" data-nav="trilha"><span>▤</span>Trilha de aprendizado</a>
          <a href="#questoes" data-nav="questoes"><span>◎</span>Praticar questões</a>
          <a href="#revisoes" data-nav="revisoes"><span>↺</span>Minhas revisões <b id="review-count">0</b></a>
          <a href="#tec" data-nav="tec"><span>↗</span>Caderno TEC</a>
          <a href="#progresso" data-nav="progresso"><span>▥</span>Meu progresso</a>
        </nav>
        <div className="sidebar-note"><span className="dot"></span> Foco em Analista de TI<p>Uma base por vez.<br/>Consistência antes da pressa.</p></div>
        <a className="side-about" href="#sobre">Sobre esta primeira versão ↗</a>
      </aside>
      <div className="shell">
        <header className="topbar"><span id="breadcrumb">Seu espaço de estudos</span><span className="level"><span className="dot"></span><span id="sync-status">Conectando à nuvem…</span></span></header>
        <main id="main" tabIndex={-1}></main>
        <footer>Trilha TI · Programa-base TRT8/FCC · Destino provisório: TRT23/MT <span>Progresso sincronizado com sua conta.</span></footer>
      </div>
      <div id="toast" role="status" aria-live="polite"></div>
      <Script src="/tec-index.js" strategy="beforeInteractive" />
      <Script src="/data.js" strategy="beforeInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
