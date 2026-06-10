import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  species?: string
  format?: string
  volume?: string
}

function row(label: string, value: string | undefined, accent = false) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #f0f2f0; vertical-align: top; width: 38%;">
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; font-weight: 700;
          color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em;">${label}</span>
      </td>
      <td style="padding: 10px 0 10px 16px; border-bottom: 1px solid #f0f2f0; vertical-align: top;">
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px;
          color: ${accent ? '#063b05' : '#1f2937'}; font-weight: ${accent ? '700' : '400'};">${value}</span>
      </td>
    </tr>`
}

function buildHTML(d: ContactData): string {
  const hasProjectDetails = d.species || d.format || d.volume
  const waText = encodeURIComponent(`Hola ${d.name}, recibimos tu consulta sobre "${d.subject}". Te contactamos desde Zoovegetal.`)

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva solicitud — Zoovegetal</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:'Helvetica Neue',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f0;padding:32px 16px;">
<tr><td align="center">

  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

    <!-- ── HEADER ── -->
    <tr>
      <td style="background:linear-gradient(135deg,#021f01 0%,#063b05 60%,#0d5c0b 100%);
        border-radius:18px 18px 0 0;padding:36px 40px 24px;text-align:center;">

        <img src="https://zoovegetal.com/logo.svg" alt="Zoovegetal"
          width="180" height="36"
          style="display:inline-block;height:36px;width:auto;max-width:200px;" />

        <div style="height:2px;background:linear-gradient(90deg,transparent,#8cd02b,#f5a623,transparent);
          margin:20px 0 24px;"></div>

        <div style="display:inline-block;background:rgba(140,208,43,0.14);
          border:1px solid rgba(140,208,43,0.32);border-radius:100px;
          padding:6px 18px;">
          <span style="color:#9fd63a;font-size:11px;font-weight:700;
            letter-spacing:0.1em;text-transform:uppercase;">
            📩 Nueva solicitud de cotización B2B
          </span>
        </div>
      </td>
    </tr>

    <!-- ── TÍTULO ── -->
    <tr>
      <td style="background:#063b05;padding:0 40px 28px;text-align:center;">
        <h1 style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:22px;
          font-weight:900;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
          ${d.subject}
        </h1>
        <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.6);">
          Recibido el ${new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </p>
      </td>
    </tr>

    <!-- ── CUERPO ── -->
    <tr>
      <td style="background:#ffffff;padding:36px 40px;">

        <!-- Contacto -->
        <h2 style="margin:0 0 18px;font-size:13px;font-weight:700;color:#063b05;
          text-transform:uppercase;letter-spacing:0.1em;
          border-left:3px solid #8cd02b;padding-left:10px;">
          Datos del contacto
        </h2>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
          ${row('Nombre', d.name, true)}
          ${row('Email', `<a href="mailto:${d.email}" style="color:#063b05;text-decoration:none;">${d.email}</a>`)}
          ${row('Teléfono', d.phone ? `<a href="tel:${d.phone}" style="color:#063b05;text-decoration:none;">${d.phone}</a>` : undefined)}
          ${row('Empresa / Marca', d.company)}
        </table>

        ${hasProjectDetails ? `
        <!-- Detalles del proyecto -->
        <h2 style="margin:0 0 18px;font-size:13px;font-weight:700;color:#063b05;
          text-transform:uppercase;letter-spacing:0.1em;
          border-left:3px solid #f5a623;padding-left:10px;">
          Detalles del proyecto
        </h2>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
          ${row('Especie', d.species)}
          ${row('Formato', d.format)}
          ${row('Volumen estimado', d.volume)}
        </table>
        ` : ''}

        <!-- Mensaje -->
        <h2 style="margin:0 0 14px;font-size:13px;font-weight:700;color:#063b05;
          text-transform:uppercase;letter-spacing:0.1em;
          border-left:3px solid #8cd02b;padding-left:10px;">
          Mensaje
        </h2>
        <div style="background:#f8faf5;border:1px solid #e5ead8;border-radius:12px;
          padding:20px 24px;margin-bottom:32px;">
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;
            white-space:pre-wrap;">${d.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>

        <!-- CTAs -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="padding-bottom:12px;">
              <a href="mailto:${d.email}?subject=Re: ${encodeURIComponent(d.subject)}"
                style="display:inline-block;background:#063b05;color:#ffffff;
                font-family:'Helvetica Neue',Arial,sans-serif;font-weight:700;font-size:14px;
                text-decoration:none;padding:14px 32px;border-radius:100px;
                box-shadow:0 6px 20px rgba(6,59,5,0.3);">
                ✉️ &nbsp;Responder por email
              </a>
            </td>
          </tr>
          ${d.phone ? `
          <tr>
            <td align="center">
              <a href="https://wa.me/57${d.phone.replace(/\D/g,'')}?text=${waText}"
                target="_blank"
                style="display:inline-block;background:#25D366;color:#ffffff;
                font-family:'Helvetica Neue',Arial,sans-serif;font-weight:700;font-size:14px;
                text-decoration:none;padding:14px 32px;border-radius:100px;
                box-shadow:0 6px 20px rgba(37,211,102,0.3);">
                💬 &nbsp;Responder por WhatsApp
              </a>
            </td>
          </tr>` : ''}
        </table>

      </td>
    </tr>

    <!-- ── DIVISOR ── -->
    <tr>
      <td style="background:#ffffff;padding:0 40px;">
        <div style="height:1px;background:linear-gradient(90deg,transparent,#e5e7eb,transparent);"></div>
      </td>
    </tr>

    <!-- ── FOOTER ── -->
    <tr>
      <td style="background:#f8faf5;border-radius:0 0 18px 18px;padding:24px 40px;text-align:center;
        border:1px solid #e9ede5;border-top:none;">

        <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#063b05;">Zoovegetal SAS</p>
        <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">
          Carrera 57 # 24–23 · Medellín, Antioquia · Colombia
        </p>
        <p style="margin:0 0 16px;font-size:12px;color:#6b7280;">
          <a href="mailto:servicios@zoovegetal.com" style="color:#063b05;text-decoration:none;">
            servicios@zoovegetal.com
          </a>
          &nbsp;·&nbsp;
          <a href="tel:3206755306" style="color:#063b05;text-decoration:none;">
            320 675 53 06
          </a>
          &nbsp;·&nbsp;
          <a href="https://zoovegetal.com" style="color:#063b05;text-decoration:none;">
            zoovegetal.com
          </a>
        </p>

        <div style="display:inline-block;background:rgba(6,59,5,0.06);
          border-radius:100px;padding:5px 14px;">
          <span style="font-size:11px;color:#4b5563;font-weight:600;">
            ✅ Certificado BPM ICA · Fundada 2015 · Co-desarrollo &amp; Maquila
          </span>
        </div>

        <p style="margin:14px 0 0;font-size:11px;color:#9ca3af;">
          Este correo fue generado automáticamente desde el formulario de contacto de zoovegetal.com
        </p>
      </td>
    </tr>

  </table>
</td></tr>
</table>

</body>
</html>`
}

