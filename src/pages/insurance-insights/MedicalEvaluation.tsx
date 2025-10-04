import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, Shield, FileText, Users, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imeHero from '@/assets/ime-hero.jpg';
gsap.registerPlugin(ScrollTrigger);
const MedicalEvaluation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children || [], {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <>
      <Helmet>
        <title>Independent Medical Evaluation (IME) | Trembach Law Firm</title>
        <meta name="description" content="Understand Independent Medical Evaluations (IME) and how insurance companies use them. Get expert legal guidance to protect your injury claim from biased IME reports." />
      </Helmet>
      
      <main ref={sectionRef} className="bg-white">
        {/* Hero Section - Apple Watch Style */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${imeHero})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/80" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight drop-shadow-lg leading-[0.9]">
              <span className="text-slate-900 text-6xl">Independent Medical</span>
              <br />
              <span className="text-slate-900">Evaluations</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-900 font-medium max-w-5xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              Understanding IMEs and protecting your rights during insurance-requested medical examinations
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg bg-blue-600 hover:bg-blue-700 text-white hover:!text-black">
              <a href="/free-consultation">
                Get Your Free Evaluation
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </section>

        {/* What is an IME Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                What is an Independent Medical Evaluation?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                An IME is a medical examination requested by an insurance company to evaluate your injuries and treatment
              </p>
            </div>

            <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <FileText className="text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Reality</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Despite being called "independent," IME doctors are typically hired and paid by insurance companies. Their evaluations often favor the insurance company's interests over yours.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <span>Insurance companies choose doctors who frequently minimize injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <span>Brief examinations often lasting only 15-30 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                    <span>Reports may contradict your treating physicians</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <Shield className="text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have specific legal rights during an IME. Understanding these rights is crucial to protecting your claim.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                    <span>Right to have someone accompany you to the examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                    <span>Right to audio or video record the examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                    <span>Right to receive a copy of the IME report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Insurance Companies Use IMEs */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                How Insurance Companies Use IMEs
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Understanding the insurance company's strategy helps you protect your claim
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Minimize Injuries</h3>
                <p className="text-blue-100 leading-relaxed">
                  IME doctors often downplay the severity of your injuries, claiming they're less serious than your treating physicians determined.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dispute Causation</h3>
                <p className="text-blue-100 leading-relaxed">
                  They may claim your injuries were pre-existing or caused by something other than the accident in question.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Reduce Compensation</h3>
                <p className="text-blue-100 leading-relaxed">
                  By challenging your injuries and treatment, they aim to reduce or deny your compensation entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preparing for Your IME */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Preparing for Your IME
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Proper preparation can make a significant difference in protecting your claim
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Clock className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Before the Exam</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Review your medical history</li>
                  <li>• Bring all medical records</li>
                  <li>• Consult with your attorney</li>
                  <li>• Know your rights</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Users className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">During the Exam</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Be honest and accurate</li>
                  <li>• Don't exaggerate or minimize</li>
                  <li>• Answer only what's asked</li>
                  <li>• Have someone accompany you</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Stethoscope className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Physical examination</li>
                  <li>• Review of medical records</li>
                  <li>• Questions about accident</li>
                  <li>• Range of motion tests</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <FileText className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">After the Exam</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Document everything</li>
                  <li>• Note exam duration</li>
                  <li>• Contact your attorney</li>
                  <li>• Request a copy of report</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <AlertTriangle className="text-red-600 mx-auto mb-6" size={64} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Red Flags in IME Reports
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Watch out for these common tactics used in biased IME reports
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contradicting Your Doctors</h3>
                <p className="text-slate-600">
                  IME doctor disagrees with multiple treating physicians who have followed your case long-term, based on one brief examination.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Incomplete Examination</h3>
                <p className="text-slate-600">
                  Exam lasting less than 30 minutes yet making definitive conclusions about complex injuries requiring ongoing treatment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pre-Existing Condition Claims</h3>
                <p className="text-slate-600">
                  Attributing all current symptoms to alleged pre-existing conditions with no supporting evidence from your medical history.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Selective Record Review</h3>
                <p className="text-slate-600">
                  Cherry-picking certain medical records while ignoring evidence that supports the severity of your injuries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                How We Protect You During IMEs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our experienced attorneys know how to counter biased IME reports
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Pre-IME Preparation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We thoroughly prepare you for the IME, explaining your rights and what to expect during the examination.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Report Analysis</h3>
                <p className="text-slate-600 leading-relaxed">
                  We carefully review IME reports to identify bias, inconsistencies, and medical errors that we can challenge.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Counter Evaluations</h3>
                <p className="text-slate-600 leading-relaxed">
                  When necessary, we arrange truly independent medical evaluations from respected experts to counter biased IME findings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Don't Face an IME Alone
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Having an experienced attorney on your side during the IME process can make a significant difference in protecting your claim value.
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg bg-blue-600 hover:bg-blue-700 text-white hover:!text-black">
              <a href="/free-consultation">
                Get Your Free Evaluation
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <p className="text-slate-500 mt-6">
              Available 24/7 • Free Case Review • No Fees Unless We Win
            </p>
          </div>
        </section>
      </main>
    </>;
};
export default MedicalEvaluation;