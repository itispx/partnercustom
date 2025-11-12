// src/app/[slug]/page.tsx
export default function Slug({ params }: { params: { slug: string } }) {
  return <h1>slug: {params.slug}</h1>;
}
