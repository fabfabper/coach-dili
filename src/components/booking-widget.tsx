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
          theme: "default",
          theme_settings: {
            timeline_hide_unavailable: "1",
            hide_past_days: "0",
            timeline_show_end_time: "0",
            timeline_modern_display: "as_slots",
            sb_base_color: "#dd3649",
            display_item_mode: "block",
            booking_nav_bg_color: "#dd3649",
            body_bg_color: "#f2f2f2",
            sb_review_image: "",
            dark_font_color: "#474747",
            light_font_color: "#f5fcff",
            btn_color_1: "#dd3649",
            sb_company_label_color: "#ffffff",
            hide_img_mode: "1",
            show_sidebar: "1",
            sb_busy: "#c7b3b3",
            sb_available: "#d6ebff",
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
