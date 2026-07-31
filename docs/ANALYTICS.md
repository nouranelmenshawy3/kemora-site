# Analytics Events

**No new analytics vendor was added.** These are custom events sent through the existing
`@vercel/analytics` integration via `track()`. Event names are defined once in
`lib/site.ts` → `analyticsEvents` — import from there rather than typing string literals.

| Event name | Fires when | Properties | Fired from |
|---|---|---|---|
| `whatsapp_click` | Any WhatsApp link is clicked | `placement: 'float'` (floating button only) | `Navbar`, `Footer`, `ContactChannels`, `CtaButton` (whatsapp variant), `WhatsAppFloat` |
| `contact_form_submit` | Inquiry form submits **successfully** (HTTP 200) | `locale`, `category` | `InquiryForm` |
| `sample_request_click` | A "Request a Sample" / "Start Your Project" / "اطلب عينة" CTA is clicked | — | `CtaButton`, `Navbar`, category pages |
| `meeting_booking_click` | A "Book a Meeting" / "احجز مكالمة" CTA is clicked | — | Reserved — **see note below** |
| `language_switch` | Language switcher is used | `from`, `to` | `LanguageSwitcher` |
| `design_upload_intent` | User attaches files to the inquiry form | `count` | `InquiryForm` |

## Notes

- **`contact_form_submit` fires only on success**, not on click. Failed submissions do not inflate the
  conversion count.
- **`meeting_booking_click` is defined but not yet wired to a CTA.** There is no booking tool
  (Calendly, Cal.com, etc.) configured for this site, and inventing a booking URL would produce a
  dead link. To enable: add the booking URL to `lib/site.ts`, then add a CTA with
  `event: analyticsEvents.meetingBookingClick` to the contact page content in
  `content/{en,ar}/pages.ts`.
- The floating WhatsApp button is mobile-only (`lg:hidden`), so `placement: 'float'` is a useful
  proxy for mobile WhatsApp conversion.
- Vercel Analytics custom events require the Pro plan to be visible in the dashboard. On Hobby the
  `track()` calls are no-ops — harmless, but worth knowing before checking for data.

## Verifying events locally

`track()` is a no-op in development unless debug mode is on. To confirm wiring, check the Network tab
for requests to `/_vercel/insights/event` on a production build (`npm run build && npm run start`).
