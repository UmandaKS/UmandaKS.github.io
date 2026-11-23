from pathlib import Path

root = Path(r"C:\Users\asust\Desktop\portfolio2")

# ------------------------------------------------------------------- Hero JSX
hero = root / "src" / "components" / "Hero.jsx"
text = hero.read_text(encoding="utf-8")
pairs = [
    ("            Research · Projects\n", "            Open to Work\n"),
    ('<span className="gradient-text">UMANDA</span>', '<span className="hero__name">UMANDA</span>'),
    ("              Contact Me <Icon name=\"ArrowUpRight\" size={17} />", "              Let&apos;s Talk <Icon name=\"ArrowUpRight\" size={17} />"),
]
for old, new in pairs:
    if old not in text:
        raise SystemExit(f"Missing in Hero.jsx: {old!r}")
    text = text.replace(old, new)
hero.write_text(text, encoding="utf-8")
print("Hero JSX updated")

# ----------------------------------------------------------------------- CSS
css_path = root / "src" / "index.css"
css = css_path.read_text(encoding="utf-8")

def rep(old, new):
    global css
    if old not in css:
        raise SystemExit(f"Missing CSS: {old[:70]!r}")
    css = css.replace(old, new, 1)

# Tighter vertical rhythm between sections.
rep("  padding: 108px 0;", "  padding: 80px 0;")
rep("  margin-bottom: 52px;", "  margin-bottom: 38px;")
rep("  padding: 84px 0;", "  padding: 64px 0;")
rep("  padding: 68px 0;", "  padding: 52px 0;")
rep("  margin-bottom: 36px;", "  margin-bottom: 30px;")
rep("  padding-top: calc(var(--header-height) + 50px);\n  padding-bottom: 80px;",
    "  padding-top: calc(var(--header-height) + 36px);\n  padding-bottom: 56px;")
rep("  margin-top: 26px;\n  font-family: var(--font-display);",
    "  margin-top: 20px;\n  font-family: var(--font-display);")
rep("  gap: 64px;\n}", "  gap: 48px;\n}")

# Crisp, solid name color (removes gradient clipping artifacts on the 'A').
rep(""".hero__title-line {
  display: block;
}""", """.hero__title-line {
  display: block;
}

.hero__name {
  color: var(--accent);
  -webkit-text-fill-color: currentColor;
}""")

# Clean button edges: solid anti-aliased borders and stable compositing.
rep("""  white-space: nowrap;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), background 0.25s var(--ease), border-color 0.25s var(--ease);
}""", """  white-space: nowrap;
  background-clip: padding-box;
  -webkit-background-clip: padding-box;
  isolation: isolate;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), background 0.25s var(--ease), border-color 0.25s var(--ease);
}""")

rep(""".btn--primary {
  background: var(--gradient-brand);
  color: #fff;
  box-shadow: var(--shadow-glow);
}""", """.btn--primary {
  background: linear-gradient(120deg, var(--violet) 0%, var(--blue) 100%);
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
  box-shadow: var(--shadow-glow), inset 0 1px 0 rgba(255, 255, 255, 0.22);
}""")

rep(""".btn--text {
  padding-inline: 8px;
  color: var(--accent);
  background: transparent;
}

.btn--text:hover {
  color: var(--secondary);
}""", """.btn--text {
  padding-inline: 18px;
  border-color: var(--line);
  background: var(--glass);
  color: var(--accent);
}

.btn--text:hover {
  border-color: var(--line-strong);
  background: var(--surface-2);
  color: var(--accent);
}""")

css_path.write_text(css, encoding="utf-8")
print("CSS updated")
