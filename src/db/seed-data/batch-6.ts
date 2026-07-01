import type { ToolSeed } from "./types";

export const batch6: ToolSeed[] = [
  // ---------- real-estate ----------
  {
    slug: "property-details-to-listing-description",
    category: "real-estate",
    inputType: "property details",
    outputType: "listing description",
    promptTemplate:
      "Turn the following raw property details (bedrooms, bathrooms, square footage, features) into a polished, engaging real estate listing description of 3-5 sentences. Use warm, professional real estate language without sounding like a cliche. Return only the description, no preamble.\n\nProperty details:\n{input}",
    seoTitle: "Free Property Details to Listing Description Tool",
    seoDescription:
      "Turn raw property specs into a polished, buyer-ready listing description in seconds. Free AI tool for real estate agents, no signup required.",
    h1: "Turn Property Details Into a Listing Description",
    introCopy:
      "Agents usually start with a spec sheet: bedroom count, square footage, a few standout features scribbled from a walkthrough. This tool takes that raw list and writes it up as a real listing description ready to paste into MLS or a marketing flyer. It's built for the first-draft stage, when you have the facts but not the framing, and it avoids the overused real estate cliches that make every listing sound the same. If you already have a draft description and just want it shorter, use the listing description shortener instead — this one is for going from bullet points to prose.",
    exampleInput:
      "3 bed, 2 bath, 1,800 sqft. Renovated kitchen with quartz counters. Fenced backyard. Built 1998. 10 min from downtown.",
    exampleOutput:
      "Welcome to this beautifully updated 3-bedroom, 2-bathroom home offering 1,800 square feet of comfortable living space. The renovated kitchen shines with sleek quartz countertops, perfect for both everyday meals and entertaining. Step outside to a private, fully fenced backyard ideal for relaxing or hosting friends. Built in 1998 and just 10 minutes from downtown, this home blends convenience with a quiet, established neighborhood feel.",
    faq: [
      {
        question: "Does it exaggerate or invent features I didn't list?",
        answer:
          "No — it only writes up what you provide. It adds descriptive language and flow, not new facts, so you should still proofread against your MLS data sheet before publishing.",
      },
      {
        question: "Can I feed it a messy, unformatted list of notes?",
        answer:
          "Yes. Bullet points, abbreviations, or a rough paragraph from a walkthrough all work fine — the tool is designed to work from raw notes, not a clean brief.",
      },
      {
        question: "Will the tone work for luxury listings?",
        answer:
          "It defaults to warm and professional rather than high-luxury. For a more upscale, aspirational tone, try the property description tone shifter on the output.",
      },
    ],
  },
  {
    slug: "listing-description-shortener",
    category: "real-estate",
    inputType: "listing description",
    outputType: "short listing description",
    promptTemplate:
      "Shorten the following real estate listing description to under 400 characters while keeping the most compelling selling points. Suitable for MLS character limits or a short flyer blurb. Return only the shortened description, no preamble.\n\nListing description:\n{input}",
    seoTitle: "Free Listing Description Shortener for Real Estate",
    seoDescription:
      "Trim a long real estate listing down to under 400 characters without losing the selling points. Free AI tool, no signup needed.",
    h1: "Shorten a Real Estate Listing Description",
    introCopy:
      "Many MLS systems and syndication feeds cap description length, and a listing written for a flyer often runs too long for those fields. This tool takes an existing, already-written description and compresses it, keeping the two or three details most likely to hook a buyer (renovated kitchen, lot size, location) and cutting the rest. It's meant for editing down, not writing from scratch — if you're starting from raw property facts instead of a finished paragraph, use the property details to listing description tool first.",
    exampleInput:
      "This stunning 4-bedroom, 3-bathroom colonial sits on a quiet cul-de-sac and features a chef's kitchen with stainless steel appliances, a spacious primary suite with a walk-in closet, hardwood floors throughout the main level, a finished basement perfect for a home theater or playroom, and a large backyard with a new deck ideal for summer entertaining. Located minutes from top-rated schools and shopping.",
    exampleOutput:
      "Stunning 4BR/3BA colonial on a quiet cul-de-sac. Chef's kitchen, hardwood floors, finished basement, and a backyard deck built for entertaining. Minutes from top-rated schools and shopping.",
    faq: [
      {
        question: "What character limit does this target?",
        answer:
          "It aims for under 400 characters, which covers most MLS description fields, but you should confirm the exact limit for your specific MLS since they vary by region.",
      },
      {
        question: "Which details get cut first?",
        answer:
          "Secondary details like exact dimensions or minor amenities are trimmed before headline features like bedroom count, renovations, and location.",
      },
      {
        question: "Can I run the output through this tool again to shorten it further?",
        answer:
          "Yes, though very short inputs may not compress much more — this tool works best going from long-form to medium-length in one pass.",
      },
    ],
  },
  {
    slug: "open-house-announcement-generator",
    category: "real-estate",
    inputType: "property and event details",
    outputType: "open house announcement",
    promptTemplate:
      "Write an inviting open house announcement using the following property and event details (address, date, time, any highlights). Keep it energetic and suitable for social media or a neighborhood flyer. Return only the announcement, no preamble.\n\nDetails:\n{input}",
    seoTitle: "Free Open House Announcement Generator",
    seoDescription:
      "Turn property and event details into a ready-to-post open house announcement. Free AI tool for real estate agents, no signup required.",
    h1: "Generate an Open House Announcement",
    introCopy:
      "An open house announcement has a different job than a listing description — it needs to create urgency around a specific date and time, not just sell the house. Feed this tool the address, the open house window, and one or two standout features, and it writes copy built to drive foot traffic, phrased for a Facebook post, a neighborhood flyer, or a text to your client list. It's shorter and more action-oriented than the full listing description, which is meant for the property's permanent MLS entry.",
    exampleInput:
      "142 Birchwood Lane, Sunday June 8, 1-4pm. Newly renovated, big backyard, walk to elementary school.",
    exampleOutput:
      "OPEN HOUSE THIS SUNDAY! Join us at 142 Birchwood Lane from 1-4 PM to tour this newly renovated gem. With a spacious backyard perfect for summer gatherings and an easy walk to the elementary school, this one won't last. Stop by Sunday, June 8th — we'd love to show you around!",
    faq: [
      {
        question: "Can I use this for a virtual open house?",
        answer:
          "Yes — just note in your input that it's virtual and include the link or platform, and the tool will adjust the call to action accordingly.",
      },
      {
        question: "Does it include the property price?",
        answer:
          "Only if you include it in your input. Many agents leave price out of open house announcements intentionally, so the tool won't add it on its own.",
      },
      {
        question: "Is the output long enough for a printed flyer?",
        answer:
          "It's sized for social media and text messages. For a flyer you may want to pair it with the full listing description tool for additional body copy.",
      },
    ],
  },
  {
    slug: "property-description-tone-shifter",
    category: "real-estate",
    inputType: "listing description",
    outputType: "tone-shifted description",
    promptTemplate:
      "Rewrite the following real estate listing description in a more upscale, luxury-market tone, using more evocative and aspirational language while keeping all factual details accurate. Return only the rewritten description, no preamble.\n\nListing description:\n{input}",
    seoTitle: "Free Real Estate Listing Tone Shifter Tool",
    seoDescription:
      "Rewrite a standard listing description in a more upscale, luxury tone without changing the facts. Free AI tool, no signup required.",
    h1: "Shift the Tone of a Listing Description",
    introCopy:
      "The same three-bedroom house can be described as \"move-in ready\" or as \"an exceptional opportunity to make this residence your own,\" depending on the market you're targeting. This tool takes a standard listing description and elevates the language toward a luxury, aspirational register, without changing bedroom counts, square footage, or any other fact. It's useful when a property is priced or positioned above the neighborhood average and the existing copy reads too plainly for that buyer pool.",
    exampleInput:
      "Nice 3 bedroom house with updated kitchen and a big yard. Good location near schools.",
    exampleOutput:
      "Discover refined living in this exquisite 3-bedroom residence, where a thoughtfully updated kitchen sets the stage for effortless entertaining. The expansive grounds offer a private retreat for outdoor gatherings, while the coveted location near top schools makes this an exceptional opportunity for discerning buyers.",
    faq: [
      {
        question: "Will it change the number of bedrooms or other facts?",
        answer:
          "No — it only rewrites the language and tone. All factual details from your input are preserved, just expressed more elegantly.",
      },
      {
        question: "Can I go the other direction, from luxury to plain-spoken?",
        answer:
          "This tool is built specifically for upscaling tone. For a plainer, more direct rewrite, paste your description into a general tone-down request instead.",
      },
      {
        question: "Is this suitable for commercial real estate listings?",
        answer:
          "It's optimized for residential language and phrasing. Commercial listings often need different terminology, so review the output carefully before use.",
      },
    ],
  },
  {
    slug: "listing-to-social-caption",
    category: "real-estate",
    inputType: "listing description",
    outputType: "social media caption",
    promptTemplate:
      "Convert the following real estate listing description into a short, scroll-stopping Instagram or Facebook caption with 2-3 relevant hashtags. Return only the caption, no preamble.\n\nListing description:\n{input}",
    seoTitle: "Free Listing Description to Social Caption Tool",
    seoDescription:
      "Turn a real estate listing description into a punchy social media caption with hashtags. Free AI tool for agents, no signup needed.",
    h1: "Turn a Listing Into a Social Media Caption",
    introCopy:
      "A full listing description is too long and too formal for Instagram or Facebook, where the first line has to earn a stop-scroll before anyone reads the rest. This tool condenses a listing description into a short, punchy caption with a couple of relevant hashtags, written for a photo carousel post rather than an MLS entry. It's the social counterpart to the open house announcement tool — use this one for evergreen \"just listed\" posts, and the open house tool when you're promoting a specific showing date.",
    exampleInput:
      "This charming 2-bedroom bungalow features original hardwood floors, a sunlit front porch, and a fully updated bathroom, all within walking distance of the farmers market and downtown shops.",
    exampleOutput:
      "Charm alert! This 2-bed bungalow has original hardwood floors, a sunny front porch, and a freshly updated bath — steps from the farmers market and downtown. Come fall in love. 🏡\n\n#JustListed #BungalowLife #HomeSweetHome",
    faq: [
      {
        question: "Does it choose the hashtags automatically?",
        answer:
          "Yes, it picks 2-3 hashtags relevant to the property type and features described, but feel free to swap in hashtags specific to your city or brokerage.",
      },
      {
        question: "Can I get a version without emojis?",
        answer:
          "The generated caption may include a light touch of emojis for social media style. If you prefer none, just remove them manually from the output.",
      },
      {
        question: "Is this suitable for a TikTok video caption too?",
        answer:
          "Yes, the length and tone work well for TikTok or Reels captions in addition to static Instagram and Facebook posts.",
      },
    ],
  },
  {
    slug: "buyer-inquiry-response-generator",
    category: "real-estate",
    inputType: "buyer inquiry",
    outputType: "response message",
    promptTemplate:
      "Write a warm, helpful, professional response to the following buyer inquiry about a property. Answer their question directly and invite further engagement (a showing, a call, more details). Return only the response message, no preamble.\n\nBuyer inquiry:\n{input}",
    seoTitle: "Free Real Estate Buyer Inquiry Response Generator",
    seoDescription:
      "Turn a buyer's question about a listing into a warm, professional reply that moves the conversation forward. Free AI tool, no signup.",
    h1: "Generate a Response to a Buyer Inquiry",
    introCopy:
      "Buyer inquiries land at all hours and often just say something like \"is this still available?\" or \"can you tell me more about the HOA fees?\" — quick to read, but each one deserves a reply that feels personal, not copy-pasted. This tool takes the buyer's actual question and drafts a warm, specific response that answers it and nudges toward a next step, like scheduling a showing. It's meant for one-off replies to individual leads, not a mass email blast.",
    exampleInput:
      "Hi, is the house on Maple Ave still available? Also wondering what the property taxes are like.",
    exampleOutput:
      "Hi there! Yes, the home on Maple Ave is still available — glad you reached out. Property taxes currently run around $4,200 annually, though I'd recommend confirming the exact figure during due diligence. Would you like to schedule a showing this week? I'm happy to walk you through the property and answer any other questions in person.",
    faq: [
      {
        question: "What if the inquiry doesn't include a question I can answer directly?",
        answer:
          "The tool will draft a reasonable placeholder response and prompt for a showing or call — you should fill in any specific figures (like exact tax amounts) it can't know before sending.",
      },
      {
        question: "Can I use this for rental inquiries too?",
        answer:
          "Yes, it works for both sales and rental inquiries — just make sure the buyer's question in your input reflects the right context.",
      },
      {
        question: "Does it sound too salesy?",
        answer:
          "It's tuned to be warm and helpful first, with a soft invitation to continue the conversation rather than a hard sales push.",
      },
    ],
  },
  {
    slug: "property-features-to-highlights-list",
    category: "real-estate",
    inputType: "property features",
    outputType: "highlights list",
    promptTemplate:
      "Convert the following list of property features into a punchy bulleted highlights list suitable for a flyer or listing sidebar. Group similar items and use short, scannable phrases. Return only the bulleted list, no preamble.\n\nProperty features:\n{input}",
    seoTitle: "Free Property Features to Highlights List Tool",
    seoDescription:
      "Turn a raw list of property features into a clean, scannable highlights list for flyers and listings. Free AI tool, no signup required.",
    h1: "Turn Property Features Into a Highlights List",
    introCopy:
      "Sometimes you don't need prose at all — just a clean, scannable bulleted list of features for a flyer sidebar, a listing website widget, or a print handout at a showing. This tool takes a raw dump of features, however messy, and organizes them into short, punchy bullet points grouped logically (interior, exterior, location). It's the structured counterpart to the property details to listing description tool, which produces flowing prose instead of bullets.",
    exampleInput:
      "granite counters, 2 car garage, new roof 2023, central air, walk-in closets, near park, hardwood floors, updated electrical",
    exampleOutput:
      "- Granite countertops\n- Hardwood floors throughout\n- Walk-in closets\n- 2-car garage\n- New roof (2023)\n- Updated electrical\n- Central air conditioning\n- Steps from the park",
    faq: [
      {
        question: "Will it group related features together?",
        answer:
          "Yes — it clusters similar items like interior finishes, systems/updates, and location perks so the list reads logically rather than randomly ordered.",
      },
      {
        question: "How many bullets does it typically produce?",
        answer:
          "It usually mirrors the number of distinct features you provide, condensing only when two items clearly overlap (e.g. two mentions of the same upgrade).",
      },
      {
        question: "Can I paste in features from multiple rooms at once?",
        answer:
          "Yes, that's the ideal use case — dump features from your whole walkthrough and the tool will sort them into a clean list.",
      },
    ],
  },
  {
    slug: "listing-description-seo-optimizer",
    category: "real-estate",
    inputType: "listing description",
    outputType: "SEO-optimized description",
    promptTemplate:
      "Rewrite the following real estate listing description to be more search-engine friendly, naturally incorporating likely buyer search terms (location, property type, key features) without keyword stuffing. Return only the rewritten description, no preamble.\n\nListing description:\n{input}",
    seoTitle: "Free Listing Description SEO Optimizer Tool",
    seoDescription:
      "Rewrite your listing description to naturally include buyer search terms for better visibility online. Free AI tool, no signup required.",
    h1: "Optimize a Listing Description for Search",
    introCopy:
      "Listings posted to an agent's own website or blog can rank in search results if the description includes the terms buyers actually type in, like \"3 bedroom house near [neighborhood]\" or \"[city] home with pool.\" This tool rewrites an existing listing description to weave in those natural search phrases without turning it into obvious keyword stuffing, so it still reads well to a human while giving search engines more to latch onto. It's meant for listings hosted on your own site, not for MLS fields, which don't benefit from SEO phrasing.",
    exampleInput:
      "Beautiful home with a pool and updated kitchen, close to downtown.",
    exampleOutput:
      "This beautiful home with a private pool and updated kitchen offers an ideal location close to downtown — a rare find for buyers searching for a move-in-ready house near the city center. With modern finishes throughout and outdoor space perfect for entertaining, it's a standout choice among homes for sale downtown.",
    faq: [
      {
        question: "Does it know my specific city or neighborhood name?",
        answer:
          "Only if you include it in your input. Add the city, neighborhood, or landmark names you want emphasized so the tool can weave them in naturally.",
      },
      {
        question: "Will this hurt readability for actual buyers?",
        answer:
          "No — it's designed to keep the copy natural and readable. It avoids repeating the same phrase excessively, which would hurt both readability and search rankings.",
      },
      {
        question: "Should I use this for MLS listings?",
        answer:
          "It's better suited for your own website or blog, since MLS syndication typically doesn't index for search the same way an owned webpage does.",
      },
    ],
  },
  {
    slug: "neighborhood-description-generator",
    category: "real-estate",
    inputType: "neighborhood notes",
    outputType: "neighborhood description",
    promptTemplate:
      "Turn the following notes about a neighborhood or area into an engaging paragraph describing what it's like to live there, suitable for pairing with a property listing. Return only the paragraph, no preamble.\n\nNeighborhood notes:\n{input}",
    seoTitle: "Free Neighborhood Description Generator for Listings",
    seoDescription:
      "Turn quick notes about an area into an engaging neighborhood description to pair with your listing. Free AI tool, no signup required.",
    h1: "Generate a Neighborhood Description",
    introCopy:
      "Buyers aren't just buying a house, they're buying a commute, a school district, and a Saturday morning routine, and a good neighborhood blurb sells that lifestyle. This tool takes a few scattered notes about an area — nearby parks, walkability, restaurant scene, commute times — and turns them into a paragraph that pairs naturally alongside a property listing. Unlike the property description tools in this batch, this one is entirely about the surrounding area rather than the home itself.",
    exampleInput:
      "Quiet, tree-lined streets. 5 min to Main Street shops and cafes. Good elementary school. Farmers market on Saturdays.",
    exampleOutput:
      "Tucked along quiet, tree-lined streets, this neighborhood offers a relaxed pace without sacrificing convenience. Main Street's shops and cafes are just five minutes away, and families will appreciate the highly regarded elementary school nearby. On Saturday mornings, residents head to the local farmers market for fresh produce and a true sense of community.",
    faq: [
      {
        question: "Can I use this for a neighborhood I'm not personally familiar with?",
        answer:
          "You'll get better results if you provide accurate notes, since the tool only works with what you give it. Verify any specific claims (school ratings, commute times) before publishing.",
      },
      {
        question: "How long is the typical output?",
        answer:
          "It generates a single engaging paragraph, generally 3-5 sentences, sized to sit alongside a listing description rather than stand alone as a full area guide.",
      },
      {
        question: "Can it mention specific school names or ratings?",
        answer:
          "Yes, if you include them in your notes. It won't invent school names or ratings on its own, so be specific in your input for accuracy.",
      },
    ],
  },
  {
    slug: "listing-to-email-blast",
    category: "real-estate",
    inputType: "listing description",
    outputType: "email blast",
    promptTemplate:
      "Convert the following real estate listing description into a short marketing email suitable for sending to an agent's client list, including a subject line. Return only the email with subject line, no preamble.\n\nListing description:\n{input}",
    seoTitle: "Free Listing Description to Email Blast Generator",
    seoDescription:
      "Turn a property listing description into a ready-to-send marketing email with subject line. Free AI tool for agents, no signup required.",
    h1: "Turn a Listing Into an Email Blast",
    introCopy:
      "Sending a new listing to your client and referral list is one of the highest-conversion things an agent can do, but writing a fresh email for every property gets old fast. This tool takes a listing description you already have and restructures it into a short marketing email with a subject line, a punchy opening, and a clear call to action to reply or schedule a viewing. It's built for one-to-many email sends, distinct from the buyer inquiry response tool, which handles one-to-one replies to specific questions.",
    exampleInput:
      "Spacious 4-bedroom colonial with a renovated kitchen, finished basement, and large backyard, located in a top school district.",
    exampleOutput:
      "Subject: Just Listed: Spacious 4-Bedroom Colonial in a Top School District\n\nHi there,\n\nI wanted to make sure you saw this one first: a spacious 4-bedroom colonial featuring a beautifully renovated kitchen, a finished basement, and a large backyard — all in one of the area's top school districts.\n\nHomes like this move fast. Reply to this email or give me a call if you'd like to schedule a private tour.\n\nBest,\n[Your Name]",
    faq: [
      {
        question: "Does it include a placeholder for my name and contact info?",
        answer:
          "Yes, it typically closes with a placeholder sign-off like [Your Name] that you can replace with your own details and phone number before sending.",
      },
      {
        question: "Can I use this for a rental property email?",
        answer:
          "Yes — it works for rentals as well as sales, though you may want to tweak the call to action toward applications rather than tours.",
      },
      {
        question: "Will the subject line be too long for mobile inboxes?",
        answer:
          "It aims for a concise subject line, but always double-check it against your email platform's preview length before sending to a large list.",
      },
    ],
  },

  // ---------- text-message ----------
  {
    slug: "text-message-to-formal-message",
    category: "text-message",
    inputType: "text message",
    outputType: "formal message",
    promptTemplate:
      "Rewrite the following casual text message as a formal, professional message suitable for email or a workplace context, preserving the original meaning. Return only the rewritten message, no preamble.\n\nText message:\n{input}",
    seoTitle: "Free Text Message to Formal Message Converter",
    seoDescription:
      "Turn a casual text into a polished, formal message ready for email or work. Free AI tool, no signup required.",
    h1: "Turn a Text Message Into a Formal Message",
    introCopy:
      "Sometimes a message you drafted as a quick text needs to be sent somewhere more formal instead, like a work email thread or a message to someone you don't know well. This tool takes casual, shorthand text — slang, fragments, lowercase everything — and rewrites it in complete, professional sentences while keeping the original point intact. It's the mirror image of the tone shifter tool in this batch, which can go either direction; this one specifically targets a formal, workplace-appropriate register.",
    exampleInput: "hey cant make it tmrw, something came up, can we push to next week?",
    exampleOutput:
      "Hello, I wanted to let you know that I'm unable to attend tomorrow due to an unexpected conflict. Would it be possible to reschedule for next week?",
    faq: [
      {
        question: "Will it keep abbreviations like 'tmrw' or 'asap'?",
        answer:
          "No — it expands common texting shorthand into full words as part of making the message sound formal and professional.",
      },
      {
        question: "Can I use this to turn a text into an email?",
        answer:
          "Yes, the output is written in complete sentences suitable for pasting directly into an email body, though you may want to add a greeting and sign-off.",
      },
      {
        question: "Does it change the actual request I'm making?",
        answer:
          "No, it preserves your original meaning and intent — it only changes the wording and tone, not what you're asking for.",
      },
    ],
  },
  {
    slug: "breakup-text-softener",
    category: "text-message",
    inputType: "breakup text",
    outputType: "softened message",
    promptTemplate:
      "Rewrite the following breakup text to be kinder, gentler, and more respectful, while still clearly communicating the decision to end the relationship. Return only the rewritten message, no preamble.\n\nBreakup text:\n{input}",
    seoTitle: "Free Breakup Text Softener — Kinder Wording Tool",
    seoDescription:
      "Rewrite a breakup text to be gentler and more respectful while still being clear. Free AI tool, no signup required.",
    h1: "Soften a Breakup Text",
    introCopy:
      "Ending a relationship over text is already hard, and a message written in the heat of the moment can come across harsher or more abrupt than intended. This tool takes a draft breakup text and softens the delivery — reducing blame, adding warmth — while making sure the core message, that the relationship is ending, still comes through clearly rather than getting lost in vague language. It's specifically for romantic breakups, distinct from the general text tone shifter, which handles everyday messages.",
    exampleInput:
      "this isnt working anymore, im done, dont bother texting me",
    exampleOutput:
      "I've been thinking a lot about us, and I don't think this relationship is working the way I need it to anymore. I think it's best for both of us if we end things here. I'm sorry, and I hope you understand.",
    faq: [
      {
        question: "Will it make the message so soft that my point isn't clear?",
        answer:
          "No — the tool is designed to keep the breakup decision unambiguous. It softens tone and word choice, not the clarity of the message itself.",
      },
      {
        question: "Can I use this for ending a friendship, not just a romantic relationship?",
        answer:
          "It's tuned for romantic breakups specifically. For friendships, the general text message tone shifter may produce more appropriate phrasing.",
      },
      {
        question: "Does it add closure or explanation I didn't include?",
        answer:
          "It won't invent reasons you didn't provide, but it may add brief softening language like an apology if it fits naturally with your original message.",
      },
    ],
  },
  {
    slug: "text-to-professional-email",
    category: "text-message",
    inputType: "text message",
    outputType: "professional email",
    promptTemplate:
      "Convert the following text message into a complete professional email, including an appropriate subject line, greeting, and sign-off. Return only the email, no preamble.\n\nText message:\n{input}",
    seoTitle: "Free Text Message to Professional Email Converter",
    seoDescription:
      "Turn a quick text into a full professional email with subject line and sign-off. Free AI tool, no signup required.",
    h1: "Turn a Text Message Into a Professional Email",
    introCopy:
      "You often think through a request as a quick text in your head — \"can we move the call to Thursday\" — before realizing it actually needs to go out as a proper email with a subject line and sign-off. This tool takes that short, informal message and builds it out into a complete email: subject line, greeting, body, and closing. Unlike the text to formal message tool, which only rewrites the sentence itself, this one produces the full email structure ready to send.",
    exampleInput: "hey can we move our call to thursday instead? something came up",
    exampleOutput:
      "Subject: Request to Reschedule Our Call\n\nHi [Name],\n\nI hope this message finds you well. Something has come up on my end, and I was wondering if we could move our call to Thursday instead. Please let me know if that works for you, or if another time would be better.\n\nThank you for understanding.\n\nBest regards,\n[Your Name]",
    faq: [
      {
        question: "Does it fill in the recipient's name automatically?",
        answer:
          "No — it uses a placeholder like [Name] since it doesn't know who you're emailing. Just swap in the correct name before sending.",
      },
      {
        question: "Will the subject line match my original text exactly?",
        answer:
          "It generates a subject line summarizing the purpose of your message, which usually won't match the text word-for-word but will reflect its intent.",
      },
      {
        question: "Can I use this for a text thread instead of a single message?",
        answer:
          "It's designed for a single message. If you paste in a full back-and-forth thread, it will attempt to summarize into one email but may lose some nuance.",
      },
    ],
  },
  {
    slug: "group-chat-message-summarizer",
    category: "text-message",
    inputType: "group chat messages",
    outputType: "summary",
    promptTemplate:
      "Summarize the following group chat conversation into a short digest covering the main topics discussed and any decisions or plans made. Return only the summary, no preamble.\n\nGroup chat messages:\n{input}",
    seoTitle: "Free Group Chat Message Summarizer Tool",
    seoDescription:
      "Catch up on a long group chat fast with a short summary of what was discussed and decided. Free AI tool, no signup required.",
    h1: "Summarize a Group Chat",
    introCopy:
      "Muting a group chat for a day means coming back to a hundred messages of jokes, tangents, and the one or two lines that actually mattered, like where everyone's meeting up. This tool reads through the raw thread and produces a short digest of the main topics and any plans or decisions that were made, so you can catch up in seconds instead of scrolling. It's built for casual group texts (friends, family, planning threads) rather than work chats, which tend to need a more formal action-item breakdown.",
    exampleInput:
      "sam: are we still on for saturday?\njess: yes! 7pm at marco's\nsam: perfect, should we invite alex?\njess: sure, i'll text him\ntom: can't make it, i have a thing\njess: no worries tom, next time",
    exampleOutput:
      "The group confirmed plans to meet Saturday at 7pm at Marco's. Jess is inviting Alex. Tom can't make it this time but is welcome next time.",
    faq: [
      {
        question: "Can it handle messages from multiple people with names attached?",
        answer:
          "Yes, paste in the chat with names or initials before each message and the summary will reflect who said or decided what.",
      },
      {
        question: "Will it capture inside jokes or off-topic banter?",
        answer:
          "No, it filters those out intentionally and focuses only on the substantive topics, plans, and decisions in the thread.",
      },
      {
        question: "Is this good for a long thread spanning several days?",
        answer:
          "It works best on a single continuous conversation. For multi-day threads, you'll get a cleaner summary if you paste in one day's messages at a time.",
      },
    ],
  },
  {
    slug: "text-message-tone-shifter",
    category: "text-message",
    inputType: "text message",
    outputType: "tone-shifted message",
    promptTemplate:
      "Rewrite the following text message in a warmer, friendlier tone while keeping the same core message. Return only the rewritten message, no preamble.\n\nText message:\n{input}",
    seoTitle: "Free Text Message Tone Shifter — Sound Friendlier",
    seoDescription:
      "Rewrite a blunt or flat text message in a warmer, friendlier tone. Free AI tool, no signup required.",
    h1: "Shift the Tone of a Text Message",
    introCopy:
      "Texts get misread as cold or curt more often than any other kind of message, mostly because there's no tone of voice to soften a short reply. This tool takes a message that reads flatter or blunter than you meant and rewrites it with a warmer, friendlier tone, without turning a quick text into a paragraph. It's a general-purpose tone fix — for the specific case of an awkward message you're not sure how to phrase at all, see the awkward text rewriter instead.",
    exampleInput: "cant today. busy.",
    exampleOutput: "Hey! I can't today, unfortunately — pretty swamped. Rain check soon?",
    faq: [
      {
        question: "Will it make short messages too long?",
        answer:
          "No, it keeps the length appropriate for a text message. It adds warmth through word choice, not length.",
      },
      {
        question: "Can I use this for a first message to someone new?",
        answer:
          "Yes, it works well for warming up an intro message, though you may still want to personalize it further with specific details.",
      },
      {
        question: "Does it add emojis automatically?",
        answer:
          "It may include a light, natural emoji if it fits the tone, but it won't overload the message — feel free to remove any you don't like.",
      },
    ],
  },
  {
    slug: "awkward-text-rewriter",
    category: "text-message",
    inputType: "awkward text draft",
    outputType: "smoother text",
    promptTemplate:
      "Rewrite the following awkward or overly wordy text message draft to sound natural, casual, and easy to read, removing any stiffness or over-explanation. Return only the rewritten message, no preamble.\n\nAwkward text draft:\n{input}",
    seoTitle: "Free Awkward Text Rewriter — Sound Natural",
    seoDescription:
      "Fix a stiff, overthought text draft so it reads natural and casual. Free AI tool, no signup required.",
    h1: "Rewrite an Awkward Text",
    introCopy:
      "You know the feeling: you've rewritten a text five times and it still sounds off, too formal, too explain-y, or just weirdly stilted for a casual conversation. This tool is built for exactly that moment — paste in the overthought draft and get back something that reads the way people actually text, trimmed of unnecessary qualifiers and stiff phrasing. Unlike the tone shifter, which nudges an already-fine message warmer or cooler, this one is for messages that just don't sound right yet, in either direction.",
    exampleInput:
      "I was wondering if perhaps you might possibly be free at some point this week, if that is convenient for you, to potentially grab coffee, no worries if not.",
    exampleOutput: "Hey, would you be free to grab coffee sometime this week? No worries if not!",
    faq: [
      {
        question: "Does it change what I'm actually asking for?",
        answer:
          "No, it keeps your request or point the same — it just strips out the hedging and over-explaining that makes a text feel awkward to read.",
      },
      {
        question: "Will it make my message sound too casual for the situation?",
        answer:
          "It aims for a natural, everyday texting tone. If the context is more formal, try the text to formal message tool instead.",
      },
      {
        question: "Can I use this for texts to a crush or new date?",
        answer:
          "Yes, this is a common use case — it's especially good at cutting overthought, nervous-sounding drafts down to something more confident and natural.",
      },
    ],
  },
  {
    slug: "text-message-to-voicemail-script",
    category: "text-message",
    inputType: "text message",
    outputType: "voicemail script",
    promptTemplate:
      "Convert the following text message into a natural-sounding voicemail script, phrased the way someone would actually speak it aloud. Return only the voicemail script, no preamble.\n\nText message:\n{input}",
    seoTitle: "Free Text Message to Voicemail Script Converter",
    seoDescription:
      "Turn a text message into a natural-sounding voicemail script you can read aloud. Free AI tool, no signup required.",
    h1: "Turn a Text Into a Voicemail Script",
    introCopy:
      "Written text and spoken language don't sound the same — a text can be a clipped fragment, but a voicemail needs to flow like actual speech, with a greeting and a natural sign-off. This tool takes the content of a text message you were planning to send and rephrases it as something you could read aloud into someone's voicemail, filling in the conversational connectors that written text usually skips. It's handy when you've already typed out your thoughts but realize a call is more appropriate than a text.",
    exampleInput: "running late, stuck in traffic, be there in 20",
    exampleOutput:
      "Hey, it's me — just wanted to let you know I'm running a little late, I'm stuck in traffic right now. I should be there in about 20 minutes. Sorry about that, see you soon!",
    faq: [
      {
        question: "Does it add a greeting like 'hey it's me'?",
        answer:
          "Yes, it naturally adds conversational openers and closers since a voicemail needs more spoken structure than a text message does.",
      },
      {
        question: "Can I edit in the person's name?",
        answer:
          "Absolutely — add the name to your input text and the script will include it, or you can insert it manually into the output afterward.",
      },
      {
        question: "Will the script sound robotic if I read it exactly?",
        answer:
          "It's written to sound like natural speech, but feel free to adjust pacing or wording slightly to match your own voice when you record it.",
      },
    ],
  },
  {
    slug: "late-reply-text-generator",
    category: "text-message",
    inputType: "context about a late reply",
    outputType: "late reply text",
    promptTemplate:
      "Write a natural, casual text message apologizing for a late reply based on the following context, without being overly formal or making a big deal out of it. Return only the text message, no preamble.\n\nContext:\n{input}",
    seoTitle: "Free Late Reply Text Message Generator",
    seoDescription:
      "Generate a casual, natural text apologizing for a late reply. Free AI tool, no signup required.",
    h1: "Generate a Late Reply Text",
    introCopy:
      "Replying to a text three days late creates a small but real question of how to acknowledge the gap without making it weirdly formal or drawing more attention to it than necessary. This tool takes a bit of context — how late you are, why, what the original message was about — and drafts a short, casual line to open your reply with, striking a balance between acknowledging the delay and just moving the conversation forward. It's distinct from the general apology tools in this batch, which are built for more serious situations than a slow text reply.",
    exampleInput: "friend asked if I wanted to hang out, I never replied and it's been 4 days, was just busy with work",
    exampleOutput: "Ugh, sorry for the radio silence — work's been a lot this week! Still down to hang out, when works for you?",
    faq: [
      {
        question: "Will it sound too apologetic for a minor delay?",
        answer:
          "No, it's calibrated to be casual and light rather than over-apologizing, which usually reads better for everyday late replies among friends.",
      },
      {
        question: "Can I use this for a late reply to a work message?",
        answer:
          "This tool leans casual. For a work context, try the text to professional email tool, which can incorporate a similar brief apology in formal phrasing.",
      },
      {
        question: "Does it need to know exactly how many days late I am?",
        answer:
          "It's not required, but including it helps the tool calibrate how much (or little) acknowledgment the delay needs.",
      },
    ],
  },
  {
    slug: "text-message-clarity-improver",
    category: "text-message",
    inputType: "text message",
    outputType: "clearer message",
    promptTemplate:
      "Rewrite the following text message to be clearer and easier to understand, removing ambiguity and making sure the main point is obvious, while keeping it casual and text-appropriate in length. Return only the rewritten message, no preamble.\n\nText message:\n{input}",
    seoTitle: "Free Text Message Clarity Improver Tool",
    seoDescription:
      "Rewrite a confusing text message so the point is clear and unambiguous. Free AI tool, no signup required.",
    h1: "Make a Text Message Clearer",
    introCopy:
      "A text written in a hurry can leave the reader guessing what you actually mean, especially when it references plans, times, or people without enough context. This tool takes a vague or confusingly worded text and rewrites it so the main point is unmistakable, while still keeping the casual, brief style appropriate for texting. It's a good sanity check before sending anything with a time, place, or decision embedded in it, where ambiguity actually causes problems rather than just reading a bit informal.",
    exampleInput: "so are we doing the thing later or should I just meet you there",
    exampleOutput: "Are we leaving together later, or should I just meet you there directly?",
    faq: [
      {
        question: "Will it guess at ambiguous references like 'the thing'?",
        answer:
          "It will try to interpret unclear references based on context, but for best results, be as specific as you can in your input about what you mean.",
      },
      {
        question: "Does this shorten my message too?",
        answer:
          "It focuses on clarity rather than length, though clearer phrasing is often naturally more concise as a side effect.",
      },
      {
        question: "Is this different from the awkward text rewriter?",
        answer:
          "Yes — the awkward text rewriter fixes stiff or overwritten phrasing, while this tool specifically targets messages that are unclear or ambiguous in meaning.",
      },
    ],
  },
  {
    slug: "roommate-request-text-generator",
    category: "text-message",
    inputType: "roommate issue description",
    outputType: "request text",
    promptTemplate:
      "Write a friendly but direct text message to a roommate addressing the following issue and making a clear request, without sounding accusatory. Return only the text message, no preamble.\n\nRoommate issue:\n{input}",
    seoTitle: "Free Roommate Request Text Message Generator",
    seoDescription:
      "Turn a roommate issue into a friendly, direct text that makes your request clear without sounding accusatory. Free AI tool, no signup.",
    h1: "Generate a Roommate Request Text",
    introCopy:
      "Asking a roommate to do the dishes, keep it down, or split a bill is a small thing that's still easy to phrase badly over text, either coming across too passive to actually get results or too sharp and starting a fight. This tool takes a description of the issue and drafts a message that's friendly but direct, making the request clear while keeping the relationship on good terms. It's built specifically for shared-living situations, where you'll likely have this same conversation again, so the tone matters as much as the ask.",
    exampleInput: "roommate keeps leaving dirty dishes in the sink for days, it's gross and I want them to stop",
    exampleOutput:
      "Hey! Quick thing — could we try to keep dishes from piling up in the sink? It's been sitting for a few days and starting to smell a bit. No big deal, just want to keep the kitchen feeling fresh for both of us. Thanks!",
    faq: [
      {
        question: "Will this sound passive-aggressive?",
        answer:
          "No, it's designed to be direct about the request while staying friendly in tone, avoiding both passive-aggressiveness and outright confrontation.",
      },
      {
        question: "Can I use this for money-related requests, like splitting rent?",
        answer:
          "Yes, it works well for financial asks too — just describe the specific issue (a late payment, an unequal split) in your input.",
      },
      {
        question: "What if this is a repeated issue, not a first-time request?",
        answer:
          "Mention that in your input (e.g. 'this is the third time') and the tool will adjust the tone to be a bit firmer while still staying respectful.",
      },
    ],
  },

  // ---------- apology ----------
  {
    slug: "apology-message-generator",
    category: "apology",
    inputType: "description of what happened",
    outputType: "apology message",
    promptTemplate:
      "Write a sincere, personal apology message based on the following description of what happened. Keep it genuine and not overly formal, suitable for a text or personal note. Return only the apology message, no preamble.\n\nWhat happened:\n{input}",
    seoTitle: "Free Apology Message Generator — Sincere Wording",
    seoDescription:
      "Turn a description of what happened into a sincere, personal apology message. Free AI tool, no signup required.",
    h1: "Generate a Sincere Apology Message",
    introCopy:
      "Finding the right words for a personal apology is harder than it should be, especially when you're too close to the situation to know if you sound sincere or defensive. This tool takes a plain description of what happened — what you did, who it affected — and writes a genuine, personal apology suitable for a text or handwritten note, deliberately avoiding stiff, corporate-sounding phrasing. For workplace situations specifically, see the apology to team generator, which is tuned for a professional audience instead.",
    exampleInput: "forgot my friend's birthday and didn't reach out until 2 days later",
    exampleOutput:
      "I'm really sorry I missed your birthday and didn't reach out until now. There's no excuse — I should have remembered and made you feel celebrated on your day. I value our friendship a lot and I feel bad that I dropped the ball. I hope you can forgive me, and let's celebrate properly soon, even if it's a little late.",
    faq: [
      {
        question: "Will it make excuses for what happened?",
        answer:
          "No, it's written to take responsibility rather than justify or explain away the mistake, which tends to land better as a genuine apology.",
      },
      {
        question: "Can I use this for an apology to a family member?",
        answer:
          "Yes, it works for friends, family, or partners — just describe the situation and relationship context in your input for the best tone match.",
      },
      {
        question: "How is this different from the apology tone softener?",
        answer:
          "This tool writes an apology from scratch based on what happened. The tone softener takes an apology you've already drafted and makes the wording gentler.",
      },
    ],
  },
  {
    slug: "apology-email-generator",
    category: "apology",
    inputType: "description of what happened",
    outputType: "apology email",
    promptTemplate:
      "Write a professional apology email based on the following description of what happened, including a subject line, greeting, and sign-off. Return only the email, no preamble.\n\nWhat happened:\n{input}",
    seoTitle: "Free Apology Email Generator — Professional Wording",
    seoDescription:
      "Turn a description of a mistake into a full professional apology email. Free AI tool, no signup required.",
    h1: "Generate a Professional Apology Email",
    introCopy:
      "A professional apology email needs more structure than a text — a subject line that doesn't bury the lede, an opening that takes responsibility quickly, and a close that says what happens next. This tool builds that full structure from a plain description of the mistake, aimed at situations like missing a deadline, sending an error to a client, or dropping the ball on a commitment. It differs from the customer apology generator, which is written specifically for business-to-customer situations rather than internal or client-facing professional email.",
    exampleInput: "sent the wrong attachment to a client for their contract review, need to resend the correct one",
    exampleOutput:
      "Subject: Correction: Updated Contract Attachment\n\nHi [Name],\n\nI apologize for the confusion — the document I sent earlier was not the correct version for your contract review. I've attached the correct file to this email and want to make sure you have everything you need moving forward.\n\nThank you for your patience, and please don't hesitate to reach out if anything looks off.\n\nBest regards,\n[Your Name]",
    faq: [
      {
        question: "Does it include the corrected attachment or information automatically?",
        answer:
          "No, it only writes the email text. You'll still need to attach the correct file or include the specific details yourself before sending.",
      },
      {
        question: "Can I use this for an apology to my manager?",
        answer:
          "Yes, it works well for internal apologies to a manager or colleague as well as external, client-facing ones — the tone stays professional either way.",
      },
      {
        question: "Will it sound too formal for a close coworker?",
        answer:
          "It defaults to a professional email register. For a more casual internal message, the apology to team generator may be a better fit.",
      },
    ],
  },
  {
    slug: "customer-apology-generator",
    category: "apology",
    inputType: "customer issue description",
    outputType: "customer apology message",
    promptTemplate:
      "Write a professional customer service apology message based on the following issue description, acknowledging the problem and, if appropriate, describing next steps. Return only the message, no preamble.\n\nIssue description:\n{input}",
    seoTitle: "Free Customer Apology Message Generator",
    seoDescription:
      "Turn a customer issue into a professional, empathetic apology message with next steps. Free AI tool, no signup required.",
    h1: "Generate a Customer Apology Message",
    introCopy:
      "Customer-facing apologies carry more weight than personal ones because there's a business relationship (and sometimes a refund policy) riding on getting the tone right — empathetic but not groveling, clear about next steps without over-promising. This tool takes a plain description of the customer's issue and writes a response that acknowledges the problem and outlines what happens next, suitable for support tickets, reviews responses, or order-issue emails. The late delivery apology generator in this batch handles that one specific, very common scenario with more targeted phrasing.",
    exampleInput: "customer received a damaged product, they're upset and want a replacement",
    exampleOutput:
      "We're so sorry to hear your item arrived damaged — that's not the experience we want for you. We understand how frustrating this is, and we'd like to make it right immediately. We're sending out a replacement at no additional cost, and it should arrive within 3-5 business days. Thank you for your patience, and please reach out if there's anything else we can do.",
    faq: [
      {
        question: "Does it commit to specific compensation like a refund?",
        answer:
          "Only if you mention it in your input. The tool won't invent policy details like refund amounts or timelines on its own — include those specifics for accuracy.",
      },
      {
        question: "Can I use this for a public review response?",
        answer:
          "Yes, the tone works well for public responses to negative reviews as well as private support messages, though keep public responses slightly more concise.",
      },
      {
        question: "Will it sound generic if the issue is unusual?",
        answer:
          "The more detail you provide about the specific issue, the more tailored the response will be — vague inputs tend to produce more generic-sounding apologies.",
      },
    ],
  },
  {
    slug: "apology-tone-softener",
    category: "apology",
    inputType: "apology draft",
    outputType: "softened apology",
    promptTemplate:
      "Rewrite the following apology draft to sound gentler, warmer, and less defensive, while keeping the same core message. Return only the rewritten apology, no preamble.\n\nApology draft:\n{input}",
    seoTitle: "Free Apology Tone Softener — Sound Warmer",
    seoDescription:
      "Rewrite a stiff or defensive-sounding apology draft to be warmer and gentler. Free AI tool, no signup required.",
    h1: "Soften the Tone of an Apology",
    introCopy:
      "It's common to write an apology while still feeling a little defensive, and that tends to leak into the wording as subtle justifications or a clipped tone that undercuts the apology itself. This tool takes a draft you've already written and softens it, dialing back defensiveness and adding warmth, without changing what you're actually apologizing for. Use this after you've drafted something with the apology message generator, or with your own words, when it reads a bit harder-edged than you intended.",
    exampleInput: "sorry you feel that way but I didn't mean anything by it, guess I'll be more careful next time",
    exampleOutput:
      "I'm sorry — I can see now that what I said came across the wrong way, even though that wasn't my intention. I'll be more thoughtful about it going forward, and I appreciate you telling me.",
    faq: [
      {
        question: "Will it remove phrases like 'sorry you feel that way'?",
        answer:
          "Yes, it flags and rewrites classic non-apology phrasing like that, which tends to read as dismissive rather than genuinely sorry.",
      },
      {
        question: "Does it keep my original reasoning or explanation?",
        answer:
          "It keeps the substance but reframes defensive-sounding explanations so they read as context rather than an excuse.",
      },
      {
        question: "Can I use this on a very short apology, like one sentence?",
        answer:
          "Yes, it works on apologies of any length, though very short inputs will produce a proportionally short, still-natural output.",
      },
    ],
  },
  {
    slug: "late-delivery-apology-generator",
    category: "apology",
    inputType: "delivery delay details",
    outputType: "apology message",
    promptTemplate:
      "Write a customer apology message for a late delivery based on the following details, including an explanation if provided and reassurance about the order. Return only the message, no preamble.\n\nDelivery delay details:\n{input}",
    seoTitle: "Free Late Delivery Apology Message Generator",
    seoDescription:
      "Generate a customer apology for a late delivery, with reassurance and an updated timeline. Free AI tool, no signup required.",
    h1: "Generate a Late Delivery Apology",
    introCopy:
      "Late shipments are one of the most common reasons a business needs to apologize, and they come with a specific set of expectations: an acknowledgment, a reason if there is one, and — most importantly — a revised timeline. This tool is purpose-built for that exact scenario, taking delay details like the cause and new expected date and producing a message that reassures the customer their order hasn't been forgotten. It's narrower in scope than the general customer apology generator, which covers any kind of customer issue, not just shipping delays.",
    exampleInput: "order delayed due to a warehouse issue, new expected delivery is 3 days later than original estimate",
    exampleOutput:
      "We're reaching out to let you know your order has been delayed due to an issue at our warehouse. We're sorry for the inconvenience — your new estimated delivery date is 3 days later than originally promised. Rest assured your order is on its way, and we appreciate your patience.",
    faq: [
      {
        question: "Do I need to include the exact new delivery date?",
        answer:
          "It helps to include either an exact date or a relative timeframe (like '3 days later') so the message gives the customer something concrete to expect.",
      },
      {
        question: "Can it offer a discount or credit automatically?",
        answer:
          "No, it won't add compensation unless you mention it in your input — this keeps the tool from committing your business to something you haven't approved.",
      },
      {
        question: "Is this suitable for a mass email to many affected customers?",
        answer:
          "Yes, the output is written generically enough to send as a template to multiple customers affected by the same delay.",
      },
    ],
  },
  {
    slug: "mistake-explanation-generator",
    category: "apology",
    inputType: "mistake description",
    outputType: "explanation message",
    promptTemplate:
      "Write a clear, honest explanation of the following mistake, describing what went wrong and what will be done differently, without sounding defensive. Return only the explanation, no preamble.\n\nMistake description:\n{input}",
    seoTitle: "Free Mistake Explanation Message Generator",
    seoDescription:
      "Turn a description of a mistake into a clear, honest explanation of what happened and what's next. Free AI tool, no signup required.",
    h1: "Generate a Mistake Explanation",
    introCopy:
      "Sometimes what's needed isn't an emotional apology but a clear, factual account of what went wrong and what's being done about it — the kind of message a manager, client, or teammate needs before they can move forward. This tool focuses specifically on the explanation itself: a plain description of the mistake, the cause if known, and the fix, phrased honestly without either over-apologizing or sounding evasive. It pairs well with the apology to team generator when you need both the accountability and the explanation in one message.",
    exampleInput: "shipped a bug that broke the checkout page for a few hours, was caused by a config change that wasn't tested first",
    exampleOutput:
      "Yesterday a configuration change went out without being tested first, which caused the checkout page to break for a few hours. We've identified the root cause and rolled back the change. Going forward, all config changes will go through the same testing process as code changes to prevent this from happening again.",
    faq: [
      {
        question: "Is this the same as an apology?",
        answer:
          "It's more focused on the facts — what happened and what's changing — than on emotional language. For a more personal, feelings-forward message, use one of the apology generators instead.",
      },
      {
        question: "Does it need to include a technical root cause?",
        answer:
          "Only if you provide one. If you don't know the exact cause yet, describe that in your input and the tool will phrase it as still under investigation.",
      },
      {
        question: "Can I use this for a postmortem summary?",
        answer:
          "Yes, the output works well as the opening summary of an incident postmortem or status update, though a full postmortem will need more technical detail.",
      },
    ],
  },
  {
    slug: "apology-to-team-generator",
    category: "apology",
    inputType: "situation description",
    outputType: "apology to team",
    promptTemplate:
      "Write a message apologizing to a team or group of colleagues based on the following situation, in a tone appropriate for a workplace Slack message or email. Return only the message, no preamble.\n\nSituation:\n{input}",
    seoTitle: "Free Apology to Team Message Generator",
    seoDescription:
      "Turn a workplace mistake into an apology message for your team, suited for Slack or email. Free AI tool, no signup required.",
    h1: "Generate an Apology to Your Team",
    introCopy:
      "Apologizing to a group is different from apologizing to one person — you're addressing everyone at once, some of whom may be more affected than others, and the tone needs to work for a Slack channel or team email without feeling like a personal, one-on-one note. This tool is built for that workplace group context specifically: missing a deadline that affected the team, a miscommunication that caused extra work, or a decision that needs walking back. It's more casual and Slack-appropriate than the formal apology letter generator, which is meant for more serious, formal situations.",
    exampleInput: "forgot to update the shared doc before the sprint planning meeting, team wasted 20 min figuring out priorities",
    exampleOutput:
      "Hey team, sorry about the mix-up in this morning's sprint planning — I forgot to update the shared doc beforehand, which cost us some time sorting out priorities. That's on me. I've updated it now and will make sure it's current before our next planning session. Thanks for your patience.",
    faq: [
      {
        question: "Is this appropriate for a Slack message specifically?",
        answer:
          "Yes, the tone and length are calibrated for Slack or a short team email — casual but still accountable, not overly formal.",
      },
      {
        question: "Should I use this or the formal apology letter generator?",
        answer:
          "Use this one for everyday team mishaps. The formal apology letter generator is better suited for more serious situations that need an official, formal tone.",
      },
      {
        question: "Will it name specific team members who were affected?",
        answer:
          "Only if you include their names in your input — otherwise it addresses the team generally, which usually works better for a group message anyway.",
      },
    ],
  },
  {
    slug: "formal-apology-letter-generator",
    category: "apology",
    inputType: "situation description",
    outputType: "formal apology letter",
    promptTemplate:
      "Write a formal, official apology letter based on the following situation, using respectful and precise language appropriate for a serious or official matter. Return only the letter, no preamble.\n\nSituation:\n{input}",
    seoTitle: "Free Formal Apology Letter Generator",
    seoDescription:
      "Generate a formal, official apology letter for a serious situation. Free AI tool, no signup required.",
    h1: "Generate a Formal Apology Letter",
    introCopy:
      "Some situations call for a genuinely formal letter, not a quick message — a serious service failure, a formal complaint response, or a matter that may need to be kept on record. This tool writes in a measured, official register with precise language, avoiding both casualness and excessive emotion, suited for a signed letter rather than a chat message or email thread. It sits at the more serious end of the apology tools in this batch; for everyday workplace or customer situations, the apology email or team apology generators will feel more natural.",
    exampleInput: "company failed to deliver a contracted service on time, causing financial loss to the client, need to formally apologize and outline corrective steps",
    exampleOutput:
      "Dear [Recipient],\n\nI am writing to formally apologize for our failure to deliver the contracted service within the agreed timeframe, and for the financial impact this has caused you. We take this matter seriously and recognize that it fell short of the standard you rightfully expect from us.\n\nWe have reviewed the circumstances that led to this delay and are implementing corrective measures to ensure it does not recur. We remain committed to making this right and welcome the opportunity to discuss appropriate next steps at your convenience.\n\nSincerely,\n[Your Name]",
    faq: [
      {
        question: "Is this suitable for a legal or contractual dispute?",
        answer:
          "It can serve as a starting draft, but for matters with legal implications, have the letter reviewed by legal counsel before sending it.",
      },
      {
        question: "Does it include specific corrective steps?",
        answer:
          "Only in general terms unless you provide specifics in your input — include the actual corrective actions you're taking for a more substantive letter.",
      },
      {
        question: "How formal is the language compared to the apology email generator?",
        answer:
          "Noticeably more formal — this tool is written for official correspondence, while the apology email generator is tuned for everyday professional communication.",
      },
    ],
  },
  {
    slug: "apology-follow-up-generator",
    category: "apology",
    inputType: "context on the original apology",
    outputType: "follow-up message",
    promptTemplate:
      "Write a short follow-up message checking in after a previous apology, based on the following context, showing genuine care without reopening old wounds unnecessarily. Return only the follow-up message, no preamble.\n\nContext:\n{input}",
    seoTitle: "Free Apology Follow-Up Message Generator",
    seoDescription:
      "Generate a thoughtful follow-up message after an apology to check in and show you meant it. Free AI tool, no signup required.",
    h1: "Generate an Apology Follow-Up Message",
    introCopy:
      "An apology that's never followed up on can feel like a one-time performance rather than something you meant, especially for a bigger mistake that affected someone deeply. This tool writes a short check-in message for some time after the original apology — a few days or weeks later — that shows continued care without re-hashing the whole incident or forcing the other person to relive it. It's meant to be used after one of the other apology tools in this batch, as the natural next step once the initial apology has already been sent.",
    exampleInput: "apologized to a friend for canceling on their birthday dinner last week, checking in now to see how things are between us",
    exampleOutput:
      "Hey, just wanted to check in and see how you're doing. I've been thinking about missing your birthday dinner and I hope things feel okay between us. No pressure to respond right away — just wanted you to know I'm still thinking about it.",
    faq: [
      {
        question: "How long after the original apology should I send this?",
        answer:
          "It varies by situation, but a few days to a couple of weeks is common — enough time to show it wasn't a one-off, but not so long it feels random.",
      },
      {
        question: "Will it re-explain the original mistake in detail?",
        answer:
          "No, it references the situation briefly rather than re-explaining it in full, since the goal is a light check-in, not reopening the whole conversation.",
      },
      {
        question: "What if they haven't responded to my apology at all?",
        answer:
          "Mention that in your input — the tool will adjust to a gentler, lower-pressure check-in that doesn't demand a response.",
      },
    ],
  },
  {
    slug: "apology-message-shortener",
    category: "apology",
    inputType: "apology draft",
    outputType: "shortened apology",
    promptTemplate:
      "Shorten the following apology message to 2-3 sentences while keeping it sincere and preserving the core apology. Return only the shortened message, no preamble.\n\nApology draft:\n{input}",
    seoTitle: "Free Apology Message Shortener Tool",
    seoDescription:
      "Trim a long apology down to 2-3 sincere sentences. Free AI tool, no signup required.",
    h1: "Shorten an Apology Message",
    introCopy:
      "A long, rambling apology can actually undercut itself — it starts to read like over-explaining or fishing for reassurance rather than a clean, sincere acknowledgment. This tool takes an apology draft, however long, and trims it down to two or three sentences that keep the sincerity intact while cutting the repetition and hedging. It's useful right before sending, once you've already written out your full thoughts using the apology message generator or on your own, and just need the tightest possible version.",
    exampleInput:
      "I'm so sorry about what happened yesterday, I really didn't mean for it to go that way and I've been thinking about it all night, I feel terrible and I know I should have been more careful, I really value our friendship and I don't want this to be a big thing between us, I hope you can forgive me and we can move past this.",
    exampleOutput:
      "I'm really sorry about yesterday — I should have been more careful, and I feel terrible about it. I value our friendship and hope we can move past this.",
    faq: [
      {
        question: "Will it still sound sincere at a shorter length?",
        answer:
          "Yes, it's designed to preserve the emotional core of the apology, not just cut words randomly — sincerity is prioritized over pure brevity.",
      },
      {
        question: "How short can the output get?",
        answer:
          "It targets 2-3 sentences, which works well for a text or quick message. If you need it even shorter, you can run the output through again.",
      },
      {
        question: "What details get removed first?",
        answer:
          "Repeated apologies and lengthy self-reflection are trimmed first, while the direct acknowledgment of the mistake and the core sentiment are kept.",
      },
    ],
  },

  // ---------- elevator-pitch ----------
  {
    slug: "business-idea-to-elevator-pitch",
    category: "elevator-pitch",
    inputType: "business idea",
    outputType: "elevator pitch",
    promptTemplate:
      "Turn the following business idea description into a compelling 30-second elevator pitch that clearly states the problem, the solution, and why it matters. Return only the pitch, no preamble.\n\nBusiness idea:\n{input}",
    seoTitle: "Free Business Idea to Elevator Pitch Generator",
    seoDescription:
      "Turn a rough business idea into a compelling 30-second elevator pitch. Free AI tool, no signup required.",
    h1: "Turn a Business Idea Into an Elevator Pitch",
    introCopy:
      "Most business ideas start as a messy paragraph in your notes app: what the product does, who it's for, why it's needed, all jumbled together. This tool takes that raw description and restructures it into a tight, 30-second pitch with a clear problem-solution-impact arc, the kind you could actually say out loud to someone at a networking event. It's meant for the earliest draft stage — if you already have a working pitch and just need it trimmed further, use the elevator pitch shortener instead.",
    exampleInput:
      "An app that connects local farmers directly with restaurants so restaurants get fresher produce and farmers get better margins, cutting out the distributor middleman.",
    exampleOutput:
      "Restaurants want fresher produce, and farmers want better margins — but the distributor layer between them eats into both. Our app connects local farmers directly with restaurants, so chefs get same-day-fresh ingredients and farmers keep more of every sale. We're cutting out the middleman to make the local food supply chain work better for everyone in it.",
    faq: [
      {
        question: "How long is the resulting pitch meant to be?",
        answer:
          "It's sized for about 30 seconds of spoken delivery, roughly 3-5 sentences, which is the standard elevator pitch length.",
      },
      {
        question: "Will it make up market size numbers or stats?",
        answer:
          "No, it only works with the details you provide. If you want to include specific stats or market size, add them to your input.",
      },
      {
        question: "Can I use this for a pitch competition?",
        answer:
          "Yes, it's a solid starting point for a pitch competition script, though you may want to run it through the investor-focused version for that specific audience.",
      },
    ],
  },
  {
    slug: "resume-to-elevator-pitch",
    category: "elevator-pitch",
    inputType: "resume or bio",
    outputType: "elevator pitch",
    promptTemplate:
      "Turn the following resume or professional bio into a personal elevator pitch of about 30 seconds, highlighting the most relevant experience and what the person is looking for next. Return only the pitch, no preamble.\n\nResume or bio:\n{input}",
    seoTitle: "Free Resume to Elevator Pitch Generator",
    seoDescription:
      "Turn your resume or bio into a confident, 30-second personal elevator pitch. Free AI tool, no signup required.",
    h1: "Turn a Resume Into an Elevator Pitch",
    introCopy:
      "A resume is built to be scanned by a hiring manager, not spoken aloud, which is why so many people freeze when asked to introduce themselves at a networking event or the start of an interview. This tool distills a resume or bio into a natural-sounding spoken pitch that hits your background, your strongest skills, and what you're looking for next, without reading like a list of bullet points. It's the personal counterpart to the business idea pitch tool — this one is about you, not a company or product.",
    exampleInput:
      "5 years in product management at a mid-size SaaS company, led launch of two major features, background in UX research, looking to move into a director-level role at a growth-stage startup.",
    exampleOutput:
      "I've spent the last five years as a product manager at a mid-size SaaS company, where I led the launch of two major features from concept through rollout. My background in UX research means I bring a strong user-first lens to every roadmap decision. Right now, I'm looking to step into a director-level role at a growth-stage startup, where I can help shape product strategy at a bigger scale.",
    faq: [
      {
        question: "Does it need my full resume, or just highlights?",
        answer:
          "Either works. Pasting your full resume is fine — the tool will pick out the most relevant experience for a concise pitch rather than including everything.",
      },
      {
        question: "Can I tailor it for a specific job or industry?",
        answer:
          "Yes, mention the target role or industry in your input and the tool will emphasize the most relevant parts of your background accordingly.",
      },
      {
        question: "Will it sound too rehearsed?",
        answer:
          "It's written to sound natural when spoken aloud, not like a formal bio being read verbatim, but feel free to adjust it to match your own speaking style.",
      },
    ],
  },
  {
    slug: "elevator-pitch-shortener",
    category: "elevator-pitch",
    inputType: "elevator pitch",
    outputType: "shortened pitch",
    promptTemplate:
      "Shorten the following elevator pitch to 2-3 sentences, about 10-15 seconds when spoken, while keeping the core message intact. Return only the shortened pitch, no preamble.\n\nElevator pitch:\n{input}",
    seoTitle: "Free Elevator Pitch Shortener — Trim to 10 Seconds",
    seoDescription:
      "Shorten a full elevator pitch down to 2-3 punchy sentences. Free AI tool, no signup required.",
    h1: "Shorten an Elevator Pitch",
    introCopy:
      "A 30-second pitch is already short, but sometimes you only get a real 10 seconds — someone asks \"what do you do\" in a hallway, not in a meeting room. This tool compresses an existing elevator pitch down to two or three sentences, keeping only the sharpest version of the problem and solution and cutting everything else. It's built for editing an already-written pitch; if you're starting from a rough idea instead, use the business idea to elevator pitch tool first to get a full draft to shorten.",
    exampleInput:
      "Restaurants want fresher produce, and farmers want better margins, but the distributor layer between them eats into both. Our app connects local farmers directly with restaurants, so chefs get same-day-fresh ingredients and farmers keep more of every sale. We're cutting out the middleman to make the local food supply chain work better for everyone in it.",
    exampleOutput:
      "We connect local farmers directly with restaurants, cutting out the distributor middleman. Chefs get fresher produce, farmers get better margins.",
    faq: [
      {
        question: "How short does the output get?",
        answer:
          "It targets 2-3 sentences, roughly 10-15 seconds spoken aloud, which works well for very brief introductions or a written tagline.",
      },
      {
        question: "Does it keep the strongest part of my original pitch?",
        answer:
          "Yes, it identifies and keeps the core problem-solution statement, cutting supporting details and examples first.",
      },
      {
        question: "Can I shorten it even further after this?",
        answer:
          "You can run the output through again, but at this length you're approaching a one-line tagline — see the startup idea to one-liner tool for that specific format.",
      },
    ],
  },
  {
    slug: "elevator-pitch-tone-shifter",
    category: "elevator-pitch",
    inputType: "elevator pitch",
    outputType: "tone-shifted pitch",
    promptTemplate:
      "Rewrite the following elevator pitch in a more casual, conversational tone suitable for a informal networking setting, while keeping the key points intact. Return only the rewritten pitch, no preamble.\n\nElevator pitch:\n{input}",
    seoTitle: "Free Elevator Pitch Tone Shifter Tool",
    seoDescription:
      "Rewrite a formal elevator pitch in a more casual, conversational tone for informal settings. Free AI tool, no signup required.",
    h1: "Shift the Tone of an Elevator Pitch",
    introCopy:
      "The same pitch that works on stage at a demo day can sound stiff and over-rehearsed at a casual meetup or a coffee chat, where a conversational tone lands better than polished corporate language. This tool takes a more formal pitch and loosens it up, keeping the same key points but phrasing them the way you'd actually talk to someone one-on-one. Use the elevator pitch for investors tool when you need to go the other direction, toward a more polished, formal register instead.",
    exampleInput:
      "Our platform leverages machine learning to optimize supply chain logistics for mid-market manufacturers, reducing operational costs by an average of 18%.",
    exampleOutput:
      "So basically, we build software that uses machine learning to help mid-size manufacturers run their supply chains more efficiently — think fewer wasted shipments, less overstock. On average, our customers cut their operational costs by about 18%.",
    faq: [
      {
        question: "Will it remove technical or industry jargon?",
        answer:
          "It simplifies jargon where possible into more everyday language, since a casual setting usually calls for less technical phrasing.",
      },
      {
        question: "Does it keep the specific numbers and stats from my pitch?",
        answer:
          "Yes, factual details like percentages or metrics are preserved — only the tone and sentence structure around them change.",
      },
      {
        question: "Is this good for a podcast interview intro?",
        answer:
          "Yes, the conversational tone works well for podcast or panel introductions where a stiff, formal pitch would feel out of place.",
      },
    ],
  },
  {
    slug: "product-to-elevator-pitch",
    category: "elevator-pitch",
    inputType: "product description",
    outputType: "elevator pitch",
    promptTemplate:
      "Turn the following product description into a compelling elevator pitch focused on the customer benefit, not just the features. Return only the pitch, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Product Description to Elevator Pitch Generator",
    seoDescription:
      "Turn a feature-heavy product description into a benefit-focused elevator pitch. Free AI tool, no signup required.",
    h1: "Turn a Product Description Into an Elevator Pitch",
    introCopy:
      "Product descriptions are usually written feature-first — what it does, what's included — but a pitch needs to lead with why any of that matters to the person listening. This tool takes a feature-heavy product description and reframes it around customer benefit, the outcome someone gets from using it, rather than a list of specs. It's specifically for an existing product with real features to describe, distinct from the business idea tool, which works from an earlier-stage concept that may not have a built product yet.",
    exampleInput:
      "Our app has automatic expense categorization, receipt scanning, and real-time budget alerts, built for freelancers and small business owners.",
    exampleOutput:
      "Freelancers and small business owners lose hours every month wrangling receipts and guessing where their money went. Our app scans receipts, categorizes expenses automatically, and sends real-time alerts before you go over budget — so you always know where you stand without doing the bookkeeping yourself.",
    faq: [
      {
        question: "Will it still mention the specific features?",
        answer:
          "Yes, features are included, but framed around the benefit they provide rather than listed as a plain spec sheet.",
      },
      {
        question: "Who is this pitch written for?",
        answer:
          "It's written toward whatever audience is implied by your product description — mention your target customer explicitly for the most tailored result.",
      },
      {
        question: "Can I use this for a landing page headline too?",
        answer:
          "The full pitch is a bit long for a headline, but it's a great source to pull a shorter benefit-driven line from for landing page copy.",
      },
    ],
  },
  {
    slug: "elevator-pitch-for-investors",
    category: "elevator-pitch",
    inputType: "business idea",
    outputType: "investor pitch",
    promptTemplate:
      "Turn the following business idea into an elevator pitch tailored for investors, emphasizing market opportunity, traction if mentioned, and scalability. Return only the pitch, no preamble.\n\nBusiness idea:\n{input}",
    seoTitle: "Free Elevator Pitch Generator for Investors",
    seoDescription:
      "Turn a business idea into an elevator pitch built for investors, with market size and scalability front and center. Free AI tool.",
    h1: "Generate an Elevator Pitch for Investors",
    introCopy:
      "Investors are listening for a different set of signals than a general audience — market size, why now, and how big this could get, not just what the product does. This tool takes a business idea and shapes the pitch specifically around those investor priorities: opportunity, scalability, and traction if you have any to mention. It's more targeted than the general business idea to elevator pitch tool, which is written for a broader audience like customers or press rather than people deciding whether to write a check.",
    exampleInput:
      "A subscription box for pet owners with senior dogs, curated by vets, currently at 500 subscribers growing 20% month over month.",
    exampleOutput:
      "There are over 20 million senior dogs in the US, and their owners are underserved by generic pet products built for younger animals. We've built a vet-curated subscription box specifically for senior dog care, and we're already at 500 subscribers growing 20% month over month. With a large and growing addressable market and strong early retention, we see a clear path to scaling this into the go-to brand for senior pet care.",
    faq: [
      {
        question: "Do I need to include real traction numbers?",
        answer:
          "It's optional, but including any real metrics you have (users, growth rate, revenue) makes the pitch significantly stronger for an investor audience.",
      },
      {
        question: "Will it invent a market size if I don't provide one?",
        answer:
          "No, it won't fabricate specific statistics. If you don't provide a market size, it will reference the opportunity more generally instead of citing a number.",
      },
      {
        question: "Is this suitable for a written pitch deck slide, not just spoken?",
        answer:
          "Yes, the language works well as the opening paragraph of a pitch deck or one-pager in addition to a spoken pitch.",
      },
    ],
  },
  {
    slug: "personal-elevator-pitch-generator",
    category: "elevator-pitch",
    inputType: "background and goals",
    outputType: "personal elevator pitch",
    promptTemplate:
      "Write a personal elevator pitch introducing this person based on the following background and goals, suitable for a networking event. Return only the pitch, no preamble.\n\nBackground and goals:\n{input}",
    seoTitle: "Free Personal Elevator Pitch Generator",
    seoDescription:
      "Turn your background and goals into a confident personal elevator pitch for networking. Free AI tool, no signup required.",
    h1: "Generate a Personal Elevator Pitch",
    introCopy:
      "Introducing yourself at a networking event, career fair, or conference is a specific skill, and most people either ramble or undersell themselves when put on the spot. This tool takes a short description of your background and what you're hoping to get out of the conversation and builds a natural introduction around it. Unlike the resume to elevator pitch tool, which is built from a formal document, this one works from a looser, casual description of who you are and what you're looking for right now.",
    exampleInput:
      "recent bootcamp grad, background in teaching before switching careers, looking for junior frontend developer roles, interested in ed-tech companies specifically",
    exampleOutput:
      "I recently made the jump from teaching into software development after completing a coding bootcamp. My years in the classroom actually give me a strong sense of how to build things people can actually use, which I think translates well to frontend work. I'm looking for junior frontend developer roles, and I'd especially love to find something in ed-tech, where I can bring both skill sets together.",
    faq: [
      {
        question: "Is this the same as the resume-based tool?",
        answer:
          "No — this one works from a loose description of your background and goals, while the resume to elevator pitch tool starts from a formal resume or bio document.",
      },
      {
        question: "Can I use this for a career changer story?",
        answer:
          "Yes, this is a strong use case — mention your previous field and what's transferring over, and the tool will frame the transition as a strength.",
      },
      {
        question: "Should I mention the specific event I'm attending?",
        answer:
          "It's not required, but if you're targeting a specific type of company or event, mentioning it helps the tool tailor the closing ask.",
      },
    ],
  },
  {
    slug: "elevator-pitch-to-linkedin-headline",
    category: "elevator-pitch",
    inputType: "elevator pitch",
    outputType: "LinkedIn headline",
    promptTemplate:
      "Convert the following elevator pitch into a concise, compelling LinkedIn headline under 220 characters. Return only the headline, no preamble.\n\nElevator pitch:\n{input}",
    seoTitle: "Free Elevator Pitch to LinkedIn Headline Converter",
    seoDescription:
      "Turn your elevator pitch into a sharp, scroll-stopping LinkedIn headline. Free AI tool, no signup required.",
    h1: "Turn an Elevator Pitch Into a LinkedIn Headline",
    introCopy:
      "A LinkedIn headline is the most-read line on your entire profile, and most people waste it on just a job title instead of the pitch they'd give in person. This tool takes an elevator pitch you've already written and compresses it into a headline under LinkedIn's character limit, keeping the core value proposition front and center. It's the professional-networking-specific sibling to the elevator pitch shortener, which produces a spoken-length pitch rather than a single written line.",
    exampleInput:
      "I help mid-size manufacturers cut operational costs by using machine learning to optimize their supply chain logistics, typically saving clients 18% on average.",
    exampleOutput:
      "Helping mid-size manufacturers cut supply chain costs with ML-driven logistics optimization | Avg. 18% savings",
    faq: [
      {
        question: "Does it stay under LinkedIn's character limit?",
        answer:
          "Yes, it targets under 220 characters, which fits within LinkedIn's headline field across both desktop and mobile views.",
      },
      {
        question: "Will it use symbols like the pipe character?",
        answer:
          "It may use a separator like a pipe or bullet to pack in more information cleanly, matching common LinkedIn headline conventions.",
      },
      {
        question: "Can I use this if I have multiple roles or focuses?",
        answer:
          "Yes, mention all relevant areas in your input pitch and the tool will try to fit the most important ones into the headline format.",
      },
    ],
  },
  {
    slug: "startup-idea-to-one-liner",
    category: "elevator-pitch",
    inputType: "startup idea",
    outputType: "one-liner",
    promptTemplate:
      "Turn the following startup idea into a single punchy one-liner, in the style of 'X for Y' or a similarly concise format. Return only the one-liner, no preamble.\n\nStartup idea:\n{input}",
    seoTitle: "Free Startup Idea to One-Liner Generator",
    seoDescription:
      "Turn a startup idea into a punchy, single-sentence one-liner. Free AI tool, no signup required.",
    h1: "Turn a Startup Idea Into a One-Liner",
    introCopy:
      "Before there's a pitch deck or even a full elevator pitch, there's usually a single sentence that captures the idea — the \"Airbnb for parking spots\" style one-liner that people either get instantly or don't. This tool distills a startup idea, however you've described it, into that single punchy sentence, useful for a Twitter bio, a pitch deck title slide, or just testing whether the idea is clear enough to explain in one breath. It's the most compressed tool in this batch, shorter even than the elevator pitch shortener's output.",
    exampleInput:
      "A marketplace where people can rent out their unused home gym equipment to neighbors by the week.",
    exampleOutput: "Airbnb for home gym equipment.",
    faq: [
      {
        question: "Will it always use the 'X for Y' format?",
        answer:
          "It often does when a clear analogy fits, but it may produce a different punchy structure if that format doesn't suit your specific idea.",
      },
      {
        question: "Is one sentence really enough to describe my idea?",
        answer:
          "It's meant as a hook, not a full explanation — pair it with a fuller elevator pitch from the business idea tool for when people want more detail.",
      },
      {
        question: "Can I use this as a startup's tagline?",
        answer:
          "Yes, many founders use a one-liner like this directly as a website tagline or social bio line.",
      },
    ],
  },
  {
    slug: "elevator-pitch-practice-script",
    category: "elevator-pitch",
    inputType: "elevator pitch",
    outputType: "practice script with pacing notes",
    promptTemplate:
      "Turn the following elevator pitch into a practice script formatted with natural pause points and delivery notes (e.g. [pause], [emphasize]) to help someone rehearse saying it aloud. Return only the formatted script, no preamble.\n\nElevator pitch:\n{input}",
    seoTitle: "Free Elevator Pitch Practice Script Generator",
    seoDescription:
      "Turn your elevator pitch into a rehearsal script with pacing and emphasis notes. Free AI tool, no signup required.",
    h1: "Generate an Elevator Pitch Practice Script",
    introCopy:
      "Reading a pitch off a page and actually delivering it out loud, at the right pace, are two different skills, and most people rush through it the first few times they practice. This tool takes a finished elevator pitch and formats it with pause markers and emphasis notes, turning it into something you can rehearse from like an actual script rather than a block of text. It's meant to be the last step after you've already written and tightened your pitch using the other tools in this batch.",
    exampleInput:
      "We connect local farmers directly with restaurants, cutting out the distributor middleman. Chefs get fresher produce, farmers get better margins.",
    exampleOutput:
      "We connect local farmers [pause] directly with restaurants — [pause] cutting out the distributor middleman. [pause]\n\nChefs get [emphasize]fresher[/emphasize] produce, [pause] farmers get [emphasize]better margins[/emphasize]. [pause, smile]",
    faq: [
      {
        question: "What do the bracketed notes mean?",
        answer:
          "Notes like [pause] and [emphasize] are delivery cues showing where to slow down, stop briefly, or stress a word — they're not meant to be spoken aloud themselves.",
      },
      {
        question: "Can I use this to practice a pitch I haven't finalized yet?",
        answer:
          "It works best on a pitch you're mostly happy with, since the goal here is delivery practice, not content editing — use the other pitch tools first to finalize wording.",
      },
      {
        question: "Will it tell me how long the pitch takes to say?",
        answer:
          "It doesn't include a timestamp, but the pacing notes are designed to naturally land around a comfortable 30-second delivery when read at a normal speaking pace.",
      },
    ],
  },

  // ---------- meeting-agenda ----------
  {
    slug: "topic-list-to-meeting-agenda",
    category: "meeting-agenda",
    inputType: "list of topics",
    outputType: "meeting agenda",
    promptTemplate:
      "Turn the following list of topics into a structured meeting agenda with a logical order and brief descriptions for each item. Return only the agenda, no preamble.\n\nTopics:\n{input}",
    seoTitle: "Free Topic List to Meeting Agenda Generator",
    seoDescription:
      "Turn a rough list of topics into a structured, logically ordered meeting agenda. Free AI tool, no signup required.",
    h1: "Turn a Topic List Into a Meeting Agenda",
    introCopy:
      "Most meeting agendas start life as a random list of things someone needs to bring up, jotted down in whatever order they were remembered. This tool takes that unordered list and turns it into a structured agenda, reordering items so the meeting flows logically (updates before decisions, for instance) and adding a short description under each so attendees know what to expect. It's the general-purpose starting point in this category — for a recurring weekly meeting or a specific format like a retrospective, use the more specialized tools instead.",
    exampleInput: "budget review, new hire intros, Q3 roadmap, office move update",
    exampleOutput:
      "1. New Hire Introductions\nBrief welcome and introductions for any recent additions to the team.\n\n2. Q3 Roadmap\nReview and discuss priorities and milestones for the upcoming quarter.\n\n3. Budget Review\nGo over current budget status and any needed adjustments.\n\n4. Office Move Update\nShare the latest timeline and next steps for the upcoming office move.",
    faq: [
      {
        question: "Does it decide the order for me?",
        answer:
          "Yes, it reorders the topics into a logical flow, typically lighter items first and more involved discussions later, though you can always reorder manually afterward.",
      },
      {
        question: "Can I specify how much time each item should take?",
        answer:
          "This tool focuses on structure and descriptions rather than timing. For time allocations, use the agenda item time allocation note tool on the output.",
      },
      {
        question: "How many topics can I include?",
        answer:
          "There's no strict limit, but agendas with more than 6-8 items tend to run long — consider splitting into two meetings if your list is that extensive.",
      },
    ],
  },
  {
    slug: "meeting-agenda-generator",
    category: "meeting-agenda",
    inputType: "meeting purpose and details",
    outputType: "meeting agenda",
    promptTemplate:
      "Write a complete meeting agenda based on the following purpose and details, including a title, objective, and ordered discussion items. Return only the agenda, no preamble.\n\nMeeting purpose and details:\n{input}",
    seoTitle: "Free Meeting Agenda Generator — From Scratch",
    seoDescription:
      "Generate a complete meeting agenda with objective and discussion items from just a purpose description. Free AI tool, no signup.",
    h1: "Generate a Meeting Agenda",
    introCopy:
      "Sometimes you don't even have a list of topics yet, just a general sense of why the meeting needs to happen at all — like \"align the team on the new pricing strategy.\" This tool takes that purpose and builds a full agenda from scratch: a title, a stated objective, and a logical sequence of discussion items to get there. It's more generative than the topic list to agenda tool, which assumes you already know what needs to be discussed and just needs it organized.",
    exampleInput:
      "Need a meeting to align the sales and product teams on the new pricing tiers launching next month.",
    exampleOutput:
      "Meeting: Sales & Product Alignment on New Pricing Tiers\nObjective: Ensure sales and product are aligned on the new pricing structure ahead of next month's launch.\n\n1. Overview of New Pricing Tiers\nProduct walks through the new tier structure and rationale.\n\n2. Sales Impact & Customer Messaging\nDiscuss how this affects current deals and how to message the change to customers.\n\n3. Open Questions & Edge Cases\nSurface any pricing scenarios that need clarification before launch.\n\n4. Next Steps & Owners\nAssign follow-up actions and confirm the launch timeline.",
    faq: [
      {
        question: "Do I need to already know what topics to cover?",
        answer:
          "No — just describe the meeting's purpose and this tool will infer a reasonable set of agenda items to accomplish that goal.",
      },
      {
        question: "Will it include a stated objective at the top?",
        answer:
          "Yes, it opens with a clear objective line, which helps attendees understand the point of the meeting before diving into the agenda items.",
      },
      {
        question: "Can I use this for a one-time meeting versus a recurring one?",
        answer:
          "It's built for one-time or ad hoc meetings. For recurring meetings, the recurring meeting agenda generator handles repeating structure better.",
      },
    ],
  },
  {
    slug: "agenda-to-calendar-invite-description",
    category: "meeting-agenda",
    inputType: "meeting agenda",
    outputType: "calendar invite description",
    promptTemplate:
      "Convert the following meeting agenda into a concise calendar invite description, summarizing the purpose and listing the key agenda items briefly. Return only the calendar invite description, no preamble.\n\nMeeting agenda:\n{input}",
    seoTitle: "Free Agenda to Calendar Invite Description Converter",
    seoDescription:
      "Turn a full meeting agenda into a concise calendar invite description. Free AI tool, no signup required.",
    h1: "Turn an Agenda Into a Calendar Invite Description",
    introCopy:
      "A full agenda is often too long and detailed for the description field of a calendar invite, where people just want a quick sense of why they're being asked to show up. This tool condenses a complete agenda down into a short calendar invite blurb, hitting the purpose and the key items without the full descriptions attached to each one. It's meant to be used after you've already built out the full agenda with one of the other tools in this batch — this is the compressed version that goes in the invite itself.",
    exampleInput:
      "Meeting: Sales & Product Alignment on New Pricing Tiers\nObjective: Ensure sales and product are aligned on the new pricing structure ahead of next month's launch.\n\n1. Overview of New Pricing Tiers\n2. Sales Impact & Customer Messaging\n3. Open Questions & Edge Cases\n4. Next Steps & Owners",
    exampleOutput:
      "Aligning sales and product on the new pricing tiers ahead of next month's launch. We'll cover the new tier structure, sales impact and messaging, open questions, and next steps. Come ready to discuss any edge cases you've encountered.",
    faq: [
      {
        question: "Will it keep the numbered list format from the full agenda?",
        answer:
          "No, it converts the items into a short flowing summary rather than a numbered list, which reads better in a calendar description field.",
      },
      {
        question: "How long is the output typically?",
        answer:
          "Usually 2-4 sentences, short enough to read at a glance in a calendar app without needing to expand the description.",
      },
      {
        question: "Should I still attach the full agenda separately?",
        answer:
          "For meetings with more than a couple of items, it's a good idea to link or attach the full agenda for reference alongside this shorter description.",
      },
    ],
  },
  {
    slug: "meeting-agenda-shortener",
    category: "meeting-agenda",
    inputType: "meeting agenda",
    outputType: "shortened agenda",
    promptTemplate:
      "Shorten the following meeting agenda to only the essential items, trimming or merging anything non-critical, while keeping it clear and usable. Return only the shortened agenda, no preamble.\n\nMeeting agenda:\n{input}",
    seoTitle: "Free Meeting Agenda Shortener Tool",
    seoDescription:
      "Trim a long meeting agenda down to only the essential items. Free AI tool, no signup required.",
    h1: "Shorten a Meeting Agenda",
    introCopy:
      "An agenda with ten items usually means the meeting will run over, or worse, rush through the important parts to get to everything on the list. This tool takes an existing, overstuffed agenda and cuts it down to the essentials, merging closely related items and dropping anything that could be handled asynchronously instead. It's meant for editing down a draft that's already gotten too long, distinct from the meeting agenda generator, which builds a fresh agenda from a stated purpose.",
    exampleInput:
      "1. Welcome and intros\n2. Review last week's action items\n3. Budget update\n4. Marketing campaign review\n5. New hire onboarding process\n6. Office supplies request\n7. Q3 planning\n8. Open floor / miscellaneous",
    exampleOutput:
      "1. Review Last Week's Action Items\n2. Budget & Marketing Campaign Update\n3. Q3 Planning\n\n(Office supplies and onboarding process moved to async follow-up; open floor time trimmed for focus.)",
    faq: [
      {
        question: "Does it tell me what it removed and why?",
        answer:
          "Yes, it typically includes a short note on what was cut or moved to async follow-up, so you can double check nothing important was dropped.",
      },
      {
        question: "Will it merge related items instead of just deleting them?",
        answer:
          "Where possible, yes — closely related topics like a budget update and a related campaign review are often combined into a single agenda item.",
      },
      {
        question: "How many items should a good agenda have?",
        answer:
          "There's no hard rule, but this tool generally aims to get agendas down to 3-5 core items for a focused, on-time meeting.",
      },
    ],
  },
  {
    slug: "recurring-meeting-agenda-generator",
    category: "meeting-agenda",
    inputType: "recurring meeting details",
    outputType: "recurring meeting agenda template",
    promptTemplate:
      "Create a reusable agenda template for the following recurring meeting, with standing items that repeat every time and a placeholder section for topics that change week to week. Return only the template, no preamble.\n\nRecurring meeting details:\n{input}",
    seoTitle: "Free Recurring Meeting Agenda Template Generator",
    seoDescription:
      "Build a reusable agenda template for a recurring meeting, with standing items and a placeholder for weekly topics. Free AI tool.",
    h1: "Generate a Recurring Meeting Agenda Template",
    introCopy:
      "A weekly team sync doesn't need a brand new agenda built from scratch every time — it needs a template with a consistent structure (status updates, blockers, a rotating discussion slot) that stays the same while the specific content changes. This tool builds that reusable template rather than a one-time agenda, separating standing items that repeat every meeting from a placeholder section for whatever's topical that week. It's meant to be created once and reused, unlike the meeting agenda generator, which produces a fresh, specific agenda for a single meeting.",
    exampleInput: "Weekly engineering team sync, 30 minutes, need status updates, blockers, and a rotating topic slot",
    exampleOutput:
      "Weekly Engineering Sync — Agenda Template (30 min)\n\n1. Status Updates (10 min)\nQuick round-robin on what each person is working on.\n\n2. Blockers (10 min)\nSurface anything blocking progress and assign help if needed.\n\n3. This Week's Topic (10 min)\n[Insert rotating discussion topic here]\n\n---\nStanding items repeat every week; update the topic section before each meeting.",
    faq: [
      {
        question: "Can I reuse this same template every week?",
        answer:
          "Yes, that's the intent — save the output and just update the rotating topic section (or any notes fields) before each occurrence of the meeting.",
      },
      {
        question: "Does it include time allocations?",
        answer:
          "It often includes rough time splits for standing items, but for more detailed pacing guidance, pair it with the agenda item time allocation note tool.",
      },
      {
        question: "Is this different from a one-on-one agenda?",
        answer:
          "Yes — this is built for team-wide recurring meetings. For manager-report check-ins specifically, use the one-on-one agenda generator instead.",
      },
    ],
  },
  {
    slug: "agenda-item-time-allocation-note",
    category: "meeting-agenda",
    inputType: "meeting agenda",
    outputType: "agenda with time allocation notes",
    promptTemplate:
      "Add a suggested time allocation note next to each item in the following meeting agenda, based on the apparent complexity and importance of each topic, so the total feels reasonable for a typical meeting. Return only the agenda with time notes added, no preamble.\n\nMeeting agenda:\n{input}",
    seoTitle: "Free Meeting Agenda Time Allocation Tool",
    seoDescription:
      "Add suggested time allocations to each item on your meeting agenda. Free AI tool, no signup required.",
    h1: "Add Time Allocations to a Meeting Agenda",
    introCopy:
      "An agenda without time estimates tends to spend twenty minutes on the first topic and then rush through everything else in the last five, because nobody agreed in advance how long each item deserved. This tool takes an existing agenda and adds a suggested time allocation next to each item, weighing how complex or important each topic seems so the whole meeting adds up to a reasonable total. It's a lightweight addition to an agenda you've already built with one of the other tools in this batch, not a full scheduling or math tool.",
    exampleInput:
      "1. Status updates\n2. Budget discussion\n3. New hire onboarding\n4. Open questions",
    exampleOutput:
      "1. Status Updates — 5 min\n2. Budget Discussion — 15 min\n3. New Hire Onboarding — 10 min\n4. Open Questions — 5 min\n\n(Suggested total: ~35 minutes)",
    faq: [
      {
        question: "Are these exact, guaranteed timings?",
        answer:
          "No, they're reasonable suggestions based on the apparent scope of each item, not a precise calculation — adjust them based on your own sense of the topics.",
      },
      {
        question: "Will it total the times for me?",
        answer:
          "Yes, it typically includes a suggested total at the bottom so you can see at a glance whether the agenda fits your scheduled meeting length.",
      },
      {
        question: "What if my meeting has a hard time limit?",
        answer:
          "Mention the total available time in your input, and the tool will try to allocate time proportionally within that constraint rather than an open-ended estimate.",
      },
    ],
  },
  {
    slug: "meeting-agenda-from-email-thread",
    category: "meeting-agenda",
    inputType: "email thread",
    outputType: "meeting agenda",
    promptTemplate:
      "Read the following email thread and extract a meeting agenda covering the topics that need to be discussed or decided in person. Return only the agenda, no preamble.\n\nEmail thread:\n{input}",
    seoTitle: "Free Email Thread to Meeting Agenda Generator",
    seoDescription:
      "Turn a long email thread into a focused meeting agenda covering what still needs to be discussed. Free AI tool, no signup.",
    h1: "Turn an Email Thread Into a Meeting Agenda",
    introCopy:
      "When an email thread gets long enough that someone finally says \"let's just get on a call,\" the agenda for that call is usually buried somewhere in the back-and-forth. This tool reads through the thread and pulls out an agenda covering only what still needs to be discussed or decided live, skipping anything that was already resolved over email. It's built specifically for converting existing written discussion into a meeting structure, unlike the topic list tool, which starts from a clean list rather than a messy thread.",
    exampleInput:
      "Subject: Vendor contract renewal\n\nJane: Do we want to renew with Acme or switch to a new vendor?\nTom: I lean toward switching, their pricing has gone up 20%.\nJane: Agreed it's pricier but switching has onboarding costs too. Let's discuss with the full team.\nTom: Works, I'll also bring the comparison sheet.",
    exampleOutput:
      "1. Vendor Decision: Renew with Acme or Switch\nDiscuss the 20% price increase from Acme versus the onboarding costs of switching vendors.\n\n2. Review Vendor Comparison Sheet\nTom to walk through cost and feature comparison across vendor options.\n\n3. Team Decision & Next Steps\nAlign as a team on final vendor choice and agree on timeline for next steps.",
    faq: [
      {
        question: "Will it include topics that were already resolved by email?",
        answer:
          "No, it filters those out and focuses only on open questions or decisions the thread indicates still need a live discussion.",
      },
      {
        question: "Can it identify who should present each topic?",
        answer:
          "If the thread makes it clear (e.g. someone offering to bring a document), the tool may note that in the agenda item, but it won't assign presenters that aren't implied.",
      },
      {
        question: "Does it work with very long threads?",
        answer:
          "Yes, though for extremely long threads, consider trimming to the most relevant messages first for a cleaner, more focused agenda.",
      },
    ],
  },
  {
    slug: "kickoff-meeting-agenda-generator",
    category: "meeting-agenda",
    inputType: "project details",
    outputType: "kickoff meeting agenda",
    promptTemplate:
      "Create a project kickoff meeting agenda based on the following project details, covering introductions, goals, scope, timeline, and next steps. Return only the agenda, no preamble.\n\nProject details:\n{input}",
    seoTitle: "Free Project Kickoff Meeting Agenda Generator",
    seoDescription:
      "Generate a complete project kickoff meeting agenda covering goals, scope, timeline, and next steps. Free AI tool, no signup.",
    h1: "Generate a Kickoff Meeting Agenda",
    introCopy:
      "A kickoff meeting has a specific job: get everyone on the same page about what a new project is, why it matters, and who's doing what, before any actual work starts. This tool builds an agenda tuned to that specific format — introductions, goals, scope, timeline, and next steps — from a description of the project itself. It's more structured and purpose-specific than the general meeting agenda generator, which adapts to whatever kind of meeting you describe rather than following this particular kickoff template.",
    exampleInput:
      "New project to redesign the company website, cross-functional team from design, engineering, and marketing, targeting a 3-month timeline.",
    exampleOutput:
      "Project Kickoff: Website Redesign\n\n1. Introductions\nQuick round of introductions across design, engineering, and marketing.\n\n2. Project Goals\nAlign on why we're redesigning the site and what success looks like.\n\n3. Scope Overview\nReview what's in and out of scope for this redesign.\n\n4. Timeline & Milestones\nWalk through the proposed 3-month timeline and key checkpoints.\n\n5. Roles & Responsibilities\nClarify who owns what across the cross-functional team.\n\n6. Next Steps\nConfirm immediate action items and when the team will reconvene.",
    faq: [
      {
        question: "Will it include a section for introductions even if the team already knows each other?",
        answer:
          "It includes introductions by default since kickoffs often involve new collaborators, but you can simply skip that section if everyone is already familiar.",
      },
      {
        question: "Does it need a firm timeline to generate the agenda?",
        answer:
          "No, a rough timeframe or even 'timeline TBD' works fine — the tool will still include a timeline discussion item to establish one.",
      },
      {
        question: "Can I use this for an internal-only project, not client-facing?",
        answer:
          "Yes, it works equally well for internal projects and client engagements — just describe the team and project context in your input.",
      },
    ],
  },
  {
    slug: "one-on-one-agenda-generator",
    category: "meeting-agenda",
    inputType: "context for the one-on-one",
    outputType: "one-on-one agenda",
    promptTemplate:
      "Create a simple one-on-one meeting agenda between a manager and direct report based on the following context, covering check-in, progress, blockers, and growth topics as relevant. Return only the agenda, no preamble.\n\nContext:\n{input}",
    seoTitle: "Free One-on-One Meeting Agenda Generator",
    seoDescription:
      "Generate a simple, thoughtful one-on-one agenda for a manager and direct report. Free AI tool, no signup required.",
    h1: "Generate a One-on-One Meeting Agenda",
    introCopy:
      "A one-on-one is smaller and more personal than a team meeting, and the agenda should reflect that: a check-in, a look at current work and blockers, and space for career or growth conversation, without feeling like a status report. This tool builds that lightweight agenda from whatever context you provide about the relationship or current priorities, whether it's a first one-on-one with a new report or a regular recurring check-in. It's distinct from the recurring meeting agenda generator, which is built for larger team syncs rather than one-to-one conversations.",
    exampleInput:
      "Manager checking in with a direct report who just finished a big project launch and mentioned interest in taking on more leadership responsibility.",
    exampleOutput:
      "1. Check-In\nHow are things going overall since the project launch wrapped up?\n\n2. Project Launch Reflection\nWhat went well, what was hard, any lessons to carry forward.\n\n3. Current Priorities & Blockers\nWhat's on your plate now, anything in the way?\n\n4. Growth Conversation\nYou mentioned interest in more leadership responsibility — let's talk about what that could look like.\n\n5. Anything Else\nOpen space for whatever's on your mind.",
    faq: [
      {
        question: "Is this from the manager's or the report's perspective?",
        answer:
          "It's framed from the manager's side by default as discussion prompts, but the structure works equally well if a direct report wants to prepare their own talking points.",
      },
      {
        question: "Will it always include a growth or career section?",
        answer:
          "It includes one when relevant context is provided, like career interest mentioned in your input. For a purely tactical check-in, that section can simply be skipped.",
      },
      {
        question: "Can I use this for a first-ever one-on-one with a new hire?",
        answer:
          "Yes, mention that it's a first meeting in your context and the tool will lean more toward introductions and expectation-setting than progress review.",
      },
    ],
  },
  {
    slug: "retrospective-agenda-generator",
    category: "meeting-agenda",
    inputType: "sprint or project context",
    outputType: "retrospective agenda",
    promptTemplate:
      "Create a team retrospective meeting agenda based on the following sprint or project context, covering what went well, what didn't, and action items. Return only the agenda, no preamble.\n\nSprint or project context:\n{input}",
    seoTitle: "Free Retrospective Meeting Agenda Generator",
    seoDescription:
      "Generate a structured team retrospective agenda covering wins, challenges, and action items. Free AI tool, no signup required.",
    h1: "Generate a Retrospective Agenda",
    introCopy:
      "A retrospective only works if it has enough structure to get past surface-level \"it went fine\" comments and into what actually helped or hurt the team during a sprint or project. This tool builds a retro agenda tuned to that reflective format — what went well, what didn't, and what to change — using whatever context you provide about the sprint or project just completed. It's the most reflection-oriented agenda tool in this batch, distinct from the kickoff generator, which looks forward to a new project rather than back at a finished one.",
    exampleInput:
      "Just wrapped a 2-week sprint focused on a checkout redesign, shipped on time but had some last-minute scope changes that caused stress.",
    exampleOutput:
      "Sprint Retrospective: Checkout Redesign\n\n1. Quick Check-In\nHow's everyone feeling coming out of this sprint?\n\n2. What Went Well\nCelebrate shipping the checkout redesign on time.\n\n3. What Was Challenging\nDiscuss the last-minute scope changes and the stress they caused.\n\n4. Root Cause Discussion\nWhy did scope change late, and what could catch this earlier next time?\n\n5. Action Items\nAgree on 1-2 concrete changes to try in the next sprint.",
    faq: [
      {
        question: "Does it follow a specific retro framework, like Start-Stop-Continue?",
        answer:
          "It defaults to a went-well / didn't-go-well / action-items structure, but you can mention a specific framework like Start-Stop-Continue in your input and it will adapt.",
      },
      {
        question: "Will it name specific people responsible for what went wrong?",
        answer:
          "No, it keeps the tone focused on processes and outcomes rather than assigning individual blame, which tends to produce a more productive retro.",
      },
      {
        question: "Can I use this for a project retro, not just a sprint?",
        answer:
          "Yes, it works for any completed chunk of work, whether that's a two-week sprint, a full project, or a single product launch.",
      },
    ],
  },
];
