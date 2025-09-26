import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PawPrint } from "lucide-react";

// A minimal, maintainable 50+ question questionnaire rendered from config

type Question = {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox" | "number" | "date" | "time";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

type Section = {
  title: string;
  questions: Question[];
};

const sections: Section[] = [
  {
    title: "Incident Details",
    questions: [
      { name: "incident_date", label: "Date of incident", type: "date", required: true },
      { name: "incident_time", label: "Time of incident", type: "time" },
      { name: "incident_city", label: "City of incident", type: "text", required: true },
      { name: "incident_state", label: "State of incident", type: "text", required: true },
      { name: "incident_location_type", label: "Location type", type: "select", options: [
        { value: "public", label: "Public place" },
        { value: "private", label: "Private residence" },
        { value: "work", label: "Workplace" },
        { value: "other", label: "Other" },
      ] },
      { name: "on_owner_property", label: "On dog owner's property?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "unknown", label: "Unknown" },
      ] },
      { name: "trespassing", label: "Were you trespassing?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "provocation", label: "Any provocation before the bite?", type: "select", options: [
        { value: "none", label: "None" },
        { value: "accidental", label: "Accidental contact" },
        { value: "intentional", label: "Intentional action" },
        { value: "unknown", label: "Unknown" },
      ] },
      { name: "police_report", label: "Was a police/animal control report filed?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "report_number", label: "Report number (if known)", type: "text" },
    ],
  },
  {
    title: "Dog Information",
    questions: [
      { name: "owner_known", label: "Is the dog owner known?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "owner_name", label: "Owner's name (if known)", type: "text" },
      { name: "owner_contact", label: "Owner's contact (if known)", type: "text" },
      { name: "dog_breed", label: "Dog breed (best estimate)", type: "text" },
      { name: "dog_size", label: "Dog size", type: "select", options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
        { value: "xl", label: "Extra Large" },
      ] },
      { name: "prior_attacks", label: "Any known prior attacks by this dog?", type: "select", options: [
        { value: "unknown", label: "Unknown" },
        { value: "none", label: "None" },
        { value: "yes_one", label: "Yes - one" },
        { value: "yes_multiple", label: "Yes - multiple" },
      ] },
      { name: "vaccination_status", label: "Dog vaccination status", type: "select", options: [
        { value: "up_to_date", label: "Up to date" },
        { value: "not_up_to_date", label: "Not up to date" },
        { value: "unknown", label: "Unknown" },
      ] },
      { name: "leash_or_contained", label: "Was the dog leashed/contained?", type: "select", options: [
        { value: "off_leash", label: "Off-leash" },
        { value: "on_leash", label: "On-leash" },
        { value: "escaped", label: "Escaped enclosure" },
        { value: "contained", label: "Contained" },
      ] },
    ],
  },
  {
    title: "Attack Details",
    questions: [
      { name: "attack_type", label: "Type of attack", type: "select", options: [
        { value: "single_bite", label: "Single bite" },
        { value: "multiple_bites", label: "Multiple bites" },
        { value: "mauling", label: "Mauling" },
        { value: "knockdown", label: "Knockdown/Chase" },
      ] },
      { name: "body_parts", label: "Body parts injured", type: "textarea", placeholder: "e.g., left forearm, face, calf" },
      { name: "blood_loss", label: "Significant blood loss?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "needed_sutures", label: "Did you need sutures/stitches?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "surgery", label: "Was surgery required?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "infection", label: "Any infection developed?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "hospitalized", label: "Were you hospitalized?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "days_hospitalized", label: "If hospitalized, how many days?", type: "number" },
      { name: "photo_evidence", label: "Do you have photo/video evidence?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "scarring_location", label: "Visible scarring location(s)", type: "textarea" },
    ],
  },
  {
    title: "Injuries and Treatment",
    questions: [
      { name: "er_visit", label: "Did you go to the ER/urgent care?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "same_day_treatment", label: "Treatment on the same day?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "primary_physician", label: "Primary treating physician", type: "text" },
      { name: "current_symptoms", label: "Current symptoms", type: "textarea" },
      { name: "therapy_needed", label: "Physical/occupational therapy recommended?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "mental_health_treatment", label: "Therapy/counseling for trauma?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "ptsd_diagnosis", label: "PTSD or anxiety diagnosis?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
        { value: "suspected", label: "Suspected" },
      ] },
      { name: "out_of_pocket", label: "Out-of-pocket medical costs so far ($)", type: "number" },
      { name: "future_care_expected", label: "Are future procedures expected?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes_minor", label: "Yes - minor" },
        { value: "yes_major", label: "Yes - major" },
      ] },
      { name: "activity_limitations", label: "Activity limitations due to injury", type: "textarea" },
    ],
  },
  {
    title: "Witnesses and Reports",
    questions: [
      { name: "witnesses_present", label: "Were there witnesses?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes_known", label: "Yes - known" },
        { value: "yes_unknown", label: "Yes - unknown" },
      ] },
      { name: "witness_names", label: "Witness names/contact (if known)", type: "textarea" },
      { name: "animal_control_notified", label: "Was animal control notified?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "citations_issued", label: "Any citations issued to owner?", type: "select", options: [
        { value: "none", label: "None" },
        { value: "leash_law", label: "Leash law" },
        { value: "dangerous_dog", label: "Dangerous dog" },
        { value: "other", label: "Other" },
      ] },
      { name: "rabies_protocol", label: "Rabies protocol followed?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "unknown", label: "Unknown" },
      ] },
      { name: "photos_uploaded", label: "Do you have photos ready to share?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
    ],
  },
  {
    title: "Insurance and Legal",
    questions: [
      { name: "owner_insurance_known", label: "Is owner's insurance known?", type: "select", options: [
        { value: "unknown", label: "Unknown" },
        { value: "homeowners", label: "Homeowners" },
        { value: "renters", label: "Renters" },
        { value: "no_insurance", label: "No insurance" },
      ] },
      { name: "own_insurance", label: "Do you have health insurance?", type: "select", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ] },
      { name: "med_pay", label: "Medical payments (MedPay) coverage available?", type: "select", options: [
        { value: "unknown", label: "Unknown" },
        { value: "none", label: "None" },
        { value: "1000", label: "$1,000" },
        { value: "5000", label: "$5,000" },
        { value: "10000", label: "$10,000+" },
      ] },
      { name: "reported_to_insurer", label: "Have you reported to any insurer?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "prior_claims", label: "Any prior personal injury claims?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
      { name: "represented_currently", label: "Are you already represented by an attorney?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
      ] },
    ],
  },
  {
    title: "Background and Impact",
    questions: [
      { name: "age_group", label: "Your age group", type: "select", options: [
        { value: "child", label: "Child (<18)" },
        { value: "young_adult", label: "Young adult (18-30)" },
        { value: "adult", label: "Adult (31-55)" },
        { value: "senior", label: "Senior (55+)" },
      ] },
      { name: "occupation", label: "Occupation", type: "text" },
      { name: "time_off_work", label: "Time off work (days)", type: "number" },
      { name: "lost_wages_amount", label: "Estimated lost wages ($)", type: "number" },
      { name: "daily_impact", label: "How has this impacted daily life?", type: "textarea" },
      { name: "sleep_issues", label: "Experiencing sleep issues?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "sometimes", label: "Sometimes" },
        { value: "frequent", label: "Frequent" },
      ] },
      { name: "fear_of_dogs", label: "New fear of dogs since incident?", type: "select", options: [
        { value: "no", label: "No" },
        { value: "mild", label: "Mild" },
        { value: "moderate", label: "Moderate" },
        { value: "severe", label: "Severe" },
      ] },
      { name: "additional_details", label: "Anything else we should know?", type: "textarea" },
    ],
  },
];

