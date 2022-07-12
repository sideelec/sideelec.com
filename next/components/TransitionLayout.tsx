import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const TransitionLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();

    return (
        <Transition
            key={router.route}
            as="div"
            appear={true}
            show={true}
            enter="transition-opacity duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
    );
};

export default TransitionLayout;
