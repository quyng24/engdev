interface CardProps {
  title: string;
  description: string;
  tag?: React.ReactNode;
  action?: React.ReactNode;
}

export function Card({ title, description, tag, action }: CardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 space-y-3 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-muted text-sm">{description}</p>

      <div className="flex justify-between items-center">
        {tag}
        {action}
      </div>
    </div>
  );
}
