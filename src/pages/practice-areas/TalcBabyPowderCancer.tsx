import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/talc-cancer-hero.jpg';

const TalcBabyPowderCancer = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Talc Cancer Lawyers | Baby Powder Ovarian Cancer Claims",
        description: "Expert legal representation for talc cancer victims throughout California. Former defense counsel now fighting contaminated baby powder cancer cases. Free consultation.",
        canonical: "/practice-areas/talc-baby-powder-cancer"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Talc Cancer Lawyers",
        subtitle: "Fighting for Victims of Contaminated Baby Powder",
        description: "Pursuing Justice for Ovarian Cancer and Mesothelioma Victims Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">The Talc Cancer Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          For generations, talcum powder was marketed as the epitome of purity and safety, a product gentle enough for babies and recommended for women's most intimate hygiene needs. Today, thousands of California women face ovarian cancer diagnoses, and both men and women confront mesothelioma, after decades of using products contaminated with asbestos and linked to cancer development. At Trembach Law Firm, we leverage our former defense counsel background to expose how manufacturers knew their talc contained cancer-causing asbestos yet continued aggressive marketing while concealing deadly risks.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The betrayal runs deeper than simple product defects. Internal documents reveal manufacturers tested their talc, found asbestos contamination, and chose to hide these results while specifically marketing powder for feminine hygiene use. This targeted marketing to women for genital use, despite known cancer risks, represents one of the most egregious examples of corporate profits over consumer safety in modern history.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          California women trusted these products for decades, using them after bathing, on sanitary pads, and for daily freshness, never knowing each application potentially planted seeds of future cancer. Our firm stands with families devastated by talc-related cancers, understanding that behind every case is a story of betrayal and preventable tragedy.
        </p>
      </Card>

      {/* Scientific Evidence */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Scientific Connection to Cancer</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The scientific connection between talc use and cancer has strengthened considerably over the past several decades. Multiple epidemiological studies consistently show increased ovarian cancer risk among women who used talcum powder for feminine hygiene. The proposed mechanism involves talc particles traveling through the reproductive tract, causing inflammation that eventually leads to cancerous changes.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Ovarian Cancer Risk</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• 20-30% increased cancer risk</li>
              <li>• Particles travel through reproductive system</li>
              <li>• Chronic inflammation leads to cancer</li>
              <li>• Decades of exposure increase risk</li>
              <li>• Genital use most dangerous</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Mesothelioma Cases</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Asbestos contamination in talc</li>
              <li>• Both men and women affected</li>
              <li>• Baby powder inhalation risks</li>
              <li>• Industrial talc exposure</li>
              <li>• Family secondary exposure</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          When talc is contaminated with asbestos, the cancer risk multiplies, as asbestos is a known carcinogen causing mesothelioma and other cancers. Recent government testing has found asbestos in consumer talc products, validating decades of scientific warnings that manufacturers ignored.
        </p>
      </Card>

      {/* Corporate Concealment */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Corporate Concealment and Evidence</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Internal corporate documents revealed through litigation expose a decades-long pattern of concealment by talc manufacturers. Companies knew their products contained asbestos as early as the 1970s but chose to hide this information from consumers and regulators while continuing to market talc for intimate use.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Known Contamination</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Internal testing showed asbestos</li>
              <li>• Mining locations near asbestos</li>
              <li>• Failed purification processes</li>
              <li>• Ignored safety warnings</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Marketing Deception</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Targeted women for genital use</li>
              <li>• "Pure and safe" advertising</li>
              <li>• Medical endorsements</li>
              <li>• Baby safety claims</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Regulatory Evasion</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Withheld test results</li>
              <li>• Fought safety regulations</li>
              <li>• Lobbied against warnings</li>
              <li>• Delayed product changes</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Legal Process */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Comprehensive Legal Process</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our experience as former defense attorneys provides unique insight into how talc manufacturers defend these cases, enabling us to build stronger claims and achieve better outcomes for cancer victims and their families.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Case Development</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Medical record analysis</li>
              <li>• Product use documentation</li>
              <li>• Expert witness coordination</li>
              <li>• Corporate document discovery</li>
              <li>• Scientific evidence compilation</li>
              <li>• Damage calculation and modeling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Compensation Categories</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Medical treatment expenses</li>
              <li>• Lost wages and earning capacity</li>
              <li>• Pain and suffering damages</li>
              <li>• Family impact and consortium</li>
              <li>• Punitive damages for concealment</li>
              <li>• Wrongful death claims</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Diagnosed with Cancer After Talc Use?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          If you or a loved one developed ovarian cancer, mesothelioma, or other cancers after using talcum powder or baby powder products, you may be entitled to significant compensation. Time limits apply, so immediate legal consultation is essential to protect your rights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Cancer Case Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default TalcBabyPowderCancer;