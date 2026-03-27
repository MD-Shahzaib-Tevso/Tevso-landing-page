type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;

  return <h1>Service Details: {slug}</h1>;
}