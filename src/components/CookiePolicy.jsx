import PolicyPage from './PolicyPage.jsx'

const SECTIONS = [
  'intro',
  'whatAreCookies',
  'technologiesUsed',
  'thirdPartyCookies',
  'managing',
  'contact',
]

export default function CookiePolicy() {
  return <PolicyPage titleKey="cookie" sections={SECTIONS} />
}
