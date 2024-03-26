import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/type";

type Props = {
    page: string; // directory path of page
    selectedPage: string; 
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // remove space in gotten key - treat the key as enum
    
    
    
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link