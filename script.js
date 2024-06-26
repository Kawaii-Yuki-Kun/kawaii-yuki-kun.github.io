const lang = navigator.language ? navigator.language : 'en';
const loaded = new Promise(resolve => {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', resolve);
    return;
  }
  resolve();
});
Promise.all([fetch('_footer?lang=' + encodeURIComponent(lang)), loaded]).then(([response]) => {
  if (response.status !== 200) {
    return;
  }
  response.text().then(footerStr => {
    const div = document.createElement('div');
    div.innerHTML = footerStr;
    for (const child of [...div.children]) {
      if (child.tagName.toLowerCase() !== 'script') {
        document.body.append(child);
      }
    }
    19 / 3 / 11 / 9
    (() => {
      !(function (e) {
        'use strict';
        const t = document.getElementById('modal_backdrop'),
          n = document.getElementById('modal'),
          o = document.getElementById('captcha-form'),
          c = document.getElementById('report_button'),
          d = document.getElementById('form_report'),
          s = document.getElementById('form_cancel'),
          l = document.getElementById('form_submit_reason'),
          a = document.getElementById('form_go_back'),
          r = document.getElementById('form_submit_captcha'),
          m = document.getElementById('form_close'),
          i = document.getElementById('form_close_initial'),
          u = document.getElementById('report_reason_0'),
          p = document.getElementById('error_message'),
          _ = document.getElementById('error_message_captcha'),
          y = new Map();
        y.set(0, document.getElementById('form_step_terms')), y.set(1, document.getElementById('form_step_report_reason')), y.set(4, document.getElementById('form_step_report_other'));
        const E = document.getElementById('form_step_report_ip');
        E && y.set(5, E), y.set(2, document.getElementById('form_step_captcha')), y.set(3, document.getElementById('form_step_success'));
        const f = document.getElementById('report_reason_4'),
          g = document.getElementById('form_close_ip'),
          h = document.getElementById('form_go_back_ip'),
          I = document.getElementById('report_reason_other'),
          k = document.getElementById('form_close_other'),
          w = document.getElementById('form_go_back_other');
        function v() {
          t.classList.remove('active'), n.classList.remove('active'), c.classList.remove('active'), c.focus();
        }
        function B(e) {
          y.forEach((t, n) => {
            n === e ? ((t.style.display = 'block'), L(t)) : (t.style.display = 'none');
          });
        }
        let b,
          C = !1;
        const T =
          'NETEASE' === window.C_CAPTCHA_IMPLEMENTATION
            ? () => b
            : () => {
                const e = o.elements.namedItem('g-recaptcha-response');
                return null == e ? void 0 : e.value;
              };
        (t.onclick = v),
          (s.onclick = v),
          (m.onclick = v),
          (i.onclick = v),
          g && (g.onclick = v),
          (k.onclick = v),
          (c.onclick = function () {
            y.forEach((e, t) => {
              e.style.display = 0 === t ? 'block' : 'none';
            }),
              t.classList.add('active'),
              n.classList.add('active'),
              c.classList.add('active'),
              (u.checked = !0),
              setTimeout(() => {
                L(y.get(0));
              }, 350);
          }),
          (d.onclick = d.dataset.reportUrl
            ? function () {
                const { origin: e, pathname: t } = window.location,
                  n = e + t,
                  o = d.dataset.reportUrl + encodeURIComponent(n);
                window.open(o);
              }
            : () => B(1)),
          (l.onclick = () => {
            null != E && f.checked
              ? B(5)
              : I.checked
              ? B(4)
              : (B(2),
                (function () {
                  if (C) return;
                  const e = document.createElement('script');
                  (e.src = 'NETEASE' === window.C_CAPTCHA_IMPLEMENTATION ? 'https://cstaticdun.126.net/load.min.js' : 'https://www.google.com/recaptcha/api.js'),
                    (e.async = !0),
                    (e.defer = !0),
                    document.head.appendChild(e),
                    (C = !0),
                    (e.onload =
                      'NETEASE' === window.C_CAPTCHA_IMPLEMENTATION
                        ? () => {
                            var e;
                            null === (e = window.initNECaptcha) ||
                              void 0 === e ||
                              e.call(window, {
                                captchaId: window.C_CAPTCHA_KEY,
                                element: '#netease-captcha',
                                protocol: 'https',
                                width: 'auto',
                                onVerify: (e, t) => {
                                  b = t.validate;
                                },
                              });
                          }
                        : () => {});
                })());
          }),
          (a.onclick = () => B(1)),
          h && (h.onclick = () => B(1)),
          (w.onclick = () => B(1)),
          o.addEventListener('submit', function (e) {
            e.preventDefault(), (p.style.display = 'none'), (_.style.display = 'none');
            const t = (function () {
                let e = '';
                const t = document.getElementsByName('report_reason');
                for (let n = 0; n < t.length; n++) {
                  const o = t[n];
                  o.checked && (e = o.value);
                }
                return e;
              })(),
              n = T();
            if (!n) return void (_.style.display = 'block');
            const o = { reason: t, challenge: n },
              c = window.location.origin + window.location.pathname + '/_api/report';
            r.classList.add('loading'),
              fetch(c, { method: 'POST', body: JSON.stringify(o), headers: { 'Content-Type': 'application/json; charset=utf-8' } }).then(e => {
                r.classList.remove('loading'), e.ok ? B(3) : (p.style.display = 'block');
              });
          });
        const A = new Map(),
          L = e => {
            const t = A.get(e);
            null != t && document.removeEventListener('keydown', t);
            const n = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
              o = e,
              c = n[n.length - 1],
              d = function (e) {
                ('Tab' === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === o && (c.focus(), e.preventDefault()) : document.activeElement === c && (o.focus(), e.preventDefault()));
              };
            A.set(e, d), document.addEventListener('keydown', d), o.focus();
          };
        (e.keepFocus = L), Object.defineProperty(e, '__esModule', { value: !0 });
      })({});
    })();
    window.dispatchEvent(new Event('resize'));
  });
});
