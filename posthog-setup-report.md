# PostHog post-wizard report

The wizard has completed a full PostHog integration for Villa Sattvika. PostHog is initialised via `instrumentation-client.ts` (Next.js 15.3+ pattern) and all traffic is proxied through `/ingest` to avoid ad-blockers. Eleven conversion and engagement events are captured across seven components, covering the full visitor journey from landing to booking contact.

| Event | Description | File |
|-------|-------------|------|
| `explore_villa_clicked` | User clicks "Explore the Villa" in the hero to scroll to villa details | `src/components/Hero.tsx` |
| `book_now_clicked` | User clicks "Book Your Stay" WhatsApp CTA in the hero | `src/components/Hero.tsx` |
| `nav_book_now_clicked` | User clicks "Book Now" in the sticky navbar (desktop or mobile) | `src/components/Navbar.tsx` |
| `discover_more_clicked` | User clicks "Discover More" in the About section to scroll to amenities | `src/components/About.tsx` |
| `booking_whatsapp_clicked` | User clicks "Book via WhatsApp" in the main BookingCTA section | `src/components/BookingCTA.tsx` |
| `booking_email_enquiry_clicked` | User clicks "Enquire Directly" email CTA in the BookingCTA section | `src/components/BookingCTA.tsx` |
| `get_directions_clicked` | User clicks "Get Directions" in the Location section | `src/components/Location.tsx` |
| `room_photo_navigated` | User navigates room carousel photos (with `room_title`, `photo_index`, `direction`) | `src/components/Rooms.tsx` |
| `testimonial_navigated` | User navigates between guest testimonials (with `direction`, `testimonial_index`) | `src/components/Testimonials.tsx` |
| `footer_instagram_clicked` | User clicks the Instagram link in the footer | `src/components/Footer.tsx` |
| `footer_whatsapp_clicked` | User clicks the WhatsApp contact link in the footer | `src/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://eu.posthog.com/project/214935/dashboard/790904)
- **Booking Conversion Funnel**: [Explore → WhatsApp / Email](https://eu.posthog.com/project/214935/insights/TYIfuMiR)
- **Booking Inquiries Over Time**: [WhatsApp vs Email trend](https://eu.posthog.com/project/214935/insights/jFFwmlDT)
- **Total Booking Contacts (30 days)**: [Bold number summary](https://eu.posthog.com/project/214935/insights/WXacWg6s)
- **Book Now Clicks by Source**: [Hero vs Navbar vs Booking section vs Email](https://eu.posthog.com/project/214935/insights/H1500DPF)
- **Visitor Engagement Events**: [Room browsing, villa exploration, discover more, directions, testimonials](https://eu.posthog.com/project/214935/insights/9RTzXm6u)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
