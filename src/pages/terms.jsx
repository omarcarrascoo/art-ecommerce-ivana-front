import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const TermsSection = styled.section`
    width: 85%;
    margin: 20px auto;
`
function terms() {
  return (
    <>
    <Navbar/>
    <TermsSection>
        <h1>Ivana Store Terms and Conditions</h1>
        <p>Welcome to our online store! These terms and conditions ("Agreement") apply to the use of our website ("Site") and the purchase of any products from our online art store ivanatovillaart.com. By accessing the Site or purchasing products from the Store, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, please do not use our Site or make any purchases.</p>
        <h3>Intellectual Property</h3>
        <p>All content on this Site, including but not limited to text, images, graphics, logos, designs, and artwork, are protected by intellectual property laws and are the sole property of our online store unless otherwise stated. You may not use, copy, reproduce, republish, distribute or display any content from the Site without our prior written consent.</p>
        <h3>2. Products and Pricing</h3>
        <p>2.1. All products displayed on our Store are subject to availability. We reserve the right to limit the quantity of any product available for sale and to discontinue any product at any time, without prior notice.</p>
        <p>2.2. We strive to ensure that all product descriptions, prices, and images are accurate. However, we do not guarantee that product descriptions, prices, images, or any other content on the Site are error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
        <p>2.3. The prices of our products are displayed in the currency specified on the Site and do not include applicable taxes, shipping, or handling charges, unless otherwise stated.</p>
        <h3>3. Ordering and Payment</h3>
        <p>3.1. By placing an order through our Store, you are offering to purchase a product. All orders are subject to our acceptance and availability.</p>
        <p>3.2. You agree to provide accurate and complete information when placing an order. We reserve the right to cancel or refuse any order at our discretion if we suspect fraudulent activity or if there is an error in the product information, pricing, or inventory.</p>
        <p>3.3. Payment for the products is due at the time of purchase. We currently accept payment through the methods specified on the Site. All payments are processed securely, but we do not store any credit card information.</p>
        <p>3.4. Once an order is placed and payment is made, you will receive an order confirmation via email. This email serves as acknowledgment of your order and does not guarantee acceptance.</p>
        <h3>4. Shipping and Delivery</h3>
        <p>We aim to process and ship all orders within the time frame specified on the Site. However, please note that shipping times may vary based on your location and the availability of the product.</p>
        <p>We provide shipping options and costs at the time of checkout. Any additional taxes, customs duties, or other fees imposed by the destination country are the sole responsibility of the customer.</p>
        <p>4.3. While we strive to ensure that products are delivered in a timely manner and in good condition, we are not responsible for any delays or damages caused during shipping. Once the products are shipped, it is the responsibility of the shipping carrier.</p>
        <h3>5. Returns and Refunds</h3>
        <p>5.1. If you are not completely satisfied with your purchase, you may request a return or exchange within 30 days from the date of delivery, subject to the conditions specified on the Site.</p>
        <p>5.2. To initiate a return or exchange, please contact our customer support team and provide the necessary details, including your order number and the reason for the return.</p>
        <p>5.3. All returned products must be in their original packaging and in the same condition as when received. We reserve the right to refuse returns if the products do not meet these conditions.</p>
        <p>5.4. Refunds will be issued in the original form of payment, excluding any shipping or handling charges. The refund amount will be processed once we have received the returned product and verified its condition.</p>
        <h3>6. Privacy and Data Protection</h3>
        <p>
        6.1. We value your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy, available on the Site, for information on how we collect, use, and store your data.
        <br/>   
        6.2. By using our Site or making a purchase, you agree to our Privacy Policy and the collection, use, and storage of your personal information as outlined therein.
        </p>
        <h3>7. Limitation of Liability</h3>
        <p>To the extent permitted by law, our online store and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Site or the purchase of any products, even if advised of the possibility of such damages.</p>
        <h3>8. Governing Law and Jurisdiction</h3>
        <p>This Agreement shall be governed by and interpreted in accordance with the laws of Ontario Canada. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Ontario Canada.</p>
        <p>By using our Site and making a purchase, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions or concerns regarding this Agreement, please contact us.</p>
        <p>Last updated: July 2023</p>
    </TermsSection>
    <Footer/>
    </>
  )
}

export default terms
