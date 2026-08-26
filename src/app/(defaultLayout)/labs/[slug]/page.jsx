import data from '../../../Labs.json';
import LabDetail from '../../../ui/Lab/LabDetail';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return data.labs.map((lab) => ({ slug: lab.slug }));
}

export function generateMetadata({ params }) {
  const lab = data.labs.find((l) => l.slug === params.slug);
  if (!lab) return {};
  return {
    title: `${lab.title} | Grace Mussimbi`,
    description: lab.task,
  };
}

export default function LabPage({ params }) {
  const index = data.labs.findIndex((l) => l.slug === params.slug);
  if (index === -1) notFound();

  const lab = data.labs[index];
  const prev = index > 0 ? data.labs[index - 1] : null;
  const next = index < data.labs.length - 1 ? data.labs[index + 1] : null;

  return <LabDetail lab={lab} prev={prev} next={next} />;
}
