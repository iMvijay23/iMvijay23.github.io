"""Render scripts/og-card.html to public/og.png (1200x630) with headless Chrome."""
import pathlib, subprocess
root = pathlib.Path(__file__).resolve().parent.parent
chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
subprocess.run([chrome, '--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1',
                '--virtual-time-budget=5000', '--window-size=1200,630',
                f'--screenshot={root / "public/og.png"}', (root / 'scripts/og-card.html').as_uri()],
               check=True, stderr=subprocess.DEVNULL)
print('wrote public/og.png')
