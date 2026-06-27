import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSubmitContact } from '@workspace/api-client-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const contactMutation = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
          form.reset();
        },
      }
    );
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 px-4 md:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
          >
            Get in Touch
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            We welcome conversations about inclusive design, research partnerships, and speaking engagements.
          </p>
        </div>

        {/* ARIA Live Region for Screen Readers */}
        <div aria-live="polite" className="sr-only">
          {isSuccess ? "Your message has been sent successfully. Thank you for reaching out." : ""}
          {contactMutation.isError ? "There was an error sending your message. Please try again." : ""}
        </div>

        {isSuccess ? (
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-2">Message Sent</h3>
            <p className="font-sans text-muted-foreground mb-6">
              Thank you for reaching out. We read every message and will respond thoughtfully.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSuccess(false)}
              className="font-sans"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="font-sans bg-background"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage className="font-sans" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field} 
                          className="font-sans bg-background"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage className="font-sans" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-foreground">Subject <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What is this regarding?" 
                        {...field} 
                        className="font-sans bg-background"
                      />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help?" 
                        className="min-h-[150px] font-sans resize-y bg-background"
                        {...field} 
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />

              {contactMutation.isError && (
                <div className="text-destructive font-sans text-sm p-3 bg-destructive/10 rounded-md border border-destructive/20">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full md:w-auto font-sans text-base px-8 py-6 rounded-full"
                disabled={contactMutation.isPending}
                aria-disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
