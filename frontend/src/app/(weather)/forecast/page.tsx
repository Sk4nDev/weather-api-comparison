import WeatherOverview from "@/components/Weather/WeatherOverview";
import SearchForm from "@/components/ui/SearchForm";

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <SearchForm buttonText={'Search'} />
      <div className="flex gap-5 mt-10">
        <WeatherOverview />
      </div>
    </div>
  );
}
