Primary Red: #C41E3A (Deep Red - like your current design)
Secondary Red: #E63946 (Bright Red for accents)
Dark Red: #8B0000 (For text/headers)
White: #FFFFFF
Off-White: #F8F9FA (Bootstrap light gray)
Text Gray: #333333
Light Gray: #E9ECEF (Borders/dividers)
```

---

## **SECTION 1: HERO SECTION**

### **Design Concept:**
- Full-width background (red with pattern/gradient)
- Centered content with white text
- Eye-catching headline
- Clear CTA buttons

### **Content Structure:**
```
┌────────────────────────────────────────┐
│  [Logo/Brand]         [Navigation]     │
│                                        │
│        JAY ON THE WAY                  │
│     BUILT FOR EVERYTHING.              │
│                                        │
│   Your Expert Guide to 20+ Career &    │
│        Skill Roadmaps                  │
│                                        │
│  [Explore Roadmaps] [Watch Videos]     │
│                                        │
│          ↓ Scroll Down                 │
└────────────────────────────────────────┘
```

### **Content:**
- **Main Headline**: "JAY ON THE WAY" (Bold, large)
- **Subheadline**: "BUILT FOR EVERYTHING."
- **Description**: "Get expert-crafted roadmaps for any skill or career. Save months of research and start your journey today."
- **CTA Buttons**: 
  - Primary: "Browse Roadmaps" (White button with red text)
  - Secondary: "Watch Videos" (Transparent button with white border)

### **Bootstrap Components:**
- `.container-fluid` for full-width
- `.row` and `.col-lg-12` for centering
- `.btn-light` and `.btn-outline-light` for CTAs
- `.display-1` and `.lead` for typography

---

## **SECTION 2: ALL ROADMAPS SHOWCASE**

### **Design Concept:**
- White background
- Grid layout with cards
- Hover effects on cards
- "Buy Now" or "View Details" buttons

### **Content Structure:**
```
┌─────────────────────────────────────────────┐
│         EXPLORE OUR ROADMAPS                │
│  Choose your path and start your journey    │
│                                             │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐           │
│  │Map │  │Tutor│  │Cont│  │Traf│           │
│  │₹499│  │₹699│  │ent │  │fic │           │
│  └────┘  └────┘  └────┘  └────┘           │
│                                             │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐           │
│  │Kisan│  │Game│  │Abroad│ │Support│        │
│  └────┘  └────┘  └────┘  └────┘           │
│                                             │
│         [View All Roadmaps]                 │
└─────────────────────────────────────────────┘
```

### **Content for Each Roadmap Card:**
- Icon/Image (consistent style)
- Roadmap Title (e.g., "AI Roadmap")
- Brief Description (1 line: "Master AI from beginner to expert")
- Price (₹499, ₹999, etc.)
- [Buy Now] button (red background, white text)

### **All 20 Roadmaps to Display:**
1. **Map** - Career/Life Mapping
2. **Tutor** - Tutoring Business
3. **Content** - Content Creation
4. **Traffic** - Digital Marketing & Traffic Generation
5. **Export** - Export Business
6. **Web** - Web Development
7. **Kisan** - Agriculture & Farming
8. **Game** - Game Development
9. **ABROAD** - Working/Studying Abroad
10. **Support Job** - Support Job Careers
11. **AI** - Artificial Intelligence
12. **Virtual Assistant** - VA Business
13. **Gardening** - Gardening Business
14. **Farming** - Advanced Farming Techniques
15. **Homeopathy** - Homeopathy Practice
16. **SSC** - SSC CGL Preparation
17. **YouTube** - YouTube Channel Growth
18. **Fuel** - Fuel/Energy Sector
19. **Self Made** - Entrepreneurship
20. **2035** - Future Skills for 2035

### **Bootstrap Components:**
- `.container` with `.row`
- `.col-lg-3 .col-md-4 .col-sm-6` (4 cards per row on desktop)
- `.card` with `.card-body`
- `.btn-danger` for Buy Now buttons
- Hover effect with `.shadow` on hover

---

## **SECTION 3: YOUTUBE VIDEOS SECTION**

### **Design Concept:**
- Light red background (#FFE5E5 or light tint)
- Centered content with YouTube icon
- Embedded video or thumbnail
- Clear CTA to channel

### **Content Structure:**
```
┌──────────────────────────────────────────┐
│     [YouTube Icon]                       │
│                                          │
│   WATCH DETAILED ROADMAP VIDEOS          │
│   Subscribe for free resources & guides  │
│                                          │
│   [Embedded YouTube Video/Thumbnail]     │
│                                          │
│   [Subscribe to Channel] [Watch Videos]  │
└──────────────────────────────────────────┘
```

### **Content:**
- **Headline**: "WATCH DETAILED VIDEOS"
- **Subheadline**: "Get free insights, tutorials, and roadmap previews on our YouTube channel"
- **Embedded Video**: Latest/featured video (16:9 ratio)
- **Stats**: "500+ Videos | 50K+ Subscribers" (if applicable)
- **CTA Button**: "Subscribe Now" (Red button with white text, links to YouTube channel)

### **Bootstrap Components:**
- `.container`
- `.embed-responsive .embed-responsive-16by9` for video
- `.btn-danger` for CTA
- YouTube icon from Font Awesome

---

## **SECTION 4: INSTAGRAM FOLLOW SECTION**

### **Design Concept:**
- White background
- Instagram grid preview (3x3 posts)
- Instagram handle prominently displayed
- Gradient Instagram button

### **Content Structure:**
```
┌────────────────────────────────────────┐
│       [Instagram Icon]                 │
│                                        │
│      FOLLOW THE WAY MEDIA              │
│   Daily motivation, tips & community   │
│                                        │
│   [Grid of 6 Instagram Posts]          │
│                                        │
│   @thewaymedia                         │
│   [Follow on Instagram]                │
└────────────────────────────────────────┘
```

### **Content:**
- **Headline**: "FOLLOW THE WAY MEDIA"
- **Subheadline**: "Join 10K+ followers for daily insights and community updates"
- **Instagram Handle**: "@thewaymedia" (large, bold)
- **Image Grid**: 6 recent posts (2 rows, 3 columns)
- **CTA Button**: "Follow on Instagram" (Instagram gradient or red button)

### **Bootstrap Components:**
- `.container`
- `.row` with `.col-lg-4 .col-md-4 .col-sm-6` for image grid
- `.img-fluid` for responsive images
- Custom gradient button or `.btn-danger`

---

## **SECTION 5: 1:1 CALL BOOKING SECTION**

### **Design Concept:**
- Red background with white text
- Image of Jay or consultation graphic
- Calendly or form embed
- Benefits of 1:1 call

### **Content Structure:**
```
┌────────────────────────────────────────┐
│  [Image of Person]    GET PERSONALIZED │
│                            GUIDANCE    │
│                                        │
│                       Stuck somewhere? │
│                       Confused about   │
│                       where to start?  │
│                                        │
│                       Book a 1:1 call  │
│                       and get clarity  │
│                                        │
│  What You Get:                         │
│  ✓ 30-minute consultation              │
│  ✓ Personalized advice                 │
│  ✓ Roadmap recommendations             │
│  ✓ Q&A session                         │
│                                        │
│         [Book Your Call - ₹999]        │
└────────────────────────────────────────┘
```

### **Content:**
- **Headline**: "GET PERSONALIZED GUIDANCE"
- **Subheadline**: "Stuck somewhere? Confused about where to start? Or just need real guidance?"
- **Benefits List**:
  - ✓ 30-minute 1:1 consultation
  - ✓ Personalized roadmap recommendations
  - ✓ Career clarity and direction
  - ✓ Q&A with Jay
- **Pricing**: "₹999 per session" or "Book Now"
- **CTA Button**: "Schedule Your Call" (White button with red text, links to Calendly or form)

### **Bootstrap Components:**
- `.container`
- `.row` with `.col-md-6` (image left, content right)
- `.btn-light` for CTA
- Font Awesome checkmarks for list

---

## **SECTION 6: EMAIL CONTACT (ROADMAP SUPPORT)**

### **Design Concept:**
- Off-white background
- Simple, clean layout
- Email icon
- Contact form or email link

### **Content Structure:**
```
┌──────────────────────────────────────┐
│         [Email Icon]                 │
│                                      │
│    DIDN'T RECEIVE YOUR ROADMAP?      │
│   We're here to help                 │
│                                      │
│   If you didn't receive your roadmap │
│   after payment, please email us at: │
│                                      │
│      jayontheway@gmail.com           │
│                                      │
│   Or fill out the form below:        │
│   [Contact Form]                     │
└──────────────────────────────────────┘
```

### **Content:**
- **Headline**: "DIDN'T RECEIVE YOUR ROADMAP?"
- **Subheadline**: "Don't worry! We'll resend it within 24 hours."
- **Email**: jayananudi@gmail.com (from your PDF, displayed prominently)
- **Contact Form Fields**:
  - Name
  - Email
  - Order ID / Payment Screenshot
  - Message
  - [Submit] button
- **Response Time**: "We respond within 24 hours"

### **Bootstrap Components:**
- `.container`
- `.form-control` for input fields
- `.btn-danger` for Submit button
- Email icon from Font Awesome

---

## **SECTION 7: WHATSAPP COMMUNITY SECTION**

### **Design Concept:**
- WhatsApp green tint or light background
- WhatsApp icon prominently displayed
- Community benefits
- Join button

### **Content Structure:**
```
┌──────────────────────────────────────┐
│       [WhatsApp Icon]                │
│                                      │
│  JOIN THE "CREATORS & BUILDERS"      │
│      WHATSAPP COMMUNITY              │
│                                      │
│  Connect with like-minded people     │
│  building startups, side hustles,    │
│  personal brands, or creative        │
│  projects                            │
│                                      │
│  What You Get:                       │
│  ✓ Weekly resources & tools          │
│  ✓ Real growth support               │
│  ✓ No spam. Just pure hustle energy  │
│  ✓ Network with creators & builders  │
│                                      │
│        [Click Here to Join]          │
└──────────────────────────────────────┘
```

### **Content:**
- **Headline**: "JOIN THE 'CREATORS & BUILDERS' COMMUNITY"
- **Description**: "If you're someone who wants to build something — a startup, side hustle, personal brand, or creative project — this is your space. Network with like-minded people, get weekly resources, tools, and real growth support. No spam. Just pure hustle energy."
- **Benefits**:
  - ✓ Weekly resources and tools
  - ✓ Networking opportunities
  - ✓ Real growth support
  - ✓ No spam policy
- **CTA Button**: "Join WhatsApp Group" (Green button or red to match theme)

### **Bootstrap Components:**
- `.container`
- `.list-unstyled` for benefits
- Custom green button or `.btn-success`
- WhatsApp icon (Font Awesome or custom)

---

## **SECTION 8: JOBS & BUSINESS ALERTS**

### **Design Concept:**
- White background with red accents
- Bell/notification icon
- Subscription form
- Mobile phone mockup showing alerts

### **Content Structure:**
```
┌──────────────────────────────────────┐
│  [Phone Mockup]   JOBS & BUSINESS    │
│   with alerts          ALERTS        │
│                                      │
│                  Never miss an       │
│                  opportunity         │
│                                      │
│                  Get notified about: │
│                  • Job openings      │
│                  • Business ops      │
│                  • Freelance gigs    │
│                  • Collaborations    │
│                                      │
│                  [Subscribe Form]    │
│                  Email: [_______]    │
│                  [Get Alerts]        │
└──────────────────────────────────────┘
```

### **Content:**
- **Headline**: "JOBS & BUSINESS ALERTS"
- **Subheadline**: "Never miss an opportunity. Get notified first."
- **What You'll Receive**:
  - Job openings in your field
  - Business opportunities
  - Freelance projects
  - Collaboration requests
- **Subscription Form**:
  - Email input field
  - [Subscribe] button (Red)
- **Frequency**: "Weekly digest, no spam"

### **Bootstrap Components:**
- `.container`
- `.row` with `.col-md-6` (mockup left, form right)
- `.input-group` for email input with button
- `.btn-danger` for submit
- Bell icon from Font Awesome

---

## **SECTION 9: OWN THE SPOTLIGHT (MODELING/ACTING FORM)**

### **Design Concept:**
- Bold red background
- Large, impactful headline
- Image of model/actor or spotlight
- Google Form embed or custom form

### **Content Structure:**
```
┌───────────────────────────────────────┐
│  [Spotlight Image/Model Photo]        │
│                                       │
│      OWN THE SPOTLIGHT.               │
│  BE A MODEL AND ACTOR INTERNATIONALLY │
│                                       │
│  Take your career to the global stage │
│                                       │
│  Fill the form below to get started:  │
│  [Embedded Google Form]               │
│                                       │
└───────────────────────────────────────┘
```

### **Content:**
- **Headline**: "OWN THE SPOTLIGHT."
- **Subheadline**: "BE A MODEL AND ACTOR INTERNATIONALLY."
- **Description**: "Ready to take your modeling or acting career global? Fill out the form below and we'll guide you through the process."
- **Google Form**: Embedded iframe
- **Form Fields** (in Google Form):
  - Full Name
  - Age
  - Location
  - Experience Level
  - Portfolio Link (optional)
  - Contact Information
  - Why do you want to pursue this?

### **Bootstrap Components:**
- `.container-fluid` for full-width
- Red background with `.bg-danger` or custom class
- White text with `.text-white`
- `.embed-responsive` for Google Form iframe

---

## **SECTION 10: FOOTER**

### **Design Concept:**
- Dark red or black background
- White text
- Multiple columns with links
- Social media icons
- Copyright notice

### **Content Structure:**
```
┌─────────────────────────────────────────────────┐
│  Jay On The Way  |  Quick Links  |  Connect     │
│                  |               |              │
│  Built for       |  Home         |  YouTube     │
│  Everything.     |  Roadmaps     |  Instagram   │
│                  |  About        |  WhatsApp    │
│  [Logo]          |  Contact      |  Email       │
│                  |  FAQs         |              │
│                  |  Terms        |              │
│                  |  Privacy      |              │
│                                                  │
│  © 2026 Jay On The Way. All rights reserved.    │
│  Made with ❤️ in India                          │
└─────────────────────────────────────────────────┘
```

### **Content:**
- **Column 1**: Brand
  - Logo/Brand name
  - Tagline: "Built for Everything"
  - Brief description
- **Column 2**: Quick Links
  - Home
  - All Roadmaps
  - About Jay
  - Contact Support
  - FAQs
  - Terms & Conditions
  - Privacy Policy
- **Column 3**: Connect
  - YouTube (icon + link)
  - Instagram (icon + link)
  - WhatsApp Community (icon + link)
  - Email (icon + email)
- **Bottom Bar**:
  - Copyright © 2026 Jay On The Way
  - "Made with ❤️ in India"

### **Bootstrap Components:**
- `.container-fluid` with dark background
- `.row` with `.col-md-4` for 3 columns
- `.list-unstyled` for links
- Font Awesome social icons
- `.text-center` for copyright

---

## **NAVIGATION BAR (Top of Hero)**

### **Content:**
```
┌────────────────────────────────────────────┐
│ [Logo] JAY ON THE WAY                      │
│                   Home | Roadmaps | Videos │
│                   | Contact | Call         │
└────────────────────────────────────────────┘