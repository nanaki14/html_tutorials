type Props = {
	code: string;
};

export function CodeBlock({ code }: Props) {
	return (
		<pre className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4 text-gray-100 text-sm">
			<code>{code}</code>
		</pre>
	);
}
