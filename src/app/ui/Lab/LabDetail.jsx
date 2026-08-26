'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import './Lab.scss';

const Block = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;
    case 'subheading':
      return <h3>{block.text}</h3>;
    case 'label':
      return <div className="st-lab-label">{block.text}</div>;
    case 'code':
      return (
        <pre className="st-lab-code">
          <code>{block.text}</code>
        </pre>
      );
    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="st-lab-table-wrap">
          <table className="st-lab-table">
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'img':
      return (
        <figure className="st-lab-figure">
          <img src={block.src} alt={block.caption} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'note':
      return <div className="st-lab-note">{block.text}</div>;
    default:
      return null;
  }
};

const LabDetail = ({ lab, prev, next }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lab.slug]);

  return (
    <article className="st-content">
      <div className="st-lab-heading">
        <div className="container">
          <Link href="/#portfolio" className="st-lab-back">
            ← All lab writeups
          </Link>
          <div className="st-lab-number">LAB {lab.number}</div>
          <h1 className="st-lab-title">{lab.title}</h1>
          <div className="st-lab-meta">
            <span>{lab.subTitle}</span>
            <span>{lab.date}</span>
            <span className="st-lab-status">{lab.status}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="st-lab-body">
          <h2>Task</h2>
          <p className="st-lab-lede">{lab.task}</p>

          <h2>Configuration</h2>
          <dl className="st-lab-config">
            {lab.config.map((item, i) => (
              <div className="st-lab-config-row" key={i}>
                <dt>{item.key}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          {lab.sections.map((section, i) => (
            <section key={i}>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, j) => (
                <Block block={block} key={j} />
              ))}
            </section>
          ))}

          <nav className="st-lab-nav">
            <span>
              {prev && <Link href={`/labs/${prev.slug}`}>← {prev.title}</Link>}
            </span>
            <span>
              {next && <Link href={`/labs/${next.slug}`}>{next.title} →</Link>}
            </span>
          </nav>
        </div>
      </div>
    </article>
  );
};

export default LabDetail;
