"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  platformName: z.string().min(2, {
    message: "Platform name must be at least 2 characters.",
  }),
  supportEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  description: z.string().max(160, {
    message: "Description must not be longer than 160 characters.",
  }),
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
  enableDiscussions: z.boolean().default(true),
  enableCertificates: z.boolean().default(true),
  requireEmailVerification: z.boolean().default(true),
})

export function SettingsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platformName: "EduLearn",
      supportEmail: "support@edulearn.com",
      description: "A comprehensive e-learning platform for students and professionals.",
      theme: "system",
      enableDiscussions: true,
      enableCertificates: true,
      requireEmailVerification: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
          <CardDescription>Configure your e-learning platform settings.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="platformName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Platform Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your platform name" {...field} />
                    </FormControl>
                    <FormDescription>This is the name of your e-learning platform.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="supportEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Support Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your support email" {...field} />
                    </FormControl>
                    <FormDescription>This email will be used for support inquiries.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Platform Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your platform" className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>This will be displayed on your platform's landing page.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Select the theme for your platform.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save changes</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Enable or disable platform features.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Discussion Forums</p>
              <p className="text-sm text-muted-foreground">Enable discussion forums for courses.</p>
            </div>
            <Switch
              checked={form.getValues().enableDiscussions}
              onCheckedChange={(checked) => form.setValue("enableDiscussions", checked)}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Course Certificates</p>
              <p className="text-sm text-muted-foreground">Enable certificates for completed courses.</p>
            </div>
            <Switch
              checked={form.getValues().enableCertificates}
              onCheckedChange={(checked) => form.setValue("enableCertificates", checked)}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Email Verification</p>
              <p className="text-sm text-muted-foreground">Require email verification for new accounts.</p>
            </div>
            <Switch
              checked={form.getValues().requireEmailVerification}
              onCheckedChange={(checked) => form.setValue("requireEmailVerification", checked)}
            />
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button variant="outline" className="w-full">
            Save feature settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
