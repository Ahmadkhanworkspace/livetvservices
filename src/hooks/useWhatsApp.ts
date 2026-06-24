import { useState, useEffect } from "react";

export function useWhatsApp(defaultMessage: string = "") {
  const [number, setNumber] = useState("447828932728"); // default fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/whatsapp")
      .then((res) => res.json())
      .then((data) => {
        if (data.number) {
          setNumber(data.number);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;

  const getCustomUrl = (msg: string) => {
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  };

  return { number, whatsappUrl, getCustomUrl, loading };
}
