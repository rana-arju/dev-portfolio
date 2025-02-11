"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://portfolio-backend02.vercel.app/api/v1/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      toast("Send message successfull!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-12 px-1 sm:px-2 ms:px-4 pt-24">
      <div className="flex justify-center mb-10">
        <h3 className="text-2xl font-bold border-b-2 border-primary inline-block pb-1 uppercase">
          Contact
        </h3>
      </div>
      <div className="md:container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 dark:bg-gray-900 border-primary">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Contact With Me
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cox&apos;s Bazar, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+8801881-220413"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    +8801881-220413
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:arjurana20@gmail.com"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    arjurana20@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Find me on
              </h3>
              <div className="flex space-x-4">
                {[
                  ["https://github.com", Github],
                  ["https://twitter.com", Twitter],
                  ["https://linkedin.com", Linkedin],
                ].map(([link, Icon], i) => (
                  <Link
                    key={i}
                    href={link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:bg-[#f9004d] hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 bg-white dark:bg-gray-900 border-primary">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d]"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d]"
                />
              </div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d]"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d]"
              />
              <Button
                type="submit"
                className="w-full bg-[#f9004d] hover:bg-[#d0003f] text-white font-semibold py-3"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
