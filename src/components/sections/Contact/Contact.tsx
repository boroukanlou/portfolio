import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID = "your_serviceId";
export const EMAILJS_TEMPLATE_ID = "your_templateId";
export const EMAILJS_PUBLIC_KEY = "your_public_Key";

emailjs.init(EMAILJS_PUBLIC_KEY);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },

        EMAILJS_PUBLIC_KEY
      );
      console.log(result);

      toast({
        title: "Message sent successfully!",
        description: "Thank you! I'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="glass-card rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Send me a message
                  </h3>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-secondary/40 border-border focus:border-primary"
                                disabled={isSending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-secondary/40 border-border focus:border-primary"
                                disabled={isSending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Write your message here..."
                                rows={7}
                                className="bg-secondary/40 border-border focus:border-primary resize-none"
                                disabled={isSending}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-7"
                        disabled={isSending}
                      >
                        {isSending ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-10">
                    Let's connect
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          Location
                        </p>
                        <p className="text-white font-medium text-lg">
                          Tehran, Iran
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Email</p>
                        <p className="text-white font-medium text-lg break-all">
                          S.boroukanlou@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Phone className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Phone</p>
                        <p className="text-white font-medium text-lg">
                          +98 996 420 9510
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207414.614996789!2d51.38999999999999!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b9e1d9d11f6d43!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                    width="100%"
                    height="380"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="My location on Google Maps"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
