/**
 * 社内ゴルフコンペ SPA ロジック
 * 全5タブ（要領、組み合わせ+ピン留め、コースガイド+アコーディオン、賞品、写真投稿）
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initAuth();
  initNavigation();
  renderRulesAndSchedule();
  initPairings();
  initCourseGuide();
  renderPrizes();
  initPhotoUpload();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ===================================================
   1. タブナビゲーション（全5タブ）
=================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    navItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    panels.forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = item.getAttribute('data-tab');
      activateTab(tabId);
    });
  });

  // 初期タブ
  activateTab('rules');
}

/* ===================================================
   2. タブ1：大会要領・スケジュール・ルール・注意事項
=================================================== */
function renderRulesAndSchedule() {
  const data = GOLF_APP_DATA;

  // 基本情報
  const infoContainer = document.getElementById('rules-info-content');
  if (infoContainer) {
    infoContainer.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-icon"><i data-lucide="info"></i></div>
          <h3>大会概要</h3>
        </div>
        <div style="font-size: 13px; line-height: 1.6; color: #374151;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1b5e20;">開催日時：</strong> ${data.info.date}
          </div>
          <div style="margin-bottom: 8px;">
            <strong style="color: #1b5e20;">開催場所：</strong> ${data.info.courseName}<br>
            <span style="font-size: 12px; color: #6b7280;">${data.info.address}</span>
          </div>
          <div style="margin-bottom: 8px;">
            <strong style="color: #1b5e20;">料金：</strong><br>
            ・${data.info.fee.playFee}<br>
            ・${data.info.fee.entryFee}
          </div>
          <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 8px; padding: 12px; margin-top: 10px;">
            <div style="font-weight: 700; font-size: 13px; color: #92400e; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="alert-triangle" style="width: 16px; height: 16px; color: #d97706;"></i>
              <span>服装についてお願い</span>
            </div>
            <div style="font-size: 12px; color: #78350f; line-height: 1.6; white-space: pre-line;">${data.info.dressCode}</div>
          </div>
        </div>
      </div>
    `;
  }

  // タイムライン
  const timelineContainer = document.getElementById('timeline-list');
  if (timelineContainer) {
    timelineContainer.innerHTML = data.schedule.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `).join('');
  }

  // ルール・注意事項
  const rulesContainer = document.getElementById('rules-list-content');
  if (rulesContainer) {
    const r = data.rules;
    rulesContainer.innerHTML = `
      <!-- 大会要領・競技形式 -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon"><i data-lucide="trophy"></i></div>
          <h3>大会要領（競技形式・順位決定）</h3>
        </div>
        <div style="margin-bottom: 12px;">
          ${r.formats.map(f => `
            <div style="margin-bottom: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px;">
              <div style="font-weight: 700; font-size: 13px; color: #1b5e20;">${f.title}</div>
              <div style="font-size: 12px; color: #334155; margin-top: 3px; line-height: 1.5; white-space: pre-line;">${f.text}</div>
            </div>
          `).join('')}
        </div>
        <div style="background: #f1f5f9; border-radius: 6px; padding: 10px; font-size: 11px; color: #475569; line-height: 1.5;">
          ${r.notes.map(n => `<div>${n}</div>`).join('')}
        </div>
      </div>

      <!-- 大会ルール（ローカル・ルール） -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon"><i data-lucide="scale"></i></div>
          <h3>大会ルール（ローカル・ルール）</h3>
        </div>
        <ul style="list-style: none; padding-left: 0; margin-bottom: 14px;">
          ${r.localRules.map(lr => `
            <li style="margin-bottom: 10px; font-size: 12px; line-height: 1.5;">
              <strong style="color: #1b5e20;">${lr.num}</strong>
              <span style="color: #1e293b;">${lr.text}</span>
            </li>
          `).join('')}
        </ul>

        <!-- 雨天特別ルール -->
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-top: 12px;">
          <div style="font-weight: 700; font-size: 13px; color: #166534; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="cloud-rain" style="width: 16px; height: 16px; color: #15803d;"></i>
            <span>【雨天の場合】雨の日の特別ルール</span>
          </div>
          ${r.rainRules.map(rr => `
            <div style="margin-bottom: 8px;">
              <div style="font-weight: 700; font-size: 11px; color: #166534;">${rr.area}</div>
              <ul style="list-style: none; padding-left: 6px; font-size: 11px; color: #1e293b; margin-top: 2px;">
                ${rr.items.map(it => `<li style="margin-bottom: 2px;">${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ニアピン・ドラコンホール -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon"><i data-lucide="target"></i></div>
          <h3>ニアピン・ドラコンホール</h3>
        </div>
        ${r.attractions.map(a => `
          <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 10px 12px; margin-bottom: 8px;">
            <div style="font-size: 13px; font-weight: 700; color: #92400e;">${a.title}</div>
            <div style="font-size: 14px; font-weight: 800; color: #b45309; margin: 4px 0;">${a.holes}</div>
            <div style="font-size: 11px; color: #78350f;">${a.tip}</div>
          </div>
        `).join('')}
      </div>

      <!-- プレー中の注意事項 -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon"><i data-lucide="alert-circle"></i></div>
          <h3>プレー中の注意事項</h3>
        </div>
        <ul style="list-style: none; padding-left: 0;">
          ${r.playPrecautions.map(p => `
            <li style="margin-bottom: 8px; font-size: 12px; line-height: 1.5; color: #1f2937;">
              ${p}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // 緊急連絡先（ワンタップ発信機能・余分な補足は削除し、電話番号を見やすく表示）
  const emergencyContainer = document.getElementById('emergency-contacts-list');
  if (emergencyContainer) {
    emergencyContainer.innerHTML = data.contacts.map(c => `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 11px; font-weight: 700; color: #1b5e20;">${c.role}</div>
          <div style="font-size: 14px; font-weight: 700; color: #111827; margin-top: 2px;">${c.name}</div>
        </div>
        <div style="font-size: 15px; font-weight: 800; color: #1b5e20; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 6px 12px; border-radius: 6px; letter-spacing: 0.05em;">
          ${c.tel}
        </div>
      </div>
    `).join('');
  }
}

/* ===================================================
   3. タブ2：組み合わせ（Pairings & Pin Feature）
=================================================== */
function initPairings() {
  const memberSelect = document.getElementById('pairing-member-select');
  const pinnedContainer = document.getElementById('pinned-group-container');
  const groupsList = document.getElementById('groups-list');
  const filterTabs = document.querySelectorAll('.pairings-filter-tab');

  let currentCourseFilter = 'all';
  let mySelectedName = localStorage.getItem('golf_my_name') || '';

  if (memberSelect) {
    memberSelect.innerHTML = `
      <option value="">▼ 自分の名前を選択（組を最上部に固定表示）</option>
      ${GOLF_APP_DATA.members.map(m => `
        <option value="${m.name}" ${m.name === mySelectedName ? 'selected' : ''}>
          ${m.name}（${m.dept}・${m.groupName}）
        </option>
      `).join('')}
    `;

    memberSelect.addEventListener('change', (e) => {
      mySelectedName = e.target.value;
      if (mySelectedName) {
        localStorage.setItem('golf_my_name', mySelectedName);
      } else {
        localStorage.removeItem('golf_my_name');
      }
      renderGroups();
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCourseFilter = tab.getAttribute('data-filter');
      renderGroups();
    });
  });

  function renderGroups() {
    let myGroup = null;
    if (mySelectedName) {
      myGroup = GOLF_APP_DATA.groups.find(g => 
        g.members.some(m => m.name === mySelectedName)
      );
    }

    if (pinnedContainer) {
      if (myGroup) {
        pinnedContainer.style.display = 'block';
        pinnedContainer.innerHTML = `
          <div class="pinned-section">
            <div class="pinned-badge">
              <i data-lucide="pin" style="width: 12px; height: 12px;"></i>
              <span>あなたの所属組</span>
            </div>
            ${renderSingleGroupCard(myGroup, true, mySelectedName)}
          </div>
        `;
      } else {
        pinnedContainer.style.display = 'none';
        pinnedContainer.innerHTML = '';
      }
    }

    if (groupsList) {
      const filteredGroups = GOLF_APP_DATA.groups.filter(g => {
        if (currentCourseFilter === 'all') return true;
        if (currentCourseFilter === 'east') return g.course.startsWith('東') || g.groupName.startsWith('東');
        if (currentCourseFilter === 'center') return g.course.startsWith('中') || g.groupName.startsWith('中');
        if (currentCourseFilter === 'west') return g.course.startsWith('西') || g.groupName.startsWith('西');
        return true;
      });

      // エチケットリーダー注意喚起バナー
      const bannerHtml = `
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 10px 12px; margin-bottom: 12px; font-size: 12px; color: #1e40af; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="info" style="width: 16px; height: 16px; flex-shrink: 0; color: #2563eb;"></i>
          <span><strong>※ エチケットリーダー：</strong>スコア入力忘れないようにフォローをお願いします。</span>
        </div>
      `;

      groupsList.innerHTML = bannerHtml + filteredGroups.map(g => {
        const isMyGroup = myGroup && g.groupName === myGroup.groupName;
        return renderSingleGroupCard(g, isMyGroup, mySelectedName);
      }).join('');
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function renderSingleGroupCard(g, isHighlight, myName) {
    return `
      <div class="group-card ${isHighlight ? 'is-highlight' : ''}">
        <div class="group-header">
          <div class="group-title">
            <i data-lucide="users" style="width: 18px; height: 18px; color: #1b5e20;"></i>
            <span>${g.groupName} 組</span>
            <span style="font-size: 11px; font-weight: normal; color: #64748b;">(${g.course})</span>
          </div>
          <div class="group-meta">
            <span class="cart-badge">カート ${g.cartNo}</span>
            <span class="time-badge">⏰ ${g.time} 発</span>
          </div>
        </div>
        <div class="member-list">
          ${g.members.map(m => {
            const isMe = m.name === myName;
            return `
              <div class="member-item ${isMe ? 'is-me' : ''}">
                <div class="member-name" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px;">
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <span>${m.name}</span>
                    ${isMe ? '<span style="font-size: 9px; background: #f59e0b; color: white; padding: 1px 4px; border-radius: 3px;">あなた</span>' : ''}
                  </div>
                  ${m.isLeader ? '<span style="background: #dc2626; color: #ffffff; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 3px; display: inline-block; margin-top: 1px;">エチケットリーダー</span>' : ''}
                </div>
                <div class="member-dept" style="margin-top: 4px;">${m.dept} / ${m.block}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderGroups();
}

/* ===================================================
   4. タブ3：コースガイド（Course Info & Accordion）
=================================================== */
function initCourseGuide() {
  const coursePills = document.querySelectorAll('.course-pill-tab');
  const courseDetailsContainer = document.getElementById('course-accordion-container');
  let currentCourseKey = 'east';

  coursePills.forEach(pill => {
    pill.addEventListener('click', () => {
      coursePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCourseKey = pill.getAttribute('data-course');
      renderCourseAccordion();
    });
  });

  function renderCourseAccordion() {
    if (!courseDetailsContainer) return;
    const courseData = GOLF_APP_DATA.courses[currentCourseKey];
    if (!courseData) return;

    // クイックホールナビゲーションボタン (No.1〜9)
    const quickNavHtml = `
      <div class="course-quick-nav">
        ${courseData.holes.map(h => `
          <button type="button" class="hole-quick-btn" data-target="hole-card-${currentCourseKey}-${h.hole}">
            No.${h.hole}
          </button>
        `).join('')}
      </div>
    `;

    // 全9ホールのカード生成（ユーザー指示画像 media_1789828818189.png 完全準拠）
    const cardsHtml = courseData.holes.map(h => {
      const attractionTag = h.attraction 
        ? `<div class="hole-attraction-tag">★${h.attraction}</div>` 
        : '';

      return `
        <div id="hole-card-${currentCourseKey}-${h.hole}" class="hole-card">
          <!-- 上段：ホール情報（左） ＆ コース全体像イラスト（右） -->
          <div class="hole-card-header-row">
            <div class="hole-card-meta">
              <span class="hole-course-badge">${courseData.shortName}</span>
              <div class="hole-card-label">HOLE</div>
              <div class="hole-card-num">No.${h.hole}</div>
              <div class="hole-card-spec">PAR ${h.par}</div>
              <div class="hole-card-spec">HDCP ${h.hdcp}</div>
              ${attractionTag}
            </div>
            <div class="hole-card-img-wrap">
              <img src="${h.imageUrl}" 
                   alt="${courseData.name} No.${h.hole} コース図" 
                   class="hole-layout-img zoomable-hole-img"
                   loading="lazy"
                   title="タップで拡大表示">
            </div>
          </div>


          <!-- 下段：ヤード数テーブル（Blue, White, Red） -->
          <table class="hole-yard-table">
            <tbody>
              <tr class="row-blue">
                <th>Blue</th>
                <td>${h.blue} yard</td>
              </tr>
              <tr class="row-white">
                <th>White</th>
                <td>${h.white} yard</td>
              </tr>
              <tr class="row-red">
                <th>Red</th>
                <td>${h.red} yard</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }).join('');

    courseDetailsContainer.innerHTML = quickNavHtml + cardsHtml;

    // クイックナビゲーションのクリックイベント（該当ホールへスムーズスクロール）
    const quickBtns = courseDetailsContainer.querySelectorAll('.hole-quick-btn');
    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          quickBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 画像タップで拡大モーダル表示
    const zoomableImgs = courseDetailsContainer.querySelectorAll('.zoomable-hole-img');
    zoomableImgs.forEach(img => {
      img.addEventListener('click', () => {
        openImageModal(img.src, img.alt);
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 画像拡大モーダル制御
  function openImageModal(src, alt) {
    let modal = document.getElementById('course-image-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'course-image-modal';
      modal.className = 'image-modal';
      modal.innerHTML = `
        <button type="button" class="image-modal-close" title="閉じる">&times;</button>
        <img src="" alt="" id="course-modal-img">
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('image-modal-close')) {
          modal.style.display = 'none';
        }
      });
    }

    const modalImg = document.getElementById('course-modal-img');
    if (modalImg) {
      modalImg.src = src;
      modalImg.alt = alt || 'コース図拡大';
    }
    modal.style.display = 'flex';
  }

  const facilitiesContainer = document.getElementById('facilities-info-list');
  if (facilitiesContainer) {
    facilitiesContainer.innerHTML = GOLF_APP_DATA.facilities.map(f => `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px; margin-bottom: 8px; font-size: 12px;">
        <div style="font-weight: 700; color: #1e293b; display: flex; align-items: center; gap: 4px;">
          <i data-lucide="coffee" style="width: 14px; height: 14px; color: #059669;"></i>
          <span>${f.name}</span>
        </div>
        <div style="color: #64748b; margin-top: 2px;">場所：${f.location}</div>
        <div style="color: #475569; font-size: 11px; margin-top: 2px;">${f.note}</div>
      </div>
    `).join('');
  }

  renderCourseAccordion();
}

/* ===================================================
   5. タブ4：賞品一覧（Prizes）
=================================================== */
function renderPrizes() {
  const prizesContainer = document.getElementById('prizes-list-container');
  if (!prizesContainer) return;

  prizesContainer.innerHTML = GOLF_APP_DATA.prizes.map((p, idx) => {
    const isTop = idx < 3;
    let badgeClass = 'badge-top';
    if (p.category.includes('アトラクション')) badgeClass = 'badge-attraction';
    if (p.category.includes('特別') || p.category.includes('団体')) badgeClass = 'badge-special';

    return `
      <div class="prize-card ${isTop ? 'is-top' : ''}">
        <div class="prize-icon-box">
          <i data-lucide="${getPrizeIcon(p.icon)}"></i>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
            <span class="prize-badge ${badgeClass}">${p.rank}</span>
            <span style="font-size: 10px; color: #64748b; background: #f1f5f9; padding: 1px 6px; border-radius: 4px;">${p.tag}</span>
          </div>
          <div style="font-size: 14px; font-weight: 700; color: #111827; margin: 4px 0 2px 0;">
            ${p.title}
          </div>
          <div style="font-size: 12px; color: #4b5563; line-height: 1.45;">
            ${p.desc}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getPrizeIcon(type) {
  const map = {
    beef: 'utensils',
    sparkles: 'sparkles',
    wine: 'wine',
    'circle-dot': 'disc',
    cake: 'gift',
    target: 'crosshair',
    soup: 'flame',
    zap: 'zap',
    crosshair: 'target',
    crown: 'crown',
    camera: 'camera',
    award: 'award'
  };
  return map[type] || 'gift';
}

/* ===================================================
   6. タブ5：📸 写真投稿（Photo Upload & GAS Integration）
=================================================== */
function initPhotoUpload() {
  const authorSelect = document.getElementById('photo-author-select');
  const fileInput = document.getElementById('photo-file-input');
  const dropzone = document.getElementById('photo-dropzone');
  const previewContainer = document.getElementById('photo-preview-container');
  const previewImg = document.getElementById('photo-preview-img');
  const removeBtn = document.getElementById('photo-remove-btn');
  const uploadBtn = document.getElementById('photo-upload-btn');
  const toast = document.getElementById('app-toast');

  let selectedFile = null;
  let base64Data = null;

  if (authorSelect) {
    authorSelect.innerHTML = `
      <option value="">▼ お名前を選択（自由記入も可）</option>
      ${GOLF_APP_DATA.members.map(m => `
        <option value="${m.name}">${m.name}（${m.dept}）</option>
      `).join('')}
    `;
    const savedName = localStorage.getItem('golf_my_name');
    if (savedName) {
      authorSelect.value = savedName;
    }
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      handleFileSelected(file);
    });
  }

  if (dropzone) {
    dropzone.addEventListener('click', () => {
      if (fileInput) fileInput.click();
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelected(e.dataTransfer.files[0]);
      }
    });
  }

  function handleFileSelected(file) {
    if (!file || !file.type.startsWith('image/')) {
      showToast('⚠️ 画像ファイルを選択してください');
      return;
    }

    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      base64Data = e.target.result;
      if (previewImg) previewImg.src = base64Data;
      if (previewContainer) previewContainer.style.display = 'block';
      if (dropzone) dropzone.style.display = 'none';
      if (uploadBtn) uploadBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetPhotoForm();
    });
  }

  function resetPhotoForm() {
    selectedFile = null;
    base64Data = null;
    if (fileInput) fileInput.value = '';
    if (previewImg) previewImg.src = '';
    if (previewContainer) previewContainer.style.display = 'none';
    if (dropzone) dropzone.style.display = 'flex';
    if (uploadBtn) uploadBtn.disabled = true;
  }

  if (uploadBtn) {
    uploadBtn.addEventListener('click', async () => {
      if (!selectedFile) {
        showToast('⚠️ 写真を選択してください');
        return;
      }

      const authorName = authorSelect ? (authorSelect.value || '匿名ゴルファー') : '参加者';

      uploadBtn.disabled = true;
      uploadBtn.innerHTML = `
        <div class="spinner"></div>
        <span>アップロード送信中...</span>
      `;

      try {
        const result = await uploadPhotoToGAS({
          uploaderName: authorName,
          filename: selectedFile.name,
          file: base64Data
        });

        showToast(result.message || '📸 写真のアップロードが完了しました！表彰式スライドに反映されます。');
        resetPhotoForm();
      } catch (err) {
        console.error('Upload Error:', err);
        showToast('❌ アップロードに失敗しました。電波の良い場所でお試しください。');
      } finally {
        uploadBtn.innerHTML = `
          <i data-lucide="upload-cloud"></i>
          <span>写真をアップロードする</span>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }
}

// GASのWebアプリURL（Googleドライブ保存用エンドポイント）
const GAS_UPLOAD_ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbzIsW5uRFvqU7wQ18OTtZPKaZXow5hzOULWlwwOtPTwBdGUJ3oleqpbsF_ekzKWzO_dOA/exec";

/**
 * GAS連携関数
 */
async function uploadPhotoToGAS(payload) {
  if (typeof GAS_UPLOAD_ENDPOINT_URL !== 'undefined' && GAS_UPLOAD_ENDPOINT_URL.trim() !== '') {
    const response = await fetch(GAS_UPLOAD_ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // モックモード（URL未設定時）
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    success: true,
    message: '📸 アップロード完了！表彰式スライドに反映されます。'
  };
}

/* ===================================================
   7. パスワード認証（個人情報保護・ロック機能）
=================================================== */
function initAuth() {
  const overlay = document.getElementById('auth-overlay');
  const card = document.getElementById('auth-card');
  const form = document.getElementById('auth-form');
  const input = document.getElementById('auth-password-input');
  const toggleBtn = document.getElementById('auth-toggle-pwd-btn');
  const eyeIcon = document.getElementById('auth-eye-icon');
  const errorMsg = document.getElementById('auth-error-msg');
  const rememberCheck = document.getElementById('auth-remember-check');
  const lockBtn = document.getElementById('btn-lock-app');

  if (!overlay || !form || !input) return;

  const correctPassword = (GOLF_APP_DATA.info.password || 'ytc2026').trim();

  const isAuthorized = 
    localStorage.getItem('golf_auth_passed') === 'true' ||
    sessionStorage.getItem('golf_auth_passed') === 'true';

  if (isAuthorized) {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
    setTimeout(() => {
      input.focus();
    }, 300);
  }

  const submitBtn = document.getElementById('auth-submit-btn');

  function handleUnlock(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 全角英数字・記号を半角に安全に変換（Unicodeエスケープ使用で文字化けゼロ）
    let raw = (input.value || '').trim();
    let entered = raw
      .replace(/[\uFF01-\uFF5E]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      })
      .replace(/\u3000/g, ' ')
      .trim()
      .toLowerCase();

    // 許容パスワード（大文字小文字・全角半角不問、2026/2024の誤入力にも柔軟に対応）
    const defaultPwd = (GOLF_APP_DATA.info.password || 'ytc2026').trim().toLowerCase();
    const validPasswords = [
      defaultPwd,
      'ytc2026',
      'ytc2024',
      'ytc20241019',
      'ytccup2026'
    ];

    if (validPasswords.includes(entered)) {
      if (errorMsg) errorMsg.classList.remove('show');

      if (rememberCheck && rememberCheck.checked) {
        localStorage.setItem('golf_auth_passed', 'true');
      } else {
        sessionStorage.setItem('golf_auth_passed', 'true');
      }

      overlay.classList.add('hidden');
      overlay.style.display = 'none';
      input.value = '';

      const toast = document.getElementById('app-toast');
      if (toast) {
        toast.textContent = '🔓 認証に成功しました。ごゆっくりご覧ください。';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }
    } else {
      if (errorMsg) errorMsg.classList.add('show');
      if (card) {
        card.classList.remove('shake');
        void card.offsetWidth;
        card.classList.add('shake');
      }
      input.select();
    }
  }

  form.addEventListener('submit', handleUnlock);
  if (submitBtn) {
    submitBtn.addEventListener('click', handleUnlock);
  }

  if (toggleBtn && eyeIcon) {
    toggleBtn.addEventListener('click', () => {
      const isPassword = input.getAttribute('type') === 'password';
      input.setAttribute('type', isPassword ? 'text' : 'password');
      eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      localStorage.removeItem('golf_auth_passed');
      sessionStorage.removeItem('golf_auth_passed');
      if (errorMsg) errorMsg.classList.remove('show');
      input.value = '';
      overlay.classList.remove('hidden');
      setTimeout(() => input.focus(), 200);

      const toast = document.getElementById('app-toast');
      if (toast) {
        toast.textContent = '🔒 画面をロックしました。';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
      }
    });
  }
}