function buildClientHTML(d: ContactData): string {
  const firstName = d.name.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recibimos tu solicitud — Zoovegetal</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:'Helvetica Neue',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f0;padding:32px 16px;">
<tr><td align="center">
  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

    <!-- HEADER -->
    <tr>
      <td style="background:linear-gradient(135deg,#021f01 0%,#063b05 60%,#0d5c0b 100%);
        border-radius:18px 18px 0 0;padding:40px 40px 32px;text-align:center;">
        <img src="https://zoovegetal.com/logo.svg" alt="Zoovegetal"
          width="180" height="36"
          style="display:inline-block;height:36px;width:auto;max-width:200px;" />
        <div style="height:2px;background:linear-gradient(90deg,transparent,#8cd02b,#f5a623,transparent);
          margin:20px 0 24px;"></div>
        <h1 style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;
          font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
          ¡Hola, ${firstName}! 👋
        </h1>
        <p style="margin:10px 0 0;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.5;">
          Recibimos tu solicitud y ya estamos trabajando en ella.
        </p>
      </td>
    </tr>

    <!-- CUERPO -->
    <tr>
      <td style="background:#ffffff;padding:36px 40px;">

        <!-- Mensaje principal -->
        <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.75;">
          Gracias por contactarnos. Hemos recibido tu consulta sobre
          <strong style="color:#063b05;">${d.subject}</strong>
          ${d.company ? `para <strong style="color:#063b05;">${d.company}</strong>` : ''}.
        </p>

        <!-- Caja de confirmación -->
        <div style="background:linear-gradient(135deg,#f0f9e0,#eef8dc);border:1.5px solid rgba(126,200,35,0.3);
          border-radius:14px;padding:22px 24px;margin-bottom:28px;">
          <p style="margin:0 0 14px;font-size:13px;font-weight:700;color:#063b05;
            text-transform:uppercase;letter-spacing:0.08em;">
            ¿Qué sigue?
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="padding:6px 0;vertical-align:top;width:28px;">
                <span style="display:inline-block;width:22px;height:22px;background:#8cd02b;
                  border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#063b05;">1</span>
              </td>
              <td style="padding:6px 0 6px 10px;font-size:13px;color:#4b5563;line-height:1.5;">
                Nuestro equipo técnico revisará los detalles de tu proyecto
              </td>
            </tr>
            <tr>
              <td style="padding:6px 0;vertical-align:top;width:28px;">
                <span style="display:inline-block;width:22px;height:22px;background:#8cd02b;
                  border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#063b05;">2</span>
              </td>
              <td style="padding:6px 0 6px 10px;font-size:13px;color:#4b5563;line-height:1.5;">
                En <strong>menos de 24 horas hábiles</strong> te enviamos una propuesta técnica inicial
              </td>
            </tr>
            <tr>
              <td style="padding:6px 0;vertical-align:top;width:28px;">
                <span style="display:inline-block;width:22px;height:22px;background:#8cd02b;
                  border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#063b05;">3</span>
              </td>
              <td style="padding:6px 0 6px 10px;font-size:13px;color:#4b5563;line-height:1.5;">
                Agendamos una reunión para profundizar en tu proyecto de maquila
              </td>
            </tr>
          </table>
        </div>

        <!-- Resumen de lo enviado -->
        <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#6b7280;
          text-transform:uppercase;letter-spacing:0.08em;">
          Resumen de tu solicitud
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="border:1px solid #f0f2f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
          ${d.species ? `<tr style="background:#fafafa;">
            <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:700;width:40%;border-bottom:1px solid #f0f2f0;">ESPECIE</td>
            <td style="padding:10px 16px;font-size:13px;color:#1f2937;border-bottom:1px solid #f0f2f0;">${d.species}</td>
          </tr>` : ''}
          ${d.format ? `<tr>
            <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:700;width:40%;border-bottom:1px solid #f0f2f0;">FORMATO</td>
            <td style="padding:10px 16px;font-size:13px;color:#1f2937;border-bottom:1px solid #f0f2f0;">${d.format}</td>
          </tr>` : ''}
          ${d.volume ? `<tr style="background:#fafafa;">
            <td style="padding:10px 16px;font-size:12px;color:#6b7280;font-weight:700;width:40%;">VOLUMEN</td>
            <td style="padding:10px 16px;font-size:13px;color:#1f2937;">${d.volume}</td>
          </tr>` : ''}
        </table>

        <!-- CTA WhatsApp -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="padding-bottom:8px;">
              <p style="margin:0 0 16px;font-size:13px;color:#6b7280;text-align:center;">
                ¿Necesitas respuesta inmediata? Escríbenos directamente:
              </p>
              <a href="https://wa.me/573206755306?text=Hola,%20acabo%20de%20enviar%20un%20formulario%20sobre%20${encodeURIComponent(d.subject)}%20y%20quiero%20más%20información."
                target="_blank"
                style="display:inline-block;background:#25D366;color:#ffffff;
                font-family:'Helvetica Neue',Arial,sans-serif;font-weight:700;font-size:14px;
                text-decoration:none;padding:14px 32px;border-radius:100px;
                box-shadow:0 6px 20px rgba(37,211,102,0.3);">
                💬 &nbsp;Escríbenos por WhatsApp
              </a>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- DIVISOR -->
    <tr>
      <td style="background:#ffffff;padding:0 40px;">
        <div style="height:1px;background:linear-gradient(90deg,transparent,#e5e7eb,transparent);"></div>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="background:#f8faf5;border-radius:0 0 18px 18px;padding:24px 40px;text-align:center;
        border:1px solid #e9ede5;border-top:none;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#063b05;">Zoovegetal SAS</p>
        <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">
          Carrera 57 # 24–23 · Medellín, Antioquia · Colombia
        </p>
        <p style="margin:0 0 16px;font-size:12px;color:#6b7280;">
          <a href="mailto:servicios@zoovegetal.com" style="color:#063b05;text-decoration:none;">
            servicios@zoovegetal.com
          </a>
          &nbsp;·&nbsp;
          <a href="tel:3206755306" style="color:#063b05;text-decoration:none;">
            320 675 53 06
          </a>
          &nbsp;·&nbsp;
          <a href="https://zoovegetal.com" style="color:#063b05;text-decoration:none;">
            zoovegetal.com
          </a>
        </p>
        <div style="display:inline-block;background:rgba(6,59,5,0.06);
          border-radius:100px;padding:5px 14px;margin-bottom:12px;">
          <span style="font-size:11px;color:#4b5563;font-weight:600;">
            ✅ Certificado BPM ICA · Co-desarrollo &amp; Maquila · Medellín
          </span>
        </div>
        <p style="margin:8px 0 0;font-size:11px;color:#9ca3af;">
          Recibiste este correo porque enviaste una solicitud en zoovegetal.com
        </p>
      </td>
    </tr>

  </table>
</td></tr>
</table>

</body>
</html>`
}

export async function sendContactNotification(data: ContactData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY no configurada — correo no enviado')
    return
  }

  await Promise.all([
    // Notificación interna al equipo de Zoovegetal
    resend.emails.send({
      from: 'Zoovegetal Web <notificaciones@zoovegetal.com>',
      to: ['servicios@zoovegetal.com'],
      replyTo: data.email,
      subject: `[Web] ${data.subject} — ${data.name}${data.company ? ` · ${data.company}` : ''}`,
      html: buildHTML(data),
    }),
    // Confirmación profesional al cliente
    resend.emails.send({
      from: 'Zoovegetal <servicios@zoovegetal.com>',
      to: [data.email],
      replyTo: 'servicios@zoovegetal.com',
      subject: `Recibimos tu solicitud, ${data.name.split(' ')[0]} — Zoovegetal`,
      html: buildClientHTML(data),
    }),
  ])
}
