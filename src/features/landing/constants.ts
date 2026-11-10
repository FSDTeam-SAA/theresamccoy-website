export const assets = {
  logo: "/images/landing/imgImage149.png",
  hero: "/images/landing/imgFrame2147235316.png",
  heroUnderline: "/images/landing/imgVector9.svg",
  profileUnderline: "/images/landing/imgVector10.svg",
  businessOwner: "/images/landing/imgRectangle3463433.png",
  bookkeepers: "/images/landing/imgRectangle3463435.png",
  process: "/images/landing/imgFrame1272629626.svg",
  matched: "/images/landing/imgFrame2147231478.png",
  professional: "/images/landing/imgFrame2147231474.png",
  satisfaction: "/images/landing/imgFrame2147231476.png",
  clocks: "/images/landing/imgFrame2147231479.png",
  portrait1: "/images/landing/imgRectangle3463439.png",
  portrait2: "/images/landing/imgRectangle3463438.png",
  portrait3: "/images/landing/imgRectangle3463436.png",
  portrait4: "/images/landing/imgRectangle3463437.png",
  portrait5: "/images/landing/imgRectangle3463440.png",
  quote: "/images/landing/img.svg",
  previous: "/images/landing/imgFrame.svg",
  next: "/images/landing/imgFrame1.svg",
  pagination: "/images/landing/imgFrame2147235322.svg",
  readyCard: "/images/landing/imgExclude.svg",
  certifiedCard: "/images/landing/imgExclude1.svg",
  eliteCard: "/images/landing/imgExclude2.svg",
  readyIcon: "/images/landing/imgMdiMarketplace.svg",
  certifiedIcon: "/images/landing/imgIcBaselineGppGood.svg",
  eliteIcon: "/images/landing/imgIcSharpStar.svg",
  check: "/images/landing/imgFrame2.svg",
  checkLight: "/images/landing/imgFrame3.svg",
  certification: "/images/landing/imgFrame2147234607.png",
  faq: "/images/landing/imgImage71.png",
  plus: "/images/landing/imgFrame5.svg",
  minus: "/images/landing/imgFrame4.svg",
  arrow: "/images/landing/imgIonArrowUpOutline1.svg",
  applyArrow: "/images/landing/imgIonArrowUpOutline2.svg",
  marketplaceArrow: "/images/landing/imgIonArrowUpOutline.svg",
  profileArrow: "/images/landing/imgIonArrowUpOutline3.svg",
  facebook: "/images/landing/imgFacebook.svg",
  x: "/images/landing/imgXLogoSvg.svg",
  instagram: "/images/landing/imgInstagram.svg",
  linkedin: "/images/landing/imgLinkedin.svg",
  youtube: "/images/landing/imgYoutube.svg",
  email: "/images/landing/imgIcRoundEmail.svg",
  address: "/images/landing/imgMdiAddressMarker.svg",
  phone: "/images/landing/imgMdiCall.svg",
  divider: "/images/landing/imgDivider.svg",
  dot: "/images/landing/imgEllipse2318.svg",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Training", href: "/training" },
  { label: "Apply", href: "/#apply" },
  { label: "Contact", href: "#contact" },
] as const;

export const processSteps = [
  {
    title: "Apply & Upload Your Resume",
    description:
      "Submit your application online in under 20 minutes. Upload your resume, list your software proficiencies, and provide professional references. Our system begins processing your profile immediately.",
  },
  {
    title: "Complete the Skills Assessment",
    description:
      "You'll be invited to complete our adaptive online assessment — covering bookkeeping principles, reconciliation scenarios, software knowledge, and professional judgment. Responses are automatically scored against our benchmarks.",
  },
  {
    title: "Receive Your Score & Enrol in Training",
    description:
      "Your assessment score determines your starting tier. You'll be enrolled in a tailored training path with curated courses, live workshops, and access to our specialization tracks — all structured around your gaps and goals.",
  },
  {
    title: "Complete CPA Sign-Off & Get Approved",
    description:
      "Complete the required CPA sign-off process. Once your training and requirements are completed, your profile will be reviewed and signed off by a CPA before you are approved to join the marketplace.",
  },
  {
    title: "Go Live in the Marketplace",
    description:
      "Your verified profile is published. Businesses submitting intake requests are matched to professionals like you based on skills, availability, specialization, and assessment scores. You start receiving curated opportunities.",
  },
] as const;

export const tierFeatures = [
  "Core bookkeeping & reconciliation",
  "QuickBooks Online & Xero essentials",
  "Payroll fundamentals",
  "Client communication standards",
  "Compliance & ethics foundations",
] as const;

export const tiers = [
  {
    name: "Marketplace Ready",
    duration: "4 weeks",
    background: assets.readyCard,
    icon: assets.readyIcon,
    featured: false,
  },
  {
    name: "Marketplace Certified",
    duration: "8 weeks",
    background: assets.certifiedCard,
    icon: assets.certifiedIcon,
    featured: true,
  },
  {
    name: "Marketplace Elite",
    duration: "12 weeks",
    background: assets.eliteCard,
    icon: assets.eliteIcon,
    featured: false,
  },
] as const;

export const questions = [
  "What construction services do you provide?",
  "Do you work on both residential and commercial projects?",
  "Can I request a free project estimate?",
  "What is your construction process?",
  "Do you provide site preparation and foundation services?",
] as const;
