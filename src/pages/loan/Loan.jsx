
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
        <h1 class="text-3xl font-semibold mt-16 mb-16 text-center">Terms & Condition</h1>
    </header>
    <div className="flex flex-wrap justify-around">
      {/* {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))} */}

      <p style={{color:"gray", padding:"50px"}}>
     
     <b>
     1. The Terms
     <br />
1.1. These Terms and Conditions is a legally binding document and is an electronic record in the form of an electronic contract formed under Information Technology Act, 2000 and rules made thereunder. These Terms and Conditions must be read in conjunction with the Terms of Use of the App (hereinafter referred to as “Terms of Use”) and the Privacy Policy of the App (hereinafter referred to as “Privacy Policy”).These Terms of Service (the “Terms”) are a legal and binding agreement between users (“Users”) andKANIKA PLAYHUB PRIVATE LIMITED (referred to as the “ludo khelo yaar”), in relation to all games and applications made available by KANIKA PLAYHUB PRIVATE LIMITED (jointly and interchangeably referred to as the “Services”), and any information, text, graphics, video, sound, pictures, and any other materials appearing, sent, uploaded, communicated, transmitted or otherwise made available via the abovementioned Services (jointly referred to as the “Content”).
<br />
1.2. By accessing and/or using the Services, Users agree to be bound by these Terms and KANIKA PLAYHUB PRIVATE LIMITED Privacy Policy, as stated on paragraph 5.
<br />
1.3. Users state that they are of legal age (minimum 18 years of age) to access the Services and Content, or if legally possible, to access with their legal guardian consent, due authorization and agreement with these Terms.
<br />
1.4. IMPORTANT NOTICE:
<br />
THE CONTEST FOR STAKES IS OPEN ONLY TO INDIAN CITIZENS, RESIDING IN INDIA EXCEPT THE RESIDENTS OF THE INDIAN STATES OF ASSAM, ODISHA, NAGALAND, SIKKIM, MEGHALAYA, ANDHRA PRADESH, AND TELANGANA.
KANIKA PLAYHUB PRIVATE LIMITED DOES NOT OFFER POKER FOR STAKES WITHIN THE TERRITORY OF GUJARAT. THE RESIDENTS OF GUJARAT HOWEVER ARE NOT RESTRICTED FROM PLAYING THE FREE TO PLAY FORMAT OF POKER, OFFERED BY KANIKA PLAYHUB PRIVATE LIMITED .
KANIKA PLAYHUB PRIVATE LIMITED DOES NOT OFFER RUMMY FOR STAKES WITHIN THE TERRITORY OF KERALA. THE RESIDENTS OF KERALA HOWEVER ARE NOT RESTRICTED FROM PLAYING THE FREE TO PLAY FORMAT OF RUMMY, OFFERED BY KANIKA PLAYHUB PRIVATE LIMITED .
CITIZENS AND/OR RESIDENTS OF COUNTRIES OTHER THAN INDIA ARE NOT ELIGIBLE TO PARTICIPATE IN THE CONTEST.
CASUAL IS ALLOWED ACROSS ALL STATES; THE GAME IS PERMITTED TO BE PLAYED FOR STAKES IN THE STATES WHICH DO NOT RESTRICT, PROHIBIT THE SAME, AS HIGHLIGHTED IN THESE TERMS.
IF YOU ARE RESIDING AND/OR ACCESSING THE APP FROM ANY REGION/STATE/COUNTRY WHERE THE CONTEST FOR STAKES IS PROHIBITED OR RESTRICTED BY LAW OR OTHER REASONS, THEN YOU ARE PROHIBITED FROM REGISTERING AND PARTICIPATING IN THE SAID CONTEST. YOU ARE RESPONSIBLE FOR COMPLIANCE OF ANY LAWS THAT ARE APPLICABLE ON YOUR COUNTRY/DOMICILE/STATE/RESIDENCE. IN CASE YOU PARTICIPATE IN THE CONTEST BY MISREPRESENTATION, THEN KANIKA PLAYHUB PRIVATE LIMITED SHALL IN ITS SOLE DISCRETION HAVE THE RIGHT TO DISQUALIFY YOU AT ANY STAGE OF THE PROCESS, FORFEIT ANY PRIZE (AS DEFINED BELOW) AND TAKE LEGAL ACTION AGAINST YOU.
IF YOU ARE FOUND OR SUSPECTED TO BE DEFRAUDING THE SYSTEMS OF THE CONTEST IN ANY MANNER THEN YOU SHALL BE DEBARRED FROM PARTICIPATING IN THE CONTEST AND KANIKA PLAYHUB PRIVATE LIMITED MAY TAKE LEGAL ACTION AGAINST YOU.
<br />
EMPLOYEES OF KANIKA PLAYHUB PRIVATE LIMITED , ITS RESPECTIVE HOLDING, SUBSIDIARIES, ASSOCIATE COMPANIES AND THIRD-PARTY SERVICE PROVIDERS WHO HAVE BEEN ENGAGED BY KANIKA PLAYHUB PRIVATE LIMITED FOR THE DEVELOPMENT, PROMOTION, ADMINISTRATION OR EXECUTION OF THE CONTEST, AND THEIR FAMILY/HOUSEHOLD MEMBERS ARE NOT ELIGIBLE TO PARTICIPATE IN THE CONTEST.
IN CASE OF ANY DISPUTE REGARDING THE APP OR THE CONTEST, KANIKA PLAYHUB PRIVATE LIMITED ’S DECISION SHALL BE FINAL AND BINDING.
KANIKA PLAYHUB PRIVATE LIMITED RESERVES THE RIGHT TO CHANGE OR MODIFY THIS TERMS AND CONDITIONS FROM TIME TO TIME, PROSPECTIVELY OR RETROSPECTIVELY, AT ITS SOLE DISCRETION AND WITHOUT ANY PRIOR INTIMATION TO YOU. YOU ARE REQUESTED TO CAREFULLY READ THESE TERMS AND CONDITIONS FROM TIME TO TIME BEFORE USING THE APP OR PARTICIPATING IN CONTEST. IT SHALL BE YOUR RESPONSIBILITY TO CHECK THESE TERMS AND CONDITIONS PERIODICALLY FOR CHANGES. KANIKA PLAYHUB PRIVATE LIMITED MAY REQUIRE YOU TO PROVIDE YOUR DIRECT OR INDIRECT CONSENT TO ANY UPDATE IN A SPECIFIED MANNER BEFORE FURTHER USE OF APP OR PARTICIPATION IN THE CONTEST. IF NO SUCH SEPARATE CONSENT IS SOUGHT, YOUR CONTINUED USE OF APP OR PARTICIPATION IN THE CONTEST, FOLLOWING SUCH CHANGES, WILL CONSTITUTE YOUR ACCEPTANCE OF THOSE CHANGES.
KANIKA PLAYHUB PRIVATE LIMITED RESERVES THE RIGHT TO WITHDRAW OR DISCONTINUE OR TERMINATE THE CONTEST AT ANY STAGE WITHOUT PRIOR NOTICE AND WITHOUT ANY LIABILITY WHATSOEVER TO YOU.
THE CONTEST IS VOID WHERE PROHIBITED BY LAW.
IN ANY CONTEST, INCASE OF A DRAW/TIE, THE FINAL DECISION WOULD BE OF THE COMPANY. THERE WOULD BE NO REFUNDS IN ANY SITUATION.

