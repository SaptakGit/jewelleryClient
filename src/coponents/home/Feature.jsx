import { Truck, CreditCard, RotateCcw, PackageCheck } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Free shipping on order above $100",
    icon: <Truck className="w-8 h-8 text-black" />,
  },
  {
    id: 2,
    title: "Flexible Payments",
    desc: "Pay with multiple credit cards",
    icon: <CreditCard className="w-8 h-8 text-black" />,
  },
  {
    id: 3,
    title: "Easy Return",
    desc: "15 Days easy return",
    icon: <RotateCcw className="w-8 h-8 text-black" />,
  },
  {
    id: 4,
    title: "New Arrivals Everyday",
    desc: "We update our collection everyday",
    icon: <PackageCheck className="w-8 h-8 text-black" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map(({ id, title, desc, icon }) => (
          <div key={id} className="border rounded-xl bg-slate-500 p-6 text-center hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center bg-base-200 w-14 h-14 rounded-md mx-auto mb-4">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-base-content">{title}</h3>
            <p className="text-sm text-base-content/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
