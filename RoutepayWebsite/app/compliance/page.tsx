"use client";

interface ComplianceItem {
  icon: string;
  header: string;
  paragraph: string;
}

const compliance: ComplianceItem[] = [
  {
    icon: "/images/pci-logo.png",
    header: 'RoutePay is PCIDSS Compliant',
    paragraph:
      'Routepay is PCI-DSS compliant, certified by an independent PCI Qualified Security Assessor (QSA). This ensures secure processing, storage, and transmission of credit card data.',
  },
  {
    icon: "/images/cbn-logo.png",
    header: 'PSSP - Payment Solutions Service Provider',
    paragraph:
      'Routepay is certified as a Payment Solutions Service Provider (PSSP) by the Central Bank of Nigeria (CBN).',
  },
  {
    icon: "/images/ncc-logo.png",
    header: 'VAS - Value Added Services',
    paragraph:
      'Routepay is certified by the Nigerian Communications Commission (NCC) for Value-Added Services (VAS).',
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-[#F5EDED] font-light">
      <div className="py-10 flex flex-col items-center justify-center">
        <p className="w-[109px] bg-[#F05A24] text-white text-center mb-4 lg:mb-[30px] px-2 py-1 rounded-2xl">
          Compliance
        </p>
        <h1 className="text-[40px] text-center max-w-[780px] text-black font-semibold">
          RoutePay maintains the highest standards of compliance possible.
        </h1>
      </div>
      <div className="pb-20 flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center">
        {compliance.map((item, index) => (
          <ComplianceCard
            key={index}
            icon={item.icon}
            header={item.header}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

const ComplianceCard = ({ icon, header, paragraph }: ComplianceItem) => {
  return (
    <div className="relative h-[300px] w-[285px]">
      <div className="bg-[#F05A24] rounded-xl h-[275px] w-[275px] absolute top-0"></div>
      <div className="bg-white rounded-xl h-[275px] w-[275px] absolute -top-2 left-2 px-4 pt-6">
        {icon && <img src={icon} alt="" className="absolute top-2 right-4" />}
        <h4 className="w-[205px] text-2xl text-[#F05A24] mt-4 mb-5 font-medium">
          {header}
        </h4>
        <p className="text-[#4D4A4A] leading-5">{paragraph}</p>
      </div>
    </div>
  );
};
