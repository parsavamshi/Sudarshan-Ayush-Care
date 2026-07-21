/* ==========================================================================
   services.js
   Sudarshan AYUSH CARE — Services Page
   All service data + dynamic rendering (no page reload, no duplicate HTML)
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   SERVICE DATA — edit this array to update any service
   -------------------------------------------------------------------------- */
const SERVICES = [
  {
    id: 1,
    icon: 'bi-moisture',
    serviceName: 'Psoriasis',
    shortIntro: 'Natural Ayurvedic Care for Healthy Skin',
    image: '../images/Services/1-Psoriasis.jpg',      // replace with real path when available
    imagePlaceholderIcon: 'bi-droplet-half',
    description:
      'Psoriasis is a chronic skin condition that causes red, scaly, itchy, and inflamed patches on the skin due to rapid skin cell growth. Although it is not contagious, it can affect your comfort, confidence, and quality of life. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic care that focuses on treating the root cause, reducing inflammation, and promoting healthy skin naturally.',
    benefits: [
      'Reduces redness, itching and scaling naturally',
      'Addresses root-cause dosha imbalance',
      'Detoxifies the blood and lymphatic system',
      'Promotes long-term remission without side effects',
      'Improves skin texture and overall confidence',
    ],
    procedure: [
      'Initial Prakriti (constitution) assessment',
      'Customised herbal formulation plan',
      'Panchakarma detoxification therapies',
      'External herbal applications and lepa',
      'Dietary and lifestyle guidance',
    ],
    duration: '4 – 12 weeks depending on severity and individual response',
    suitableFor: [
      'Plaque psoriasis, scalp psoriasis, nail psoriasis',
      'Patients seeking drug-free natural relief',
      'Chronic cases with frequent flare-ups',
      'All age groups above 12 years',
    ],
  },
  {
    id: 2,
    icon: 'bi-stars',
    serviceName: 'Hair Problems, Hair Fall & Hair Growth',
    shortIntro: 'Natural Ayurvedic Care for Healthy Hair',
    image: '../images/Services/2-Hair-Problems.jpg',      // replace with real path when available
    imagePlaceholderIcon: 'bi-flower3',
    description:
      'Healthy hair starts with a healthy body. Hair loss and scalp problems can occur due to stress, hormonal imbalance, poor nutrition, dandruff, genetics, or lifestyle factors. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that target the root cause, strengthen hair roots, reduce hair fall, and promote healthy, natural hair growth.',
    benefits: [
      'Strengthens hair follicles from within',
      'Reduces excessive hair fall and breakage',
      'Promotes new, thick, natural hair growth',
      'Improves scalp health and reduces dandruff',
      'Balances hormones that contribute to hair loss',
    ],
    procedure: [
      'Scalp and dosha analysis',
      'Customised internal herbal medicines',
      'Nasya (nasal therapy) for scalp nourishment',
      'Medicated oil massage and Shirodhara',
      'Diet and stress-management counselling',
    ],
    duration: '6 – 16 weeks for visible results',
    suitableFor: [
      'Men and women experiencing hair thinning',
      'Post-partum hair loss',
      'Stress- or nutrition-related hair fall',
      'Premature greying and scalp disorders',
    ],
  },
  {
    id: 3,
    icon: 'bi-heart-fill',
    serviceName: 'Marital Life Problems',
    shortIntro: 'Restoring Health, Happiness & Harmony through Ayurveda',
    image: '../images/Services/3-Marital-Life-Problems.jpg',      // replace with real path when available
    imagePlaceholderIcon: 'bi-hearts',
    description:
      'A healthy married life depends on physical health, emotional well-being, and a strong relationship. Stress, hormonal imbalance, lifestyle disorders, and emotional challenges can affect intimacy and happiness. At Sudarshan AYUSH CARE, we provide confidential and personalized Ayurvedic care to help couples improve their health, strengthen their relationship, and enjoy a fulfilling married life.',
    benefits: [
      'Restores hormonal balance naturally',
      'Improves physical strength and vitality (Ojas)',
      'Reduces stress and anxiety',
      'Enhances emotional well-being and intimacy',
      'Completely confidential and judgment-free care',
    ],
    procedure: [
      'Private, confidential consultation',
      'Comprehensive health and lifestyle assessment',
      'Vajikarana (Ayurvedic vitality) therapy',
      'Customised herbal Rasayana formulations',
      'Stress-reduction and lifestyle guidance',
    ],
    duration: '8 – 16 weeks depending on individual needs',
    suitableFor: [
      'Couples experiencing health-related marital challenges',
      'Hormonal imbalance in men and women',
      'Stress and fatigue affecting relationship quality',
      'Individuals seeking safe, natural support',
    ],
  },
  {
    id: 4,
    icon: 'bi-activity',
    serviceName: 'Digestive Disorders',
    shortIntro: 'Gastritis, Gut Problems, Ulcers, Peptic Ulcers, Gallbladder Stones & Amoebiasis',
    image: '../images/Services/4-Digestive-Disorders.jpg',      // replace with real path when available
    imagePlaceholderIcon: 'bi-heart-pulse',
    description:
      'Healthy digestion is the foundation of good health. Disorders affecting the stomach, intestines, liver, and gallbladder can cause persistent discomfort and significantly impact your daily life. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatment that focuses on identifying and treating the root cause, restoring digestive balance naturally, and promoting long-term wellness.',
    benefits: [
      'Heals the gut lining and reduces inflammation',
      'Eliminates toxins (Ama) from the digestive tract',
      'Restores healthy appetite and digestion (Agni)',
      'Reduces bloating, acidity, and bowel irregularities',
      'Supports liver and gallbladder health naturally',
    ],
    procedure: [
      'Detailed digestive health assessment',
      'Customised Deepana-Pachana herbal therapy',
      'Virechana (therapeutic purgation) if required',
      'Soothing herbal preparations for ulcers',
      'Diet planning and Pathya (therapeutic diet)',
    ],
    duration: '6 – 14 weeks depending on condition',
    suitableFor: [
      'Gastritis, hyperacidity and peptic ulcers',
      'Irritable bowel syndrome (IBS)',
      'Gallbladder stones (non-surgical management)',
      'Amoebiasis and chronic gut infections',
    ],
  },
  {
    id: 5,
    icon: 'bi-bandaid',
    serviceName: 'Hemorrhoids (Piles)',
    shortIntro: 'Natural Ayurvedic Care for Lasting Relief',
    image: '../images/Services/5-Hemorrhoids.jpg',      // replace with real path when available
    imagePlaceholderIcon: 'bi-capsule',
    description:
      'Hemorrhoids (Piles) are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, and discomfort during bowel movements. They are commonly associated with constipation, prolonged sitting, low-fiber diets, pregnancy, and excessive straining. At Sudarshan AYUSH CARE, we provide safe, personalized Ayurvedic treatments that focus on the root cause, offering natural relief and promoting long-term digestive health.',
    benefits: [
      'Reduces swelling and inflammation naturally',
      'Relieves pain, itching and bleeding',
      'Corrects chronic constipation at the root',
      'Avoids the need for surgery in most cases',
      'Prevents recurrence with holistic lifestyle guidance',
    ],
    procedure: [
      'Clinical assessment of type and grade',
      'Kshara Karma (medicated alkaline application)',
      'Internal herbal medicines for bowel regulation',
      'Sitz bath with medicated decoctions',
      'Diet and fibre enrichment guidance',
    ],
    duration: '4 – 10 weeks',
    suitableFor: [
      'Internal and external haemorrhoids (Grade I–III)',
      'Bleeding piles with or without pain',
      'Pregnancy-related haemorrhoids',
      'Patients wishing to avoid surgical intervention',
    ],
  },
  {
    id: 6,
    icon: 'bi-shield-plus',
    serviceName: 'Fistula-in-Ano',
    shortIntro: 'Natural Ayurvedic Care for Complete Healing',
    image: '../images/Services/6-Fistula-in-Ano.jpg',
    imagePlaceholderIcon: 'bi-shield-check',
    description:
      'A fistula-in-ano is an abnormal tunnel that develops between the anal canal and the skin around the anus, usually as a result of an infection or abscess. It can cause persistent pain, swelling, pus discharge, and recurrent infections if left untreated. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic care that focuses on eliminating infection, promoting tissue healing, and preventing recurrence through holistic treatment.',
    benefits: [
      'Eliminates infection and pus discharge naturally',
      'Heals the fistulous tract without major surgery',
      'Reduces pain and swelling significantly',
      'Prevents recurrence through immunity strengthening',
      'Safe alternative to conventional surgery',
    ],
    procedure: [
      'Physical examination and assessment of tract depth',
      'Ksharasutra therapy (Ayurvedic medicated thread)',
      'Internal anti-infective herbal medicines',
      'Wound care with medicated oils',
      'Follow-up and immunity-boosting Rasayana therapy',
    ],
    duration: '8 – 20 weeks depending on fistula complexity',
    suitableFor: [
      'Simple and complex fistula-in-ano',
      'Recurrent post-surgical fistulas',
      'Patients seeking a minimally invasive approach',
      'Fistulas associated with Crohn\'s disease',
    ],
  },
  {
    id: 7,
    icon: 'bi-activity',
    serviceName: 'Fissure in Anus (Anal Fissure)',
    shortIntro: 'Natural Ayurvedic Care for Pain-Free Living',
    image: '../images/Services/7-Fissure-in-Anus.jpg',
    imagePlaceholderIcon: 'bi-bandaid2',
    description:
      'An anal fissure is a small tear or crack in the lining of the anus that commonly causes severe pain during bowel movements, bleeding, and burning sensations. It is often associated with constipation, passing hard stools, or prolonged straining. At Sudarshan AYUSH CARE, we offer personalized Ayurvedic treatments that help heal fissures naturally, relieve pain, improve bowel health, and prevent recurrence.',
    benefits: [
      'Relieves severe pain and burning during bowel movements',
      'Heals the fissure naturally without surgery',
      'Softens stools and corrects constipation',
      'Reduces spasms of the anal sphincter',
      'Prevents fissure from becoming chronic',
    ],
    procedure: [
      'Assessment of fissure type (acute or chronic)',
      'Medicated Basti (enema) therapy',
      'Local application of healing Ayurvedic oils',
      'Internal herbal laxative and healing medicines',
      'Dietary advice for soft, regular bowel movements',
    ],
    duration: '3 – 8 weeks',
    suitableFor: [
      'Acute and chronic anal fissures',
      'Adults and elderly patients',
      'Post-partum fissures',
      'Patients with associated constipation',
    ],
  },
  {
    id: 8,
    icon: 'bi-heart-pulse',
    serviceName: 'Anorectal Problems',
    shortIntro: 'Comprehensive Ayurvedic Care for Anorectal Disorders',
    image: '../images/Services/8-Anorectal-Problems.jpg',
    imagePlaceholderIcon: 'bi-clipboard2-pulse',
    description:
      'Anorectal disorders affect the anus and rectum and can cause pain, bleeding, swelling, infection, and discomfort during bowel movements. If left untreated, these conditions may interfere with daily life and lead to serious complications. At Sudarshan AYUSH CARE, we provide safe, effective, and personalized Ayurvedic treatments that focus on relieving symptoms, healing the root cause, and preventing recurrence naturally.',
    benefits: [
      'Safe, effective relief for a wide range of anorectal conditions',
      'Non-invasive Ayurvedic procedures',
      'Reduces pain, swelling and infection',
      'Holistic treatment addressing digestion and immunity',
      'Minimises risk of recurrence',
    ],
    procedure: [
      'Comprehensive anorectal clinical assessment',
      'Kshara Karma or Ksharasutra as appropriate',
      'Basti (medicated enema) therapy',
      'Healing herbal oil local applications',
      'Dietary and bowel habit correction',
    ],
    duration: '4 – 16 weeks depending on diagnosis',
    suitableFor: [
      'Rectal prolapse, proctitis, anal warts',
      'Recurrent perianal infections and abscesses',
      'Post-operative wound healing',
      'All adult age groups',
    ],
  },
  {
    id: 9,
    icon: 'bi-brightness-high',
    serviceName: 'Vitiligo (Leucoderma)',
    shortIntro: 'Restore Natural Skin Confidence with Ayurveda',
    image: '../images/Services/9-Vitiligo.jpg',
    imagePlaceholderIcon: 'bi-sun',
    description:
      'Vitiligo is a chronic skin condition characterized by the loss of natural skin pigment, resulting in white patches on different parts of the body. It occurs when melanocytes, the cells responsible for producing melanin, become damaged or inactive. Although Vitiligo is not contagious or life-threatening, it can significantly affect self-confidence and emotional well-being. At Sudarshan AYUSH CARE, we offer personalized Ayurvedic treatment that focuses on addressing the root cause, balancing the body\'s doshas, strengthening immunity, and promoting healthy skin pigmentation naturally.',
    benefits: [
      'Stimulates melanocyte activity and pigmentation',
      'Balances the immune system to prevent further spread',
      'Detoxifies blood for healthier skin function',
      'Reduces stress that triggers flare-ups',
      'Completely natural with no harmful side effects',
    ],
    procedure: [
      'Skin and dosha assessment',
      'Shodhana (purification) therapy including Virechana',
      'Bakuchi and other classical herbal formulations',
      'Sun-exposure therapy under Ayurvedic protocol',
      'Ongoing Rasayana and immunity-building therapy',
    ],
    duration: '12 – 24 weeks or longer for significant response',
    suitableFor: [
      'Vitiligo of any part of the body',
      'Early-stage and spreading vitiligo',
      'Patients who have not responded to conventional treatment',
      'Children and adults alike',
    ],
  },
  {
    id: 10,
    icon: 'bi-droplet',
    serviceName: 'Eczema (Atopic Dermatitis)',
    shortIntro: 'Natural Ayurvedic Care for Healthy, Comfortable Skin',
    image: '../images/Services/10-Eczema.jpg',
    imagePlaceholderIcon: 'bi-droplet-half',
    description:
      'Eczema is a chronic inflammatory skin condition that causes intense itching, dryness, redness, thickened skin, dark discoloration, and irritation. Continuous scratching may lead to rough, leathery skin (lichenification), cracks, and secondary infections. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatment that focuses on treating the root cause, detoxifying the body, balancing the doshas, and restoring healthy skin naturally.',
    benefits: [
      'Relieves intense itching and inflammation',
      'Deeply moisturises and nourishes dry, cracked skin',
      'Detoxifies the body to prevent flare-ups',
      'Balances Pitta and Vata doshas',
      'Reduces risk of secondary infections',
    ],
    procedure: [
      'Detailed Prakriti and skin condition assessment',
      'Virechana (therapeutic purgation) detoxification',
      'Medicated oil Abhyanga and Lepam',
      'Internal antipruritic herbal medicines',
      'Trigger-avoidance and dietary guidance',
    ],
    duration: '6 – 16 weeks',
    suitableFor: [
      'Atopic dermatitis in children and adults',
      'Contact eczema and seborrhoeic dermatitis',
      'Chronic cases with repeated flare-ups',
      'Patients with allergy-associated eczema',
    ],
  },
  {
    id: 11,
    icon: 'bi-emoji-smile',
    serviceName: 'Acne (Yuvan Pidika)',
    shortIntro: 'Clear Skin Naturally with Ayurvedic Care',
    image: '../images/Services/11-Acne.jpg',
    imagePlaceholderIcon: 'bi-flower2',
    description:
      'Acne is one of the most common skin conditions, affecting teenagers and adults alike. It develops when hair follicles become clogged with excess oil, dead skin cells, and bacteria, leading to pimples, blackheads, whiteheads, and inflammation. At Sudarshan AYUSH CARE, we offer personalized Ayurvedic treatments that address the root cause of acne, balance hormones, detoxify the body, and promote healthy, naturally glowing skin.',
    benefits: [
      'Reduces active pimples and inflammation',
      'Balances hormones and sebum production',
      'Detoxifies the blood and lymphatic system',
      'Fades post-acne marks and pigmentation',
      'Promotes a clear, naturally glowing complexion',
    ],
    procedure: [
      'Skin type and hormonal imbalance assessment',
      'Blood-purifying herbal formulations (Raktashodhaka)',
      'Face Lepam (herbal mask) treatments',
      'Dietary correction to reduce Pitta',
      'Lifestyle and skincare routine guidance',
    ],
    duration: '6 – 12 weeks',
    suitableFor: [
      'Teenage and adult acne',
      'Hormonal acne in women (PCOS-related)',
      'Acne with scarring and pigmentation',
      'Recurrent acne not responding to topical treatments',
    ],
  },
  {
    id: 12,
    icon: 'bi-flower2',
    serviceName: 'Keloid',
    shortIntro: 'Natural Ayurvedic Care for Healthy Skin & Scar Management',
    image: '../images/Services/12-Keloid.jpg',
    imagePlaceholderIcon: 'bi-shield-plus',
    description:
      'A keloid is an overgrowth of scar tissue that develops after the skin has healed from an injury. Unlike normal scars, keloids extend beyond the original wound and may continue to grow over time. They can cause itching, pain, tightness, and cosmetic concerns. At Sudarshan AYUSH CARE, we offer personalized Ayurvedic treatments that focus on improving skin health, reducing inflammation, supporting healthy tissue healing, and minimizing scar-related discomfort naturally.',
    benefits: [
      'Softens and flattens keloid tissue over time',
      'Reduces itching, pain and tightness',
      'Prevents further keloid growth',
      'Improves skin texture and appearance',
      'Completely natural with no corticosteroid side effects',
    ],
    procedure: [
      'Assessment of keloid size, age and location',
      'Anti-inflammatory Ayurvedic internal medicines',
      'Herbal lepa (paste) external applications',
      'Kshara Karma for reduction of excess tissue',
      'Rasayana therapy for skin regeneration',
    ],
    duration: '12 – 24 weeks',
    suitableFor: [
      'Post-surgical and post-injury keloids',
      'Keloids following burns or acne',
      'Patients who have had keloid recurrence after surgery',
      'Hypertrophic scars',
    ],
  },
  {
    id: 13,
    icon: 'bi-wind',
    serviceName: 'Feet Cracks (Cracked Heels)',
    shortIntro: 'Restore Soft, Healthy Feet with Ayurvedic Care',
    image: '../images/Services/13-Feet-Cracks.jpg',
    imagePlaceholderIcon: 'bi-tree',
    description:
      'Cracked heels, also known as heel fissures, are a common foot condition caused by dry, thickened skin that splits under pressure. While mild cracks may only be a cosmetic concern, deeper cracks can become painful, bleed, and increase the risk of infection. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that nourish the skin, correct the root cause, and promote healthy, smooth feet naturally.',
    benefits: [
      'Deep nourishment and moisturisation of heel skin',
      'Healing of painful, bleeding cracks',
      'Corrects underlying Vata imbalance and dry constitution',
      'Prevents recurrence with nutritional therapy',
      'Improves overall foot health',
    ],
    procedure: [
      'Assessment of dosha imbalance and nutritional status',
      'Internal nourishing Snehana herbal therapy',
      'Medicated foot soak and Peda Abhyanga',
      'Healing herbal oils and lepa application',
      'Diet enrichment with essential fatty acids',
    ],
    duration: '3 – 8 weeks',
    suitableFor: [
      'Mild to severe cracked heels',
      'Diabetic patients (under supervision)',
      'Dry skin constitution (Vata Prakriti)',
      'Elderly patients with chronic heel dryness',
    ],
  },
  {
    id: 14,
    icon: 'bi-lungs',
    serviceName: 'Chronic Leg & Foot Ulcers',
    shortIntro: 'Advanced Ayurvedic Care for Non-Healing Wounds',
    image: '../images/Services/14-Chronic-Leg.jpg',
    imagePlaceholderIcon: 'bi-bandaid',
    description:
      'Chronic ulcers are open wounds that fail to heal within a normal period, often lasting for weeks or months. They commonly occur on the legs and feet due to poor blood circulation, diabetes, varicose veins, infections, pressure injuries, or underlying medical conditions. At Sudarshan AYUSH CARE, we provide comprehensive Ayurvedic care that focuses on healing the wound, improving circulation, reducing inflammation, and treating the root cause naturally.',
    benefits: [
      'Accelerates natural wound healing',
      'Improves peripheral blood circulation',
      'Eliminates infection and prevents further spread',
      'Reduces pain, swelling and discharge',
      'Manages the underlying cause (diabetes, varicose veins)',
    ],
    procedure: [
      'Wound assessment and systemic health evaluation',
      'Vranaropana (wound healing) herbal applications',
      'Jalaukavacharana (leech therapy) for circulation',
      'Internal medicines for blood sugar and circulation',
      'Wound dressing with medicated ghee and oils',
    ],
    duration: '8 – 24 weeks depending on wound size and cause',
    suitableFor: [
      'Diabetic foot ulcers',
      'Venous and arterial leg ulcers',
      'Pressure ulcers (bedsores)',
      'Varicose vein-related leg wounds',
    ],
  },
  {
    id: 15,
    icon: 'bi-lungs-fill',
    serviceName: 'Bronchitis',
    shortIntro: 'Breathe Easier with Natural Ayurvedic Care',
    image: '../images/Services/15-Bronchitis.jpg',
    imagePlaceholderIcon: 'bi-wind',
    description:
      'Bronchitis is an inflammation of the bronchial tubes that carry air to and from the lungs. It commonly causes persistent cough, mucus production, chest congestion, wheezing, and breathing difficulty. Bronchitis may be acute (short-term) or chronic (long-lasting). At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatment that helps reduce inflammation, clear mucus, strengthen lung function, and improve respiratory health naturally.',
    benefits: [
      'Clears excess mucus and relieves chest congestion',
      'Reduces bronchial inflammation naturally',
      'Strengthens lung capacity and function',
      'Boosts immunity against recurrent infections',
      'Prevents acute bronchitis from becoming chronic',
    ],
    procedure: [
      'Respiratory and dosha assessment',
      'Vamana (therapeutic emesis) to clear Kapha',
      'Steam inhalation with medicated herbs',
      'Nasya (nasal) and chest Lepa therapy',
      'Internal expectorant and anti-inflammatory herbs',
    ],
    duration: '4 – 10 weeks',
    suitableFor: [
      'Acute and chronic bronchitis',
      'Smoker\'s cough and occupational bronchitis',
      'Frequent chest infections',
      'Children and adults with recurrent cough',
    ],
  },
  {
    id: 16,
    icon: 'bi-reception-4',
    serviceName: 'Sinusitis',
    shortIntro: 'Breathe Freely with Natural Ayurvedic Care',
    image: '../images/Services/16-Sinusitis.jpg',
    imagePlaceholderIcon: 'bi-cloud',
    description:
      'Sinusitis is the inflammation or swelling of the tissues lining the sinuses, leading to nasal congestion, facial pain, headache, and difficulty breathing. It may occur due to infections, allergies, pollution, or structural problems in the nasal passages. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that help reduce inflammation, clear blocked sinuses, strengthen immunity, and restore healthy breathing naturally.',
    benefits: [
      'Clears blocked sinuses and restores nasal breathing',
      'Reduces facial pain and pressure headaches',
      'Eliminates chronic sinus infections',
      'Strengthens nasal mucosa to prevent recurrence',
      'Reduces allergic sensitivity naturally',
    ],
    procedure: [
      'Sinus and allergy assessment',
      'Nasya therapy (medicated nasal drops)',
      'Steam inhalation with Ayurvedic herbs',
      'Dhumapana (medicated smoke inhalation)',
      'Immunity and allergy-management herbal medicines',
    ],
    duration: '4 – 12 weeks',
    suitableFor: [
      'Acute and chronic sinusitis',
      'Allergic rhinitis and nasal polyps',
      'Post-viral sinus congestion',
      'Deviated nasal septum-related congestion',
    ],
  },
  {
    id: 17,
    icon: 'bi-tornado',
    serviceName: 'Asthma',
    shortIntro: 'Breathe Freely with Natural Ayurvedic Care',
    image: '../images/Services/17-Asthma.jpg',
    imagePlaceholderIcon: 'bi-lungs',
    description:
      'Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, making breathing difficult. It can lead to recurring episodes of wheezing, coughing, chest tightness, and shortness of breath. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatment that focuses on reducing airway inflammation, strengthening the respiratory system, improving immunity, and helping you breathe naturally with confidence.',
    benefits: [
      'Reduces frequency and severity of asthma attacks',
      'Decreases bronchial inflammation and hypersensitivity',
      'Strengthens lung capacity and respiratory muscles',
      'Reduces dependency on inhalers over time',
      'Improves immunity to prevent trigger-induced attacks',
    ],
    procedure: [
      'Respiratory and allergy assessment (Prakriti and Vikriti)',
      'Vamana therapy to eliminate excess Kapha',
      'Customised Shwasahara herbal formulations',
      'Pranayama and breathing exercises',
      'Trigger-identification and avoidance guidance',
    ],
    duration: '12 – 24 weeks for sustained benefit',
    suitableFor: [
      'Mild to moderate bronchial asthma',
      'Allergic and exercise-induced asthma',
      'Childhood asthma (under paediatric guidance)',
      'Patients wishing to reduce inhaler dependence',
    ],
  },
  {
    id: 18,
    icon: 'bi-gem',
    serviceName: 'Brittle Nails (Onychoschizia)',
    shortIntro: 'Restore Strong, Healthy Nails with Ayurvedic Care',
    image: '../images/Services/18-Brittle-Nails.png',
    imagePlaceholderIcon: 'bi-gem',
    description:
      'Brittle nails (Onychoschizia) are a common nail disorder in which the nails become dry, thin, weak, and split or peel into layers. While often considered a cosmetic concern, brittle nails may also indicate nutritional deficiencies, hormonal imbalance, dehydration, or underlying medical conditions. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that nourish the body from within, strengthen nail health, and address the root cause naturally.',
    benefits: [
      'Strengthens weak, splitting and peeling nails',
      'Corrects underlying nutritional deficiencies',
      'Balances Vata dosha responsible for dryness',
      'Improves overall skin, hair and nail health holistically',
      'Natural, sustained results without supplements alone',
    ],
    procedure: [
      'Nail, skin and nutritional assessment',
      'Snehana (internal oleation) therapy',
      'Mineral and micronutrient-rich herbal formulations',
      'Nail oil applications with Ayurvedic herbs',
      'Diet enrichment with calcium, iron and protein guidance',
    ],
    duration: '6 – 12 weeks',
    suitableFor: [
      'Adults with brittle, peeling or splitting nails',
      'Iron or calcium deficiency-related nail weakness',
      'Thyroid-related nail changes',
      'Frequent exposure to water and chemicals',
    ],
  },
  {
    id: 19,
    icon: 'bi-flower2',
    serviceName: 'Alopecia',
    shortIntro: 'Restore Healthy Hair Growth with Natural Ayurvedic Care',
    image: '../images/Services/19-Alopecia.jpg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      'Alopecia is a condition that causes partial or complete hair loss from the scalp or other parts of the body. Hair loss may occur gradually or suddenly, resulting in thinning hair, bald patches, or widespread hair shedding. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that address the root cause of hair loss, nourish the scalp, strengthen hair follicles, and promote healthy, natural hair regrowth.',
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
  {
    id: 20,
    icon: 'bi-flower2',
    serviceName: 'Obesity',
    shortIntro: 'Achieve a Healthy Weight with Natural Ayurvedic Care',
    image: '../images/Services/20-Obesity.jpg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      'Obesity is a condition caused by excessive body fat that can increase the risk of diabetes, high blood pressure, heart disease, joint pain, and other health problems. It is often linked to unhealthy eating habits, lack of physical activity, hormonal imbalance, stress, and poor metabolism. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on the root cause, helping you lose weight naturally while improving your overall health.',
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
  // new
   {
    id: 21,
    icon: 'bi-flower2',
    serviceName: 'Womens Health Problems',
    shortIntro: "Women's Health Problems Comprehensive Ayurvedic Care for Women's Wellness",
    image: '../images/Services/21-Womens-Health-Problems.jpeg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      "Women's health changes at every stage of life—from adolescence to pregnancy and menopause. Hormonal imbalance, lifestyle stress, poor nutrition, and reproductive health issues can affect overall well-being. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on the root cause, helping women achieve better health naturally and safely.",
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
   {
    id: 22,
    icon: 'bi-flower2',
    serviceName: 'Leucorrhoea',
    shortIntro: "Leucorrhoea (White Discharge) Natural Ayurvedic Care for Women's Intimate Health",
    image: '../images/Services/22-Leucorrhoea.jpeg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      "Leucorrhoea, commonly known as white vaginal discharge, is a common condition experienced by many women. While a small amount of discharge is normal, excessive or foul-smelling discharge accompanied by itching, irritation, or pelvic discomfort may indicate an underlying health issue. Hormonal imbalance, infections, poor hygiene, stress, nutritional deficiencies, and weakened immunity are common causes. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on identifying and treating the root cause, restoring intimate health naturally.",
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
   {
    id: 23,
    icon: 'bi-flower2',
    serviceName: 'Dysmenorrhea',
    shortIntro: "Dysmenorrhea (Painful Menstrual Periods) Natural Ayurvedic Care for Pain-Free Menstrual Health",
    image: '../images/Services/23-Dysmenorrhea.jpeg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      "Dysmenorrhea refers to painful menstrual cramps that occur before or during menstruation. The pain may range from mild discomfort to severe cramps that interfere with daily activities. Hormonal imbalance, uterine disorders, stress, inflammation, and lifestyle factors can contribute to this condition. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on relieving pain, balancing hormones, improving reproductive health, and addressing the root cause naturally.",
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
   {
    id: 24,
    icon: 'bi-flower2',
    serviceName: 'Erectile Dysfunction',
    shortIntro: "Erectile Dysfunction (ED) Restore Confidence & Men's Wellness with Natural Ayurvedic Care",
    image: '../images/Services/24-Erectile-disfunction.jpeg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      "Erectile Dysfunction (ED) is the inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It can result from stress, anxiety, diabetes, hormonal imbalance, poor blood circulation, lifestyle habits, or other underlying health conditions. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on identifying and treating the root cause, helping restore sexual health, vitality, and confidence naturally.",
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
   {
    id: 25,
    icon: 'bi-flower2',
    serviceName: 'Premature Ejaculation',
    shortIntro: "Premature Ejaculation (PE) Natural Ayurvedic Care for Better Control & Confidence",
    image: '../images/Services/25.Premature-Ejaculation.jpeg',
    imagePlaceholderIcon: 'bi-stars',
    description:
      "Premature Ejaculation (PE) is a common male sexual health condition in which ejaculation occurs sooner than desired during sexual activity. It may affect self-confidence, emotional well-being, and intimate relationships. Stress, anxiety, hormonal imbalance, poor lifestyle habits, and certain medical conditions can contribute to this problem. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on identifying and treating the root cause, helping improve control, stamina, and overall sexual wellness naturally.",
    benefits: [
      'Stimulates dormant hair follicles to regrow',
      'Nourishes the scalp and strengthens hair roots',
      'Corrects underlying autoimmune and hormonal triggers',
      'Reduces scalp inflammation and oxidative stress',
      'Promotes healthy, thick, natural hair regrowth',
    ],
    procedure: [
      'Hair loss pattern and dosha analysis',
      'Shirodhara and medicated scalp oil therapy',
      'Nasya for scalp nourishment via nasal route',
      'Blood-purifying and immuno-modulating herbs',
      'Nutritional supplementation through Rasayana therapy',
    ],
    duration: '12 – 24 weeks for visible regrowth',
    suitableFor: [
      'Alopecia areata (patchy hair loss)',
      'Androgenetic alopecia (male/female pattern)',
      'Telogen effluvium (stress-related diffuse loss)',
      'Traction alopecia from tight hairstyles',
    ],
  },
  //  {
  //   id: 20,
  //   icon: 'bi-flower2',
  //   serviceName: 'Obesity',
  //   shortIntro: 'Achieve a Healthy Weight with Natural Ayurvedic Care',
  //   image: '../images/Services/20-Obesity.jpg',
  //   imagePlaceholderIcon: 'bi-stars',
  //   description:
  //     'Obesity is a condition caused by excessive body fat that can increase the risk of diabetes, high blood pressure, heart disease, joint pain, and other health problems. It is often linked to unhealthy eating habits, lack of physical activity, hormonal imbalance, stress, and poor metabolism. At Sudarshan AYUSH CARE, we provide personalized Ayurvedic treatments that focus on the root cause, helping you lose weight naturally while improving your overall health.',
  //   benefits: [
  //     'Stimulates dormant hair follicles to regrow',
  //     'Nourishes the scalp and strengthens hair roots',
  //     'Corrects underlying autoimmune and hormonal triggers',
  //     'Reduces scalp inflammation and oxidative stress',
  //     'Promotes healthy, thick, natural hair regrowth',
  //   ],
  //   procedure: [
  //     'Hair loss pattern and dosha analysis',
  //     'Shirodhara and medicated scalp oil therapy',
  //     'Nasya for scalp nourishment via nasal route',
  //     'Blood-purifying and immuno-modulating herbs',
  //     'Nutritional supplementation through Rasayana therapy',
  //   ],
  //   duration: '12 – 24 weeks for visible regrowth',
  //   suitableFor: [
  //     'Alopecia areata (patchy hair loss)',
  //     'Androgenetic alopecia (male/female pattern)',
  //     'Telogen effluvium (stress-related diffuse loss)',
  //     'Traction alopecia from tight hairstyles',
  //   ],
  // },
];

/* --------------------------------------------------------------------------
   UTILITIES
   -------------------------------------------------------------------------- */

/** Build one <li> item for the list array */
function buildNavItem(svc) {
  return `
    <li>
      <button
        class="svc-nav__btn"
        data-id="${svc.id}"
        role="tab"
        aria-selected="false"
        aria-label="${svc.serviceName}"
      >
        <span class="nav-icon"><i class="bi ${svc.icon}"></i></span>
        <span class="nav-label">${svc.serviceName}</span>
        <span class="nav-num">${String(svc.id).padStart(2, '0')}</span>
      </button>
    </li>`;
}

/** Build one pill button for mobile tabs */
function buildTabPill(svc) {
  return `
    <button
      class="svc-tab-btn"
      data-id="${svc.id}"
      role="tab"
      aria-selected="false"
    >${svc.serviceName}</button>`;
}

/** Convert array of strings to <li> elements */
function listItems(arr) {
  return arr.map(item => `<li>${item}</li>`).join('');
}

/** Render the right-side service detail panel */
function buildDetailHTML(svc) {
  return `
    <div class="svc-detail d-flex flex-column flex-lg-row" id="svcDetail">

      <!-- Image -->
      <div class="svc-img-wrap col-12 col-md-6 col-lg-6 ">
        <!-- <i class="bi ${svc.image} img-placeholder"></i> -->
        <img src="${svc.image}" alt="${svc.serviceName}" class="svc-img" />
      </div>

      <!-- Title block -->
      <div class="svc-detail__head col-12 col-md-6 col-lg-6">

      <!-- <span class="svc-detail__eyebrow">Ayurvedic Treatment</span> -->
      <h2 class="svc-detail__title">${svc.serviceName}</h2>
      <p class="svc-detail__intro">${svc.shortIntro}</p>
      <div class="svc-divider"></div>

      <!-- Description -->
      <p class="svc-detail__desc">${svc.description}</p>

      <!-- Info grid -->
      <div class="svc-info-grid">

        <!-- Benefits -->
        <!-- <div class="svc-info-card">
          <div class="svc-info-card__head">
            <div class="svc-info-card__icon"><i class="bi bi-check2-circle"></i></div>
            <h5 class="svc-info-card__title">Key Benefits</h5>
          </div>
          <ul>${listItems(svc.benefits)}</ul>
        </div> -->

        <!-- Suitable For -->
        <!-- <div class="svc-info-card">
          <div class="svc-info-card__head">
            <div class="svc-info-card__icon"><i class="bi bi-person-check"></i></div>
            <h5 class="svc-info-card__title">Suitable For</h5>
          </div>
          <ul>${listItems(svc.suitableFor)}</ul> -->
        </div>

        <!-- Procedure -->
        <!-- <div class="svc-info-card">
          <div class="svc-info-card__head">
            <div class="svc-info-card__icon"><i class="bi bi-list-ol"></i></div>
            <h5 class="svc-info-card__title">Treatment Procedure</h5>
          </div>
          <ul>${listItems(svc.procedure)}</ul>
        </div> -->

        <!-- Duration -->
        <!-- <div class="svc-info-card">
          <div class="svc-info-card__head">
            <div class="svc-info-card__icon"><i class="bi bi-clock"></i></div>
            <h5 class="svc-info-card__title">Treatment Duration</h5>
          </div>
          <ul><li>${svc.duration}</li></ul>
        </div> -->

        <!-- CTA buttons -->
      <div class="svc-cta-row">
        <a href="contact.html" class="btn btn-book-lg">
          <i class="bi bi-calendar-check me-2"></i>Book Appointment
        </a>
        <a href="https://wa.me/910000000000?text=I%20am%20interested%20in%20treatment%20for%20${encodeURIComponent(svc.serviceName)}"
           target="_blank" rel="noopener noreferrer"
           class="btn btn-whatsapp">
          <i class="bi bi-whatsapp me-2"></i>WhatsApp Now
        </a>
      </div>

      </div><!-- /.svc-info-grid -->

      
      </div>

      

    </div>`;
}

/* --------------------------------------------------------------------------
   RENDER ENGINE
   -------------------------------------------------------------------------- */

let activeId = 1;

/** Load a service into the right content panel */
function loadService(id) {
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) return;
  activeId = id;

  const contentArea = document.getElementById('svcContent');

  // Fade out
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateY(14px)';
  contentArea.style.transition = 'opacity .25s ease, transform .25s ease';

  setTimeout(() => {
    contentArea.innerHTML = buildDetailHTML(svc);
    // Fade back in
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateY(0)';

    // Highlight desktop nav buttons
    document.querySelectorAll('.svc-nav__btn').forEach(btn => {
      const active = parseInt(btn.dataset.id) === id;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active);
    });

    // Highlight mobile tab pills
    document.querySelectorAll('.svc-tab-btn').forEach(btn => {
      const active = parseInt(btn.dataset.id) === id;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active);
    });
  }, 220);
}

/* --------------------------------------------------------------------------
   INITIALISE
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  /* ── Build desktop navigation list ── */
  const listEl = document.getElementById('svcNavList');
  listEl.innerHTML = SERVICES.map(buildNavItem).join('');

  /* ── Build mobile scroll tabs (hidden by design) ── */
  const tabsEl = document.getElementById('svcNavTabs');
  if (tabsEl) {
    tabsEl.innerHTML = SERVICES.map(buildTabPill).join('');
  }

  /* ── Populate footer service links (first 5) ── */
  const footerLinks = document.getElementById('footerServiceLinks');
  if (footerLinks) {
    footerLinks.innerHTML = SERVICES.slice(0, 5)
      .map(s => `<li><a href="services.html#svc-${s.id}">${s.serviceName}</a></li>`)
      .join('');
  }

  /* ── Mobile menu controls ── */
  const svcNav = document.getElementById('svcNav');
  const svcMenuToggle = document.getElementById('svcMenuToggle');
  const svcNavClose = document.getElementById('svcNavClose');
  const svcBackdrop = document.getElementById('svcBackdrop');

  function closeSvcNav() {
    svcNav.classList.remove('svc-nav--open');
    svcNav.setAttribute('aria-hidden', 'true');
    svcMenuToggle.setAttribute('aria-expanded', 'false');
  }

  function openSvcNav() {
    svcNav.classList.add('svc-nav--open');
    svcNav.setAttribute('aria-hidden', 'false');
    svcMenuToggle.setAttribute('aria-expanded', 'true');
  }

  svcMenuToggle?.addEventListener('click', () => openSvcNav());
  svcNavClose?.addEventListener('click', () => closeSvcNav());
  svcBackdrop?.addEventListener('click', () => closeSvcNav());

  /* ── Event delegation for nav clicks ── */
  listEl.addEventListener('click', e => {
    const btn = e.target.closest('.svc-nav__btn');
    if (btn) {
      loadService(parseInt(btn.dataset.id));
      if (window.innerWidth < 992) closeSvcNav();
    }
  });
  if (tabsEl) {
    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.svc-tab-btn');
      if (btn) loadService(parseInt(btn.dataset.id));
    });
  }

  /* ── Default: load Service from hash or fallback to Service 1 ── */
  (function loadFromHashOrDefault() {
    const hash = window.location.hash || '';
    let initial = 1;
    const m = hash.match(/#?svc-(\d+)/) || hash.match(/#(\d+)/);
    if (m) {
      const parsed = parseInt(m[1], 10);
      if (!Number.isNaN(parsed) && SERVICES.some(s => s.id === parsed)) initial = parsed;
    }
    loadService(initial);

    // Handle hash changes without forcing scroll jumps
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash || '';
      const m = hash.match(/#?svc-(\d+)/) || hash.match(/#(\d+)/);
      if (m) {
        const id = parseInt(m[1], 10);
        if (!Number.isNaN(id) && SERVICES.some(s => s.id === id)) {
          loadService(id);
        }
      }
    });

    // Intercept clicks on anchors that point to service fragments so we can SPA-load without scrolling the page
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const m = href.match(/#?svc-(\d+)$/) || href.match(/#(\d+)$/);
      if (m) {
        const id = parseInt(m[1], 10);
        if (!Number.isNaN(id) && SERVICES.some(s => s.id === id)) {
          e.preventDefault();
          history.pushState(null, '', `services.html#svc-${id}`);
          loadService(id);
        }
      }
    });
  })();

  /* ── Back to top ── */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  });
});
