#!/usr/bin/env python3
"""Genera la sección /ideas/ desde ideas/posts/*.txt, actualiza la home y el sitemap.
Uso: python3 tools/build_ideas.py
Formato de cada post: líneas 'title:', 'tag:', 'date:', 'source:', luego '---' y párrafos separados por línea en blanco.
"""
import re, html, pathlib, shutil
ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://i-thinnk.com"
MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
e = html.escape

def fecha(d):
    y, m, dd = d.split("-"); return f"{int(dd)} de {MESES[int(m)-1]} de {y}"

posts = []
for f in sorted((ROOT/"ideas/posts").glob("*.txt")):
    head, body = f.read_text(encoding="utf-8").split("\n---\n", 1)
    meta = dict(l.split(": ", 1) for l in head.strip().splitlines())
    meta["slug"] = f.stem
    meta["paras"] = [p.strip() for p in body.strip().split("\n\n") if p.strip()]
    posts.append(meta)
posts.sort(key=lambda p: p["date"], reverse=True)

FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=DM+Mono:wght@400&display=swap" rel="stylesheet">'
CSS = "body{margin:0;background:#fff;font-family:'DM Sans',system-ui,sans-serif;color:#0A0A0A;line-height:1.6;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}a:hover{opacity:.7}.mono{font-family:'DM Mono',ui-monospace,monospace;font-size:12px;letter-spacing:2px;text-transform:uppercase}.card{transition:background .3s ease}.card:hover{background:#F8F6F1}"
NAV = '<div style="background:#0A0A0A;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:24px clamp(24px,5vw,64px);box-sizing:border-box"><a href="/" style="font-weight:700;font-size:22px;letter-spacing:3px;word-spacing:-2px">i+Thinnk®</a><a href="/ideas/" style="font-size:15px;font-weight:500;padding:12px 22px;border:1px solid #B8975A;min-height:44px;box-sizing:border-box;display:inline-flex;align-items:center">Ideas</a></div>'
FOOT = '<footer style="background:#0A0A0A;padding:24px clamp(24px,5vw,64px) 32px;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px"><span class="mono" style="letter-spacing:1px;color:#A89376">© 2026 i+Thinnk® · Los Ángeles, Biobío, Chile</span><a href="/" class="mono" style="letter-spacing:1px;color:#A89376">Volver al inicio</a></footer>'

def page(title, desc, url, body, extra=""):
    return f'''<!doctype html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{url}">
<link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{url}">
<meta property="og:type" content="article"><meta property="og:locale" content="es_CL"><meta property="og:site_name" content="i+Thinnk®">
<meta property="og:image" content="{SITE}/img/og-image.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="{SITE}/img/og-image.png">
{extra}{FONTS}<style>{CSS}</style></head><body>{NAV}<main>{body}</main>{FOOT}</body></html>'''

def ld(obj):
    import json; return '<script type="application/ld+json">'+json.dumps(obj, ensure_ascii=False)+'</script>\n'

def eyebrow(t):
    return f'<div style="display:flex;align-items:center;gap:14px;margin-bottom:24px"><span style="width:28px;height:1px;background:#B8975A;display:block"></span><span class="mono" style="color:#6F6250">{e(t)}</span></div>'

def card(p):
    return f'''<a class="card" href="/ideas/{p["slug"]}/" style="display:flex;flex-direction:column;gap:16px;padding:clamp(24px,2.6vw,36px);background:#fff;box-sizing:border-box;min-height:260px">
<span style="font-family:'DM Mono',ui-monospace,monospace;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8A6E3E">{e(p["tag"])}</span>
<h3 style="margin:0;font-size:clamp(20px,1.9vw,24px);font-weight:500;letter-spacing:-0.025em;line-height:1.2">{e(p["title"])}</h3>
<p style="margin:0;font-size:16px;color:#4A4034;line-height:1.65">{e(p["paras"][1][:150].rsplit(" ",1)[0])}…</p>
<span style="font-family:'DM Mono',ui-monospace,monospace;font-size:12px;text-transform:uppercase;color:#6F6250;margin-top:auto;letter-spacing:1px">{fecha(p["date"])} →</span></a>'''

ORG = {"@type":"Organization","@id":SITE+"/#org","name":"i+Thinnk®","url":SITE+"/"}
AUTH = {"@type":"Person","name":"Alberto Núñez Neumann"}

