interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}

const InfoCard = ({ title, children, right }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg   p-5">
      <div className="flex items-start justify-between gap-4">
        {title && (
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
        )}

        {right}
      </div>
      <div className="mt-3 text-sm text-gray-700">{children}</div>
    </div>
  );
};

export default InfoCard;
