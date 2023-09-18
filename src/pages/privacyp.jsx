import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
const TermsSection = styled.section`
    width: 85%;
    margin: 20px auto;
    
`
function privacyp() {
  return (
    <>
    <Navbar/>
    <TermsSection>
        <h1>Privacy Policy</h1>
        <p>This Privacy Policy explains how we collect, use, and protect your personal information when you use our online store ("Store") and its associated services. We are committed to protecting your privacy and handling your personal information in a secure and confidential manner.</p>
        <p>Please read this Privacy Policy carefully before using our Store or submitting any personal information. By accessing or using our Store, you acknowledge and agree to the practices described in this Privacy Policy.</p>
        <h3>Information We Collect</h3>
        <p>We may collect personal information from you when you use our Store, including but not limited to:</p>
        <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
        </ul>
        <p>We collect this information in order to process your orders, provide customer support, and enhance your shopping experience. We may also collect non-personal information, such as your IP address, browser type, and device information, to improve our services and marketing efforts.</p>
        <h3>Use of Your Information</h3>
        <p>We use the personal information we collect for the following purposes:</p>
        <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and provide customer support</li>
            <li>Send you promotional offers and updates (if you have opted in to receive them)</li>
            <li>Improve our Store, products, and services</li>
            <li>Prevent fraud and enforce our terms and conditions</li>
            <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes without your consent. However, we may share your information with trusted third parties who assist us in operating our Store, managing payments, delivering orders, and providing customer support. These third parties are bound by confidentiality agreements and are only authorized to use your information as necessary to perform their services.</p>
        <h3>Data Security</h3>
        <p>We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect it. However, we cannot guarantee the absolute security of your information as no method of transmission over the internet or electronic storage is completely secure.</p>
        <h3>Children's Privacy</h3>
        <p>Our Store is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child under 13, please contact us and we will promptly delete the information.</p>
        <h3>Cookies and Tracking Technologies</h3>
        <p>We use cookies and other tracking technologies to enhance your browsing experience and analyze how users navigate and interact with our Store. These technologies may collect non-personal information such as your IP address, browser type, and device information. You have the option to disable cookies through your browser settings, although this may affect certain functionality of our Store.</p>
        <h3>Third-Party Websites</h3>
        <p>Our Store may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of these websites before providing any personal information.</p>
        <h3>Changes to this Privacy Policy</h3>
        <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page with the updated date. By continuing to use our Store after any changes to this Privacy Policy, you acknowledge and agree to the updated terms.</p>
        <h3>Contact Us</h3>
        <p>If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us using the contact information provided on our Store.</p>
        <p>Last updated: July 2023</p>
    </TermsSection>
    <Footer/>
    </>
  )
}

export default privacyp
