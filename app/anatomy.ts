export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
  {id:'skeletal',name:'الهيكل العظمي',color:'#e2d9ba',description:'تشكل العظام الإطار الداعم للجسم، وتحمي الأعضاء، وتوفر نقاط ارتباط للعضلات. كما تخزن المعادن وتنتج خلايا الدم.'},
  {id:'muscular',name:'العضلات',color:'#a85b50',description:'تنتج العضلات الهيكلية الحركة عبر شد نقاط ارتباطها. وبالتعاون مع الأوتار تحرك المفاصل وتثبت القوام وتنتج الحرارة.'},
  {id:'cardiac',name:'القلب',color:'#b96760',description:'القلب مضخة عضلية ذات أربع حجرات. توجه صماماته الدم إلى الأمام عبر الدوران الرئوي والجهازي.'},
  {id:'sensory',name:'الأعضاء الحسية',color:'#b0c8ce',description:'تسهم هذه البنى في الحواس الخاصة مثل البصر والسمع والتوازن، وتعمل مع الجهاز العصبي لنقل الإشارات.'},
  {id:'arterial',name:'الشرايين',color:'#c05245',description:'تحمل الشرايين الدم بعيدًا عن القلب لتغذية الأنسجة، أو إلى الرئتين ضمن الدورة الرئوية.'},
  {id:'venous',name:'الأوردة',color:'#527c9f',description:'تعيد الأوردة الدم باتجاه القلب. تجمع الشبكات السطحية والعميقة الدم من الأنسجة.'},
  {id:'nervous',name:'الجهاز العصبي',color:'#d8b565',description:'ينقل الدماغ والنخاع الشوكي والأعصاب الطرفية الإشارات ويعالجها، ويدعم الإحساس والحركة والتنسيق.'},
  {id:'respiratory',name:'الجهاز التنفسي',color:'#b98991',description:'تنقل الممرات الهوائية الهواء إلى الرئتين، حيث يتبادل الأكسجين وثاني أكسيد الكربون بين الهواء والدم.'},
  {id:'digestive',name:'الجهاز الهضمي',color:'#b8916b',description:'يهضم الجهاز الهضمي الطعام ويمتص العناصر الغذائية والماء وينقل الفضلات، مع مساهمة الأعضاء الملحقة في العصارات والإنزيمات.'},
  {id:'urinary',name:'الجهاز البولي',color:'#b47961',description:'ترشح الكليتان الدم وتنظمان السوائل والشوارد والتوازن الحمضي القاعدي، ثم ينتقل البول إلى المثانة.'},
  {id:'lymphatic',name:'الجهاز اللمفاوي',color:'#879f7c',description:'تعيد الأوعية اللمفاوية السوائل الزائدة إلى الدورة الدموية، وتدعم العقد اللمفاوية المراقبة والاستجابة المناعية.'},
  {id:'endocrine',name:'جهاز الغدد الصماء',color:'#c5a09a',description:'تطلق الغدد الصماء الهرمونات في الدم لتنسيق الأيض والنمو والاستجابة للضغط والتكاثر.'},
  {id:'reproductive',name:'الجهاز التناسلي',color:'#bda098',description:'تسهم البنى التناسلية الذكرية الممثلة هنا في إنتاج الحيوانات المنوية ونضجها ونقلها وإنتاج الهرمونات.'},
  {id:'integumentary',name:'سطح الجسم',color:'#ba9b7d',description:'يوفر سطح الجسم مرجعًا تشريحيًا خارجيًا، ويشكل حاجزًا واقيًا ويسهم في الإحساس وتنظيم الحرارة.'},
  {id:'connective',name:'النسيج الضام',color:'#aec3bb',description:'تدعم الغضاريف والأربطة والأنسجة الضامة البنى وتصل بينها وتفصلها، وتساعد على تثبيت المفاصل وتوزيع الأحمال.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
  'heart':'مضخة عضلية في الصدر؛ يرسل جانبها الأيمن الدم إلى الرئتين، بينما يرسله جانبها الأيسر إلى الدورة الدموية الجهازية.',
  'liver':'عضو كبير أسفل الجانب الأيمن من الحجاب الحاجز؛ يعالج المغذيات الممتصة وينتج الصفراء وبروتينات عديدة يحملها الدم.',
  'brain':'العضو المركزي للجهاز العصبي؛ تدعم مناطقه المترابطة الإدراك والحركة والذاكرة واللغة وتنظيم وظائف الجسم.',
  'stomach':'حجرة عضلية بين المريء والأمعاء الدقيقة؛ تخزن الطعام وتمزجه بالحمض والإنزيمات قبل دفعه إلى الاثني عشر.',
  'spleen':'عضو لمفاوي في أعلى البطن الأيسر؛ يرشح الدم ويزيل خلايا الدم المتقادمة ويسهم في الاستجابة المناعية.',
  'pancreas':'عضو بطني له وظائف هضمية وصماء؛ يرسل الإنزيمات إلى الأمعاء الدقيقة ويطلق هرمونات مثل الإنسولين والغلوكاغون.',
  'urinary bladder':'خزان عضلي في الحوض يخزن البول القادم من الكليتين عبر الحالبين.',
  'trachea':'المجرى الهوائي الرئيس بين الحنجرة والقصبات؛ تحافظ حلقاته الغضروفية على بقاء المجرى مفتوحًا أثناء التنفس.',
  'diaphragm':'عضلة عريضة تفصل الصدر عن البطن؛ يؤدي تقلصها إلى زيادة حجم الصدر والمساعدة على سحب الهواء إلى الرئتين.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
