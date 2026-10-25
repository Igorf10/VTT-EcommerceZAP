/* Configurações da landing — altere aqui e a página inteira acompanha. */
window.VTT_CONFIG = {
  // WhatsApp: 55 + DDD + número, só dígitos
  whatsappNumero: '5521995779923',
  whatsappExibicao: '(21) 99577-9923',

  // Desconto aplicado no carrinho quando o cliente cola o cupom do cadastro
  descontoPercentual: 10,

  // Cadastro de 10% OFF (Leads) — continua no Google Apps Script + planilha (termina em /exec).
  // Enquanto estiver vazia, o cadastro é só simulado e aparece no console (F12).
  leadsUrl: 'https://script.google.com/macros/s/AKfycbyYh0gGfIpvCoVhTN5TfkyHiuf0kxEDViEwI0VE0s4udFxlhOuoMBEBAJm4WBD0sZNl3A/exec',

  // Gestor VTT no Supabase: produtos da vitrine e registro dos pedidos.
  // A publishable key pode ficar pública. NUNCA coloque aqui a secret key (sb_secret_...).
  supabaseUrl: 'https://cliqlclzctivckujpxzp.supabase.co',
  supabaseKey: 'sb_publishable__xO1r9qe_Rd60ylGl1QDfA_7YoGVR7A',

  // Redes sociais (botões na seção de vídeos e no rodapé)
  instagramUrl: 'https://www.instagram.com/vaniltotopteam/',
  tiktokUrl: 'https://www.tiktok.com/@vaniltoantunes',

  // Vídeos do TikTok no fim do site (até 3). Tocam sozinhos, sem som e em loop.
  // Cole o link COMPLETO de cada vídeo (com /video/ e o número), ex.:
  //   'https://www.tiktok.com/@vaniltoantunes/video/7412345678901234567'
  // (o link curto vm.tiktok.com/... não funciona: abra no navegador e copie o endereço completo)
  // Vazio = a seção mostra um convite para seguir o perfil.
  tiktokVideos: [
    'https://www.tiktok.com/@vaniltoantunes/video/7504782275192622342',
    'https://www.tiktok.com/@vaniltoantunes/video/7611584276693404936',
    'https://www.tiktok.com/@vaniltoantunes/video/7503182584487087415',
  ],

};
