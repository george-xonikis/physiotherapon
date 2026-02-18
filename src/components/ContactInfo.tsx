"use client";

import { useI18n } from "@/i18n/I18nContext";

export default function ContactInfo() {
  const { t } = useI18n();

  return (
    <div className="w-full">
      <div className="mb-0">
        <h4 className="text-[22px] font-semibold mb-1">{t("contact.locationLabel")}</h4>
        <p className="text-sm">{t("contact.address")}</p>
      </div>

      <div className="mt-10">
        <h4 className="text-[22px] font-semibold mb-1">{t("contact.emailLabel")}</h4>
        <p className="text-sm">physiotherapon@gmail.com</p>
      </div>

      <div className="mt-10">
        <h4 className="text-[22px] font-semibold mb-1">{t("contact.callLabel")}</h4>
        <p className="text-sm">2310 946 960</p>
      </div>

      <div className="mt-10">
        <h4 className="text-[22px] font-semibold mb-1">
          {t("contact.hoursLabel")}
        </h4>
        <p className="text-sm">{t("contact.schedule")}</p>
      </div>
    </div>
  );
}
