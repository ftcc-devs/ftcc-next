import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";
import UIDivider from '../ui/UIDivider';
import UIPageNav from '../ui/UIPageNav';
import HeadingSection from '../parts/HeadingSection';
import BackToTopButton from '../parts/BackToTopButton';

export const metadata: Metadata = {
  title: 'Photo Gallery'
}

export default function PrivacyPolicyPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Privacy Policy' />

      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg px-6 pb-20 md:pb-28'>

        <div className='flex flex-row w-full mt-10 md:mt-24 mb-10 bg-slate-500/10 rounded-lg overflow-hidden'>
          <UIPageNav />
        </div>

        <HeadingSection
          subtitle='FTCC Policies'
          title='Privacy Policy'
        />

        <div id='content' className='w-full max-w-screen-md mx-auto'>

          <h3>Introduction</h3>

          <p>Filipino Tech Community In Canberra (&quot;we&quot;, &quot;us&quot;) respect your privacy. We are committed to safeguarding the personal information (&quot;PII&quot;) you entrust to us. This policy outlines how we collect, use, disclose, secure, and manage your PII.</p>

          <h3>Scope</h3>

          <p>This policy applies to PII we collect from individuals in Australia through our website, services, or other interactions.</p>

          <h3>Information We Collect</h3>

          <p>We may collect the following basic PII:</p>

          <ul className='list-square pl-8 *:pb-3'>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Email</li>
            <li>Mobile Number</li>
          </ul>

          <h3>How We Collect Information</h3>

          <ul className='list-square pl-8 *:pb-3'>
            <li>Directly from You: When you fill out forms, including our membership form where you provide your consent for data collection, contact us, or subscribe to our services.</li>
            <li>Indirectly: Through cookies or other technology on our website.</li>
          </ul>


          <h3>How We Use Information</h3>

          <ul className='list-square pl-8 *:pb-3'>
            <li>Providing Services: To deliver the services you request.</li>
            <li>Communication: To contact you regarding your account, updates, or offers.</li>
            <li>Improvement: To analyse usage patterns and improve our services. </li>
            <li>Legal Compliance: As required by law, regulation, or court orders.</li>
          </ul>

          <p>We will not sell or rent your PII. We may disclose your PII in limited circumstances:</p>

          <ul className='list-square pl-8 *:pb-3'>
            <li>Third-Party Service Providers: With necessary service providers to perform functions on our behalf (e.g., payment processing, data storage).</li>
            <li>Legal Obligations: If required by law, court order, or to protect our rights or the rights of others. </li>
            <li>Audits: We may disclose your PII to authorized auditors during the course of an audit.</li>
          </ul>

          <h3>Consent</h3>

          <p>By using our services and providing your PII, such as on our membership form, you consent to the collection, use, and disclosure of your information as outlined in this Data Privacy Policy. You have the right to withdraw your consent at any time.</p>

          <h3>Data Security</h3>

          <p>We take appropriate technical and organizational measures to safeguard your PII against unauthorised access, loss, alteration, or misuse.</p>

          <h3>Data Retention</h3>

          <p>We retain your PII for at least 7 years for record-keeping, compliance requirements, and potential audits. We may retain it for a longer period if necessary for a legitimate business purpose or as required by law.</p>

          <h3>Your Rights</h3>
          
          <p>Under the Australian Privacy Principles (APPs), you have the right to:</p>
          
          <ul className='list-square pl-8 *:pb-3'>
            <li>Access your PII: You can request a copy of the PII we hold about you. </li>
            <li>Correct your PII: Request changes if you believe your PII is inaccurate. </li>
            <li>Request Erasure: Subject to certain conditions, ask us to delete your PII. </li>
            <li>Restrict Processing: Request us to limit how we use your PII. </li>
            <li>Lodge a Complaint: You can contact the Office of the Australian Information Commissioner (OAIC) if you have concerns about our handling of your PII (https://www.oaic.gov.au/).</li>
          </ul>

          <h3>Data Breach Notification</h3>

          <p>In the unlikely event of a data breach that compromises your PII, we will:</p>

          <ul className='list-square pl-8 *:pb-3'>
            <ul>Take steps to contain the breach and assess its impact. </ul>
            <ul>Notify you promptly if there is a risk of serious harm. </ul>
            <ul>Notify the Office of Australian Information Commissioner (OAIC) if required under the Notifiable Data Breaches (NDB) scheme.</ul>
            <ul></ul>
          </ul>

          <h3>Changes to This Policy</h3>

          <p>We may update this policy periodically. We will notify you of significant changes by posting the revised policy on our website.</p>

          <h3>Contact Us</h3>

          <p>If you have questions, concerns, or wish to exercise your rights, please contact:</p>

        </div>


      </div>

      <UIDivider />
      <BackToTopButton />
      <Footer />

    </main>
  )
}
