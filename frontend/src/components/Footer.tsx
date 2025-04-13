import SocialLinks from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="bg-[#5626f3] text-white fixed bottom-0 py-4 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <SocialLinks />
                <div className="copyright">© Skratch. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer