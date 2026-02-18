interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="text-center pb-8">
      <h2 className="text-[32px] font-bold relative text-white font-heading before:content-[''] before:absolute before:block before:w-[120px] before:h-px before:bg-[#ddd] before:bottom-px before:left-[calc(50%-60px)] after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-oil after:bottom-0 after:left-[calc(50%-20px)]">
        {title}
      </h2>
      {children && (
        <div className="text-white w-[85%] text-center mx-auto">
          {children}
        </div>
      )}
    </div>
  );
}
