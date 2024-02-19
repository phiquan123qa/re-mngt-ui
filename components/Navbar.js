import Image from 'next/image';
const Navbar = () => (
    <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image 
                        src="/QMhouse.png"
                        width={140}
                        height={70}
                        alt="Logo"
                    />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">RE Sell</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">RE Rent</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">RE Wiki</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                    </a>
                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Close menu</span>

                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <div className="-mx-3">
                                <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                    Product
                                </button>
                            </div>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div className="py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Navbar