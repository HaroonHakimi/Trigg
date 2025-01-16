import Nav from "@/components/global/landing-page/nav";
import React from "react";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  const privacyPolicy = {
    effectiveDate: "Effective Date: January 16, 2025",
    introduction: {
      companyName: "Trigg",
      description:
        "Trigg is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, and protect your personal information when you use our services, including but not limited to [insert product or service name].",
      agreement:
        "By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our services.",
    },
    informationWeCollect: {
      personalInformation: [
        "Name",
        "Email address",
        "Phone number",
        "Social media account details (e.g., usernames, profile information)",
        "Payment information (for subscription services, if applicable)",
      ],
      automaticallyCollectedInformation: [
        "IP address",
        "Device type",
        "Browser type",
        "Operating system",
        "Interaction logs (e.g., clicks, pages viewed)",
      ],
      cookiesAndTracking:
        "We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings.",
    },
    howWeUseYourInformation: [
      "To provide and maintain our services.",
      "To improve user experience and customize content.",
      "To process payments and manage subscriptions.",
      "To send notifications, updates, and promotional materials.",
      "To comply with legal obligations and enforce our terms.",
    ],
    howWeShareYourInformation: {
      sellInformation:
        "We do not sell your personal information to third parties.",
      sharingCircumstances: {
        serviceProviders:
          "We may share your information with trusted third-party service providers who assist us in delivering our services.",
        legalRequirements:
          "We may disclose your information if required by law or to protect our rights and safety.",
        businessTransfers:
          "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
      },
    },
    yourRightsAndChoices: {
      accessAndCorrection:
        "You have the right to access and correct your personal information. Contact us at haroonhakimi2005@gmail.com to make a request.",
      dataDeletion:
        "You can request the deletion of your personal data by contacting us at haroonhakimi2005@gmail.com.",
      optOutOptions:
        "You may opt out of receiving marketing communications by following the instructions in our emails or contacting us directly.",
    },
    securityOfYourInformation:
      "We implement reasonable security measures to protect your personal information. However, no method of transmission or storage is 100% secure. Use our services at your own risk.",
    childrensPrivacy:
      "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.",
    changesToPolicy:
      "We may update this Privacy Policy from time to time. The updated policy will be posted on this page with the &apos;Effective Date&apos; updated. Your continued use of our services after any changes constitutes acceptance of the new policy.",
    contactUs: {
      companyName: "Trigg",
      email: "haroonhakimi2005@gmail.com",
      phone: "4373131705",
    },
  };

  return (
    <section>
      <Nav />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">{privacyPolicy.effectiveDate}</p>

        {/* Introduction */}
        <div className="mb-8">
          <p className="mb-4">{privacyPolicy.introduction.description}</p>
          <p className="mb-4">{privacyPolicy.introduction.agreement}</p>
        </div>

        {/* Information We Collect */}
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            {privacyPolicy.informationWeCollect.personalInformation.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-4">
            {privacyPolicy.informationWeCollect.automaticallyCollectedInformation.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>

          <p className="mb-4">{privacyPolicy.informationWeCollect.cookiesAndTracking}</p>
        </div>

        {/* How We Use Your Information */}
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-8">
          {privacyPolicy.howWeUseYourInformation.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>

        {/* How We Share Your Information */}
        <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
        <div className="mb-8">
          <p className="mb-4">{privacyPolicy.howWeShareYourInformation.sellInformation}</p>
          <h3 className="text-xl font-medium mb-2">Sharing Circumstances</h3>
          <ul className="list-disc pl-6">
            <li className="mb-1">{privacyPolicy.howWeShareYourInformation.sharingCircumstances.serviceProviders}</li>
            <li className="mb-1">{privacyPolicy.howWeShareYourInformation.sharingCircumstances.legalRequirements}</li>
            <li className="mb-1">{privacyPolicy.howWeShareYourInformation.sharingCircumstances.businessTransfers}</li>
          </ul>
        </div>

        {/* Your Rights and Choices */}
        <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
        <div className="mb-8">
          <p className="mb-2">{privacyPolicy.yourRightsAndChoices.accessAndCorrection}</p>
          <p className="mb-2">{privacyPolicy.yourRightsAndChoices.dataDeletion}</p>
          <p className="mb-2">{privacyPolicy.yourRightsAndChoices.optOutOptions}</p>
        </div>

        {/* Security, Children&apos;s Privacy, and Changes */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
          <p className="mb-4">{privacyPolicy.securityOfYourInformation}</p>

          <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p className="mb-4">{privacyPolicy.childrensPrivacy}</p>

          <h2 className="text-2xl font-semibold mb-4">Changes to Policy</h2>
          <p className="mb-4">{privacyPolicy.changesToPolicy}</p>
        </div>

        {/* Contact Information */}
        <div className="bg-orange-400 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Company: {privacyPolicy.contactUs.companyName}</p>
          <p className="mb-2">Email: {privacyPolicy.contactUs.email}</p>
          <p>Phone: {privacyPolicy.contactUs.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