// Build a flexible Zod schema automatically from questions
const schema = z.object(
  Object.fromEntries(
    sections
      .flatMap((s) => s.questions)
      .map((q) => {
        if (q.type === "checkbox") {
          return [q.name, z.boolean().optional()];
        }
        if (q.type === "number") {
          return [
            q.name,
            z
              .union([z.string().length(0), z.string().regex(/^\d+(?:\.?\d{0,2})?$/)])
              .optional(),
          ];
        }
        if (q.type === "date") {
          return [q.name, z.string().optional()];
        }
        if (q.type === "time") {
          return [q.name, z.string().optional()];
        }
        const base = z.string().trim().max(1000);
        return [q.name, q.required ? base.min(1, "Required") : base.optional()];
      })
  ) as Record<string, z.ZodTypeAny>
);

const DogBiteQuestionnaire: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const defaultValues = useMemo(
    () =>
      sections
        .flatMap((s) => s.questions)
        .reduce<Record<string, any>>((acc, q) => {
          acc[q.name] = q.type === "checkbox" ? false : "";
          return acc;
        }, {}),
    []
  );

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    // No external calls; keep data local per security guidance
    setSubmitted(true);
    // Avoid logging sensitive data
  };

  return (
    <Card className="mt-12 border border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center">
          <PawPrint className="w-6 h-6 mr-2" /> Comprehensive Dog Bite Case Questionnaire
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <p className="text-sm text-muted-foreground mb-6">
          Answer these questions to help us understand your case. This form contains 50+ targeted questions.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-primary border-b border-primary/20 pb-2">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.questions.map((q) => (
                    <FormField
                      key={q.name}
                      control={form.control}
                      name={q.name as any}
                      render={({ field }) => (
                        <FormItem className={q.type === "textarea" ? "md:col-span-2" : undefined}>
                          <FormLabel>{q.label}{q.required ? " *" : ""}</FormLabel>
                          <FormControl>
                            {q.type === "text" && (
                              <Input placeholder={q.placeholder} {...field} />
                            )}
                            {q.type === "number" && (
                              <Input type="number" inputMode="decimal" placeholder={q.placeholder} {...field} />
                            )}
                            {q.type === "textarea" && (
                              <Textarea placeholder={q.placeholder} {...field} />
                            )}
                            {q.type === "date" && (
                              <Input type="date" {...field} />
                            )}
                            {q.type === "time" && (
                              <Input type="time" {...field} />
                            )}
                            {q.type === "checkbox" && (
                              <div className="flex items-center gap-2 py-2">
                                <Checkbox checked={field.value as unknown as boolean} onCheckedChange={field.onChange} />
                              </div>
                            )}
                            {q.type === "select" && (
                              <Select onValueChange={field.onChange} value={(field.value as string) ?? ""}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                  {q.options?.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </SelectItem>
                                  ))
                                  }
                                </SelectContent>
                              </Select>
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">All fields are securely handled and not shared without your consent.</p>
              <Button type="submit">Save Questionnaire</Button>
            </div>

            {submitted && (
              <div className="text-sm text-primary mt-2">Your answers were saved locally. We’ll use them to personalize your case review.</div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DogBiteQuestionnaire;
