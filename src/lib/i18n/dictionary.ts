// Sistema de traducción por clave-en-español.
// t('Texto en español') devuelve el inglés si el idioma es 'en', o el mismo español si es 'es'.
// Ventaja: el código sigue legible en español y solo mantenemos el mapa español -> inglés.

export type Locale = 'es' | 'en'
export const DEFAULT_LOCALE: Locale = 'es'

export const en: Record<string, string> = {
  // ── Navegación / Header ──
  'Inicio': 'Home',
  'Presentaciones': 'Presentations',
  'Servicios': 'Services',
  'Nosotros': 'About',
  'Blog': 'Blog',
  'Contacto': 'Contact',
  'Contáctanos': 'Contact us',
  'Español': 'Spanish',
  'Inglés': 'English',

  // ── Footer ──
  'Empresa': 'Company',
  'Quiénes Somos': 'About Us',
  'Nuestros Servicios': 'Our Services',
  'Certificado BPM ICA': 'GMP ICA Certified',
  'Asesoría Especializada': 'Specialized Advisory',
  'Desarrollo de Producto': 'Product Development',
  'Maquila con ICA': 'Contract Manufacturing with ICA',
  '🦴 Croqueta': '🦴 Kibble',
  '⚙️ Peletizado': '⚙️ Pelletized',
  '🥄 Polvo': '🥄 Powder',
  'Ver presentaciones →': 'See presentations →',
  'Móvil: 320 675 53 06': 'Mobile: 320 675 53 06',
  'Fijo: 604 582 5989': 'Landline: 604 582 5989',
  'Lun – Vie: 8:00am – 4:00pm': 'Mon – Fri: 8:00am – 4:00pm',
  'Sábado: 8:00am – 1:00pm': 'Saturday: 8:00am – 1:00pm',
  'Co-desarrollo y maquila exclusiva de alimentos y suplementos para mascotas. Fórmulas 99% naturales, propiedad del cliente, bajo normas BPM — desde 2015.':
    'Exclusive co-development and contract manufacturing of pet food and supplements. 99% natural formulas, owned by the client, under GMP standards — since 2015.',
  'Todos los derechos reservados.': 'All rights reserved.',
  'Medellín, Colombia · Fundada 2017': 'Medellín, Colombia · Founded 2017',

  // ── WhatsApp / Social proof ──
  '¡Hola! ¿Tienes un proyecto?': 'Hi! Do you have a project?',
  'Respuesta en minutos 🚀': 'Reply in minutes 🚀',
  'Fabrica con Zoovegetal': 'Manufactures with Zoovegetal',
  'Marca aliada': 'Partner brand',
  ' de ': ' from ',
  ' adquirió': ' requested',
  'Verificado': 'Verified',
  'hace 1 min': '1 min ago',
  'hace 2 min': '2 min ago',
  'hace 3 min': '3 min ago',
  'hace 4 min': '4 min ago',
  'hace 5 min': '5 min ago',
  'hace 6 min': '6 min ago',
  'hace 7 min': '7 min ago',
  'hace 8 min': '8 min ago',
  'hace 9 min': '9 min ago',
  'hace 11 min': '11 min ago',
  'Galletas Naturales para Perros': 'Natural Dog Cookies',
  'Snacks de Pollo Deshidratado': 'Dehydrated Chicken Snacks',
  'Concentrado Premium Canino': 'Premium Dog Food',
  'Snacks Naturales para Gatos': 'Natural Cat Snacks',
  'Concentrado Premium Felino': 'Premium Cat Food',
  'Snacks de Avena y Miel para Caballos': 'Oat & Honey Horse Snacks',
  'Suplemento Articular Canino': 'Canine Joint Supplement',
  'Concentrado Equino Premium': 'Premium Equine Feed',
  'Comida Cocida Congelada Canina': 'Frozen Cooked Dog Food',
  'Multivitamínico en Polvo Canino': 'Canine Powder Multivitamin',

  // ── Hero (inicio) ──
  'Creamos los productos': 'We create the products',
  'de tu marca.': 'for your brand.',
  'Naturales.': 'Natural.',
  'Certificados.': 'Certified.',
  'Inspirados en su bienestar, creamos desde el origen': 'Inspired by their wellbeing, we create from the origin',
  'fórmulas naturales hechas con el corazón': 'natural formulas made with heart',
  'Co-desarrollo y maquila exclusiva de alimentos y suplementos para mascotas, propiedad del cliente y bajo normas BPM.':
    'Exclusive co-development and contract manufacturing of pet food and supplements, owned by the client and under GMP standards.',
  'No solo fabricamos; nos sumamos al compromiso de protegerlos. Cada ingrediente que seleccionamos y cada lote que producimos está pensado para devolverles un poco del amor incondicional que ellos nos dan.':
    'We don\'t just manufacture; we join the commitment to protect them. Every ingredient we select and every batch we produce is meant to give back a little of the unconditional love they give us.',
  'Cotiza tu proyecto de maquila': 'Quote your manufacturing project',
  'Ver cómo trabajamos': 'See how we work',
  'Años de experiencia': 'Years of experience',
  'Desde 2015 en Medellín': 'Since 2015 in Medellín',
  'Ingredientes naturales': 'Natural ingredients',
  'Grado humano': 'Human grade',
  'Certificación ICA': 'ICA Certification',
  'Auditada anualmente': 'Audited annually',
  'Propiedad del cliente': 'Owned by the client',
  'Fórmulas exclusivas': 'Exclusive formulas',
  'Presentaciones que fabricamos': 'Presentations we manufacture',
  '99% Natural': '99% Natural',
  'Grado humano certificado': 'Certified human grade',
  'BPM ICA': 'GMP ICA',
  'Planta certificada · Medellín': 'Certified plant · Medellín',
  'Scroll': 'Scroll',

  // ── Presentaciones (formatos) ──
  'Croqueta': 'Kibble',
  'Peletizado': 'Pelletized',
  'Polvo': 'Powder',
  'Maquilamos en distintos formatos según el objetivo de tu producto, con fórmula personalizada y propiedad exclusiva del cliente.':
    'We manufacture in different formats according to your product\'s goal, with a custom formula and exclusive client ownership.',
  'Alimento balanceado en formato croqueta, con alta palatabilidad y densidad nutricional.':
    'Balanced food in kibble format, with high palatability and nutritional density.',
  'Peletizado por extrusión en frío. Alta concentración de nutrientes para suplementación.':
    'Cold-extrusion pelletizing. High nutrient concentration for supplementation.',
  'Suplementos y mezclas en polvo, de fácil dosificación y alta absorción.':
    'Powder supplements and blends, easy to dose and highly absorbable.',
  'Ver presentaciones': 'See presentations',

  // ── Presentaciones: 4 formatos ──
  'Bits o galletas': 'Bits or cookies',
  'Polvos funcionales': 'Functional powders',
  'Prensado en frío': 'Cold pressed',
  'Snacks funcionales de alta palatabilidad, ideales como premios con propósito nutricional.':
    'Highly palatable functional snacks, ideal as treats with a nutritional purpose.',
  'Elaborado por prensado en frío, preservando al máximo los nutrientes y la palatabilidad.':
    'Made by cold pressing, preserving nutrients and palatability to the maximum.',
  'Formato peletizado de alta densidad nutricional, ideal para líneas especializadas.':
    'High nutritional density pelletized format, ideal for specialized lines.',
  'Preserva nutrientes': 'Preserves nutrients',
  'Sin altas temperaturas': 'No high temperatures',
  'Líneas especializadas': 'Specialized lines',
  'Formato uniforme': 'Uniform format',
  'Alta densidad nutricional': 'High nutritional density',
  '🦴 Bits o galletas': '🦴 Bits or cookies',
  '🥄 Polvos funcionales': '🥄 Functional powders',
  '❄️ Prensado en frío': '❄️ Cold pressed',
  'Productos altamente palatables, con proteína animal real': 'Highly palatable products, with real animal protein',
  'no harinas de sangre': 'not blood meal',

  // ── Inicio: barra de certificaciones ──
  'Certificación BPM ICA': 'GMP ICA Certification',
  'Vigente': 'Active',
  'Registro ICA por producto': 'ICA registration per product',
  'Individual': 'Individual',
  'Análisis microbiológico': 'Microbiological analysis',
  'Por lote': 'Per batch',
  'Análisis bromatológico': 'Bromatological analysis',
  'Composición nutricional': 'Nutritional composition',
  'Ingredientes grado humano': 'Human-grade ingredients',
  '100% verificados': '100% verified',

  // ── Inicio: secciones ──
  'Hacemos realidad': 'We bring to life',
  'tu marca de alimentos': 'your pet food brand',
  'Desde la fórmula hasta el producto terminado, somos tu aliado estratégico en nutrición animal.':
    'From formula to finished product, we are your strategic partner in animal nutrition.',
  'Del concepto al producto terminado': 'From concept to finished product',
  'Acompañamos tu marca en cada etapa: desde la idea hasta el producto listo para vender.':
    'We support your brand at every stage: from the idea to the ready-to-sell product.',
  'Por qué elegirnos': 'Why choose us',
  'El ADN de Zoovegetal': 'The Zoovegetal DNA',
  'Lo que nos hace el aliado ideal para tu marca de nutrición animal.':
    'What makes us the ideal partner for your animal nutrition brand.',
  'Preguntas frecuentes': 'Frequently asked questions',
  'Resolvemos tus dudas': 'We answer your questions',
  'Todo lo que necesitas saber sobre nuestro modelo de co-desarrollo y maquila.':
    'Everything you need to know about our co-development and manufacturing model.',
  'Desde el blog': 'From the blog',
  'Últimos artículos': 'Latest articles',
  'Conocimiento sobre nutrición animal, fitoterapia y tendencias del sector.':
    'Insights on animal nutrition, phytotherapy and industry trends.',
  'Leer más': 'Read more',
  'Ver todos los artículos': 'See all articles',
  '¿Listo para crear el producto de tu marca?': 'Ready to create your brand\'s product?',
  'Cuéntanos tu idea y en 24 horas te enviamos una propuesta técnica inicial sin costo.':
    'Tell us your idea and within 24 hours we\'ll send you an initial technical proposal at no cost.',
  'Cotizar mi proyecto': 'Quote my project',
  'Escríbenos por WhatsApp': 'Message us on WhatsApp',

  // ── Inicio: video / galería / por qué / faq / cta ──
  '🎬 Así lo hacemos': '🎬 How we do it',
  'Conoce el proceso': 'Get to know the process',
  'detrás de la calidad': 'behind the quality',
  'Conoce la planta donde fabricamos los productos de nuestros clientes. Instalaciones certificadas BPM ICA, procesos documentados y trazables.':
    'Discover the plant where we manufacture our clients\' products. GMP ICA-certified facilities, documented and traceable processes.',
  'Planta propia en Medellín': 'Own plant in Medellín',
  '⚙️ Nuestros Procesos': '⚙️ Our Processes',
  'Fabricación con': 'Manufacturing with',
  'estándares de calidad': 'quality standards',
  'Planta certificada BPM, equipos de grado industrial y procesos controlados para cada proyecto de maquila en Medellín.':
    'GMP-certified plant, industrial-grade equipment and controlled processes for every manufacturing project in Medellín.',
  'Zona de producción principal': 'Main production area',
  'Equipos de producción': 'Production equipment',
  'Zona de almacenamiento': 'Storage area',
  'Control de calidad': 'Quality control',
  '¿Quieres conocer nuestra planta en persona?': 'Want to visit our plant in person?',
  'Agenda una visita y te mostramos todo el proceso de fabricación.':
    'Schedule a visit and we\'ll show you the entire manufacturing process.',
  'Agendar visita': 'Schedule a visit',
  '¿Por qué elegirnos?': 'Why choose us?',
  'Calidad que': 'Quality that',
  'se puede medir': 'can be measured',
  'Cuatro pilares que garantizan el éxito de cada proyecto de maquila. Lo que nos hace el aliado estratégico ideal para tu marca.':
    'Four pillars that guarantee the success of every manufacturing project. What makes us the ideal strategic partner for your brand.',
  'Conocer más sobre nosotros': 'Learn more about us',
  'Hablar con un experto': 'Talk to an expert',
  'Conocimiento para marcas del sector animal': 'Knowledge for brands in the animal sector',
  'Ver todos': 'See all',
  'FAQ': 'FAQ',
  'Todo lo que necesitas saber antes de empezar tu proyecto con nosotros.':
    'Everything you need to know before starting your project with us.',
  '¿Tienes otra pregunta? Escríbenos directamente.': 'Have another question? Write to us directly.',
  'Contactar ahora': 'Contact now',
  '¿Listo para lanzar tu línea de productos bajo tu propia marca?':
    'Ready to launch your product line under your own brand?',
  'Emprendedores, marcas consolidadas y grandes compañías. Cuéntanos tu proyecto y en 24 horas te enviamos una propuesta técnica sin costo.':
    'Entrepreneurs, established brands and large companies. Tell us your project and within 24 hours we\'ll send you a technical proposal at no cost.',

  // ── Inicio: servicios ──
  'Co-desarrollo de Fórmula': 'Formula Co-Development',
  'Diseñamos tu fórmula desde cero usando fitoterapia y nutrición avanzada. El desarrollo es 100% de tu propiedad.':
    'We design your formula from scratch using phytotherapy and advanced nutrition. The development is 100% your property.',
  'Maquila Exclusiva BPM': 'Exclusive GMP Manufacturing',
  'Producción a escala bajo Buenas Prácticas de Manufactura. Tu marca, nuestra planta certificada.':
    'Scale production under Good Manufacturing Practices. Your brand, our certified plant.',
  'Registro y Cumplimiento': 'Registration & Compliance',
  'Acompañamiento en el proceso de registro ICA y normatividad BPMAA para que puedas comercializar legalmente.':
    'Guidance through the ICA registration process and BPMAA regulations so you can market legally.',
  'Entrega Producto Terminado': 'Finished Product Delivery',
  'Recibas tu producto listo para la venta, empacado y etiquetado bajo tu marca. Sin complicaciones.':
    'Receive your product ready to sell, packaged and labeled under your brand. No hassle.',

  // ── Inicio: por qué elegirnos ──
  'Propiedad Intelectual del Cliente': 'Client Intellectual Property',
  'Cada fórmula desarrollada es 100% de tu propiedad. Confidencialidad total y exclusividad garantizada.':
    'Every developed formula is 100% your property. Full confidentiality and guaranteed exclusivity.',
  'Calidad Grado Humano · 99% Natural': 'Human-Grade Quality · 99% Natural',
  'Materias primas seleccionadas aptas para consumo humano e ingredientes botánicos. Sin subproductos de baja calidad.':
    'Selected raw materials fit for human consumption and botanical ingredients. No low-quality by-products.',
  'Planta Certificada BPM': 'GMP-Certified Plant',
  'Rigor farmacéutico en cada lote. Procesos estandarizados bajo normatividad BPMAA que garantizan inocuidad.':
    'Pharmaceutical rigor in every batch. Standardized processes under BPMAA regulations that guarantee safety.',
  'No competimos con nuestros clientes': 'We don\'t compete with our clients',
  'No vendemos a granel ni al consumidor final. Zoovegetal fabrica para el éxito de tu marca, no para competir con ella.':
    'We don\'t sell in bulk or to the end consumer. Zoovegetal manufactures for your brand\'s success, not to compete with it.',

  // ── Inicio: FAQs ──
  '¿La fórmula desarrollada es de mi propiedad?': 'Is the developed formula my property?',
  'Sí, absolutamente. Cada fórmula co-desarrollada es 100% propiedad del cliente. Firmamos acuerdo de confidencialidad y exclusividad desde el inicio del proyecto. Zoovegetal no replica ni vende tus desarrollos a terceros.':
    'Yes, absolutely. Every co-developed formula is 100% owned by the client. We sign a confidentiality and exclusivity agreement from the start of the project. Zoovegetal does not replicate or sell your developments to third parties.',
  '¿Trabajan con emprendedores o solo con grandes empresas?': 'Do you work with startups or only large companies?',
  'Atendemos marcas en todas las etapas: emprendedores con una idea clara, marcas medianas en expansión y grandes compañías del sector agroveterinario. Si tienes visión de mercado y un proyecto serio, podemos acompañarte.':
    'We serve brands at every stage: entrepreneurs with a clear idea, mid-sized brands expanding, and large companies in the agro-veterinary sector. If you have market vision and a serious project, we can support you.',
  '¿Cuánto demora el co-desarrollo de un producto nuevo?': 'How long does co-developing a new product take?',
  'El diseño de fórmula y pruebas de palatabilidad toman entre 4 y 8 semanas. El registro ICA puede demorar entre 2 y 4 meses adicionales. Te acompañamos en todo el proceso.':
    'Formula design and palatability testing take between 4 and 8 weeks. ICA registration can take an additional 2 to 4 months. We support you throughout the entire process.',
  '¿Qué formatos galénicas pueden producir?': 'What formats can you produce?',
  'Producimos bits y galletas (snacks funcionales), polvos solubles y palatables, cremosos y pastas de alta aceptación, y peletizados con extrusión en frío. Cada formato se adapta a la especie y objetivo del producto.':
    'We produce bits and cookies (functional snacks), soluble and palatable powders, high-acceptance creams and pastes, and cold-extrusion pellets. Each format adapts to the species and product goal.',
  '¿Qué tan naturales son los ingredientes?': 'How natural are the ingredients?',
  'Nuestras formulaciones son 99% naturales. Usamos materias primas de grado humano (proteínas animales y vegetales, extractos botánicos y fitoterapéuticos). Sin colorantes artificiales, sin conservantes sintéticos, sin subproductos de baja calidad.':
    'Our formulations are 99% natural. We use human-grade raw materials (animal and plant proteins, botanical and phytotherapeutic extracts). No artificial colorants, no synthetic preservatives, no low-quality by-products.',
}

