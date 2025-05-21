interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-primary py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-secondary text-lg">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
