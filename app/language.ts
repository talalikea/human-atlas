import {useEffect,useState} from 'react';
import type {SystemId} from './anatomy';
export type Language='en'|'ar';
export function useLanguage(){
 const [language,setLanguage]=useState<Language>(()=>{try{return localStorage.getItem('human-atlas-language')==='ar'?'ar':'en';}catch{return 'en';}});
 useEffect(()=>{
  document.documentElement.lang=language;
  document.documentElement.dir=language==='ar'?'rtl':'ltr';
  document.title=language==='ar'?'أطلس الإنسان':'Human Atlas';
  document.querySelector('meta[name="description"]')?.setAttribute('content',language==='ar'?'أطلس تشريحي تفاعلي لجسم الإنسان. استكشف الأجهزة والبنى ثلاثية الأبعاد.':'An interactive human anatomy atlas. Explore body systems and anatomical structures in 3D.');
  try{localStorage.setItem('human-atlas-language',language);}catch{/* Language selection remains available without storage. */}
 },[language]);
 return {language,setLanguage,t:(ar:string,en:string)=>language==='ar'?ar:en};
}
export const englishSystems:Record<SystemId,{name:string;description:string}>={
 skeletal:{name:'Skeletal',description:'Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. They also store minerals and produce blood cells.'},
 muscular:{name:'Muscular',description:'Skeletal muscles produce movement by pulling on their attachments. Together with tendons, they move joints, maintain posture, and generate heat.'},
 cardiac:{name:'Heart',description:'The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circulations.'},
 sensory:{name:'Sensory organs',description:'These structures contribute to sight, hearing, and balance, working with the nervous system to transmit signals.'},
 arterial:{name:'Arteries',description:'Arteries carry blood away from the heart to supply tissues or to the lungs through the pulmonary circulation.'},
 venous:{name:'Veins',description:'Veins return blood toward the heart. Superficial and deep networks collect blood from tissues.'},
 nervous:{name:'Nervous',description:'The brain, spinal cord, and peripheral nerves transmit and process signals, supporting sensation, movement, and coordination.'},
 respiratory:{name:'Respiratory',description:'Airways carry air to the lungs, where oxygen and carbon dioxide are exchanged between air and blood.'},
 digestive:{name:'Digestive',description:'The digestive system breaks down food, absorbs nutrients and water, and moves waste. Accessory organs contribute digestive fluids and enzymes.'},
 urinary:{name:'Urinary',description:'The kidneys filter blood and regulate fluids, electrolytes, and acid–base balance. Urine then travels to the bladder.'},
 lymphatic:{name:'Lymphatic',description:'Lymphatic vessels return excess fluid to the circulation. Lymph nodes support immune surveillance and responses.'},
 endocrine:{name:'Endocrine',description:'Endocrine glands release hormones into the blood to coordinate metabolism, growth, stress responses, and reproduction.'},
 reproductive:{name:'Reproductive',description:'The male reproductive structures represented here contribute to sperm production, maturation, and transport, as well as hormone production.'},
 integumentary:{name:'Body surface',description:'The body surface provides an external anatomical reference, forms a protective barrier, and contributes to sensation and temperature regulation.'},
 connective:{name:'Connective tissue',description:'Cartilage, ligaments, and connective tissues support, connect, and separate structures. They help stabilize joints and distribute loads.'},
};
export const englishExplanations:Record<string,string>={
 heart:'A muscular pump in the chest. Its right side sends blood to the lungs, while its left side sends blood through the systemic circulation.',
 liver:'A large organ below the right side of the diaphragm. It processes absorbed nutrients and produces bile and many proteins carried in the blood.',
 brain:'The central organ of the nervous system. Its interconnected regions support perception, movement, memory, language, and regulation of body functions.',
 stomach:'A muscular chamber between the esophagus and small intestine. It stores food and mixes it with acid and enzymes before moving it into the duodenum.',
 spleen:'A lymphatic organ in the upper left abdomen. It filters blood, removes aging blood cells, and contributes to immune responses.',
 pancreas:'An abdominal organ with digestive and endocrine functions. It sends enzymes to the small intestine and releases hormones such as insulin and glucagon.',
 'urinary bladder':'A muscular reservoir in the pelvis that stores urine arriving from the kidneys through the ureters.',
 trachea:'The main airway between the larynx and bronchi. Cartilage rings keep it open during breathing.',
 diaphragm:'A broad muscle separating the chest from the abdomen. Its contraction increases chest volume and helps draw air into the lungs.',
};
const arabicNames:Record<string,string>={heart:'القلب',brain:'الدماغ',liver:'الكبد',stomach:'المعدة',spleen:'الطحال',pancreas:'البنكرياس','urinary bladder':'المثانة البولية',trachea:'القصبة الهوائية',diaphragm:'الحجاب الحاجز',femur:'عظم الفخذ',kidney:'الكلية',lung:'الرئة',lungs:'الرئتان',aorta:'الأبهر',esophagus:'المريء',duodenum:'الاثنا عشر',rectum:'المستقيم',tongue:'اللسان',thyroid:'الغدة الدرقية','thyroid gland':'الغدة الدرقية','spinal cord':'النخاع الشوكي',sternum:'عظم القص',patella:'الرضفة',tibia:'الظنبوب',fibula:'الشظية',humerus:'عظم العضد',radius:'الكعبرة',ulna:'الزند',clavicle:'الترقوة',scapula:'لوح الكتف',mandible:'الفك السفلي',skull:'الجمجمة',gallbladder:'المرارة','gall bladder':'المرارة','small intestine':'الأمعاء الدقيقة','large intestine':'الأمعاء الغليظة',prostate:'البروستاتا',larynx:'الحنجرة',pharynx:'البلعوم'};
export function structureName(name:string,language:Language):string{
 if(language==='en')return name;
 const key=name.toLowerCase();
 if(arabicNames[key])return arabicNames[key];
 // Keep the source term when no reviewed translation is available.
 return name;
}
