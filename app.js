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
  initPwaInstallBanner();

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
   5. タブ4：賞品一覧（Prizes & 賞品.xlsx 準拠）
=================================================== */
function renderPrizes() {
  const prizesContainer = document.getElementById('prizes-list-container');
  const filterTabs = document.querySelectorAll('.prize-filter-tab');
  if (!prizesContainer) return;

  let currentFilter = 'all';

  function displayPrizes() {
    const list = GOLF_APP_DATA.prizes.filter(p => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'アトラクション賞') {
        return p.category === 'アトラクション賞' || p.category === '対抗戦';
      }
      return p.category === currentFilter;
    });

    prizesContainer.innerHTML = list.map((p, idx) => {
      const isTop = p.highlight === true;
      let badgeClass = 'badge-top';
      if (p.category === 'アトラクション賞' || p.category === '対抗戦') badgeClass = 'badge-attraction';
      if (p.category === '参加賞') badgeClass = 'badge-special';

      // 詳細リスト（ドラコン・ニアピン等）
      const detailsHtml = p.details ? `
        <div style="margin-top: 8px; background: #f8fafc; border-radius: 6px; padding: 6px 10px; font-size: 11px; color: #475569; border: 1px solid #e2e8f0;">
          ${p.details.map(d => `<div style="display: flex; align-items: center; gap: 4px;"><span>・</span><span>${d}</span></div>`).join('')}
        </div>
      ` : '';

      // 部門長賞の全28賞内訳展開アコーディオン
      const deptsHtml = p.depts ? `
        <div style="margin-top: 8px;">
          <button type="button" class="btn-toggle-depts" style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; font-size: 11px; font-weight: 700; padding: 5px 10px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; width: 100%; justify-content: center;">
            <span>全28賞の協賛部門一覧を見る</span>
            <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
          </button>
          <div class="depts-grid" style="display: none; grid-template-columns: repeat(2, 1fr); gap: 4px; margin-top: 6px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px; font-size: 11px; color: #334155;">
            ${p.depts.map(dept => `<div style="padding: 2px 4px;">🏷️ ${dept}</div>`).join('')}
          </div>
        </div>
      ` : '';

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
            <div style="font-size: 14px; font-weight: 800; color: #111827; margin: 4px 0 2px 0; line-height: 1.35;">
              ${p.title}
            </div>
            <div style="font-size: 12px; color: #4b5563; line-height: 1.45;">
              ${p.desc}
            </div>
            ${detailsHtml}
            ${deptsHtml}
          </div>
        </div>
      `;
    }).join('');

    // 部門長アコーディオンのイベント登録
    prizesContainer.querySelectorAll('.btn-toggle-depts').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('i');
        const isOpen = content.style.display === 'grid';
        content.style.display = isOpen ? 'none' : 'grid';
        btn.querySelector('span').textContent = isOpen ? '全28賞の協賛部門一覧を見る' : '協賛部門一覧を閉じる';
        if (icon) {
          icon.setAttribute('data-lucide', isOpen ? 'chevron-down' : 'chevron-up');
        }
        if (window.lucide) window.lucide.createIcons();
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // フィルタータブ切り替え
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter');
      displayPrizes();
    });
  });

  // 初回描画
  displayPrizes();
}

function getPrizeIcon(type) {
  const map = {
    trophy: 'trophy',
    medal: 'medal',
    award: 'award',
    sparkles: 'sparkles',
    gift: 'gift',
    utensils: 'utensils',
    beer: 'beer',
    cake: 'cake',
    zap: 'zap',
    crosshair: 'crosshair'
  };
  return map[type] || 'gift';
}

/* ===================================================
   6. タブ5：写真投稿（複数選択・一括アップロード & GAS連携）
=================================================== */
function initPhotoUpload() {
  const authorSelect = document.getElementById('photo-author-select');
  const fileInput = document.getElementById('photo-file-input');
  const dropzone = document.getElementById('photo-dropzone');
  const previewContainer = document.getElementById('photo-preview-container');
  const previewGrid = document.getElementById('photo-preview-grid');
  const countBadge = document.getElementById('photo-count-badge');
  const clearAllBtn = document.getElementById('photo-clear-all-btn');
  const addMoreBtn = document.getElementById('photo-add-more-btn');
  const progressWrap = document.getElementById('photo-progress-wrap');
  const progressStatus = document.getElementById('photo-progress-status');
  const progressPercent = document.getElementById('photo-progress-percent');
  const progressBar = document.getElementById('photo-progress-bar');
  const uploadBtn = document.getElementById('photo-upload-btn');
  const uploadBtnText = document.getElementById('photo-upload-btn-text');
  const toast = document.getElementById('app-toast');

  let selectedFiles = []; // { id, name, dataUrl }

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
    authorSelect.addEventListener('change', () => {
      if (authorSelect.value) {
        localStorage.setItem('golf_my_name', authorSelect.value);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
      if (e.target.files && e.target.files.length > 0) {
        await handleFilesSelected(Array.from(e.target.files));
        fileInput.value = '';
      }
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

    dropzone.addEventListener('drop', async (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        await handleFilesSelected(Array.from(e.dataTransfer.files));
      }
    });
  }

  if (addMoreBtn) {
    addMoreBtn.addEventListener('click', () => {
      if (fileInput) fileInput.click();
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      resetPhotoForm();
    });
  }

  // 複数ファイルの読み込みと圧縮処理
  async function handleFilesSelected(files) {
    const validImages = files.filter(f => f.type.startsWith('image/'));
    if (validImages.length === 0) {
      showToast('⚠️ 画像ファイル（JPG, PNG, HEICなど）を選択してください');
      return;
    }

    if (uploadBtn) {
      uploadBtn.disabled = true;
      if (uploadBtnText) uploadBtnText.textContent = `写真処理中... (${validImages.length}枚)`;
    }

    for (const file of validImages) {
      try {
        const compressedBase64 = await compressImageFile(file, 1600, 0.85);
        selectedFiles.push({
          id: 'photo_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
          name: file.name,
          dataUrl: compressedBase64
        });
      } catch (err) {
        console.error('Image compression error:', err);
      }
    }

    renderPreviewGrid();
  }

  // プレビューグリッド描画
  function renderPreviewGrid() {
    if (!previewGrid) return;

    if (selectedFiles.length === 0) {
      if (previewContainer) previewContainer.style.display = 'none';
      if (dropzone) dropzone.style.display = 'flex';
      if (uploadBtn) {
        uploadBtn.disabled = true;
        if (uploadBtnText) uploadBtnText.textContent = '写真をアップロードする';
      }
      return;
    }

    if (previewContainer) previewContainer.style.display = 'block';
    if (dropzone) dropzone.style.display = 'none';
    if (countBadge) countBadge.textContent = `📸 ${selectedFiles.length}枚 選択中`;

    previewGrid.innerHTML = selectedFiles.map((item, idx) => `
      <div class="photo-grid-item" data-id="${item.id}">
        <img src="${item.dataUrl}" alt="プレビュー ${idx + 1}" class="photo-grid-thumb">
        <button type="button" class="photo-grid-remove-btn" data-id="${item.id}" title="削除">
          <i data-lucide="x" style="width: 14px; height: 14px;"></i>
        </button>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    // 削除ボタン
    previewGrid.querySelectorAll('.photo-grid-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const removeId = btn.getAttribute('data-id');
        selectedFiles = selectedFiles.filter(item => item.id !== removeId);
        renderPreviewGrid();
      });
    });

    if (uploadBtn) {
      uploadBtn.disabled = false;
      if (uploadBtnText) uploadBtnText.textContent = `選択した写真（${selectedFiles.length}枚）をアップロード`;
    }
  }

  function resetPhotoForm() {
    selectedFiles = [];
    if (fileInput) fileInput.value = '';
    if (previewGrid) previewGrid.innerHTML = '';
    if (previewContainer) previewContainer.style.display = 'none';
    if (dropzone) dropzone.style.display = 'flex';
    if (progressWrap) progressWrap.style.display = 'none';
    if (uploadBtn) {
      uploadBtn.disabled = true;
      if (uploadBtnText) uploadBtnText.textContent = '写真をアップロードする';
    }
  }

  // アップロード実行（1枚ずつ確実に逐次送信）
  if (uploadBtn) {
    uploadBtn.addEventListener('click', async () => {
      if (selectedFiles.length === 0) {
        showToast('⚠️ 写真を選択してください');
        return;
      }

      const authorName = authorSelect ? (authorSelect.value || '匿名ゴルファー') : '参加者';
      const totalCount = selectedFiles.length;

      uploadBtn.disabled = true;
      if (dropzone) dropzone.style.display = 'none';
      if (previewContainer) previewContainer.style.display = 'none';
      if (progressWrap) {
        progressWrap.style.display = 'block';
        if (progressBar) progressBar.style.width = '0%';
        if (progressPercent) progressPercent.textContent = '0%';
        if (progressStatus) progressStatus.textContent = `1 / ${totalCount} 枚目を送信中...`;
      }

      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < totalCount; i++) {
        const photo = selectedFiles[i];
        const currentNum = i + 1;

        if (progressStatus) {
          progressStatus.textContent = `${currentNum} / ${totalCount} 枚目を送信中...`;
        }

        try {
          await uploadPhotoToGAS({
            uploaderName: authorName,
            filename: photo.name,
            file: photo.dataUrl
          });
          successCount++;
        } catch (err) {
          console.error(`Upload error for photo ${currentNum}:`, err);
          failCount++;
        }

        const pct = Math.round((currentNum / totalCount) * 100);
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (progressPercent) progressPercent.textContent = `${pct}%`;
      }

      if (failCount === 0) {
        showToast(`🎉 ${successCount}枚の写真をすべてアップロードしました！表彰式スライドに反映されます。`);
        resetPhotoForm();
      } else if (successCount > 0) {
        showToast(`⚠️ ${successCount}枚をアップロードしましたが、${failCount}枚が失敗しました。電波の良い場所で再送してください。`);
        resetPhotoForm();
      } else {
        showToast('❌ アップロードに失敗しました。電波状況をご確認の上再度お試しください。');
        if (progressWrap) progressWrap.style.display = 'none';
        if (previewContainer) previewContainer.style.display = 'block';
        uploadBtn.disabled = false;
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/**
 * クライアントサイド画像軽量化（長辺1600px・JPEG品質0.85圧縮）
 */
function compressImageFile(file, maxDim = 1600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
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

    // 厳格照合：'ytc2026' のみ入場許可（全角・大文字は半角小文字に自動正規化）
    const correctPassword = (GOLF_APP_DATA.info.password || 'ytc2026').trim().toLowerCase();

    if (entered === correctPassword) {
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

      if (window.triggerPwaBanner) {
        setTimeout(window.triggerPwaBanner, 1000);
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

  const refreshBtn = document.getElementById('btn-refresh-app');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      const toast = document.getElementById('app-toast');
      if (toast) {
        toast.textContent = '🔄 最新情報を受信しています...';
        toast.classList.add('show');
      }
      setTimeout(() => {
        window.location.href = window.location.pathname + '?reload=' + Date.now();
      }, 400);
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

/* ===================================================
   10. PWA ホーム画面追加バナー制御
=================================================== */
let deferredPwaPrompt = null;

function initPwaInstallBanner() {
  const banner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const closeBtn = document.getElementById('pwa-close-btn');
  const descEl = document.getElementById('pwa-banner-desc');

  if (!banner || !installBtn || !closeBtn) return;

  // すでにホーム画面から全画面（スタンドアロン）で起動されている場合は表示しない
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;
  if (isStandalone) {
    banner.style.display = 'none';
    return;
  }

  // 閉じるボタンが押された記録がある場合はスキップ
  if (sessionStorage.getItem('golf_pwa_dismissed') === '1') {
    return;
  }

  function isAuthPassed() {
    return localStorage.getItem('golf_auth_passed') === 'true' ||
           sessionStorage.getItem('golf_auth_passed') === 'true';
  }

  function showBanner() {
    if (isStandalone) return;
    if (sessionStorage.getItem('golf_pwa_dismissed') === '1') return;
    banner.classList.add('show');
  }

  // アプリ側（認証直後など）から呼べるように公開
  window.triggerPwaBanner = showBanner;

  // デバイス・ブラウザ判定
  const ua = window.navigator.userAgent.toLowerCase();
  const isIos = /iphone|ipad|ipod/.test(ua);

  // iOS Safari用の案内文調整
  if (isIos && descEl) {
    descEl.innerHTML = '画面下の <i data-lucide="share" style="width: 13px; height: 13px; display: inline-block; vertical-align: -2px;"></i> ボタンから簡単に追加';
    if (window.lucide) window.lucide.createIcons();
  }

  // Android / PC Chrome: beforeinstallprompt イベント捕捉
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    if (isAuthPassed()) {
      showBanner();
    }
  });

  // すでに認証済みで開いた場合、少し待ってからバナー表示
  if (isAuthPassed()) {
    setTimeout(showBanner, 1200);
  }

  // 追加ボタンクリック時の動作
  installBtn.addEventListener('click', async () => {
    if (deferredPwaPrompt) {
      // Android / Chrome: ネイティブインストールプロンプトを起動
      deferredPwaPrompt.prompt();
      const { outcome } = await deferredPwaPrompt.userChoice;
      if (outcome === 'accepted') {
        banner.classList.remove('show');
      }
      deferredPwaPrompt = null;
    } else if (isIos) {
      // iOS Safari: 丁寧な手順案内モーダルを表示
      showIosInstallModal();
    } else {
      // その他のブラウザ: 案内表示
      alert('ブラウザメニュー（︙など）から「ホーム画面に追加」または「アプリをインストール」を選択してください。');
    }
  });

  // 閉じるボタン
  closeBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    sessionStorage.setItem('golf_pwa_dismissed', '1');
  });

  // iOS専用ガイドモーダル
  function showIosInstallModal() {
    const existing = document.getElementById('ios-guide-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'ios-guide-modal';
    modal.className = 'ios-guide-modal';
    modal.innerHTML = `
      <div class="ios-guide-card">
        <h3 class="ios-guide-title">
          <span>📲</span>
          <span>ホーム画面に追加する方法</span>
        </h3>
        <div class="ios-guide-steps">
          <div class="ios-guide-step-item">
            <span class="ios-guide-num">1</span>
            <div>Safari画面下部の <strong>共有ボタン</strong>（<i data-lucide="share" style="width: 15px; height: 15px; display: inline-block; vertical-align: -2px; color: #0284c7;"></i> 四角から上矢印）をタップします。</div>
          </div>
          <div class="ios-guide-step-item">
            <span class="ios-guide-num">2</span>
            <div>メニューを少し下へスクロールし、<strong>「ホーム画面に追加」</strong>（<i data-lucide="plus-square" style="width: 15px; height: 15px; display: inline-block; vertical-align: -2px;"></i>）をタップします。</div>
          </div>
          <div class="ios-guide-step-item">
            <span class="ios-guide-num">3</span>
            <div>画面右上の <strong>「追加」</strong> をタップすると、ホーム画面に専用アイコンが配置されます！</div>
          </div>
        </div>
        <button type="button" class="ios-guide-btn-close" id="ios-guide-close-btn">わかりました</button>
      </div>
    `;
    document.body.appendChild(modal);
    if (window.lucide) window.lucide.createIcons();

    document.getElementById('ios-guide-close-btn').addEventListener('click', () => {
      modal.remove();
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }
}

