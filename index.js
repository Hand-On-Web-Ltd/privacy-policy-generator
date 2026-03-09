'use strict';

module.exports = function generatePolicy(options) {
  const {
    companyName,
    website,
    email,
    country = 'UK',
    lastUpdated = new Date().toISOString().split('T')[0]
  } = options;

  return `Privacy Policy for ${companyName}
Last updated: ${lastUpdated}

1. Introduction
${companyName} ("we", "us", "our") is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit ${website} or use our services.

2. Data Controller
${companyName}
Website: ${website}
Email: ${email}
Country: ${country}

3. Information We Collect
We may collect the following personal data:
- Name and contact details (email address, phone number)
- Technical data (IP address, browser type, operating system)
- Usage data (pages visited, time spent on site)
- Cookies and similar tracking technologies

4. How We Use Your Data
We use your personal data to:
- Provide and maintain our services
- Respond to your enquiries and requests
- Send relevant communications (with your consent)
- Improve our website and services
- Comply with legal obligations

5. Legal Basis for Processing (GDPR)
We process your data based on:
- Your consent
- Performance of a contract
- Legitimate business interests
- Legal obligations

6. Data Sharing
We do not sell your personal data. We may share data with:
- Service providers who assist our operations
- Legal authorities when required by law
- Business partners (only with your consent)

7. Data Retention
We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by law.

8. Your Rights
Under GDPR, you have the right to:
- Access your personal data
- Rectify inaccurate data
- Request erasure of your data
- Restrict processing
- Data portability
- Object to processing
- Withdraw consent at any time

To exercise these rights, contact us at ${email}.

9. Cookies
Our website uses cookies to enhance your experience. You can manage cookie preferences through your browser settings.

10. Security
We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.

11. Changes to This Policy
We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.

12. Contact Us
If you have questions about this privacy policy, contact us at:
Email: ${email}
Website: ${website}

This policy is compliant with ${country === 'UK' ? 'UK GDPR and the Data Protection Act 2018' : 'the General Data Protection Regulation (EU GDPR)'}.`;
};
