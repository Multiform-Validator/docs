export default function MainBg({ children }: { children: React.ReactNode }) {
	return (
		<main
			className="flex min-h-screen flex-col overflow-x-hidden bg-bg1-dark bg-bg1 bg-repeat p-4 transition-all ease-linear"
			style={{ backgroundSize: "7%" }}
		>
			{children}
		</main>
	);
}
