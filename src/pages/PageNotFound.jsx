function PageNotFound() {
    return (
        <div className="h-screen flex items-center justify-center flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-500">404 Error</h2>
            <p className="text-xl font-semibold text-gray-500">
                Opps!!! Page not found
            </p>
        </div>
    );
}

export default PageNotFound;
