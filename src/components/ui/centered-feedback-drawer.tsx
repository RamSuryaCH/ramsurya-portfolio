"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ParticleButton } from "@/components/ui/particle-button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const MESSAGE_MAX = 1000;

export default function CenteredFeedbackDrawer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setOpen(false);
      }, 3000);

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ParticleButton 
          variant="default" 
          className="bg-accent-orange hover:bg-orange-600 text-white font-medium px-8 py-6 rounded-lg transition-all duration-300 text-base"
          successDuration={800}
        >
          Contact Me
        </ParticleButton>
      </DrawerTrigger>

      <DrawerContent>
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <DrawerHeader className="max-w-md space-y-2">
            <DrawerTitle className="text-xl font-bold">
              Get in Touch
            </DrawerTitle>
            <DrawerDescription>
              Let's discuss your project or idea.
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mt-4">
            <div className="grid gap-2 text-left">
              <Label htmlFor="drawer-name">Your Name</Label>
              <Input 
                id="drawer-name"
                name="name"
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid gap-2 text-left">
              <Label htmlFor="drawer-email">Email Address</Label>
              <Input 
                id="drawer-email"
                name="email"
                type="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid gap-2 text-left">
              <Label htmlFor="drawer-message">Message</Label>
              <Textarea
                id="drawer-message"
                name="message"
                placeholder="Tell me about your project idea, collaboration opportunity, or just say hello..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                maxLength={1000}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Max 1000 characters.</span>
                <span>{formData.message.length}/1000</span>
              </div>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 p-3 rounded-lg text-sm"
              >
                <CheckCircle size={18} />
                <span>Message sent successfully!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 p-3 rounded-lg text-sm"
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <DrawerFooter className="flex flex-col-reverse sm:flex-row gap-3 w-full px-0 pb-0 mt-6">
              <DrawerClose asChild>
                <Button variant="outline" className="w-full sm:w-auto sm:flex-1" type="button">
                  Cancel
                </Button>
              </DrawerClose>
              <Button 
                type="submit"
                className="w-full sm:w-auto sm:flex-1 bg-accent-orange hover:bg-orange-600 text-white"
                disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}