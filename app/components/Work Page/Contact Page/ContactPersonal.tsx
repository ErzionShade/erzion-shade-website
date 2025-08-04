"use client";
import { useState, useCallback, FormEvent } from "react";
import { Loader2, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Anti-spam hidden field
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden anti-bot field
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate form inputs
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  // 🚀 FORMSPREE SUBMISSION HANDLER
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      
      // Honeypot check (if hidden field is filled, it's a bot)
      if (formData.honeypot) return; 
      
      // Validate form
      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        // Send data to Formspree
        const response = await fetch("https://formspree.io/f/meozlwgq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _gotcha: formData.honeypot, // Formspree's anti-spam field
          }),
        });

        if (response.ok) {
          setIsSuccess(true); // Show success message
          setFormData({ name: "", email: "", message: "", honeypot: "" }); // Reset form
        } else {
          throw new Error("Failed to send message.");
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm]
  );

  // Success screen
  if (isSuccess) {
    return (
      <section className="w-full min-h-screen px-5 py-16 bg-black text-white flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <CheckCircle className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Message Sent Successfully! 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'll get back to you soon. Stay sharp. 🔥
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-bold transition-colors duration-200"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </section>
    );
  }

  // Main form UI
  return (
    <section className="w-full min-h-screen px-4 sm:px-5 py-12 sm:py-16 bg-black text-white flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
          
          {/* Left side - Cool text */}
          <div className="lg:w-1/2 w-full text-center lg:text-left mt-16 md:mt-12 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              SILENT BUILDERS <span className="text-amber-500">DESERVE</span> A VOICE
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mt-8 lg:mt-12 leading-relaxed text-gray-300 max-w-lg mx-auto lg:mx-0">
              Visionaries, creators, relentless builders—your quiet work matters. 
              If you're scaling in silence but ready to connect, this is your invite.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <form 
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-4 sm:space-y-6"
              noValidate
            >
              {/* Honeypot (hidden anti-spam field) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 transition-all duration-200
                    ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-amber-500"}
                    [-webkit-tap-highlight-color:transparent] outline-none focus:outline-none focus:ring-2
                    focus-visible:outline-none focus-visible:ring-2`}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wider text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 transition-all duration-200
                    ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-amber-500"}
                    [-webkit-tap-highlight-color:transparent] outline-none focus:outline-none focus:ring-2
                    focus-visible:outline-none focus-visible:ring-2`}
                  placeholder="name@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wider text-gray-400">
                  What's your story?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 transition-all duration-200
                    ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-amber-500"}
                    [-webkit-tap-highlight-color:transparent] outline-none focus:outline-none focus:ring-2
                    focus-visible:outline-none focus-visible:ring-2 [&::-webkit-resizer]:hidden`}
                  placeholder="Tell us about your journey..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 sm:mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2
                  ${isSubmitting ? "bg-amber-600 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600"}
                  [-webkit-tap-highlight-color:transparent] outline-none focus:outline-none focus:ring-2 focus:ring-amber-500
                  active:bg-amber-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}