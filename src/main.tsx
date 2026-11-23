import { createRoot } from "react-dom/client";
import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { TaxDashboard } from "./tax-dashboard";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing application root.");

createRoot(root).render(
  <div className="shell">
    <header className="site-header">
      <span><FileCheck2 size={20} aria-hidden="true" /> Compliance dashboard</span>
      <a href="https://protfolio-ashy-one.vercel.app/projects/tax-compliance">
        Portfolio case study <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
    <main>
      <div className="intro">
        <h1>Adaptive Tax Law Monitoring</h1>
        <p>Explore a compliance review workflow with fictional updates. Review status lasts for the current visit.</p>
      </div>
      <TaxDashboard />
    </main>
  </div>,
);
