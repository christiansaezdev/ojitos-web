import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { nombre, rut, email, telefono, direccion, motivo } = await req.json();

    if (!nombre || !rut || !email || !telefono || !direccion || !motivo) {
        return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const datosFormulario = `
        <table style="font-family: Arial, sans-serif; width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #6b21a8;">Nombre Completo</td><td style="padding: 8px;">${nombre}</td></tr>
            <tr style="background:#f9f5ff"><td style="padding: 8px; font-weight: bold; color: #6b21a8;">RUT</td><td style="padding: 8px;">${rut}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6b21a8;">Correo</td><td style="padding: 8px;">${email}</td></tr>
            <tr style="background:#f9f5ff"><td style="padding: 8px; font-weight: bold; color: #6b21a8;">Teléfono</td><td style="padding: 8px;">${telefono}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6b21a8;">Dirección</td><td style="padding: 8px;">${direccion}</td></tr>
            <tr style="background:#f9f5ff"><td style="padding: 8px; font-weight: bold; color: #6b21a8; vertical-align: top;">Motivo de ingreso</td><td style="padding: 8px;">${motivo}</td></tr>
        </table>
    `;

    // Correo a la ONG
    await transporter.sendMail({
        from: `"Sitio Web ONG Ojitos de Luz" <${process.env.EMAIL_USER}>`,
        to: 'ojitosdeluzong@gmail.com',
        subject: `Nueva solicitud de ingreso - ${nombre}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #6b21a8; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 22px;">Nueva Solicitud de Ingreso</h1>
                    <p style="color: #e9d5ff; margin: 8px 0 0;">ONG Ojitos de Luz</p>
                </div>
                <div style="padding: 24px; border: 1px solid #e9d5ff; border-top: none; border-radius: 0 0 12px 12px;">
                    <p style="color: #374151;">Se recibió una nueva solicitud de ingreso a la corporación:</p>
                    ${datosFormulario}
                    <p style="color: #6b7280; font-size: 13px; margin-top: 24px;">Este correo fue generado automáticamente desde el sitio web.</p>
                </div>
            </div>
        `,
    });

    // Correo de confirmación al solicitante
    await transporter.sendMail({
        from: `"ONG Ojitos de Luz" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Recibimos tu solicitud - ONG Ojitos de Luz',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #6b21a8; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 22px;">¡Gracias por tu solicitud!</h1>
                    <p style="color: #e9d5ff; margin: 8px 0 0;">ONG Ojitos de Luz</p>
                </div>
                <div style="padding: 24px; border: 1px solid #e9d5ff; border-top: none; border-radius: 0 0 12px 12px;">
                    <p style="color: #374151;">Hola <strong>${nombre}</strong>,</p>
                    <p style="color: #374151;">Recibimos tu solicitud de ingreso a la corporación. La directiva revisará tus datos y se pondrá en contacto contigo a la brevedad.</p>
                    <p style="color: #374151; margin-top: 16px;"><strong>Resumen de lo enviado:</strong></p>
                    ${datosFormulario}
                    <div style="background: #f9f5ff; border-left: 4px solid #6b21a8; padding: 16px; border-radius: 4px; margin-top: 24px;">
                        <p style="margin: 0; color: #374151; font-size: 14px;">Si tienes alguna consulta, escríbenos a <a href="mailto:ojitosdeluzong@gmail.com" style="color: #6b21a8;">ojitosdeluzong@gmail.com</a></p>
                    </div>
                    <p style="color: #6b7280; font-size: 13px; margin-top: 24px; text-align: center;">ONG Ojitos de Luz — Longaví, Chile</p>
                </div>
            </div>
        `,
    });

    return NextResponse.json({ success: true });
}
