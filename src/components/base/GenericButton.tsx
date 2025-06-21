interface GenericButtonProps {
    text: string,
    shortText?: string,
    onClick: () => void,
    dataTestId?: string
    ariaLabel?: string
    launchesModal?: boolean
}

export default function GenericButton( {text, shortText, onClick, dataTestId, ariaLabel, launchesModal}: GenericButtonProps) {
    return (
        <button
            type="button"
            className="bg-gray-50 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-black py-2 px-4 rounded mt-4  border border-1 border-black dark:border-white border-opacity-10"
            onClick={ onClick }
            data-testid={dataTestId || "generic-button"}
            aria-label={ ariaLabel || "button" }
            aria-haspopup={ launchesModal ? "true" : undefined }
        >
            <span className="hidden lg:block dark:text-white" data-testid="large-text-span">
                { text }
            </span>
            <span className="block lg:hidden dark:text-white" data-testid="small-text-span">
                { !!shortText ? shortText : text }
            </span>
        </button>
    );
}