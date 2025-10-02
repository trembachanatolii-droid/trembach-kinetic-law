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
    <section className="bg-[#2c3e50] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white text-lg mb-4">Schedule Your Free Consultation</p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our team will reach out to you right away.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="h-16 text-lg bg-white text-black placeholder:text-black placeholder:font-semibold border-0 rounded-lg"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="h-16 text-lg bg-white text-black placeholder:text-black placeholder:font-semibold border-0 rounded-lg"
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
                className="h-16 text-lg bg-white text-black placeholder:text-black placeholder:font-semibold border-0 rounded-lg"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-16 text-lg bg-white text-black placeholder:text-black placeholder:font-semibold border-0 rounded-lg"
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
              <SelectTrigger className="h-16 text-lg bg-white text-black border-0 rounded-lg">
                <SelectValue placeholder="Are you a new client?" className="font-semibold" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, I am a new client</SelectItem>
                <SelectItem value="no">No, I am an existing client</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="min-h-[200px] text-lg bg-white text-black placeholder:text-black placeholder:font-semibold border-0 rounded-lg resize-none"
              required
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="sms-consent"
              checked={formData.agreeToSms}
              onCheckedChange={(checked) => handleInputChange('agreeToSms', checked as boolean)}
              className="mt-1 h-5 w-5 border-white bg-white"
              required
            />
            <Label
              htmlFor="sms-consent"
              className="text-white text-sm leading-relaxed cursor-pointer"
            >
              By checking this box, you agree to receive TEXT messages from BD&J, PC related to your inquiry, follow-ups,
              and review requests at the phone number provided above. You may reply STOP to opt out at any time. For
              assistance, reply HELP. Messages and data rates may apply. Message frequency will vary. Please review our{' '}
              <a href="/privacy-policy" className="underline hover:text-gray-300">
                Privacy Policy
              </a>{' '}
              and terms of service.
              <br />
              <br />
              This site is protected by reCAPTCHA, and Google's{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Terms of Service
              </a>
              .
            </Label>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="bg-[#f4c430] hover:bg-[#e6b82e] text-black font-bold text-lg px-12 py-6 h-auto rounded-md"
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
