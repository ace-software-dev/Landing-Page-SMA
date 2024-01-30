interface TextFooterProps {
    children: React.ReactNode,
    classes?: string,
    size?: string,
}

export default function TextFooter({children, classes, size = 'text-sm '}: TextFooterProps) {
    return (
        <div className={`text-almost-white ${size} text-center font-satoshi font-extralight ${classes}`}>
            {children}
        </div>
    );
}