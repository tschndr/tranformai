import type { ToolSeed } from "./types";

export const batch2: ToolSeed[] = [
  // ---------- code ----------
  {
    slug: "code-to-comment",
    category: "code",
    inputType: "code snippet",
    outputType: "comment",
    promptTemplate:
      "Add a concise, useful inline comment above the input code explaining what it does and why. Do not restate the obvious line by line. Return only the code with the comment added, no preamble.\n\nCode:\n{input}",
    seoTitle: "Add Comments to Code Automatically — Free AI Tool",
    seoDescription:
      "Generate a clear, useful comment for any code snippet in seconds. Free, no signup required.",
    h1: "Add a Comment to Your Code",
    introCopy:
      "Good comments explain the intent behind code, not just what each line literally does. This tool reads a snippet and adds a single concise comment that captures why the code exists and what it accomplishes, the kind of note a reviewer actually finds useful. It deliberately avoids the noise of line-by-line narration that clutters a file without adding understanding. Paste a function or block you're about to commit and get back the same code with one comment worth keeping — a fast way to document work you understand now but future-you (or a teammate) won't.",
    exampleInput: "const debounced = useMemo(() => debounce(onChange, 300), [onChange]);",
    exampleOutput:
      "// Debounce onChange by 300ms so rapid keystrokes don't fire a request per character\nconst debounced = useMemo(() => debounce(onChange, 300), [onChange]);",
    faq: [
      {
        question: "Does it comment every single line?",
        answer:
          "No — it adds one focused comment explaining intent, rather than restating each line, which is what makes comments useful instead of noisy.",
      },
      {
        question: "What languages does it work with?",
        answer:
          "Any common language. It infers the comment syntax (//, #, /* */, etc.) from the snippet you paste in.",
      },
      {
        question: "Will it change my code?",
        answer:
          "No — it returns your code unchanged with a comment added. It won't refactor or rewrite the logic.",
      },
    ],
  },
  {
    slug: "code-to-docstring",
    category: "code",
    inputType: "function",
    outputType: "docstring",
    promptTemplate:
      "Write a clear docstring for the input function, describing what it does, its parameters, and its return value, using the conventional docstring format for the language. Return only the function with the docstring added, no preamble.\n\nFunction:\n{input}",
    seoTitle: "Generate Docstrings for Functions — Free AI Tool",
    seoDescription:
      "Turn any function into properly formatted documentation with a docstring. Free, no signup required.",
    h1: "Generate a Docstring",
    introCopy:
      "A docstring is the documentation that lives with a function — describing its purpose, parameters, and return value in the format your language expects, so IDEs and doc generators can surface it. Unlike a quick inline comment, a docstring is structured and complete. This tool reads a function and produces a docstring matching the conventions of its language, whether that's a Python triple-quoted block, a JSDoc comment, or something else. It's built for the moment you've finished a function and need to document it properly before it becomes part of a shared API surface.",
    exampleInput:
      "def slugify(title):\n    return title.lower().strip().replace(' ', '-')",
    exampleOutput:
      'def slugify(title):\n    """Convert a title into a URL-safe slug.\n\n    Args:\n        title (str): The text to convert.\n\n    Returns:\n        str: A lowercased, hyphenated slug with surrounding whitespace removed.\n    """\n    return title.lower().strip().replace(\' \', \'-\')',
    faq: [
      {
        question: "How is this different from the code comment tool?",
        answer:
          "A comment is a short freeform note; a docstring is structured documentation with parameter and return descriptions in your language's standard format.",
      },
      {
        question: "Does it follow my language's docstring style?",
        answer:
          "Yes — it uses the conventional format for the language it detects, such as Google/NumPy style for Python or JSDoc for JavaScript.",
      },
      {
        question: "Will the parameter descriptions be accurate?",
        answer:
          "It infers them from the code and names, which is usually accurate, but review anything ambiguous — it can only describe what the code makes visible.",
      },
    ],
  },
  {
    slug: "code-explainer-plain-english",
    category: "code",
    inputType: "code snippet",
    outputType: "explanation",
    promptTemplate:
      "Explain what the input code does in plain English, as if to a developer unfamiliar with this specific snippet. Be clear and concise. Return only the explanation, no preamble.\n\nCode:\n{input}",
    seoTitle: "Explain Code in Plain English — Free AI Tool",
    seoDescription:
      "Paste any code and get a clear, plain-English explanation of what it does. Free, no signup required.",
    h1: "Explain Code in Plain English",
    introCopy:
      "Sometimes you inherit a snippet — from a coworker, a Stack Overflow answer, or a codebase you just joined — and need to know what it actually does before trusting it. This tool translates code into a plain-English explanation aimed at a developer who's competent but unfamiliar with this particular block. It walks through the logic and the point of it, without assuming you already know the surrounding context. It's especially handy for dense one-liners, unfamiliar library calls, or clever code that isn't self-explanatory.",
    exampleInput: "arr.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})",
    exampleOutput:
      "This counts how many times each value appears in the array `arr`. It builds an object where each key is a value from the array and each value is its count — starting from an empty object and, for every element, incrementing that element's tally (defaulting to 0 the first time it's seen).",
    faq: [
      {
        question: "Can it explain code in any language?",
        answer:
          "Yes — it handles common languages and infers the language from the snippet. Very niche or domain-specific languages may get a more general explanation.",
      },
      {
        question: "Does it explain line by line or overall?",
        answer:
          "It focuses on what the code accomplishes as a whole, mentioning specific lines only where they're key to understanding the logic.",
      },
      {
        question: "Is this good for learning?",
        answer:
          "Yes — it's a fast way to understand unfamiliar patterns, though pairing it with the language's docs deepens the takeaway.",
      },
    ],
  },
  {
    slug: "error-message-to-plain-english",
    category: "code",
    inputType: "error message",
    outputType: "explanation",
    promptTemplate:
      "Explain the input error message or stack trace in plain English: what it likely means and common causes. Return only the explanation, no preamble.\n\nError:\n{input}",
    seoTitle: "Decode Error Messages in Plain English — Free AI Tool",
    seoDescription:
      "Paste a cryptic error or stack trace and get a plain-English explanation and likely causes. Free, no signup required.",
    h1: "Explain an Error Message",
    introCopy:
      "Error messages are written for the machine's benefit, not yours, and a stack trace can bury the actual problem under framework noise. This tool takes a raw error or trace and explains, in plain language, what it most likely means and the common reasons it shows up. It won't fix your code for you, but it points you at the likely culprit faster than parsing the jargon yourself — useful when you hit an unfamiliar error and want a direction to investigate before diving into a search.",
    exampleInput: "TypeError: Cannot read properties of undefined (reading 'map')",
    exampleOutput:
      "You're calling `.map()` on something that is `undefined` rather than an array. Usually this means the data you expected hasn't loaded yet (e.g. an API response before it arrives), a variable name is misspelled, or a function returned nothing where you expected a list. Check that the value exists — often by guarding with a default like `(items || []).map(...)` or waiting for the data before rendering.",
    faq: [
      {
        question: "Will it tell me exactly how to fix my bug?",
        answer:
          "It explains the likely meaning and common causes to point you in the right direction, but it can't see your full codebase, so the specific fix is still yours to apply.",
      },
      {
        question: "Can I paste a full stack trace?",
        answer:
          "Yes — pasting the whole trace helps, since the most useful information is often a few lines into it rather than the top line.",
      },
      {
        question: "Does it work for any language or framework?",
        answer:
          "Yes — it handles errors from common languages and frameworks and explains the general meaning even for less familiar ones.",
      },
    ],
  },
  {
    slug: "code-to-readme-snippet",
    category: "code",
    inputType: "code snippet",
    outputType: "readme section",
    promptTemplate:
      "Write a short README usage section for the input code: a one-line description and a minimal usage example with brief explanation. Use markdown. Return only the README section, no preamble.\n\nCode:\n{input}",
    seoTitle: "Turn Code into a README Usage Section — Free AI Tool",
    seoDescription:
      "Generate a clean README usage snippet from your code. Free, no signup required.",
    h1: "Generate a README Usage Section",
    introCopy:
      "The usage section is the part of a README people actually read — a quick description plus an example showing how to call the thing. Writing it is tedious after you've already built the feature. This tool takes a function or module and drafts a markdown usage section: a one-line summary and a minimal example with a short explanation. It's aimed at open-source maintainers and anyone documenting an internal library who wants a solid first draft of the docs instead of a blank code fence.",
    exampleInput: "export function formatCurrency(amount, currency = 'USD') { ... }",
    exampleOutput:
      "### `formatCurrency(amount, currency?)`\n\nFormat a number as a currency string.\n\n```js\nformatCurrency(1999.5);          // \"$1,999.50\"\nformatCurrency(1999.5, 'EUR');    // \"€1,999.50\"\n```\n\nPass an ISO currency code as the second argument to override the default (`USD`).",
    faq: [
      {
        question: "Does it output markdown?",
        answer:
          "Yes — it's formatted as a markdown section with a heading and a fenced code example, ready to paste into a README.",
      },
      {
        question: "Will the usage example actually run?",
        answer:
          "It writes a plausible example from the code's signature. Verify it against your real implementation, especially if behavior depends on details not visible in the snippet.",
      },
      {
        question: "Can I use this for a whole library at once?",
        answer:
          "It works best on one function or module at a time. Run each piece separately for a clean, focused section.",
      },
    ],
  },
  {
    slug: "sql-query-explainer",
    category: "code",
    inputType: "SQL query",
    outputType: "explanation",
    promptTemplate:
      "Explain what the input SQL query does in plain English, including which tables it touches and what it returns. Return only the explanation, no preamble.\n\nSQL:\n{input}",
    seoTitle: "Explain SQL Queries in Plain English — Free AI Tool",
    seoDescription:
      "Paste any SQL query and get a clear explanation of what it returns. Free, no signup required.",
    h1: "Explain a SQL Query",
    introCopy:
      "A SQL query with several joins, a subquery, and a window function can be hard to read even for people who write SQL daily. This tool translates a query into a plain-English description of what it retrieves, which tables it involves, and how the pieces fit together. It's useful for reviewing a query someone else wrote, understanding a report you inherited, or double-checking that a query you're about to run does what you think before it hits production data.",
    exampleInput:
      "SELECT u.name, COUNT(o.id) FROM users u LEFT JOIN orders o ON o.user_id = u.id GROUP BY u.name HAVING COUNT(o.id) > 5;",
    exampleOutput:
      "This lists each user's name alongside how many orders they've placed, but only includes users with more than five orders. It joins `users` to `orders` on the user id, keeps every user via the LEFT JOIN, groups the rows by user name to count orders per person, and then filters the grouped results down to those with a count above five.",
    faq: [
      {
        question: "Does it work with any SQL dialect?",
        answer:
          "Yes — it handles standard SQL and common dialects like PostgreSQL, MySQL, and SQL Server, explaining dialect-specific functions where relevant.",
      },
      {
        question: "Will it tell me if my query is slow?",
        answer:
          "It explains what the query does, not its performance. For optimization, you'd want your database's query planner (EXPLAIN) output.",
      },
      {
        question: "Can it explain a query without knowing my schema?",
        answer:
          "Mostly yes — it infers meaning from table and column names. Providing schema context makes the explanation more precise.",
      },
    ],
  },
  {
    slug: "regex-explainer",
    category: "code",
    inputType: "regular expression",
    outputType: "explanation",
    promptTemplate:
      "Explain what the input regular expression matches, in plain English, breaking down its components. Return only the explanation, no preamble.\n\nRegex:\n{input}",
    seoTitle: "Explain Regular Expressions in Plain English — Free AI Tool",
    seoDescription:
      "Paste a regex and get a plain-English breakdown of what it matches. Free, no signup required.",
    h1: "Explain a Regular Expression",
    introCopy:
      "Regular expressions are famously write-once, read-never — a pattern that made perfect sense when you wrote it becomes a cryptic string of symbols a week later. This tool breaks a regex down into plain English, explaining what it matches and what each part contributes. It's built for the moment you find an unexplained pattern in a codebase or a config file and need to know exactly what it captures before you touch it, without mentally single-stepping through the syntax yourself.",
    exampleInput: "^\\+?[1-9]\\d{7,14}$",
    exampleOutput:
      "This matches an international phone number in E.164-like form. Breaking it down: `^` anchors to the start; `\\+?` allows an optional leading plus sign; `[1-9]` requires the first digit to be 1–9 (no leading zero); `\\d{7,14}` requires 7 to 14 more digits; and `$` anchors to the end. So it accepts 8–15 total digits, optionally prefixed with `+`.",
    faq: [
      {
        question: "Does it handle complex patterns with lookaheads?",
        answer:
          "Yes — it explains advanced constructs like lookaheads, lookbehinds, backreferences, and non-capturing groups, not just basic character classes.",
      },
      {
        question: "Will it tell me if my regex has a bug?",
        answer:
          "It describes what the pattern actually matches, which often reveals a mismatch with your intent — but it explains rather than debugs.",
      },
      {
        question: "Does regex flavor matter?",
        answer:
          "Some syntax differs between flavors (PCRE, JavaScript, etc.). Mention the flavor if you're using anything unusual for the most accurate explanation.",
      },
    ],
  },
  {
    slug: "code-to-pseudocode",
    category: "code",
    inputType: "code snippet",
    outputType: "pseudocode",
    promptTemplate:
      "Convert the input code into clear, language-agnostic pseudocode that captures its logic and control flow. Return only the pseudocode, no preamble.\n\nCode:\n{input}",
    seoTitle: "Convert Code to Pseudocode — Free AI Tool",
    seoDescription:
      "Turn real code into clean, language-agnostic pseudocode. Free, no signup required.",
    h1: "Convert Code to Pseudocode",
    introCopy:
      "Pseudocode strips away language-specific syntax to reveal the underlying algorithm — the logic and control flow without the semicolons and boilerplate. This tool converts a real snippet into readable pseudocode, useful for documenting an algorithm, explaining logic in a design doc, teaching, or porting an idea from one language to another. Because it drops implementation noise, it makes the shape of the algorithm obvious in a way the original code sometimes doesn't.",
    exampleInput:
      "for (let i = 0; i < n; i++) { if (arr[i] % 2 === 0) sum += arr[i]; }",
    exampleOutput:
      "SET sum to 0\nFOR each index i from 0 to n - 1\n    IF arr[i] is even THEN\n        ADD arr[i] to sum\n    END IF\nEND FOR",
    faq: [
      {
        question: "Is the pseudocode tied to a specific language?",
        answer:
          "No — that's the point. It uses generic, language-agnostic conventions so the logic is clear regardless of the source language.",
      },
      {
        question: "Can I use this to port code to another language?",
        answer:
          "Yes — pseudocode is a helpful intermediate step for reimplementing logic in a different language without carrying over syntax quirks.",
      },
      {
        question: "Does it preserve all the details?",
        answer:
          "It preserves the logic and control flow while abstracting away syntax. Very implementation-specific details may be generalized.",
      },
    ],
  },
  {
    slug: "function-name-generator",
    category: "code",
    inputType: "function description",
    outputType: "name suggestions",
    promptTemplate:
      "Suggest 3-5 clear, conventional function names for a function described by the input. Follow common naming conventions (camelCase). Return only the list of names with a one-line note each, no preamble.\n\nDescription:\n{input}",
    seoTitle: "Generate Good Function Names — Free AI Tool",
    seoDescription:
      "Describe what a function does and get clear, conventional name suggestions. Free, no signup required.",
    h1: "Generate a Function Name",
    introCopy:
      "Naming is famously one of the hard problems in programming — a function's name is the interface every future reader meets first, and a vague one causes lasting confusion. This tool takes a description of what a function does and suggests a few clear, conventional names, each with a note on when it fits. It's for the moment you've written the logic but `doStuff` is the best name you've got, and you want options that follow standard conventions and read well at the call site.",
    exampleInput:
      "a function that checks whether a user is allowed to edit a document based on their role",
    exampleOutput:
      "- `canEditDocument(user, doc)` — reads naturally as a boolean check at the call site\n- `hasEditPermission(user, doc)` — emphasizes the permission being checked\n- `isEditableBy(doc, user)` — reads well if called as a method on the document\n- `userCanEdit(user, doc)` — explicit about the subject performing the action",
    faq: [
      {
        question: "What naming convention does it use?",
        answer:
          "It defaults to camelCase for functions, the most common convention. Mention it if you need snake_case, PascalCase, or another style.",
      },
      {
        question: "How many suggestions do I get?",
        answer:
          "Usually three to five, each with a short note so you can pick the one that reads best in your context.",
      },
      {
        question: "Can it name variables and classes too?",
        answer:
          "It's tuned for function names, but describing a variable or class works too — just phrase the description accordingly.",
      },
    ],
  },
  {
    slug: "code-review-comment-softener",
    category: "code",
    inputType: "code review comment",
    outputType: "softened comment",
    promptTemplate:
      "Rewrite the input code review comment to be constructive and collegial while keeping the technical point exactly. Return only the rewritten comment, no preamble.\n\nComment:\n{input}",
    seoTitle: "Make Code Review Comments Kinder — Free AI Tool",
    seoDescription:
      "Rewrite blunt code review comments to be constructive without losing the point. Free, no signup required.",
    h1: "Soften a Code Review Comment",
    introCopy:
      "Code review is where tone matters most and gets rushed most. A blunt \"this is wrong\" lands very differently from \"could we handle the null case here?\" even when the technical point is identical. This tool rewrites a terse or harsh review comment into something constructive and collegial, keeping your actual feedback precise while removing the edge. It's useful when you're reviewing quickly, you know the change has a real problem, and you want the author to fix it without feeling attacked.",
    exampleInput: "this is completely wrong, you didn't even handle the empty array",
    exampleOutput:
      "Looks like this doesn't cover the empty-array case yet — could we add a guard for that? Everything else reads well.",
    faq: [
      {
        question: "Will it water down my actual feedback?",
        answer:
          "No — it keeps the technical point precise and specific. It only changes the tone, not what you're asking the author to fix.",
      },
      {
        question: "Is being nicer in reviews actually worth it?",
        answer:
          "Constructive phrasing tends to get changes made faster and with less friction, especially with newer teammates or across teams.",
      },
      {
        question: "Can I use this for other kinds of critical feedback?",
        answer:
          "It's tuned for code review, but it works for any short, blunt technical comment you want to deliver more collegially.",
      },
    ],
  },

  // ---------- commit-message ----------
  {
    slug: "diff-to-commit-message",
    category: "commit-message",
    inputType: "diff",
    outputType: "commit message",
    promptTemplate:
      "Write a clear, conventional commit message summarizing the input diff: a concise imperative subject line and, if warranted, a short body. Return only the commit message, no preamble.\n\nDiff:\n{input}",
    seoTitle: "Turn a Git Diff into a Commit Message — Free AI Tool",
    seoDescription:
      "Paste a diff and get a clean, conventional commit message. Free, no signup required.",
    h1: "Generate a Commit Message from a Diff",
    introCopy:
      "By the time you're staging changes, you've already spent your focus on the code — and the commit message becomes an afterthought like \"fix stuff.\" This tool reads a diff and writes a proper commit message: a concise imperative subject line and, when the change warrants it, a short body explaining the why. It's built for developers who want a readable git history without composing each message by hand, and it follows the conventions reviewers expect.",
    exampleInput:
      "- if (user) return true;\n+ if (user && user.active) return true;",
    exampleOutput:
      "Require active user in access check\n\nPreviously any existing user passed the check; now the user must also be active, preventing deactivated accounts from retaining access.",
    faq: [
      {
        question: "Does it follow Conventional Commits format?",
        answer:
          "It writes a clean imperative subject and optional body by default. If you use the `type(scope): subject` convention, mention it and it will follow that format.",
      },
      {
        question: "How big a diff can I paste?",
        answer:
          "Small, focused diffs produce the best messages. For a large diff spanning many concerns, consider splitting it into separate commits first.",
      },
      {
        question: "Will it explain why, not just what?",
        answer:
          "It infers intent from the change and includes a body when the reasoning isn't obvious from the subject alone.",
      },
    ],
  },
  {
    slug: "commit-message-generator",
    category: "commit-message",
    inputType: "change description",
    outputType: "commit message",
    promptTemplate:
      "Write a clean, conventional commit message from the input description of a change: an imperative subject line and optional short body. Return only the commit message, no preamble.\n\nChange:\n{input}",
    seoTitle: "Commit Message Generator — Free AI Tool",
    seoDescription:
      "Describe your change and get a properly formatted commit message. Free, no signup required.",
    h1: "Generate a Commit Message",
    introCopy:
      "Sometimes you know exactly what you changed but not how to phrase it as a tidy commit. This tool takes a plain description of your change and turns it into a well-formed commit message — an imperative subject line under the usual length limit, plus a short body if there's a reason worth recording. Unlike the diff-based tool, this one starts from your words rather than the code, which is handy when you're describing intent that a diff wouldn't fully capture.",
    exampleInput:
      "made the search box wait until the user stops typing before firing a request",
    exampleOutput:
      "Debounce search input to reduce request volume\n\nThe search box now waits for a pause in typing before querying, avoiding a request on every keystroke.",
    faq: [
      {
        question: "How is this different from the diff-to-commit-message tool?",
        answer:
          "This one starts from your plain description of the change; the diff tool reads the actual code changes. Use this when intent matters more than the exact diff.",
      },
      {
        question: "Will the subject line stay short?",
        answer:
          "Yes — it aims for a concise imperative subject within the conventional ~50-character guideline, with details moved to the body.",
      },
      {
        question: "Can it use a type prefix like feat: or fix:?",
        answer:
          "Yes — mention that you use Conventional Commits and it will prefix the subject with the appropriate type.",
      },
    ],
  },
  {
    slug: "changelog-from-commits",
    category: "commit-message",
    inputType: "commit list",
    outputType: "changelog",
    promptTemplate:
      "Turn the input list of commit messages into a clean, user-facing changelog grouped by type (Added, Changed, Fixed). Rewrite terse commits into readable entries. Return only the changelog, no preamble.\n\nCommits:\n{input}",
    seoTitle: "Generate a Changelog from Commits — Free AI Tool",
    seoDescription:
      "Turn a list of commit messages into a clean, user-facing changelog. Free, no signup required.",
    h1: "Generate a Changelog from Commits",
    introCopy:
      "Commit messages are written for developers; a changelog is written for users, and the gap between them is real work at release time. This tool takes a raw list of commits and produces a grouped, readable changelog — sorting entries into Added, Changed, and Fixed, and rewriting terse internal messages into something a user can understand. It's for maintainers cutting a release who don't want to hand-curate the whole list from scratch.",
    exampleInput:
      "fix null crash in export\nadd dark mode\nbump deps\nrefactor auth (internal)\nfix typo in settings label",
    exampleOutput:
      "### Added\n- Dark mode\n\n### Fixed\n- Crash when exporting with empty data\n- Incorrect label on the settings screen",
    faq: [
      {
        question: "Does it include internal-only commits?",
        answer:
          "It focuses on user-facing changes and tends to omit purely internal work like refactors or dependency bumps, which don't belong in a user changelog.",
      },
      {
        question: "How does it group entries?",
        answer:
          "Into standard Keep a Changelog sections — Added, Changed, Fixed — based on what each commit describes.",
      },
      {
        question: "Will it rewrite cryptic commit messages?",
        answer:
          "Yes — terse messages like \"fix null crash in export\" become readable, user-friendly entries.",
      },
    ],
  },
  {
    slug: "pr-description-generator",
    category: "commit-message",
    inputType: "change summary",
    outputType: "PR description",
    promptTemplate:
      "Write a clear pull request description from the input summary of changes, including a short overview and a bulleted list of what changed. Use markdown. Return only the description, no preamble.\n\nChanges:\n{input}",
    seoTitle: "Generate a Pull Request Description — Free AI Tool",
    seoDescription:
      "Turn a rough summary of your changes into a clean PR description. Free, no signup required.",
    h1: "Generate a Pull Request Description",
    introCopy:
      "A good PR description saves reviewers time — an overview of the change and a bullet list of what to look at. Writing it after the work is done feels like paperwork, so it often gets skipped. This tool turns a rough summary of your changes into a structured markdown PR description with an overview and a change list. It's aimed at developers who want their PRs to be reviewed quickly and understood correctly without spending ten minutes writing prose.",
    exampleInput:
      "added rate limiting to the login endpoint, 5 attempts per minute, returns 429, added a test",
    exampleOutput:
      "## Overview\nAdds rate limiting to the login endpoint to slow down brute-force attempts.\n\n## Changes\n- Limit login attempts to 5 per minute per client\n- Return `429 Too Many Requests` when the limit is exceeded\n- Add a test covering the rate-limit behavior",
    faq: [
      {
        question: "Does it output markdown for GitHub/GitLab?",
        answer:
          "Yes — it uses markdown headings and bullets that render cleanly in pull request descriptions.",
      },
      {
        question: "Can it include a testing section?",
        answer:
          "If your summary mentions how you tested the change, it will include that. Add testing notes to your input to have them reflected.",
      },
      {
        question: "How detailed should my input be?",
        answer:
          "A few phrases about what you changed and why is enough — the more specifics you give, the more accurate the bullet list.",
      },
    ],
  },
  {
    slug: "commit-message-to-changelog-entry",
    category: "commit-message",
    inputType: "commit message",
    outputType: "changelog entry",
    promptTemplate:
      "Rewrite the input commit message as a single user-facing changelog entry — clear, concise, and written for end users rather than developers. Return only the entry, no preamble.\n\nCommit:\n{input}",
    seoTitle: "Turn a Commit into a Changelog Entry — Free AI Tool",
    seoDescription:
      "Rewrite a single commit message into a user-facing changelog line. Free, no signup required.",
    h1: "Commit Message to Changelog Entry",
    introCopy:
      "Not every changelog job means processing a whole release at once — sometimes you just need to convert one commit into the line that will appear in release notes. This tool rewrites a single developer-oriented commit message into a clean, user-facing changelog entry, dropping internal jargon in favor of what the change means for the person using the product. It pairs well with the full changelog generator when you're editing entries one at a time.",
    exampleInput: "fix: prevent race condition in cache invalidation on concurrent writes",
    exampleOutput: "Fixed occasional stale data when saving changes at the same time as another update.",
    faq: [
      {
        question: "How is this different from the full changelog tool?",
        answer:
          "This handles one commit at a time into one entry; the changelog generator processes a whole list and groups it into sections.",
      },
      {
        question: "Does it keep technical terms?",
        answer:
          "It translates them into user-facing language, since a changelog reader usually doesn't care about race conditions or cache internals.",
      },
      {
        question: "Can I use it for internal changelogs too?",
        answer:
          "Yes — if your audience is technical, the input's terminology is largely preserved; for end users it's simplified.",
      },
    ],
  },
  {
    slug: "release-notes-generator",
    category: "commit-message",
    inputType: "change list",
    outputType: "release notes",
    promptTemplate:
      "Write friendly, well-organized release notes from the input list of changes, with a short intro and grouped highlights. Use markdown. Return only the release notes, no preamble.\n\nChanges:\n{input}",
    seoTitle: "Generate Release Notes — Free AI Tool",
    seoDescription:
      "Turn a list of changes into polished, user-friendly release notes. Free, no signup required.",
    h1: "Generate Release Notes",
    introCopy:
      "Release notes are the customer-facing announcement of what shipped — warmer and more curated than a raw changelog, with a short intro and highlighted headline features. This tool takes a list of changes and produces polished release notes: a brief welcoming intro followed by organized highlights. It's for product and dev teams who want their releases to read like an announcement someone's excited to publish, not a git log dump.",
    exampleInput:
      "new export to PDF, faster dashboard load, fixed timezone bug, added Spanish translations",
    exampleOutput:
      "## What's New\n\nThis release brings a few improvements we think you'll like.\n\n**Highlights**\n- **Export to PDF** — you can now download your reports as PDFs\n- **Faster dashboard** — the dashboard loads noticeably quicker\n- **Español** — the app is now available in Spanish\n\n**Also fixed**\n- Corrected a timezone display bug on scheduled items",
    faq: [
      {
        question: "How are release notes different from a changelog?",
        answer:
          "Release notes are warmer and curated for customers, with an intro and highlighted features; a changelog is a terser, comprehensive list grouped by change type.",
      },
      {
        question: "Can I set the tone?",
        answer:
          "It defaults to friendly and professional. Mention if you want it more playful or more formal and it will adjust.",
      },
      {
        question: "Does it highlight the biggest changes?",
        answer:
          "Yes — it surfaces headline features as highlights and groups smaller fixes separately so the important items stand out.",
      },
    ],
  },
  {
    slug: "commit-message-formatter",
    category: "commit-message",
    inputType: "commit message",
    outputType: "formatted message",
    promptTemplate:
      "Reformat the input commit message to follow best practices: imperative mood, concise subject line under about 50 characters, blank line before a wrapped body. Keep the meaning. Return only the reformatted message, no preamble.\n\nCommit:\n{input}",
    seoTitle: "Format a Commit Message Properly — Free AI Tool",
    seoDescription:
      "Clean up a commit message to follow git best practices. Free, no signup required.",
    h1: "Format a Commit Message",
    introCopy:
      "Git has well-established conventions for commit messages — imperative mood, a short subject line, a blank line before a wrapped body — and most messages quietly break all three. This tool takes a message you've already written and reformats it to follow those conventions without changing what it says. It's for developers who know their commit hygiene is sloppy and want a quick pass to tidy a message before committing, rather than rewriting it from scratch.",
    exampleInput:
      "Fixed the bug where the modal would sometimes not close when you clicked outside of it and also cleaned up some css",
    exampleOutput:
      "Fix modal not closing on outside click\n\nResolve an issue where clicking outside the modal sometimes failed to\nclose it. Also tidy up related CSS.",
    faq: [
      {
        question: "What conventions does it apply?",
        answer:
          "Imperative subject, roughly 50-character subject limit, a blank line separating subject and body, and body text wrapped for readability.",
      },
      {
        question: "Does it change my message's meaning?",
        answer:
          "No — it only reformats and tightens phrasing. The substance of what you committed stays the same.",
      },
      {
        question: "Will it split unrelated changes?",
        answer:
          "It formats a single message; it won't split one commit into several. Keep separate concerns in separate commits before running it.",
      },
    ],
  },
  {
    slug: "bugfix-to-commit-message",
    category: "commit-message",
    inputType: "bug description",
    outputType: "commit message",
    promptTemplate:
      "Write a commit message for a bug fix from the input description of the bug and fix, using an imperative subject and a body explaining the cause and resolution. Return only the commit message, no preamble.\n\nBug:\n{input}",
    seoTitle: "Bug Fix Commit Message Generator — Free AI Tool",
    seoDescription:
      "Describe a bug and its fix and get a clear commit message. Free, no signup required.",
    h1: "Bug Fix Commit Message",
    introCopy:
      "Bug-fix commits benefit from a body that records what was actually wrong — future debuggers reading `git blame` want the cause, not just \"fixed bug.\" This tool takes your description of a bug and its fix and produces a commit message with an imperative subject plus a body explaining the root cause and the resolution. It's specifically tuned for fixes, where the why is worth preserving, unlike a routine feature commit.",
    exampleInput:
      "dates were off by one day for users in negative UTC offsets because we parsed the date as UTC midnight",
    exampleOutput:
      "Fix off-by-one date for negative UTC offsets\n\nDates were parsed as UTC midnight, so users in negative offsets saw the\nprevious day. Parse dates in the user's local timezone instead.",
    faq: [
      {
        question: "Why include the cause in the message?",
        answer:
          "Because whoever revisits this fix later — often via git blame — needs to understand what went wrong, not just that something was fixed.",
      },
      {
        question: "How is this different from the general commit generator?",
        answer:
          "This one is tuned for fixes and reliably includes a cause-and-resolution body, whereas the general tool adapts to any kind of change.",
      },
      {
        question: "Can it reference an issue number?",
        answer:
          "Yes — include the issue number in your description and it will reference it in the message.",
      },
    ],
  },
  {
    slug: "feature-to-pr-title",
    category: "commit-message",
    inputType: "feature description",
    outputType: "PR title",
    promptTemplate:
      "Write a concise, clear pull request title from the input feature description. Keep it short and imperative. Return only the title, no preamble.\n\nFeature:\n{input}",
    seoTitle: "Generate a Pull Request Title — Free AI Tool",
    seoDescription:
      "Turn a feature description into a short, clear PR title. Free, no signup required.",
    h1: "Generate a Pull Request Title",
    introCopy:
      "A PR title is the one line that shows up in the review queue, the merge log, and every notification — so it should be short and instantly clear. This tool condenses a feature description into a concise, imperative title that tells reviewers what the PR does at a glance. It's a small thing, but a good title is what gets a PR opened and reviewed sooner rather than buried under a vague label like \"updates.\"",
    exampleInput:
      "I added the ability for users to log in with their Google account in addition to email",
    exampleOutput: "Add Google sign-in as a login option",
    faq: [
      {
        question: "How long will the title be?",
        answer:
          "Short — a single scannable line. PR titles work best kept brief, with detail moved to the description.",
      },
      {
        question: "Can it match a naming convention?",
        answer:
          "Yes — if you prefix titles with a type or ticket ID, mention the format and it will follow it.",
      },
      {
        question: "Should I use this with the PR description tool?",
        answer:
          "They pair naturally — this gives the title, the PR description generator fills in the overview and change list below it.",
      },
    ],
  },
  {
    slug: "commit-history-summarizer",
    category: "commit-message",
    inputType: "commit history",
    outputType: "summary",
    promptTemplate:
      "Summarize the input list of commits into a short paragraph describing the overall work done, suitable for a standup or status update. Return only the summary, no preamble.\n\nCommits:\n{input}",
    seoTitle: "Summarize Commit History — Free AI Tool",
    seoDescription:
      "Turn a list of commits into a short status update. Free, no signup required.",
    h1: "Summarize Commit History",
    introCopy:
      "When someone asks \"what did you work on this week,\" your commit history has the answer buried in a dozen terse lines. This tool reads a list of commits and summarizes the overall work into a short paragraph you can drop into a standup update, a status report, or a weekly summary. Instead of grouping into a changelog, it steps back and describes the arc of what got done — useful for reporting progress to people who don't read git logs.",
    exampleInput:
      "add login form\nvalidate email field\nhook up auth API\nfix redirect after login\nstyle the login page",
    exampleOutput:
      "This week I built out the login flow end to end — adding the login form with email validation, wiring it up to the auth API, fixing the post-login redirect, and styling the page.",
    faq: [
      {
        question: "Who is this summary written for?",
        answer:
          "A human audience like a manager or team standup — it describes the work narratively rather than listing each commit.",
      },
      {
        question: "How is this different from the changelog tool?",
        answer:
          "The changelog groups changes into categorized entries; this produces a flowing progress summary for status updates.",
      },
      {
        question: "Can I summarize a whole sprint?",
        answer:
          "Yes — paste the full range of commits and it will summarize the overall themes of the work rather than every detail.",
      },
    ],
  },

  // ---------- customer-support ----------
  {
    slug: "support-ticket-to-response",
    category: "customer-support",
    inputType: "support ticket",
    outputType: "response",
    promptTemplate:
      "Write a helpful, professional support response to the input customer ticket. Acknowledge the issue, and be clear and warm. Return only the response, no preamble.\n\nTicket:\n{input}",
    seoTitle: "Generate Support Ticket Responses — Free AI Tool",
    seoDescription:
      "Draft a warm, professional reply to any customer support ticket. Free, no signup required.",
    h1: "Respond to a Support Ticket",
    introCopy:
      "A good support reply acknowledges the customer's problem, sounds like a person, and moves toward a resolution — but writing that from scratch on every ticket is draining, especially at volume. This tool drafts a professional, warm response to a customer ticket that you can review and send. It's a starting draft, not an auto-responder: you stay in control of the specifics, while the tool handles the tone and structure that make a reply feel helpful rather than canned.",
    exampleInput:
      "I've been charged twice this month and I'm really frustrated, please fix this",
    exampleOutput:
      "Hi there,\n\nI'm sorry for the trouble — being charged twice is frustrating, and I completely understand. I've flagged your account so we can look into the duplicate charge right away. Once confirmed, we'll refund the extra charge to your original payment method.\n\nCould you confirm the date of the second charge so I can locate it quickly? I'll keep you updated every step of the way.\n\nBest,",
    faq: [
      {
        question: "Will it invent a resolution I can't deliver?",
        answer:
          "It drafts a helpful reply based on the ticket, but always review it — confirm any promises (like refunds or timelines) match what you can actually do.",
      },
      {
        question: "Can I adjust the tone?",
        answer:
          "Yes — it defaults to warm and professional; mention if you need it more formal, more casual, or more apologetic.",
      },
      {
        question: "Does it handle angry customers well?",
        answer:
          "It acknowledges frustration and stays calm and constructive. For very heated tickets, the angry-customer softener tool is a good companion.",
      },
    ],
  },
  {
    slug: "complaint-to-apology-response",
    category: "customer-support",
    inputType: "complaint",
    outputType: "apology response",
    promptTemplate:
      "Write a sincere, professional apology response to the input customer complaint. Acknowledge the specific problem, apologize genuinely, and offer a path forward without over-promising. Return only the response, no preamble.\n\nComplaint:\n{input}",
    seoTitle: "Turn a Complaint into an Apology Response — Free AI Tool",
    seoDescription:
      "Draft a sincere apology reply to a customer complaint. Free, no signup required.",
    h1: "Respond to a Complaint with an Apology",
    introCopy:
      "When a customer is genuinely let down, the reply has to do real emotional work — acknowledge the specific failure, apologize sincerely, and offer a path forward without making promises you can't keep. This tool drafts exactly that from a complaint, striking the balance between taking responsibility and staying measured. It's for the moments when a generic \"sorry for the inconvenience\" would make things worse and you need a response that reads as authentically apologetic.",
    exampleInput:
      "your delivery was 3 days late and the item arrived damaged. this is unacceptable for the price I paid.",
    exampleOutput:
      "Hi,\n\nI'm genuinely sorry — a three-day delay and a damaged item is not the experience you paid for, and you're right to be upset. This isn't the standard we hold ourselves to.\n\nI'd like to make it right: we can send a replacement right away or issue a full refund, whichever you prefer. Either way, you won't be charged for return shipping on the damaged item.\n\nJust let me know which you'd like and I'll take care of it today.\n\nSincerely,",
    faq: [
      {
        question: "Does it over-apologize?",
        answer:
          "No — it aims for a sincere apology that takes responsibility without groveling, and it avoids promising remedies you haven't authorized.",
      },
      {
        question: "How is this different from the support response tool?",
        answer:
          "This one is specifically for complaints and leads with a genuine apology, whereas the general response tool handles any ticket type.",
      },
      {
        question: "Can I control what remedy is offered?",
        answer:
          "Yes — include the resolution you can offer in your input, and the draft will center on that instead of guessing.",
      },
    ],
  },
  {
    slug: "ticket-to-internal-summary",
    category: "customer-support",
    inputType: "support ticket",
    outputType: "internal summary",
    promptTemplate:
      "Summarize the input customer ticket into a brief internal note for the support team: the core issue, relevant details, and what the customer wants. Return only the summary, no preamble.\n\nTicket:\n{input}",
    seoTitle: "Summarize Support Tickets for Your Team — Free AI Tool",
    seoDescription:
      "Turn a long customer ticket into a brief internal summary. Free, no signup required.",
    h1: "Summarize a Ticket for Your Team",
    introCopy:
      "Long, rambling tickets slow down internal handoffs — when you escalate to engineering or pass a case to a colleague, they shouldn't have to read the whole thread. This tool distills a customer ticket into a short internal note: the core issue, the details that matter, and what the customer actually wants. It's written for your team's eyes, not the customer's, so it's blunt and efficient rather than warm.",
    exampleInput:
      "Hi, so I've been trying to use the app for like a week now and every time I try to upload a photo bigger than a few MB it just spins forever and never finishes, I'm on an iPhone 12, tried wifi and cellular, please help",
    exampleOutput:
      "Issue: Photo upload hangs indefinitely for files above ~a few MB. Reproduced on iPhone 12, on both Wi-Fi and cellular, over the past week. Customer wants uploads to work. Likely needs eng review of upload size handling / timeout.",
    faq: [
      {
        question: "Is this summary meant for the customer?",
        answer:
          "No — it's an internal note for your team, so it's terse and technical rather than polished for the customer.",
      },
      {
        question: "Does it capture troubleshooting the customer already tried?",
        answer:
          "Yes — details like devices tested or steps already attempted are preserved so your team doesn't repeat them.",
      },
      {
        question: "Can I use it for escalations to engineering?",
        answer:
          "That's a primary use case — it gives engineers the reproduction details and the ask without the full customer narrative.",
      },
    ],
  },
  {
    slug: "support-macro-generator",
    category: "customer-support",
    inputType: "common issue",
    outputType: "canned response",
    promptTemplate:
      "Write a reusable support macro (canned response template) for the input common issue, with a placeholder like [name] where personalization is needed. Keep it warm and clear. Return only the macro, no preamble.\n\nIssue:\n{input}",
    seoTitle: "Generate Support Macros — Free AI Tool",
    seoDescription:
      "Create reusable canned response templates for common support issues. Free, no signup required.",
    h1: "Generate a Support Macro",
    introCopy:
      "Macros — the saved canned responses support teams reuse for recurring issues — save enormous time, but only if they're well written and don't sound robotic. This tool takes a common issue and generates a reusable macro with placeholders for the parts that need personalizing. It's for support leads building out a macro library: instead of drafting each template from scratch, you describe the issue and get a warm, clear starting point ready to save into your help desk.",
    exampleInput: "customer asking how to reset their password",
    exampleOutput:
      "Hi [name],\n\nHappy to help you reset your password. Just head to the login page and click \"Forgot password?\" — we'll email you a secure reset link. The link is valid for [duration], so use it soon after it arrives.\n\nIf it doesn't show up within a few minutes, check your spam folder or let me know and I'll resend it.\n\nBest,\n[agent name]",
    faq: [
      {
        question: "Why include placeholders?",
        answer:
          "So the macro stays reusable — you fill in details like the customer's name or specifics at send time, keeping each reply feeling personal.",
      },
      {
        question: "Can I generate a whole library at once?",
        answer:
          "Run one issue at a time for focused, high-quality macros. Doing them individually keeps each template tight.",
      },
      {
        question: "How is a macro different from a one-off response?",
        answer:
          "A macro is a saved template for repeated use with placeholders; the response tool writes a one-time reply to a specific ticket.",
      },
    ],
  },
  {
    slug: "angry-customer-response-softener",
    category: "customer-support",
    inputType: "draft response",
    outputType: "softened response",
    promptTemplate:
      "Rewrite the input draft support response to be calm, empathetic, and de-escalating, while keeping the facts and any policy points intact. Return only the rewritten response, no preamble.\n\nDraft:\n{input}",
    seoTitle: "De-escalate Support Responses — Free AI Tool",
    seoDescription:
      "Rewrite a support reply to calm an angry customer without losing the facts. Free, no signup required.",
    h1: "Soften a Response for an Angry Customer",
    introCopy:
      "When a customer is furious, your first-draft reply often carries some of your own defensiveness — and that escalates things. This tool rewrites a support response to be calm, empathetic, and de-escalating while keeping every fact and policy point intact. It's for the moment you've typed out a technically correct reply that reads a little cold or clipped, and you want to send something that actually cools the situation down instead of adding fuel.",
    exampleInput:
      "As stated in our policy, refunds are only available within 14 days. Your purchase was 20 days ago so we cannot refund you.",
    exampleOutput:
      "I completely understand wanting a refund here, and I'm sorry this has been frustrating. I want to be upfront with you: our refund window is 14 days from purchase, and this order falls just outside it at 20 days, so I'm not able to process a standard refund. That said, I'd still like to help — let me look into what options we do have for your account and get back to you.",
    faq: [
      {
        question: "Does it change the policy I'm communicating?",
        answer:
          "No — the facts and policy points stay exactly the same. It changes only how they're delivered, so the message lands with empathy.",
      },
      {
        question: "Will it make me promise things I can't do?",
        answer:
          "It won't invent new remedies. It keeps your stated outcome while softening the framing and acknowledging the customer's feelings.",
      },
      {
        question: "When should I use this over the complaint tool?",
        answer:
          "Use this when you've already drafted a reply that needs de-escalating; use the complaint tool to draft an apology from scratch.",
      },
    ],
  },
  {
    slug: "ticket-to-faq-entry",
    category: "customer-support",
    inputType: "support ticket",
    outputType: "faq entry",
    promptTemplate:
      "Turn the input customer ticket and its resolution into a reusable FAQ entry: a clear question and a concise, general answer. Return only the FAQ entry, no preamble.\n\nTicket:\n{input}",
    seoTitle: "Turn Support Tickets into FAQ Entries — Free AI Tool",
    seoDescription:
      "Convert a resolved ticket into a reusable FAQ question and answer. Free, no signup required.",
    h1: "Turn a Ticket into an FAQ Entry",
    introCopy:
      "Every ticket you answer is a candidate FAQ entry — if one customer asked, others will too. This tool converts a resolved ticket into a reusable question-and-answer pair, generalizing away the specific customer's details so it works for anyone. It's how support teams turn repetitive incoming questions into self-serve documentation, gradually deflecting the tickets that keep coming back. Feed it the ticket and its resolution, and get an entry ready for your help center.",
    exampleInput:
      "Customer asked: how do I change the email address on my account? Resolution: go to Settings > Account > Email, enter the new address, and confirm via the verification link sent to the new address.",
    exampleOutput:
      "**How do I change my account email address?**\n\nGo to Settings → Account → Email, enter your new address, and click Save. We'll send a verification link to the new address — click it to confirm the change. Your email won't update until the new address is verified.",
    faq: [
      {
        question: "Does it remove the specific customer's details?",
        answer:
          "Yes — it generalizes the entry so it applies to any user, dropping personal specifics from the original ticket.",
      },
      {
        question: "How is this different from the product-to-FAQ tools?",
        answer:
          "This starts from a real ticket and its resolution, so entries reflect questions customers actually ask, not hypothetical ones.",
      },
      {
        question: "Can I build a full FAQ this way?",
        answer:
          "Yes — running your most common resolved tickets through it is an efficient way to grow a help center from real demand.",
      },
    ],
  },
  {
    slug: "support-ticket-summarizer",
    category: "customer-support",
    inputType: "ticket thread",
    outputType: "summary",
    promptTemplate:
      "Summarize the input support ticket thread into a short recap of the conversation and its current status. Return only the summary, no preamble.\n\nThread:\n{input}",
    seoTitle: "Summarize a Support Ticket Thread — Free AI Tool",
    seoDescription:
      "Condense a long back-and-forth support thread into a quick recap. Free, no signup required.",
    h1: "Summarize a Ticket Thread",
    introCopy:
      "A support thread that's gone back and forth ten times is a wall of text for whoever picks it up next — or for you, returning to it after a few days. This tool summarizes the whole conversation into a short recap of what's happened and where things currently stand. Unlike the internal-summary tool, which distills a single incoming ticket, this one handles a multi-message thread, capturing the arc rather than just the opening request.",
    exampleInput:
      "Customer reported billing error → agent asked for invoice number → customer provided it → agent confirmed duplicate charge → agent said refund would take 5-7 days → customer asked for confirmation email → agent sent it",
    exampleOutput:
      "Customer reported a billing error and provided their invoice number. The agent confirmed a duplicate charge and initiated a refund (5–7 business days) and sent a confirmation email at the customer's request. Status: refund in progress, awaiting completion; no further action needed unless the refund doesn't arrive.",
    faq: [
      {
        question: "Does it capture the current status?",
        answer:
          "Yes — it ends with where things stand and any pending action, which is usually the most important part for a handoff.",
      },
      {
        question: "How is this different from the single-ticket summarizer?",
        answer:
          "This handles a full multi-message thread and its progression; the internal-summary tool distills one incoming ticket.",
      },
      {
        question: "Is it for internal use or the customer?",
        answer:
          "Internal — it's a recap to bring an agent up to speed quickly, not a message to send to the customer.",
      },
    ],
  },
  {
    slug: "refund-request-response",
    category: "customer-support",
    inputType: "refund request",
    outputType: "response",
    promptTemplate:
      "Write a professional, empathetic response to the input refund request. Be clear about next steps without over-promising, and stay warm even if declining. Return only the response, no preamble.\n\nRefund request:\n{input}",
    seoTitle: "Respond to Refund Requests — Free AI Tool",
    seoDescription:
      "Draft a professional, empathetic reply to any refund request. Free, no signup required.",
    h1: "Respond to a Refund Request",
    introCopy:
      "Refund requests are delicate — you want to be fair and warm whether you're approving or declining, without committing to something you can't do. This tool drafts a professional, empathetic response to a refund request, clear about next steps and appropriately hedged. It handles both cases: an approval that sets expectations on timing, or a gentle decline that still leaves the customer feeling heard. Include your actual policy or decision in the input so the reply matches what you can genuinely offer.",
    exampleInput:
      "Customer wants a refund on an annual plan they bought 2 months ago; our policy allows prorated refunds within 30 days only.",
    exampleOutput:
      "Hi,\n\nThanks for reaching out, and I understand wanting a refund on your annual plan. I want to be transparent: our refunds are available within the first 30 days of purchase, and it's been about two months, so a full or prorated refund isn't something I'm able to process under our policy.\n\nWhat I can do is make sure your plan doesn't renew automatically, so you won't be charged again. If there's a specific issue that prompted this, I'd genuinely like to help resolve it — just let me know.\n\nBest,",
    faq: [
      {
        question: "Does it always approve the refund?",
        answer:
          "No — it drafts a reply for whatever decision you specify. Include your policy or decision and it will approve or gently decline accordingly.",
      },
      {
        question: "How does it handle a decline?",
        answer:
          "It stays warm and offers an alternative where possible (like stopping auto-renewal), so a no doesn't feel like a dead end.",
      },
      {
        question: "Can I set the refund timeline?",
        answer:
          "Yes — mention your processing time and it will communicate it clearly so the customer knows what to expect.",
      },
    ],
  },
  {
    slug: "support-ticket-priority-note",
    category: "customer-support",
    inputType: "support ticket",
    outputType: "priority note",
    promptTemplate:
      "Read the input support ticket and write a brief internal triage note suggesting a priority level (low/medium/high/urgent) with a one-line justification. Return only the note, no preamble.\n\nTicket:\n{input}",
    seoTitle: "Triage Support Ticket Priority — Free AI Tool",
    seoDescription:
      "Get a suggested priority level and justification for any support ticket. Free, no signup required.",
    h1: "Suggest a Ticket Priority",
    introCopy:
      "Triage is a judgment call made dozens of times a day, and consistency slips when you're busy. This tool reads a ticket and suggests a priority level — low, medium, high, or urgent — with a one-line justification, giving you a quick second opinion for your triage queue. It's a starting recommendation, not a policy engine: you make the final call, but it helps flag the ticket that mentions a security issue or a total outage before it gets buried.",
    exampleInput:
      "None of our team can log in this morning, we get a 500 error, this is blocking our whole company from working",
    exampleOutput:
      "Priority: Urgent — Complete login outage affecting an entire customer organization (500 error), blocking all work. Business-critical and time-sensitive; escalate immediately.",
    faq: [
      {
        question: "Does it decide priority for me?",
        answer:
          "It suggests a level with reasoning as a second opinion. Your team's SLAs and judgment should make the final determination.",
      },
      {
        question: "What signals does it weigh?",
        answer:
          "Things like scope of impact, business criticality, urgency, and keywords such as outage or security that typically raise priority.",
      },
      {
        question: "Can I adapt it to my priority scale?",
        answer:
          "It uses low/medium/high/urgent by default; mention your own scale and it will map its recommendation to it.",
      },
    ],
  },
  {
    slug: "canned-response-personalizer",
    category: "customer-support",
    inputType: "canned response + context",
    outputType: "personalized response",
    promptTemplate:
      "Personalize the input canned support response for the specific customer context provided, so it feels human and specific rather than templated. Keep the core information. Return only the personalized response, no preamble.\n\nInput:\n{input}",
    seoTitle: "Personalize Canned Support Responses — Free AI Tool",
    seoDescription:
      "Make a templated support reply feel personal and specific to the customer. Free, no signup required.",
    h1: "Personalize a Canned Response",
    introCopy:
      "Canned responses are efficient but obvious — customers can tell when they've received a template, and it undercuts the sense that anyone actually read their message. This tool takes a canned response plus a bit of context about the specific customer and situation, and rewrites it to feel personal and attentive while keeping the core information intact. It's the antidote to the copy-paste feel: same efficiency, but the reply reads like it was written for this person.",
    exampleInput:
      "Canned response: 'Thanks for reaching out. To reset your password, click Forgot Password on the login page.' Context: customer named Priya, already tried that and didn't get the email.",
    exampleOutput:
      "Hi Priya,\n\nThanks for the details — and sorry the reset email didn't come through when you tried Forgot Password. That usually points to the email landing in spam or the address on file being different from the one you're checking. Could you confirm the email associated with your account? If it's correct, I'll trigger a fresh reset link from our side and keep an eye out to make sure it reaches you this time.\n\nBest,",
    faq: [
      {
        question: "Do I need to provide customer context?",
        answer:
          "Yes — the more context you give (name, what they've tried, their situation), the more genuinely personalized the result feels.",
      },
      {
        question: "Does it keep the key information from the template?",
        answer:
          "Yes — the core instructions or information stay intact; it changes the wrapping so the reply feels specific to the customer.",
      },
      {
        question: "How is this different from the macro generator?",
        answer:
          "The macro generator creates reusable templates; this one takes an existing template and tailors it to one specific customer.",
      },
    ],
  },

  // ---------- faq ----------
  {
    slug: "product-description-to-faq",
    category: "faq",
    inputType: "product description",
    outputType: "faq",
    promptTemplate:
      "Generate a short FAQ (3-5 question-and-answer pairs) that customers would likely ask about the product described in the input. Return only the FAQ, no preamble.\n\nProduct:\n{input}",
    seoTitle: "Generate an FAQ from a Product Description — Free AI Tool",
    seoDescription:
      "Turn a product description into the FAQ customers actually want. Free, no signup required.",
    h1: "Generate an FAQ from a Product Description",
    introCopy:
      "A product page without an FAQ leaves buyers with unanswered questions — and unanswered questions become abandoned carts or support tickets. This tool reads a product description and generates the questions customers are most likely to ask, with answers drawn from the description. It anticipates the practical concerns — compatibility, sizing, what's included — that a marketing description tends to skip. Use it to seed the FAQ section of a product page before real questions start coming in.",
    exampleInput:
      "A stainless steel insulated water bottle, 24oz, keeps drinks cold for 24 hours and hot for 12, dishwasher safe, comes in 5 colors.",
    exampleOutput:
      "**Is it dishwasher safe?**\nYes — the bottle is fully dishwasher safe.\n\n**How long does it keep drinks cold or hot?**\nUp to 24 hours cold and 12 hours hot.\n\n**What size is it?**\nIt holds 24oz.\n\n**What colors are available?**\nIt comes in five color options.\n\n**Is it made of plastic?**\nNo — it's stainless steel with insulation.",
    faq: [
      {
        question: "Where do the answers come from?",
        answer:
          "From the description you provide. For questions it can't answer from the description, it flags the gap rather than inventing specifics.",
      },
      {
        question: "How many questions does it generate?",
        answer:
          "Usually three to five — the ones customers most commonly ask about that kind of product.",
      },
      {
        question: "Can it invent details not in my description?",
        answer:
          "It sticks to your description for facts. If a common question isn't covered, add that detail to your input so the answer is accurate.",
      },
    ],
  },
  {
    slug: "support-ticket-to-faq",
    category: "faq",
    inputType: "support tickets",
    outputType: "faq",
    promptTemplate:
      "From the input set of recurring support questions or tickets, generate a clean FAQ with clear question-and-answer pairs. Return only the FAQ, no preamble.\n\nQuestions:\n{input}",
    seoTitle: "Build an FAQ from Support Questions — Free AI Tool",
    seoDescription:
      "Turn recurring support questions into a polished FAQ. Free, no signup required.",
    h1: "Build an FAQ from Support Questions",
    introCopy:
      "The best FAQ is built from the questions customers actually ask, not the ones you imagine they'd ask. This tool takes a batch of recurring support questions or tickets and turns them into a clean, deduplicated FAQ. Where the single-ticket tool handles one question at a time, this one processes several at once, merging near-duplicates and organizing them into a coherent set — ideal for turning a month of repeated questions into a help-center section.",
    exampleInput:
      "how do I cancel? can I cancel anytime? do I get a refund if I cancel? where's the cancel button?",
    exampleOutput:
      "**How do I cancel my subscription?**\nGo to Settings → Billing and click Cancel Subscription. You can cancel anytime.\n\n**Will I get a refund if I cancel?**\nCancelling stops future charges; you keep access until the end of your current billing period. Past charges aren't refunded unless covered by our refund policy.",
    faq: [
      {
        question: "Does it merge similar questions?",
        answer:
          "Yes — near-duplicate phrasings like \"how do I cancel\" and \"where's the cancel button\" are consolidated into one clear entry.",
      },
      {
        question: "How is this different from the single-ticket FAQ tool?",
        answer:
          "This processes a batch of questions at once and deduplicates them; the single-ticket tool converts one resolved ticket into one entry.",
      },
      {
        question: "How many questions can I paste?",
        answer:
          "A batch works well. Very large sets are better done in a few groups to keep the resulting FAQ focused and organized.",
      },
    ],
  },
  {
    slug: "faq-answer-shortener",
    category: "faq",
    inputType: "faq answer",
    outputType: "shortened answer",
    promptTemplate:
      "Shorten the input FAQ answer to be as concise as possible while keeping all essential information. Return only the shortened answer, no preamble.\n\nAnswer:\n{input}",
    seoTitle: "Shorten FAQ Answers — Free AI Tool",
    seoDescription:
      "Trim wordy FAQ answers down to the essentials. Free, no signup required.",
    h1: "Shorten an FAQ Answer",
    introCopy:
      "FAQ answers work best when they're scannable — a customer wants the answer in one glance, not three paragraphs. This tool trims a wordy answer down to its essential information without dropping anything a reader needs. It's for tightening up an FAQ that's grown bloated, where over-explaining has made the answers harder to use than the questions. Paste a long-winded answer and get back the lean version.",
    exampleInput:
      "Well, if you'd like to update your billing information, what you'll want to do is first log into your account, and then once you're logged in, navigate over to the settings area, and from there you should see a billing section where you can go ahead and update your card details.",
    exampleOutput:
      "Log in, go to Settings → Billing, and update your card details there.",
    faq: [
      {
        question: "Will it drop important information?",
        answer:
          "No — it removes filler and redundancy while keeping every essential detail the reader needs to act on.",
      },
      {
        question: "How short will the answer be?",
        answer:
          "As short as the information allows — often a single sentence for a simple procedural answer.",
      },
      {
        question: "Is this good for a whole FAQ page?",
        answer:
          "Yes — running each answer through it produces a consistently tight, scannable FAQ that's easier for customers to use.",
      },
    ],
  },
  {
    slug: "faq-tone-formalizer",
    category: "faq",
    inputType: "faq answer",
    outputType: "formal answer",
    promptTemplate:
      "Rewrite the input FAQ answer in a more formal, professional tone while keeping the meaning and all information. Return only the rewritten answer, no preamble.\n\nAnswer:\n{input}",
    seoTitle: "Make FAQ Answers More Formal — Free AI Tool",
    seoDescription:
      "Rewrite casual FAQ answers in a polished, professional tone. Free, no signup required.",
    h1: "Formalize an FAQ Answer",
    introCopy:
      "A casual FAQ tone fits a consumer app but not an enterprise product, a financial service, or a regulated industry where customers expect a certain gravity. This tool rewrites an FAQ answer in a more formal, professional register while preserving the information exactly. It's for teams whose brand voice needs to read as authoritative and buttoned-up, turning a breezy answer into one that fits a more serious context without becoming stiff or unreadable.",
    exampleInput:
      "Nope, there's no setup fee! You can just jump right in and start using it whenever you want.",
    exampleOutput:
      "There is no setup fee. You may begin using the service immediately upon signing up.",
    faq: [
      {
        question: "Will it make the answer sound stiff?",
        answer:
          "It aims for polished and professional, not cold or bureaucratic — formal enough for a serious brand while still readable.",
      },
      {
        question: "Is there a tool to go the other way?",
        answer:
          "This one formalizes. To make answers warmer or more casual, you'd want a friendlier tone rewrite instead.",
      },
      {
        question: "Does it keep all the facts?",
        answer:
          "Yes — only the tone changes. Every piece of information in the original answer is preserved.",
      },
    ],
  },
  {
    slug: "feature-list-to-faq",
    category: "faq",
    inputType: "feature list",
    outputType: "faq",
    promptTemplate:
      "Generate an FAQ from the input product feature list, anticipating questions users would ask about each feature. Return only the FAQ, no preamble.\n\nFeatures:\n{input}",
    seoTitle: "Turn a Feature List into an FAQ — Free AI Tool",
    seoDescription:
      "Convert a product feature list into an anticipatory FAQ. Free, no signup required.",
    h1: "Turn a Feature List into an FAQ",
    introCopy:
      "A feature list tells customers what a product has; an FAQ tells them how it works and whether it fits their needs. This tool bridges the two, reading a list of features and generating the questions users would naturally ask about each — the practical follow-ups a bare bullet list leaves open. It's useful when you have a spec or feature rundown and want to preempt the questions that features alone tend to raise.",
    exampleInput:
      "- Real-time collaboration\n- Offline mode\n- Version history\n- Export to PDF and Word",
    exampleOutput:
      "**Can multiple people edit at the same time?**\nYes — real-time collaboration lets teammates work in the same document simultaneously.\n\n**Does it work without internet?**\nYes — offline mode lets you keep working, and changes sync when you reconnect.\n\n**Can I recover an earlier version?**\nYes — version history lets you view and restore previous versions.\n\n**What formats can I export to?**\nYou can export to both PDF and Word.",
    faq: [
      {
        question: "How is this different from the product-description-to-FAQ tool?",
        answer:
          "This starts from a structured feature list and asks a question per feature; the description tool works from prose marketing copy.",
      },
      {
        question: "Does it ask more than one question per feature?",
        answer:
          "Usually one strong question per feature, though a particularly rich feature may prompt a couple of related questions.",
      },
      {
        question: "Can I use this before launch?",
        answer:
          "Yes — it's ideal pre-launch when you have a feature spec but no real customer questions yet to seed the FAQ.",
      },
    ],
  },
  {
    slug: "faq-from-common-questions",
    category: "faq",
    inputType: "questions",
    outputType: "faq",
    promptTemplate:
      "Turn the input list of raw questions into a polished FAQ with clear, helpful answers. Where an answer isn't obvious, write a sensible general answer and note it may need review. Return only the FAQ, no preamble.\n\nQuestions:\n{input}",
    seoTitle: "Turn Questions into a Polished FAQ — Free AI Tool",
    seoDescription:
      "Give a list of questions and get a clean FAQ with answers. Free, no signup required.",
    h1: "Turn Questions into an FAQ",
    introCopy:
      "Sometimes you've collected the questions but not written the answers — from a sales call, a survey, or your own brainstorm. This tool takes a raw list of questions and turns them into a polished FAQ, writing clear answers for each and grouping them sensibly. Where it can't know the exact answer, it drafts a sensible general one and flags it for your review, so you get a near-complete FAQ that just needs your factual sign-off.",
    exampleInput:
      "Is there a free trial? How long does shipping take? Do you ship internationally? Can I return it?",
    exampleOutput:
      "**Is there a free trial?**\nYes — [confirm trial length]. You can try the product before committing to a paid plan.\n\n**How long does shipping take?**\nTypically [X business days] within [region]. *(Review to confirm your actual timeframe.)*\n\n**Do you ship internationally?**\n[Yes/No — confirm.] International shipping details and rates apply where available.\n\n**Can I return it?**\nYes — returns are accepted within [return window]; see our returns policy for details.",
    faq: [
      {
        question: "What if I don't know some of the answers?",
        answer:
          "It drafts a sensible general answer with a placeholder or a review note, so you can fill in the specifics rather than starting blank.",
      },
      {
        question: "How is this different from the support-ticket FAQ tool?",
        answer:
          "That one starts from real tickets you've resolved; this one starts from a raw list of questions and drafts the answers for you.",
      },
      {
        question: "Should I review the output?",
        answer:
          "Yes — always confirm the factual answers, especially any it flagged with placeholders, before publishing.",
      },
    ],
  },
  {
    slug: "faq-answer-simplifier",
    category: "faq",
    inputType: "faq answer",
    outputType: "simplified answer",
    promptTemplate:
      "Rewrite the input FAQ answer in simpler, plainer language so any customer can understand it, without losing accuracy. Return only the simplified answer, no preamble.\n\nAnswer:\n{input}",
    seoTitle: "Simplify FAQ Answers — Free AI Tool",
    seoDescription:
      "Rewrite jargon-heavy FAQ answers in plain language anyone understands. Free, no signup required.",
    h1: "Simplify an FAQ Answer",
    introCopy:
      "An FAQ answer full of jargon defeats its own purpose — the whole point is to help someone who doesn't already understand. This tool rewrites an answer in plainer language a non-expert can follow, without sacrificing accuracy. It differs from the shortener, which cuts length; this one lowers the reading level, replacing technical terms and convoluted phrasing with everyday words. It's for FAQs on technical products where the answers were written by people too close to the subject.",
    exampleInput:
      "Authentication tokens are invalidated upon password rotation, requiring re-authentication across all active sessions.",
    exampleOutput:
      "When you change your password, you'll be signed out everywhere and will need to log back in. This keeps your account secure.",
    faq: [
      {
        question: "How is this different from the FAQ shortener?",
        answer:
          "The shortener cuts length; this one lowers the reading level and removes jargon so a non-expert can understand it.",
      },
      {
        question: "Does simplifying lose accuracy?",
        answer:
          "No — it keeps the meaning correct while replacing technical terms with plain equivalents and clearer phrasing.",
      },
      {
        question: "Who is this best for?",
        answer:
          "Teams with technical products whose FAQ answers were written by insiders and read as too dense for everyday customers.",
      },
    ],
  },
  {
    slug: "policy-to-faq",
    category: "faq",
    inputType: "policy text",
    outputType: "faq",
    promptTemplate:
      "Turn the input policy text into an FAQ that answers the practical questions customers have about it, in plain language. Return only the FAQ, no preamble.\n\nPolicy:\n{input}",
    seoTitle: "Turn a Policy into an FAQ — Free AI Tool",
    seoDescription:
      "Convert dense policy text into a plain-language customer FAQ. Free, no signup required.",
    h1: "Turn a Policy into an FAQ",
    introCopy:
      "Nobody reads the full policy document, but everyone has questions the policy answers. This tool reads a policy — returns, shipping, privacy, cancellation — and turns it into an FAQ that surfaces the practical questions customers actually have, answered in plain language. It's a way to make dense terms accessible without rewriting the legal text itself: the policy stays authoritative, and the FAQ makes it usable. Note it summarizes for clarity, so the original policy remains the binding version.",
    exampleInput:
      "Returns accepted within 30 days of delivery for unused items in original packaging. Refunds issued to original payment method within 5-10 business days of receiving the return. Shipping costs non-refundable.",
    exampleOutput:
      "**How long do I have to return an item?**\n30 days from delivery.\n\n**What condition does the item need to be in?**\nUnused and in its original packaging.\n\n**When will I get my refund?**\nWithin 5–10 business days after we receive your return, to your original payment method.\n\n**Do I get my shipping cost back?**\nNo — shipping costs are non-refundable.",
    faq: [
      {
        question: "Does the FAQ replace my actual policy?",
        answer:
          "No — it's a plain-language summary for convenience. Your original policy remains the authoritative, binding version.",
      },
      {
        question: "What kinds of policies work?",
        answer:
          "Returns, shipping, privacy, cancellation, warranty — any policy customers commonly have practical questions about.",
      },
      {
        question: "Will it simplify the legal language?",
        answer:
          "Yes — it answers in everyday terms, though you should confirm the summary accurately reflects the policy before publishing.",
      },
    ],
  },
  {
    slug: "faq-expander",
    category: "faq",
    inputType: "short faq answer",
    outputType: "expanded answer",
    promptTemplate:
      "Expand the input brief FAQ answer into a more complete, helpful answer that anticipates follow-up questions, without padding. Return only the expanded answer, no preamble.\n\nAnswer:\n{input}",
    seoTitle: "Expand Short FAQ Answers — Free AI Tool",
    seoDescription:
      "Turn a one-line FAQ answer into a complete, helpful response. Free, no signup required.",
    h1: "Expand an FAQ Answer",
    introCopy:
      "Sometimes an FAQ answer is too terse — a curt \"Yes\" that leaves the customer with three more questions and no way to resolve them without contacting support. This tool expands a brief answer into a fuller one that anticipates the obvious follow-ups, without padding it out with filler. It's the counterpart to the shortener: use this when an answer is under-explained and generating extra tickets, and the shortener when it's over-explained.",
    exampleInput: "Yes, you can integrate with Slack.",
    exampleOutput:
      "Yes — you can connect the app to Slack. To set it up, go to Settings → Integrations, choose Slack, and authorize access to your workspace. Once connected, you'll receive notifications in the channel you select, and you can adjust which events trigger a notification at any time.",
    faq: [
      {
        question: "Won't expanding just add filler?",
        answer:
          "No — it adds genuinely useful detail like setup steps and follow-up answers, not padding for length's sake.",
      },
      {
        question: "When should I expand versus shorten?",
        answer:
          "Expand when a terse answer leaves customers with unanswered follow-ups; shorten when an answer is bloated and hard to scan.",
      },
      {
        question: "Where does the added detail come from?",
        answer:
          "It infers reasonable detail from the answer's context. Review it to make sure specifics like menu paths match your actual product.",
      },
    ],
  },
  {
    slug: "onboarding-doc-to-faq",
    category: "faq",
    inputType: "onboarding doc",
    outputType: "faq",
    promptTemplate:
      "Turn the input onboarding or getting-started document into an FAQ covering the questions new users would ask while getting set up. Return only the FAQ, no preamble.\n\nDoc:\n{input}",
    seoTitle: "Turn Onboarding Docs into an FAQ — Free AI Tool",
    seoDescription:
      "Convert getting-started documentation into a new-user FAQ. Free, no signup required.",
    h1: "Turn an Onboarding Doc into an FAQ",
    introCopy:
      "New users rarely read onboarding docs start to finish — they scan for the answer to whatever's blocking them right now. This tool reformats a getting-started document into an FAQ organized around the questions new users actually have during setup, making the same information findable at the moment of need. It's for teams with solid onboarding content that isn't being read because its linear format doesn't match how people look for help.",
    exampleInput:
      "Getting started: After signing up, create your first project from the dashboard. Invite teammates via the Members tab. Connect your data source under Integrations. You can customize your workspace theme in Settings.",
    exampleOutput:
      "**How do I create my first project?**\nFrom the dashboard, click to create a new project after signing up.\n\n**How do I invite teammates?**\nGo to the Members tab and send invites from there.\n\n**How do I connect my data?**\nOpen Integrations and connect your data source.\n\n**Can I customize how my workspace looks?**\nYes — change the theme under Settings.",
    faq: [
      {
        question: "Why convert a doc I already have?",
        answer:
          "An FAQ format matches how new users search for help — by question — so the same content gets used at the moment of need.",
      },
      {
        question: "Does it keep all the steps?",
        answer:
          "Yes — it reorganizes the doc's content into question-answer form rather than dropping any of the guidance.",
      },
      {
        question: "Is this good for a help center?",
        answer:
          "Yes — the resulting FAQ slots neatly into a help center alongside entries built from real support tickets.",
      },
    ],
  },

  // ---------- survey ----------
  {
    slug: "survey-response-summarizer",
    category: "survey",
    inputType: "survey responses",
    outputType: "summary",
    promptTemplate:
      "Summarize the input set of survey responses into a concise overview of the main sentiments and points raised. Return only the summary, no preamble.\n\nResponses:\n{input}",
    seoTitle: "Summarize Survey Responses — Free AI Tool",
    seoDescription:
      "Condense a batch of survey responses into a clear summary. Free, no signup required.",
    h1: "Summarize Survey Responses",
    introCopy:
      "A pile of open-ended survey responses contains real insight, but reading every one is slow and the patterns are easy to miss. This tool summarizes a batch of responses into a concise overview of the main sentiments and points people raised. It's for anyone who's run a survey and now faces a spreadsheet of free-text answers — giving you the gist quickly so you can decide what deserves a closer look, without reading all several hundred responses line by line.",
    exampleInput:
      "\"Love the product but support is slow\" / \"Great tool, wish it was cheaper\" / \"Support took 3 days to reply\" / \"Works well, pricing is steep for a small team\"",
    exampleOutput:
      "Respondents are largely positive about the product itself, but two concerns recur: slow support response times (multiple mentions of multi-day replies) and pricing being high, especially for small teams. Product quality is a strength; support speed and cost are the main friction points.",
    faq: [
      {
        question: "Does it identify recurring themes?",
        answer:
          "Yes — it surfaces the sentiments and points that come up repeatedly, so you see the patterns rather than isolated comments.",
      },
      {
        question: "How is this different from the theme extractor?",
        answer:
          "This gives a flowing narrative summary; the theme extractor groups responses into a structured list of named themes with counts.",
      },
      {
        question: "How many responses can I summarize?",
        answer:
          "A solid batch works well. For very large datasets, summarize in groups to keep the overview accurate and readable.",
      },
    ],
  },
  {
    slug: "open-ended-feedback-to-themes",
    category: "survey",
    inputType: "feedback responses",
    outputType: "themes",
    promptTemplate:
      "Analyze the input open-ended feedback and group it into the main recurring themes, with a short label and brief description for each. Return only the themed list, no preamble.\n\nFeedback:\n{input}",
    seoTitle: "Group Feedback into Themes — Free AI Tool",
    seoDescription:
      "Turn open-ended feedback into a structured list of recurring themes. Free, no signup required.",
    h1: "Group Feedback into Themes",
    introCopy:
      "Turning a wall of open-ended feedback into themes is the manual, time-consuming heart of qualitative analysis — reading each comment and tagging it into buckets. This tool does the first pass, grouping feedback into recurring themes with a label and short description for each. Unlike a plain summary, it gives you the structured breakdown, so you can see which concerns cluster together and roughly how prominent each one is before diving into the raw comments.",
    exampleInput:
      "app crashes on startup / login is confusing / crashes when I open settings / the sign-in flow is unclear / it froze twice today / hard to find the logout button",
    exampleOutput:
      "**Stability / crashes** — Multiple reports of the app crashing or freezing, on startup and when opening settings.\n\n**Authentication confusion** — Sign-in and login flow described as unclear or confusing.\n\n**Navigation** — Difficulty finding specific controls, e.g. the logout button.",
    faq: [
      {
        question: "How is this different from summarizing responses?",
        answer:
          "A summary is prose; this produces a structured list of named themes, which is more useful for triaging and prioritizing.",
      },
      {
        question: "Does it show how common each theme is?",
        answer:
          "It indicates relative prominence (e.g. \"multiple reports\"). For exact counts, pair it with your own tally.",
      },
      {
        question: "Can I use this for interview notes too?",
        answer:
          "Yes — any body of open-ended qualitative text, like user interview notes, groups into themes the same way.",
      },
    ],
  },
  {
    slug: "survey-question-generator",
    category: "survey",
    inputType: "survey topic",
    outputType: "questions",
    promptTemplate:
      "Generate a set of clear, unbiased survey questions for the input topic or goal, mixing question types where appropriate. Return only the questions, no preamble.\n\nTopic:\n{input}",
    seoTitle: "Generate Survey Questions — Free AI Tool",
    seoDescription:
      "Create clear, unbiased survey questions for any topic. Free, no signup required.",
    h1: "Generate Survey Questions",
    introCopy:
      "Writing survey questions is deceptively hard — leading or ambiguous questions quietly bias your results before you've collected a single response. This tool generates a set of clear, neutral questions for your topic or research goal, mixing rating scales and open-ended prompts where appropriate. It's a strong starting point for a survey that will actually produce trustworthy data, written to avoid the common traps of double-barreled or loaded questions.",
    exampleInput: "I want to measure how satisfied customers are with our onboarding experience",
    exampleOutput:
      "1. How would you rate your overall onboarding experience? (1–5)\n2. How easy was it to get started with the product? (Very easy – Very difficult)\n3. Was there any point during onboarding where you felt stuck? (Yes/No)\n4. If yes, what caused the difficulty? (Open-ended)\n5. What would have made your onboarding smoother? (Open-ended)",
    faq: [
      {
        question: "Are the questions unbiased?",
        answer:
          "It's written to avoid leading and double-barreled questions, which is where survey bias usually creeps in. Still give them a review before launching.",
      },
      {
        question: "Does it mix question types?",
        answer:
          "Yes — it combines rating scales, yes/no, and open-ended questions as appropriate to your goal.",
      },
      {
        question: "How many questions does it generate?",
        answer:
          "Enough to cover the topic without survey fatigue — typically a focused handful rather than an exhaustive list.",
      },
    ],
  },
  {
    slug: "nps-comment-summarizer",
    category: "survey",
    inputType: "NPS comments",
    outputType: "summary",
    promptTemplate:
      "Summarize the input NPS survey comments, highlighting what promoters praise and what detractors criticize. Return only the summary, no preamble.\n\nComments:\n{input}",
    seoTitle: "Summarize NPS Comments — Free AI Tool",
    seoDescription:
      "Turn NPS survey comments into a clear promoter/detractor summary. Free, no signup required.",
    h1: "Summarize NPS Comments",
    introCopy:
      "An NPS score gives you a number, but the comments are where the reasons live — and they split naturally into what promoters love and what detractors can't stand. This tool summarizes NPS comments along exactly that line, highlighting the praise driving your promoters and the criticism dragging down your detractors. It's built for the specific structure of NPS feedback, giving you the actionable why behind the score without reading every verbatim response.",
    exampleInput:
      "Promoter: \"fast and reliable, love it\" / Detractor: \"buggy on mobile\" / Promoter: \"support is amazing\" / Detractor: \"too expensive for what it does\" / Detractor: \"mobile app crashes\"",
    exampleOutput:
      "**Promoters** praise the product's speed and reliability and highlight excellent support as a standout.\n\n**Detractors** center on two issues: a buggy, crash-prone mobile app and pricing that feels too high for the perceived value.\n\nTakeaway: mobile stability and pricing perception are the main drags on your score; support and reliability are strengths to protect.",
    faq: [
      {
        question: "Does it separate promoters and detractors?",
        answer:
          "Yes — that split is the point. It highlights what each group is saying so you can act on the drivers behind your score.",
      },
      {
        question: "Do I need to label which comments are which?",
        answer:
          "Labeling helps accuracy, but it can also infer sentiment from the comments themselves if labels aren't provided.",
      },
      {
        question: "How is this different from the general survey summarizer?",
        answer:
          "This is tuned to the NPS promoter/detractor structure specifically, rather than summarizing generic survey text.",
      },
    ],
  },
  {
    slug: "survey-results-to-summary",
    category: "survey",
    inputType: "survey results",
    outputType: "report summary",
    promptTemplate:
      "Write a concise report-style summary of the input survey results, noting key findings and notable patterns. Return only the summary, no preamble.\n\nResults:\n{input}",
    seoTitle: "Summarize Survey Results into a Report — Free AI Tool",
    seoDescription:
      "Turn survey results into a concise, report-ready summary. Free, no signup required.",
    h1: "Summarize Survey Results",
    introCopy:
      "After a survey closes, someone has to write up what it found — a summary for the deck, the email, or the report. This tool takes your survey results, quantitative or mixed, and writes a concise report-style summary noting the key findings and notable patterns. Where the response summarizer handles raw open-ended text, this one is aimed at the write-up stage, producing polished language you can drop straight into a findings document or an executive update.",
    exampleInput:
      "72% satisfied overall, satisfaction highest among users under 1 year, top requested feature was dark mode (mentioned by 40%), 15% cited pricing concerns",
    exampleOutput:
      "Overall satisfaction stands at 72%, with newer users (under one year) reporting the highest satisfaction. The most-requested feature by a clear margin was dark mode, cited by 40% of respondents. Pricing surfaced as a concern for a notable minority (15%). Overall, sentiment is positive, with dark mode representing the strongest product opportunity and pricing warranting monitoring.",
    faq: [
      {
        question: "How is this different from the response summarizer?",
        answer:
          "The response summarizer distills raw open-ended text; this produces a polished, report-ready write-up of overall results including figures.",
      },
      {
        question: "Can it handle numbers and percentages?",
        answer:
          "Yes — provide the figures and it will weave them into a clean narrative summary rather than dropping them.",
      },
      {
        question: "Is the output ready for a presentation?",
        answer:
          "It's written in report style suitable for a deck or findings doc, though you may tailor emphasis for your specific audience.",
      },
    ],
  },
  {
    slug: "feedback-to-action-items",
    category: "survey",
    inputType: "feedback",
    outputType: "action items",
    promptTemplate:
      "Turn the input customer feedback into a list of concrete, actionable improvement items for the team. Return only the action items, no preamble.\n\nFeedback:\n{input}",
    seoTitle: "Turn Feedback into Action Items — Free AI Tool",
    seoDescription:
      "Convert customer feedback into a concrete list of things to fix or build. Free, no signup required.",
    h1: "Turn Feedback into Action Items",
    introCopy:
      "Feedback is only valuable if it turns into action, and the gap between \"customers said X\" and \"here's what we'll do about it\" is where a lot of insight dies. This tool converts raw feedback into concrete, actionable improvement items your team can put on a board. Instead of summarizing sentiment, it translates complaints and suggestions into things to build, fix, or investigate — bridging the distance between listening and doing.",
    exampleInput:
      "several people said the export is too slow, a few want a dark mode, someone mentioned the search doesn't find old items",
    exampleOutput:
      "- Investigate and improve export performance (multiple reports of slowness)\n- Add a dark mode option\n- Fix search so it returns older items, not just recent ones",
    faq: [
      {
        question: "Does it just summarize the feedback?",
        answer:
          "No — it translates feedback into concrete things to do (build, fix, investigate), not a sentiment summary.",
      },
      {
        question: "Does it prioritize the items?",
        answer:
          "It notes where something was raised repeatedly, but final prioritization against your roadmap is still your call.",
      },
      {
        question: "Can I feed it survey and support feedback together?",
        answer:
          "Yes — any collection of feedback works, and combining sources often makes the recurring, high-value items clearer.",
      },
    ],
  },
  {
    slug: "survey-response-sentiment-note",
    category: "survey",
    inputType: "survey response",
    outputType: "sentiment note",
    promptTemplate:
      "Read the input survey response and write a brief note classifying its overall sentiment (positive/neutral/negative) with a one-line reason. Return only the note, no preamble.\n\nResponse:\n{input}",
    seoTitle: "Classify Survey Response Sentiment — Free AI Tool",
    seoDescription:
      "Get a quick sentiment classification for any survey response. Free, no signup required.",
    h1: "Classify a Response's Sentiment",
    introCopy:
      "When you're tagging survey responses one by one, a fast, consistent sentiment read speeds the whole pass up. This tool classifies a single response as positive, neutral, or negative, with a one-line reason so the label isn't a black box. It's for spot-checking or hand-tagging individual responses where you want a quick second opinion — the per-response counterpart to the batch tools that summarize or theme a whole dataset at once.",
    exampleInput:
      "The product is fine I guess, does what it says, but nothing about it wowed me and I probably wouldn't recommend it.",
    exampleOutput:
      "Sentiment: Neutral-leaning-negative — Functional satisfaction but no enthusiasm, and an explicit reluctance to recommend, which pulls it below neutral.",
    faq: [
      {
        question: "Does it explain the classification?",
        answer:
          "Yes — it gives a one-line reason so you can see why it landed on a given sentiment rather than trusting a bare label.",
      },
      {
        question: "Can it handle mixed sentiment?",
        answer:
          "Yes — it captures nuance like \"positive but with a caveat\" rather than forcing every response into a rigid bucket.",
      },
      {
        question: "Is this for one response or many?",
        answer:
          "One at a time. For a whole dataset, the theme extractor or response summarizer is the better fit.",
      },
    ],
  },
  {
    slug: "customer-feedback-to-testimonial",
    category: "survey",
    inputType: "positive feedback",
    outputType: "testimonial",
    promptTemplate:
      "Turn the input positive customer feedback into a polished, quotable testimonial while keeping it authentic and not exaggerating. Return only the testimonial, no preamble.\n\nFeedback:\n{input}",
    seoTitle: "Turn Feedback into a Testimonial — Free AI Tool",
    seoDescription:
      "Polish genuine positive feedback into a quotable testimonial. Free, no signup required.",
    h1: "Turn Feedback into a Testimonial",
    introCopy:
      "Buried in your survey results and support inbox are genuine bits of praise that would make great testimonials — if they were a little more polished and quotable. This tool cleans up authentic positive feedback into a testimonial suitable for a landing page or case study, tightening the phrasing without inflating the sentiment or inventing claims. Because it stays true to what the customer actually said, always get their permission before publishing a quote drawn from their feedback.",
    exampleInput:
      "honestly this saved us so much time, we used to spend like a whole day on this every week and now it's basically done in an hour, big fan",
    exampleOutput:
      "\"This has saved us so much time — what used to take a full day every week now takes about an hour. We're big fans.\"",
    faq: [
      {
        question: "Does it exaggerate the feedback?",
        answer:
          "No — it polishes phrasing while staying faithful to the customer's actual sentiment. It won't invent praise they didn't give.",
      },
      {
        question: "Do I need the customer's permission to use it?",
        answer:
          "Yes — always get consent before publishing a testimonial, even one drawn from feedback they submitted.",
      },
      {
        question: "Can I use this for a case study quote?",
        answer:
          "Yes — the polished output works well as a pull quote in case studies, landing pages, or marketing materials.",
      },
    ],
  },
  {
    slug: "survey-question-simplifier",
    category: "survey",
    inputType: "survey question",
    outputType: "simplified question",
    promptTemplate:
      "Rewrite the input survey question to be simpler and clearer, removing ambiguity and jargon, while measuring the same thing. Return only the rewritten question, no preamble.\n\nQuestion:\n{input}",
    seoTitle: "Simplify Survey Questions — Free AI Tool",
    seoDescription:
      "Rewrite confusing survey questions to be clear and unambiguous. Free, no signup required.",
    h1: "Simplify a Survey Question",
    introCopy:
      "A confusing survey question produces confusing data — if respondents interpret it differently, your results measure noise. This tool rewrites a question to be simpler and clearer, stripping out jargon, ambiguity, and double-barreled phrasing while still measuring the same thing. It complements the question generator: use that to write questions from scratch, and this to fix questions you already have that are tripping respondents up.",
    exampleInput:
      "To what extent do you feel that the platform's functionality and overall usability meet your professional needs?",
    exampleOutput: "How well does the platform meet your work needs?",
    faq: [
      {
        question: "Will it still measure the same thing?",
        answer:
          "Yes — it preserves what the question is trying to capture while removing the ambiguity and jargon that muddy responses.",
      },
      {
        question: "Does it fix double-barreled questions?",
        answer:
          "It flags and simplifies them where possible, since asking about two things at once (like functionality *and* usability) yields unclear answers.",
      },
      {
        question: "How does this pair with the question generator?",
        answer:
          "Use the generator to create new questions and this tool to clean up existing ones that are confusing respondents.",
      },
    ],
  },
  {
    slug: "feedback-theme-extractor",
    category: "survey",
    inputType: "mixed feedback",
    outputType: "theme list",
    promptTemplate:
      "Extract the distinct recurring themes from the input mixed feedback and list each with a short label and how often it appears (e.g. mentioned frequently / a few times / once). Return only the theme list, no preamble.\n\nFeedback:\n{input}",
    seoTitle: "Extract Themes from Feedback — Free AI Tool",
    seoDescription:
      "Pull the recurring themes out of a mix of feedback, ranked by frequency. Free, no signup required.",
    h1: "Extract Themes from Feedback",
    introCopy:
      "When feedback comes from everywhere — surveys, reviews, support, sales calls — the signal is in what keeps coming up across all of it. This tool extracts the distinct recurring themes from a mixed pile of feedback and ranks each by roughly how often it appears, so you can tell a widespread issue from a one-off gripe. It's the frequency-aware sibling of the theme grouper: this one emphasizes prominence, helping you prioritize by how many people raised each thing.",
    exampleInput:
      "wish it synced faster / love the design / syncing is slow / the UI is beautiful / sync lag is annoying / would like more integrations / gorgeous interface / sync takes forever",
    exampleOutput:
      "**Sync performance** — mentioned frequently — repeated complaints that syncing is slow or laggy.\n\n**Visual design** — mentioned frequently — strong praise for the interface and overall look.\n\n**Integrations** — mentioned once — a request for more third-party integrations.",
    faq: [
      {
        question: "How does it show frequency?",
        answer:
          "It labels each theme with rough prominence (frequently / a few times / once) so you can prioritize by how widespread it is.",
      },
      {
        question: "How is this different from the theme grouper?",
        answer:
          "Both group feedback, but this one emphasizes how often each theme appears, which is more useful for prioritization.",
      },
      {
        question: "Can it combine feedback from different sources?",
        answer:
          "Yes — that's its strength. Mixing surveys, reviews, and support feedback reveals the themes that recur across channels.",
      },
    ],
  },
];
