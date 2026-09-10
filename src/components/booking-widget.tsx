"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    SimplybookWidget?: new (config: Record<string, unknown>) => unknown;
  }
}

const widgetId = "sbw_csoxqt";
const widgetScriptUrl = "https://widget.simplybook.me/v2/widget/widget.js";
let widgetScriptPromise: Promise<void> | null = null;
let widgetInstanceCreated = false;

function loadWidgetScript() {
  if (widgetScriptPromise) return widgetScriptPromise;

  widgetScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${widgetScriptUrl}"]`);
    if (existingScript) {
      if (window.SimplybookWidget) {
        resolve();
      } else {
        existingScript.addEventListener("load", () => resolve(), { once: true });
        existingScript.addEventListener("error", () => reject(new Error("Unable to load SimplyBook widget")), {
          once: true,
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = widgetScriptUrl;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load SimplyBook widget"));
    document.head.appendChild(script);
  });

  return widgetScriptPromise;
}

export function BookingWidget() {
  useEffect(() => {
    let mounted = true;

    loadWidgetScript()
      .then(() => {
        if (!mounted) return;
        if (widgetInstanceCreated) return;
        if (!window.SimplybookWidget) return;

        new window.SimplybookWidget({
          widget_type: "iframe",
          url: "https://fabfabper.simplybook.me",
          theme: "minimal",
          theme_settings: {
            timeline_show_end_time: "1",
            timeline_modern_display: "as_slots",
            hide_company_label: "0",
            timeline_hide_unavailable: "1",
            hide_past_days: "0",
            sb_base_color: "#1c211e",
            btn_color_1: "#403733,#403733,#403733",
            link_color: "#cb8d75",
            display_item_mode: "block",
            body_bg_color: "#ffffff",
            sb_review_image: "",
            dark_font_color: "#1c211e",
            light_font_color: "#ffffff",
            sb_company_label_color: "#ffffff",
            hide_img_mode: "0",
            sb_busy: "#c7b3b3",
            sb_available: "#2b212b",
          },
          timeline: "modern",
          datepicker: "top_calendar",
          is_rtl: false,
          app_config: { clear_session: 0, allow_switch_to_ada: 0, predefined: [] },
          container_id: widgetId,
        });
        widgetInstanceCreated = true;
      })
      .catch(() => undefined);

    return () => {
      mounted = false;
      widgetInstanceCreated = false;
      document.getElementById(widgetId)?.replaceChildren();
    };
  }, []);

  return <div id={widgetId} aria-label="SimplyBook booking widget" />;
}