# páginas de post
for i, p in enumerate(posts):
    url = f'{SITE}/ideas/{p["slug"]}/'
    desc = p["paras"][0][:155].rsplit(" ", 1)[0] + "…"
    paras = "".join(f'<p style="margin:0 0 24px;font-size:19px;line-height:1.7;color:#2a251d">{e(t)}</p>' for t in p["paras"][:-1])
    q = f'<p style="margin:40px 0 0;padding:28px 0 0;border-top:1px solid #B8975A;font-size:clamp(22px,2.4vw,30px);font-weight:500;letter-spacing:-0.03em;line-height:1.25;text-wrap:balance">{e(p["paras"][-1])}</p>'
    others = [o for o in posts if o is not p][:2]
    more = "".join(card(o) for o in others)
    body = f'''<article style="max-width:760px;margin:0 auto;padding:clamp(48px,7vw,96px) clamp(24px,5vw,64px) clamp(40px,5vw,72px);box-sizing:border-box">
{eyebrow(p["tag"])}
<h1 style="margin:0 0 20px;font-weight:500;font-size:clamp(34px,5vw,60px);line-height:1.05;letter-spacing:-0.04em;text-wrap:balance">{e(p["title"])}</h1>
<p class="mono" style="margin:0 0 40px;letter-spacing:1px;color:#6F6250"><time datetime="{p["date"]}">{fecha(p["date"])}</time> · Alberto Núñez</p>
{paras}{q}
<p style="margin:32px 0 0;font-size:14px;color:#6F6250">Fuente: {e(p["source"])}</p>
<div style="margin-top:48px"><a href="/#contacto" style="font-size:16px;font-weight:500;padding:16px 32px;background:#B8975A;color:#0A0A0A;min-height:44px;box-sizing:border-box;display:inline-flex;align-items:center">Conversemos</a></div>
</article>
<section style="padding:0 clamp(24px,5vw,64px) clamp(56px,7vw,96px);box-sizing:border-box"><div style="display:flex;flex-wrap:wrap;gap:1px;background:rgba(10,10,10,0.14);border:1px solid rgba(10,10,10,0.14)">{"".join(f'<div style="flex:1 1 320px;display:flex;flex-direction:column;background:#fff">{card(o)}</div>' for o in others)}</div></section>'''
    schema = ld({"@context":"https://schema.org","@graph":[
        {"@type":"Article","headline":p["title"],"datePublished":p["date"],"dateModified":p["date"],"inLanguage":"es-CL",
         "author":AUTH,"publisher":ORG,"mainEntityOfPage":url,"image":SITE+"/img/og-image.png","about":p["tag"],"isBasedOn":p["source"]},
        {"@type":"BreadcrumbList","itemListElement":[
         {"@type":"ListItem","position":1,"name":"Inicio","item":SITE+"/"},
         {"@type":"ListItem","position":2,"name":"Ideas","item":SITE+"/ideas/"},
         {"@type":"ListItem","position":3,"name":p["title"],"item":url}]}]})
    d = ROOT/"ideas"/p["slug"]; d.mkdir(parents=True, exist_ok=True)
    (d/"index.html").write_text(page(p["title"]+" | i+Thinnk®", desc, url, body, schema), encoding="utf-8")

# índice /ideas/
grid = "".join(f'<div style="flex:1 1 340px;display:flex;flex-direction:column;background:#fff">{card(p)}</div>' for p in posts)
body = f'''<section style="padding:clamp(48px,7vw,96px) clamp(24px,5vw,64px);box-sizing:border-box">
{eyebrow("Ideas · Ingeniería industrial e IA en Chile")}
<h1 style="margin:0 0 20px;font-weight:500;font-size:clamp(38px,6vw,84px);line-height:1;letter-spacing:-0.045em;text-wrap:balance">Lo que vemos en <span style="color:#8A6E3E">planta.</span></h1>
<p style="margin:0 0 56px;font-size:18px;color:#4A4034;max-width:560px">Análisis breves sobre alimento balanceado, automatización y proyectos industriales, desde la experiencia en terreno.</p>
<div style="display:flex;flex-wrap:wrap;gap:1px;background:rgba(10,10,10,0.14);border:1px solid rgba(10,10,10,0.14)">{grid}</div></section>'''
(ROOT/"ideas/index.html").write_text(page("Ideas sobre ingeniería industrial e IA en Chile | i+Thinnk®","Análisis breves sobre alimento balanceado, automatización industrial y proyectos de planta, desde la experiencia en terreno.",SITE+"/ideas/",body,ld({"@context":"https://schema.org","@type":"CollectionPage","name":"Ideas | i+Thinnk®","url":SITE+"/ideas/","inLanguage":"es-CL","publisher":ORG})).replace('og:type" content="article"','og:type" content="website"'), encoding="utf-8")

# bloque en la home
home = (ROOT/"index.html").read_text(encoding="utf-8")
block = f'''<!--IDEAS_START-->
<div id="ideas" style="padding: 0 clamp(24px, 5vw, 64px) clamp(64px, 9vw, 120px); box-sizing: border-box">
<h2 style="margin: 0 0 32px; font: inherit; display: flex; align-items: center; gap: 14px">
<span style="width: 28px; height: 1px; background: #B8975A; display: block"></span>
<span style="font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #6F6250">Ideas sobre ingeniería industrial</span>
</h2>
<div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px 48px; margin-bottom: clamp(32px, 4vw, 56px)">
<p style="margin: 0; font-weight: 500; font-size: clamp(30px, 4vw, 56px); line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance">Lo que vemos <span style="color: #8A6E3E">en planta.</span></p>
<a href="/ideas/" style="font-family: 'DM Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #8A6E3E">Ver todas →</a>
</div>
<style>.card{{transition:background .3s ease}}.card:hover{{background:#F8F6F1}}</style>
<div style="display: flex; flex-wrap: wrap; gap: 1px; background: rgba(10,10,10,0.14); border: 1px solid rgba(10,10,10,0.14)">{"".join(f'<div style="flex:1 1 300px;display:flex;flex-direction:column;background:#fff">{card(p)}</div>' for p in posts[:3])}</div>
</div>
<!--IDEAS_END-->'''
if "<!--IDEAS_START-->" in home:
    home = re.sub(r"<!--IDEAS_START-->.*?<!--IDEAS_END-->", lambda m: block, home, flags=re.S)
else:
    home = home.replace("<!-- PARTNERS -->", block + "\n\n<!-- PARTNERS -->", 1)
(ROOT/"index.html").write_text(home, encoding="utf-8")

# sitemap
urls = [(SITE+"/", __import__("datetime").date.today().isoformat(), "1.0"), (SITE+"/ideas/", posts[0]["date"], "0.8")] + [(f'{SITE}/ideas/{p["slug"]}/', p["date"], "0.6") for p in posts]
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{d}</lastmod>\n    <priority>{pr}</priority>\n  </url>\n" for u,d,pr in urls) + "</urlset>\n"
(ROOT/"sitemap.xml").write_text(sm, encoding="utf-8")
print("posts:", len(posts))
