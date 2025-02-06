export const Homeicon = (props: any) => {
    const { color } = props;
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.43457 22.3732V12.3732H15.4346V22.3732M3.43457 9.37317L12.4346 2.37317L21.4346 9.37317V20.3732C21.4346 20.9036 21.2239 21.4123 20.8488 21.7874C20.4737 22.1625 19.965 22.3732 19.4346 22.3732H5.43457C4.90414 22.3732 4.39543 22.1625 4.02036 21.7874C3.64528 21.4123 3.43457 20.9036 3.43457 20.3732V9.37317Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}