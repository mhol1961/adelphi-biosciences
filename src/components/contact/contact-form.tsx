"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle, ArrowRight, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, ContactFormData, companyTypes } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      companyType: undefined,
      message: "",
      referralSource: "",
      website: "", // Honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald/5 via-emerald/10 to-emerald/5 border border-emerald/20 p-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/10 rounded-full blur-2xl" />

        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald to-teal mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
          >
            <CheckCircle className="h-10 w-10 text-white" />
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Message Received!
          </motion.h3>

          <motion.p
            className="text-slate mb-8 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Thank you for reaching out. We typically respond within 24 business hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button
              variant="outline"
              className="border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald/50"
              onClick={() => setSubmitStatus("idle")}
            >
              Send Another Message
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field - hidden from users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <Input
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Two Column Layout for Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-charcoal font-medium">
            Full Name <span className="text-azure">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="John Smith"
            className={cn(
              "h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300",
              errors.fullName && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
            )}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-charcoal font-medium">
            Email Address <span className="text-azure">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@company.com"
            className={cn(
              "h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300",
              errors.email && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
            )}
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Two Column Layout for Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-charcoal font-medium">
            Company Name <span className="text-azure">*</span>
          </Label>
          <Input
            id="companyName"
            {...register("companyName")}
            placeholder="Acme Therapeutics"
            className={cn(
              "h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300",
              errors.companyName && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
            )}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Phone (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-charcoal font-medium">
            Phone Number <span className="text-slate/60 font-normal">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+1 (555) 123-4567"
            className="h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Company Type */}
      <div className="space-y-2">
        <Label htmlFor="companyType" className="text-charcoal font-medium">
          Company Type <span className="text-azure">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("companyType", value as ContactFormData["companyType"])}>
          <SelectTrigger
            id="companyType"
            className={cn(
              "h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300",
              errors.companyType && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
            )}
          >
            <SelectValue placeholder="Select your company type" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-slate/20">
            {companyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value} className="rounded-lg">
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.companyType && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.companyType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-charcoal font-medium">
          Message <span className="text-azure">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Please describe your regulatory needs or questions..."
          rows={5}
          className={cn(
            "rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300 resize-none",
            errors.message && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
          )}
        />
        {errors.message && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Referral Source (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="referralSource" className="text-charcoal font-medium">
          How did you hear about us? <span className="text-slate/60 font-normal">(optional)</span>
        </Label>
        <Input
          id="referralSource"
          {...register("referralSource")}
          placeholder="LinkedIn, referral, conference, etc."
          className="h-12 rounded-xl border-slate/20 bg-cloud/50 focus:bg-white focus:border-azure focus:ring-azure/20 transition-all duration-300"
        />
      </div>

      {/* Error Message */}
      {submitStatus === "error" && errorMessage && (
        <motion.div
          className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{errorMessage}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 rounded-xl font-semibold text-white text-base transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)" }}
        disabled={submitStatus === "loading"}
      >
        {submitStatus === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-center text-sm text-slate">
        Your information is secure and will never be shared.{" "}
        <a href="/privacy" className="text-azure hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