<br />
2. The Services
<br />
2.1. KANIKA PLAYHUB PRIVATE LIMITED gives Users in compliance with these Terms a personal, royalty-free, non-assignable, non-exclusive and revocable limited license to use the software that is provided as part of the Services. This license is for the sole purpose of enabling the own personal private use from Users to enjoy the Services as provided by KANIKA PLAYHUB PRIVATE LIMITED , in the manner according with by these Terms. The Services may change or being modified from time to time without prior notice or communication. Furthermore KANIKA PLAYHUB PRIVATE LIMITED may, at its own discretion, cease totally or partially, and/or permanently or temporarily the provision of the Services or Users accounts without prior notice or communication.
<br />
2.2. The Services may include advertisements, which may be targeted to the Content or information on the Services, queries made through the Services, or any other information. The types and extent of advertising by ludo khelo yaar on the Services are subject to change. In consideration for ludo khelo yaar granting you access to and use of the Services, you agree that ludo khelo yaar and its third party providers and partners may place such advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others.
<br />
2.3. When access games included in the Services, the specific rules, scoring, controls and guidelines for each game can be found within the game itself. Such rules are integral part of the Terms, which Users shall agree and comply.
<br />
2.4. Any charges related to Users for accessing the Services, including but not limited to internet connection and/or mobile or data charges are full responsibility of such Users.
<br />
3. Content
<br />
3.1. Subject to your compliance with these Terms, ludo khelo yaar grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and view the Content solely in connection with your permitted use of the Services and solely for your personal and non-commercial purposes.
<br />
The Content available through the Services has not been verified or authenticated by us, and may include inaccuracies or false information. We make no representations, warranties, or guarantees in connection with our Services or any Content on the Services, relating to the quality, suitability, truth, accuracy or completeness of any content contained in the Services. You acknowledge sole responsibility for and assume all risk arising from your use or reliance of any Content.
<br />
4. Users accounts
<br />
4.1. Users are responsible for safeguarding the password that use to access the Services. KANIKA PLAYHUB PRIVATE LIMITED encourage Users to use strong passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with the accounts. KANIKA PLAYHUB PRIVATE LIMITED cannot and will not be liable for any loss or damage arising from Users failure to comply with the above.
<br />
4.2. Users agree to take all steps necessary to protect log in details and keep them secret, and not give login details to anyone else or allow anyone else to use their login details or account, including log in details and account for any social network or platform that Users may allow the Services to interact with. KANIKA PLAYHUB PRIVATE LIMITED shall not have any responsibility for the consequences of failure by Users to these provisions, and agree to fully compensate KANIKA PLAYHUB PRIVATE LIMITED for any losses or harm that may result. Furthermore, KANIKA PLAYHUB PRIVATE LIMITED shall not be responsible for any loss that Users may suffer as a result of an unauthorized access to their accounts and/or use of the Services, and KANIKA PLAYHUB PRIVATE LIMITED accepts no responsibility for any losses or harm resulting from this unauthorized use, whether fraudulently or otherwise.
<br />
5. Contests, Deals, Levels and In App purchases
<br />
KANIKA PLAYHUB PRIVATE LIMITED may conduct promotions, including, without limitation, contests, consolation prizes, Level redemptions. KANIKA PLAYHUB PRIVATE LIMITED is not involved in any way with the contest. Each promotion may have additional Terms and rules, which will be posted or otherwise made available to you, and for purposes of each Promotion, will be deemed incorporated into and form a part of this agreement.
<br />
5.1. Pricing of, Purchasing and Availability of Levels. KANIKA PLAYHUB PRIVATE LIMITED rewards its users certain Levels as per the company’s discretion and a proprietary algorithm that factors in multiple variables viz. number of quizzes played, number of quizzes correctly answered, etc.KANIKA PLAYHUB PRIVATE LIMITED Levels has no monetary value and does not constitute currency or property of any type. The number of Levels earned and shown in your Account does not constitute a real-world balance or reflect any stored value, but rather measures the extent of your limited license to use the Applications alongside exercising few options such as redemption of Levels for certain prizes, ability to participate in certain games upon reaching a minimum Level requirement. KANIKA PLAYHUB PRIVATE LIMITED ´s Levels cannot be sold or transferred; however, it can be redeemed for certain special deals by making a nominal payment, if applicable, against those deals. KANIKA PLAYHUB PRIVATE LIMITED reserves the right to withdraw the deal anytime during the tenure of the services without prior intimation. You acknowledge that you are not entitled to a refund for any unused Levels or unused Virtual Items when KANIKA PLAYHUB PRIVATE LIMITED stops making an Application available, whether such action is taken at KANIKA PLAYHUB PRIVATE LIMITED ´s discretion or due to unforeseen events.
<br />
5.2. The price payable by you is the price, if applicable, indicated in the Application itself. When you purchase a license to use our Services, or purchase a subscription to use an Application, you agree to pay taxes, levies and any other Statutory/Govt. dues by whatever name called, where applicable, that we or our agent assesses on your purchase. We reserve the right to change the price and specifications shown in relation to any Application, any subscription, Levels, deals and Items etc. We do not offer any returns or cancellations of purchases unless the user satisfies any minimum performance criteria that’s decided by KANIKA PLAYHUB PRIVATE LIMITED and mentioned on the App.
<br />
5.3. As for any competition or deal that’s placed in the Application, KANIKA PLAYHUB PRIVATE LIMITED reserves complete rights for the following –
<br />
-Decision pertaining to competition format and content
-Decision pertaining to the prizing structure viz. Main prize, Consolation prize
-Decision pertaining to criteria of selection of winners
-Decision pertaining to disbursal of prizes, gifts and deal redemptions
KANIKA PLAYHUB PRIVATE LIMITED holds no liabilities against any form of aberration w.r.t. quality of the product, logistics & handling procedures, any other unforeseen cost or unfavorable constraint that surfaces during the process of user claiming its prizes.
<br />
5.4. Usage of KANIKA PLAYHUB PRIVATE LIMITED
<br />
Any person ("User") accessing KANIKA PLAYHUB PRIVATE LIMITED or the KANIKA PLAYHUB PRIVATE LIMITED App ('KANIKA PLAYHUB PRIVATE LIMITED platform') for participating in the various contests and games, available on KANIKA PLAYHUB PRIVATE LIMITED platform ("Contest(s)", “Tournament") ('KANIKA PLAYHUB PRIVATE LIMITED Services') shall be bound by these Terms and Conditions, and all other rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED in relation to any KANIKA PLAYHUB PRIVATE LIMITED Services.
KANIKA PLAYHUB PRIVATE LIMITED shall be entitled to modify these Terms and Conditions, rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED in relation to any KANIKA PLAYHUB PRIVATE LIMITED Services, at any time, by posting the same on KANIKA PLAYHUB PRIVATE LIMITED . Use of KANIKA PLAYHUB PRIVATE LIMITED constitutes the User's acceptance of such Terms and Conditions, rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED in relation to any KANIKA PLAYHUB PRIVATE LIMITED Services, as may be amended from time to time. KANIKA PLAYHUB PRIVATE LIMITED may, at its sole discretion, also notify the User of any change or modification in these Terms and Conditions, rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED , by way of sending an email to the User's registered email address or posting notifications in the User accounts. The User may then exercise the options provided in such an email or notification to indicate non-acceptance of the modified Terms and Conditions, rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED . If such options are not exercised by the User within the time frame prescribed in the email or notification, the User will be deemed to have accepted the modified Terms and Conditions, rules, regulations and terms of use referred to herein or provided by KANIKA PLAYHUB PRIVATE LIMITED .
Certain KANIKA PLAYHUB PRIVATE LIMITED Services being provided onKANIKA PLAYHUB PRIVATE LIMITED may be subject to additional rules and regulations set down in that respect. To the extent that these Terms and Conditions are inconsistent with the additional conditions set down, the additional conditions shall prevail.
KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion:
Restrict, suspend, or terminate any User's access to all or any part ofKANIKA PLAYHUB PRIVATE LIMITED or KANIKA PLAYHUB PRIVATE LIMITED Platform Services;
Change, suspend, or discontinue all or any part of the KANIKA PLAYHUB PRIVATE LIMITED Platform Services;
Reject, move, or remove any material that may be submitted by a User;
Move or remove any content that is available on KANIKA PLAYHUB PRIVATE LIMITED Platform;
Deactivate or delete a User's account and all related information and files on the account;
Establish general practices and limits concerning use of KANIKA PLAYHUB PRIVATE LIMITED Platform;
Assign its rights and liabilities to all User accounts hereunder to any entity (post such assignment intimation of such assignment shall be sent to all Users to their registered email ids)
In the event any User breaches, or KANIKA PLAYHUB PRIVATE LIMITED reasonably believes that such User has breached these Terms and Conditions, or has illegally or improperly used KANIKA PLAYHUB PRIVATE LIMITED or the KANIKA PLAYHUB PRIVATE LIMITED Services, KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, and without any notice to the User, restrict, suspend or terminate such User's access to all or any part of KANIKA PLAYHUB PRIVATE LIMITED Contests or the KANIKA PLAYHUB PRIVATE LIMITED Platform, deactivate or delete the User's account and all related information on the account, delete any content posted by the User on KANIKA PLAYHUB PRIVATE LIMITED and further, take technical and legal steps as it deems necessary.
If KANIKA PLAYHUB PRIVATE LIMITED charges its Users a platform fee in respect of any KANIKA PLAYHUB PRIVATE LIMITED Services, KANIKA PLAYHUB PRIVATE LIMITED shall, without delay, repay such platform fee in the event of suspension or removal of the User's account or KANIKA PLAYHUB PRIVATE LIMITED Services on account of any negligence or deficiency on the part of KANIKA PLAYHUB PRIVATE LIMITED , but not if such suspension or removal is affected due to:
any breach or inadequate performance by the User of any of these Terms and Conditions; or
any circumstances beyond the reasonable control of KANIKA PLAYHUB PRIVATE LIMITED .
Users consent to receiving communications such as announcements, administrative messages and advertisements from KANIKA PLAYHUB PRIVATE LIMITED or any of its partners, licensors or associates
<br />
5.5. Third Party Sites, Services and Products
<br />
KANIKA PLAYHUB PRIVATE LIMITED may contain links to other Internet sites owned and operated by third parties. Users' use of each of those sites is subject to the conditions, if any, posted by the sites. KANIKA PLAYHUB PRIVATE LIMITED does not exercise control over any Internet sites apart from KANIKA PLAYHUB PRIVATE LIMITED and cannot be held responsible for any content residing in any third-party Internet site.KANIKA PLAYHUB PRIVATE LIMITED 's inclusion of third-party content or links to third-party Internet sites is not an endorsement by KANIKA PLAYHUB PRIVATE LIMITED of such third-party Internet site.
Users' correspondence, transactions/offers or related activities with third parties, including payment providers and verification service providers, are solely between the User and that third party. Users' correspondence, transactions and usage of the services/offers of such third party shall be subject to the terms and conditions, policies and other service terms adopted/implemented by such third party, and the User shall be solely responsible for reviewing the same prior to transacting or availing of the services/offers of such third party. User agrees that KANIKA PLAYHUB PRIVATE LIMITED will not be responsible or liable for any loss or damage of any sort incurred as a result of any such transactions/offers with third parties. Any questions, complaints, or claims related to any third-party product or service should be directed to the appropriate vendor.
KANIKA PLAYHUB PRIVATE LIMITED contains content that is created byKANIKA PLAYHUB PRIVATE LIMITED as well as content provided by third parties. KANIKA PLAYHUB PRIVATE LIMITED does not guarantee the accuracy, integrity, quality of the content provided by third parties and such content may not relied upon by the Users in utilizing the KANIKA PLAYHUB PRIVATE LIMITED Services provided on KANIKA PLAYHUB PRIVATE LIMITED including while participating in any of the contests hosted on KANIKA PLAYHUB PRIVATE LIMITED .
KANIKA PLAYHUB PRIVATE LIMITED has certain links embedded to third party services including but not limited to YouTube. Your interaction with such third party platform/s are governed by their policies, and we urge you to review their policies before you proceed with availing such services via the offerings of KANIKA PLAYHUB PRIVATE LIMITED . The YouTube terms are available at https://www.youtube.com/t/terms; and the Google Privacy Policy is available at https://policies.google.com/privacy?hl=en-US. Also, to control your interaction with Google account or their services allows you to control your rights and activities, and may be accessed at https://myaccount.google.com/permissions?pli=1.

<br />
6. Privacy Policy
<br />
6.1. Any information that Users provide to KANIKA PLAYHUB PRIVATE LIMITED is subject to the Privacy Policy, which governs the collection and use of the information. Users understand that through their use of the Services, they consent to the collection, use, and transfer of such information, as set forth in the Privacy Policy, which forms an integral part of these Terms.
<br />
6.2. KANIKA PLAYHUB PRIVATE LIMITED will only collect, process, use and share Users information in accordance with the Privacy Policy and as set out in these Terms. By using the Services, Users give their consent to collecting, processing, using and sharing with third parties their personal data in such way. Users who do not agree to Privacy Policy should not access and/or use the Services. Any personal information that may be collected may also be subject to the policy of any social network that Users may linked the Services to.
<br />
6.3. Users acknowledge and accept that they are subject to receive occasional communications, such as service announcements and administrative messages.
<br />
7. Intellectual Property
<br />
7.1. Users acknowledge that all copyright, trademarks, and other intellectual property rights in and relating to the Services, is owned by or licensed to KANIKA PLAYHUB PRIVATE LIMITED . By submitting Content on or through the Services, Users grant KANIKA PLAYHUB PRIVATE LIMITED a worldwide, non-exclusive, royalty-free license -with the right to sublicense- to use, copy, reproduce, process, adapt, modify, publish, transmit, display, distribute and make derivative works of such Content in any and all media or distribution methods now known or later developed.
<br />
7.2. Users must not copy, distribute, make available to the public or create any derivative work from any Content belonging to KANIKA PLAYHUB PRIVATE LIMITED and/or any other User. KANIKA PLAYHUB PRIVATE LIMITED respects the intellectual property rights of others and expects Users to do the same. If Users or any third party believe that their Content has been copied in a way that constitutes copyright infringement, they shall provideKANIKA PLAYHUB PRIVATE LIMITED with the following information: (i) a physical or electronic signature of the copyright owner or a person authorized to act on their behalf; (ii) identification of the copyrighted work claimed to have been infringed; (iii) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the location of the material; (iv) contact information, including address, telephone number, and an email address; (v) a statement that such User or third party have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (vi) a statement that the information in the notification is accurate, and, under penalty of perjury, that such User or third party is authorized to act on behalf of the copyright owner.
<br />
7.3. KANIKA PLAYHUB PRIVATE LIMITED reserves the right to remove Content alleged to be infringing without prior notice, at its sole discretion, and without any liability.
<br />
8. Breach
<br />
8.1. KANIKA PLAYHUB PRIVATE LIMITED reserves the right at all times to remove or refuse to include, distribute and/or display any Content on the Services, to suspend or terminate Users, and to reclaim usernames and/or any channel name without any liability. KANIKA PLAYHUB PRIVATE LIMITED also reserves the right to access, read, preserve, and disclose any information as it reasonably believed is necessary to satisfy any applicable law, regulation, legal process or governmental request, enforce the Terms, including investigation of potential violations hereof, detect, prevent, or otherwise address fraud, security or technical issues, or to protect its rights, property or safety, its Users and third parties.
<br />
8.2. Users shall not do any of the following while accessing or using the Services: access, tamper with, or use non-public areas of the Services, KANIKA PLAYHUB PRIVATE LIMITED ’s computer systems, or the technical delivery systems of KANIKA PLAYHUB PRIVATE LIMITED ’s providers; probe, scan, crack, track and/or test the vulnerability of any system or network, or breach or circumvent any security or authentication measures; access or search or attempt to access or search the Services by any means (automated or otherwise) other than through the currently available, published interfaces provided and only pursuant to these Terms, forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Services to send altered, deceptive or false source-identifying information; or interfere with, or disrupt, (or attempt to do so), the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of Content in such a manner as to interfere with or create an undue burden on the Services. Users shall provide accurate and up to date information when creating their accounts and/or using the Services. Accounts are limited at one per User. The sell or transfer of any account or part of it, Content, items and/or any part of the Services is strictly prohibited.
<br />

8.3. KANIKA PLAYHUB PRIVATE LIMITED reserves the right to suspend or terminate any access to the Services, including by terminating or deleting any accounts and any Content related without any notice or communication, if there is a reasonably belief that such User is in breach of these Terms. In the event of any breach, Users who caused shall compensate KANIKA PLAYHUB PRIVATE LIMITED for all losses, harm, claims and expenses that may arise.
<br />
9. Disclaimers
<br />
9.1. All right, title, and interest in and to the Services, according to the provisions set on these Terms, are and will remain the exclusive property ofKANIKA PLAYHUB PRIVATE LIMITED and its licensors. Services are protected by copyright, trademark, and other laws. Nothing in the Terms gives Users any right to use the KANIKA PLAYHUB PRIVATE LIMITED name or any of the KANIKA PLAYHUB PRIVATE LIMITED trademarks, logos, domain names, properties and other distinctive brand features.
<br />
9.2. These Terms will continue to apply until terminated by either Users orKANIKA PLAYHUB PRIVATE LIMITED as follows: (i) Users may end this legal agreement with KANIKA PLAYHUB PRIVATE LIMITED at any time for any reason, by discontinuing the use of the Services and contacting Support@ludokheloyaar.com  to delete their account, provided that they will still be responsible for all the conditions set in this Term for the time they used the Services. Accounts may be deactivated and/or deleted due to prolonged inactivity; (ii)KANIKA PLAYHUB PRIVATE LIMITED may suspend or terminate Users accounts or cease providing with all or part of the Services at any time for any reason, including, but not limited to, if there is a reasonably belief that such Users have violated these Terms or created a risk or possible legal exposure; or if at its own discretion the provision of the Services is no longer commercially and or technically viable.
<br />
9.3. Each of the subsections below only applies up to the maximum extent permitted under applicable law. Nothing in this section is intended to limit any rights you may have which may not be lawfully limited.
<br />
9.4. The access to and use of the Services or any Content are at Users’ own risk. Users understand and agree that the Services are provided on an "as is" and "as available" basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, KANIKA PLAYHUB PRIVATE LIMITED disclaims all warranties and conditions, whether express or implied, of merchantability, fitness for a particular purpose or non-infringement.
<br />
9.5. KANIKA PLAYHUB PRIVATE LIMITED makes no warranty and disclaim all responsibility and liability for: (i) the completeness, accuracy, availability, timeliness, security or reliability of the Services or any Content; (ii) any harm to Users’ computer system or mobile device operating system, loss of data, or other harm that results from access to or use of the Services or any Content; (iii) the deletion of, or the failure to store or to transmit, any Content and other communications maintained by the Services; and (iv) whether the Services will meet Users requirements or be available on an uninterrupted, secure, or error-free basis. No advice or information, whether oral or written, obtained from KANIKA PLAYHUB PRIVATE LIMITED or through the Services, will create any warranty not expressly made herein.
<br />
9.6. The Services may contain links to third-party websites or resources. Users acknowledge and agree that KANIKA PLAYHUB PRIVATE LIMITED is not responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the content, products, or services on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by KANIKA PLAYHUB PRIVATE LIMITED of such websites or resources or the content, products, or services available from such websites or resources. Users acknowledge sole responsibility for and assume all risk arising from its use of any such websites or resources.
<br />
9.7. To the maximum extent permitted by applicable law, KANIKA PLAYHUB PRIVATE LIMITED shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly or any loss of data, use, good-will, or other intangible losses, resulting from (i) the access to, use of, or inability to access to or use the services; (ii) any conduct or content of any third party on the Services, including without limitation, any defamatory, offensive or illegal conduct of other Users or third parties; (iii) any Content obtained from the Services; or (iv) unauthorized access, use or alteration of Content; or (v) any natural calamities.
<br />
9.8. In no event shall the aggregate liability of KANIKA PLAYHUB PRIVATE LIMITED exceed the total amount that such User has paid to KANIKA PLAYHUB PRIVATE LIMITED in the six-month period ending on the date of the claim, to a maximum of One Thousand Indian Rupees (INR 1000). The limitations shall apply to any theory of liability whether based on warranty, contract, statute, tort (including negligence) or otherwise, and whether or not KANIKA PLAYHUB PRIVATE LIMITED has been informed the possibility of any such damage, and even if a remedy set forth herein is found to have failed its essential purpose.
<br />
9.9. The failure of KANIKA PLAYHUB PRIVATE LIMITED to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. In the event that any provision of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.

9.10. These terms shall be governed by and construed in accordance with the laws of Nagaland Government as well as Republic of India. All claims, legal proceedings or litigation arising in connection with the Services will be brought solely in the relevant courts located in the city of Delhi/New Delhi – INDIA. Users consent to the jurisdiction of and venue in such courts and waive any objection as to inconvenient forum.

9.11. KANIKA PLAYHUB PRIVATE LIMITED is a skill-based Platform i.e... skill game which is clearly defined in the recently passed by an Act of Government of Nagaland under The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Act, 2015 (Act No.3 of 2016) and The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Rules, 2016 in which Skill Game and allow to run/operate of this type of skill games.

As per Section 2(3) of The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Act, the definition of “Games of Skill” is reproduced as under,

“Games of Skill” shall include all such games where there is preponderance of skill over chance, including where the skill relates to strategizing the manner of placing wagers or placing bets or where the skill lies in team selection or selection of virtual stocks based on analyses or where skill relates to the manner in which the moves are made, whether through deployment of physical or mental skill or acumen”.

Explanation: For the purpose of this Act-

-All Games provided in Schedule A of this Act shall fall under the category of “Games of Skill”,
-‘Games’ which have been declared or determined to be ‘games of skill’ by India or International courts or other statutes, or games where there are domestic and international competitions and tournaments, or games which can be determined to be ‘games of skill’ shall further be entitled to be included in Schedule A,
-Games of skill may be (a) Card based and (b) action/virtual sports /adventure/ mystery and (c) calculation/Strategy/quiz based.”
Supreme Court of India in the case of State of Andhra Pradesh v. K Satyanarayana (AIR 1968 SC 825) and KR Lakshmanan v. State of Tamil Nadu (AIR 1996 SC 1153) wherein the word Games of Skill has clearly been stated which is reproduced as under,

“A game of skill, on the other hand- although the element of chance necessarily cannot be eliminated is one in which success depends principally upon the superior knowledge, training attention, experience and adroitness of the player. Golf, chess and even Rummy are considered to be games of skill. The Courts have reasoned that there are few games, if any, which consists purely of chance or skill, and as such games of chance is one in which the element of chance predominates over the element of skill, and a game of skill is one in which the element of skill predominates over the element of chance. It is dominant element – “skill” or “chance” – which determines the character of the game”.

9.12. KANIKA PLAYHUB PRIVATE LIMITED Skill Games, for stakes may be run all over India except the States of Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, AND Telangana and/or any other State which has banned/prohibited or to be prohibited to run/operate of KANIKA PLAYHUB PRIVATE LIMITED Skill Games. KANIKA PLAYHUB PRIVATE LIMITED Skill Games, being played for free without the involvement of money/ or any equivalent stakes may be run all over India. In spite of this, if any User run and/or operate the KANIKA PLAYHUB PRIVATE LIMITED Skill Games, he will be solely responsible for the same.

9.13. KANIKA PLAYHUB PRIVATE LIMITED 's skill-based games are not Gambling, and Lotteries.

9.14. These Terms, which include the Privacy Policy, are the entire and exclusive agreement between KANIKA PLAYHUB PRIVATE LIMITED and Users regarding the Services, excluding any services for which Users may have a separate agreement explicitly in addition or in place of these Terms, and these Terms supersede and replace any prior agreements between KANIKA PLAYHUB PRIVATE LIMITED and Users regarding the Services.

9.15. KANIKA PLAYHUB PRIVATE LIMITED may revise these Terms from time to time, the most current version will always be on the mobile application.KANIKA PLAYHUB PRIVATE LIMITED reserves the right, but not the obligation, in its sole discretion, to notify any modification via e-mail to the email associated with Users account. However, by merely continuing to access or use the Services after those revisions become effective, Users agree to be bound by the revised Terms. These Terms were last updated on 6th April, 2021.

10. Tax & TDS Policy

10.1. Any tax/levies/duty etc., as applicable, shall be paid by the user of the game of KANIKA PLAYHUB PRIVATE LIMITED Games.

10.2. There is no TDS deducted as the winning amounts are up to or less than Rs.10,000/- on KANIKA PLAYHUB PRIVATE LIMITED Games/Quiz.

10.3. TDS is deducted on winning amounts above Rs.10,000/- on KANIKA PLAYHUB PRIVATE LIMITED Games/Quiz before releasing the winnings prize/product/amount and/or in whatever name called.

10.4. Based on TDS (tax deducted at source) Rules for any sort of game winning in India, 30% TDS should be deducted on any wining above Rs.10,000/- in a single game.

10.5 The real money added by you on the KANIKA PLAYHUB PRIVATE LIMITED O Platform will be applied towards the rights provided to you, by the Company, to play any game/s. Such amount will be completely non- refundable and non-transferrable and can only and only be utilized towards the playing of games on KANIKA PLAYHUB PRIVATE LIMITED Platform. The terms & conditions of each game would be displayed, along with the fixed/ variable winnings amount which you may win on participation and successful completion of the terms of the game. Such amounts will be decided by the Company for each game separately. You would be eligible to withdraw only to the extent of your winnings (before that expires) and after submission of relevant documentation to the Company.

10.6. The person responsible for paying shall, before releasing the winnings, collect the TDS amount from the winner.

10.7. Your prize can only be redeemable after TDS deduction , if winning product is above 10,000/- . TDS amount is to be paid to KANIKA PLAYHUB PRIVATE LIMITED Games as provided by Section 194B read with Section 115BB of the Income Tax Act, 1961.

10.8. The User will have to provide his valid PAN card copy so that KANIKA PLAYHUB PRIVATE LIMITED Games can file TDS deducted accordingly.

10.9. TDS has to be paid within 24 hours. Kindly give us time period of 15 working days to deliver your prize.

10.10. To claim your winning product, if TDS as applicable by govt. (as per Section 194B read with Section 115BB of the Income Tax Act, 1961) on your winning, winner gets 24 hrs time to pay TDS from the time of winning to claim their prize. If user fails to pay TDS within 24 hrs his/her winning will be considered as expired.

10.11. KANIKA PLAYHUB PRIVATE LIMITED in the interests of clarity, performs an independent closing balance confirmation at the end of every year from its external wallet service providers (RazorPay, PayTM, Cash Free, etc.). In the event that there exists discrepancy between the accounts of the external wallet service providers and KANIKA PLAYHUB PRIVATE LIMITED , KANIKA PLAYHUB PRIVATE LIMITED , in its sole discretion and authority, shall perform reasonable due diligence to ascertain the liability for the differences in the accounts.

11. Questions Integrity

11.1. KANIKA PLAYHUB PRIVATE LIMITED attempts to keep the database of questions up to date and check that answers registered in the system as the "right" answers are correct. However, if there are questions that have answers that are incorrect according to some sources, then KANIKA PLAYHUB PRIVATE LIMITED does not hold any responsibility for the outcome of the Challenge.

11.2. User Conduct

Users agree to abide by these Terms and Conditions and all other rules, regulations and terms of use of the Website. In the event User does not abide by these Terms and Conditions and all other rules, regulations and terms of use, KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, take necessary remedial action, including but not limited to:
restricting, suspending, or terminating any User's access to all or any part of KANIKA PLAYHUB PRIVATE LIMITED Services;
deactivating or deleting a User's account and all related information and files on the account. Any amount remaining unused in the User's Game account or Winnings Account on the date of deactivation or deletion shall be transferred to the User's bank account on record with KANIKA PLAYHUB PRIVATE LIMITED subject to a processing fee (if any) applicable on such transfers as set out herein; or
refraining from awarding any prize(s) to such User
Users agree to provide true, accurate, current and complete information at the time of registration and at all other times (as required by KANIKA PLAYHUB PRIVATE LIMITED ). Users further agree to update and keep updated their registration information.
A User shall not register or operate more than one User account with KANIKA PLAYHUB PRIVATE LIMITED .
Users agree to ensure that they can receive all communication from KANIKA PLAYHUB PRIVATE LIMITED by marking e-mails or sending SMSs fromKANIKA PLAYHUB PRIVATE LIMITED as part of their "safe senders" list.KANIKA PLAYHUB PRIVATE LIMITED shall not be held liable if any e-mail/SMS remains unread by a User as a result of such e-mail getting delivered to the User's junk or spam folder.
Any password issued by KANIKA PLAYHUB PRIVATE LIMITED to a User may not be revealed to anyone else. Users may not use anyone else's password. Users are responsible for maintaining the confidentiality of their accounts and passwords. Users agree to immediately notify KANIKA PLAYHUB PRIVATE LIMITED of any unauthorized use of their passwords or accounts or any other breach of security.
Users agree to exit/log-out of their accounts at the end of each session.KANIKA PLAYHUB PRIVATE LIMITED shall not be responsible for any loss or damage that may result if the User fails to comply with these requirements.
Users agree not to use cheats, exploits, automation, software, bots, hacks or any unauthorised third-party software designed to modify or interfere with KANIKA PLAYHUB PRIVATE LIMITED Services and/or KANIKA PLAYHUB PRIVATE LIMITED experience or assist in such activity.
Users agree not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse engineer, grant a security interest in, or otherwise transfer any right to the technology or software underlying KANIKA PLAYHUB PRIVATE LIMITED or KANIKA PLAYHUB PRIVATE LIMITED ’s Services.
Users agree that without KANIKA PLAYHUB PRIVATE LIMITED 's express written consent, they shall not modify or cause to be modified any files or software that are part of KANIKA PLAYHUB PRIVATE LIMITED 's Services.
Users agree not to disrupt, overburden, or aid or assist in the disruption or overburdening of (a) any computer or server used to offer or supportKANIKA PLAYHUB PRIVATE LIMITED or the KANIKA PLAYHUB PRIVATE LIMITED ’s Services (each a "Server"); or (2) the enjoyment of KANIKA PLAYHUB PRIVATE LIMITED Services by any other User or person.
Users agree not to institute, assist or become involved in any type of attack, including without limitation to distribution of a virus, denial of service, or other attempts to disrupt KANIKA PLAYHUB PRIVATE LIMITED Services or any other person's use or enjoyment of KANIKA PLAYHUB PRIVATE LIMITED Services.
Users shall not attempt to gain unauthorized access to the User accounts, Servers or networks connected to KANIKA PLAYHUB PRIVATE LIMITED Services by any means other than the User interface provided by KANIKA PLAYHUB PRIVATE LIMITED , including but not limited to, by circumventing or modifying, attempting to circumvent or modify, or encouraging or assisting any other person to circumvent or modify, any security, technology, device, or software that underlies or is part ofKANIKA PLAYHUB PRIVATE LIMITED Services.
Without limiting the foregoing, Users agree not to use KANIKA PLAYHUB PRIVATE LIMITED for any of the following.
To engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory or abusive action or communication;
To harass, stalk, threaten, or otherwise violate any legal rights of other individuals;
To publish, post, upload, e-mail, distribute, or disseminate (collectively, "Transmit") any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful content;
To Transmit files that contain viruses, corrupted files, or any other similar software or programs that may damage or adversely affect the operation of another person's computer, KANIKA PLAYHUB PRIVATE LIMITED , any software, hardware, or telecommunications equipment;
To advertise, offer or sell any goods or services for any commercial purpose on KANIKA PLAYHUB PRIVATE LIMITED without the express written consent of KANIKA PLAYHUB PRIVATE LIMITED ;
To download any file, recompile or disassemble or otherwise affect our products that you know or reasonably should know cannot be legally obtained in such manner;
To falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or the source of software or other material;
To restrict or inhibit any other user from using and enjoying any public area within our sites;
To collect or store personal information about other Users;
To interfere with or disrupt KANIKA PLAYHUB PRIVATE LIMITED , servers, or networks;
To impersonate any person or entity, including, but not limited to, a representative of KANIKA PLAYHUB PRIVATE LIMITED , or falsely state or otherwise misrepresent User's affiliation with a person or entity;
To forge headers or manipulate identifiers or other data in order to disguise the origin of any content transmitted through KANIKA PLAYHUB PRIVATE LIMITED or to manipulate User's presence on KANIKA PLAYHUB PRIVATE LIMITED (s);
To publish information that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting other nation;
To publish information that is an invasion of another’s privacy, their bodily privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force;
To take any action that imposes an unreasonably or disproportionately large load on our infrastructure;
To engage in any illegal activities. You agree to use our bulletin board services, chat areas, news groups, forums, communities and/or message or communication facilities (collectively, the "Forums") only to send and receive messages and material that are proper and related to that particular Forum.
If a User chooses a username that, in KANIKA PLAYHUB PRIVATE LIMITED 's considered opinion is obscene, indecent, abusive or that might subject KANIKA PLAYHUB PRIVATE LIMITED to public disparagement or scorn, KANIKA PLAYHUB PRIVATE LIMITED reserves the right, without prior notice to the User, to change such username and intimate the User or delete such username and posts from KANIKA PLAYHUB PRIVATE LIMITED , deny such User access to KANIKA PLAYHUB PRIVATE LIMITED , or any combination of these options.
Unauthorized access to KANIKA PLAYHUB PRIVATE LIMITED is a breach of these Terms and Conditions, and a violation of the law. Users agree not to access KANIKA PLAYHUB PRIVATE LIMITED by any means other than through the interface that is provided by KANIKA PLAYHUB PRIVATE LIMITED for use in accessing KANIKA PLAYHUB PRIVATE LIMITED . Users agree not to use any automated means, including, without limitation, agents, robots, scripts, or spiders, to access, monitor, or copy any part of our sites, except those automated means that we have approved in advance and in writing.
Users acknowledge and accept that they are subject to receive occasional communications, in relation to their obligation to comply with the Terms and Conditions, rules and regulations, Privacy Policy or any other user document to access the Services and Platform offered by KANIKA PLAYHUB PRIVATE LIMITED . In the event of non-compliance, KANIKA PLAYHUB PRIVATE LIMITED reserves the right to terminate the User’s access or usage rights to the Services and Platform offered by KANIKA PLAYHUB PRIVATE LIMITED .
Use of KANIKA PLAYHUB PRIVATE LIMITED is subject to existing laws and legal processes. Nothing contained in these Terms and Conditions shall limit KANIKA PLAYHUB PRIVATE LIMITED 's right to comply with governmental, court, and law-enforcement requests or requirements relating to Users' use of KANIKA PLAYHUB PRIVATE LIMITED .
Users may reach out to KANIKA PLAYHUB PRIVATE LIMITED through -
Helpdesk if the user has any concerns with regard to a match and/or contest within Forty-Eight (48) hours of winner declaration for the concerned contest.
Persons below the age of eighteen (18) years are not allowed to participate on any of the contests, games (by whatever name called) on theKANIKA PLAYHUB PRIVATE LIMITED Platform. The Users will have to disclose their real age at the time of getting access into the KANIKA PLAYHUB PRIVATE LIMITED Platform.
KANIKA PLAYHUB PRIVATE LIMITED may not be held responsible for any content contributed by Users on the KANIKA PLAYHUB PRIVATE LIMITED .
11.3. Conditions of Participation

By entering a Contest, user agrees to be bound by these Terms and the decisions of KANIKA PLAYHUB PRIVATE LIMITED . Subject to the terms and conditions stipulated herein below, the Company, at its sole discretion, may disqualify any user from a Contest, refuse to award benefits or prizes and require the return of any prizes, if the user engages in unfair conduct, which the Company deems to be improper, unfair or otherwise adverse to the operation of the Contest or is in any way detrimental to other Users which includes, but is not limited to:

Falsifying ones’ own personal information (including, but not limited to, name, email address, bank account details and/or any other information or documentation as may be requested by KANIKA PLAYHUB PRIVATE LIMITED to enter a contest and/or claim a prize/winning.
Engaging in any type of financial fraud or misrepresentation including unauthorized use of credit/debit instruments, payment wallet accounts etc. to enter a Contest or claim a prize. It is expressly clarified that the onus to prove otherwise shall solely lie on the user.
Colluding with any other user(s) or engaging in any type of syndicate play;
Any violation of Contest rules or the Terms of Use;
Accumulating points or prizes through unauthorized methods such as automated bots, or other automated means;
Using automated means (including but not limited to harvesting bots, robots, parser, spiders or screen scrapers) to obtain, collect or access any information on the Website or of any User for any purpose
Any type of Cash Bonus misuse, misuse of the Invite Friends program, or misuse of any other offers or promotions;
Tampering with the administration of a Contest or trying to in any way tamper with the computer programs or any security measure associated with a Contest;
Obtaining other users’ information without their express consent and/or knowledge and/or spamming other users (Spamming may include but shall not be limited to send unsolicited emails to users, sending bulk emails toKANIKA PLAYHUB PRIVATE LIMITED Users, sending unwarranted email content either to selected Users or in bulk); or
Abusing the Website in any way (‘unparliamentary language, slangs or disrespectful words’ are some of the examples of Abuse)
It is clarified that in case a User is found to be in violation of this policy, KANIKA PLAYHUB PRIVATE LIMITED reserves its right to initiate appropriate Civil/Criminal remedies as it may be advised other than forfeiture and/or recovery of prize money if any.

12. Payment Terms

In respect of any transactions entered into on the KANIKA PLAYHUB PRIVATE LIMITED platform, including making a payment to participate in the paid versions of Contest(s), Users agree to be bound by the following payment terms:
User's winnings can be credited in any wallet sub-section (Deposits, Bonus, Winnings) in any proportion at KANIKA PLAYHUB PRIVATE LIMITED 's sole discretion.
User’s remitting the amount the designated payment gateway shall be credited to User’s ‘Unplayed’ Account’.
The payment of pre-designated amount Users make to participate in the Contest(s) is inclusive of the pre-designated platform fee (when applicable) for access to the KANIKA PLAYHUB PRIVATE LIMITED Services charged by KANIKA PLAYHUB PRIVATE LIMITED and pre-determined participant’s contribution towards prize money pool.
Subject to these Terms and Conditions, all amounts collected from the User are held, until determination of the Winners and distribution of prizes. KANIKA PLAYHUB PRIVATE LIMITED receives only its share of the platform Fees, subject to applicability.
The User may participate in a Contest wherein the User has to contribute a pre-specified contribution towards the Prize Money Pool of such Contest, which will be passed on to the Winner(s) of the Contest after the completion of the Contest as per the terms and conditions of such Contest. It is clarified that KANIKA PLAYHUB PRIVATE LIMITED has no right or interest in this Prize Money Pool, and only acts as an intermediary engaged in collecting and distributing the Prize Money Pool in accordance with the Contest terms and conditions. The amount to be paid-in by the User towards the Prize Money Pool would also be debited from the User’s account balance.
Any user availing KANIKA PLAYHUB PRIVATE LIMITED services are provided with two categories of accounts for the processing and reconciliation of payments: (i) ‘Unplayed’ Account, (ii) Winnings Account. It is clarified that in no instance the transfer of any amounts in the User's accounts to any other category of account held by the user or any third party account, including a bank account held by a third party:
Each time a User participates in any contest on KANIKA PLAYHUB PRIVATE LIMITED platform, the pre-designated amount shall be debited in the User’s account. In debiting amounts from the User’s accounts towards the pre-designated amount of such user shall be debited from the User’s Unplayed Account and thereafter, any remaining amount of participation fee shall be debited from the User’s Winning Account.
In case there is any amount remaining to be paid by the User in relation to such User’s participation in any match(s) or Contest(s), the User will be taken to the designated payment gateway to give effect to such payment. In case any amount added by the User through such payment gateway exceeds the remaining amount of the pre-designated amount, the amount in excess shall be transferred to the User’s ‘Unplayed’ Account and will be available for use in participation in any match(s) or Contest(s) or for withdrawal in accordance with these Terms and Conditions.
Debits from the ‘Unplayed’ Account for the purpose of enabling a user’s participation in a Contest shall be made in order of the date of credit of amounts in the ‘Unplayed’ Account, and accordingly amounts credited into ‘Unplayed’ Account earlier in time shall be debited first.
A User shall be permitted to withdraw any amounts credited into such User's ‘Unplayed’ Account for any reason whatsoever by contacting KANIKA PLAYHUB PRIVATE LIMITED Customer Support. All amounts credited into a User's ‘Unplayed’ Account must be utilised within 60 days of credit. In case any unutilised amount lies in the ‘Unplayed’ Account after the completion of 60 days from the date of credit of such amount,KANIKA PLAYHUB PRIVATE LIMITED reserves the right to forfeit such unutilized amount, without liability or obligation to pay any compensation to the User. Users are requested to note that they will be required to provide valid photo identification and address proof documents for proof of identity and address in order for KANIKA PLAYHUB PRIVATE LIMITED to process the withdrawal request. The name mentioned on the User's photo identification document should correspond with the name provided by the User at the time of registration on KANIKA PLAYHUB PRIVATE LIMITED , as well as the name and address existing in the records of the User's bank account as provided to KANIKA PLAYHUB PRIVATE LIMITED . In the event that no bank account has been registered by the User against such User's account with KANIKA PLAYHUB PRIVATE LIMITED , or the User has not verified his/her User account with KANIKA PLAYHUB PRIVATE LIMITED , to KANIKA PLAYHUB PRIVATE LIMITED 's satisfaction and in accordance with these Terms and Conditions, KANIKA PLAYHUB PRIVATE LIMITED shall provide such User with a notification to the User's email address as on record with KANIKA PLAYHUB PRIVATE LIMITED at least 30 days prior to the Request Date, and in case the User fails to register a bank account with his/her User Account and/or to verify his/her User Account by the Request date,KANIKA PLAYHUB PRIVATE LIMITED shall be entitled to forfeit any amounts subject to transfer. Failure to provide KANIKA PLAYHUB PRIVATE LIMITED with a valid bank account or valid identification documents (to KANIKA PLAYHUB PRIVATE LIMITED 's satisfaction) may result in the forfeiture of any amounts subject to transfer in accordance with this clause.
Withdrawal of any amount standing to the User's credit in the Winnings Account may be made by way of a request to KANIKA PLAYHUB PRIVATE LIMITED but the amount will be forfeit upon completion of 60 days from the date of credit of such amount in the User's Winnings Account or upon completion of 60 days of in-activity.
Further, in order to conduct promotional activities, KANIKA PLAYHUB PRIVATE LIMITED may gratuitously issue Bonus points (Called as Cash Bonus) to the User for the purpose of participation in any Contest(s) and no User shall be permitted to transfer or request the transfer of any amount in to the Cash Bonus . The usage of any points issued shall be subject to the limitations and restrictions, including without limitation, restrictions as to time within which such points must be used, as applied by KANIKA PLAYHUB PRIVATE LIMITED and notified to the User at the time of issue of such amount. The issue of any points to the user is subject to the sole discretion of KANIKA PLAYHUB PRIVATE LIMITED and cannot be demanded by any User as a matter of right. The issue of any such amount by KANIKA PLAYHUB PRIVATE LIMITED on any day shall not entitle the user to demand the issuance of such amount at any subsequent period in time nor create an expectation of recurring issue of such amount by KANIKA PLAYHUB PRIVATE LIMITED to such User. The bonus points/Cash Bonus granted to the user may be used by such User for the purpose of setting off against the contribution to prize pool in any Contest, in accordance with these Terms and Conditions. The bonus points shall not be withdraw-able or transferrable to any other account of the User, including the bank account of such User, or of any other User or person, other that as part of the winnings of a User in any Contest(s). In case the User terminates his/her account with KANIKA PLAYHUB PRIVATE LIMITED or such account if terminated by KANIKA PLAYHUB PRIVATE LIMITED , all bonus points granted to the user shall return to KANIKA PLAYHUB PRIVATE LIMITED and the User shall not have any right or interest on such points.
All cash bonus credited in the User account shall be valid for a period of 14 days from the date of credit. The cash bonus shall lapse at the end of 14 days and the cash bonus amount shall not reflect in the User account.
Users agree that once they confirm a transaction on KANIKA PLAYHUB PRIVATE LIMITED , they shall be bound by and make payment for that transaction.
The User acknowledges that subject to time taken for bank reconciliations and such other external dependencies that KANIKA PLAYHUB PRIVATE LIMITED has on third parties, any transactions on KANIKA PLAYHUB PRIVATE LIMITED Platform may take up to 24 hours to be processed. Any amount paid or transferred into the User's ‘Unplayed’ Account or Winnings Account may take up to 24 hours to reflect in the User's ‘Unplayed’ Account or Winnings Account balance. Similarly, the utilization of the bonus points or money debited from ‘Unplayed’ Account or Winnings Account may take up to 24 hours to reflect in the User's ‘Unplayed’ Account or Winnings Account balance. Users agree not to raise any complaint or claim against KANIKA PLAYHUB PRIVATE LIMITED in respect of any delay, including any lost opportunity to join any Contest or match due to delay in crediting of transaction amount into any of the User's accounts.
A transaction, once confirmed, is final and no cancellation is permissible. KANIKA PLAYHUB PRIVATE LIMITED may, in certain exceptional circumstances and at its sole and absolute discretion, refund the amount to the User after deducting applicable cancellation charges and taxes. At the time of the transaction, Users may also be required to take note of certain additional terms and conditions and such additional terms and conditions shall also govern the transaction. To the extent that the additional terms and conditions contain any clause that is conflicting with the present terms and conditions, the additional terms and conditions shall prevail.
The real money added by the User on KANIKA PLAYHUB PRIVATE LIMITED will solely be applied towards the rights provided to you, by the Company, to play any game/s. Such amount will be completely non-refundable and non-transferrable and can only and only be utilised towards the playing of games on KANIKA PLAYHUB PRIVATE LIMITED . The T&C of each game would be displayed, along with the fixed/ variable winnings amount which the User may win on participation and successful completion of the terms of the game. Such amounts will be decided by the Company for each game separately. The User would be eligible to withdraw only to the extent of their winnings (before that expires) and after submission of relevant documentation to the Company.
Miscellaneous
The decision of KANIKA PLAYHUB PRIVATE LIMITED with respect to the awarding of prizes shall be final, binding and non-contestable.
The final assessment of wins by a User shall be determined at the time of withdrawal of Wins, which will be subject to applicable direct and indirect taxes. The withdrawal of Wins shall be subject to applicable TDS as per the provisions of the Income Tax Act (as described under Tax and TDS Policy)
Participants playing the paid formats of the Contest(s) confirm that they are not residents of any of the following Indian states - Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana. If it is found that a Participant playing the paid formats of the Contest(s) is a resident of any of the abovementioned states, KANIKA PLAYHUB PRIVATE LIMITED shall disqualify such Participant and forfeit any prize won by such Participant. Further KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, suspend or terminate such Participant's account with KANIKA PLAYHUB PRIVATE LIMITED . Any amount remaining unused in the User's Game Account or Winnings Account on the date of deactivation or deletion shall be reimbursed to the User by an online transfer to the User's bank account on record with KANIKA PLAYHUB PRIVATE LIMITED , subject to the processing fee (if any) applicable on such transfers as set out herein.
If it is found that a Participant playing the paid formats of the Contest(s) is under the age of eighteen (18), KANIKA PLAYHUB PRIVATE LIMITED shall be entitled, at its sole and absolute discretion, to disqualify such Participant and forfeit his/her prize. Further, KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, suspend or terminate such Participant's account.
To the extent permitted by law, KANIKA PLAYHUB PRIVATE LIMITED makes no representations or warranties as to the quality, suitability or merchantability of any prizes and shall not be liable in respect of the same.
KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, vary or modify the prizes being offered to winners. Participants shall not raise any claim against KANIKA PLAYHUB PRIVATE LIMITED or question its right to modify such prizes being offered, prior to closure of the Contest.
KANIKA PLAYHUB PRIVATE LIMITED will not bear any responsibility for the transportation or packaging of prizes to the respective winners.KANIKA PLAYHUB PRIVATE LIMITED shall not be held liable for any loss or damage caused to any prizes at the time of such transportation.
The Winners shall bear the shipping, courier or any other delivery cost in respect of the prizes.
The Winners shall bear all transaction charges levied for delivery of cash prizes.
All prizes are non-transferable and non-refundable. Prizes cannot be exchanged / redeemed for cash or kind. No cash claims can be made in lieu of prizes in kind.
12.1. Release and Limitations of Liability

Users shall access the KANIKA PLAYHUB PRIVATE LIMITED Services provided on KANIKA PLAYHUB PRIVATE LIMITED voluntarily and at their own risk. KANIKA PLAYHUB PRIVATE LIMITED shall, under no circumstances be held responsible or liable on account of any loss or damage sustained (including but not limited to any accident, injury, death, loss of property) by Users or any other person or entity during the course of access to the KANIKA PLAYHUB PRIVATE LIMITED Services (including participation in the Contest(s)) or as a result of acceptance of any prize.
By entering the contests and accessing the KANIKA PLAYHUB PRIVATE LIMITED Services provided therein, Users hereby release from and agree to indemnify KANIKA PLAYHUB PRIVATE LIMITED , and/ or any of its directors, employees, partners, associates and licensors, from and against all liability, cost, loss or expense arising out their access to the KANIKA PLAYHUB PRIVATE LIMITED Services including (but not limited to) personal injury and damage to property and whether direct, indirect, consequential, foreseeable, due to some negligent act or omission on their part, or otherwise.
KANIKA PLAYHUB PRIVATE LIMITED accepts no liability, whether jointly or severally, for any errors or omissions, whether on behalf of itself or third parties in relation to the prizes.
Users shall be solely responsible for any consequences which may arise due to their access of KANIKA PLAYHUB PRIVATE LIMITED Services by conducting an illegal act or due to non-conformity with these Terms and Conditions and other rules and regulations in relation to KANIKA PLAYHUB PRIVATE LIMITED Services, including provision of incorrect address or other personal details. Users also undertake to indemnify KANIKA PLAYHUB PRIVATE LIMITED and their respective officers, directors, employees and agents on the happening of such an event (including without limitation cost of attorney, legal charges etc.) on full indemnity basis for any loss/damage suffered by KANIKA PLAYHUB PRIVATE LIMITED on account of such act on the part of the Users.
Users shall indemnify, defend, and hold KANIKA PLAYHUB PRIVATE LIMITED harmless from any third party/entity/organization claims arising from or related to such User's engagement with the KANIKA PLAYHUB PRIVATE LIMITED or participation in any Contest. In no event shall KANIKA PLAYHUB PRIVATE LIMITED be liable to any User for acts or omissions arising out of or related to User's engagement with the KANIKA PLAYHUB PRIVATE LIMITED or his/her participation in any Contest(s).
In consideration of KANIKA PLAYHUB PRIVATE LIMITED allowing Users to access the KANIKA PLAYHUB PRIVATE LIMITED Services, to the maximum extent permitted by law, the Users waive and release each and every right or claim, all actions, causes of actions (present or future) each of them has or may have against KANIKA PLAYHUB PRIVATE LIMITED , its respective agents, directors, officers, business associates, group companies, sponsors, employees, or representatives for all and any injuries, accidents, or mishaps (whether known or unknown) or (whether anticipated or unanticipated) arising out of the provision of KANIKA PLAYHUB PRIVATE LIMITED Services or related to the Contests or the prizes of the Contests.
12.2. Standard Terms and Conditions of Promotions

These standard terms and conditions of promotions (“Standard Terms”) supplement the terms of promotions undertaken on the KANIKA PLAYHUB PRIVATE LIMITED website and which reference these Standard Terms (each a “Promotion”):

Participation in any Promotion will be subject to a user complying with the Promotion Terms implemented by KANIKA PLAYHUB PRIVATE LIMITED in respect of such Promotion (“Promotion Terms”) and these Standard Terms. By participating in any Promotion, the participant further consents to and agrees to adhere with the terms and conditions of the KANIKA PLAYHUB PRIVATE LIMITED game and KANIKA PLAYHUB PRIVATE LIMITED ’s privacy policy.
The Promotions are only open to users in India. Participation in the Promotions by proxy is not permitted.
Participation in the Promotions is voluntary.
Participation in one Promotion does not guarantee that such user will be eligible to participate in another Promotion.
A user may participate in a Promotion and avail of each Promotion only through one account. An existing user of KANIKA PLAYHUB PRIVATE LIMITED shall not register a new account or operate more than one user account with KANIKA PLAYHUB PRIVATE LIMITED or participate in a Promotion by registering a new account.
Users intending to participate in a Promotion may be required to verify their mobile number and other account details in accordance with the Promotion Terms for such Promotion.
Persons intending to participate in a Promotion, who have listed their phone numbers on the National Do Not Call Registry (“NDNC Registry”), shall de-register themselves from the NDNC Registry till the completion of such Promotion (including the delivery of Bonus Amount (if any) or the free-entry (if any) under such Promotion). Such persons agree not to make any claim or raise any complaint whatsoever against KANIKA PLAYHUB PRIVATE LIMITED in this respect. Please note that persons intending to participate in a Promotion who have not de-registered themselves from the NDNC Registry shall also have no right to make any claim or raise any complaints against KANIKA PLAYHUB PRIVATE LIMITED if they do or do not receive any call or SMS with respect to their participation and all other matters pertaining to a Promotion.
The verification process may require you to submit personal information about yourself. You agree to receive communication from KANIKA PLAYHUB PRIVATE LIMITED . Any information collected in respect of your identity and contact details as part of a Promotion or otherwise in the course of your use of the KANIKA PLAYHUB PRIVATE LIMITED Website shall be subject to KANIKA PLAYHUB PRIVATE LIMITED ’s Privacy Policy.
KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, disqualify any user from a Promotion if such user engages in or it is found that such user has engaged in any illegal, unlawful or improper conduct (with regard to any of the Promotions or otherwise).
The Bonus Amount (if any) deposited into the user’s account can be used to join cash contests and contests on KANIKA PLAYHUB PRIVATE LIMITED . However, the Bonus Amount (if any) cannot be: (i) used to join 2-member contests; or (ii) withdrawn or transferred to any other cash balance account held by you with KANIKA PLAYHUB PRIVATE LIMITED or to any third party account or to any bank/payment instrument account. THE BONUS AMOUNT (IF ANY) SHALL EXPIRE AND BE WITHOUT EFFECT AT THE END OF FOURTEEN DAYS FROM THE DATE OF CREDIT OF THE BONUS AMOUNT (IF ANY).
The deposit of the Bonus Amount (if applicable) or the grant of the free-entry (if any) shall be at the sole discretion of KANIKA PLAYHUB PRIVATE LIMITED and shall be subject to the user’s compliance with these Standard Terms and the applicable Promotion Terms. KANIKA PLAYHUB PRIVATE LIMITED may substitute or change the Bonus Amount(if any) or free-entry (if any) offered under a Promotion at any time without notice. Users may not substitute Bonus Amount (if any) or free-entry (if any) for other items or exchange for cash.
KANIKA PLAYHUB PRIVATE LIMITED reserves the right to withhold or forfeit the benefits of a Promotion (including a free-entry or Bonus Amount due to a participant or any prizes/winnings earned by the participant by using such benefits) in the event that it determines or reasonably believes that the participating user has violated these Standard Terms, the applicable Promotion Terms or the terms and conditions of the KANIKA PLAYHUB PRIVATE LIMITED fantasy game(s).
Mere participation in a Promotion does not entitle the participant to receive any free-entry or Bonus Amount(s) indicated as a prize under such Promotion.
The decision of KANIKA PLAYHUB PRIVATE LIMITED will be final and binding with respect to the Promotions, and the prizes therein and no correspondence, objection, complaints, etc. will be entertained in this regard.
Each Promotion cannot be clubbed with any of other contest/offer/promotion that are running simultaneously and organised or conducted by KANIKA PLAYHUB PRIVATE LIMITED .
KANIKA PLAYHUB PRIVATE LIMITED reserves the right to change/modify/or withdraw any of the Promotions and/or change these Standard Terms and/or the Promotion Terms without any prior notice of the same at its sole discretion.
KANIKA PLAYHUB PRIVATE LIMITED does not make any commitment, express or implied, to respond to any feedback, suggestion and, or, queries of the participants of the Promotions.
Notwithstanding anything contained herein, the aggregate liability of KANIKA PLAYHUB PRIVATE LIMITED to a participating user in relation to any Promotion for any reason whatsoever shall not exceed Rs. 50.
The Promotions shall be governed by the laws of the Republic of India, and any disputes or disagreements in respect of this Promotion shall be subject to the exclusive jurisdiction of the courts of Delhi.
12.3. Standard Terms and Conditions of "Cashback Promotion"

This “Cashback Promotion” (“Promotion”), is open for participation to existing users of KANIKA PLAYHUB PRIVATE LIMITED

No person shall seek participation in the Promotion as a matter of right.
THE BONUS AMOUNT SHALL EXPIRE AND BE WITHOUT EFFECT AT THE END OF FOURTEEN DAYS FROM THE DATE OF CREDIT OF THE BONUS AMOUNT.
12.4. Standard Terms and Conditions of "Invite Friends" program

The KANIKA PLAYHUB PRIVATE LIMITED Invite Friends Program lets you invite friends to join KANIKA PLAYHUB PRIVATE LIMITED ("Program"). In the event that you and your referred friend meet the criteria and complete all the steps specified in these terms, you and your friend can earn a Cash Bonus from KANIKA PLAYHUB PRIVATE LIMITED of upto Rs. 100 ("Bonus Amount"), which Bonus Amount will be redeemable to join cash contests and contests through the KANIKA PLAYHUB PRIVATE LIMITED ’s mobile application for the iOS and/or Android mobile devices ("KANIKA PLAYHUB PRIVATE LIMITED Application"). To participate in the Program, please note our terms and conditions ("Terms") in this respect, as they govern your participation in the Program:

Participation in the Program is voluntary. A user shall not register or operate more than one user account with KANIKA PLAYHUB PRIVATE LIMITED and shall not participate in the Program with more than one user account with KANIKA PLAYHUB PRIVATE LIMITED .
By participating in the Program, you agree to and accept these Terms.
For the purpose of participation in the Program, you are required to have the KANIKA PLAYHUB PRIVATE LIMITED Application downloaded and installed on your mobile device. Through the KANIKA PLAYHUB PRIVATE LIMITED Application, you will be provided with a unique link or code, which can be shared by you ("Inviter") with friends (each an "Invitee") for the purpose of inviting such friends to create and register an account with KANIKA PLAYHUB PRIVATE LIMITED and download the KANIKA PLAYHUB PRIVATE LIMITED Application. On receiving the link or code from the Inviter, the Invitee may either: (i) Click on the link, consequent to which such Invitee will be directed to a registration page and will be provided the option to register an account with KANIKA PLAYHUB PRIVATE LIMITED and download and install the KANIKA PLAYHUB PRIVATE LIMITED Application on his/her device; or (ii) download and install theKANIKA PLAYHUB PRIVATE LIMITED Application on his/her device independently, register for a KANIKA PLAYHUB PRIVATE LIMITED account through the KANIKA PLAYHUB PRIVATE LIMITED Application and enter the unique code shared by the Inviter.
The Inviter and the Invitee will be eligible to earn the Bonus Amount subject to (amongst other terms specified in these Terms): (i) the Invitee not being an existing user of KANIKA PLAYHUB PRIVATE LIMITED ; and (ii) the Invitee successfully registering for an account with KANIKA PLAYHUB PRIVATE LIMITED through the unique link or by using the unique code shared by the Inviter; and (iii) the Inviter and Invitee verifying the Inviter’s and the Invitee’s respective mobile number as provided at the time of registration within thirty (30) days from the date on which Invitee registers for an account with KANIKA PLAYHUB PRIVATE LIMITED ("Verification Period"). For the purposes of these Terms, an 'existing user of KANIKA PLAYHUB PRIVATE LIMITED ' shall mean a user who presently operates an account with the Platform or operated an account with the Platform at any point of time.
An Invitee who is an existing user of KANIKA PLAYHUB PRIVATE LIMITED is not permitted to register a new account with the Platform for the purpose of availing of the Bonus Amount. KANIKA PLAYHUB PRIVATE LIMITED will determine in its sole discretion whether an Invitee is an existing user of KANIKA PLAYHUB PRIVATE LIMITED or not and take appropriate action.
The verification process may require an Inviter/Invitee to submit personal information about the user (Inviter/Invitee) and documents identifying the Inviter/Invitee. The Inviter agrees to receive communication from KANIKA PLAYHUB PRIVATE LIMITED and to allow KANIKA PLAYHUB PRIVATE LIMITED to communicate with Invitees referred by you about the Inviter's participation in the Program. Any information collected in respect of the Inviter/Invitee as part of the Program or otherwise in the course of such person's use of the Website shall be subject to KANIKA PLAYHUB PRIVATE LIMITED 's Privacy Policy (available here: https://ludokheloyaar.com/privacy-policy for Indian users).
The verification of an Inviter/Invitee shall be completed at the time of first withdrawal by the Inviter/Invitee from the Inviter’s/Invitee's 'Your Winnings' account or 'Your Deposits' account with the Platform. An Inviter/Invitee may voluntarily seek verification of the Inviter/Invitee by clicking on the 'Verify Now' tab of the Account Balance page of the Inviter/Invitee's account with the Platform. In the event that the Invitee opts to register for a KANIKA PLAYHUB PRIVATE LIMITED account through the KANIKA PLAYHUB PRIVATE LIMITED Application, the Invitee can verify his/her contact information at the time of registration.
THE BONUS AMOUNT SHALL EXPIRE AND BE WITHOUT EFFECT AT THE END OF FOURTEEN DAYS FROM THE DATE OF CREDIT OF THE BONUS AMOUNT.
The deposit of the Bonus Amount shall be at the sole discretion of KANIKA PLAYHUB PRIVATE LIMITED and shall be subject to the Inviter’s/Invitee’s compliance with these Terms. KANIKA PLAYHUB PRIVATE LIMITED may substitute or change the Bonus Amount offered under the Program at any time without notice. An Inviter/Invitee may not substitute the amount of Bonus Amount or substitute offering for other items or exchange for cash.
KANIKA PLAYHUB PRIVATE LIMITED reserves the right to:
withhold the deposit of the Bonus Amount; and/or
forfeit any deposited Bonus Amount to an Inviter/Invitee or any prizes/winnings earned by the participant by using such Bonus Amount; and/or
credit the user's winnings amount in any contest in any wallet sub-section (Deposits, Bonus, Winnings) in any proportion at KANIKA PLAYHUB PRIVATE LIMITED 's sole discretion
Mere participation in the Program does not entitle the Inviter/Invitee to receive any Bonus Amount.
KANIKA PLAYHUB PRIVATE LIMITED may, at its sole and absolute discretion, disqualify any Inviter/Invitee if such Inviter/Invitee engages in or it is found that such Inviter/Invitee has engaged in any illegal, unlawful or improper conduct (with regard to the Program or otherwise).
The decision of KANIKA PLAYHUB PRIVATE LIMITED will be final and binding with regard to the Program, and the deposit of the Bonus Amount and no correspondence, objection, complaints, etc. will be entertained in this regard.
This Program cannot be clubbed with any other contests/promotions/programs that are running simultaneously and organised or conducted by KANIKA PLAYHUB PRIVATE LIMITED .
KANIKA PLAYHUB PRIVATE LIMITED reserves the right to change/modify/or withdraw the Program and/or change these terms and conditions without any prior notice of the same at its sole discretion.
The Terms and Conditions, as applicable to the KANIKA PLAYHUB PRIVATE LIMITED 's fantasy games and services, will apply to and govern the Program.
KANIKA PLAYHUB PRIVATE LIMITED does not make any commitment, express or implied, to respond to any feedback, suggestion and, or, queries of the participants (Inviter/Invitee) of the Program.

     </b>
 </p>
    </div>
    </Layout>
  );
};

export default Policies;

