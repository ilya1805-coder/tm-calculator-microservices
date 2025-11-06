import TrademarkCalculator from '@/components/TrademarkCalculator';

export default async function Page() {
  async function getTrademarkClasses() {
    //TODO: in real project must be moved to separate methods
    const res = await fetch(`${process.env.BACKEND_URL}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        {
          classes {
            classId
            description
          }
        }
      `,
      }),

      next: { revalidate: 60 }, // revalidate every 60s if using ISR
    });

    const { data } = await res.json();
    return data.classes;
  }
  const trademarkClasses = await getTrademarkClasses();

  return (
    <div className="font-sans min-h-screen p-6 pb-16 sm:p-12">
      <header className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Trademark Registration Calculator
        </h1>
      </header>

      <section className="flex flex-col gap-8 w-full">
        <TrademarkCalculator trademarkClasses={trademarkClasses} />
      </section>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8"></footer>
    </div>
  );
}
