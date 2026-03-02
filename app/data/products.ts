export interface Product {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  keyFeatures: string[];
  /** Price in INR (₹) for cart and Razorpay */
  price: number;
  keywords?: string;
  usageApplication?: string;
  packagingSize?: string;
  form?: string;
  packagingType?: string;
  targetCrops?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'biofin-super',
    name: 'Biofin Super',
    imagePath: '/assets/images/biofin-super.avif',
    description: 'Biological Insecticide multiplier',
    price: 499,
    keyFeatures: [
      'Bio-Tech Grade Plant Growth Regulator',
      'Target Crops: Wheat, Fruit And Vegetables',
      'Usage/Application: Agriculture',
      'Liquid form, 1 Litre bottle packaging',
    ],
    keywords:
      'Wheat Fruit Vegetables BIOFIN SUPER Target Crops Packaging Size Usage/Application Agriculture Biological Insecticide multiplier Bio-Tech Grade Plant Growth Regulator 1 Litre Form Liquid Packaging Type Bottle',
    usageApplication: 'Agriculture',
    packagingSize: '1 Litre',
    form: 'Liquid',
    packagingType: 'Bottle',
    targetCrops: 'Wheat, Fruit And Vegetables',
  },
  {
    id: 'fungcont',
    name: 'Fungcont',
    imagePath: '/assets/images/fungcont.avif',
    price: 599,
    description:
      'For Biological Fungus Management — Downy Mildew, Blight, Powdery Mildew etc are among the main fungus found in all crops. Fungcont is a biological fungicide proving to be very effective in IPM.',
    keyFeatures: [
      'Natural biological product',
      '100% residue free — very useful for exportable crops',
      'Does not allow downy spores to re-establish in the old spot after application',
      'Does not allow new fungus to form in place of old fungus after use',
      'No stains visible on the bunch of grapes after spray',
      'Can be used at any stage till harvesting',
      'Low cost and guaranteed results — fungus removal in 24 hours',
      'Usage: Spray — 2.5 ml per liter of water per acre',
    ],
    keywords:
      'use IPM Acre kind water stage bunch place liter 2.5 ml grapes stains Blight Low cost 24 hours Fungcont FunhCont old spot harvesting Advantages old fungus new fungus main Fungus application downy spores Downy Mildew Fungus removal Powdery Mildew exportable crops Usage Rate Spray guaranteed results biological fungicide 100% residue free product natural biological product Biological Fungus Management',
  },
  {
    id: 'iqasang',
    name: 'Iqasang',
    imagePath: '/assets/images/iqasang.avif',
    price: 450,
    description:
      'आता पिक येईल अधिक जोमदार, जर जोडीला असेल इकासान दाणेदार..!"',
    keyFeatures: [
      'सशक्त व जोमदार पीक',
      'पांढऱ्या मुळांची भरघोस वाढ',
      'पाणी धारण क्षमता आणि योग्य निचरा',
      'PH व EC योग्यता',
      'जमिनीचा भुसभुशीतपणा',
      'उत्कृष्ट आकार',
      'वजन व उत्पादनात भरघोस वाढ',
      'आकर्षक रंग व चकाकी',
      'चांगली टिकवण क्षमता',
      'खतांची बचत',
      'प्रमाण : एकरी २० किलो',
    ],
    keywords: 'EC योग्यता IQASAN-G GRANULES',
  },
  {
    id: 'iqmax',
    name: 'Iqmax',
    imagePath: '/assets/images/iqmax.avif',
    price: 699,
    description:
      'IQ-Max (New Generation KELP) — An extraction from marine seaweed and chelated microelements containing bioactive ingredients: alginic acid, betaine, mannitol, iodine, alginic polyphenol, Cytokinin, Gibberellins, Auxins, Organic Matters, Vitamins etc. Various field tests, crop cycle tests and research prove the effectiveness of KELP.',
    keyFeatures: [
      'Soil: Raises moisture retention and buffering capacity; remediates radiation and other toxins in soil',
      'Roots & growth: Supports protein synthesis and chlorophyll production; enhances anti-stress and anti-disease capacity',
      'Accelerates seed germination and increases crop yield; improves quality significantly',
      'Maximizes photosynthesis and cell division',
      'Leaf & fruit: Bigger, well-shaped fruits; higher sugar and vitamin content; leaves become green and thick fast',
      'Improves blossom and fruit set',
      'Recommended dosage: Foliar application — 1–2 ml / 15 L',
    ],
    keywords:
      'sugar crops Roots KELP. IQ-Max Leaves fruits bigger Auxins iodine content quality betaine Improve Blossom Vitamins research mannitol Cytokinin bioactive radiation Fruit set production crop yield ingredients anti-stress other toxins Gibberellins alginic acid Soil Benefits cell division effectiveness marine seaweed Photosynthesis Overall Growth 1-2 ML/ 15 LTR Organic Matters seed germination crop cycle tests protein synthesis alginic polyphenol Moisture retention Foliar Application Recommended Dosage buffering capacity Various field tests New Generation KELP Leaf& Fruit benefits anti diseases capacity chelated microelements',
  },
  {
    id: 'nanobunch',
    name: 'Nanobunch',
    imagePath: '/assets/images/nanobunch.avif',
    price: 799,
    description:
      'Nano Bunch — One drop magic. A South Korean technology product. 1 ml Nanobunch + 1 kg per 200 liters of water. Rate: 1 ml per acre / 200 lit water.',
    keyFeatures: [
      'Grape Orchard: Spray 1 ml Nanobunch after subcane stage for good pregnancy; next 2 sprays after seed topping for embryo nutrition',
      'Pomegranate: Spray once in 8–10 days to increase female flowers; spray 1 ml 8 days before budding',
      'Other crops: 8 days before budding and after budding',
      'Rate: 1 ml per acre / 200 lit water',
      'South Korean technology product',
    ],
    keywords:
      'Rate 1 kg number 8/10 days 200 liters grape crop Nano Bunch other crops seed topping next 2 sprays subcane stage Grape Orchard female flowers 1 ml Nanobunch One drop magic good pregnancy embryo nutrition acre/200 lit water Pomogranate crop Spray A South Korean technology Product',
  },
  {
    id: 'pentasan',
    name: 'Pentasan',
    imagePath: '/assets/images/pentasan.avif',
    price: 549,
    description: 'An Organic Plant Extract. Bio-Tech Grade Plant Growth Regulator.',
    keyFeatures: [
      'Bio-Tech Grade Plant Growth Regulator',
      'Target Crops: Wheat, Fruit And Vegetable',
      'Usage/Application: Agriculture',
      '1 Litre liquid in Bottle packaging',
    ],
    keywords:
      'Wheat Fruit PENTASAN Vegetable Target Crops Packaging Size An Organic Plant Extract Usage/Application Agriculture Bio-Tech Grade Plant Growth Regulator 1 Litre Form Liquid Packaging Type Bottle',
    usageApplication: 'Agriculture',
    packagingSize: '1 Litre',
    form: 'Liquid',
    packagingType: 'Bottle',
    targetCrops: 'Wheat, Fruit And Vegetable',
  },
  {
    id: 'soil-iqasan',
    name: 'Soil Iqasan',
    imagePath: '/assets/images/soil-iqasan.avif',
    price: 899,
    description:
      'SOIL IQASAN — Soil structure stabilizer and water retention. Liquid Bio-Tech Grade 5 Litre Soil Iqasan Conditioner.',
    keyFeatures: [
      'Soil structure stabilizer and water retention',
      'Liquid Bio-Tech Grade Soil Iqasan Conditioner',
      'Target Crops: Wheat, Fruit And Vegetable',
      'Usage/Application: Soil Application',
      '5L liquid in Can packaging',
    ],
    keywords:
      'Wheat Fruit Vegetable SOIL IQASAN Packaging Size Soil structure water retention Usage/Aplication Soil Application 5 Litre Soil lqasan Conditioner Target Crops 5L Form Liquid Packaging Type Can Liquid Bio-Tech Grade',
    usageApplication: 'Soil Application',
    packagingSize: '5L',
    form: 'Liquid',
    packagingType: 'Can',
    targetCrops: 'Wheat, Fruit And Vegetable',
  },
  {
    id: 'stresbid',
    name: 'Stresbid',
    imagePath: '/assets/images/stresbid.avif',
    price: 649,
    description:
      'IQAS Antistress Formula — Stresbid. A certified organic NanoAgotech based plant growth promoter with a unique mode of action.',
    keyFeatures: [
      'Certified organic NanoAgotech based plant growth promoter',
      'Unique mode of action — improves plant metabolism by enhancing TCA cycle and induces Glycolysis',
      'Enhances chlorophyll production and carbohydrate formation',
      'Induces plant growth hormones like Valine, Tryptophan and supports Glutamic acid biosynthesis',
      'Improves sugar content, imparts original color to fruit and firmness of fruits',
      'Increases nitrogen uptake and stimulates growth',
      'Best supplement for increasing size and quality of all types of crops',
      'Helps tolerate biotic and abiotic stress (alkalinity, high temperature, high salinity, herbicide treatment)',
      'Organic certified product',
      'Dose: 2 ml Stresbid / 0.5 ml Non Ionic sticker / spreader',
    ],
    keywords:
      '2 ml Dose type size sure crops fruit 0.5 ml Valine action quality effects spreader firmness TCA cycle Tryptophan alkalinity Glycolysis unique mode high salinity orginal color Sugar content abiotic stress best supplement nitrogen uptake Salient features high temperature plant metabolism Non Ionic sticker herbicide treatment plant growth harmones stressbid application carbohydrate formation IQAS Antistress Formula Organic certified Product Glutamic acid biosynthesis More Chlorophyll production organic NanoAgotech based plant growth promoter',
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductIds(): string[] {
  return PRODUCTS.map((p) => p.id);
}

export function getSimilarProducts(currentProductId: string): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentProductId);
}
