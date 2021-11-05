import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const user = {
    name: 'Hacker Hailee',
    email: 'hailee@saas.dev',
    imageUrl:
      '/me.jpg',
  }
  const navigation = [
    // { name: 'Dashboard', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (        
        <div className="flex justify-between h-16">
            <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                <img
                className="block sm:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                />
                <img
                className="hidden sm:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
                />
            </div>
            {/* <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                    item.current
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </a>
                ))}
            </div> */}
            </div>
            <div className="ml-6 flex items-center">
            {/* <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
                <div>
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                </Menu.Button>
                </div>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                        {({ active }) => (
                        <a
                            href={item.href}
                            className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            {item.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </Menu.Items>
                </Transition>
            </Menu>
            </div>
        </div>
    )
}