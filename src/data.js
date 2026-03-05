import { imageData } from './imageData';

const whatsappDigits = '529971220256';
const phoneDigits = '9971220256';

export const siteData = {
  brand: {
    name: 'Polar Med',
    tagline: 'Salud integral',
    logo: {
      svg: imageData['logo-svg'],
      png: imageData['logo-png'],
      alt: 'Logo de Polar Med',
    },
    heroTrustText:
      'Atención profesional y cercana para acompañarte en cada etapa de tu bienestar y el de tu familia.',
    copyright: `© ${new Date().getFullYear()} Polar Med. Todos los derechos reservados.`,
  },
  ui: {
    menuOpen: 'Menú',
    menuClose: 'Cerrar',
    bullet: '•',
    whatsappShort: 'WA',
    facebookPrefix: 'Facebook',
    instagramPrefix: 'Instagram',
  },
  nav: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Horarios', href: '#horarios' },
      { label: 'Equipo', href: '#equipo' },
      { label: 'Ubicación', href: '#ubicacion' },
      { label: 'Contacto', href: '#contacto' },
    ],
    whatsappCta: 'Agendar por WhatsApp',
  },
  ctas: {
    whatsapp: 'Agendar por WhatsApp',
    call: 'Llamar',
    details: 'Ver detalles',
    howToGet: 'Cómo llegar',
  },
  contact: {
    address: 'Calle 42 x 29 y 31, Tzucacab',
    phoneLabel: '997-122-02-56',
    phoneHref: `tel:${phoneDigits}`,
    whatsappDigits,
    whatsappHref: `https://wa.me/${whatsappDigits}`,
    whatsappPrefill:
      'Hola, quiero agendar una cita en Polar Med.\nNombre: \nTel: \nServicio: \nMensaje: ',
    facebookLabel: 'Polar Med',
    facebookHref: 'https://www.facebook.com/share/1hhTgtE6m8/?mibextid=wwXIfr',
    instagramLabel: 'polarmed24',
    instagramHref: 'https://www.instagram.com/polarmed24?igsh=OTVkMDc4ZGF6dmN6',
    mapsQueryHref:
      'https://maps.app.goo.gl/hEUhMAh15ihF3Din7?g_st=ic',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Calle+42+x+29+y+31,+Tzucacab&output=embed',
  },
  services: {
    title: 'Servicios',
    subtitle: 'Atención integral para distintas necesidades de salud.',
    principal: [
      'Consulta Médica',
      'Servicios de enfermería',
      'Estudios de laboratorio',
      'Fisioterapia y Rehabilitación',
    ],
    detailTitle: 'Servicios a detalle',
    detailSubtitle: 'Selecciona una categoría para ver el detalle.',
    categories: [
      {
        id: 'consulta-medica',
        title: 'Consulta Médica',
        items: [
          'Consulta médica general',
          'Control prenatal',
          'Control de enfermedades crónicas (Diabetes Mellitus tipo 2, Hipertensión)',
          'Control y vigilancia del estado nutricional del niño',
          'Curaciones, suturas',
          'Consultas a domicilio',
          'Certificado médico',
          'Certificado de defunción',
          'Interpretación de resultados',
        ],
      },
      {
        id: 'enfermeria',
        title: 'Servicios de enfermería',
        items: [
          'Toma de signos vitales',
          'Aplicación de inyecciones (IM, IV, SC)',
          'Canalización y manejo de venoclisis',
          'Administración de medicamentos',
          'Colocación y retiro de sondas',
          'Nebulizaciones',
        ],
      },
      {
        id: 'laboratorio',
        title: 'Estudios de laboratorio',
        items: ['Toma de muestra'],
      },
      {
        id: 'fisioterapia',
        title: 'Fisioterapia y Rehabilitación',
        items: [
          'Valoración fisioterapéutica',
          'Rehabilitación musculoesquelética',
          'Terapia física postquirúrgica',
          'Rehabilitación por lesiones deportivas',
          'Ejercicios terapéuticos personalizados',
          'Rehabilitación neurológica básica',
          'Atención a adultos mayores',
        ],
      },
    ],
  },
  hours: {
    title: 'Horarios',
    subtitle: 'Consulta disponibilidad por servicio.',
    items: [
      {
        service: 'Consulta Médica',
        schedule: [
          'Lunes a viernes 8:00 am a 8:00 pm',
          'Sábado y domingo 8:00 am a 2:00 pm',
        ],
      },
      {
        service: 'Servicios de enfermería',
        schedule: [
          'Lunes a viernes 8:00 am a 8:00 pm',
          'Sábado y domingo 8:00 am a 2:00 pm',
        ],
      },
      {
        service: 'Estudios de laboratorio',
        schedule: ['Lunes a viernes 8:00 am a 10:00 am'],
      },
      {
        service: 'Fisioterapia y Rehabilitación',
        schedule: ['Jueves a sábado — Previo a cita'],
        highlight: 'Previo a cita',
      },
    ],
  },
  team: {
    title: 'Equipo',
    subtitle: 'Responsables por área de atención.',
    members: [
      {
        area: 'Consulta Médica',
        name: 'Dr. Braulio Rodolfo Argaez Hernández',
      },
      {
        area: 'Servicios de enfermería',
        name: 'L.E Jenifer Estrella Pool Ojeda',
      },
      {
        area: 'Estudios de laboratorio',
        name: 'QFB David Orlando Cetz Paz',
      },
      {
        area: 'Fisioterapia y rehabilitación',
        name: 'LFR Deyvid León Dzul',
      },
    ],
  },
  location: {
    title: 'Ubicación',
    subtitle: 'Encuéntranos en:',
  },
  contactSection: {
    title: 'Contacto',
    subtitle: 'Estamos listos para ayudarte a agendar.',
    cards: [
      { type: 'Teléfono', value: '997-122-02-56', href: `tel:${phoneDigits}` },
      { type: 'WhatsApp', value: 'Agendar por WhatsApp', href: `https://wa.me/${whatsappDigits}` },
      {
        type: 'Facebook',
        value: 'Polar Med',
        href: 'https://www.facebook.com/share/1hhTgtE6m8/?mibextid=wwXIfr',
      },
      {
        type: 'Instagram',
        value: 'polarmed24',
        href: 'https://www.instagram.com/polarmed24?igsh=OTVkMDc4ZGF6dmN6',
      },
    ],
    form: {
      title: 'Formulario de contacto',
      fields: {
        name: 'Nombre',
        phone: 'Teléfono',
        service: 'Servicio de interés',
        message: 'Mensaje',
      },
      placeholders: {
        name: 'Tu nombre',
        phone: 'Tu teléfono',
        service: 'Selecciona un servicio',
        message: 'Cuéntanos brevemente tu necesidad',
      },
      submit: 'Enviar por WhatsApp',
      whatsappTemplate: 'Hola, quiero agendar una cita en Polar Med.',
      whatsappName: 'Nombre',
      whatsappPhone: 'Tel',
      whatsappService: 'Servicio',
      whatsappMessage: 'Mensaje',
    },
  },
  testimonials: {
    title: 'Testimonios',
    items: [
      '“Excelente atención y seguimiento en cada visita.”',
      '“Instalaciones limpias y trato profesional.”',
      '“El proceso para agendar fue rápido y claro.”',
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cómo puedo agendar una cita?',
        answer: 'Puedes agendar por WhatsApp o llamar directamente al consultorio.',
      },
      {
        question: '¿Atienden fines de semana?',
        answer: 'Sí, algunos servicios cuentan con horario de sábado y domingo.',
      },
      {
        question: '¿La fisioterapia es con cita previa?',
        answer: 'Sí, la atención de fisioterapia y rehabilitación es previo a cita.',
      },
      {
        question: '¿Puedo solicitar consulta a domicilio?',
        answer: 'Sí, este servicio está disponible dentro de la categoría de consulta médica.',
      },
      {
        question: '¿Qué servicios de laboratorio ofrecen?',
        answer: 'Actualmente se realiza toma de muestra en el horario indicado.',
      },
      {
        question: '¿Dónde se ubica Polar Med?',
        answer: 'Nos encontramos en Calle 42 x 29 y 31, Tzucacab.',
      },
    ],
  },
  gallery: {
    title: 'Galería',
  },
  footer: {
    privacyNotice: 'Aviso de privacidad (placeholder)',
    credit: 'Página web diseñada por Chini Segovia',
  },
  images: {
    hero: imageData.hero,
    gallery: [
      imageData['gallery-1'],
      imageData['gallery-2'],
      imageData['gallery-3'],
      imageData['gallery-4'],
      imageData['gallery-5'],
      imageData['gallery-6'],
      imageData['gallery-7'],
      imageData['gallery-8'],
    ],
  },
};