const morePages: Record<string, string> = {
  // ── Página Presentaciones (/productos) ──
  'Presentaciones que': 'Presentations we',
  'fabricamos para tu marca': 'manufacture for your brand',
  'Maquilamos en distintos formatos según el objetivo de tu producto. Cada presentación es personalizable, 99% natural y de propiedad exclusiva del cliente.':
    'We manufacture in different formats according to your product\'s goal. Each presentation is customizable, 99% natural and exclusively owned by the client.',
  'Alimento balanceado en formato croqueta, con la palatabilidad y densidad nutricional que tu marca necesita.':
    'Balanced food in kibble format, with the palatability and nutritional density your brand needs.',
  'Alta palatabilidad': 'High palatability',
  'Fórmula personalizada': 'Custom formula',
  'Empacado bajo tu marca': 'Packaged under your brand',
  'Peletizado por extrusión en frío. Alta concentración de nutrientes, ideal para suplementación especializada.':
    'Cold-extrusion pelletizing. High nutrient concentration, ideal for specialized supplementation.',
  'Extrusión en frío': 'Cold extrusion',
  'Alta densidad nutricional': 'High nutritional density',
  'Ideal para suplementos': 'Ideal for supplements',
  'Suplementos y mezclas en polvo, de fácil dosificación y alta absorción para el día a día.':
    'Powder supplements and blends, easy to dose and highly absorbable for everyday use.',
  'Fácil dosificación': 'Easy dosing',
  'Alta absorción': 'High absorption',
  'Mezcla con el alimento': 'Mixes with food',
  'Mínimo por orden de compra:': 'Minimum per purchase order:',
  'Mínimo de producción:': 'Minimum production:',
  'por referencia en orden de compra': 'per SKU in the purchase order',
  'Galería': 'Gallery',
  'Algunas presentaciones que hemos creado': 'Some presentations we have created',
  '¿Quieres tu marca en estas presentaciones?': 'Want your brand in these presentations?',
  'Co-desarrollamos y maquilamos tu línea con fórmula personalizada, ingredientes 99% naturales y propiedad exclusiva del cliente.':
    'We co-develop and manufacture your line with a custom formula, 99% natural ingredients and exclusive client ownership.',

  // ── Servicios ──
  'Maquila y Co-Desarrollo B2B': 'B2B Manufacturing & Co-Development',
  'Nosotros fabricamos.': 'We manufacture.',
  'Tú construyes tu marca.': 'You build your brand.',
  'Co-desarrollo y maquila exclusiva de alimentos y suplementos funcionales para mascotas. Fórmulas 99% naturales, de propiedad del cliente, elaboradas bajo normas BPM.':
    'Exclusive co-development and contract manufacturing of functional pet food and supplements. 99% natural formulas, owned by the client, produced under GMP standards.',
  '¿Para quién trabajamos?': 'Who do we work for?',
  'Atendemos marcas en todas las etapas': 'We serve brands at every stage',
  'Desde la primera idea hasta el portafolio consolidado. Tu tamaño no importa, tu compromiso sí.':
    'From the first idea to a consolidated portfolio. Your size doesn\'t matter, your commitment does.',
  'Emprendedores': 'Entrepreneurs',
  'Tienes la idea y la visión. Nosotros ponemos la ciencia, la planta y el proceso. Te llevamos del concepto al producto real.':
    'You have the idea and the vision. We bring the science, the plant and the process. We take you from concept to a real product.',
  'Marcas Consolidadas': 'Established Brands',
  'Amplía tu portafolio con nuevas líneas o formatos. Desarrollo ágil y producción confiable para escalar tu marca.':
    'Expand your portfolio with new lines or formats. Agile development and reliable production to scale your brand.',
  'Grandes Compañías': 'Large Companies',
  'Aliado estratégico para grupos empresariales del sector agroveterinario que requieren maquila de alto volumen y estándares rigurosos.':
    'Strategic partner for agro-veterinary business groups that require high-volume manufacturing and rigorous standards.',
  'Proceso de Co-Desarrollo': 'Co-Development Process',
  'Un proceso transparente, documentado y diseñado para que tu marca llegue al mercado con confianza.':
    'A transparent, documented process designed so your brand reaches the market with confidence.',
  'Fase': 'Phase',
  'Tu idea. Nuestra ciencia.': 'Your idea. Our science.',
  'Conceptualización y Diseño de Fórmula': 'Conceptualization & Formula Design',
  'Acompañamos la creación del producto ideal combinando fitoterapia, nutrición avanzada y bienestar animal. Diseñamos fórmulas personalizadas con materias primas 99% naturales, de grado humano, adaptadas a la especie, etapa de vida y objetivo funcional del producto.':
    'We support the creation of the ideal product by combining phytotherapy, advanced nutrition and animal wellbeing. We design custom formulas with 99% natural, human-grade raw materials, adapted to the species, life stage and functional goal of the product.',
  'Consultoría en nutrición animal y fitoterapia aplicada': 'Consulting in animal nutrition and applied phytotherapy',
  'Diseño de fórmula personalizada para cada especie': 'Custom formula design for each species',
  'Selección de ingredientes botánicos y materias primas premium': 'Selection of botanical ingredients and premium raw materials',
  'Definición de formatos galénicas: bits, polvos, cremosos, pellets': 'Definition of formats: bits, powders, creams, pellets',
  'Acuerdo de confidencialidad y propiedad intelectual del cliente': 'Confidentiality agreement and client intellectual property',
  'Cada fórmula desarrollada es 100% de propiedad del cliente.': 'Every developed formula is 100% owned by the client.',
  'Garantía de que funciona — y que les encanta.': 'A guarantee that it works — and that they love it.',
  'Pruebas de Palatabilidad y Estabilidad': 'Palatability & Stability Testing',
  'Antes de fabricar a escala, el producto pasa por pruebas rigurosas de palatabilidad con animales reales y análisis de estabilidad fisicoquímica y microbiológica. Solo cuando el resultado es óptimo, avanzamos a producción.':
    'Before scaling up, the product goes through rigorous palatability testing with real animals and physicochemical and microbiological stability analysis. Only when the result is optimal do we move to production.',
  'Pruebas de palatabilidad con animales de la especie objetivo': 'Palatability tests with animals of the target species',
  'Análisis bromatológico y microbiológico por lote piloto': 'Bromatological and microbiological analysis per pilot batch',
  'Evaluación de estabilidad y vida útil del producto': 'Stability and shelf-life evaluation of the product',
  'Ajustes de fórmula hasta lograr el estándar ideal': 'Formula adjustments until reaching the ideal standard',
  'Documentación técnica completa del proceso': 'Complete technical documentation of the process',
  'Avanzamos a producción solo cuando el producto supera todas las pruebas.': 'We move to production only when the product passes all tests.',
  'Rigor farmacéutico. Escala industrial.': 'Pharmaceutical rigor. Industrial scale.',
  'Fabricación Bajo Normas BPM': 'Manufacturing Under GMP Standards',
  'Producción a escala en nuestra planta certificada BPM ICA, bajo los más altos estándares de inocuidad alimentaria. Cada lote es documentado, trazable y entregado con certificado de análisis. Tu marca en cada empaque.':
    'Scale production in our GMP ICA-certified plant, under the highest food-safety standards. Every batch is documented, traceable and delivered with a certificate of analysis. Your brand on every package.',
  'Producción en planta propia certificada BPM': 'Production in our own GMP-certified plant',
  'Fabricación white label bajo tu marca exclusiva': 'White-label manufacturing under your exclusive brand',
  'Control de calidad documentado en cada lote': 'Documented quality control in every batch',
  'Bits/galletas, polvos, cremosos y pelletizados': 'Bits/cookies, powders, creams and pellets',
  'Registro ICA con acompañamiento en trámite': 'ICA registration with guidance through the process',
  'Cumplimiento de normatividad BPMAA vigente': 'Compliance with current BPMAA regulations',
  'Zoovegetal no vende a granel ni compite con los productos de sus clientes.': 'Zoovegetal does not sell in bulk or compete with its clients\' products.',
  'Listo para vender. Listo para tu marca.': 'Ready to sell. Ready for your brand.',
  'Entrega de Producto Terminado': 'Finished Product Delivery',
  'Recibes tu producto terminado, empacado y etiquetado bajo tu marca, acompañado de todos los documentos técnicos y registros necesarios para su comercialización inmediata. Sin complicaciones logísticas.':
    'You receive your finished product, packaged and labeled under your brand, along with all the technical documents and registrations needed for immediate marketing. No logistics headaches.',
  'Producto terminado listo para comercialización': 'Finished product ready for marketing',
  'Empaque y etiquetado bajo la marca del cliente': 'Packaging and labeling under the client\'s brand',
  'Certificados de análisis y documentación ICA': 'Certificates of analysis and ICA documentation',
  'Entrega a nivel nacional': 'Nationwide delivery',
  'Soporte técnico post-entrega': 'Post-delivery technical support',
  'El producto sale listo para que tu equipo lo comercialice desde el primer día.': 'The product is ready for your team to market from day one.',
  'Nota: ': 'Note: ',
  'Bits y Galletas': 'Bits & Cookies',
  'Snacks funcionales de alta palatabilidad. Ideales para premios con propósito terapéutico o nutricional.':
    'Functional snacks with high palatability. Ideal for treats with a therapeutic or nutritional purpose.',
  'Polvos Solubles': 'Soluble Powders',
  'Fáciles de dosificar y mezclar con el alimento diario. Perfectos para suplementación de alta absorción.':
    'Easy to dose and mix with daily food. Perfect for high-absorption supplementation.',
  'Cremosos y Pastas': 'Creams & Pastes',
  'Innovación en textura para alta aceptación y palatabilidad. Absorción rápida y atractivo sensorial.':
    'Texture innovation for high acceptance and palatability. Fast absorption and sensory appeal.',
  'Peletizados y Extrusión en Frío': 'Pellets & Cold Extrusion',
  'Formatos de alta densidad nutricional, ideales para equinos y líneas de suplementación especializada.':
    'High nutritional density formats, ideal for horses and specialized supplementation lines.',
  'Capacidades de Producción': 'Production Capabilities',
  'Formatos que fabricamos para tu marca': 'Formats we manufacture for your brand',
  'Cada formato está diseñado para maximizar la palatabilidad y el valor nutricional según la especie y el objetivo del producto.':
    'Each format is designed to maximize palatability and nutritional value according to the species and product goal.',
  'Alcance de desarrollo': 'Development scope',
  'Para cada especie, lo que tu marca necesite': 'For every species, whatever your brand needs',
  'Desarrollamos y maquilamos para las especies de nuestro certificado de habilitación, en una amplia gama de líneas y formatos.':
    'We develop and manufacture for the species in our authorization certificate, across a wide range of lines and formats.',
  'Especies que desarrollamos': 'Species we develop for',
  'Líneas que fabricamos': 'Lines we manufacture',
  'Aves': 'Poultry',
  'Caninos': 'Dogs',
  'Cerdos': 'Pigs',
  'Conejos': 'Rabbits',
  'Equinos': 'Horses',
  'Felinos': 'Cats',
  'Roedores': 'Rodents',
  'Rumiantes': 'Ruminants',
  'Aditivos zootécnicos': 'Zootechnical additives',
  'Alimentos completos o balanceados': 'Complete or balanced feed',
  'Suplementos alimenticios': 'Nutritional supplements',
  'Núcleos y premezclas': 'Cores and premixes',
  'Bloques nutricionales': 'Nutritional blocks',
  'Golosinas para animales': 'Animal treats',
  'Sales mineralizadas para consumo animal': 'Mineralized salts for animal consumption',
  'Estabilizadores de flora intestinal y digestivos': 'Gut flora stabilizers and digestives',
  'Aditivos organolépticos, nutricionales y tecnológicos': 'Organoleptic, nutritional and technological additives',
  'Mínimo por orden de compra': 'Minimum per purchase order',
  'Capacidades de desarrollo': 'Development capabilities',
  'Por qué desarrollar con nosotros': 'Why develop with us',
  'Capacidad técnica, cumplimiento normativo y un sello que nos diferencia: la palatabilidad.':
    'Technical capability, regulatory compliance and a hallmark that sets us apart: palatability.',
  'Nuestro sello': 'Our hallmark',
  'Asesoría experta': 'Expert advisory',
  'Acompañamiento técnico y nutricional en cada etapa del desarrollo.': 'Technical and nutritional support at every stage of development.',
  'Registro ICA y BPMAA': 'ICA & BPMAA Registration',
  'Cumplimiento normativo y acompañamiento en el trámite de registro.': 'Regulatory compliance and support through the registration process.',
  'Innovación y desarrollo': 'Innovation & development',
  'I+D constante para crear productos diferenciados y funcionales.': 'Constant R&D to create differentiated and functional products.',
  'Adaptación tecnológica y flexible': 'Flexible, adaptive technology',
  'Procesos que se ajustan a las necesidades de cada marca.': 'Processes that adapt to the needs of each brand.',
  'Escalabilidad y crecimiento': 'Scalability & growth',
  'Capacidad para crecer contigo, desde el lote piloto hasta el volumen industrial.': 'Ability to grow with you, from the pilot batch to industrial volume.',
  'Garantía en alta palatabilidad': 'Guaranteed high palatability',
  'Desarrollos formulados para máxima aceptación — que les encante de verdad.': 'Developments formulated for maximum acceptance — that they truly love.',
  '¿Listo para crear tu producto?': 'Ready to create your product?',
  'Cuéntanos tu idea. En 24 horas te respondemos con una propuesta técnica inicial sin costo.':
    'Tell us your idea. Within 24 hours we\'ll reply with an initial technical proposal at no cost.',
  'Cotizar proyecto': 'Quote project',
  'WhatsApp directo': 'Direct WhatsApp',

  // ── Contacto ──
  'Cotiza tu Proyecto B2B': 'Quote your B2B Project',
  'Cuéntanos tu': 'Tell us your',
  'idea de marca': 'brand idea',
  'Atendemos emprendedores, marcas consolidadas y grandes compañías. En 24 horas hábiles te enviamos una propuesta técnica inicial sin costo.':
    'We serve entrepreneurs, established brands and large companies. Within 24 business hours we\'ll send you an initial technical proposal at no cost.',
  'Información de contacto': 'Contact information',
  'Dirección': 'Address',
  'Teléfonos': 'Phones',
  'Email': 'Email',
  'Horario': 'Hours',
  'Móvil: 320 675 53 06\nFijo: 604 582 5989': 'Mobile: 320 675 53 06\nLandline: 604 582 5989',
  'Lunes a Viernes: 8:00am – 4:00pm\nSábado: 8:00am – 1:00pm': 'Monday to Friday: 8:00am – 4:00pm\nSaturday: 8:00am – 1:00pm',
  'Carrera 57 # 24–23\nMedellín, Antioquia, Colombia': 'Carrera 57 # 24–23\nMedellín, Antioquia, Colombia',
  'Escríbenos por WhatsApp': 'Message us on WhatsApp',
  'Respuesta inmediata · 320 675 53 06': 'Instant reply · 320 675 53 06',
  '¡Mensaje enviado!': 'Message sent!',
  'Te responderemos en menos de 24 horas hábiles.': 'We\'ll get back to you within 24 business hours.',
  'Enviar otro mensaje': 'Send another message',
  'Cotiza tu proyecto': 'Quote your project',
  'Completa el formulario y te enviamos una propuesta técnica en 24 horas hábiles.':
    'Fill out the form and we\'ll send you a technical proposal within 24 business hours.',
  'Nombre *': 'Name *',
  'Tu nombre': 'Your name',
  'Email *': 'Email *',
  'Teléfono': 'Phone',
  'Empresa / Marca': 'Company / Brand',
  'Tu empresa': 'Your company',
  'Asunto *': 'Subject *',
  'Selecciona un asunto': 'Select a subject',
  'Co-desarrollo de fórmula nueva': 'New formula co-development',
  'Maquila con registro ICA': 'Manufacturing with ICA registration',
  'Asesoría técnica / nutricional': 'Technical / nutritional advisory',
  'Cotización de proyecto': 'Project quote',
  'Otro': 'Other',
  'Especie de interés': 'Species of interest',
  'Seleccionar': 'Select',
  'Varias especies': 'Various species',
  'Formato deseado': 'Desired format',
  'Bits / Galletas': 'Bits / Cookies',
  'Polvos solubles': 'Soluble powders',
  'Cremosos / Pastas': 'Creams / Pastes',
  'Peletizados / Extrusión': 'Pellets / Extrusion',
  'Aún no definido': 'Not defined yet',
  '🐔 Aves': '🐔 Poultry',
  '🐕 Caninos': '🐕 Dogs',
  '🐷 Cerdos': '🐷 Pigs',
  '🐰 Conejos': '🐰 Rabbits',
  '🐴 Equinos': '🐴 Horses',
  '🐈 Felinos': '🐈 Cats',
  '🐹 Roedores': '🐹 Rodents',
  '🐄 Rumiantes': '🐄 Ruminants',
  '🦴 Bits / Galletas': '🦴 Bits / Cookies',
  '🌿 Polvos solubles': '🌿 Soluble powders',
  '🥄 Cremosos / Pastas': '🥄 Creams / Pastes',
  '⚙️ Peletizados / Extrusión': '⚙️ Pellets / Extrusion',
  'Volumen estimado del proyecto': 'Estimated project volume',
  '100 – 300 kg por lote': '100 – 300 kg per batch',
  '300 – 500 kg por lote': '300 – 500 kg per batch',
  '500 kg – 1 tonelada por lote': '500 kg – 1 ton per batch',
  'Más de 1 tonelada por lote': 'More than 1 ton per batch',
  'Pedido mínimo:': 'Minimum order:',
  '100 kg por orden de compra': '100 kg per purchase order',
  'Mensaje *': 'Message *',
  'Cuéntanos sobre tu proyecto o consulta...': 'Tell us about your project or inquiry...',
  'Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escríbenos por WhatsApp.':
    'There was an error sending the message. Please try again or message us on WhatsApp.',
  'Enviando...': 'Sending...',
  'Enviar mensaje': 'Send message',

  // ── Nosotros (quiénes-somos) ──
  'Nuestra Historia': 'Our Story',
  'Tu aliado en': 'Your partner in',
  'nutrición animal': 'animal nutrition',
  'Desde 2015 en Medellín, somos el laboratorio de desarrollo y la planta de manufactura que las marcas necesitan para lanzar productos de nutrición animal 99% naturales bajo su propia marca.':
    'Since 2015 in Medellín, we are the development lab and manufacturing plant that brands need to launch 99% natural animal nutrition products under their own brand.',
  'Misión': 'Mission',
  'Desarrollamos soluciones.': 'We develop solutions.',
  'Tú construyes la marca.': 'You build the brand.',
  'Cada fórmula co-desarrollada es propiedad exclusiva del cliente. Confidencialidad total garantizada desde el inicio.':
    'Every co-developed formula is the exclusive property of the client. Full confidentiality guaranteed from the start.',
  'Usamos materias primas 99% naturales de grado humano, plantas medicinales y extractos botánicos. Sin subproductos.':
    'We use 99% natural, human-grade raw materials, medicinal plants and botanical extracts. No by-products.',
  'Planta propia certificada BPM ICA en Medellín. Fabricación trazable, documentada y lista para registro ICA.':
    'Our own GMP ICA-certified plant in Medellín. Traceable, documented manufacturing, ready for ICA registration.',
  'Trabajar con nosotros': 'Work with us',
  'Ver servicios': 'View services',
  'Propiedad del Cliente': 'Client Ownership',
  'Cada fórmula co-desarrollada es 100% propiedad intelectual del cliente. Confidencialidad y exclusividad garantizadas desde el primer acuerdo.':
    'Every co-developed formula is 100% the client\'s intellectual property. Confidentiality and exclusivity guaranteed from the first agreement.',
  'Materias primas de grado humano, extractos botánicos y fitoterapéuticos. Sin subproductos de baja calidad, sin conservantes sintéticos.':
    'Human-grade raw materials, botanical and phytotherapeutic extracts. No low-quality by-products, no synthetic preservatives.',
  'Fabricación bajo Buenas Prácticas de Manufactura (BPMAA). Cada lote es documentado, trazable y entregado con certificado de análisis.':
    'Manufacturing under Good Manufacturing Practices (BPMAA). Every batch is documented, traceable and delivered with a certificate of analysis.',
  'Aliado, No Competidor': 'Partner, Not Competitor',
  'Zoovegetal no vende a granel ni compite con sus clientes. Nuestra razón de ser es el éxito del producto final del contratante.':
    'Zoovegetal does not sell in bulk or compete with its clients. Our reason for being is the success of the client\'s final product.',
  'Nuestro Equipo': 'Our Team',
  'Las personas detrás': 'The people behind',
  'de cada producto': 'every product',
  'Somos un equipo pequeño y apasionado. La transparencia comienza aquí.':
    'We are a small, passionate team. Transparency starts here.',
  'Fundador & Director': 'Founder & Director',
  'Nutrición Animal — Medellín': 'Animal Nutrition — Medellín',
  'Más de 9 años desarrollando fórmulas nutricionales con ingredientes de grado humano para mascotas. Fundó Zoovegetal con la visión de democratizar el acceso a alimentos premium para animales.':
    'Over 9 years developing nutritional formulas with human-grade ingredients for pets. Founded Zoovegetal with the vision of democratizing access to premium animal food.',
  'Equipo Técnico': 'Technical Team',
  'Formulación y Control de Calidad': 'Formulation & Quality Control',
  'Profesionales en nutrición, veterinaria y bromatología que garantizan que cada lote cumpla con los más altos estándares antes de salir de la planta.':
    'Professionals in nutrition, veterinary science and food science who ensure every batch meets the highest standards before leaving the plant.',
  'Equipo de Producción': 'Production Team',
  'Planta certificada BPM ICA': 'GMP ICA-certified plant',
  'Operarios capacitados en BPM con protocolos estrictos de higiene y manipulación. Cada turno documentado y trazable desde la materia prima hasta el producto terminado.':
    'GMP-trained operators with strict hygiene and handling protocols. Every shift documented and traceable from raw material to finished product.',
  'Ingredientes': 'Ingredients',
  'Solo ingredientes de': 'Only',
  'grado humano': 'human-grade ingredients',
  'Las mismas materias primas que se usan en alimentos para personas. Sin atajos.':
    'The same raw materials used in food for people. No shortcuts.',
  'Res': 'Beef',
  'Pollo': 'Chicken',
  'Cerdo': 'Pork',
  'Garbanzo': 'Chickpea',
  'Lenteja': 'Lentil',
  'Soya': 'Soy',
  'Animal': 'Animal',
  'Vegetal': 'Plant',
  'Proteína': 'Protein',
  'Vitaminas y Minerales': 'Vitamins & Minerals',
  'Extraídos de frutas y vegetales frescos para complementar la nutrición.':
    'Extracted from fresh fruits and vegetables to complement nutrition.',
  'Sin Conservantes Artificiales': 'No Artificial Preservatives',
  'Formulaciones limpias sin colorantes ni conservantes artificiales.':
    'Clean formulations with no artificial colorants or preservatives.',
  'Altamente Digestibles': 'Highly Digestible',
  'Fórmulas optimizadas para la máxima absorción de nutrientes.':
    'Formulas optimized for maximum nutrient absorption.',
  'Calidad Garantizada': 'Guaranteed Quality',
  'Certificaciones y estándares': 'Certifications & standards',
  'No es marketing. Es documentación verificable que protege a tu marca y a los animales.':
    'It\'s not marketing. It\'s verifiable documentation that protects your brand and the animals.',
  'Registro ICA': 'ICA Registration',
  'Certificación individual por cada producto fabricado': 'Individual certification for each manufactured product',
  'Buenas Prácticas de Manufactura — auditada anualmente': 'Good Manufacturing Practices — audited annually',
  'Análisis Microbiológico': 'Microbiological Analysis',
  'Control de calidad documentado por lote': 'Documented quality control per batch',
  'Análisis Bromatológico': 'Bromatological Analysis',
  'Composición nutricional certificada en laboratorio': 'Lab-certified nutritional composition',
  'Historia': 'History',
  'Nuestro camino': 'Our journey',
  'Fundación de Zoovegetal en Medellín, Antioquia.': 'Zoovegetal founded in Medellín, Antioquia.',
  'Obtención de la primera certificación BPM ICA.': 'Obtained the first GMP ICA certification.',
  'Expansión de líneas de producto a felinos y equinos.': 'Expanded product lines to cats and horses.',
  'Superamos los 50 productos desarrollados para marcas clientes.': 'Surpassed 50 products developed for client brands.',
  'Consolidación como referente de maquila de alimentos para mascotas en Colombia.':
    'Consolidated as a benchmark for pet food contract manufacturing in Colombia.',
  '¿Quieres crecer tu marca con nosotros?': 'Want to grow your brand with us?',
  'Somos el aliado que tu marca de alimentos para mascotas necesita.':
    'We are the partner your pet food brand needs.',

  // ── Blog / genéricos ──
  'Ver todos los artículos': 'See all articles',
  'Volver al blog': 'Back to the blog',
  'Publicado el': 'Published on',
  'Artículos': 'Articles',
  'Próximamente publicaremos contenido.': 'We\'ll be publishing content soon.',
  'Página no encontrada': 'Page not found',
  'Volver al inicio': 'Back to home',
  'Nutrición y bienestar': 'Nutrition & wellbeing',
  'animal': 'for animals',
  'Artículos, consejos y tendencias sobre nutrición animal escritos por nuestros expertos.':
    'Articles, tips and trends on animal nutrition written by our experts.',
  'Blog en construcción': 'Blog under construction',
  'Pronto publicaremos artículos sobre nutrición y bienestar animal.':
    'We\'ll soon publish articles on animal nutrition and wellbeing.',
  '✦ Artículo destacado': '✦ Featured article',
  'Leer artículo': 'Read article',
  'Leer': 'Read',
  'Por': 'By',
  'Compartir': 'Share',
  '¿Quieres desarrollar tu producto?': 'Want to develop your product?',
  'Hablemos de tu proyecto de maquila y co-desarrollo.': 'Let\'s talk about your manufacturing and co-development project.',
}

export function translate(locale: Locale, s: string): string {
  if (locale === 'en') return en[s] ?? morePages[s] ?? s
  return s
}
