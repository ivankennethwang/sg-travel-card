(function () {
  "use strict";

  // Cards in alphabetical order
  const CARDS = [
    {
      id: "amaze",
      name: "Amaze",
      type: "debit",
      network: "Mastercard",
      fx: "At reference rate",
      atmFee: "2%",
      atmLimit: "None",
      topupFee: "Free (PayNow etc.)",
      rewards: "0.5 InstaPoints per S$1",
      multiCurrency: true,
      currencies: "SGD, USD, EUR, GBP, AUD, JPY, CAD, CHF, NZD, THB, MYR",
      referral: {
        code: "gEXXro",
        url: "https://www.instarem.com/en-sg/amaze-card/",
      },
    },
    {
      id: "citi-rewards",
      name: "Amaze + Citi Rewards",
      type: "credit",
      network: "Mastercard",
      fx: "~1–2% markup",
      atmFee: "May apply",
      atmLimit: "Check T&Cs",
      topupFee: "N/A (credit)",
      rewards: "4 mpd",
      multiCurrency: false,
      referral: {
        code: "O419584192y",
        url: "https://www.citibank.com.sg/credit-cards/rewards/citi-rewards-card/",
      },
    },
    {
      id: "gxs",
      name: "GXS",
      type: "debit",
      network: "Mastercard",
      fx: "At reference rate",
      atmFee: "N/A",
      atmLimit: "No ATM withdrawals",
      topupFee: "Free (bank transfer)",
      rewards: "2% GrabRewards",
      multiCurrency: false,
      referral: { code: "IVAN509", url: "https://www.gxs.com.sg/" },
    },
    {
      id: "maribank",
      name: "Maribank",
      type: "debit",
      network: "Visa",
      fx: "At reference rate",
      atmFee: "N/A",
      atmLimit: "No overseas ATM",
      topupFee: "Free",
      rewards: "0.5% cashback",
      multiCurrency: false,
      referral: { code: "9NDP53PV", url: "https://www.maribank.sg/" },
    },
    {
      id: "maribank-credit",
      name: "Maribank",
      type: "credit",
      network: "Visa",
      fx: "At reference rate",
      atmFee: "N/A",
      atmLimit: "No overseas ATM",
      topupFee: "N/A (credit)",
      rewards: "1.5% cashback (S$1,500 eligible spend)",
      multiCurrency: false,
      topChoice: true,
      referral: { code: "9NDP53PV", url: "https://www.maribank.sg/" },
    },
    {
      id: "revolut",
      name: "Revolut",
      type: "debit",
      network: "Visa",
      fx: "1% on weekends",
      atmFee: "2% after free limit",
      atmLimit: "S$350/mo or 5 withdrawals",
      topupFee: "Free from SG bank; card 0.3–2%",
      rewards: "—",
      multiCurrency: true,
      currencies:
        "GBP, USD, AED, AUD, CAD, CHF, CZK, DKK, EUR, HKD, HUF, ILS, JPY, MXN, NOK, NZD, PLN, QAR, RON, SAR, SEK, SGD, THB, TRY, ZAR",
      referral: {
        code: "ivanke1k8v!FEB2-26-VR-SG",
        url: "https://revolut.com/referral/?referral-code=ivanke1k8v!FEB2-26-VR-SG&geo-redirect",
      },
    },
    {
      id: "trust-cashback",
      name: "Trust Cashback",
      type: "credit",
      network: "Visa",
      fx: "At reference rate",
      atmFee: "May apply",
      atmLimit: "Check T&Cs",
      topupFee: "N/A (credit)",
      rewards: "1% until 1 Mar 2026; 0.5% from 1 Mar 2026",
      multiCurrency: false,
      referral: { code: "ZVQWMN9H", url: "https://trustbank.sg/" },
    },
    {
      id: "trust-link",
      name: "Trust Link",
      type: "credit",
      network: "Visa",
      fx: "At reference rate",
      atmFee: "May apply",
      atmLimit: "Check T&Cs",
      topupFee: "N/A (credit)",
      rewards: "0.22% in Linkpoints",
      multiCurrency: false,
      referral: { code: "ZVQWMN9H", url: "https://trustbank.sg/" },
    },
    {
      id: "trust-link-debit",
      name: "Trust Link",
      type: "debit",
      network: "Visa",
      fx: "At reference rate",
      atmFee: "None",
      atmLimit: "Unlimited",
      topupFee: "Free",
      rewards: "0.22% in Linkpoints",
      multiCurrency: false,
      topChoice: true,
      referral: { code: "ZVQWMN9H", url: "https://trustbank.sg/" },
    },
    {
      id: "wise",
      name: "Wise",
      type: "debit",
      network: "Visa",
      fx: "~0.4%",
      atmFee: "1.75% after free limit",
      atmLimit: "S$350/mo free",
      topupFee: "PayNow/bank free; card from 0.43%",
      rewards: "—",
      multiCurrency: true,
      currencies:
        "AUD, CAD, CHF, CZK, DKK, EUR, GBP, HUF, JPY, NOK, NZD, PLN, RON, SEK, SGD, TRY, USD",
      referral: {
        code: "ihpc/ivanw85",
        url: "https://wise.com/invite/ihpc/ivanw85",
      },
    },
    {
      id: "youtrip",
      name: "YouTrip",
      type: "debit",
      network: "Mastercard",
      fx: "At reference rate",
      atmFee: "2% after free limit",
      atmLimit: "S$400/mo free",
      topupFee: "Free debit/PayNow; 1.5% Visa credit",
      rewards: "—",
      multiCurrency: true,
      currencies: "SGD, USD, EUR, GBP, JPY, HKD, AUD, NZD, CHF, SEK, MYR, THB",
      referral: {
        code: "3xWB/t49qvch4",
        url: "https://youtrip.onelink.me/3xWB/t49qvch4",
      },
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  function escapeHtml(str) {
    if (str == null) return "";
    const s = String(str);
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightSearch(text, searchLower) {
    if (text == null) text = "";
    const s = String(text);
    if (!searchLower) return escapeHtml(s);
    const lower = s.toLowerCase();
    let result = "";
    let pos = 0;
    let i;
    while ((i = lower.indexOf(searchLower, pos)) !== -1) {
      result +=
        escapeHtml(s.slice(pos, i)) +
        '<mark class="search-highlight">' +
        escapeHtml(s.slice(i, i + searchLower.length)) +
        "</mark>";
      pos = i + searchLower.length;
    }
    result += escapeHtml(s.slice(pos));
    return result;
  }

  function cardSearchableText(card) {
    const parts = [
      card.name,
      card.id,
      card.type,
      card.network,
      card.fx,
      card.atmFee,
      card.atmLimit,
      card.topupFee,
      card.rewards,
      card.currencies,
      card.referral?.code,
      card.referral?.url,
    ];
    return parts.filter(Boolean).join(" ");
  }

  function referralCellContent(card) {
    const ref = card.referral;
    if (!ref || !ref.url) return "—";
    const code = escapeHtml(ref.code);
    const codeAttr = ref.code.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    const url = escapeHtml(ref.url);
    const cardId = escapeHtml(card.id);
    const cardName = escapeHtml(card.name);
    const copyTitle = "Copy referral code";
    const copySvg =
      '<svg class="copy-ref-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    const copyBtn =
      '<button type="button" class="copy-ref-btn" title="' +
      copyTitle +
      '" aria-label="' +
      copyTitle +
      '" data-ref-code="' +
      codeAttr +
      '" data-card-id="' +
      cardId +
      '" data-card-name="' +
      cardName +
      '">' +
      copySvg +
      "</button>";
    return (
      '<span class="ref-code-cell">' +
      '<a href="' +
      url +
      '" target="_blank" rel="noopener noreferrer" class="referral-link" data-card-id="' +
      cardId +
      '" data-card-name="' +
      cardName +
      '">' +
      code +
      "</a>" +
      copyBtn +
      "</span>"
    );
  }

  function getTypeClass(type) {
    return type === "credit" ? "badge-credit" : "badge-debit";
  }

  function isFxReferenceRate(card) {
    const fx = (card.fx || "").toLowerCase();
    return fx.includes("reference rate");
  }

  function rowMatchesFilter(card, opts) {
    const {
      showDebit,
      showCredit,
      showMastercard,
      showVisa,
      refRateOnly,
      searchLower,
    } = opts;
    if (card.type === "debit" && !showDebit) return false;
    if (card.type === "credit" && !showCredit) return false;
    const network = (card.network || "").toLowerCase();
    if (network.includes("mastercard") && !showMastercard) return false;
    if (network.includes("visa") && !showVisa) return false;
    if (refRateOnly && !isFxReferenceRate(card)) return false;
    if (
      searchLower &&
      !cardSearchableText(card).toLowerCase().includes(searchLower)
    )
      return false;
    return true;
  }

  function getSourceAnchor(cardId) {
    if (
      cardId === "trust-cashback" ||
      cardId === "trust-link" ||
      cardId === "trust-link-debit"
    )
      return "trust";
    if (cardId === "maribank-credit") return "maribank";
    return cardId;
  }

  function isAtmNotShown(card) {
    if (card.type === "credit") return true;
    if (card.atmFee === "N/A") return true;
    return false;
  }

  function atmCellContent(card, value, searchLower, isLimitColumn) {
    if (!isAtmNotShown(card)) {
      const text = highlightSearch(value, searchLower);
      if (
        card.id === "trust-link-debit" &&
        value === "None" &&
        !isLimitColumn
      ) {
        return (
          text + '<sup><a href="#fn:trust-debit" class="fnref">3</a></sup>'
        );
      }
      return text;
    }
    if (
      card.type === "credit" &&
      !isLimitColumn &&
      card.id !== "maribank-credit"
    ) {
      const title =
        "Allowed but not advisable. Cash advance fees apply; advise not to use for ATM.";
      return (
        '<span class="atm-warning" title="' +
        title +
        '" aria-label="' +
        title +
        '">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>' +
        "</span>"
      );
    }
    const title = "ATM withdrawal not available";
    return (
      '<span class="atm-x" title="' +
      title +
      '" aria-label="' +
      title +
      '">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      "</span>"
    );
  }

  function rewardsCellContent(rewards, searchLower) {
    if (rewards && rewards !== "—")
      return highlightSearch(rewards, searchLower);
    return (
      '<span class="atm-x" title="No rewards" aria-label="No rewards">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      "</span>"
    );
  }

  const COLUMNS_CONFIG = [
    { id: "col-type", label: "Type" },
    { id: "col-network", label: "Network" },
    { id: "col-fx", label: "FX / Markup" },
    { id: "col-atm-fee", label: "ATM fee" },
    { id: "col-atm-limit", label: "ATM free limit" },
    { id: "col-rewards", label: "Rewards" },
    { id: "col-referral", label: "Ref Code" },
    { id: "col-notes", label: "Notes" },
  ];

  const CARD_DETAIL_COL_IDS = COLUMNS_CONFIG.map((c) => c.id);

  const COLUMNS_VISIBILITY_KEY = "sg-travel-columns";

  function getColumnVisibility() {
    try {
      const raw = localStorage.getItem(COLUMNS_VISIBILITY_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return typeof parsed === "object" && parsed !== null ? parsed : {};
    } catch {
      return {};
    }
  }

  function isColumnVisible(colId) {
    const vis = getColumnVisibility();
    return vis[colId] !== false;
  }

  function setColumnVisible(colId, visible) {
    const vis = getColumnVisibility();
    vis[colId] = visible;
    try {
      localStorage.setItem(COLUMNS_VISIBILITY_KEY, JSON.stringify(vis));
    } catch (_) {}
  }

  function applyColumnVisibility() {
    const table = document.getElementById("comparisonTable");
    if (!table) return;
    const vis = getColumnVisibility();
    COLUMNS_CONFIG.forEach(({ id }) => {
      const show = vis[id] !== false;
      table.querySelectorAll("th." + id + ", td." + id).forEach((el) => {
        el.classList.toggle("col-hidden", !show);
      });
    });
  }

  function getFilterOpts() {
    const showDebit = document.getElementById("filterDebit")?.checked ?? true;
    const showCredit = document.getElementById("filterCredit")?.checked ?? true;
    const showMastercard =
      document.getElementById("filterMastercard")?.checked ?? true;
    const showVisa = document.getElementById("filterVisa")?.checked ?? true;
    const refRateOnly =
      document.getElementById("filterRefRateOnly")?.checked ?? false;
    const searchLower = (document.getElementById("searchCards")?.value || "")
      .trim()
      .toLowerCase();
    return {
      showDebit,
      showCredit,
      showMastercard,
      showVisa,
      refRateOnly,
      searchLower,
    };
  }

  function getFilteredCards() {
    return CARDS.filter((card) => rowMatchesFilter(card, getFilterOpts()));
  }

  function renderTable() {
    const tbody = document.getElementById("tableBody");
    if (!tbody) return;
    const filterOpts = getFilterOpts();
    const searchLower = filterOpts.searchLower;

    tbody.innerHTML = CARDS.map((card) => {
      const visible = rowMatchesFilter(card, filterOpts);
      const rowClass =
        (visible ? "" : " hidden") + (card.topChoice ? " row-top-choice" : "");
      const topIcon = card.topChoice
        ? ' <span class="icon-top-choice" title="My personal favorite" aria-label="My personal favorite"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>'
        : "";
      const nameEsc = highlightSearch(card.name, searchLower);
      const nameEscAttr = escapeHtml(card.name);
      return (
        '<tr class="' +
        rowClass +
        '" data-card-id="' +
        escapeHtml(card.id) +
        '">' +
        '<td class="col-card">' +
        nameEsc +
        topIcon +
        ' <a href="sources/#' +
        getSourceAnchor(card.id) +
        '" class="card-source-link" title="Official sources for ' +
        nameEscAttr +
        '" aria-label="Official sources for ' +
        nameEscAttr +
        '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></a>' +
        "</td>" +
        '<td class="col-type"><span class="badge ' +
        getTypeClass(card.type) +
        '">' +
        highlightSearch(card.type, searchLower) +
        "</span></td>" +
        '<td class="col-network">' +
        highlightSearch(card.network || "—", searchLower) +
        "</td>" +
        '<td class="col-fx">' +
        highlightSearch(card.fx, searchLower) +
        "</td>" +
        '<td class="col-atm-fee">' +
        atmCellContent(card, card.atmFee, searchLower, false) +
        "</td>" +
        '<td class="col-atm-limit">' +
        atmCellContent(card, card.atmLimit, searchLower, true) +
        "</td>" +
        '<td class="col-rewards">' +
        rewardsCellContent(card.rewards, searchLower) +
        "</td>" +
        '<td class="col-referral">' +
        referralCellContent(card) +
        "</td>" +
        "</tr>"
      );
    }).join("");
  }

  function renderCardView() {
    const grid = document.getElementById("cardsGrid");
    if (!grid) return;
    const filterOpts = getFilterOpts();
    const cards = getFilteredCards();
    const sl = filterOpts.searchLower;
    grid.innerHTML = cards
      .map((card) => {
        const nameEsc = highlightSearch(card.name, sl);
        const nameEscAttr = escapeHtml(card.name);
        const topIcon = card.topChoice
          ? ' <span class="icon-top-choice" title="My personal favorite" aria-label="My personal favorite"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>'
          : "";
        const allRows = [
          [
            "Type",
            '<span class="badge ' +
              getTypeClass(card.type) +
              '">' +
              highlightSearch(card.type, sl) +
              "</span>",
          ],
          ["Network", highlightSearch(card.network || "—", sl)],
          ["FX / Markup", highlightSearch(card.fx, sl)],
          ["ATM fee", atmCellContent(card, card.atmFee, sl, false)],
          ["ATM free limit", atmCellContent(card, card.atmLimit, sl, true)],
          ["Rewards", rewardsCellContent(card.rewards, sl)],
          ["Ref Code", referralCellContent(card)],
        ];
        const rows = allRows
          .filter((_, i) => isColumnVisible(CARD_DETAIL_COL_IDS[i]))
          .map(([term, value]) => [term, value]);
        return (
          '<article class="card-item' +
          (card.topChoice ? " card-item-top-choice" : "") +
          '" data-card-id="' +
          escapeHtml(card.id) +
          '">' +
          '<div class="card-item-header">' +
          '<span class="card-item-name">' +
          nameEsc +
          topIcon +
          "</span>" +
          ' <a href="sources/#' +
          getSourceAnchor(card.id) +
          '" class="card-source-link" title="Official sources for ' +
          nameEscAttr +
          '" aria-label="Official sources for ' +
          nameEscAttr +
          '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></a>' +
          "</div>" +
          (rows.length
            ? '<dl class="card-item-details">' +
              rows
                .map(
                  ([term, value]) =>
                    "<dt>" + escapeHtml(term) + "</dt><dd>" + value + "</dd>",
                )
                .join("") +
              "</dl>"
            : "") +
          "</article>"
        );
      })
      .join("");
  }

  function renderColumnsDropdown() {
    const inner = document.getElementById("columnsDropdownInner");
    if (!inner) return;
    inner.innerHTML = COLUMNS_CONFIG.map(
      ({ id, label }) =>
        '<label class="columns-dropdown-item">' +
        '<input type="checkbox" data-col="' +
        escapeHtml(id) +
        '" ' +
        (isColumnVisible(id) ? "checked" : "") +
        "> " +
        escapeHtml(label) +
        "</label>",
    ).join("");
    inner.querySelectorAll("input[data-col]").forEach((cb) => {
      cb.addEventListener("change", () => {
        setColumnVisible(cb.getAttribute("data-col"), cb.checked);
        applyColumnVisibility();
        if (getStoredView() === "card") renderCardView();
      });
    });
  }

  function initColumnsPicker() {
    const toggle = document.getElementById("columnsToggle");
    const dropdown = document.getElementById("columnsDropdown");
    if (!toggle || !dropdown) return;
    renderColumnsDropdown();
    function closeColumns() {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openColumns() {
      document.getElementById("filterDropdown")?.classList.remove("is-open");
      document
        .getElementById("filterToggle")
        ?.setAttribute("aria-expanded", "false");
      renderColumnsDropdown();
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      setTimeout(() => document.addEventListener("click", closeColumnsOnce), 0);
    }
    function closeColumnsOnce() {
      document.removeEventListener("click", closeColumnsOnce);
      closeColumns();
    }
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (dropdown.classList.contains("is-open")) {
        closeColumns();
      } else {
        openColumns();
      }
    });
    dropdown.addEventListener("click", (e) => e.stopPropagation());
  }

  function initFilterPicker() {
    const toggle = document.getElementById("filterToggle");
    const dropdown = document.getElementById("filterDropdown");
    if (!toggle || !dropdown) return;
    function closeFilter() {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openFilter() {
      document.getElementById("columnsDropdown")?.classList.remove("is-open");
      document
        .getElementById("columnsToggle")
        ?.setAttribute("aria-expanded", "false");
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      setTimeout(() => document.addEventListener("click", closeFilterOnce), 0);
    }
    function closeFilterOnce() {
      document.removeEventListener("click", closeFilterOnce);
      closeFilter();
    }
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (dropdown.classList.contains("is-open")) {
        closeFilter();
      } else {
        openFilter();
      }
    });
    dropdown.addEventListener("click", (e) => e.stopPropagation());
  }

  function refreshContent() {
    renderTable();
    if (getStoredView() === "card") renderCardView();
  }

  function initFilters() {
    document
      .getElementById("filterDebit")
      ?.addEventListener("change", refreshContent);
    document
      .getElementById("filterCredit")
      ?.addEventListener("change", refreshContent);
    document
      .getElementById("filterMastercard")
      ?.addEventListener("change", refreshContent);
    document
      .getElementById("filterVisa")
      ?.addEventListener("change", refreshContent);
    document
      .getElementById("filterRefRateOnly")
      ?.addEventListener("change", refreshContent);
    const searchEl = document.getElementById("searchCards");
    if (searchEl) {
      searchEl.addEventListener("input", refreshContent);
    }
  }

  const THEME_KEY = "sg-travel-theme";
  const THEMES = ["light", "dark", "system"];

  function getStoredTheme() {
    try {
      const t = localStorage.getItem(THEME_KEY);
      return THEMES.includes(t) ? t : "system";
    } catch {
      return "system";
    }
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("data-theme", theme);
  }

  function cycleTheme() {
    const current = getStoredTheme();
    const next =
      current === "light" ? "dark" : current === "dark" ? "system" : "light";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (_) {}
    applyTheme(next);
  }

  function initTheme() {
    const theme = getStoredTheme();
    applyTheme(theme);
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        cycleTheme();
        toggle.blur();
      });
    }
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", () => {
        if (getStoredTheme() === "system") applyTheme("system");
      });
  }

  function initNavToggle() {
    const toggle = document.getElementById("navToggle");
    const header = document.querySelector(".site-header");
    const nav = document.getElementById("headerNav");
    if (!toggle || !header || !nav) return;
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  const VIEW_KEY = "sg-travel-view";
  const VIEWS = ["table", "card"];

  function getStoredView() {
    try {
      const v = localStorage.getItem(VIEW_KEY);
      return VIEWS.includes(v) ? v : "table";
    } catch {
      return "table";
    }
  }

  function updateColumnsButtonForView(view) {
    const btn = document.getElementById("columnsToggle");
    const dropdown = document.getElementById("columnsDropdown");
    if (!btn) return;
    const label = btn.querySelector(".columns-toggle-label");
    const isCard = view === "card";
    btn.setAttribute("data-context", isCard ? "card" : "table");
    if (label) label.textContent = isCard ? "Details" : "Columns";
    btn.setAttribute(
      "aria-label",
      isCard ? "Show or hide details" : "Show or hide columns",
    );
    btn.setAttribute(
      "title",
      isCard ? "Show or hide details" : "Show or hide columns",
    );
    if (dropdown)
      dropdown.setAttribute(
        "aria-label",
        isCard ? "Toggle details" : "Toggle columns",
      );
  }

  function applyView(view) {
    const tableWrap = document.getElementById("tableWrap");
    const cardsWrap = document.getElementById("cardsWrap");
    const toggle = document.getElementById("viewToggle");
    if (view === "card") {
      if (tableWrap) tableWrap.hidden = true;
      if (cardsWrap) {
        cardsWrap.hidden = false;
        renderCardView();
      }
    } else {
      if (tableWrap) tableWrap.hidden = false;
      if (cardsWrap) cardsWrap.hidden = true;
    }
    if (toggle) {
      toggle.setAttribute("data-view", view);
      toggle.setAttribute(
        "aria-label",
        view === "card" ? "Show table view" : "Show card view",
      );
    }
    updateColumnsButtonForView(view);
  }

  function toggleView() {
    const current = getStoredView();
    const next = current === "table" ? "card" : "table";
    try {
      localStorage.setItem(VIEW_KEY, next);
    } catch (_) {}
    applyView(next);
  }

  function initViewToggle() {
    const view = getStoredView();
    applyView(view);
    const toggle = document.getElementById("viewToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        toggleView();
        toggle.blur();
      });
    }
  }

  const LAYOUT_KEY = "sg-travel-layout";
  const LAYOUTS = ["centered", "full"];

  function getStoredLayout() {
    try {
      const l = localStorage.getItem(LAYOUT_KEY);
      return LAYOUTS.includes(l) ? l : "centered";
    } catch {
      return "centered";
    }
  }

  function applyLayout(layout) {
    const body = document.body;
    const toggle = document.getElementById("layoutToggle");
    if (layout === "full") {
      body.classList.add("layout-full");
    } else {
      body.classList.remove("layout-full");
    }
    if (toggle) toggle.setAttribute("data-layout", layout);
  }

  function toggleLayout() {
    const current = getStoredLayout();
    const next = current === "centered" ? "full" : "centered";
    try {
      localStorage.setItem(LAYOUT_KEY, next);
    } catch (_) {}
    applyLayout(next);
  }

  function initLayout() {
    const layout = getStoredLayout();
    applyLayout(layout);
    const toggle = document.getElementById("layoutToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        toggleLayout();
        toggle.blur();
      });
    }
  }

  function resetToDefault() {
    document.getElementById("filterDropdown")?.classList.remove("is-open");
    document
      .getElementById("filterToggle")
      ?.setAttribute("aria-expanded", "false");
    document.getElementById("columnsDropdown")?.classList.remove("is-open");
    document
      .getElementById("columnsToggle")
      ?.setAttribute("aria-expanded", "false");

    const debit = document.getElementById("filterDebit");
    const credit = document.getElementById("filterCredit");
    const mastercard = document.getElementById("filterMastercard");
    const visa = document.getElementById("filterVisa");
    const refRate = document.getElementById("filterRefRateOnly");
    const search = document.getElementById("searchCards");
    if (debit) debit.checked = true;
    if (credit) credit.checked = true;
    if (mastercard) mastercard.checked = true;
    if (visa) visa.checked = true;
    if (refRate) refRate.checked = false;
    if (search) search.value = "";

    try {
      localStorage.removeItem(COLUMNS_VISIBILITY_KEY);
      localStorage.setItem(LAYOUT_KEY, "centered");
      localStorage.setItem(VIEW_KEY, "table");
    } catch (_) {}

    applyLayout("centered");
    applyView("table");
    renderTable();
    applyColumnVisibility();
    renderColumnsDropdown();
  }

  function initReset() {
    document.getElementById("resetBtn")?.addEventListener("click", () => {
      resetToDefault();
      document.getElementById("resetBtn")?.blur();
    });
  }

  const DESKTOP_BREAKPOINT_PX = 768;

  function applyNavDesktopTooltips() {
    const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT_PX;
    document.querySelectorAll("[data-tooltip-desktop]").forEach((el) => {
      const text = el.getAttribute("data-tooltip-desktop");
      el.title = isDesktop && text ? text : "";
    });
  }

  function initNavDesktopTooltips() {
    applyNavDesktopTooltips();
    window.addEventListener("resize", applyNavDesktopTooltips);
  }

  function initCustomTooltips() {
    const TOOLTIP_SELECTOR =
      ".nav-link-cards, .nav-link-sources, .atm-warning, .atm-x, .card-source-link, .icon-top-choice";
    const SHOW_DELAY_MS = 200;
    const tooltipEl = document.createElement("div");
    tooltipEl.id = "customTooltip";
    tooltipEl.className = "custom-tooltip";
    tooltipEl.setAttribute("role", "tooltip");
    tooltipEl.setAttribute("aria-hidden", "true");
    document.body.appendChild(tooltipEl);

    let showTimer = null;
    let currentTrigger = null;
    let savedTitle = null;

    function show(trigger) {
      currentTrigger = trigger;
      const text =
        trigger.getAttribute("title") ||
        trigger.getAttribute("data-tooltip") ||
        "";
      if (!text) return;
      savedTitle = trigger.getAttribute("title");
      if (savedTitle) trigger.removeAttribute("title");
      tooltipEl.textContent = text;
      tooltipEl.setAttribute("aria-hidden", "false");
      tooltipEl.classList.add("is-visible");
      position(trigger);
    }

    function position(trigger) {
      const rect = trigger.getBoundingClientRect();
      const tipRect = tooltipEl.getBoundingClientRect();
      const padding = 8;
      const gap = 8;
      let x = rect.left + rect.width / 2;
      let y = rect.bottom + gap;
      x = Math.max(
        padding + tipRect.width / 2,
        Math.min(window.innerWidth - padding - tipRect.width / 2, x),
      );
      if (y + tipRect.height > window.innerHeight - padding) {
        y = window.innerHeight - padding - tipRect.height;
      }
      tooltipEl.style.left = `${x}px`;
      tooltipEl.style.top = `${y}px`;
    }

    function hide() {
      if (showTimer) {
        clearTimeout(showTimer);
        showTimer = null;
      }
      if (currentTrigger && savedTitle !== null) {
        currentTrigger.setAttribute("title", savedTitle);
        savedTitle = null;
      }
      currentTrigger = null;
      tooltipEl.classList.remove("is-visible");
      tooltipEl.setAttribute("aria-hidden", "true");
    }

    document.body.addEventListener(
      "mouseenter",
      (e) => {
        const trigger = e.target.closest(TOOLTIP_SELECTOR);
        if (!trigger) return;
        showTimer = setTimeout(() => show(trigger), SHOW_DELAY_MS);
      },
      true,
    );

    document.body.addEventListener(
      "mouseleave",
      (e) => {
        const trigger = e.target.closest(TOOLTIP_SELECTOR);
        if (!trigger) return;
        hide();
      },
      true,
    );
  }

  function initFootnoteRefs() {
    const HIGHLIGHT_CLASS = "footnote-highlight";
    const HIGHLIGHT_MS = 3000;
    let highlightTimeout = null;

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a.fnref");
      if (!link || !link.hash) return;
      const id = link.hash.slice(1);
      const footnote = document.getElementById(id);
      if (!footnote || !footnote.classList.contains("footnote")) return;

      document
        .querySelectorAll(".footnote")
        .forEach((el) => el.classList.remove(HIGHLIGHT_CLASS));
      footnote.classList.add(HIGHLIGHT_CLASS);
      footnote.scrollIntoView({ behavior: "smooth", block: "nearest" });

      if (highlightTimeout) clearTimeout(highlightTimeout);
      highlightTimeout = setTimeout(() => {
        footnote.classList.remove(HIGHLIGHT_CLASS);
        highlightTimeout = null;
      }, HIGHLIGHT_MS);
    });
  }

  const DISCLAIMER_STORAGE_KEY = "sg-travel-card-disclaimer-accepted";

  function initDisclaimerModal() {
    const modal = document.getElementById("disclaimerModal");
    const acceptBtn = document.getElementById("disclaimerModalAccept");
    if (!modal || !acceptBtn) return;

    if (localStorage.getItem(DISCLAIMER_STORAGE_KEY) === "true") {
      modal.hidden = true;
      return;
    }

    modal.hidden = false;

    function dismiss() {
      localStorage.setItem(DISCLAIMER_STORAGE_KEY, "true");
      modal.hidden = true;
    }

    acceptBtn.addEventListener("click", dismiss);
  }

  function initFooterScrollHide() {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;
    const threshold = 60;
    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    function updateFooter() {
      const scrollY = window.scrollY || 0;
      if (scrollY > lastScrollY && scrollY > threshold) {
        footer.classList.add("footer-hidden");
      } else {
        footer.classList.remove("footer-hidden");
      }
      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateFooter);
          ticking = true;
        }
      },
      { passive: true },
    );
  }

  function initHeaderScrollHide() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const threshold = 60;
    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY || 0;
      const navOpen = header.classList.contains("nav-open");
      if (navOpen) {
        header.classList.remove("header-hidden");
      } else if (scrollY > lastScrollY && scrollY > threshold) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true },
    );
  }

  initTheme();
  initDisclaimerModal();
  initHeaderScrollHide();
  initFooterScrollHide();
  initNavDesktopTooltips();
  initNavToggle();
  initLayout();
  initViewToggle();
  initCustomTooltips();
  initFootnoteRefs();
  if (document.getElementById("tableBody")) {
    renderTable();
    applyColumnVisibility();
    initFilters();
    initColumnsPicker();
    initFilterPicker();
    initReset();
    initReferralTracking();
    initCopyRefCode();
  }

  function showCopyToast() {
    const toast = document.getElementById("copyToast");
    if (!toast) return;
    toast.removeAttribute("hidden");
    toast.textContent = "Copied to clipboard";
    toast.classList.add("visible");
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.setAttribute("hidden", ""), 300);
    }, 2000);
  }

  const COPY_ICON_SVG =
    '<svg class="copy-ref-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  const CHECK_ICON_SVG =
    '<svg class="copy-ref-icon copy-ref-icon-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

  function initCopyRefCode() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button.copy-ref-btn");
      if (!btn) return;
      const code = btn.getAttribute("data-ref-code");
      if (!code) return;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          if (typeof gtag === "function") {
            gtag("event", "referral_copy", {
              event_category: "engagement",
              card_id: btn.getAttribute("data-card-id") || "",
              card_name: btn.getAttribute("data-card-name") || "",
            });
          }
          showCopyToast();
          btn.classList.add("copied");
          btn.setAttribute("aria-label", "Copied!");
          const icon = btn.querySelector(".copy-ref-icon");
          if (icon) icon.outerHTML = CHECK_ICON_SVG;
          clearTimeout(btn._revertTimer);
          btn._revertTimer = setTimeout(() => {
            btn.classList.remove("copied");
            btn.setAttribute("aria-label", "Copy referral code");
            const currentIcon = btn.querySelector(".copy-ref-icon");
            if (currentIcon) currentIcon.outerHTML = COPY_ICON_SVG;
          }, 1500);
        })
        .catch(() => {});
    });
  }

  function initReferralTracking() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a.referral-link");
      if (!link) return;
      if (typeof gtag !== "function") return;
      gtag("event", "referral_click", {
        event_category: "engagement",
        card_id: link.getAttribute("data-card-id") || "",
        card_name: link.getAttribute("data-card-name") || "",
        link_url: link.getAttribute("href") || "",
      });
    });
  }
})();
