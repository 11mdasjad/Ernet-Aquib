// Official policy snapshot checked 24 October 2026. See research/DOMAIN-SOURCES.md.
export const domainLinks = {
  portal:'https://registry.ernet.in/', guidelines:'https://registry.ernet.in/guidelines',
  login:'https://registry.ernet.in/user-login', tariff:'https://registry.ernet.in/tariff_register',
  support:'https://registry.ernet.in/contact-us', help:'https://registry.ernet.in/ERNET_HelpFile.pdf',
  application:'https://registry.ernet.in/assets/Annexure-A.pdf', undertaking:'https://registry.ernet.in/assets/Annexure-B.pdf',
  documents:'https://registry.ernet.in/download-documents'
};
export const domainCategories = [
  {id:'ac.in', title:'Academic institutions', description:'For recognized, affiliated or registered academic institutions in India.'},
  {id:'edu.in', title:'Educational institutions', description:'For educational institutions meeting the registrar’s recognition, affiliation or registration requirements.'},
  {id:'res.in', title:'Research institutions', description:'For institutions with documentary evidence of their research mandate.', research:true},
  {id:'school.in', title:'Schools', description:'For schools with applicable recognition or affiliation evidence.'},
  {id:'alumni.in', title:'Institutional alumni domains', description:'Institutional eligibility and supporting documents still apply. An individual alumni affiliation does not establish eligibility.'},
  {id:'विद्या.भारत', title:'Education · Devanagari', description:'An internationalized education domain; institutional eligibility and official IDN rules apply.', idn:true},
  {id:'शिक्षा.भारत', title:'Education · Devanagari', description:'An internationalized education domain; institutional eligibility and official IDN rules apply.', idn:true},
  {id:'शोध.भारत', title:'Research · Devanagari', description:'An internationalized research domain requiring research evidence and official IDN checks.', idn:true, research:true}
];
export const states = ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
export const institutionTypes = ['University','College / academic institution','Government school','Private school','Research institution','Vocational / professional institution','Other educational institution'];
export function requiredDocuments(data, category) {
  const docs = data.institutionType === 'Government school' ? [
    {id:'request',name:'School request letter',why:'On school letterhead, signed and stamped by the Principal / Head of School.'},
    {id:'principal',name:'Principal appointment evidence',why:'Appointment letter, order or appointment resolution.'},
    {id:'affiliation',name:'School affiliation / registration',why:'Issued by UDISE or a recognized Central / State education board.'}
  ] : [
    {id:'request',name:'Application letter · Annexure A',why:'Institution letterhead, signed and stamped by the Head of Institution.',url:domainLinks.application},
    {id:'undertaking',name:'Undertaking · Annexure B',why:'Signed and stamped by the head on ₹100 non-judicial stamp paper or e-stamp.',url:domainLinks.undertaking},
    {id:'admin',name:'Administrative contact appointment',why:'Appointment letter of the admin contact named in the application.'},
    {id:'affiliation',name:'Affiliation / approval / recognition',why:'From the relevant education board, university, AICTE, government, UGC or other competent authority.'},
    {id:'registration',name:'Legal registration certificate',why:'Evidence of the applicant’s legal constitution and educational purpose under a Central / State act or regulation.'}
  ];
  if(category.research) docs.push({id:'research',name:'Research mandate evidence',why:'Documentary proof of research activity, such as a letter from DST or State Government DST.'});
  if(data.translation==='yes') docs.push({id:'translation',name:'Authorized affiliation translation',why:'For affiliation evidence outside Hindi or English: court-authorized verbatim translation, signed and stamped by the institution head.'});
  if(data.gst==='institution'||data.gst==='parent') docs.push({id:'gst',name:'GST registration certificate',why:'Required when a GST number is supplied. The invoice follows the institution whose GST number is provided.'});
  if(data.gst==='parent') docs.push({id:'parent-pan',name:'Parent society / trust PAN card',why:'Required when using a parent society / trust / foundation GST number.'},{id:'parent-registration',name:'Parent society / trust registration',why:'Registration certificate supporting the parent entity’s GST number.'});
  return docs;
}
export const domainFaqs = [
  ['Who can apply for an institutional domain?','Indian educational and research institutions with the recognition, affiliation or registration evidence described in sections 2–4 of the guidelines. The registrar decides eligibility; this preparation check is preliminary.',domainLinks.guidelines],
  ['Which domain category should we choose?','Choose a category that reflects the institution’s purpose. All eight listed categories are subject to institutional eligibility. Research categories require research evidence; the guidelines do not provide an automatic approval matrix for every institution type.',domainLinks.guidelines],
  ['What documents do government schools need?','The dated guidelines allow a school request letter, Principal appointment evidence and UDISE / recognized-board affiliation or registration evidence. Research and other applicable conditions should be confirmed with ERNET.',domainLinks.guidelines],
  ['How should we choose a domain name?','Use the institution’s full name or abbreviation. ASCII labels must have 3–63 letters, digits or hyphens with no hyphen at either end. Generic, personal, reserved and misleading government or institution names are restricted. IDN checks take place on the official portal.',domainLinks.guidelines],
  ['Have my documents been uploaded or my application submitted?','No. This page checks a preparation draft in your current browser tab. Files are checked locally and are never sent to a server. To register, sign in and complete the official portal process; the draft is not transferred automatically.',domainLinks.portal],
  ['How can we track an application or fix rejected documents?','Sign in to the official domain panel for your actual application status and requested corrections. If you need help, email the registry helpdesk to open a ticket. This page cannot retrieve an application record.',domainLinks.login],
  ['How does renewal work?','Renew through the official account before expiry and supply fresh required documents. The guidelines permit renewal for up to nine years at a time. Expired domains may incur reactivation or restoration charges; check the official panel and current terms.',domainLinks.guidelines],
  ['What DNS configuration is needed?','At least two valid nameservers and DNS entries are needed for the domain to resolve. Use institutional / provider nameservers or ERNET’s DNS service. Enter and change live DNS only in the authorized domain panel.',domainLinks.guidelines],
  ['Where can we find registration fees and pay?','The official registration tariff lists category and duration charges, including applicable GST. Pay only through the official domain panel gateway. This page does not take payments or issue receipts.',domainLinks.tariff],
  ['Do we need to send paper documents?','Section 3 of the guidelines requires true copies of the original ₹100 undertaking to reach the Domain Registration Division within 15 days of the online application. Confirm how this applies to the government-school exception with the helpdesk.',domainLinks.guidelines],
  ['Can an institutional domain be transferred to another registrar?','The reserved ERNET categories are non-transferable to another registrar under the published terms. Ask the registry helpdesk about corrections, cancellation or other changes to your institutional record.',domainLinks.guidelines]
];
export const MAX_PDF_BYTES = 2 * 1024 * 1024;
export function validateDomainLabel(value,category) {
  const label=value.trim().normalize('NFC');
  if(category.idn){
    if(!label || !/^[\p{Script=Devanagari}\p{Mark}0-9-]+$/u.test(label) || !/[\p{Script=Devanagari}]/u.test(label) || /^-|-$/.test(label) || /^[\p{Mark}]/u.test(label)) return {valid:false,message:'Enter a Devanagari label without spaces, dots or a hyphen at either end.'};
    try {const ascii=new URL('https://'+label+'.'+category.id).hostname.split('.')[0];if(ascii.length>63)return {valid:false,message:'This IDN label exceeds the DNS encoded-length limit.'};} catch {return {valid:false,message:'This label cannot be encoded as an internationalized domain.'};}
    return {valid:true,label,message:'Basic IDN format checked. Script, naming eligibility and availability still require official verification.'};
  }
  if(!/^[a-z0-9](?:[a-z0-9-]{1,61})[a-z0-9]$/i.test(label)) return {valid:false,message:'Use 3–63 letters, digits or hyphens. Do not include dots, spaces or a hyphen at either end.'};
  return {valid:true,label:label.toLowerCase(),message:'Format valid. Institutional naming rules and availability still require official verification.'};
}
export async function validateLocalPDF(file) {
  if(!file || !/\.pdf$/i.test(file.name)) return 'Choose a PDF file.';
  if(file.size===0) return 'This file is empty.';
  if(file.size>MAX_PDF_BYTES) return 'The PDF must be no larger than 2 MB.';
  if(file.type && file.type!=='application/pdf') return 'The file type must be PDF.';
  const head=new TextDecoder().decode(await file.slice(0,8).arrayBuffer());
  const tail=new TextDecoder().decode(await file.slice(Math.max(0,file.size-1024)).arrayBuffer());
  if(!/^%PDF-1\.[0-7]|^%PDF-2\.0/.test(head)||!tail.includes('%%EOF')) return 'The file does not have a valid PDF signature and ending. Choose an intact PDF.';
  return '';
}
