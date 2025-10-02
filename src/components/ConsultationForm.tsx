import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    newClient: '',
    message: '',
    agreeToSms: false,
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our team will reach out to you right away.');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#001f3f] via-[#0a4d8c] to-[#0066cc]">
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-200 text-lg mb-4 font-medium tracking-wide">Schedule Your Free Consultation</p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl">
            Our team will reach out to you right away.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 space-y-6"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="h-14 text-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400/50 transition-all"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="h-14 text-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400/50 transition-all"
                required
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-14 text-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400/50 transition-all"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-14 text-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400/50 transition-all"
                required
              />
            </div>
          </div>

          {/* Are you a new client? */}
          <div>
            <Select
              value={formData.newClient}
              onValueChange={(value) => handleInputChange('newClient', value)}
            >
              <SelectTrigger className="h-14 text-lg bg-white/95 backdrop-blur-sm text-gray-900 border-0 rounded-2xl shadow-lg">
                <SelectValue placeholder="Are you a new client?" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20 rounded-xl shadow-2xl">
                <SelectItem value="yes" className="text-gray-900">Yes, I am a new client</SelectItem>
                <SelectItem value="no" className="text-gray-900">No, I am an existing client</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="min-h-[200px] text-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
              required
            />
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Checkbox
                id="sms-consent"
                checked={formData.agreeToSms}
                onCheckedChange={(checked) => handleInputChange('agreeToSms', checked as boolean)}
                className="mt-1 h-5 w-5 border-2 border-white/50 bg-white/90 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded-md"
                required
              />
              <Label
                htmlFor="sms-consent"
                className="text-white text-sm leading-relaxed cursor-pointer drop-shadow-lg"
              >
                By checking this box, you agree to receive TEXT messages from Trembach Law Firm related to your inquiry, follow-ups,
                and review requests at the phone number provided above. You may reply STOP to opt out at any time. For
                assistance, reply HELP. Messages and data rates may apply. Message frequency will vary. Please review our{' '}
                <a href="/privacy-policy" className="underline hover:text-blue-200 transition-colors">
                  Privacy Policy
                </a>{' '}
                and terms of service.
              </Label>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Checkbox
                id="terms-consent"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                className="mt-1 h-5 w-5 border-2 border-white/50 bg-white/90 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded-md"
                required
              />
              <Label
                htmlFor="terms-consent"
                className="text-white text-sm leading-relaxed cursor-pointer drop-shadow-lg"
              >
                This site is protected by reCAPTCHA, and Google's{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-200 transition-colors"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-200 transition-colors"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-lg px-16 py-7 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50"
            >
              SEND INFORMATION
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
