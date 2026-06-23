"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageSquareDot } from "lucide-react";

export default function WhatsAppButton({ locale }: { locale: string }) {
  const t = useTranslations("WhatsApp");
  const phoneNumber = "447828932728"; // User specified number
  const messageText = t("message");
  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center">
      {/* Glow pulse ring */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0, 0.35],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-emerald-500/25 blur-sm"
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border border-gold/45"
      />

      {/* Button link */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-xl shadow-green-950/40 border border-white/10 hover:brightness-105 transition-all"
        aria-label="Chat with us on WhatsApp"
      >
        {/* SVG/Icon representing WhatsApp */}
        <svg
          className="h-7 w-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.45.002 9.885-4.416 9.888-9.861.002-2.638-1.017-5.114-2.87-6.97C16.438 1.958 13.974 1.95 12.01 1.95c-5.462 0-9.9 4.414-9.903 9.863-.002 1.802.49 3.562 1.424 5.12l-.994 3.634 3.72-.973zm13.114-6.87c-.286-.143-1.69-.834-1.953-.928-.263-.095-.454-.143-.645.143-.19.286-.738.928-.905 1.117-.167.189-.333.213-.619.071-.286-.142-1.21-.446-2.305-1.423-.853-.76-1.43-1.7-1.597-1.983-.167-.285-.018-.439.124-.58.128-.127.286-.333.429-.5.143-.166.19-.285.286-.475.095-.19.047-.356-.024-.5-.071-.143-.645-1.554-.883-2.124-.23-.557-.463-.48-.645-.49-.167-.008-.358-.01-.55-.01-.19 0-.5.072-.762.356-.262.285-1 .976-1 2.38 0 1.402 1.02 2.756 1.162 2.946.143.19 2.007 3.064 4.862 4.296.68.293 1.21.468 1.623.598.683.217 1.302.186 1.793.113.547-.082 1.69-.69 1.929-1.356.238-.667.238-1.238.167-1.356-.07-.12-.262-.19-.548-.333z" />
        </svg>
      </motion.a>
    </div>
  );
}
