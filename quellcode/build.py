t=open('template.html').read()
def safe(s): return s.replace('</script','<\\/script')
for k,f in [('D3','d3.min.js'),('GEO','geo.js'),('CONTENT','content.js'),('APP','app.js')]:
    t=t.replace('/*%s*/'%k, safe(open(f).read()),1)
open('../index.html','w').write(t)
print(len(t))
