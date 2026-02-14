type Props = {
	title: string;
	description: string;
	children: React.ReactNode;
};

export function DemoBox({ title, description, children }: Props) {
	return (
		<section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<h2 className="mb-2 font-bold text-xl">{title}</h2>
			<p className="mb-4 text-gray-600 text-sm">{description}</p>
			<div className="rounded-md border border-dashed border-gray-300 bg-gray-50 p-4">
				{children}
			</div>
		</section>
	);
}
