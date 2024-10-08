export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="max-w-screen-xl  mx-auto p-10">
            {children}
        </div>
    );
}