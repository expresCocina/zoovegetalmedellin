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

export function translate(locale: Locale, s: string): string {
  if (locale === 'en') return en[s] ?? s
  return s
}
