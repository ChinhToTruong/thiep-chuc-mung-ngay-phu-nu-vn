/**
 * THIỆP CHÚC MỪNG 20/10 - JAVASCRIPT LOGIC
 * Pure Client-Side Interactive Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // ===================================================================
  // PRESET WISHES DATABASE
  // ===================================================================
  const WISHES_DATABASE = {
    all: [
      "Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn xinh đẹp rạng rỡ, tràn ngập niềm vui, công việc thuận lợi và luôn được yêu thương chiều chuộng mỗi ngày!",
      "Chúc một nửa thế giới luôn tươi tắn như hoa ban mai, tự tin kiêu hãnh và đón nhận thật nhiều điều ngọt ngào, may mắn nhất trong ngày hôm nay!",
      "20/10 ngập tràn hoa tươi và quà tặng! Chúc bạn mãi giữ trọn nụ cười rạng ngời và nguồn năng lượng tích cực làm bừng sáng mọi nơi bạn đến."
    ],
    daughter: [
      "Chúc công chúa nhỏ của bố mẹ ngày 20/10 ngập tràn niềm vui! Chúc con gái luôn ngoan ngoãn, học giỏi, xinh xắn và luôn tự tin tỏa sáng theo cách của riêng con!",
      "Gửi con gái yêu ngàn lời thương mến! Hãy luôn là đóa hoa xinh đẹp, tươi vui và an nhiên. Bố mẹ sẽ luôn là bến đỗ bình yên chở che và đồng hành cùng con.",
      "Chúc thiên thần bé nhỏ ngày 20/10 thật hạnh phúc! Mau ăn chóng lớn, luôn giữ nụ cười trong veo và đón nhận muôn vàn may mắn trong cuộc sống nhé con yêu!"
    ],
    sister: [
      "Chúc chị em gái 20/10 tiền đầy túi, tình đầy tim, nhan sắc ngày càng thăng hạng và sớm đạt được mọi ước mơ đã ấp ủ bấy lâu nay nhé!",
      "20/10 chúc người chị/em gái tuyệt vời luôn vui vẻ, mua sắm không cần nhìn giá, luôn trẻ trung, yêu đời và có một ngày tràn ngập hoa cùng quà!",
      "Chúc cô em gái cưng ngày 20/10 đón nhận cơn mưa quà tặng! Học tập và công việc luôn hanh thông, lúc nào cũng đáng yêu và được cưng chiều hết mực!"
    ],
    mom: [
      "Kính chúc Mẹ yêu ngày 20/10 luôn dồi dào sức khỏe, an yên và ngập tràn tiếng cười. Cảm ơn Mẹ vì tất cả những hy sinh và tình yêu thương vô bờ bến dành cho gia đình!",
      "Mẹ là người phụ nữ tuyệt vời nhất trong cuộc đời con. Chúc Mẹ ngày 20/10 và 364 ngày còn lại trong năm luôn mạnh khỏe, thanh thản và hạnh phúc bên con cháu.",
      "Nhân ngày 20/10, chúng con chỉ mong Mẹ luôn nở nụ cười, bớt lo toan vất vả, sống vui khỏe an nhàn và mãi là điểm tựa ấm áp nhất của chúng con."
    ],
    lover: [
      "Chúc em yêu ngày 20/10 thật hạnh phúc! Cảm ơn em đã đến và mang lại sự ngọt ngào, dịu dàng cho cuộc sống của anh. Mãi yêu em hôm nay và mãi về sau!",
      "Gửi đến bà xã xinh đẹp nhất trần đời: Chúc em 20/10 ngập tràn nụ cười! Anh sẽ luôn là bờ vai vững chắc nhất để em an tâm tựa vào và mỉm cười mỗi ngày.",
      "Hôm nay là ngày tôn vinh em, và với anh mọi ngày đều như vậy. Chúc cô gái của anh luôn được nâng niu, yêu thương và ngập tràn những điều kỳ diệu!"
    ],
    colleague: [
      "Chúc các bóng hồng ngày 20/10 nhận được thật nhiều hoa, quà và lời chúc tốt đẹp nhất! Chúc chị em luôn xinh đẹp, tự tin và bứt phá thành công lớn trong sự nghiệp!",
      "Chúc người bạn đồng hành tuyệt vời ngày 20/10 ngập tràn niềm vui, KPI vượt chỉ tiêu, ví rủng rỉnh tiền và luôn giữ vững thần thái rạng rỡ đỉnh cao!",
      "Happy Vietnamese Women's Day 20/10! Chúc bạn luôn giữ vững năng lượng tích cực, công việc hanh thông và mỗi ngày đi làm đều là một ngày hạnh phúc!"
    ]
  };

  const FORTUNES_LIST = [
    "🌸 Quẻ báo: Hôm nay bạn là người phụ nữ xinh đẹp và may mắn nhất trần gian!",
    "💎 Bạn được tặng 1 ngày được cưng chiều 100%, không cần động tay việc nhà!",
    "💐 Sắp có một điều bất ngờ cực ngọt ngào đến từ người thương!",
    "✨ Chúc bạn tiền vào như nước, ví dày thêm và nụ cười luôn nở trên môi!",
    "💖 Bạn nhận được 1000 cái ôm ấm áp và lời chúc vạn sự cát tường!",
    "🍰 Hôm nay ăn bánh ngọt không béo, uống trà sữa không tăng cân!",
    "🍀 May mắn đang trên đường tìm đến bạn, chuẩn bị đón nhận nhé!"
  ];

  // Default state
  let currentCardData = {
    recipient: "Chị Em & Con Gái Yêu Quý",
    sender: "Người gửi giấu tên 💕",
    message: WISHES_DATABASE.all[0],
    role: "all",
    theme: "theme-rose-gold"
  };

  let isEnvelopeOpened = false;

  // DOM Elements
  const effectsCanvas = document.getElementById('effectsCanvas');
  const envelope = document.getElementById('envelope');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const waxSeal = document.getElementById('waxSeal');
  const replayEnvelopeBtn = document.getElementById('replayEnvelopeBtn');
  const customizeNowBtn = document.getElementById('customizeNowBtn');
  const closeCustomizerBtn = document.getElementById('closeCustomizerBtn');
  const switchModeBtn = document.getElementById('switchModeBtn');
  const previewCardBtn = document.getElementById('previewCardBtn');
  
  // Views
  const recipientExperienceView = document.getElementById('recipientExperienceView');
  const customizerView = document.getElementById('customizerView');
  const modeIcon = document.getElementById('modeIcon');
  const modeTooltip = document.getElementById('modeTooltip');

  // Displays in Envelope
  const cardRecipientName = document.getElementById('cardRecipientName');
  const cardMessageDisplay = document.getElementById('cardMessageDisplay');
  const cardSenderName = document.getElementById('cardSenderName');
  const envelopeToTag = document.getElementById('envelopeToTag');

  // Displays in Mini Preview
  const miniRecipient = document.getElementById('miniRecipient');
  const miniMessage = document.getElementById('miniMessage');
  const miniSender = document.getElementById('miniSender');

  // Inputs
  const recipientInput = document.getElementById('recipientInput');
  const messageInput = document.getElementById('messageInput');
  const senderInput = document.getElementById('senderInput');
  const charCount = document.getElementById('charCount');
  const clearRecipientBtn = document.getElementById('clearRecipientBtn');
  const roleSelector = document.getElementById('roleSelector');
  const wishesPresetList = document.getElementById('wishesPresetList');
  const randomWishBtn = document.getElementById('randomWishBtn');
  const themeSelector = document.getElementById('themeSelector');

  // Share & Save
  const shareUrlInput = document.getElementById('shareUrlInput');
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const shareZaloBtn = document.getElementById('shareZaloBtn');
  const shareMessengerBtn = document.getElementById('shareMessengerBtn');
  const downloadCardCanvasBtn = document.getElementById('downloadCardCanvasBtn');
  const saveImageBtn = document.getElementById('saveImageBtn');
  const toastMessage = document.getElementById('toastMessage');

  // Music & Effects
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicIcon = document.getElementById('musicIcon');
  const effectsToggleBtn = document.getElementById('effectsToggleBtn');
  const luckyFortuneBtn = document.getElementById('luckyFortuneBtn');
  const luckyFortuneText = document.getElementById('luckyFortuneText');

  // ===================================================================
  // 1. URL PARAMETERS PARSING & SHARING
  // ===================================================================
  function loadCardFromUrlParams() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('to')) {
      currentCardData.recipient = params.get('to').trim() || currentCardData.recipient;
    }
    if (params.has('from')) {
      currentCardData.sender = params.get('from').trim() || currentCardData.sender;
    }
    if (params.has('msg')) {
      currentCardData.message = params.get('msg').trim() || currentCardData.message;
    }
    if (params.has('role')) {
      const r = params.get('role').toLowerCase();
      if (WISHES_DATABASE[r]) currentCardData.role = r;
    }
    if (params.has('theme')) {
      currentCardData.theme = params.get('theme').trim() || currentCardData.theme;
    }

    applyTheme(currentCardData.theme);
    syncStateToInputs();
    syncStateToCardDisplays();
    updateShareUrl();

    // If opened directly with a customized card and 'open=1'
    if (params.get('open') === '1') {
      setTimeout(() => openEnvelope(), 600);
    }
  }

  function generateShareUrl() {
    // Tự động lấy đúng tên miền và đường dẫn hiện tại (ví dụ: https://username.github.io/repo-name/)
    const baseHref = window.location.href.split('?')[0].split('#')[0];
    const url = new URL(baseHref);
    url.searchParams.set('to', currentCardData.recipient);
    url.searchParams.set('from', currentCardData.sender);
    url.searchParams.set('msg', currentCardData.message);
    url.searchParams.set('role', currentCardData.role);
    url.searchParams.set('theme', currentCardData.theme);
    return url.toString();
  }

  function updateShareUrl() {
    const url = generateShareUrl();
    shareUrlInput.value = url;
  }

  // ===================================================================
  // 2. SYNCHRONIZATION & DISPLAY UPDATES
  // ===================================================================
  function syncStateToCardDisplays() {
    const rec = currentCardData.recipient || "Người Nhận Yêu Quý";
    const snd = currentCardData.sender || "Người Gửi 💕";
    const msg = currentCardData.message || "";

    // Envelope Card
    cardRecipientName.textContent = rec;
    cardSenderName.textContent = snd;
    cardMessageDisplay.textContent = msg;
    envelopeToTag.textContent = rec;

    // Mini Live Preview
    miniRecipient.textContent = rec;
    miniSender.textContent = snd;
    miniMessage.textContent = msg;
  }

  function syncStateToInputs() {
    recipientInput.value = currentCardData.recipient;
    senderInput.value = currentCardData.sender;
    messageInput.value = currentCardData.message;
    charCount.textContent = currentCardData.message.length;

    // Role selector chips
    document.querySelectorAll('.role-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.role === currentCardData.role);
    });

    // Theme selector
    document.querySelectorAll('.theme-choice').forEach(choice => {
      choice.classList.toggle('active', choice.dataset.theme === currentCardData.theme);
    });

    renderPresetWishes(currentCardData.role);
  }

  function applyTheme(themeClass) {
    document.body.className = themeClass;
    currentCardData.theme = themeClass;
    document.querySelectorAll('.theme-choice').forEach(choice => {
      choice.classList.toggle('active', choice.dataset.theme === themeClass);
    });
  }

  // ===================================================================
  // 3. PRESET WISHES RENDERING
  // ===================================================================
  function renderPresetWishes(roleKey) {
    wishesPresetList.innerHTML = '';
    const wishes = WISHES_DATABASE[roleKey] || WISHES_DATABASE.all;

    wishes.forEach((wishText) => {
      const item = document.createElement('div');
      item.className = 'wish-item';
      if (wishText.trim() === currentCardData.message.trim()) {
        item.classList.add('active');
      }
      item.textContent = wishText;

      item.addEventListener('click', () => {
        currentCardData.message = wishText;
        messageInput.value = wishText;
        charCount.textContent = wishText.length;
        syncStateToCardDisplays();
        updateShareUrl();

        document.querySelectorAll('.wish-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        showToast("Đã chọn lời chúc mẫu!");
      });

      wishesPresetList.appendChild(item);
    });
  }

  // ===================================================================
  // 4. EVENT LISTENERS - CUSTOMIZER FORM
  // ===================================================================
  recipientInput.addEventListener('input', (e) => {
    currentCardData.recipient = e.target.value.trim() || "Chị Em & Con Gái Yêu Quý";
    syncStateToCardDisplays();
    updateShareUrl();
  });

  clearRecipientBtn.addEventListener('click', () => {
    recipientInput.value = '';
    recipientInput.focus();
    currentCardData.recipient = "Người Nhận Yêu Quý";
    syncStateToCardDisplays();
    updateShareUrl();
  });

  messageInput.addEventListener('input', (e) => {
    currentCardData.message = e.target.value;
    charCount.textContent = e.target.value.length;
    syncStateToCardDisplays();
    updateShareUrl();
  });

  senderInput.addEventListener('input', (e) => {
    currentCardData.sender = e.target.value.trim() || "Người gửi giấu tên 💕";
    syncStateToCardDisplays();
    updateShareUrl();
  });

  // Role chips click
  roleSelector.addEventListener('click', (e) => {
    const chip = e.target.closest('.role-chip');
    if (!chip) return;
    const role = chip.dataset.role;
    currentCardData.role = role;

    document.querySelectorAll('.role-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    // Auto update suggested recipient placeholder / name if it's default
    const roleNames = {
      all: "Chị Em & Con Gái Yêu Quý",
      daughter: "Con Gái Rượu Của Bố Mẹ",
      sister: "Chị Gái / Em Gái Thân Yêu",
      mom: "Mẹ Kính Yêu Của Con",
      lover: "Em Yêu Xinh Đẹp Nhất",
      colleague: "Chị Em Phụ Nữ Đồng Nghiệp"
    };

    if (roleNames[role]) {
      recipientInput.placeholder = `Ví dụ: ${roleNames[role]}...`;
    }

    renderPresetWishes(role);

    // Pick first preset of this role automatically
    const firstWish = WISHES_DATABASE[role][0];
    currentCardData.message = firstWish;
    messageInput.value = firstWish;
    charCount.textContent = firstWish.length;
    syncStateToCardDisplays();
    updateShareUrl();
  });

  // Random wish button
  randomWishBtn.addEventListener('click', () => {
    const list = WISHES_DATABASE[currentCardData.role] || WISHES_DATABASE.all;
    const randomIndex = Math.floor(Math.random() * list.length);
    const chosen = list[randomIndex];

    currentCardData.message = chosen;
    messageInput.value = chosen;
    charCount.textContent = chosen.length;
    syncStateToCardDisplays();
    updateShareUrl();
    renderPresetWishes(currentCardData.role);
    showToast("🎲 Đã đổi ngẫu nhiên lời chúc!");
  });

  // Theme Choices
  themeSelector.addEventListener('click', (e) => {
    const choice = e.target.closest('.theme-choice');
    if (!choice) return;
    const theme = choice.dataset.theme;
    applyTheme(theme);
    updateShareUrl();
  });

  // ===================================================================
  // 5. VIEW TOGGLING (EXPERIENCE MODE VS STUDIO MODE)
  // ===================================================================
  function showView(viewName) {
    if (viewName === 'studio') {
      recipientExperienceView.classList.remove('active');
      customizerView.classList.add('active');
      modeIcon.textContent = '💌';
      modeTooltip.textContent = 'Quay lại xem thiệp';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      customizerView.classList.remove('active');
      recipientExperienceView.classList.add('active');
      modeIcon.textContent = '✏️';
      modeTooltip.textContent = 'Tự tạo thiệp mới';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  switchModeBtn.addEventListener('click', () => {
    if (recipientExperienceView.classList.contains('active')) {
      showView('studio');
    } else {
      showView('recipient');
    }
  });

  customizeNowBtn.addEventListener('click', () => showView('studio'));
  closeCustomizerBtn.addEventListener('click', () => showView('recipient'));
  previewCardBtn.addEventListener('click', () => {
    showView('recipient');
    if (!isEnvelopeOpened) {
      setTimeout(() => openEnvelope(), 300);
    }
  });

  // ===================================================================
  // 6. ENVELOPE OPEN / CLOSE INTERACTION
  // ===================================================================
  function openEnvelope() {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;
    envelopeWrapper.classList.add('opened');

    // Trigger flower explosion and sound
    burstPetals(window.innerWidth / 2, window.innerHeight / 2, 45);
    playMelodyNoteSound();

    showToast("✨ Chúc mừng ngày Phụ Nữ Việt Nam 20/10!");
  }

  function closeEnvelope() {
    isEnvelopeOpened = false;
    envelopeWrapper.classList.remove('opened');
    luckyFortuneText.textContent = '';
  }

  envelope.addEventListener('click', (e) => {
    // Only open if currently closed and not clicking interactive card inside
    if (!isEnvelopeOpened) {
      openEnvelope();
    }
  });

  waxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    openEnvelope();
  });

  replayEnvelopeBtn.addEventListener('click', () => {
    closeEnvelope();
    setTimeout(() => {
      openEnvelope();
    }, 600);
  });

  // Lucky draw in card
  luckyFortuneBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const randomIndex = Math.floor(Math.random() * FORTUNES_LIST.length);
    luckyFortuneText.textContent = FORTUNES_LIST[randomIndex];
    burstPetals(window.innerWidth / 2, window.innerHeight / 2, 20);
    playArpeggioNote();
  });

  // ===================================================================
  // 7. TOAST NOTIFICATION UTILITY
  // ===================================================================
  let toastTimer = null;
  function showToast(message) {
    toastMessage.textContent = message;
    toastMessage.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 3200);
  }

  // ===================================================================
  // 8. SHARE & COPY BUTTONS
  // ===================================================================
  copyLinkBtn.addEventListener('click', async () => {
    updateShareUrl();
    const url = shareUrlInput.value;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        shareUrlInput.select();
        document.execCommand('copy');
      }
      showToast("📋 Đã sao chép liên kết thiệp!");
    } catch (err) {
      showToast("Hãy chọn và sao chép thủ công liên kết trong ô nhé!");
    }
  });

  shareZaloBtn.addEventListener('click', () => {
    updateShareUrl();
    const url = encodeURIComponent(shareUrlInput.value);
    const zaloShareUrl = `https://zalo.me/share?url=${url}`;
    window.open(zaloShareUrl, '_blank', 'width=600,height=500');
  });

  shareMessengerBtn.addEventListener('click', () => {
    updateShareUrl();
    const url = encodeURIComponent(shareUrlInput.value);
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(fbShareUrl, '_blank', 'width=600,height=500');
  });

  // ===================================================================
  // 9. HIGH-QUALITY CARD IMAGE EXPORT VIA CANVAS
  // ===================================================================
  async function generateCardImage() {
    showToast("⏳ Đang kết xuất ảnh thiệp...");

    const exportCanvas = document.getElementById('exportCanvas');
    const ctx = exportCanvas.getContext('2d');

    // Canvas Dimensions for high-res card (1200 x 800)
    exportCanvas.width = 1200;
    exportCanvas.height = 800;

    // Load background image
    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.src = 'assets/card_floral_bg.jpg';

    bgImg.onload = () => {
      // Draw background
      ctx.drawImage(bgImg, 0, 0, exportCanvas.width, exportCanvas.height);

      // Draw elegant semi-transparent inner white box
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      const margin = 50;
      roundRect(ctx, margin, margin, exportCanvas.width - margin * 2, exportCanvas.height - margin * 2, 24);
      ctx.fill();

      // Golden border line
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 3;
      roundRect(ctx, margin + 12, margin + 12, exportCanvas.width - (margin + 12) * 2, exportCanvas.height - (margin + 12) * 2, 18);
      ctx.stroke();

      // Top Header Badge
      ctx.textAlign = 'center';
      ctx.fillStyle = '#c98860';
      ctx.font = 'bold 20px "Quicksand", sans-serif';
      ctx.fillText('HAPPY VIETNAMESE WOMEN\'S DAY', 600, 130);

      // 20 - 10 Date
      ctx.fillStyle = '#b82d5a';
      ctx.font = 'bold 50px "Playfair Display", serif';
      ctx.fillText('20  •  10', 600, 195);

      // "Thân gửi:"
      ctx.fillStyle = '#7a5059';
      ctx.font = 'italic 24px "Playfair Display", serif';
      ctx.fillText('Thân gửi:', 600, 245);

      // Recipient Name
      ctx.fillStyle = '#d84374';
      ctx.font = 'bold 52px "Dancing Script", cursive, Georgia';
      ctx.fillText(currentCardData.recipient, 600, 310);

      // Gold divider
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(450, 340);
      ctx.lineTo(750, 340);
      ctx.stroke();

      // Message wrap lines
      ctx.fillStyle = '#3d262a';
      ctx.font = '26px "Playfair Display", serif';
      const maxLineWidth = 900;
      const lineHeight = 42;
      wrapText(ctx, currentCardData.message, 600, 400, maxLineWidth, lineHeight);

      // Sender signature
      ctx.fillStyle = '#7a5059';
      ctx.font = 'italic 20px "Playfair Display", serif';
      ctx.fillText('Thương mến từ,', 600, 660);

      ctx.fillStyle = '#c98860';
      ctx.font = 'bold 36px "Dancing Script", cursive, Georgia';
      ctx.fillText(currentCardData.sender, 600, 710);

      // Export as PNG
      const dataUrl = exportCanvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      const safeName = currentCardData.recipient.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      downloadLink.download = `thiep-20-10-${safeName || 'chuc-mung'}.png`;
      downloadLink.href = dataUrl;
      downloadLink.click();

      showToast("✅ Đã tải ảnh thiệp chúc mừng về máy!");
    };

    bgImg.onerror = () => {
      showToast("Chưa thể kết xuất hình nền. Vui lòng thử lại!");
    };
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const paragraphs = text.split('\n');
    let currentY = y;

    for (let p = 0; p < paragraphs.length; p++) {
      const words = paragraphs[p].split(' ');
      let line = '';

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      currentY += lineHeight;
    }
  }

  downloadCardCanvasBtn.addEventListener('click', generateCardImage);
  saveImageBtn.addEventListener('click', generateCardImage);

  // ===================================================================
  // 10. BACKGROUND MUSIC BOX (PURE WEB AUDIO API - ZERO ASSETS)
  // ===================================================================
  let audioCtx = null;
  let isMusicPlaying = false;
  let musicInterval = null;

  // Gentle pentatonic music box notes (frequencies in Hz)
  const MELODY_NOTES = [
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    1046.50 // C6
  ];

  // Canon-inspired soothing chord progression
  const CHORD_SEQUENCE = [
    [523.25, 659.25, 783.99], // C major
    [392.00, 493.88, 587.33], // G major
    [440.00, 523.25, 659.25], // A minor
    [329.63, 392.00, 493.88], // E minor
    [349.23, 440.00, 523.25], // F major
    [523.25, 659.25, 783.99]  // C major
  ];

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playChime(freq, duration = 1.6, gainLevel = 0.08) {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  }

  function playMelodyNoteSound() {
    playChime(659.25, 1.2, 0.1);
    setTimeout(() => playChime(880.00, 1.5, 0.08), 160);
    setTimeout(() => playChime(1046.50, 1.8, 0.08), 320);
  }

  function playArpeggioNote() {
    playChime(783.99, 1.0, 0.1);
    setTimeout(() => playChime(1046.50, 1.4, 0.09), 140);
  }

  function startBackgroundMelody() {
    let step = 0;
    getAudioContext();
    isMusicPlaying = true;
    musicIcon.textContent = '⏸️';
    musicToggleBtn.classList.add('active');

    function playStep() {
      const chordIndex = Math.floor(step / 4) % CHORD_SEQUENCE.length;
      const chord = CHORD_SEQUENCE[chordIndex];
      const note = chord[step % chord.length];

      playChime(note, 2.0, 0.04);

      // Add soft higher chime occasionally
      if (step % 2 === 0) {
        const highNote = MELODY_NOTES[Math.floor(Math.random() * MELODY_NOTES.length)];
        setTimeout(() => playChime(highNote, 1.8, 0.025), 300);
      }

      step++;
    }

    playStep();
    musicInterval = setInterval(playStep, 650);
  }

  function stopBackgroundMelody() {
    isMusicPlaying = false;
    musicIcon.textContent = '🎵';
    musicToggleBtn.classList.remove('active');
    if (musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  musicToggleBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
      stopBackgroundMelody();
      showToast("🔇 Đã tắt nhạc nền");
    } else {
      startBackgroundMelody();
      showToast("🎶 Đang phát giai điệu nhẹ nhàng");
    }
  });

  // ===================================================================
  // 11. FALLING PETALS & SPARKLES PARTICLES SYSTEM
  // ===================================================================
  let isEffectsEnabled = true;
  let particles = [];
  const ctx = effectsCanvas.getContext('2d');

  function resizeCanvas() {
    effectsCanvas.width = window.innerWidth;
    effectsCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class PetalParticle {
    constructor(x, y, isBurst = false) {
      this.reset(x, y, isBurst);
    }

    reset(x, y, isBurst = false) {
      this.x = x !== undefined ? x : Math.random() * effectsCanvas.width;
      this.y = y !== undefined ? y : -20;
      this.size = Math.random() * 12 + 8;
      
      if (isBurst) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 3;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 2;
      } else {
        this.vx = Math.random() * 1.5 - 0.75;
        this.vy = Math.random() * 1.6 + 1.2;
      }

      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.04;
      this.swingSpeed = Math.random() * 0.02 + 0.01;
      this.swingAmplitude = Math.random() * 1.5 + 0.5;
      this.swingPhase = Math.random() * Math.PI * 2;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.decay = isBurst ? Math.random() * 0.008 + 0.005 : 0;

      // Color tints: Soft pink, rose petal, warm gold sparkle
      const colors = [
        'rgba(244, 114, 182, ',
        'rgba(251, 113, 133, ',
        'rgba(244, 63, 94, ',
        'rgba(253, 164, 175, ',
        'rgba(251, 191, 36, ' // gold
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.isHeart = Math.random() > 0.75;
    }

    update() {
      this.swingPhase += this.swingSpeed;
      this.x += this.vx + Math.sin(this.swingPhase) * this.swingAmplitude;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      if (this.decay > 0) {
        this.opacity -= this.decay;
      }

      // Recycle when falling past screen
      if (this.y > effectsCanvas.height + 30 || this.opacity <= 0) {
        if (this.decay > 0) {
          // burst particle vanishes
          return false;
        }
        this.reset();
      }
      return true;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `${this.colorBase}${this.opacity})`;

      if (this.isHeart) {
        // Draw tiny romantic heart
        ctx.beginPath();
        const s = this.size * 0.5;
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.2, s * 0.4, 0, s * 1.2);
        ctx.bezierCurveTo(s * 1.2, s * 0.4, s, -s * 0.6, 0, s * 0.3);
        ctx.fill();
      } else {
        // Draw delicate rose petal
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.7, this.size * 1.2, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Populate initial falling petals
  function initPetals() {
    particles = [];
    const count = window.innerWidth < 768 ? 20 : 35;
    for (let i = 0; i < count; i++) {
      const p = new PetalParticle();
      p.y = Math.random() * effectsCanvas.height;
      particles.push(p);
    }
  }

  function burstPetals(originX, originY, amount = 30) {
    if (!isEffectsEnabled) return;
    for (let i = 0; i < amount; i++) {
      particles.push(new PetalParticle(originX, originY, true));
    }
  }

  function animatePetals() {
    ctx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);

    if (isEffectsEnabled) {
      for (let i = particles.length - 1; i >= 0; i--) {
        const alive = particles[i].update();
        if (alive) {
          particles[i].draw(ctx);
        } else {
          particles.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(animatePetals);
  }

  effectsToggleBtn.addEventListener('click', () => {
    isEffectsEnabled = !isEffectsEnabled;
    effectsToggleBtn.classList.toggle('active', isEffectsEnabled);
    if (!isEffectsEnabled) {
      ctx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
      showToast("Đã tắt hiệu ứng hoa rơi");
    } else {
      initPetals();
      showToast("Đã bật hiệu ứng hoa rơi");
    }
  });

  // ===================================================================
  // 12. INITIALIZATION ON LOAD
  // ===================================================================
  initPetals();
  animatePetals();
  loadCardFromUrlParams();
});
