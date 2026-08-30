import PolicyPage from './PolicyPage.jsx'

const SECTIONS = [
  'intro',
  'dataController',
  'dataCollected',
  'purposes',
  'thirdParty',
  'retention',
  'minors',
  'rights',
  'contact',
]

export default function PrivacyPolicy() {
  return <PolicyPage titleKey="privacy" sections={SECTIONS} />
}
