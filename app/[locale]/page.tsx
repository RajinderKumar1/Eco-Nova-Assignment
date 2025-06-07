import LocalizedPage from '@/components/dynamic/LocalizedPage';
import { locales } from '@/lib/localization';

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

export default function Page({ params }: { params: { locale: string } }) {
  return <LocalizedPage params={params} />;
}
