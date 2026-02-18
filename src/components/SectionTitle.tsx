interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="text-center pb-8">
      <h2 className="text-[32px] font-bold relative font-heading after:content-[''] after:absolute after:block after:w-[120px] after:h-[3px] after:bg-oil after:bottom-0 after:left-[calc(50%-60px)]">
        {title}
      </h2>
      {children && (
        <div className="w-[85%] text-center mx-auto">
          {children}
        </div>
      )}
    </div>
  );
}
