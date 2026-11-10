import { notFound } from "next/navigation";
import { ProfessionalPage } from "@/features/site-pages/pages/professional-page";
import { professional } from "@/features/site-pages/professionals";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== professional.slug) notFound();
  return <ProfessionalPage />;
}
