
import { notFound } from "next/navigation";
import Image from "next/image";
import { CASE_STUDIES } from "../caseStudies";

import { CaseStudiesDetailsHeroSection } from "@/components/sections/CaseStudiesDetailsHeroSection";
import { CaseStudiesDetailsContentSection } from "@/components/sections/CaseStudiesDetailsContentSection";
import { CaseStudiesDetailsImpactSection } from "@/components/sections/CaseStudiesDetailsImpactSection";
import { CaseStudiesDetailsSolutionSection } from "@/components/sections/CaseStudiesDetailsSolutionSection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;

  const study = CASE_STUDIES.find(
    (item) => item.slug === slug
  );

  if (!study) return notFound();

  return (
    <main className="w-full bg-white overflow-hidden pb-10">
      <CaseStudiesDetailsHeroSection title={study.title} />
      <div className="mx-auto w-full max-w-7xl px-8 sm:px-14 space-y-24 mt-[-80px] relative z-10">
        <CaseStudiesDetailsContentSection study={study} />
        <CaseStudiesDetailsSolutionSection study={study} />
        <CaseStudiesDetailsImpactSection study={study} />
      </div>
    </main>
  );
}




// // =====================================


// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { CASE_STUDIES } from "../caseStudies";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function CaseStudyDetail({ params }: Props) {
//   const { slug } = await params;

//   const study = CASE_STUDIES.find(
//     (item) => item.slug === slug
//   );

//   if (!study) return notFound();

//   return (
//     <main className="bg-[#f5f5f5]">

//       {/* HERO */}
//       <section className="relative h-[300px] w-full">
//         <Image
//           src={study.banner}
//           alt={study.title}
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/45" />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-center text-4xl font-bold text-white">
//             {study.title}
//           </h1>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="mx-auto max-w-6xl px-6 py-12">
//         <div className="rounded-3xl bg-white p-8 shadow">

//           <Image
//             src={study.image}
//             alt={study.title}
//             width={1200}
//             height={600}
//             className="w-full rounded-xl"
//           />

//           <h2 className="mt-8 text-4xl font-bold text-[#2417ff]">
//             {study.title}
//           </h2>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-[#2417ff]">
//               Client challenge
//             </h3>
//             <p className="mt-2 text-gray-700">
//               {study.challenge}
//             </p>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-[#2417ff]">
//               Product design approach
//             </h3>
//             <p className="mt-2 text-gray-700">
//               {study.approach}
//             </p>
//           </div>

//           {/* solution */}
//           <div className="mt-12">
//             <h3 className="text-3xl font-bold text-[#2417ff]">
//               {study.Solution[0].title}
//             </h3>

//             <div className="mt-8 grid gap-6 md:grid-cols-3">
//               {study.Solution.map((item,i) => (
//                 <div
//                   key={i}
//                   // key={item.number}
//                   className="rounded-2xl border p-6 shadow-sm"
//                 >
//                   <div className="text-sm font-bold text-[#2417ff]">
//                     {i}
//                     {/* {item.number} */}
//                   </div>

//                   <h4 className="mt-3 font-bold">
//                     {item.title}
//                   </h4>

//                   <p className="mt-2 text-sm text-gray-600">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }