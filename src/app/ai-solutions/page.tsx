import { AiSolutionsHeroSection } from "@/components/sections/AiSolutionsHeroSection";
import { AiSolutionsUntappedSection } from "@/components/sections/AiSolutionsUntappedSection";
import { AiSolutionsCapabilitiesSection } from "@/components/sections/AiSolutionsCapabilitiesSection";
import { AiSolutionsScenariosSection } from "@/components/sections/AiSolutionsScenariosSection";
import { AiSolutionsTransformationSection } from "@/components/sections/AiSolutionsTransformationSection";
import { AiSolutionsContextSection } from "@/components/sections/AiSolutionsContextSection";
import { AiSolutionsMarketContextSection } from "@/components/sections/AiSolutionsMarketContextSection";
import { AiSolutionsMethodologySection } from "@/components/sections/AiSolutionsMethodologySection";
import { AiSolutionsFutureCapabilitiesSection } from "@/components/sections/AiSolutionsFutureCapabilitiesSection";
import { AiSolutionsCTASection } from "@/components/sections/AiSolutionsCTASection";

export default function AiSolutionsPage() {
    return (
        <main className="w-full overflow-hidden">
            <AiSolutionsHeroSection />
            <AiSolutionsUntappedSection />
            <AiSolutionsCapabilitiesSection />
            <AiSolutionsScenariosSection />
            {/* <AiSolutionsTransformationSection />
            <AiSolutionsContextSection />
            <AiSolutionsMarketContextSection />
            <AiSolutionsMethodologySection />
            <AiSolutionsFutureCapabilitiesSection />
            <AiSolutionsCTASection /> */}
        </main>
    );
}
