import { HomeTemplate }  from '../templates/HomeTemplate';
import { Hero }          from '../organisms/Hero';
import { Marquee }       from '../organisms/Marquee';
import { About }         from '../organisms/About';
import { Markets }       from '../organisms/Markets';
import { Why }           from '../organisms/Why';
import { Vision }        from '../organisms/Vision';
import { Contact }       from '../organisms/Contact';
import { SourcingServices } from '../organisms/SourcingServices';

/**
 * PAGE — HomePage
 * Composes all homepage organisms inside the shared template.
 * When new pages are added (e.g. MarketsPage, AboutPage), follow this
 * same pattern: import HomeTemplate + the relevant organisms.
 */
export function HomePage() {
  return (
    <HomeTemplate>
      <Hero />
      <Marquee />
      <About />
      <Markets />
      <Why />
      <SourcingServices />
      <Vision />
      <Contact />
    </HomeTemplate>
  );
}
