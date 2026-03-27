type CaseStudyDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const { slug } = await params;

  return <h1>Case Study Details: {slug}</h1>;
}