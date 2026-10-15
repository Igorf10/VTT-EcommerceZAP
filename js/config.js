/* Configurações da landing — altere aqui e a página inteira acompanha. */
window.VTT_CONFIG = {
  // WhatsApp: 55 + DDD + número, só dígitos
  whatsappNumero: '5521995779923',
  whatsappExibicao: '(21) 99577-9923',

  // Desconto aplicado no carrinho quando o cliente cola o cupom do cadastro
  descontoPercentual: 10,

  // Cadastro de 10% OFF (Leads) — continua no Google Apps Script + planilha (termina em /exec).
  // Enquanto estiver vazia, o cadastro é só simulado e aparece no console (F12).
  leadsUrl: 'https://script.google.com/macros/s/AKfycbyCMLCClUloXW-evdEigfkldmKqHp9oiPE3H7x_pWFJVA58z4uUIgATMyruv7A4nWF_Sw/exec',

  // Gestor VTT no Supabase: produtos da vitrine e registro dos pedidos.
  // A publishable key pode ficar pública. NUNCA coloque aqui a secret key (sb_secret_...).
  supabaseUrl: 'https://cliqlclzctivckujpxzp.supabase.co',
  supabaseKey: 'sb_publishable__xO1r9qe_Rd60ylGl1QDfA_7YoGVR7A',
};
