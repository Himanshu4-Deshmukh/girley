
import React from 'react';
import Layout from '../../components/layout/Layout';

const cardData = [
  {
    id: 1,
    title: 'PM-KISAN Scheme',
    content: 'The PM-KISAN Scheme offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pmkisan.gov.in/'
  },

  {
    id: 2,
    title: 'Pradhan Mantri Kisan Samman Nidhi Scheme',
    content: 'The PM-KISAN Scheme offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1946816'
  },

  {
    id: 3,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 4,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 5,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 6,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  // Add more card data as needed
];

const Card = ({ id, title, content, buttonUrl }) => {
  const handleClick = () => {
    // Handle button click if needed
    window.location.href = buttonUrl; // Redirect to the specified URL
  };

  return (

    <div className="w-1/3 p-4">
      <div className="bg-white-1 shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="p-4">
          <h2><b>{title}</b></h2>
          <p>{content}</p>
          <button className="bg-blue-500 text-white p-2 rounded-md mt-4 block w-full text-center" onClick={handleClick}>
            Go to {title}
          </button>
        </div>
      </div>
    </div>
  );
};

const Policies = () => {
  return (
    <Layout>
       <header class="bg-blue-500 text-white py-4">
        <h1 class="text-3xl font-semibold mt-16 mb-16 text-center">Privacy Policy</h1>
    </header>
    <div className="flex flex-wrap justify-around">
      {/* {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))} */}

      <p style={{color:"gray", padding:"50px"}}>
     
<b>
This document explains how KANIKA PLAYHUB PRIVATE LIMITED  collects, processes, stores and/or shares any personal data and/or information from users (jointly referred to as “Information”). By accessing and/or using the Services you consent the collection, transfer, manipulation, storage, disclosure and other uses of your information as described in this Privacy Policy. If you have any concerns about providing data, or having it used in any manner permitted in this Privacy Policy, you should not use the Services. As set out in the terms and conditions relating the Services (the “Terms”), you must be at least at legal age (minimum age of 18 years) to access and/or use the Services, or if legally possible, to access with your legal guardian consent, due authorization and agreement with these Privacy Policy.
<br />
The Information collected:

KANIKA PLAYHUB PRIVATE LIMITED  and/or third parties, including but not limited to business partners, advertising networks, analytics or search information providers, may collect and process the following data about you: information that you provide when you fill in forms when accessing and/or using the Services, or when you create an account within the Services; details of your use of the Services and the resources that you access; the correspondence between you and KANIKA PLAYHUB PRIVATE LIMITED  and any interactions, or with other users on the Service, the channels and/or any social media related; from third parties who hold data about you and who agree to share this data with us; and information collected via cookies and other similar technologies and/or other mechanisms, as explained further below.

<br />

I. Cookies: KANIKA PLAYHUB PRIVATE LIMITED  uses cookies and other similar technologies in the Services. These technologies operate either by placing a small file which stores some information on your computer or mobile device; and/or by accessing information on your device. KANIKA PLAYHUB PRIVATE LIMITED  uses cookies and similar technologies to recognize you and your device, for example by identifying your IP address; to allow the Services to interact with a third party social network or platform where you have chosen to allow such interaction; to allow payment processes when you submit payment instructions; to enable KANIKA PLAYHUB PRIVATE LIMITED  and third parties to provide you with more customized services; and to collect data such as your device’s model, operating system and screen size, other applications installed on your device, and information about how you use the Services. By accessing and/or using the Services you consent the use of cookies and similar technologies in accordance with this Privacy Policy. You can disable cookies through your web or mobile device browser settings but some features of the Services may not function properly. Alternatively, if you do not wish such data collection as described in this section, you should stop using the Services.
<br />

II. Ads: Advertisers on mobile devices sometimes use advertising identifiers to enable and optimize their advertising, to deliver tailor ads related to your interests (Interest-Based Advertising or IBA). These identifiers are non-permanent, non-personal, device identifiers. KANIKA PLAYHUB PRIVATE LIMITED  and/or third parties may use your device’s advertising identifier and other information associated with it, to deliver ads that relate to your interests and to improve and measure the effectiveness of ad campaigns.
<br />

III. Location Information: You may choose to publish your location in your KANIKA PLAYHUB PRIVATE LIMITED profile. You may also tell your location when you enable your device to send such location information. KANIKA PLAYHUB PRIVATE LIMITED  and/or third parties may use and store information about your location to provide special features, to deliver ads that relate your interests and/or to improve and customize the Services.
<br />
IV. Links: KANIKA PLAYHUB PRIVATE LIMITED may keep track of how you interact with links across the Services, including email notifications, third-party services, and client applications, by redirecting clicks or through other means.
<br />
V. Log Data: Servers automatically record information created by your use of the Services. This data may include information such as your IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device and application IDs, search terms, and cookie information. Log data is received when you interact with the Services. This data is used to provide the Services and to measure, customize, and improve them.
<br />
VI. Payment information: If you make a purchase in the Services, KANIKA PLAYHUB PRIVATE LIMITED  may collect the billing and financial information necessary to process the charges; and/or do so on behalf of the relevant payment service providers. Purchases of third party services are subject to the policies applicable to such provider.
<br />
VII. Third-party services: KANIKA PLAYHUB PRIVATE LIMITED  uses a variety of third-party services to help its provision of the Services, such as hosting and other services. These third-party service providers may collect information sent by your browser as part of a web page request, such as cookies or your IP address, location and devices’ unique identifiers. Also, third-party ad partners may share information to measure ad quality and tailor ads, for example to display ads about things you may have already shown interest in.
<br />
VIII. Customer Support Correspondence: When you ask for assistance fromKANIKA PLAYHUB PRIVATE LIMITED customer support, the contact information you provide will be collected, as well as information about your game play or activity on the Service, your user ID number, and the correspondence and any information contained within. If available through the Services, you may provide KANIKA PLAYHUB PRIVATE LIMITED with profile information to make public, such as a short biography, location, website, cell phone, a picture, information to customize your account, etc. Such contact information may be used to send you information about the Services or related information. You may use your account settings to unsubscribe from notifications from KANIKA PLAYHUB PRIVATE LIMITED  and/or from other users and find users you know. You may also unsubscribe by following the instructions contained within the notification or the instructions on the Service. Also KANIKA PLAYHUB PRIVATE LIMITED may use your contact information to help others find your account, including through third-party services and client applications. Providing any additional information described in this section is entirely optional.

<br />

Use of Information

When you create or configure an account in the Services, you provide some personal information, such as your name, username, password, email address and any other information as required time to time. Some of this information, for example, your name and/or username, may be listed publicly on the Services, including on your profile page and in search results. You agree that KANIKA PLAYHUB PRIVATE LIMITED  and/or third parties on its behalf and/or its partners may use the Information for the purposes of contacting you as part of customer support; to send you updates or information about the Services; managing your account and relationship with the Service and improving your experience when you use it, improving the Services, research, surveying, and engaging with you, for example by sending you communications for these purposes; marketing and promotion of the Services or products; to personalize and optimize the Services, promotional content and/or advertising; to create reports, analysis or similar services for the purposes of research or business intelligence.
<br />

Information sharing and disclosure

KANIKA PLAYHUB PRIVATE LIMITED  will only share your data with third parties according to the Privacy Policy, as reasonably necessary in order to provide the Services, for example, by providing Information to suppliers that KANIKA PLAYHUB PRIVATE LIMITED may use to fulfill the Services; where it is necessary to carry out your instructions, for example, to process a payment instruction your Information has to be provided to the payment processors; where your data is on an anonymous and aggregated basis, meaning you could not be personally identified from it; for the delivery of Interest-Based Advertising in the manner set out on this Privacy Policy; when you submit information as part of a competition or otherwise interact with any channel or social media, the information you submitted may be published; as it`s reasonably believed is permitted by law or regulation; in order to comply with any legal obligation, or in order to enforce or apply the Terms, this Privacy Policy and/or any other agreement with you; or to protect the rights and/or property of KANIKA PLAYHUB PRIVATE LIMITED  or third-party´s rights and/or property. KANIKA PLAYHUB PRIVATE LIMITED  may share or disclose your non-private information, such as public user profile information, public messages, e-mail, etc., or share or disclose your information in an anonymous or aggregated basis in a manner that does not allow your personal identification.
<br />
Interaction with social networks and/or platforms

You may allow the Services to interact with any third party social network and/or platforms, such as Facebook, twitter, whatsApp and any other networks/platforms which will provide data about you to KANIKA PLAYHUB PRIVATE LIMITED . Since any other applications or websites different than the Services are owned by a third party, you must ensure that you read their terms of service and the applicable privacy policies. You understand that when you allow the Services to interact with any third party social network and/or platform, KANIKA PLAYHUB PRIVATE LIMITED  may share data about you with your contacts and other users of the Services and vice versa. This Data may include your name, profile picture, activity status, and information related to your use of the Services. You can change this by adjusting your settings with that third party provider.
<br />

KANIKA PLAYHUB PRIVATE LIMITED has certain links embedded to third party services including but not limited to YouTube. Your interaction with such third party platform/s are governed by their policies, and we urge you to review their policies before you proceed with availing such services via the offerings of KANIKA PLAYHUB PRIVATE LIMITED . The YouTute terms are available at https://www.youtube.com/t/terms; and the Google Privacy Policy is available at https://policies.google.com/privacy?hl=en-US. Also, to control your interaction with Google account or their services allows you to control your rights and activities, and may be accessed at https://myaccount.google.com/permissions?pli=1.
<br />

Term

KANIKA PLAYHUB PRIVATE LIMITED  may retain the Information for as long as is necessary to fulfill the purposes for which it was collected or as needed to provide the Services, even after you have discontinued or deleted any account, or after the end of the provision of the Services, if retention of such Information is reasonably necessary to comply with legal obligations, meet regulatory requirements, resolve disputes between users, prevent fraud, or any other use.
<br />

Protection of Information

KANIKA PLAYHUB PRIVATE LIMITED maintains appropriate technical and physical safeguards to protect Information against accidental or unlawful destruction or loss, alteration, unauthorized disclosures or access, and any other unlawful forms of processing of the data in its possession. However, KANIKA PLAYHUB PRIVATE LIMITED  does not guarantee that Information will not be accessed, disclosed, altered or destroyed by breach of any of the abovementioned safeguards. Information may be transferred to and/or stored at worldwide destinations. KANIKA PLAYHUB PRIVATE LIMITED  takes all steps reasonably necessary to ensure that Information is treated securely and in accordance with this Privacy Policy. In the event that KANIKA PLAYHUB PRIVATE LIMITED is involved in a bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be sold or transferred as part of that transaction. The undertakings in this Privacy Policy shall apply to the Information as transferred to the new entity.
<br />
In the Services you may find links to third party websites. You understand that when you click on these links any data which you provide afterwards is subject to that third party's privacy policy and not to KANIKA PLAYHUB PRIVATE LIMITED 's. Consequently, KANIKA PLAYHUB PRIVATE LIMITED takes no responsibility for the content, safety or security of any third party website. The Services are not directed to persons under legal age. KANIKA PLAYHUB PRIVATE LIMITED does not knowingly collect any Information from children under legal age. If you become aware that a child under legal age has provided with personal information, steps will be taken to remove such information and terminate such account. If you become aware that any child has provided personal information without the essential legal guardian consent, please contact: Support@kanikaplayhub.com . Irrespective of which country you reside in or supply information from, you authorize KANIKA PLAYHUB PRIVATE LIMITED  to store and/or use the Information according to this Privacy Policy in any country where KANIKA PLAYHUB PRIVATE LIMITED  may operate.
<br />
Notwithstanding anything to the contrary in this Policy, KANIKA PLAYHUB PRIVATE LIMITED  may preserve or disclose your information to the extent reasonably necessary to comply with a law, regulation or legal request; to protect the safety of any person; to address fraud, security or technical issues; or to protect KANIKA PLAYHUB PRIVATE LIMITED 's rights or property. However, nothing in this Privacy Policy is intended to limit any legal defenses or objections that you may have to a third party’s, including a government’s request to disclose your information. KANIKA PLAYHUB PRIVATE LIMITED wants to make sure that your Information is accurate and up to date. You may ask to modify, correct or remove information with the tools and account settings of the Service, or otherwise by contacting KANIKA PLAYHUB PRIVATE LIMITED at Support@kanikaplayhub.com .
<br />

If any court or other competent authority finds any of this Privacy Policy to be invalid or unenforceable, the other terms of this Privacy Policy will not be affected. This Privacy Policy is governed by and interpreted in accordance with the laws of Nagaland State Government as well as Republic of India. Any dispute arising in connection with this Privacy Policy will be subject to the exclusive jurisdiction of the courts located in the city of Jaipur/Rajasthan – India. You consent the jurisdiction and venue in such courts and waive any objection as to inconvenient forum KANIKA PLAYHUB PRIVATE LIMITED  may revise or amend this Privacy Policy from time to time.
</b></p>
    </div>
    </Layout>
  );
};

export default Policies;

