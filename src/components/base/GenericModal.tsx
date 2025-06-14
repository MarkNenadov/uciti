import GenericButton from "./GenericButton";

interface GenericModalProps {
    title: string,
    children: React.ReactNode,
    closeHandler: () => void,
    dataTestId?: string
}

export default function GenericModal( {title, children, dataTestId, closeHandler}: GenericModalProps) {
    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-100 dark:bg-black bg-opacity-50 dark:bg-opacity-0"
            aria-labelledby={`modal-title-${title}`}
            data-testid={ dataTestId || "generic-modal"}
            >
        <div 
            className="bg-white dark:bg-black p-6 rounded shadow-md border border-1 border-black dark:border-white dark:text-white text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]"
        >
            <h2 id={`modal-title-${title}`} className="text-xl font-semibold mb-4">{title}</h2>
            <div className="text-left">
                {children}
            </div>
            <GenericButton text="Close" onClick={closeHandler} dataTestId="close-button" />
        </div>
    </div>
    );
}